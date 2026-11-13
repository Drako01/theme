# Controlled publishing
1. PR CI produces the immutable VSIX and `.sha256` file once. Review CI evidence before squash merge.
2. The manual `publish.yml` requires `ci_run_id` for the passing **pull_request** workflow, an exact `pr_head_sha` and a target registry. It compares HEAD tree against the reviewed PR head, downloads the existing artifact, and checks its SHA-256.
3. Human authorization is required before triggering the workflow. Use the protected `marketplace` or `open-vsx` environment.
4. Register Trusted Publishers with repo `Drako01/theme`, workflow `publish.yml` and chosen environment. Initial Open VSX trusted publishing may require an existing version bootstrapped by the owner.
5. `vsce publish --oidc --packagePath` (Marketplace) and `ovsx publish ... --trusted-publishing` (Open VSX) use short-lived tokens. Do not store PATs. Preview registration must be coordinated with registry capabilities before first public upload.
