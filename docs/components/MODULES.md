# Marketing Modules (Task 5)

All modules below compose the structural primitives from Task 4. They accept typed props so page migrations can consume the Task 8 content composables (`docs/components/CONTENT.md`) or future localisation sources without touching markup.

## Adoption Notes (Task 13+)
- `HeroSection`, `ServiceShowcase`, `ProcessTimeline`, and `SocialProofSection` now power every migrated marketing route; check `docs/discovery.md` for canonical layouts.
- Legal routes reuse structural primitives plus `useLegalContent()` for copy; marketing pages continue to rely on the modules listed below.
- Extend modules via props or slots before adding new bespoke components so shared analytics, i18n, and QA hooks continue to apply.

## HeroSection
- **Purpose:** Replace bespoke homepage hero with CTA buttons, bullet highlights, and a supporting feature list.
- **Props:**
  - `title`, `description`, optional `eyebrow`/`icon`.
  - `primaryCta` required; `secondaryCta` optional (`variant`, `color`).
  - `points`: array for `BulletList` (strings or `{ label, description, icon }`).
  - `highlights`: array `{ title, description }` + `highlightTitle` and optional `highlightEyebrow`.
  - `variant`/`background`: pass through to `BaseSection`; `backgroundVariant`/`backgroundTone` tune `BackgroundVariant`.
- **Notes:** CTAs now use `AppButton`; highlight eyebrow reuses `Tag` sizing so typography is consistent with other modules.

## ProblemSolutionSection
- **Purpose:** Present paired challenge/impact lists (homepage “problem” section).
- **Props:**
  - `challengeTitle`, `impactTitle`, with matching `challenges` / `impacts` arrays.
  - Optional `eyebrow`, `icon`, and description for the intro header.
  - `variant` and `background` toggle BaseSection styling.
- **Notes:** Uses `BulletList` for both columns, wrapped in gradient `UCard`s.

## ServiceShowcase
- **Purpose:** Showcase service cards with CTA buttons and optional imagery.
- **Props:**
  - `services`: `{ title, description?, focus?, meta?, cta, to, image? }[]` (`image` accepts `src`, `alt`, optional `preset`, `ratio`).
  - Optional section CTA for global link-out.
  - `columns`/`gap` forwarded to `ContentGrid`.
- **Notes:** Cards rely on `AppButton` + `Tag`; `LazyImage` enables media slots using the shared `useAppImage` presets.

## ProcessTimeline
- **Purpose:** Communicate multi-step cleanup process with optional “perfect for” highlight.
- **Props:**
  - `steps`: array `{ title, items }`.
  - Optional `highlight`: `{ title, items, eyebrow? }`.
  - Grid settings (`columns`, `gap`) + BaseSection variant controls.
- **Notes:** Step numbers now render via `IconBadge`; background glow supplied by `BackgroundVariant` so the vertical accent line stays in sync with theme colors.

## TechnologyMarquee
- **Purpose:** Animated loop of technology names/logos with motion-safe guard.
- **Props:**
  - `items`: list of strings.
  - `speed`: seconds for a full loop (min 12s).
  - `pauseOnHover`, `caption`, `variant`, `background` toggles.
- **Notes:** `BackgroundVariant` replaces ad-hoc gradients; animation still respects `prefers-reduced-motion` while exposing tone tweaks when needed.

## SocialProofSection
- **Purpose:** Combine differentiator grid and testimonial card.
- **Props:**
  - `features`: array (`FeatureGrid` schema) for differentiators.
  - Optional `testimonial`: `{ quote, author, role? }`.
  - `columns`/`gap` forwarded to `FeatureGrid`.
- **Notes:** Feature CTA defaults to `AppLinkButton`; gradients handled through `BackgroundVariant`.

## ContactCard *(Task 7)*
- **Purpose:** Marketing contact form that pairs with `useContactForm` to handle validation, submission states, and feedback.
- **Props:** `projectTypes` string array plus optional title/description/labels to tailor copy per page.
- **Notes:** Relies on Nuxt UI form components, shared `Tag`, and `AppButton` atoms. Shows success/error alerts via `UAlert` while `useContactForm` exposes `status` helpers for additional handling if embedded elsewhere.

## Playground
Preview all modules at [`/playground/modules`](http://localhost:3000/playground/modules) while running `npm run dev`. Capture visuals through Playwright MCP (stored under `docs/qa/`) and mirror prop structures when migrating real routes.
