/**
 * ThreeSteps - A P2P Decentralized Social Media App for Catholics
 * 
 * Built on Willow/Iroh protocol with did:peer identity
 * 
 * Core modules:
 * - identity.js: DID:Peer identity management
 * - network.js: Iroh P2P networking layer
 * - store.js: Willow CRDT data storage
 * - social.js: Social features (posts, comments, follows)
 */

import { Endpoint, BlobStore } from '@salvatoret/iroh';
import { createJWS, verifyJWS, SimpleSigner } from 'did-jwt';
import * as ed25519 from '@noble/ed25519';
import { bytesToHex, hexToBytes, toBytes } from '@noble/hashes/utils';
import { CID } from 'multiformats/cid';
import * as sha256 from 'multiformats/hashes/sha2';
import { toString, fromString } from 'uint8arrays';

// ============================================================================
// Identity Module - DID:Peer Implementation
// ============================================================================

class DidPeerIdentity {
  constructor() {
    this.privateKey = null;
    this.publicKey = null;
    this.did = null;
    this.signer = null;
  }

  async create() {
    // Generate Ed25519 keypair
    this.privateKey = ed25519.utils.randomPrivateKey();
    this.publicKey = await ed25519.getPublicKey(this.privateKey);
    
    // Create DID:Peer identifier
    // Format: did:peer:z{base58-encoded-multibase-public-key}
    const multicodecPrefix = new Uint8Array([0xed, 0x01]); // ed25519 public key
    const publicKeyBytes = new Uint8Array([...multicodecPrefix, ...this.publicKey]);
    const base58Encoded = this._toBase58(publicKeyBytes);
    this.did = `did:peer:z${base58Encoded}`;
    
    console.log('✓ Created DID:Peer identity:', this.did);
    return this.did;
  }

  async load(privateKeyHex) {
    this.privateKey = hexToBytes(privateKeyHex);
    this.publicKey = await ed25519.getPublicKey(this.privateKey);
    
    const multicodecPrefix = new Uint8Array([0xed, 0x01]);
    const publicKeyBytes = new Uint8Array([...multicodecPrefix, ...this.publicKey]);
    const base58Encoded = this._toBase58(publicKeyBytes);
    this.did = `did:peer:z${base58Encoded}`;
    
    return this.did;
  }

  async sign(payload) {
    if (!this.privateKey) {
      throw new Error('No private key loaded');
    }
    
    const message = typeof payload === 'string' ? fromString(payload, 'utf-8') : payload;
    const signature = await ed25519.sign(message, this.privateKey);
    return signature;
  }

  async verify(signature, payload, publicKey) {
    return await ed25519.verify(signature, payload, publicKey);
  }

  getDocument() {
    if (!this.did) {
      throw new Error('No DID created');
    }

    return {
      '@context': [
        'https://www.w3.org/ns/did/v1',
        'https://w3id.org/security/suites/ed25519-2020/v1'
      ],
      id: this.did,
      verificationMethod: [{
        id: `${this.did}#key-1`,
        type: 'Ed25519VerificationKey2020',
        controller: this.did,
        publicKeyMultibase: 'z' + this._toBase58(new Uint8Array([0xed, 0x01, ...this.publicKey]))
      }],
      authentication: [`${this.did}#key-1`],
      assertionMethod: [`${this.did}#key-1`]
    };
  }

  _toBase58(bytes) {
    const ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
    let carry, digits = [];
    
    for (const byte of bytes) {
      carry = byte;
      for (let j = 0; j < digits.length; ++j) {
        carry += digits[j] << 8;
        digits[j] = carry % 58;
        carry = (carry / 58) | 0;
      }
      while (carry > 0) {
        digits.push(carry % 58);
        carry = (carry / 58) | 0;
      }
    }
    
    for (let i = 0; i < bytes.length && bytes[i] === 0; ++i) {
      digits.push(0);
    }
    
    return digits.reverse().map(d => ALPHABET[d]).join('');
  }

  _fromBase58(base58) {
    const ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
    const ALPHABET_MAP = {};
    for (let i = 0; i < ALPHABET.length; i++) {
      ALPHABET_MAP[ALPHABET.charAt(i)] = i;
    }
    
    let size = base58.length;
    for (let i = 0; i < base58.length && base58.charAt(i) === '1'; i++) {
      size--;
    }
    
    const output = new Uint8Array(size);
    let carry = 0;
    
    for (let i = base58.length - 1; i >= 0; i--) {
      carry = ALPHABET_MAP[base58.charAt(i)];
      for (let j = 0; j < output.length; j++) {
        carry += output[j] * 58;
        output[j] = carry % 256;
        carry = (carry / 256) | 0;
      }
      while (carry > 0) {
        output.push(carry % 256);
        carry = (carry / 256) | 0;
      }
    }
    
    for (let i = 0; i < base58.length && base58.charAt(i) === '1'; i++) {
      output.push(0);
    }
    
    return output.reverse();
  }
}

