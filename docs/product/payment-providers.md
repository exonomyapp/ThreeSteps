# ThreeSteps — Payment Providers (Global Coverage)

This document recommends a starting set of payment providers to complement Stripe so ThreeSteps can support followers globally.

See also: [Monetization](./monetization.md) • [Wallets](../spec/wallets.md) • [Interview](../interview/interview.md) • [Project README](../../README.md)

---

## 1. Goal

ThreeSteps should support:
- broad country coverage
- popular local payment methods (not just cards)
- platform/marketplace flows (so followers and 3S can each have their own accounts)

We assume Stripe remains a primary provider where available, but not the only one.

---

## 2. How we choose providers (principles)

Because ThreeSteps is for Catholics globally, “global coverage” means:
- supporting countries where Stripe is strong **and** countries where Stripe is not the dominant provider
- supporting **local** payment methods (not only cards)
- having an API + onboarding flow that can be used by followers (not just by 3S centrally)

In practice, no single provider covers everything. The strategy is:
1) pick 1–2 “global PSPs” (broad footprint, many methods)
2) add 1 “emerging markets / local methods aggregator”
3) optionally add regional adapters for major blocks (India, LATAM, China)

## 3. Candidate providers (recommended short list)

### 3.1 Stripe (baseline)

Keep Stripe for its strong coverage and mature platform tooling.

Also relevant for “interaction-style” payment flows:
- Stripe Connect supports “separate charges and transfers” (charge first, transfer later; can split to multiple recipients).
- Stripe also documents a “funds segregation” feature (private preview) for holding allocated funds before transfer.

### 3.2 Adyen (global PSP + many local payment methods)
Adyen is a strong “global PSP” candidate with broad payment-method support and APIs suitable for global expansion.

### 3.3 Checkout.com (global PSP alternative)
Checkout.com is another global PSP candidate. It can complement Stripe/Adyen in regions and acquiring setups where it performs better.

### 3.4 dLocal (high-growth / emerging markets)
dLocal emphasizes “high-growth markets” and local methods across Africa, Asia, and Latin America.

### 3.5 PayPal / Braintree (global consumer wallet + card processing)
PayPal is a globally recognized consumer payment method; Braintree provides developer APIs and can be useful for follower-run donation-style flows where PayPal adoption is strong.

### 3.6 Regional adapters (later)
- India: Razorpay / PayU
- Latin America: Mercado Pago
- Africa: Flutterwave / Paystack
- China: Alipay / WeChat Pay (often via cross-border offerings or through a PSP/aggregator)

---

## 4. Recommended starting configuration (proposal)

Given the need for global Catholic coverage and follower-empowering APIs, a pragmatic first configuration is:
- **Stripe** (baseline)
- **Adyen or Checkout.com** (pick one as the second global PSP)
- **dLocal** (emerging markets / local methods)

Then add regional adapters only when we have concrete follower demand in specific regions (India/LATAM/Africa/China).

## 5. “Next tier” region-specialists (optional additions)

If we want deeper regional specialization beyond the starter set:

- **India**: Razorpay or PayU (strong local market presence)
- **Latin America**: Mercado Pago (strong regional adoption)
- **Africa**: Flutterwave or Paystack (strong regional adoption)
- **China**: Alipay / WeChat Pay (usually via an aggregator or provider that supports local acquiring)

We can keep these as optional “adapters” after we ship the initial three.

---

## 6. Architectural guidance: pluggable provider adapters

To keep ThreeSteps decentralized and follower-controlled:
- treat each provider as an adapter behind a common internal interface
- store only the minimum provider metadata necessary for reconciliation
- keep follower visibility decisions in Settings (not hard-coded defaults)

---

**Docs navigation**  
[Docs index](../README.md) • [Product index](./README.md) • [Interview hub](../interview/interview.md) • [Vision](../vision.md) • [Specs index](../spec/README.md) • [UI index](../ui/README.md) • [Tech index](../tech/README.md) • [Project README](../../README.md)
