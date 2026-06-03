# ThreeSteps — Data Model (Spec)
This document defines the initial data model for ThreeSteps based on the features we’ve committed to so far. It is written to be compatible with an offline-first, P2P sync topology (Willow/Iroh).
See also: [Interview](../interview/interview.md) • [Social primitives](./social-primitives.md) • [Circles](./circles.md) • [Forums](./forums.md) • [Wallets](./wallets.md) • [Project README](../../README.md)
---
## 1. Modeling principles
- Event-first where it matters: moderation, membership, and governance actions should be representable as events (so revocation is definable).
- Content-address where possible: immutable blobs (attachments, signed manifests, etc.) are content-addressed.
- Mutable views are derived: current state is computed from events + latest metadata, not treated as a single authoritative server record.
---
## 2. Core entities (v0 list)

### 2.1 Follower
Represents a person (follower) and their public profile.

Minimum fields (draft):
- follower_id (stable internal ID; derived from did:peer)
- did_peer (primary identity)
- display_name, avatar_ref
- created_at

### 2.1.1 Follower feed
Each follower can have a public social feed, represented as an append-only stream of feed items.

Minimum fields (draft):
- feed_item_id
- follower_id (owner of the feed)
- kind (wallet_event | social_event | promotion_event | etc.)
- payload (typed/structured)
- created_at

### 2.2 Circle
Publicly present, discoverable container with members.

Minimum fields (draft):
- circle_id
- type_id (from centrally managed circle type catalog; or “Other” custom type)
- governance_type: owned | shared
- title, description, icon_ref
- created_by (follower_id)
- created_at

### 2.3 Forum
Container that groups circles. Can be published (public).

Minimum fields (draft):
- forum_id
- title, description, icon_ref
- created_by (follower_id)
- published: boolean
- created_at

### 2.4 Chat
Conversation container, either:
- circle chat (1 per circle), or
- out-of-circle chat

Minimum fields (draft):
- chat_id
- kind: circle_chat | out_of_circle
- circle_id? (if circle_chat)
- governance_type: owned | shared
- created_by (follower_id) (note: shared chats have no owner)
- created_at
- tombstoned_at? + tombstone_event_id? (if deleted)

### 2.5 Messages
Append-only message events in a chat.

Minimum fields (draft):
- message_id
- chat_id
- author_id (follower_id)
- body (text)
- attachments[] (blob refs)
- created_at

### 2.6 Feed posts / comments / reactions / stories
These map directly to the social primitives spec; we will model each as either:
- an append-only event stream, or
- a record + an event stream for edits/moderation

Details to be filled after we lock the feed UX.

### 2.7 Wallet
Follower-controlled wallet construct; visibility configured in Settings.

Minimum fields (draft):
- wallet_id
- owner_follower_id
- visibility_profile_id (chosen default; editable)
- created_at

Wallet events can produce feed items (see docs/spec/feed.md).

### 2.8 Voucher
Voucher content type; postable anywhere; claimable by anyone who satisfies author requirements.

Minimum fields (draft):
- voucher_id
- author_id
- posted_in: circle_id? | forum_id? | chat_id? | global?
- title, description
- declared_value_amount + declared_value_currency
- requirements (structured or unstructured; to be specified)
- optional_payment_requirement (to be specified)
- status: open | claimed | fulfilled | closed | disputed
---
## 3. Event logs (draft)
To support revocable moderation and governance, define event logs for:
- circle membership events (invite/accept/remove/reinstate/mute)
- shared-circle moderation events (delete/restore/etc.)
- shared-chat tombstone events (last moderator out triggers)
- forum publish/unpublish events
- voucher claim/fulfil/dispute events
---
## 4. Open questions (to ask only when needed)
- How do we represent “Other” circle types (local-only vs publishable)?
- What is the minimal feed data model (posts + comments + reactions) vs chat-only?
- How do we represent destroy capabilities for shared chats (anyone can destroy it needs an explicit capability rule)?
---
**Docs navigation**  
[Docs index](../README.md) • [Specs index](./README.md) • [Interview hub](../interview/interview.md) • [Vision](../vision.md) • [Product index](../product/README.md) • [UI index](../ui/README.md) • [Tech index](../tech/README.md) • [Project README](../../README.md)
