# Design Tokens

Canonical tokens live in `app/app.config.ts` (`ui.tokens`) and are consumed via `useAppConfig()` inside shared components. Global CSS (`app/assets/css/main.css`) only carries the reset and font stack now that tokens are centralised in the config. Values mirror the discovery inventory and remain the contract for upcoming component work.

## Palette
- **Primary (`ui.tokens.accents.primary500`)** – `#38bdf8` (sky) with hover blend `ui.tokens.accents.primary400` (`#22d3ee`); gradients pair with secondary (`#6366f1` / `#7c3aed`).
- **Secondary (`ui.tokens.accents.secondary500`)** – `#6366f1` indigo accent; hover `ui.tokens.accents.secondary400` (`#7c3aed`).
- **Accent (`ui.tokens.accents.accent500`)** – `#2dd4bf` used in highlight cards and supporting gradients.
- **Neutral (`ui.tokens.text.primary | muted | soft`)** – Slate tints mapped to body copy, muted copy, and captions.
- **Outlines** – `ui.tokens.accents.primaryOutline` and `ui.tokens.accents.secondaryOutline` for emphasis borders; `ui.tokens.borders.soft | mid | strong | emphasis` govern structural dividers.
- **Contrast** – `ui.tokens.accents.primaryContrast` (`#0f172a`) keeps CTA text readable on gradient backgrounds.

## Surfaces & Backgrounds
- `ui.tokens.body.light` / `ui.tokens.body.dark` – base page backgrounds for light/dark modes.
- `ui.tokens.surfaces[850 | 750 | 600 | 400 | 300]` – elevated surfaces for cards, slideovers, and dark sections.
- `ui.tokens.surfaces[950]` – footer surface.
- `ui.tokens.accents.highlight` – radial hero glow accent.
- Accent overlays: `ui.tokens.accents.accentSurface` (teal) and `ui.tokens.accents.secondarySurface` (indigo) for feature highlights.
- `ui.tokens.appShell.lightBackground` / `darkBackground` – gradient stacks used by `AppShell` to render the page backdrop.

## Typography
- **Font family** – `var(--font-sans)` → `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` and applied globally via Tailwind v4 `@theme`.
- Text roles map to `ui.tokens.text.primary | subtle | muted | secondary | soft` to distinguish headings, leads, body, and captions.
- Eyebrow/utility accents reuse `ui.tokens.accents.primary500` for brand emphasis.

## Layout & Spacing
- **Container width** – `BaseSection` defaults to a `max-w-6xl` `UContainer` with `px-6 sm:px-8` padding; variants expose `narrow`, `wide`, and `full` widths.
- Section rhythm follows `BaseSection` padding presets (`tight: py-12 sm:py-16`, `default: py-16 sm:py-20`, `relaxed: py-20 sm:py-24`).
- Global box-sizing reset applied via `*, *::before, *::after { box-sizing: border-box; }`.

## Components & Effects
- **Buttons** – default gradient `linear-gradient(135deg, ui.tokens.accents.primary500, ui.tokens.accents.secondary500)`, hover shifts to the `primary400` / `secondary400` tones, with glow `ui.tokens.accents.primaryGlow`.
- **Cards** – use surface tokens with variant overlays: muted (`ui.tokens.surfaces[600]`), highlight (`ui.tokens.accents.accentSurface`), bright (`ui.tokens.accents.secondarySurface`). Borders rely on the `ui.tokens.borders.*` set.
- **Checklist / Icon accents** – checkmarks and CTA links reuse `ui.tokens.accents.primary500`.
- **Shadow** – `ui.tokens.accents.glowShadow` (0 40px 80px rgba(15, 23, 42, 0.35)) anchors elevated panels.
- **Icons** – Install `@iconify-json/lucide` (already added as a dev dependency) so `UIcon` can resolve the full Lucide set without hitting the network at runtime.

## Nuxt UI Theme Mapping
- `app/app.config.ts` registers Tailwind aliases: `primary: 'sky'`, `secondary: 'indigo'`, `accent: 'cyan'`, `neutral: 'slate'`, with semantic fallbacks for `info`, `success`, `warning`, `error`.
- `nuxt.config.ts` exposes the color aliases to Nuxt UI’s theme generator (`ui.theme.colors`).
- Future component work should prefer Nuxt UI props/variants backed by these aliases; avoid hard-coded hex values.

## Reference
- Discovery notes for layout copy & structures: `docs/discovery.md`.
- Visual refresh guidelines: Task 2 in `TASKS.md` (Nuxt UI Foundation & Theming).
