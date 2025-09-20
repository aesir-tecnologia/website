# Design Tokens & Theming

This document captures the design primitives defined in `app/app.config.ts` and the
shared background variants used across sections. These tokens should be considered
the single source of truth for styling decisions in new components.

## Color System

| Token | Description | Implementation |
| --- | --- | --- |
| `primary` | Electric sky gradient used for brand moments and primary CTAs. | Nuxt UI `primary: 'sky'` palette, paired with gradient backgrounds in `backgroundVariants.gradient` and `backgroundVariants.cta`. |
| `gray` | Neutral slate foundation for typography, borders, and subdued controls. | Nuxt UI `gray: 'slate'` palette; also informs card borders (`border-slate-800/70`) and surface fills (`bg-slate-900/70`). |
| `surface` | Translucent panels that float above the hero gradient. | `backgroundVariants.surface` with slate border + blur. |
| `dark` | Deep slate canvas for marquee and footer sections. | `backgroundVariants.dark` (`bg-slate-950/90`). |
| `highlight` | Accent background for metrics, stats, and proof points. | `backgroundVariants.highlight` uses `bg-sky-500/20` and `border-sky-500/40`. |
| `testimonial` | Gradient blend reserved for social proof cards. | `backgroundVariants.testimonial` mixes slate and sky stops. |

Whenever you need a new background, extend `app/composables/useBackgroundVariants.ts`
rather than hard-coding raw CSS classes.

## Typography Scale

- Headings: `SectionHeader` renders titles with `text-3xl` on mobile and `text-4xl`
on larger breakpoints, using the default Nuxt UI font stack.
- Body copy: `text-base` (`sm:text-lg`) for supporting paragraphs, `text-sm`
for subdued descriptions within cards.
- Tags/eyebrows: uppercase `Tag` component with tracking to maintain consistency
for section labels.

Use the shared components to inherit these sizes automatically. Avoid setting
bespoke font sizes inside pages.

## Radii & Elevation

- Buttons: `rounded-full`, shadow on hover defined via `ui.button.variants`.
- Inputs: `rounded-xl` with `focus:ring-2 focus:ring-sky-400/80` per app config.
- Cards: `rounded-3xl` across structural components (`BaseSection`, `HeroSection`,
  `ProcessTimeline`) with translucent backgrounds.

Re-use the `cardUi` presets exported inside each section component to align
padding and border behaviour.

## Spacing & Layout

- Default section padding: `py-20` (`HeroSection` opts into `py-24`).
- `BaseSection` wraps content in `UContainer` with `max-w-6xl` and responsive
  horizontal padding (`px-4 sm:px-6 lg:px-8`).
- Grid helpers: `ContentGrid` standardises 2/3/4 column layouts with `gap-6`
and breakpoints, so favour that component over ad-hoc grids.

## Interaction States

- Primary CTA buttons default to the Nuxt UI `solid` variant with `font-semibold`
and shadow transitions.
- Secondary/ghost intents map to the `ghost` variant defined in app config
  (transparent slate backgrounds with focus outlines).
- Link buttons should always use `AppLinkButton` to inherit the correct intent
  and routing semantics (`nuxt-link` vs anchor).

## Iconography

Nuxt UI dynamic icons are enabled globally via `icons.dynamic: true`. When
adding icons inside lists or buttons, reference Nuxt UI icon names instead of
shipping SVG files directly.

## Usage Checklist

1. Import theme values with `useAppConfig()` if you need access to navigation,
   social links, or brand metadata.
2. Pick a background variant via the `background` prop on `BaseSection` instead
   of custom utility classes.
3. Use `Tag` for eyebrows, `SectionHeader` for titles/subheads, and
   `AppLinkButton` for CTAs to inherit typography, spacing, and hover states.
4. When introducing a new component, document any additional tokens here so the
   palette stays discoverable.