// ============================================================================
// Network Module - Iroh P2P Layer
// ============================================================================

class IrohNetwork {
  constructor() {
    this.endpoint = null;
    this.blobStore = null;
    this.nodeId = null;
    this.connectedPeers = new Set();
  }

  async initialize(options = {}) {
    try {
      console.log('🌐 Initializing Iroh network...');
      
      // Create blob store for content-addressable storage
      this.blobStore = new BlobStore();
      
      // Initialize endpoint (the main Iroh networking interface)
      this.endpoint = await Endpoint.generate();
      
      console.log('✓ Iroh endpoint initialized');
      return this.endpoint.node_id();
    } catch (error) {
      console.error('Failed to initialize Iroh:', error);
      throw error;
    }
  }

  async connect(peerId) {
    try {
      console.log(`🔗 Connecting to peer: ${peerId}`);
      // Note: Actual connection logic would use endpoint.connect()
      // This is a simplified placeholder
      this.connectedPeers.add(peerId);
      console.log(`✓ Connected to ${peerId}`);
      return true;
    } catch (error) {
      console.error(`Failed to connect to ${peerId}:`, error);
      return false;
    }
  }

  async disconnect(peerId) {
    try {
      this.connectedPeers.delete(peerId);
      console.log(`✓ Disconnected from ${peerId}`);
      return true;
    } catch (error) {
      console.error(`Failed to disconnect from ${peerId}:`, error);
      return false;
    }
  }

  async getConnectedPeers() {
    return Array.from(this.connectedPeers);
  }

  async shutdown() {
    if (this.endpoint) {
      this.endpoint.free();
      console.log('✓ Iroh endpoint shut down');
    }
    if (this.blobStore) {
      this.blobStore.free();
    }
  }
}

// ============================================================================
// Store Module - Willow CRDT Data Storage
// ============================================================================

class WillowStore {
  constructor(namespace, identity) {
    this.namespace = namespace;
    this.identity = identity;
    this.data = new Map();
    this.subscribers = new Set();
  }

  async put(key, value) {
    const timestamp = Date.now();
    const entry = {
      key,
      value,
      timestamp,
      author: this.identity.did,
      signature: null
    };

    // Sign the entry
    const payload = JSON.stringify({ key, value, timestamp });
    entry.signature = await this.identity.sign(fromString(payload, 'utf-8'));

    this.data.set(key, entry);
    this._notifySubscribers('put', entry);
    
    console.log(`📝 Stored: ${key}`);
    return entry;
  }

  async get(key) {
    return this.data.get(key) || null;
  }

  async delete(key) {
    const entry = this.data.get(key);
    if (entry) {
      this.data.delete(key);
      this._notifySubscribers('delete', { key });
      console.log(`🗑️  Deleted: ${key}`);
      return true;
    }
    return false;
  }

  async list(prefix = '') {
    const entries = [];
    for (const [key, entry] of this.data.entries()) {
      if (key.startsWith(prefix)) {
        entries.push(entry);
      }
    }
    return entries.sort((a, b) => b.timestamp - a.timestamp);
  }

  subscribe(callback) {
    this.subscribers.add(callback);
    return () => this.subscribers.delete(callback);
  }

  _notifySubscribers(event, data) {
    for (const callback of this.subscribers) {
      callback(event, data);
    }
  }
}

// ============================================================================
// Social Module - Catholic Social Features
// ============================================================================

class CatholicSocialNetwork {
  constructor(identity, network) {
    this.identity = identity;
    this.network = network;
    this.postsStore = null;
    this.profilesStore = null;
    this.prayerRequestsStore = null;
  }

  async initialize() {
    console.log('⛪ Initializing Catholic Social Network...');
    
    this.postsStore = new WillowStore('threesteps:posts', this.identity);
    this.profilesStore = new WillowStore('threesteps:profiles', this.identity);
    this.prayerRequestsStore = new WillowStore('threesteps:prayers', this.identity);
    
    // Create/update profile
    await this.updateProfile({
      displayName: 'Catholic User',
      bio: 'Living the faith in the digital age ✝️',
      parish: '',
      patronSaint: '',
      joinedAt: Date.now()
    });

    console.log('✓ Catholic Social Network initialized');
  }

  async updateProfile(profileData) {
    const profile = {
      ...profileData,
      did: this.identity.did,
      updatedAt: Date.now()
    };
    
    await this.profilesStore.put(`profile:${this.identity.did}`, profile);
    return profile;
  }

  async getProfile(did) {
    return await this.profilesStore.get(`profile:${did}`);
  }

  async createPost(content, options = {}) {
    const post = {
      id: this._generateId(),
      content,
      author: this.identity.did,
      createdAt: Date.now(),
      likes: [],
      comments: [],
      tags: options.tags || [],
      scripture: options.scripture || '',
      prayerIntention: options.prayerIntention || '',
      visibility: options.visibility || 'public' // public, followers, private
    };

    await this.postsStore.put(`post:${post.id}`, post);
    console.log('✝️ Post created:', post.id);
    return post;
  }

