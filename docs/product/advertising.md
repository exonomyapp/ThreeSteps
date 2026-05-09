# ThreeSteps — Advertising (P2P Model)

This document explores advertising/promotion in a decentralized, P2P-first environment, emphasizing responsibility and transparency.

See also: [Monetization](./monetization.md) • [Privacy constraints](./privacy-monetization.md) • [Forums](../spec/forums.md) • [Indexing](../spec/indexing.md) • [Project README](../../README.md)

---

## 1. Core direction (from interview)

- Circles/forums may **disable hiding advertisements**, creating a “cost to membership”.
- There is also a “cost to avoiding being targeted” (followers can opt out, but that choice has consequences).
- Advertising can be tied to content visibility:
  - viewing an ad is how certain content becomes visible (“ad-gated content”)
  - this can allow ad-free circles/forums while still permitting members to advertise on content they control
- We want to emulate decentralized philosophy in these designs because it affects device resources and performance.

---

## 2. “Decision doc exists” clarification

When we say “decision doc exists” around “minimal or no behavioral profiling”, we mean:
- [Privacy constraints for monetization](./privacy-monetization.md)

That doc lays out options (behavioral vs contextual vs no targeting) so we can decide intentionally.

---

## 3. Components we likely need

### 3.1 Sponsored labeling
Sponsored/promoted items are clearly labeled (already decided).

### 3.2 Viewer controls
Follower-level controls:
- show/hide sponsored items (where allowed)
- explainability (“why am I seeing this?”)

Circle/forum-level controls:
- allow hiding ads vs require ads

### 3.3 Ad-gated content (optional feature)
If implemented:
- the content author can mark content as “ad-gated”
- viewing an ad unlocks visibility (per target/context)
- the circle/forum can allow or prohibit ad-gated items

---

## 4. Open questions

- What counts as “viewing” an ad in an offline-first world?
- Can ad-gated content be shared via screenshot / re-post, and how do we treat that?
- Does ad gating apply only to extracircular/global surfaces, or also within circles/forums?

---

**Docs navigation**  
[Docs index](../README.md) • [Product index](./README.md) • [Interview hub](../interview/interview.md) • [Vision](../vision.md) • [Specs index](../spec/README.md) • [UI index](../ui/README.md) • [Tech index](../tech/README.md) • [Project README](../../README.md)
