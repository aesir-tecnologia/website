# Design Tokens

Canonical tokens that drive the Nuxt UI theme (`app/app.config.ts`) and supporting CSS (`app/assets/css/main.css`). Values mirror the discovery inventory and will be the contract for upcoming component work.

## Palette
- **Primary (`var(--aesir-primary-500)`)** – `#38bdf8` (sky) with hover blend `var(--aesir-primary-400)` `#22d3ee`; gradients pair with secondary (`#6366f1` / `#7c3aed`).
- **Secondary (`var(--aesir-secondary-500)`)** – `#6366f1` indigo accent; hover `var(--aesir-secondary-400)` `#7c3aed`.
- **Accent (`var(--aesir-accent-500)`)** – `#2dd4bf` used in highlight cards and supporting gradients.
- **Neutral (`var(--aesir-text-primary)` / `--aesir-text-muted` / `--aesir-text-soft`)** – Slate tints mapped to body copy, muted copy, and captions.
- **Outlines** – `var(--aesir-primary-outline)` and `var(--aesir-secondary-outline)` for emphasis borders; `var(--aesir-border-soft|strong|emphasis)` govern structural dividers.
- **Contrast** – `var(--aesir-primary-contrast)` `#0f172a` ensures CTA text retains legibility on bright gradients.

## Surfaces & Backgrounds
- `var(--aesir-surface-900)` – global background.
- `var(--aesir-surface-850)` / `--600` / `--750` – elevated surfaces for cards, slideover, and dark sections.
- `var(--aesir-surface-950)` – footer background.
- `var(--aesir-highlight)` – radial hero glow accent.
- Accent surfaces: `var(--aesir-accent-surface)` (teal overlay) and `var(--aesir-secondary-surface)` (indigo overlay) for feature highlights.

## Typography
- **Font family** – `var(--font-sans)` → `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` and applied globally via Tailwind v4 `@theme`.
- Text roles map to `--aesir-text-primary`, `--aesir-text-subtle`, `--aesir-text-muted`, `--aesir-text-secondary`, and `--aesir-text-soft` to distinguish headings, leads, body, and captions.
- Eyebrow/utility accents reuse `var(--aesir-primary-500)` for brand emphasis.

## Layout & Spacing
- **Container width** – `BaseSection` defaults to a `max-w-6xl` `UContainer` with `px-6 sm:px-8` padding; variants expose `narrow`, `wide`, and `full` widths.
- Section rhythm follows `BaseSection` padding presets (`tight: py-12 sm:py-16`, `default: py-16 sm:py-20`, `relaxed: py-20 sm:py-24`).
- Global box-sizing reset applied via `*, *::before, *::after { box-sizing: border-box; }`.

## Components & Effects
- **Buttons** – default gradient `linear-gradient(135deg, var(--aesir-primary-500), var(--aesir-secondary-500))`, hover shifts to `var(--aesir-primary-400)`/`var(--aesir-secondary-400)`, with glow `var(--aesir-primary-glow)`.
- **Cards** – use surface tokens with variant overlays: muted (`--surface-600`), highlight (`--accent-surface`), bright (`--secondary-surface`). Borders rely on outline tokens.
- **Checklist / Icon accents** – checkmarks and CTA links reuse `var(--aesir-primary-500)` for continuity.
- **Shadow** – `var(--aesir-glow-shadow)` (0 40px 80px rgba(15, 23, 42, 0.35)) anchors elevated panels.
- **Icons** – Install `@iconify-json/lucide` (already added as a dev dependency) so `UIcon` can resolve the full Lucide set without hitting the network at runtime.

## Nuxt UI Theme Mapping
- `app/app.config.ts` registers Tailwind aliases: `primary: 'sky'`, `secondary: 'indigo'`, `accent: 'cyan'`, `neutral: 'slate'`, with semantic fallbacks for `info`, `success`, `warning`, `error`.
- `nuxt.config.ts` exposes the color aliases to Nuxt UI’s theme generator (`ui.theme.colors`).
- Future component work should prefer Nuxt UI props/variants backed by these aliases; avoid hard-coded hex values.

## Reference
- Discovery notes for layout copy & structures: `docs/discovery.md`.
- Visual refresh guidelines: Task 2 in `TASKS.md` (Nuxt UI Foundation & Theming).
