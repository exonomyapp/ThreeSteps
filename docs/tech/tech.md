# ThreeSteps — Technology (Tech Vision)

This document describes the intended technical design for ThreeSteps as a decentralized, privacy-first application that operates over a traditional P2P topology. The system relies on end-user devices as first-class nodes and introduces **Conscia** nodes (our brand) as headless, always-on P2P participants that provide *enabling services* without becoming a content-controlling server.

See also: [Interview](../interview/interview.md) • [Vision](../vision.md) • [Tech index](./README.md) • [Project README](../../README.md)

## 1. Node types

### 1.1 User nodes (traditional P2P)
User nodes run on consumer hardware:
- mobile devices
- desktop devices

User nodes:
- originate and author content
- hold local state as the primary source of truth
- participate directly in P2P transport, relay, and synchronization

### 1.2 Conscia nodes (headless P2P infrastructure)
Conscia nodes are also P2P nodes, but they are:
- headless (no end-user UI)
- always on
- remotely managed (operations, upgrades, observability)

Conscia nodes exist to improve reachability and usability in real-world network conditions (NAT, captive portals, intermittent links), while preserving end-to-end privacy and author control.

**Key constraint:** Conscia nodes do not exercise control over user content. They provide transport and coordination assistance, but they are not “the place where data lives.”

## 2. Connectivity & transport

### 2.1 WebRTC as a primary transport
ThreeSteps uses WebRTC where practical to establish direct peer-to-peer connections between nodes. WebRTC provides:
- NAT traversal primitives
- encrypted transport between peers
- broad platform support across mobile and desktop

Other transports may complement WebRTC depending on platform constraints and evolving protocol needs, but the core design remains P2P.

### 2.2 TURN/STUN for discovery and relay
Conscia nodes provide:
- **STUN**: to help peers discover their public-facing network addresses and traverse NATs
- **TURN**: to relay traffic when direct peer-to-peer connectivity is not possible

These services improve reliability, especially for users in constrained environments. Importantly:
- TURN relay is a bandwidth service, not an authority over content
- all application payloads remain end-to-end encrypted at higher layers (see §4)

## 3. Discovery, rendezvous, and blind relay

ThreeSteps supports peer discovery and rendezvous mechanisms that avoid centralized content control. Where direct connectivity is blocked, communication can route via intermediate peers using blind relay patterns.

Conscia nodes can participate as rendezvous/relay peers, but the topology also supports user nodes relaying for one another when appropriate.

## 4. Data model and synchronization (Willow / Iroh topology)

ThreeSteps adopts a topology aligned with Willow/Iroh-style systems that provide:
- **end-to-end (E2E) encrypted, granular synchronization**
- selective sharing and replication driven by explicit user intent
- local-first storage with sync-as-available behavior

This means:
- data is authored and stored on user nodes
- synchronization propagates encrypted changesets between peers
- replication is granular (not “all or nothing”) and can be scoped by relationship, group, or content type

## 5. Backup and recovery enabling services (without running backups)

Conscia nodes provide *enabling services* for backup and recovery workflows without themselves performing backup/restore operations. In practice, this means Conscia nodes may:
- facilitate peer reachability and session establishment
- assist with routing/relay so that authorized peers can exchange encrypted state
- host coordination metadata that is not sufficient to reconstruct user content

Because the sync topology is E2E encrypted and granular, Conscia nodes do not need to “hold” backups in order for users to achieve resilience. Instead, they help users and authorized peers connect and synchronize securely.

## 6. Security posture (high-level)

- Application payloads remain E2E encrypted between authorized endpoints.
- Conscia nodes can observe network-level metadata required to operate relay services (e.g., connection attempts, bandwidth), but should not be able to decrypt or interpret user content.
- Access control is cryptographic and intent-driven, aligning with author control and explicit sharing imperatives.

## 7. Identity & authorization

### 7.1 Primary identity: did:peer
ThreeSteps standardizes on **did:peer** as the primary authentication and identity model across platforms.

At a high level:
- Each user node owns one or more did:peer identifiers.
- Device-to-device relationships and trust are rooted in did:peer identifiers rather than centralized accounts.

### 7.2 OAuth as a convenience bridge
ThreeSteps supports OAuth as a *convenience* mechanism to launch familiar authentication flows, while keeping did:peer as the primary identity.

Supported flow patterns:
- **Bind to existing did:peer:** user signs in with OAuth, then associates the resulting OAuth token to an already-existing did:peer.
- **Create a new did:peer during OAuth:** user signs in with OAuth, then the app facilitates creating a new did:peer and binding the OAuth token to it midstream.

OAuth tokens are treated as capability inputs for specific integrations and do not replace the did:peer identity model.

### 7.3 Meadowcap for decentralized capabilities
ThreeSteps standardizes on **meadowcap** for decentralized capabilities/authorization.

Design intent:
- Capabilities are expressed, delegated, and verified in a decentralized way.
- Authorization decisions are made locally by nodes based on capability proofs rather than server-held ACLs.

## 8. Update distribution (F-Droid + in-app)

ThreeSteps supports two complementary distribution/update channels:

### 8.1 F-Droid channel (no Google)
- An F-Droid-compatible publishing path provides a conventional user experience for installation and updates.
- This channel remains independent of Google Play Services.

### 8.2 In-app updater (P2P distribution)
- The app detects new versions and distributes update artifacts over the P2P network (with Conscia relay help where needed).
- Updates can be fetched from peers and/or Conscia nodes as content-addressed blobs.
- Update artifacts are verified (signature/hash) prior to installation.

Platform constraint: Android still requires a user-confirmed install step for APK updates; the updater can reduce friction but cannot silently self-update on stock devices.

## 9. What this design avoids

This approach explicitly avoids:
- central servers that store the canonical copy of user content
- server-driven feeds, ranking, or moderation enforcement
- “account recovery” that depends on a service operator holding decryption capability

## 10. Open technical questions (next to specify)

- Exact protocol stack choices (WebRTC data channels vs alternatives, fallback transports)
- Discovery strategy (how peers find each other under varying threat models)
- Key management and recovery UX (lost device, new device, sponsor/catechist onboarding)
- Conscia node trust minimization and hardening (rate limits, abuse resistance, privacy leakage)
- Offline-first conflict semantics for granular sync

---

**Docs navigation**  
[Docs index](../README.md) • [Interview hub](../interview/interview.md) • [Vision](../vision.md) • [Specs index](../spec/README.md) • [Product index](../product/README.md) • [UI index](../ui/README.md) • [Tech index](./README.md) • [Project README](../../README.md)
