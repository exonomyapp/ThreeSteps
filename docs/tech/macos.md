# macOS

This document covers ThreeSteps’ macOS desktop target: prerequisites, build flow, and packaging considerations for a Flutter + Rust (iroh/Willow) stack.

See also: [Tech vision](./tech.md) • [Tech index](./README.md) • [Project README](../../README.md)

## 1. Tooling prerequisites

On a macOS development machine (or macOS CI runner):
- Flutter SDK
- Xcode Command Line Tools
- Rust toolchain (stable)

## 2. Rust integration

Typical expectations:
- Rust builds as a native library linked into the Flutter macOS runner.
- Bindings are maintained via `flutter_rust_bridge` (or equivalent).

## 3. Build outputs & signing

macOS distribution commonly requires:
- codesigning
- (optionally) notarization for smoother installs

Packaging options to choose later:
- `.app` bundle distribution
- `.dmg`
- signed `.pkg`

## 4. Updates

macOS update strategy is an explicit design decision; options include:
- in-app updater for the desktop binary (e.g., sparkle-like patterns)
- package-manager mediated updates (brew cask, etc.)

The P2P layer remains responsible for ThreeSteps’ decentralized data sync, and can optionally help distribute signed update artifacts, but the installation experience and trust chain must remain clear and verifiable.

---

**Docs navigation**  
[Docs index](../README.md) • [Interview hub](../interview/interview.md) • [Vision](../vision.md) • [Specs index](../spec/README.md) • [Product index](../product/README.md) • [UI index](../ui/README.md) • [Tech index](./README.md) • [Project README](../../README.md)
