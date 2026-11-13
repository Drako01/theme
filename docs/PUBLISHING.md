# Automated publishing — ArmoTuSitio Theme

**Trigger:** merge a PR that changes `package.json` version into protected `main`.
A `main` push without a version change does not publish. No publish job runs from a PR branch.

1. `ci.yml` validates the PR on Ubuntu, Windows and macOS, packages one VSIX and uploads the `validated-vsix` artifact with its SHA-256.
2. On a version-changing merge, `publish.yml` looks up the **actual merged PR** from the merge SHA and resolves a successful `ci.yml` run on the exact head SHA.
3. The provenance gate verifies the **identical Git tree**, CI workflow identity and successful conclusion, downloads that artifact, checks SHA-256 and the packaged version/publisher/name. Direct pushes without matching PR CI are rejected.
4. The original VSIX is handed unchanged to the protected `marketplace` and `open-vsx` jobs. Both use GitHub Actions **OIDC Trusted Publishing**; no long-lived PATs are needed. Already published versions are skipped.
5. After Marketplace publication, the same VSIX and SHA-256 are attached to a GitHub Release `v<version>`. Open VSX does not block the GitHub release if its registry is temporarily unavailable.

**Manual recovery:** Actions → `publish` → Run workflow on `main`, with `ci_run_id`, `pr_head_sha` and `registry` (`both`, `marketplace`, `open-vsx`). The same provenance gate applies, and retries do not rebuild the VSIX.

**Owner prerequisites:** preserve the protected `main` PR rules, ensure GitHub environments are named exactly `marketplace` and `open-vsx`, and maintain Trusted Publisher registrations for repository `Drako01/theme` and workflow `publish.yml`.

**Operational rule:** verify CI green before merge. Squash-merging the `0.1.1` PR is the authorization event for automatic publication. CI does not rerun on merge. The visual design, glyph and four declarative theme definitions are unchanged.
