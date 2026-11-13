# Acceptance checklist — 0.1.0
- [x] Four declarative themes and semantic token rules
- [x] Versioned identity and official glyph used unchanged
- [x] Build generator, focused tests, no activation
- [x] Linux/Windows/macOS CI configured
- [ ] Confirm `npm run check` green in GitHub Actions
- [ ] Verify packaged VSIX and SHA-256 from CI
- [ ] Install VSIX on actual VS Code and ArmoTuSitio IDE
- [ ] Compare authentic Dark/Light and HC screenshots from Extension Development Host
- [ ] Confirm cross-editor accessibility with screen reader
- [ ] Configure GitHub main ruleset and repository merge settings (requires repository-admin API)
- [ ] Register trusted publisher for Marketplace and Open VSX (requires manual registry setup)
- [ ] Obtain explicit publication authorization
## Restrictions
Preview only. No release or registry publishing without authorization. No claims of manual validation.

## CI remediation (2026-11-13)
- [x] Windows-only CRLF vs LF false-positive reproduced from CI matrix and generated-file comparison; JSON generator normalizes CRLF on read.
- [x] Added `.gitattributes` so generated JSON remains LF after Windows checkout.
- [ ] Confirm new Windows, Ubuntu and macOS CI green for this commit; prior Ubuntu/macOS passed, Windows failed.
