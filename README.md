# ArmoTuSitio Theme · Preview 0.1.0

[Original official ATS glyph](assets/ats-glyph.svg)

Four original color themes for VS Code, ArmoTuSitio IDE and compatible editors. Declarative only: **zero runtime dependencies, zero telemetry, zero activation overhead**.

[Moodboard — design study, not an editor screenshot](docs/moodboard.svg)

## Choose a theme / Elegí tu tema
Open **Preferences → Color Theme** (`Ctrl+K Ctrl+T`) and select **ArmoTuSitio Dark Premium**, **ArmoTuSitio Light**, **ArmoTuSitio High Contrast Dark** or **ArmoTuSitio High Contrast Light**.

## Features / Funcionalidades
- Workbench: terminal, sidebar, explorer, tabs, activity bar, status bar, debugging, Git, diff and chat surfaces.
- Semantic tokens and TextMate scopes for Go, Java, JS/TS, Python, PHP, Rust, SQL, YAML, JSON, HTML, CSS and others (requires language grammar/server for scopes).
- Targeted automated WCAG text contrast checks; no modification of user settings.
- ATS official colors: `#141B22` + `#F9ED32` with the unchanged official brand glyph.

## Install / Instalación
Use the VSIX from the successful PR CI artifact (not yet published): **Extensions → ... → Install from VSIX**. Compatible with VS Code 1.90+.

## Development
```sh
npm run check
npm run build
npm run package
```

See [brand manual](docs/BRAND.md), [acceptance checklist](docs/ACCEPTANCE.md), [publishing governance](docs/PUBLISHING.md). This preview is **not a public release**.

## Screenshots / Capturas
Real Development Host screenshots are intentionally **pending**, not fabricated. Capture all four variants on real Go/Java/TS/PHP workspaces before launch.

## License / Licencia
MIT for source. Official ATS brand assets retain their separate trademark ownership.
