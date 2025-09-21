# Structural Shared Components

Task 4 introduces a baseline set of structural components backed by Nuxt UI primitives. They replace bespoke section markup while staying ahead of the upcoming localization effort. Task 6 adds utility atoms (documented in `docs/components/UTILITIES.md`) that pair with these layouts for CTAs, backgrounds, and imagery, Task 7 layers on form patterns described in `docs/components/FORMS.md`, and Task 8 centralises copy in the composables listed in `docs/components/CONTENT.md`.

## BaseSection
- **Purpose:** Wrap content blocks with consistent spacing, background variants, and responsive container widths.
- **Key props:**
  - `variant`: `default | muted | dark | gradient | accent` — maps to background + border treatments used in legacy CSS sections.
  - `padding`: `none | tight | default | relaxed` — controls vertical rhythm; default mirrors current landing pages.
  - `width`: `narrow | default | wide | full` — select container max-width.
  - `container`: toggle the built-in `UContainer` if a section needs edge-to-edge content (e.g., marquees).
- **Usage notes:** Pair with `SectionHeader`; for gradients prefer `<BackgroundVariant>` instead of inline `div`s so tones stay consistent across tasks (the component ships with `overflow-hidden` so radial textures stay contained).

## SectionHeader
- **Purpose:** Centralize headings, subheadings, and supporting eyebrow copy.
- **Key props:**
  - `title` (required) and optional `description`, `eyebrow`.
  - `align`: `left | center` to flip text alignment and actions placement.
  - `level`: choose semantic heading tag (`h2 | h3 | h4`).
  - `icon`: optional Lucide glyph rendered above the eyebrow for quick visual anchoring.
- **Usage notes:** use the `actions` slot for CTA buttons sourced from `useAppConfig().site.navigation` or page-specific arrays; pair `icon` + eyebrow for stronger hierarchy.

## ContentGrid
- **Purpose:** Provide responsive grid scaffolding without re-declaring Tailwind utilities in each page.
- **Key props:**
  - `columns`: `1-4` large-screen columns with sensible breakpoints (single-column mobile).
  - `gap`: `tight | default | loose` spacing scale.
  - `as`: swap the root element (`div`, `ul`, etc.) for semantic markup.
- **Usage notes:** combine with `UCard`, `UProse`, or custom content when no bespoke styling is needed.

## FeatureGrid
- **Purpose:** Render feature/benefit cards with optional icons and CTA links.
- **Key props:**
  - `features`: array of `{ title, description?, icon?, cta?, to?, external? }`.
  - `columns` / `gap`: forward to `ContentGrid` props.
- **Usage notes:** defaults to Lucide icons via `@iconify-json/lucide`; ensure the dependency is installed (`npm i -D @iconify-json/lucide`) so offline builds retain icons. Override the `footer` slot for custom CTA layouts. Each card is wrapped in a gradient border + hover state to provide more hierarchy than the legacy `.card` styles.

## MetricList
- **Purpose:** Display proof points / KPIs in a consistent card layout.
- **Key props:**
  - `metrics`: array of `{ label, value, description?, icon?, tone? }`.
  - `columns` / `gap`: responsive grid configuration.
- **Usage notes:** Renders `StatPill` by default (tone optional); slot `metric` or `description` for bespoke layouts. Works well alongside hero stats via a `BaseSection`.

## BulletList
- **Purpose:** Drop-in replacement for `.list-check` markup; supports strings or objects.
- **Key props:**
  - `items`: string array or objects with `{ label, description?, icon? }`.
  - `as`: change root element (`ul` default) when embedding in description lists.
  - `icon`: override the default `i-lucide-check` glyph.
- **Usage notes:** when migrating copy, keep strings in `docs/COPY-*.md` as the source of truth until `@nuxtjs/i18n` locale files are in place; these components simply render the provided content.

## Playground Route
Visit [`/playground/sections`](http://localhost:3000/playground/sections) while running `npm run dev` to preview the components with sample data (light/dark, responsive). The playground demonstrates:
- `BackgroundVariant` usage across section styles.
- Elevated card hierarchy with Lucide glyphs.
- All list/grid variations in one viewport.

Use Playwright MCP to capture updated visuals for regression tracking.
