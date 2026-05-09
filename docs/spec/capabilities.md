# ThreeSteps — Capabilities (Meadowcap) (Spec)

This document defines the initial capability sets for ThreeSteps using meadowcap, derived from the committed feature set.

See also: [Circles](./circles.md) • [Chats](./chats.md) • [Forums](./forums.md) • [Project README](../../README.md)

---

## 1. Capability philosophy

- Capabilities express “who can do what” without centralized ACL enforcement.
- Circle/chat governance rules map onto capability templates.
- “Revocation” in shared governance is not permission revocation; it is *state revocation* (undo events) performed by authorized moderators.
- Moderation is designed to be **author-first** and **communal**, prioritizing shared responsibility over centralized control.

---

## 2. Capability templates (draft)

### 2.1 Owned circle (default)
Actors:
- owner
- delegates (subordinate)
- members (regular)

Current decisions:
- owner exclusively can remove followers from the circle
- delegates can mute followers
- other circle capabilities are shared by owner + delegates

Draft capabilities:
- circle.invite_member
- circle.accept_member
- circle.remove_member (owner-only)
- circle.mute_member (delegate+owner)
- circle.edit_settings (delegate+owner) (to confirm)
- circle.delete_content (delegate+owner) (to confirm)

### 2.2 Shared circle
Actors:
- moderators (equal)
- members

Current decisions:
- any moderator can take moderation actions
- any moderator can revoke any moderator’s moderation actions

Draft capabilities:
- shared_circle.moderate (delete/remove/mute/etc.)
- shared_circle.revoke_moderation_event
- shared_circle.recruit_moderator (to confirm; parallels shared chat)

### 2.3 Owned chat
Actors:
- owner (creator)
- moderators (selected by creator)
- participants

Draft capabilities:
- chat.add_moderator (owner)
- chat.remove_moderator (owner)
- chat.make_public (requires 100% moderator consensus; enforced via event protocol)

### 2.4 Shared chat
Actors:
- moderators (equal)
- participants

Current decisions:
- moderators can recruit each other at will (no privileged creator)
- last moderator out triggers tombstone

Draft capabilities:
- shared_chat.recruit_moderator (any moderator)
- shared_chat.tombstone (rule depends on what “anyone can destroy” means; to lock)

### 2.5 Forums
Actors:
- forum creator/owner
- (optional) forum moderators

Draft capabilities:
- forum.add_circle
- forum.remove_circle
- forum.publish
- forum.unpublish

---

## 3. Open questions

Mission-driven questions we need to lock later:
- In shared chats, does “anyone can destroy it” mean any participant, or any moderator, or any follower who can see it?
- Are forum publishing actions revocable? If yes, by whom?

---

**Docs navigation**  
[Docs index](../README.md) • [Specs index](./README.md) • [Interview hub](../interview/interview.md) • [Vision](../vision.md) • [Product index](../product/README.md) • [UI index](../ui/README.md) • [Tech index](../tech/README.md) • [Project README](../../README.md)
