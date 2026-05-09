# ThreeSteps — Privacy Constraints for Monetization (Decision Doc)

This document elaborates the “privacy constraint” question in monetization so you can decide intentionally.

See also: [Monetization](./monetization.md) • [Forums](../spec/forums.md) • [Visibility](../spec/visibility.md) • [Project README](../../README.md)

---

## 1. The decision we must make

When we monetize via promotion/highlighting, we must decide what kind of targeting (if any) is permitted.

This is not only an ethical decision; it affects:
- how much data the app needs to collect
- what metadata leaks in a decentralized system
- what kind of abuse becomes possible

---

## 2. Targeting models (plain-language)

### 2.1 Behavioral targeting (“tracking ads”)
Promotion is targeted based on an individual follower’s behavior over time, such as:
- what they read/click
- who they talk to
- which circles/forums they browse
- their inferred interests

Implications:
- requires tracking and profiling
- creates sensitive metadata trails
- tends to centralize data and control

### 2.2 Contextual targeting (“where you are right now”)
Promotion is targeted based on context, such as:
- the forum you are viewing
- the circle category/type you are browsing
- the language/region setting you selected explicitly

Implications:
- can be done without persistent tracking
- aligns better with decentralization and privacy goals

### 2.3 No targeting (uniform placement)
No targeting at all; “sponsored” entries appear uniformly or in fixed rotations.

Implications:
- simplest privacy story
- potentially weaker monetization efficiency

---

## 3. What “privacy-first” can mean for 3S promotion

Candidate constraints (you can choose):
- No behavioral targeting (ban tracking-based profiles)
- No selling or sharing follower data with advertisers
- No third-party ad SDKs that fingerprint devices
- Minimal logging; prefer aggregated metrics
- Clear “Sponsored” labeling (already decided)

---

## 4. Decentralization-specific concerns

Even without a central server, promotion can leak information:
- The mere act of retrieving promoted listings can reveal interests.
- Payment flows can reveal identities (via processors).
- “Public circles” are already discoverable, which changes what is sensitive.

We need to decide what is acceptable to be public and what should remain member-only.

---

## 5. Decision checklist (to answer in interview)

1) Are we banning behavioral targeting entirely?
2) If contextual targeting is allowed, what contexts are allowed? (forum category only? circle type?)
3) Are we allowing any analytics? If yes, what level (device-local only, aggregated only, opt-in)?
4) What metadata is displayed publicly for sponsored items? (sponsor name, amount paid, date range)

---

**Docs navigation**  
[Docs index](../README.md) • [Product index](./README.md) • [Interview hub](../interview/interview.md) • [Vision](../vision.md) • [Specs index](../spec/README.md) • [UI index](../ui/README.md) • [Tech index](../tech/README.md) • [Project README](../../README.md)
