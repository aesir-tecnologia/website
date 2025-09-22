# Design Tokens

Canonical tokens live in `app/app.config.ts` (`ui.tokens`) and are consumed through the `useUiTokens()` composable. Global CSS stays lean—only the reset and font stack ship from `app/assets/css/main.css`—while components pull palette, surface, and typography details directly from the config. Update the config and every consumer re-renders with the new values.

## Palette
- **Primary (`palette.primary`)** – Deep navy `#0A1F44`, paired with `palette.primaryMuted` (`#1C2F57`) and `palette.primaryDark` (`#07152E`) for hover and dark overlays.
- **Accent (`palette.accent`)** – Gold `#D4AF37` with `palette.accentSoft` (`#E6C86F`) and `palette.accentDeep` (`#9F8324`) for gradients, emphasis outlines, and icon fills.
- **Neutral (`palette.neutral`)** – Cloud gray `#B0B0B0`; `palette.neutralSoft` / `palette.neutralDeep` cover muted copy, dividers, and secondary chrome.
- **Outlines & Glow** – `ui.tokens.borders.accent` plus `ui.tokens.shadows.glow` power focus rings and interactive glows.
- **Text Contrast** – `ui.tokens.text.inverse` and `ui.tokens.text.onAccent` guarantee readable copy on navy or gold surfaces.

## Surfaces & Backgrounds
- `ui.tokens.body.light` / `dark` anchor the app shell backgrounds.
- `ui.tokens.surfaces.base | elevated | muted | subtle | accent | overlay` swap automatically with the current color mode and cover cards, muted panels, accent callouts, and translucent overlays.
- Gradients move to `ui.tokens.gradients.hero | accent | spotlight`; they power hero sections, accent panels, and layered glows.
- `ui.tokens.appShell.lightBackground` / `darkBackground` provide the blended gradients consumed by `AppShell`.

## Typography
- **Font family** – `var(--font-sans)` → `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` and applied globally via Tailwind v4 `@theme`.
- Text roles map to `ui.tokens.text.primary | muted | subtle | inverse | accent | onAccent`. Headings default to `primary`, body copy to `muted`, captions to `subtle`, and CTA overlays rely on `inverse` / `onAccent`.
- Eyebrow accents and interactive text use `ui.tokens.text.accent` (gold) for consistent brand emphasis.

## Layout & Spacing
- **Container width** – `BaseSection` defaults to a `max-w-6xl` `UContainer` with `px-6 sm:px-8` padding; variants expose `narrow`, `wide`, and `full` widths.
- Section rhythm follows `BaseSection` padding presets (`tight: py-12 sm:py-16`, `default: py-16 sm:py-20`, `relaxed: py-20 sm:py-24`).
- Global box-sizing reset applied via `*, *::before, *::after { box-sizing: border-box; }`.

## Components & Effects
- **Buttons** – default to the navy solid (`ui.colors.primary`) with hover/active pulls from `palette.primaryMuted`; ghost/soft states use `ui.tokens.tones.primary.*`.
- **Cards** – pull `ui.tokens.surfaces.elevated` plus `ui.tokens.borders.soft` and `ui.tokens.shadows.soft`. Accent cards blend in `ui.tokens.gradients.accent` and `borders.accent`.
- **Icon badges / pills** – `ui.tokens.tones.*` drive background, border, and text colors, keeping badges in sync with palette shifts.
- **Focus + glow** – `ui.tokens.shadows.glow` and `ui.tokens.borders.accent` power outlines for interactive elements; adjust once in the config to refresh every consumer.
- **Lucide icons** – `@iconify-json/lucide` remains in devDependencies so `UIcon` resolves offline.

## Nuxt UI Theme Mapping
- `app/app.config.ts` now maps `ui.colors.primary` → `#0A1F44`, `ui.colors.accent` → `#D4AF37`, `ui.colors.neutral` → `#B0B0B0`, with complementary aliases for semantic states (`info`, `success`, `warning`, `error`).
- `nuxt.config.ts` exports those aliases via `ui.theme.colors` so core Nuxt UI components inherit the palette automatically.
- Components should continue to lean on Nuxt UI props/variants and the `useUiTokens()` helpers instead of hard-coded hex values.

## Reference
- Discovery notes for layout copy & structures: `docs/discovery.md`.
- Visual refresh guidelines: Task 2 in `TASKS.md` (Nuxt UI Foundation & Theming).
