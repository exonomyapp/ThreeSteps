# ThreeSteps — Monetization (Product Spec)

This document defines how ThreeSteps funds ongoing operations (especially Conscia nodes) while preserving the project’s privacy and decentralization goals.

See also: [Interview](../interview/interview.md) • [Forums](../spec/forums.md) • [Tech vision](../tech/tech.md) • [Project README](../../README.md)

---

## 1. Why monetization matters in ThreeSteps

ThreeSteps includes infrastructure-like components (Conscia nodes) that improve:
- reachability (TURN/STUN)
- relay performance and reliability
- recovery and enabling services

These require funding for hosting, bandwidth, and operations.

---

## 2. Revenue streams (initial candidates)

### 2.1 Paid highlighting (promotion) inside forums

From interview:
- Forums exist to highlight circles by inclusion.
- Followers can pay for “professional advertising grade” highlighting, similar to mainstream listing services.

To be specified:
- Where promoted placement appears (within 3S public forums, within published forums, both?)
- How “sponsored” is labeled (transparency expectations)
- What data is used (privacy constraints; avoid behavioral ad tracking)
- Abuse prevention (spam circles, scams, impersonation)

Current decision:
- “Sponsored” labeling is required; detailed placement rules will be specified later.

### 2.2 Optional subscriptions / donations (candidate)

Potential approaches:
- individual subscription to fund Conscia operations
- optional donation tiers
- sponsorships for parishes / missions

Not yet decided—listed here as a placeholder category.

### 2.3 Managed Conscia hosting fee (service model)

From interview (direction):
- 3S can offer to host/manage Conscia nodes on behalf of followers.
- In keeping with decentralization, the follower’s own cloud credentials/billing account provisions the infrastructure (via OpenTofu automation).
- 3S charges a management fee for Conscia operations on top of the follower’s cloud bill.

See: `docs/product/conscia-hosting.md`

### 2.4 Indexing tiers (proposal)

To align discovery with sustainability:
- **Metadata indexing** (directory-style) can be a baseline/free service.
- **Content indexing** (searchable/excerpt/full-text) can be a paid service.

See: `docs/spec/indexing.md`

---

## 3. Privacy & decentralization constraints (must-haves)

We will explicitly constrain monetization so it does not become:
- surveillance-based ad tracking
- a centralized content control mechanism
- a requirement for basic app usability

Open items to lock:
- Do we allow any analytics? If yes, what is allowed?
- What is the minimum metadata required to process payments?
- How do we handle paid promotion without tracking followers?

---

## 4. Payment rails & compliance (to lock)

We need to decide:
- Supported payment methods (card, Apple/Google IAP, bank transfer, crypto, etc.)
- Whether we use a payment processor (Stripe, etc.)
- Refund policy
- Jurisdiction constraints and legal/compliance considerations

Current direction (from interview):
- 3S supports multiple payment processors/providers (at least 3 to start).
- Followers can connect their own payment-processor accounts; 3S itself also has a payment account, like any other follower.
- We do not need to avoid Apple/Google in-app payment solutions.
- Crypto receipts are supported via follower crypto wallets.

Provider selection:
- See: `docs/product/payment-providers.md`

## 4.1 “Escrow-like” interactions

We may need escrow-like flows for vouchers and other “interactions” that are not simple one-step transactions.

For Stripe, one relevant family of approaches is Stripe Connect’s “separate charges and transfers”, where the platform can create a charge and transfer funds later (including to multiple recipients). Stripe also mentions a “funds segregation” feature (private preview) that holds funds in a protected state before transfer.

This is a design space we will evaluate; the detailed payment architecture is not yet locked.

---

## 5. Open questions

- Can a forum owner monetize their own forum, or only 3S public forums?
- Who is eligible to pay for promotion (individuals, organizations, parishes)?
- What is the “unit” being promoted: a circle, a forum, or a post?
- Do we require identity verification (KYC) for followers who receive money?
- How are chargebacks handled, and who bears that risk (3S or the recipient)?

---

**Docs navigation**  
[Docs index](../README.md) • [Product index](./README.md) • [Interview hub](../interview/interview.md) • [Vision](../vision.md) • [Specs index](../spec/README.md) • [UI index](../ui/README.md) • [Tech index](../tech/README.md) • [Project README](../../README.md)
