# ThreeSteps — Discovery and Conscia (Spec)
This document defines how followers, circles, and Conscia nodes are discovered in a multi-layer peer-to-peer environment.
See also: [Technology](../tech/tech.md) • [Visibility](./visibility.md) • [Circles](./circles.md) • [Project README](../../README.md)

## 1. Conscia model
- Anyone can deploy a Conscia node and pay for their own hosting.
- Conscia nodes participate in the same peer network as user devices.
- Conscia nodes provide services that improve reachability and discovery, without controlling user content.

## 2. Discovery layers

### Layer A — Local proximity
Examples:
- QR codes
- local broadcast (Wi‑Fi / Bluetooth-style proximity)

Use cases:
- limited connectivity onboarding
- in-person formation where people are physically nearby

### Layer B — Direct introductions
Examples:
- someone shares a link or QR out-of-band
- invite artifacts that can be carried offline

### Layer C — Conscia-assisted introductions
Conscia nodes can help people and circles find each other when direct connectivity is blocked.

### Layer D — Conscia-to-Conscia federation
Conscia nodes can connect to other Conscia nodes to improve:
- reachability
- discoverability of published forums and circles

## 3. What is discoverable
Circles and published forums can be discoverable.
Open decision points include whether discoverable includes:
- existence only (name + type)
- membership list
- live endpoints for joining or observing

## 4. Access requests
When a follower wants access to Conscia services, they submit an access request to a Conscia node.
A Conscia operator reviews and approves or denies the request in ConSoul.

## 5. Trust and abuse resistance
Open decisions to lock:
- How followers decide which Conscia nodes to trust.
- How spam is mitigated for public discovery surfaces.
- Whether there are official Conscia nodes alongside community-run ones.

---
**Docs navigation**  
[Docs index](../README.md) • [Specs index](./README.md) • [Interview hub](../interview/interview.md) • [Vision](../vision.md) • [Product index](../product/README.md) • [UI index](../ui/README.md) • [Tech index](../tech/README.md) • [Project README](../../README.md)
