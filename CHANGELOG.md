# Changelog

Changes to ArmoTuSitio Theme are documented here.

## [0.2.0] — Stable release and higher-contrast Light

- First non-preview release: `preview` is now `false` in the manifest and the VSIX verifier; CI is no longer named "Preview CI".
- Light: text `#141B22`, secondary text and comments `#3A4C5E`, and all syntax colors reach ≥ 7:1 on the `#F1F2EE` editor (previously ≥ 4.5:1).
- Light: UI borders `#74889A` reach ≥ 3:1 against editor, sidebar and title bar; indent guides, whitespace and line outline keep a subtle `#B8C6D1` via a new optional `subtle` palette key.
- Light: darker ochre accent `#5E5300` (buttons, badges, Status Bar) gives ≥ 7:1 with white text; stronger selection `#BFD3DF`.
- Dark Premium, High Contrast Dark and High Contrast Light are unchanged (generated files verified identical).
- New tests: Light AAA text/syntax/buttons, border contrast, and dark-theme regression guard.

## [0.1.3] — Brand-yellow icons and comfortable light themes

- Dark Premium: Activity Bar active/inactive icon colors and Status Bar text use official `#F9ED32`; the full-width bar stays graphite `#202C37`.
- Editor, syntax, sidebar headings, tabs, terminal, logo and High Contrast Dark remain unchanged.
- Light: replace the pure-white editor with low-glare off-white `#F1F2EE` and coordinated muted chrome, selections and hover states.
- High Contrast Light: warm the near-white editor to `#F2F3EF` while retaining required high text and syntax contrast.
- Targeted regression tests, deterministic generation and the existing verified-PR OIDC release process.

## [0.1.2] — Calm Dark Premium status bar

- Replace full-width yellow with corporate graphite `#202C37`, text `#E5E7EB`, and a subtle warm separator `#53533A`.
- Add restrained hover and active states for status bar items; preserve yellow for small focus and identity accents.
- Retain the official logo and the Light / High Contrast modes unchanged; no unsupported CSS gradients or custom IDE CSS.
- Keep the original CI-gated, OIDC automatic publication and immutable VSIX process.

## [0.1.1] — Automated OIDC release

- Automatically publish a version-bumping, CI-validated merge to `main` with `publish.yml`.
- Reuse the PR's original VSIX and SHA-256 without rerunning the cross-platform test suite or rebuilding after merge.
- Verify merged PR head, identical Git trees, successful CI workflow identity, package version and checksum before either registry.
- Publish the same bytes to Visual Studio Marketplace and Open VSX with registered, short-lived OIDC identities.
- Create a GitHub Release containing that same VSIX and checksum after Marketplace success.
- Retain manual dispatch for selective recovery and skip existing published versions.
- Theme visuals, palettes, names and official logo remain unchanged.

## [0.1.0] — Initial Preview

- Four original color themes based on verified corporate colors: Dark Premium, Light, High Contrast Dark and High Contrast Light.
- Declarative workbench, terminal ANSI, Git/diff, diagnostics and debugging colors.
- Syntax and semantic highlighting with focused accessibility assertions.
- Color tokens aligned with the existing ArmoTuSitio IDE Chat Harness, Control Center and accounts UI.
- Official brand glyph packaged in SVG and PNG forms; no runtime code or dependencies.
- Tri-platform PR checks, deterministic JSON generator, VSIX smoke inspection and SHA-256 artifact.
- Bilingual README, brand guide, moodboard and honest acceptance checklist.