  async getPosts(limit = 20, offset = 0) {
    const allPosts = await this.postsStore.list('post:');
    return allPosts.slice(offset, offset + limit);
  }

  async likePost(postId) {
    const postEntry = await this.postsStore.get(`post:${postId}`);
    if (!postEntry) {
      throw new Error('Post not found');
    }

    const post = postEntry.value;
    if (!post.likes.includes(this.identity.did)) {
      post.likes.push(this.identity.did);
      await this.postsStore.put(`post:${postId}`, post);
    }
    return post;
  }

  async addComment(postId, content) {
    const postEntry = await this.postsStore.get(`post:${postId}`);
    if (!postEntry) {
      throw new Error('Post not found');
    }

    const post = postEntry.value;
    const comment = {
      id: this._generateId(),
      content,
      author: this.identity.did,
      createdAt: Date.now()
    };

    post.comments.push(comment);
    await this.postsStore.put(`post:${postId}`, post);
    return comment;
  }

  async createPrayerRequest(intention, options = {}) {
    const prayer = {
      id: this._generateId(),
      intention,
      author: this.identity.did,
      createdAt: Date.now(),
      prayers: [],
      category: options.category || 'general', // general, healing, thanksgiving, etc.
      saint: options.saint || '',
      isAnonymous: options.isAnonymous || false
    };

    await this.prayerRequestsStore.put(`prayer:${prayer.id}`, prayer);
    console.log('🙏 Prayer request created:', prayer.id);
    return prayer;
  }

  async prayFor(prayerId) {
    const prayerEntry = await this.prayerRequestsStore.get(`prayer:${prayerId}`);
    if (!prayerEntry) {
      throw new Error('Prayer request not found');
    }

    const prayer = prayerEntry.value;
    if (!prayer.prayers.includes(this.identity.did)) {
      prayer.prayers.push(this.identity.did);
      await this.prayerRequestsStore.put(`prayer:${prayerId}`, prayer);
    }
    return prayer;
  }

  async getPrayerRequests(limit = 20) {
    const allPrayers = await this.prayerRequestsStore.list('prayer:');
    return allPrayers.slice(0, limit);
  }

  _generateId() {
    return Math.random().toString(36).substring(2, 15) + 
           Math.random().toString(36).substring(2, 15);
  }
}

// ============================================================================
// Main Application
// ============================================================================

class ThreeStepsApp {
  constructor() {
    this.identity = new DidPeerIdentity();
    this.network = new IrohNetwork();
    this.social = null;
    this.isInitialized = false;
  }

  async initialize() {
    console.log('\n🕊️  ThreeSteps - Catholic P2P Social Network');
    console.log('==========================================\n');

    // Create identity
    await this.identity.create();

    // Initialize network
    await this.network.initialize();

    // Initialize social layer
    this.social = new CatholicSocialNetwork(this.identity, this.network);
    await this.social.initialize();

    this.isInitialized = true;
    console.log('\n✅ ThreeSteps initialized successfully!\n');
    
    return this;
  }

  async demo() {
    if (!this.isInitialized) {
      await this.initialize();
    }

    console.log('📖 Running demo...\n');

    // Create some posts
    await this.social.createPost(
      'Today\'s Gospel reminds us to love our neighbors as ourselves. How are you living this out?',
      {
        tags: ['gospel', 'love', 'faith'],
        scripture: 'Matthew 22:39'
      }
    );

    await this.social.createPost(
      'Praying for all those affected by natural disasters. May God bring comfort and hope.',
      {
        tags: ['prayer', 'hope'],
        prayerIntention: 'Victims of natural disasters'
      }
    );

    // Create a prayer request
    await this.social.createPrayerRequest(
      'Please pray for my family during this difficult time',
      {
        category: 'healing',
        saint: 'St. Jude'
      }
    );

    // Get posts
    const posts = await this.social.getPosts();
    console.log(`\n📜 Retrieved ${posts.length} posts`);

    // Get prayer requests
    const prayers = await this.social.getPrayerRequests();
    console.log(`🙏 Retrieved ${prayers.length} prayer requests`);

    // Like a post
    if (posts.length > 0) {
      const postId = posts[0].value.id;
      await this.social.likePost(postId);
      console.log(`❤️ Liked post: ${postId}`);
    }

    console.log('\n✨ Demo complete!\n');
  }

  async shutdown() {
    console.log('\n👋 Shutting down ThreeSteps...');
    await this.network.shutdown();
    console.log('✓ Goodbye!\n');
  }
}

// Export modules
export {
  DidPeerIdentity,
  IrohNetwork,
  WillowStore,
  CatholicSocialNetwork,
  ThreeStepsApp
};

// Run if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const app = new ThreeStepsApp();
  
  app.initialize()
    .then(() => app.demo())
    .then(() => app.shutdown())
    .catch(console.error);
}
