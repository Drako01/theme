# Identidad visual / Brand manual
**Fuente primaria:** `Drako01/armotusitio2.0` (`tailwind.config.ts`, `app/globals.css`, `public/logo-ats-glyph.svg`), contrastada con https://armotusitio.com.ar (2026-11-13).
## Tokens corporativos confirmados
- Midnight 900 `#141B22`, Midnight 500 `#2C3E50`.
- Acento `#F9ED32`, gradiente oficial a `#D7C800`.
- Separador gráfico `#3A4756`; superficies y texto adicionales derivados para el editor, **no colores corporativos atribuidos al sitio**.
- Tipografía: el wordmark SVG declara `Inter, ui-sans-serif`, fuente de interfaz adaptable al editor y SO, sin empaquetar fuentes.
## Reglas
1. Usar el SVG oficial sin modificar los trazos, forma ni gradiente.
2. Dark Premium es la experiencia principal; Light y HC no invierten el amarillo automáticamente (se sustituye por ocre legible sobre blanco).
3. El amarillo se reserva para estado activo/foco, nunca para párrafos prolongados.
4. El contraste de texto primario es >=4.5:1 y >=7:1 para primario de temas HC (tests automáticos).
5. No alterar `settings.json`, otras extensiones ni el tema activo del usuario.
## Licencias
Código MIT. La marca/isotipo oficial sigue siendo propiedad de ArmoTuSitio; no se ceden derechos de marca. Las paletas y reglas de sintaxis se implementaron desde cero, sin copiar temas de terceros.
## Benchmark
Material Theme, One Dark Pro: equilibrio visual, semántica consistente, superficies diferenciadas. Riesgos observados en temas populares: comentarios tenues, acentos saturados y pérdida de contraste en selección. Este producto los trata con pruebas explícitas.

## Dark Premium comfort treatment (0.1.2)
- Brand authority stays `#F9ED32` on `#141B22` for the official glyph and focused accents, as in `Drako01/armotusitio2.0`.
- The website uses subtle `radial-gradient` backgrounds with low-alpha yellow/graphite; declarative VS Code color themes **cannot use CSS gradients**.
- Dark Premium's full-width status bar becomes `#202C37` with `#E5E7EB` foreground, `#53533A` separator and low-key item hover states. This is layered color, not a fake gradient.
- Keep original accessibility variants, glyph assets and editor runtime behavior untouched; no injected IDE shell CSS.
