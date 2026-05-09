# ThreeSteps — Circle Types (Catalog & Evolution)

This document defines how circle “types” are presented to followers, how the list evolves over time, and how custom types (“Other”) work.

See also: [Interview](../interview/interview.md) • [Forums](./forums.md) • [Circles](./circles.md) • [Project README](../../README.md)

---

## 1. Core statements (from interview)

- Circle types are a **centrally managed list** that is distributed via Willow/Iroh; updates eventually sync.
- ThreeSteps loads with **no circles by default**.
- **Family** is the first recommended type.
- A follower can create a circle from provided options, or choose **Other** to create a new kind.
- Forums exist to organize circles, and 3S creates public forums that highlight circles.
- Circles are created in the 3S follower app; forums are created on Conscia nodes (indexing layer).

---

## 2. Circle type catalog

This spec will eventually enumerate:
- built-in circle types (e.g., Family, Catechism Class, Sponsor, Mission Team, Study Group, etc.)
- default governance type per circle type (owned vs shared)
- default capabilities template per type
- default UI affordances per type (e.g., which screens/features are emphasized)

For now, the catalog is intentionally TBD.

---

## 3. “Other” (custom types)

Open decisions:
- What fields define a custom type? (name, icon, description, governance default, capability template)
- Can custom types be promoted to official types later?
- Are custom types local-only, circle-scoped, or shareable between followers?
- What happens if a central catalog later introduces a type with the same name?

---

## 4. Distribution via Willow/Iroh

We will define how the type catalog is:
- authored (project-controlled)
- signed (project signing keys)
- discovered (how followers obtain the catalog offline-first)
- updated (eventual sync)

---

**Docs navigation**  
[Docs index](../README.md) • [Specs index](./README.md) • [Interview hub](../interview/interview.md) • [Vision](../vision.md) • [Product index](../product/README.md) • [UI index](../ui/README.md) • [Tech index](../tech/README.md) • [Project README](../../README.md)
