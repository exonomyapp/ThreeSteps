# ThreeSteps — Circles (Governance & Moderation Spec)

This document defines how circles work in ThreeSteps: governance types, membership control, and moderation semantics.

See also: [Interview](../interview/interview.md) • [Glossary](../product/glossary.md) • [Project README](../../README.md)

---

## 1. Terminology

Canonical terms:
- People on the app are **followers**.
- Organizational containers are **circles**.
- People inside a circle are **members**.

See: [Glossary](../product/glossary.md)

---

## 2. Circle governance types

ThreeSteps standardizes on two governance types:

### 2.1 Owned circles (default)
Owned circles have:
- exactly **one owner**
- optional **delegates** recruited by the owner (subordinate)

The owner:
- defines who can join
- can grant delegates capabilities to assist with moderation and administration

From interview (current decision):
- Owners, exclusively, can remove followers from their owned circles.
- Delegates can mute followers.
- Other circle capabilities are “equally shared” by **owner + delegates** (to be clarified into explicit capability templates).

### 2.2 Shared circles
Shared circles are commonly used for prayer/study groups.

Shared circles have:
- a set of **moderators**
- moderators are recruited by the circle’s creator, but become **equal** moderators

Key rule (shared governance spirit):
- **Any moderator can act. Any moderator can revoke any moderator’s action.**
- **All shared-circle moderation actions are revocable.**

## 2.3 Publicness (circles are not private)

From interview (current decision):
- A **circle is not a private concept**.
- A chat is private to its members by default (see Visibility spec).

See: [Visibility](./visibility.md)

---

## 3. Membership and roles (high-level)

### 3.1 Membership operations
Typical membership operations include:
- invite member / request to join
- accept / reject
- remove member
- re-instate member

### 3.2 Roles as capabilities
Rather than hard-coded server roles, permissions are expressed as decentralized capabilities (meadowcap).

This means:
- a “moderator” is a follower holding specific moderation capabilities for a circle
- a “delegate” is a follower holding capabilities delegated by an owner

---

## 4. “Revocable actions” semantics (shared circles)

Because *all moderation actions are revocable* in shared circles, we define “revocation” as:

- **A new moderation event** that supersedes/reverses a prior moderation event.
- The system remains auditable: we do not erase history; we record “action” and “revocation of action”.

Examples:
- A moderator deletes content → another moderator issues a “restore” event.
- A moderator removes a member → another moderator issues a “reinstate” event.
- A moderator changes circle settings → another moderator issues a “revert settings” event.
- A moderator bans/mutes → another moderator issues an “unban/unmute” event.

### 4.1 Conflict handling when moderators disagree
When multiple moderators issue contradictory actions:
- the circle maintains an ordered event log
- each action has a corresponding revocation action
- the effective state is derived from the log deterministically (exact rule to be defined with the sync/conflict model)

This spec intentionally sets the governance rule (“everything is revocable”) while leaving the deterministic conflict algorithm to the sync spec.

See also (to define): `docs/spec/sync.md`

---

## 5. Open questions (to lock next)

To fully specify circles we still need to decide:
- Circle types (family, catechism class, sponsor, mission team, etc.) and which defaults apply to each
- Whether shared circles require *N* moderators minimum and how moderator recruitment works
- Whether any actions are non-revocable in practice (you stated “all are revocable”; we’ll encode that unless you later change it)
- Audit/privacy: which moderation history is visible to members vs moderators only
- “Emergency” moderation behaviors (e.g., abusive content) under fully revocable rules
- Clarify “other circle capabilities are equally shared” into an explicit meadowcap capability template for owned circles.

---

**Docs navigation**  
[Docs index](../README.md) • [Specs index](./README.md) • [Interview hub](../interview/interview.md) • [Vision](../vision.md) • [Product index](../product/README.md) • [UI index](../ui/README.md) • [Tech index](../tech/README.md) • [Project README](../../README.md)
