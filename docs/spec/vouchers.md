# ThreeSteps — Vouchers (Spec)

This document defines vouchers: a non-monetary mutual-aid content type that can optionally involve payments, but is not itself money.

See also: [Interview](../interview/interview.md) • [Wallets](./wallets.md) • [Monetization](../product/monetization.md) • [Project README](../../README.md)

---

## 1. Core intent (from interview)

- Vouchers are non-monetary mutual aid (Kropotkin spirit).
- A voucher is closer to an IOU offering a product or service.
- A voucher:
  - declares value using an amount + currency specified by its author
  - may optionally include a payment requirement
- Vouchers are stored/organized in the wallet alongside other wallet records.

---

## 2. Voucher lifecycle (to lock)

We need to define:
- Issue: who can issue a voucher and where it is posted (circle, forum, DM)?
- Accept: how someone claims a voucher (and whether multiple can claim)
- Fulfil: how the promised product/service is marked delivered
- Close: how the voucher is closed/expired
- Dispute: how disagreements are handled

Current decision:
- Vouchers can be posted **anywhere**.
- Vouchers can be **claimed by anyone** upon satisfying the **requirements set by the voucher’s author**.

### 2.1 Author requirements (to specify)

We still need to define how “requirements” are expressed and verified, for example:
- free-text requirements (human-judged)
- checkbox/attestation requirements (claimant asserts)
- capability/role requirements (meadowcap-based)
- payment requirement (optional; see §3)

---

## 3. Optional payment requirement

If a voucher optionally requires payment:
- what triggers the payment (acceptance? fulfilment?)
- can payment be escrow-like (authorized then captured later)?
- who bears chargeback risk?

This section will likely connect to Stripe Connect patterns such as separating the charge and later transfer/capture (if used).

---

## 4. Visibility & ethics

Because wallets are intended to be public/treasury-like:
- we must decide what voucher metadata is public (issuer identity, value, status, fulfilment)
- we must avoid turning vouchers into hidden currency

---

## 5. Open questions

- Are vouchers transferable?
- Can vouchers be revoked after acceptance?
- How do we prevent scam vouchers or coercion?
- Are vouchers denominated only for reference, or do we require a standardized “valuation” model?

---

**Docs navigation**  
[Docs index](../README.md) • [Specs index](./README.md) • [Interview hub](../interview/interview.md) • [Vision](../vision.md) • [Product index](../product/README.md) • [UI index](../ui/README.md) • [Tech index](../tech/README.md) • [Project README](../../README.md)
