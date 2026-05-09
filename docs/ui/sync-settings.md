# ThreeSteps — Sync Settings (UX + Behavior Spec)

This document explains what “Sync Settings” are, why they exist, and how they work with **visibility targets** and **notifications**, with concrete examples.

See also: [Feed](../spec/feed.md) • [Visibility](../spec/visibility.md) • [Wallets](../spec/wallets.md) • [Project README](../../README.md)

---

## 1. Why Sync Settings exist

ThreeSteps is offline-first and decentralized. Followers are expected to take responsibility for:
- what data propagates
- who is notified
- what is visible in different places (“targets”)

Sync Settings are the control panel for that responsibility.

---

## 2. Key concepts

### 2.1 Event types
An **event type** is a kind of thing that can propagate and/or generate a feed item, such as:
- “wallet: received crypto”
- “voucher: issued”
- “forum: published”

Event types will expand over time.

### 2.2 Visibility targets (predefined types)
Targets are a closed, documented set. Current target types include:
- Local-only (self)
- Endocircular (circle members only)
- Circular (circle outward)
- Forum
- Extracircular (global)
- Chat participants

See: `docs/spec/feed.md` and `docs/spec/visibility.md`

### 2.3 Notifications
Notifications are separate from visibility:
- something may be visible in a target without sending a push notification
- or it may send a notification (real-time or digest) to a target audience

---

## 3. Scope model (proposed)

You asked whether we can support **all three dimensions** with their own follower-level defaults, and then override any specific intersection.

Yes—this is feasible and it matches how Willow + meadowcap + Iroh “want” to work.

### 3.1 The three dimensions

We model Sync Settings as a precedence-aware policy function over:

1) **Event type**  
   Example: `wallet.received_fiat`, `voucher.issued`, `chat.message_received`

2) **Visibility target type** (predefined)  
   Example: endocircular, circular, extracircular, forum, chat-participants, local-only

3) **Target instance / context**  
   Example: a specific circle `circle:abc`, a specific forum `forum:def`, a specific chat `chat:xyz`

### 3.2 Defaults and overrides

We can support:
- follower-level **global defaults**
- follower-level **per-event defaults**
- follower-level **per-target-type defaults**
- follower-level **per-instance defaults** (per circle/forum/chat)
- and finally **intersection overrides** (event × target-type × instance)

The effective policy is computed locally using a deterministic precedence order.

### 3.3 Why this fits Willow + meadowcap + Iroh

- **Willow (path-based):** store policy objects at hierarchical paths, e.g.:
  - `/settings/sync/default`
  - `/settings/sync/by_event/wallet.received_fiat`
  - `/settings/sync/by_target_type/extracircular`
  - `/settings/sync/by_instance/circle:abc`
  - `/settings/sync/overrides/{event}/{target_type}/{instance}`

- **Meadowcap:** capabilities decide who may write which settings paths (normally the follower only).

- **Iroh:** gossip/direct sync replicates these policy objects offline-first without a central server; no coordination is required to *use* the settings—each follower computes their own policy locally.

### 3.4 Consequences / trade-offs

Pros:
- maximum autonomy and precision (matches your “instrumentation” goal)
- offline-safe and coordination-free
- easy to extend with new event types later

Cons:
- UI complexity: we need a good UX to prevent settings from becoming unmanageable
- requires careful “explainability” (“why did this post/notify?”)

Mitigation:
- present the policy in layers: “defaults” first, then “advanced overrides”
- provide a “policy trace” UI: show which rule matched and why

---

## 4. Examples

### Example A — Personal wallet seeds feed, but not everywhere
Follower setting:
- Global default: wallet events auto-post to **Extracircular (global)**.
- Per-event override: “wallet: received fiat contribution”
  - visible: global = ON
  - notify: global = OFF (no push)

Outcome:
- The follower’s feed shows the event publicly, but does not spam everyone with notifications.

### Example B — Circle is localized, author tries “global”
Circle owner setting:
- Circle scope policy: **Localized circle**.

Author post setting:
- Author scope: **Global (extracircular)**.

Outcome (per visibility spec):
- Effective reach is limited by circle policy.
- Post is visible only within the circle (endocircular/circle-only).

### Example C — Same event, different targets
Follower setting:
- For “voucher: issued”
  - Post to: Forum = ON, Global = OFF
  - Notify: Forum = ON, Global = OFF

Outcome:
- The voucher appears and notifies inside the forum only, not globally.

### Example D — Chat events
Follower setting:
- For “chat: message received”
  - Visible: Chat participants only (always)
  - Notify: ON for important chats, OFF for others (per-target override by chat/circle)

Outcome:
- Messages remain private to participants, but notification behavior is tunable.

---

## 5. Open questions (to lock next)

1) What is the exact precedence order (instance override beats event override beats target-type override beats global default, etc.)?
2) Do we support “digest” notifications as a first-class mode (daily summary), especially for offline-first contexts?
3) Where do Sync Settings live in UI: Settings > Networking, or Settings > Privacy, or both?

---

**Docs navigation**  
[Docs index](../README.md) • [UI index](./README.md) • [Interview hub](../interview/interview.md) • [Vision](../vision.md) • [Specs index](../spec/README.md) • [Product index](../product/README.md) • [Tech index](../tech/README.md) • [Project README](../../README.md)
