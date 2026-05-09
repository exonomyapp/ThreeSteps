# ThreeSteps — Conscia Hosting Model (Product)

This document captures how 3S offers to host/manage Conscia nodes while preserving decentralized philosophy and follower ownership.

See also: [Discovery & Conscia federation](../spec/discovery.md) • [Monetization](./monetization.md) • [Project README](../../README.md)

---

## 1. Core intent (from interview)

- 3S will offer a managed Conscia hosting experience (“typical cloud approach”).
- In decentralized philosophy, it is the **follower’s cloud credentials** that provision the infrastructure (their own billing account).
- 3S is paid a **Conscia management fee** on top of what the follower pays their cloud provider.
- Provisioning is automated through OpenTofu tooling; the follower mostly experiences “it works”.
- Conscia can also be installed by anyone on their own hardware; in that case 3S earns no hosting revenue.
- Conscia is open source (like 3S).

---

## 2. Implications

### 2.1 Ownership and accountability
- The follower owns the cloud bill and the infrastructure resources.
- 3S provides managed automation and support, not centralized control over content.

### 2.2 Product surfaces we need
- “Deploy Conscia” wizard in the follower app (or web portal) that:
  - guides credential setup
  - selects a provider/region/size
  - shows cost estimates
  - deploys via OpenTofu
- Operational dashboard:
  - health, reachability, TURN/STUN status, storage usage
  - federation peers (who this Conscia connects to)

---

## 3. Open questions

- Which cloud providers do we support first (AWS/GCP/Azure/DigitalOcean/Hetzner/etc.)?
- How do we store and protect “live credentials” used for provisioning in an offline-first world?
- Can followers rotate credentials without downtime?

---

**Docs navigation**  
[Docs index](../README.md) • [Product index](./README.md) • [Interview hub](../interview/interview.md) • [Vision](../vision.md) • [Specs index](../spec/README.md) • [UI index](../ui/README.md) • [Tech index](../tech/README.md) • [Project README](../../README.md)
