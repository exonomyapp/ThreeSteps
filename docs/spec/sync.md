# ThreeSteps — Sync & Conflicts (Spec)

This document defines sync behavior and conflict semantics for ThreeSteps’ offline-first P2P model (Willow/Iroh topology).

See also: [Data model](./data-model.md) • [Circles](./circles.md) • [Chats](./chats.md) • [Project README](../../README.md)

---

## 1. Sync goals

- Offline-first creation and reading.
- Eventual delivery when connectivity exists.
- Deterministic state derivation from synced objects/events.
- Support for revocable actions (shared circles) and tombstones (shared chats).

---

## 2. Object categories (draft)

### 2.1 Append-only logs (preferred)
Use for:
- chat messages
- moderation events (delete/restore, remove/reinstate)
- membership events
- voucher lifecycle events (claim/fulfil/dispute)

Conflict handling:
- ordering can differ across peers; we derive effective state from the set of events + deterministic ordering rules (to specify).

### 2.2 Mutable records (use sparingly)
Use for:
- profile display fields (name/avatar)
- forum/circle titles/descriptions

Conflict handling:
- last-writer-wins is simplest but may be undesirable; consider merge rules per field.

---

## 3. Revocation semantics (shared governance)

Shared circles: “all moderation actions are revocable by any moderator.”

Implementation direction:
- revocation is a new event referencing a prior event (“revoke event X”)
- clients compute effective state from event graph

---

## 4. Tombstones (shared chat deletion)

Shared chats:
- last moderator out triggers deletion
- deletion is represented by a tombstone/termination event

Rules (draft):
- once tombstoned, clients stop appending/syncing new messages for that chat
- previous history may still exist on devices that already synced it; we communicate this honestly

---

## 5. Open questions (mission-driven)

We’ll ask you only when needed:
- Do we require cryptographic signatures on *all* events (recommended), or only sensitive ones?
- What is the deterministic ordering rule for conflicting events (time + tie-breaker by event hash)?
- What is the retention policy for public circles/forums content under limited storage?

---

**Docs navigation**  
[Docs index](../README.md) • [Specs index](./README.md) • [Interview hub](../interview/interview.md) • [Vision](../vision.md) • [Product index](../product/README.md) • [UI index](../ui/README.md) • [Tech index](../tech/README.md) • [Project README](../../README.md)
