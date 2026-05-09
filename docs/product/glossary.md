# ThreeSteps — Glossary

This glossary standardizes terms used across ThreeSteps documentation.

See also: [Interview](../interview/interview.md) • [Vision](../vision.md) • [Tech vision](../tech/tech.md) • [Project README](../../README.md)

---

## Terms

### Follower
The preferred term for a person using ThreeSteps (instead of “user”).

### Circle
The preferred top-level organization concept (instead of “group” or “org”).

Circles:
- can represent families, parish/class contexts, small teams, or individual-first networks
- contain **members**

Circles come in two governance types:
- **Owned circle** (default): one owner, optional delegated subordinates.
- **Shared circle**: moderator ownership is shared among multiple moderators.

Circles are not a “private by default” concept; they are publicly present and discoverable (street-corner model).

### Member
A follower who belongs to a circle.

### Chat
A conversation container. Chats are private to their members by default.

### Circle chat
The chat associated with a circle. Each circle has exactly one chat.

### Forum
A follower-created organizing container that groups circles. Forums can be published. ThreeSteps (3S) also creates public forums that highlight circles.

### Published forum
A forum that is public. Non-members can see the list of circles inside it.

### Wallet
A follower-facing construct used to coordinate real-money processing (via payment processors), crypto receipts (via a crypto wallet), and voucher records. The wallet is part of the social-media paradigm and is not treated as private by default.

### Voucher
A non-monetary mutual-aid content type (in the spirit of Kropotkin). A voucher is not money and does not function like money; it is closer to an IOU that offers a product or service.

Vouchers:
- declare a value using an amount + currency chosen by the author
- may optionally include a payment requirement
- are stored alongside wallet records

### Sponsored / promoted
Paid highlighting that increases visibility/placement in relevant public surfaces (e.g., 3S public forums). Sponsored items are clearly labeled.

### Owned circle
A circle with exactly one owner. The owner can recruit and delegate subordinate roles (delegates) to help manage the circle.

### Delegate
A subordinate role within an owned circle. Delegates act under powers granted by the owner (implemented via capabilities).

### Shared circle
A circle whose “ownership” is shared by a set of moderators, commonly for prayer/study groups.

Shared circle rules (baseline intent):
- Moderators are recruited by the creator, but become peers/equal moderators.
- Any moderator can take a moderation action.
- Any other moderator can revoke (undo) another moderator’s action.
- **All moderation actions are revocable** by any moderator (shared governance spirit).

### Moderator
A follower with shared-circle moderation power (and, optionally, other delegated powers in owned circles), constrained by the circle’s capability policies.

### Conscia
Brand name for always-on, headless P2P nodes that provide enabling services (TURN/STUN, relay assistance, etc.) without becoming a content-controlling server.

### did:peer
The primary identity model for followers and devices in ThreeSteps.

### OAuth bridge
OAuth is supported as a convenience mechanism to launch familiar sign-in flows and bind tokens to a did:peer identity midstream.

### Meadowcap
The standard capabilities/authorization system for decentralized permissions in ThreeSteps.

### Willow / Iroh
The topology and sync substrate that provides end-to-end encrypted, granular sync and content-addressed distribution primitives.

---

**Docs navigation**  
[Docs index](../README.md) • [Product index](./README.md) • [Interview hub](../interview/interview.md) • [Vision](../vision.md) • [Specs index](../spec/README.md) • [UI index](../ui/README.md) • [Tech index](../tech/README.md) • [Project README](../../README.md)
