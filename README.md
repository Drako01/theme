# ArmoTuSitio Theme

**Four original color themes for VS Code, ArmoTuSitio IDE, and compatible editors.**

[![Preview CI](https://github.com/Drako01/theme/actions/workflows/ci.yml/badge.svg)](https://github.com/Drako01/theme/actions/workflows/ci.yml)
![Version](https://img.shields.io/badge/version-0.1.1%20Preview-F9ED32?labelColor=141B22)
![MIT](https://img.shields.io/badge/license-MIT-2C3E50)
![Declarative](https://img.shields.io/badge/runtime-declarative%20only-2C3E50)

![Official ArmoTuSitio glyph](assets/ats-glyph.png)

[Español](#español) · [English](#english) · [CI y documentación](#quality--governance)

> **Preview 0.1.1.** The packaging is ready for automated publishing when the version-bump PR merges to `main` after green CI. The previous 0.1.0 is available on Open VSX. Screenshots and manual accessibility acceptance are still pending.

---

## Español

### Diseño profesional con identidad ArmoTuSitio

**ArmoTuSitio Theme** extiende al editor la identidad visual verificada de [armotusitio.com.ar](https://armotusitio.com.ar/) sin reemplazar el isotipo, modificar el logo corporativo ni sobrescribir preferencias personales.

- **Cuatro temas:** Dark Premium, Light, High Contrast Dark y High Contrast Light.
- **Superficies coherentes:** editor, Explorer, Activity Bar, sidebar, tabs, terminal, paneles, Status Bar, navegación, Command Center, chat y notificaciones.
- **Sintaxis y semántica:** reglas para funciones, tipos, strings, variables, propiedades, estructuras de control, números, comentarios y diagnósticos.
- **Accesibilidad:** checks automáticos de contraste sobre texto principal y scopes de sintaxis; variantes de alto contraste con objetivos reforzados.
- **Rendimiento y privacidad:** extensión 100% declarativa, sin Webviews, procesos residentes, telemetría, llamadas HTTP ni dependencias de ejecución.
- **Control del usuario:** la instalación no cambia el tema activo ni escribe archivos de configuración.

### Elegí entre cuatro variantes

| Tema | Tipo de VS Code | Experiencia |
| --- | --- | --- |
| **ArmoTuSitio Dark Premium** | `vs-dark` | Midnight, amarillo institucional, baja distracción para trabajo prolongado |
| **ArmoTuSitio Light** | `vs` | Superficies claras, ocre de alto contraste, ambientes luminosos |
| **ArmoTuSitio High Contrast Dark** | `hc-black` | Contraste reforzado sobre fondo negro, delimitadores destacados |
| **ArmoTuSitio High Contrast Light** | `hc-light` | Blanco y negro de contraste reforzado con acento ocre |

**Vista conceptual:** [moodboard de las cuatro variantes](docs/moodboard.svg) (estudio de diseño, **no** captura funcional).

**Capturas auténticas:** pendientes de realizar en Extension Development Host con proyectos Go, Java, TypeScript y PHP, así como con la UI del Chat Harness. No se reemplazan por imágenes simuladas.

### Identidad visual y relación con ArmoTuSitio IDE

| Token | Valor | Origen y función |
| --- | --- | --- |
| Midnight 900 | `#141B22` | Fondo corporativo oficial |
| Midnight 500 | `#2C3E50` | Superficies corporativas |
| Brand Yellow | `#F9ED32` | Acento institucional y foco |
| Yellow Gradient | `#D7C800` | Segunda parada del gradiente del isotipo |
| Slate | `#3A4756` | Trazo secundario del isotipo |
| Premium Editor | `#101820` | Superficie derivada de la identidad, no un token del sitio |
| Light Editor | `#FFFFFF` | Superficie adaptada a la variante clara |

La paleta proviene de `tailwind.config.ts`, `app/globals.css` y los SVG oficiales del proyecto ArmoTuSitio. El logo se reutiliza sin modificar los trazos ni la geometría.

**Compatibilidad con el IDE:** el repositorio [Drako01/armotusitio-ide](https://github.com/Drako01/armotusitio-ide) ya incluye los temas nativos **ArmoTuSitio Dark** y **ArmoTuSitio Light**; esta extensión ofrece **variantes adicionales**, no los reemplaza ni modifica el tema predeterminado del IDE. Los nuevos temas aportan colores para los tokens empleados por Control Center, Chat Harness y Account Manager: `--vscode-button-secondaryHoverBackground`, `--vscode-toolbar-hoverBackground`, `--vscode-testing-iconPassed`, `--vscode-textCodeBlock-background` y estados de validación.

### Instalación desde el VSIX validado

**Requisito mínimo:** VS Code **1.90+** (`engines.vscode: ^1.90.0`). ArmoTuSitio IDE y otros forks deben soportar las mismas APIs declarativas; el funcionamiento final requiere una instalación real.

1. Abrí [GitHub Actions → Preview CI](https://github.com/Drako01/theme/actions/workflows/ci.yml).
2. Elegí una ejecución **exitosa** del PR de la versión que quieras instalar.
3. Descargá el artifact **`validated-vsix`** (requiere sesión de GitHub cuando corresponda).
4. Extraé `armotusitio-theme-0.1.1.vsix` del ZIP.
5. En el editor: **Extensions → … → Install from VSIX…** y seleccioná el archivo.

Alternativa por terminal para VS Code:

```bash
code --install-extension armotusitio-theme-0.1.1.vsix
```

En ArmoTuSitio IDE, utilizá el comando específico de su distribución si difiere de `code`.

**Integridad:** el artifact también incluye `armotusitio-theme-0.1.1.vsix.sha256` para verificar que los bytes instalados son los aprobados por CI.

```bash
sha256sum -c armotusitio-theme-0.1.1.vsix.sha256
```

En Windows PowerShell: `Get-FileHash .\armotusitio-theme-0.1.1.vsix -Algorithm SHA256`, y compará el digest con el `.sha256` incluido.

### Selección y personalización voluntaria

Abrí **Preferences: Color Theme** desde la paleta de comandos (`Ctrl+Shift+P` / `Cmd+Shift+P`) o utilizá `Ctrl+K Ctrl+T` en Windows/Linux. Seleccioná una de las cuatro variantes. VS Code conserva tu selección.

**Ejemplo de configuración que podés realizar vos, nunca la extensión:**

```json
{
  "workbench.colorTheme": "ArmoTuSitio Dark Premium"
}
```

Los ajustes de `workbench.colorCustomizations`, `editor.tokenColorCustomizations` y `editor.semanticTokenColorCustomizations` del usuario prevalecen conforme a las reglas del editor.

### Lenguajes y cobertura

Las reglas genéricas de TextMate y Semantic Highlighting se aplican cuando el editor tiene gramática o servidor de lenguaje compatible:

| Ecosistema | Ejemplos |
| --- | --- |
| Backend | Java, Go, Python, PHP, Rust, C#, C++, Kotlin, Swift |
| Web | JavaScript, TypeScript, JSX, TSX, HTML, CSS, SCSS |
| Frameworks | React, Next.js, Angular, Vue, Spring Boot, Express (por sus lenguajes base) |
| Infraestructura y datos | JSON, YAML, SQL, Shell, Dockerfile y Terraform (si disponen de gramática compatible) |

**Importante:** Theme no incluye parsers ni language servers. Si una extensión externa cambia los scopes o las leyendas semánticas, los resultados pueden variar. Para diagnosticar un token, ejecutá **Developer: Inspect Editor Tokens and Scopes**.

### Accesibilidad, QA y seguridad

Los tests verifican: contraste mínimo **4,5:1** en pares de texto de la UI y scopes de sintaxis; **7:1** en pares principales de las variantes HC; integridad del manifiesto, existencia de los cuatro temas, resaltado semántico y presencia de tokens usados por la interfaz del IDE.

Estas pruebas **no equivalen a certificación WCAG integral**. Continúan pendientes la revisión manual en el host real, lectores de pantalla, perfiles de daltonismo y capturas de todas las variantes. Errores, warnings, breakpoints, Git y diff tienen colores específicos.

No solicita permisos adicionales, no ejecuta código durante la activación, no usa red y no incorpora dependencias de runtime. El VSIX se valida como archivo ZIP y se genera su SHA-256.

### Resolución de problemas

| Situación | Acción recomendada |
| --- | --- |
| No aparece el tema | Verificá la instalación del VSIX y recargá la ventana; buscá `ArmoTuSitio` en Color Theme |
| El editor rechaza el VSIX | Confirmá versión de VS Code y soporte de API del fork |
| Los tokens difieren respecto de otros proyectos | Revisá gramática, language server y personalizaciones de colores |
| Se ve diferente al IDE original | Dark Premium es deliberadamente distinto de ArmoTuSitio Dark (tema nativo) |
| El artifact no está disponible | GitHub puede exigir login y aplica retención temporal a artifacts |
| SHA-256 no coincide | No instales ese archivo; obtené nuevamente el artifact desde CI |
| La versión aún no aparece en Marketplace | Confirmá que el PR de esa versión se haya mergeado y revisá [publish.yml](https://github.com/Drako01/theme/actions/workflows/publish.yml) |

---

## English

### Designed for real development

ArmoTuSitio Theme brings the existing [ArmoTuSitio](https://armotusitio.com.ar/) brand system into the editor. It adds four independent color themes for VS Code and compatible forks. It does **not** alter user settings, replace the IDE's bundled themes, load remote resources, or start background processes.

**Highlights:** coherent workbench surfaces, syntax + semantic tokens, Git and debugging states, terminal ANSI colors, focused contrast checks, and zero activation/runtime dependencies.

### Available themes

| Theme | UI type | Intended use |
| --- | --- | --- |
| **ArmoTuSitio Dark Premium** | `vs-dark` | Low-distraction everyday coding, midnight/yellow identity |
| **ArmoTuSitio Light** | `vs` | Bright work environments with accessible ochre accents |
| **ArmoTuSitio High Contrast Dark** | `hc-black` | Reinforced boundaries and contrast on black |
| **ArmoTuSitio High Contrast Light** | `hc-light` | Reinforced boundaries and contrast on white |

[Open the design moodboard](docs/moodboard.svg) (**concept illustration**, not an editor screenshot). Genuine Extension Development Host screenshots are pending.

### Install the validated preview

1. Visit the [successful Preview CI runs](https://github.com/Drako01/theme/actions/workflows/ci.yml).
2. Download the **`validated-vsix`** artifact, extract `armotusitio-theme-0.1.1.vsix`.
3. In VS Code 1.90+ open **Extensions → … → Install from VSIX…**.
4. Open **Preferences: Color Theme** and select the desired variant.

Verify the downloaded package against the accompanying `.sha256` file. ArmoTuSitio IDE and other compatible forks should be validated on the actual target build.

**Supported highlighting** depends on grammars or language servers provided by VS Code and installed extensions. Java, Go, JS/TS, Python, PHP, Rust, SQL, YAML, JSON and popular frameworks are covered by general scopes and semantic token mappings.

**Accessibility:** CI checks selected foreground/background pairs at 4.5:1, and primary high-contrast pairs at 7:1, but full manual accessibility testing is still required. No telemetry, file access, additional permissions, or runtime code.

For issues, use [GitHub Issues](https://github.com/Drako01/theme/issues) with the editor version, OS, theme variant, language, reproduction steps, and any relevant screenshots.

---

## Quality & governance

### Reproducible development

Node.js 24 is used by the repository's GitHub Actions.

```bash
git clone https://github.com/Drako01/theme.git
cd theme
git switch main

npm run check             # generated-file parity, manifest and contrast tests
npm run build             # regenerate themes ONLY after palette/generator changes
npm run package           # build the VSIX without runtime dependencies
python3 scripts/verify-vsix.py dist/armotusitio-theme-0.1.1.vsix
```

| Location | Purpose |
| --- | --- |
| `themes/*.json` | Four declarative editor themes |
| `scripts/generate.mjs` | Version-controlled palette and theme generator |
| `tests/theme.test.mjs` | Focused manifest, syntax and accessibility tests |
| `scripts/verify-vsix.py` | Real VSIX structure verification and SHA-256 |
| `assets/ats-glyph.*` | Original official corporate mark |
| [Brand manual](docs/BRAND.md) | Identity, palette, rules and licensing |
| [Moodboard](docs/moodboard.svg) | Concept art, explicitly not a real screenshot |
| [Acceptance checklist](docs/ACCEPTANCE.md) | Evidence and remaining manual QA |
| [Publishing workflow](docs/PUBLISHING.md) | Exact-SHA release governance |
| [Changelog](CHANGELOG.md) | Version history |

**Baseline evidence:** [successful Preview CI #43523055218](https://github.com/Drako01/theme/actions/runs/43523055218) passed on **Ubuntu, Windows, macOS and VSIX packaging**. More recent commits require their own green CI; a previous successful job does not approve modified code.

### Release policy

Pull requests must pass tri-OS tests and package the VSIX once. The publishing workflow runs **automatically after a version-bumping PR merge to `main`**, confirms the exact reviewed PR SHA/tree and green CI, downloads its original checksummed VSIX and publishes to Marketplace and Open VSX through protected OIDC environments. It does **not** rerun tests or rebuild the artifact on merge. Manual dispatch remains for recovery.

**Current status:** Preview; 0.1.0 exists on Open VSX and Trusted Publishers are registered. 0.1.1 will publish after its green PR merges. Genuine screenshots, editor acceptance and accessibility checks remain pending.

### Licensing, support and credits

Source code is [MIT licensed](LICENSE). The ArmoTuSitio name, trademark and official logo retain their existing brand ownership; this license does not grant rights to third-party trademark use.

The source is original. Material Theme and One Dark Pro were used as usability references only: their code, brands, icons and assets were **not copied**.

Feedback and bug reports: [GitHub Issues](https://github.com/Drako01/theme/issues). Website: [armotusitio.com.ar](https://armotusitio.com.ar/).

---

*ArmoTuSitio Engineering Tools — Visual identity for engineering work.*
