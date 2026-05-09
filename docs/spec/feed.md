# ThreeSteps — Feed (Spec)

This document defines the follower-facing feed model: what “a follower’s public social feed” is, what can appear in it, and how authors control publication.

See also: [Social primitives](./social-primitives.md) • [Visibility](./visibility.md) • [Wallets](./wallets.md) • [Project README](../../README.md)

---

## 1. Core intent

- Every follower can have a **public social feed**.
- Wallet activity (especially from the personal wallet) can **seed** a follower’s feed by default.
- Other features can also contribute feed items (posts, forum/circle highlights, voucher actions, etc.).
- The set of wallet events that auto-post is expected to evolve over time; each event type is controllable via follower settings.

---

## 2. Feed item types (initial candidates)

Feed items are “activity events” rendered as social posts. Candidate types:
- Wallet: received fiat contribution (processor-handled), received crypto, issued voucher, voucher claimed, voucher fulfilled
- Social: created a circle, joined a circle, published a forum, created a post/story, reacted/commented (if chosen)
- Promotion: sponsored/highlight actions (must be labeled)

## 2.1 Event → targets → notifications (settings-driven)

From interview:
- We will continue to develop the kinds of wallet events that do auto-post.
- Each event can be configured to:
  - auto-post to one or more **visibility targets**
  - trigger **push notifications** to those targets
  - be selectively toggled on/off in the follower’s **sync settings**

Working concept: “I sync, therefore, we are.”

### 2.1.1 Visibility targets are extensible (no hard cap)

Update (decision):
- Visibility targets are **only predefined types** (a closed, documented set).
- We will use only target types defined in ThreeSteps docs (no arbitrary follower-defined targeting predicates).

### 2.1.2 Predefined visibility target types (initial)

For event auto-posting and push notifications, targets are selected from:
- **Local-only (self)**: visible only on the author’s device/feed view.
- **Endocircular (circle members only)**: visible only to members of a circle.
- **Circular (circle outward)**: visible to non-members per the circle’s “published outward” setting.
- **Forum**: visible within a forum surface (especially published forums).
- **Extracircular (global)**: visible outside circles (global public surface).
- **Chat participants**: visible only to participants of a DM / out-of-circle chat.

Exact rendering rules per target type are defined in `docs/spec/visibility.md`.

---

## 3. Publication and authorship rules (layered control)

Feed items are authored by:
- the follower (direct action)
- or a feature acting on behalf of the follower (wallet / system event)

Publication is controlled by:
- the **content author** (follower), and
- the **container creator/governance** when a container is involved (circles/forums), per the visibility spec.

---

## 4. Open questions

- Are follower feeds globally discoverable by default, or discoverable-only with opt-in?
- Are “wallet-seeded feed items” on by default for all followers, or part of onboarding choice?
- Can a follower “repost” a circle-scoped post into their follower feed, and what approvals are required?
- What are the supported visibility target types (global, follower-followers, circles, forums, custom lists)?
- What is the push notification model (device-local, per-target subscription, digest vs realtime)?

---

**Docs navigation**  
[Docs index](../README.md) • [Specs index](./README.md) • [Interview hub](../interview/interview.md) • [Vision](../vision.md) • [Product index](../product/README.md) • [UI index](../ui/README.md) • [Tech index](../tech/README.md) • [Project README](../../README.md)
