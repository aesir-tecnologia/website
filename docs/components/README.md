# Shared Component Reference

This guide documents the shared Vue components introduced during the Nuxt UI
refactor. Every page should compose these building blocks instead of bespoke
markup so the theme, spacing, and accessibility remain consistent.

## Layout Components (`app/components/layout`)

| Component | Purpose | Key Props |
| --- | --- | --- |
| `AppShell` | Wraps the Nuxt app with header, main slot, and footer. Injects global navigation from `useAppConfig`. | `layout` (optional slot override). |
| `AppHeader` | Sticky header with brand, navigation menu, locale + color controls. Collapses into a mobile drawer via Nuxt UI primitives. | `variant` (`default`/`transparent`). |
| `AppMain` | Provides consistent page padding and skip-to-content anchor. | `as` (semantic element tag). |
| `AppFooter` | Renders contact CTA, navigation links, and social profiles sourced from `useSiteLinks`. | None. |

## Base Primitives (`app/components/base`)

| Component | Summary | Props & Notes |
| --- | --- | --- |
| `BaseSection` | Section wrapper that handles padding, background variants, optional eyebrow, and container width. | `background`, `padding`, `eyebrow`, `container`, `contentClass`. Background values map to `useBackgroundVariants`. |
| `SectionHeader` | Heading + subhead block with optional eyebrow and text alignment. | `title`, `subhead`, `eyebrow`, `align` (`start`, `center`, `end`), `level` (`2` or `3`). |
| `ContentGrid` | Responsive grid for cards or content blocks. Provides slots for custom item chrome. | `items`, `columns` (`2`, `3`, `4`). Emits slot scope `{ item, index }`. |
| `FeatureGrid` | Variant of `ContentGrid` optimised for feature callouts with icon badges. | `features`, `columns`. |
| `BulletList` | Styled unordered list with Nuxt UI icons for bullet markers. | `items` (array of strings). |
| `MetricList` | Presents stats or KPIs with titles/values using consistent typography. | `metrics` (`{ label, value, description }[]`). |

## Section Modules (`app/components/sections`)

| Component | Use Case | Highlights |
| --- | --- | --- |
| `HeroSection` | Primary hero with CTA group, proof points, and optional highlight card. | Props: `title`, `lead`, `primaryCta`, `secondaryCta`, `highlights`, `highlightTitle`. Defaults to `background="gradient"`. |
| `ProblemSolutionSection` | Two-column narrative comparing challenges vs outcomes. | Accepts `problems` and `solutions` arrays; inherits `BaseSection` padding. |
| `ServiceShowcase` | Displays services in a three-column grid with optional focus labels. | Pass the `services` array from `useServicesContent().list`. |
| `ProcessTimeline` | Sequential steps with optional "perfect for" list. | Props: `steps`, `idealCustomers`, `idealTitle`, `background`. Scrolls horizontally on narrow viewports. |
| `TechnologyMarquee` | Auto-scrolling marquee of technology tags with pause-on-hover styling. | Props: `items` (`{ label, alt }[]`), `ariaLabel`, `align`. Duplicate list ensures seamless loop. |
| `SocialProofSection` | Combines testimonial quote, metrics, and CTA card. | Props: `quote`, `attribution`, `metrics`, `cta`. |
| `ContactSection` | Contact CTA with `AppLinkButton` pair and optional description. | Props: `title`, `description`, `primaryCta`, `secondaryCta`. |

## UI Utilities (`app/components/ui`)

| Component | Role | Notes |
| --- | --- | --- |
| `AppButton` | Thin wrapper around `UButton` that maps semantic `intent` to Nuxt UI variants. | Intents: `primary`, `secondary`, `outline`, `ghost`. Pass `to` or `href` for navigation. |
| `AppLinkButton` | Convenience wrapper that forwards props to `AppButton` and enforces slot usage for label text. | Use for every CTA/link style button. |
| `ColorModeToggle` | Wraps `ColorModeSwitch` with theme-specific iconography. | Auto-imported; no props. |
| `LanguageSwitcher` | Locale switcher using `useSwitchLocalePath`. | Renders `USelect` styled dropdown with locale names. |
| `Tag` | Uppercase label used for section eyebrows. | Slot for content only. |

## Usage Guidelines

1. Source copy from `@nuxtjs/i18n` composables (`useSectionCopy`, `useServicesContent`) instead of hardcoding strings.
2. Always pass CTA links through `localePath` or `localizeLink` helpers so anchors resolve for both languages.
3. When introducing a new section type, co-locate it in `app/components/sections` and add an entry to this document describing props and intended usage.
4. Keep fallback data (like `fallbackServices` in `[slug].vue`) in English only as a last resort—translations should live in `locales/**`.
