# ThreeSteps — Settings & Profile (Follower Responsibilities)

ThreeSteps intentionally pushes responsibilities to followers to support decentralized P2P operation (Willow/Iroh, did:peer identity, meadowcap capabilities).

This document defines the UI/UX contract for:
- a **Profile** page (public representation)
- a **Settings** area (control plane for privacy, networking, wallet behavior, and operational choices)

See also: [Wallets](../spec/wallets.md) • [Privacy constraints](../product/privacy-monetization.md) • [Project README](../../README.md)

---

## 1. Profile vs Settings (principle)

### Profile
The profile is what a follower intentionally “presents” publicly (or to specific audiences).

### Settings
Settings is where a follower configures:
- privacy and visibility preferences
- operational/networking responsibilities
- payment/wallet exposure rules
- consent and publishing decisions

---

## 2. Settings sections (initial outline)

### 2.1 Identity (did:peer)
- create/import did:peer
- device binding
- key rotation and backup prompts (UX only; spec elsewhere)

Explanation:
- **“Backup prompts (UX only; spec elsewhere)”** means: this document describes *how the app should guide the follower* (screens, reminders, checklists), but the cryptographic/key-management mechanics are defined in the identity/security specs.
- The UX intent is to ensure followers can:
  - export/backup recovery material (whatever we define it to be)
  - understand the consequences of not backing up
  - verify they completed the backup (optional “I wrote this down” confirmations)

### 2.2 Networking (Willow/Iroh responsibilities)
- offline-first expectations and sync status
- relay preferences (Conscia / peer relay)
- storage limits and retention policies

Explanation:
- **Storage limits**: follower-controlled caps to prevent P2P storage from growing without bound (device constraints).
- **Retention policies**: follower-controlled rules for how long different kinds of content are kept locally and/or re-shared (e.g., prune old media, keep text longer, keep receipts/voucher history longer). In P2P, retention is not just “delete”; it affects what the follower continues to host/seed to others.

### 2.2.1 Sync Settings scope (why this matters)

“Sync Settings” is where followers control how content and events propagate and notify targets (e.g., wallet events seeding the feed, push notifications to targets, etc.).

When we ask about “scope”, we’re clarifying whether settings apply:
- **Globally** (one set of defaults for the follower), and/or
- **Per target** (different rules per circle/forum/custom target), and/or
- **Per event type** (different rules for “received donation” vs “issued voucher”, etc.)

A practical model is multi-dimensional:
- dimensions:
  - **event type** (wallet: received donation, voucher: issued, etc.)
  - **visibility target** (predefined target types)
  - **audience/container instance** (a specific circle/forum/chat)

This enables:
- follower-level defaults for each dimension, plus
- overrides at the *intersection* (event × target × specific circle/forum/chat) when needed.

Why this fits Willow + meadowcap + Iroh:
- Willow’s path-based model supports writing config objects at hierarchical paths (defaults → overrides).
- Meadowcap can authorize who may publish/modify which config paths.
- Iroh gossip/direct sync propagates config objects offline-safely without central coordination.

See: [Sync Settings](./sync-settings.md)

### 2.3 Circles, forums, and publishing
- default behavior when creating circles/forums
- publishing controls (what “public” means)

Explanation (what’s possible for us):
- A circle/forum can define *its own outward publishing policy* (e.g., “localized” vs “published outward”).
- Individual authors can still apply per-content scope (endocircular/circular/extracircular), but the circle/forum policy can cap the effective reach.
- Forums can act as public indexes (published), and 3S can maintain its own public forums for highlighting.
- Because circles are “street-corner public”, publishing controls are less about “existence” and more about:
  - what content is surfaced outside the membership boundary
  - what metadata is indexed and how it is discoverable

New direction:
- Circles are created only in the follower app.
- Forums are created only on Conscia nodes and act as indexing surfaces.
- This introduces a 3-layer “ceiling” for non-authenticated public surfacing:
  - author scope (per item)
  - circle owner “localize vs publish outward”
  - forum owner indexing/surfacing policy

See: [Visibility](../spec/visibility.md) • [Indexing](../spec/indexing.md)

### 2.4 Wallet visibility (author-controlled)
Follower controls how wallet-related metadata is presented publicly, including (examples):
- show/hide amounts
- show/hide counterparties
- show/hide voucher details
- show/hide processor references

We will define safe defaults so followers do not accidentally disclose more than intended.

### 2.5 Sponsored content preferences (viewer-side)
Viewer controls such as:
- show sponsored items / hide sponsored items (if allowed)
- display policy explanations (“why am I seeing this?”), without behavioral profiling

P2P advertising posture (direction):
- In a P2P world, there is a cost to being irresponsible with advertising, and a cost to avoiding being targeted.
- We should model “sponsored content” preferences as:
  - transparent labeling
  - explicit follower-side controls
  - minimal or no behavioral profiling (decision doc exists)
  - accountability mechanisms for advertisers (to be designed later)

---

## 3. Open questions

- Should any settings be required on first run (a “responsibility onboarding checklist”)?
- What is the default profile visibility in a public-circle system?

---

**Docs navigation**  
[Docs index](../README.md) • [UI index](./README.md) • [Interview hub](../interview/interview.md) • [Vision](../vision.md) • [Specs index](../spec/README.md) • [Product index](../product/README.md) • [Tech index](../tech/README.md) • [Project README](../../README.md)
