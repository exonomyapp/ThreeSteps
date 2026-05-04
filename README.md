# ThreeSteps 🕊️

**A P2P Decentralized Social Media App for Catholics**

Built on Willow/Iroh protocol with did:peer identity for secure, censorship-resistant Catholic community networking.

## ✨ Features

- **Decentralized Identity**: DID:Peer-based authentication using Ed25519 cryptography
- **P2P Networking**: Iroh protocol for direct peer-to-peer communication
- **CRDT Data Storage**: Willow-inspired conflict-free replicated data types
- **Catholic-Specific Features**:
  - Prayer requests with intercession tracking
  - Scripture-sharing posts
  - Parish and patron saint profiles
  - Faith-based content tagging

## 🏗️ Architecture

```
┌─────────────────────────────────────────┐
│         ThreeSteps Application          │
├─────────────────────────────────────────┤
│   CatholicSocialNetwork (Social Layer)  │
│   - Posts, Comments, Likes              │
│   - Prayer Requests                     │
│   - User Profiles                       │
├─────────────────────────────────────────┤
│     WillowStore (Data Layer)            │
│   - CRDT-based storage                  │
│   - Signed entries                      │
│   - Event subscriptions                 │
├─────────────────────────────────────────┤
│     IrohNetwork (Network Layer)         │
│   - P2P connectivity                    │
│   - Peer discovery                      │
│   - Secure messaging                    │
├─────────────────────────────────────────┤
│     DidPeerIdentity (Identity Layer)    │
│   - Ed25519 keypairs                    │
│   - DID:Peer documents                  │
│   - Digital signatures                  │
└─────────────────────────────────────────┘
```

## 🚀 Getting Started

### Prerequisites

- Node.js v20+
- npm or yarn

### Installation

```bash
git clone https://github.com/your-org/threesteps.git
cd threesteps
npm install
```

### Usage

```bash
# Run the demo
npm start

# Development mode with hot reload
npm run dev

# Run tests
npm test
```

### Programmatic Usage

```javascript
import { ThreeStepsApp } from './src/index.js';

// Initialize the app
const app = new ThreeStepsApp();
await app.initialize();

// Create a post
await app.social.createPost(
  'Today\'s Gospel reminds us to love our neighbors.',
  {
    tags: ['gospel', 'love'],
    scripture: 'Matthew 22:39'
  }
);

// Create a prayer request
await app.social.createPrayerRequest(
  'Please pray for my family',
  {
    category: 'healing',
    saint: 'St. Jude'
  }
);

// Get posts
const posts = await app.social.getPosts(10);

// Like a post
await app.social.likePost(postId);

// Pray for someone
await app.social.prayFor(prayerId);
```

## 📦 Modules

### DidPeerIdentity

Manages decentralized identity using the DID:Peer method.

```javascript
const identity = new DidPeerIdentity();
await identity.create(); // Generate new identity
console.log(identity.did); // did:peer:z...

// Sign data
const signature = await identity.sign('Hello, world!');

// Get DID document
const doc = identity.getDocument();
```

### IrohNetwork

Handles P2P networking via the Iroh protocol.

```javascript
const network = new IrohNetwork();
await network.initialize();

// Connect to peers
await network.connect(peerId);

// Get connected peers
const peers = await network.getConnectedPeers();

// Shutdown
await network.shutdown();
```

### WillowStore

CRDT-based data storage with signing.

```javascript
const store = new WillowStore('namespace', identity);

// Store data
await store.put('key', { value: 'data' });

// Retrieve data
const entry = await store.get('key');

// List with prefix
const entries = await store.list('prefix:');

// Subscribe to changes
const unsubscribe = store.subscribe((event, data) => {
  console.log(event, data);
});
```

### CatholicSocialNetwork

High-level social features for Catholic community.

```javascript
const social = new CatholicSocialNetwork(identity, network);
await social.initialize();

// Update profile
await social.updateProfile({
  displayName: 'John Doe',
  parish: 'St. Mary\'s Church',
  patronSaint: 'St. Francis'
});

// Create post with scripture
await social.createPost('Reflection on today\'s Mass', {
  scripture: 'John 3:16',
  tags: ['mass', 'reflection']
});

// Prayer intentions
await social.createPrayerRequest('Healing for my grandmother', {
  category: 'healing',
  saint: 'St. Peregrine'
});
```

## 🔐 Security

- All data entries are cryptographically signed with Ed25519
- Private keys never leave the user's device
- DID:Peer ensures decentralized, self-sovereign identity
- No central server or authority

## 🙏 Catholic Mission

ThreeSteps provides a safe, faith-based alternative to mainstream social media where Catholics can:

- Share their faith journey
- Request and offer prayers
- Discuss scripture and theology
- Build authentic Christian community
- Evangelize in the digital continent

*"Go therefore and make disciples of all nations..."* - Matthew 28:19

## 📄 License

MIT License - See LICENSE file for details

## 🤝 Contributing

Contributions welcome! Please read our contributing guidelines before submitting PRs.

## 📞 Contact

- Website: [coming soon]
- Email: [coming soon]
- Prayer intentions: Always open ❤️

---

**ThreeSteps** - *Faith, Community, Truth in a decentralized world.* ✝️