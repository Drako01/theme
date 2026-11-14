# Acceptance checklist — ArmoTuSitio Theme 0.1.3 Preview

## Confirmed in repository
- [x] Four standalone, declarative color themes (Dark Premium, Light, HC Dark, HC Light)
- [x] Verified corporate colors and unchanged official glyph (SVG + PNG packaging asset)
- [x] Dark Premium graphite status background retained with yellow Activity Bar icons / Status Bar text; Light and HC Light low-glare surfaces; HC Dark unchanged
- [x] TextMate and semantic tokens; debug, Git, syntax and terminal surfaces
- [x] Shared UI tokens for current ArmoTuSitio IDE Chat / Control Center / Accounts views
- [x] No activationEvents, main entrypoint, runtime dependencies or telemetry
- [x] Bilingual professional README, moodboard, brand manual, version history
- [x] Focused generator, contrast, semantic and shared-token tests
- [x] Tri-OS GitHub Actions, VSIX inspection and SHA-256 in PR artifacts
- [x] Version-bump auto-publish workflow on protected main, plus manual recovery; PR VSIX reuse, exact SHA/tree gate, OIDC

## Previous verified CI
- [x] https://github.com/Drako01/theme/actions/runs/43523055218 — Ubuntu PASS, Windows PASS, macOS PASS, package PASS, validated-vsix produced
- [x] CRLF-only Windows mismatch fixed in c0a298655df5e6390f007c4e8be1ba2b1889fabf
- [x] npm ETARGET packaging failure fixed in cd3bcdd5ecca61868e860c5b575e9dbddef27234

## Release blockers / acceptance pending
- [ ] **Latest PR head**: tri-OS jobs all green and VSIX + SHA-256 artifact verified (prior CI does not cover new edits)
- [ ] Install real VSIX in current VS Code and ArmoTuSitio IDE (both fresh and existing profile)
- [ ] Inspect native Activity Bar icon and Status Bar text colors in ArmoTuSitio IDE (custom SVG/CSS may override theme tokens)
- [ ] Inspect Light and HC Light surfaces and syntax in real editor at 100%/125% scaling
- [ ] Capture genuine Extension Development Host screenshots for all four variants, including IDE Chat and multilingual code
- [ ] Manual accessibility acceptance (focus/hover/selection, high contrast, long sessions, screen reader)
- [ ] Configure main ruleset / PR required / squash-only / linear history in repository settings
- [x] Marketplace and Open VSX Trusted Publisher registrations shown by owner for publish.yml (environment names marketplace / open-vsx)
- [ ] Confirm GitHub environment authorization in first real publish run
- [ ] Merge the validated 0.1.3 PR to authorize automatic registry publication

## Release restrictions
Preview only: `preview: true`. A green, version-bumping PR merge authorizes automatic publishing; do not publish before merge. Do not describe simulated moodboard as a functional screenshot. Do not claim real runtime installation or manual accessibility verification until independently checked.
