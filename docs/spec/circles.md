# ThreeSteps — Circles (Governance & Moderation Spec)
This document defines how circles work in ThreeSteps: governance types, membership control, and moderation semantics.
See also: [Interview](../interview/interview.md) • [Glossary](../product/glossary.md) • [Chats](./chats.md) • [Shared engine](../tech/shared-engine.md) • [Project README](../../README.md)

## 1. Terminology
Canonical terms:
- People on the app are followers.
- Organizational containers are circles.
- People inside a circle are members.

## 1.1 Circles as identities
A Circle is not only a container for people. A Circle is also an exocore identity.

- Each Circle has a Circle-owned did:peer identity.
- The Circle owner controls that identity.
- The Circle’s identity is used to publish, receive, and sync Circle content.
- Each Circle includes a Circle chat as part of the Circle experience.

Circle chat is an ExoTalk-style group chat attached to the Circle. The circle governance model determines who can moderate and how moderation is revocable.

Circle owners may choose to use Conscia services to improve reachability and discovery for their Circle. Circle owners provision those services through ConSoul.

## 2. Circle governance types
ThreeSteps standardizes on two governance types:

### 2.1 Owned circles (default)
Owned circles have:
- exactly one owner
- optional delegates recruited by the owner (subordinate)

The owner:
- defines who can join
- can grant delegates capabilities to assist with moderation and administration

From interview (current decision):
- Owners, exclusively, can remove followers from their owned circles.
- Delegates can mute followers.
- Other circle capabilities are equally shared by owner and delegates (to be clarified into explicit capability templates).

### 2.2 Shared circles
Shared circles are commonly used for prayer and study groups.

Shared circles have:
- a set of moderators
- moderators are recruited by the circle’s creator, but become equal moderators

Key rule:
- Any moderator can act. Any moderator can revoke any moderator’s action.
- All shared-circle moderation actions are revocable.

## 2.3 Publicness (circles are not private)
From interview (current decision):
- A circle is not a private concept.
- A chat is private to its members by default (see Visibility spec).

See: [Visibility](./visibility.md)

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
- a moderator is a follower holding specific moderation capabilities for a circle
- a delegate is a follower holding capabilities delegated by an owner

## 4. Revocable actions (shared circles)
Because all moderation actions are revocable in shared circles, revocation means:
- a new moderation event that supersedes or reverses a prior moderation event
- the system remains auditable; history is not erased

Examples:
- A moderator deletes content, then another moderator restores it.
- A moderator removes a member, then another moderator reinstates them.
- A moderator changes circle settings, then another moderator reverts those settings.
- A moderator mutes someone, then another moderator unmutes them.

### 4.1 Conflict handling when moderators disagree
When multiple moderators issue contradictory actions:
- the circle maintains an ordered event log
- each action has a corresponding revocation action
- the effective state is derived from the log deterministically

This spec sets the governance rule (everything is revocable) while leaving the exact conflict algorithm to the sync spec.
See also: docs/spec/sync.md

## 5. Open questions (to lock next)
To fully specify circles we still need to decide:
- Circle types (family, catechism class, sponsor, mission team, etc.) and which defaults apply to each
- Whether shared circles require a minimum number of moderators and how moderator recruitment works
- Whether any actions are non-revocable in practice
- Audit and privacy: which moderation history is visible to members vs moderators only
- Emergency moderation behaviors under fully revocable rules
- Clarify other circle capabilities are equally shared into an explicit meadowcap capability template for owned circles

---
**Docs navigation**  
[Docs index](../README.md) • [Specs index](./README.md) • [Interview hub](../interview/interview.md) • [Vision](../vision.md) • [Product index](../product/README.md) • [UI index](../ui/README.md) • [Tech index](../tech/README.md) • [Project README](../../README.md)
