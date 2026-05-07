# Windows

This document covers ThreeSteps’ Windows desktop target: prerequisites, build flow, and packaging considerations for a Flutter + Rust (iroh/Willow) stack.

See also: [Tech vision](./tech.md) • [Tech index](./README.md) • [Project README](../../README.md)

## 1. Tooling prerequisites

On a Windows development machine (or Windows CI runner):
- Flutter SDK
- Visual Studio with “Desktop development with C++” (MSVC toolchain)
- Rust toolchain (stable, MSVC)

## 2. Rust integration

Typical expectations:
- Rust builds a native library consumed by the Flutter desktop runner.
- Bindings are generated/maintained via `flutter_rust_bridge` (or equivalent).

## 3. Build outputs

Common outputs:
- A runnable folder build (for development/testing)
- An installer or packaged app (for distribution)

Packaging options to choose later:
- MSIX
- traditional installer (e.g., Inno Setup / WiX)
- portable zip distribution

## 4. Updates

Windows update strategy is an explicit design decision; options include:
- In-app updater for the desktop app binary (separate from P2P content sync)
- External packaging ecosystem updates (MSIX, winget, etc.)

The iroh/Willow layer is primarily for **data sync** and (optionally) **artifact distribution**, but desktop binary update UX and trust model should be specified deliberately.

---

**Docs navigation**  
Previous: [iOS](./ios.md) • [Tech index](./README.md) • Next: [macOS](./macos.md)

