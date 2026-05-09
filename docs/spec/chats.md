# ThreeSteps — Chats (Governance Spec)

This document specifies chat governance, including owned chats and shared chats, and how “moderators” and revocation work.

See also: [Interview](../interview/interview.md) • [Circles](./circles.md) • [Visibility](./visibility.md) • [Project README](../../README.md)

---

## 1. Chat types

### 1.1 Circle chat
- Each circle has exactly one chat.
- Circle chat inherits the circle’s governance model (owned vs shared), unless specified otherwise.

### 1.2 Out-of-circle chats
Chats can exist outside circles.

Out-of-circle chats can become public, but only with 100% consensus among moderators (see Visibility spec).

---

## 2. Governance models

### 2.1 Owned chat (default)

From interview:
- The creator of a chat is always its **owner** unless it’s a shared chat.
- Moderators are selected by the chat’s creator.

Working implications:
- The owner can:
  - add/remove moderators (to be confirmed)
  - manage membership (to be confirmed)
- Moderator actions are subject to the relevant revocation rules (if any) we define for owned chats.

### 2.2 Shared chat

From interview:
- In a shared chat, all moderators are equal and can recruit each other at will.
- The chat’s creator is not its owner.
- Anyone can destroy it (see §2.2.2 for the operational meaning).
- It is neither ephemeral nor temporary, yet nobody has exclusive control of its persistence.

#### 2.2.1 Moderators and continuity

Shared chats require moderators to exist. The “last one out” principle applies:
- When the **last moderator leaves** (so the moderator set becomes empty), the chat is considered **deleted** because “without moderation, chaos.”

#### 2.2.2 “Destroy” semantics (tombstone)

Destroying a shared chat means publishing a **tombstone/termination event** that peers honor.

Implications:
- Clients should stop treating the chat as active once the tombstone is observed.
- Message history might still persist on devices that previously synced it (decentralized reality); “deletion” is best-effort, not guaranteed erasure.
- The app should communicate this honestly to followers in UX copy.

#### 2.2.3 Social intent

ThreeSteps (3S) does its best to shape follower behavior toward charity and honesty, but the protocol cannot assume perfect behavior.

---

## 3. Open questions (to lock next)

To implement this precisely we still need:
- Definition of “destroy”:
  - does it require moderator consensus, or can any member do it? (You stated “anyone can destroy it”; we still need to define the exact capability rule.)
  - is destroy revocable?
  - what happens to message history?
- Membership model for shared chats:
  - who can invite/remove members?
  - are those actions revocable?
- Moderation powers in owned chats:
  - which actions exist and who can revoke them (if anyone)?

---

**Docs navigation**  
[Docs index](../README.md) • [Specs index](./README.md) • [Interview hub](../interview/interview.md) • [Vision](../vision.md) • [Product index](../product/README.md) • [UI index](../ui/README.md) • [Tech index](../tech/README.md) • [Project README](../../README.md)
