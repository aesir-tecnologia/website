# Marketing Modules (Task 5)

All modules below compose the structural primitives from Task 4. They accept typed props so page migrations can feed data from composables, content files, or `app.config` without touching markup.

## HeroSection
- **Purpose:** Replace bespoke homepage hero with CTA buttons, bullet highlights, and a supporting feature list.
- **Props:**
  - `title`, `description`, optional `eyebrow`/`icon`.
  - `primaryCta` required; `secondaryCta` optional (supporting `variant` + `color`).
  - `points`: array for `BulletList` (strings or `{ label, description, icon }`).
  - `highlights`: array of `{ title, description }` plus `highlightTitle` and optional `highlightEyebrow`.
  - `variant`/`background`: pass through to `BaseSection` for theme tweaks.
- **Notes:** Buttons render via `UButton`; background slot exposes subtle gradients that can be overridden per route.
 - **Notes:** Buttons render via `UButton`; background slot exposes subtle gradients and respects light/dark color-mode with the shared `BaseSection` variants.

## ProblemSolutionSection
- **Purpose:** Present paired challenge/impact lists (homepage “problem” section).
- **Props:**
  - `challengeTitle`, `impactTitle`, with matching `challenges` / `impacts` arrays.
  - Optional `eyebrow`, `icon`, and description for the intro header.
  - `variant` and `background` toggle BaseSection styling.
- **Notes:** Uses `BulletList` for both columns, wrapped in gradient `UCard`s.

## ServiceShowcase
- **Purpose:** Showcase service cards with CTA buttons and focus labels.
- **Props:**
  - `services`: `{ title, description?, focus?, meta?, cta, to }[]`.
  - Optional section CTA for global link-out.
  - `columns`/`gap` forwarded to `ContentGrid`.
 - **Notes:** Each card leverages Nuxt UI’s `UCard` + `UButton`; focus label is uppercase meta text. Card styling adapts to color mode automatically.

## ProcessTimeline
- **Purpose:** Communicate multi-step cleanup process with optional “perfect for” highlight.
- **Props:**
  - `steps`: array of `{ title, items }` (items feed `BulletList`).
  - Optional `highlight`: `{ title, items, eyebrow? }`.
  - Grid settings (`columns`, `gap`) + BaseSection variant controls.
- **Notes:** Step numbers auto-generate; highlight card spans full width to double as CTA or persona callout while shifting background contrast per theme.

## TechnologyMarquee
- **Purpose:** Animated loop of technology names/logos with motion-safe guard.
- **Props:**
  - `items`: list of strings.
  - `speed`: seconds for a full loop (min 12s).
  - `pauseOnHover`, `caption`, `variant`, `background` toggles.
- **Notes:** Uses CSS custom property `--marquee-duration`; animation halts when the OS prefers reduced motion.
  Container styling flips between light and dark surfaces automatically.

## SocialProofSection
- **Purpose:** Combine differentiator grid and testimonial card.
- **Props:**
  - `features`: array (`FeatureGrid` schema) for differentiators.
  - Optional `testimonial`: `{ quote, author, role? }`.
  - `columns`/`gap` forwarded to `FeatureGrid`.
- **Notes:** Footer slot exposed so parent can inject bespoke CTAs; testimonial card reuses gradient treatments for emphasis and respects color mode.

## Playground
Preview all modules at [`/playground/modules`](http://localhost:3000/playground/modules) while running `npm run dev`. Capture visuals through Playwright MCP (stored under `docs/qa/`) and mirror prop structures when migrating real routes.
