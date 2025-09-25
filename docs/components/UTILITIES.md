# Utility UI Components (Task 6)

Task 6 introduces a set of atomic components that wrap Nuxt UI primitives so modules stay consistent and backgrounds/imagery are centrally managed.

## Adoption Notes (Task 13)
- These atoms replace every legacy utility class that was removed during the CSS cleanup; prefer them over bespoke Tailwind overrides.
- Dark/light parity for gradients now lives here — update `BackgroundVariant` tokens instead of adding page-scoped gradients.
- Any missing state should be added via `app.config.ts` theme tokens first so design decisions remain centralised.

## AppButton
- **Purpose:** Default CTA treatment for marketing modules and shared layouts.
- **Props:** Mirrors `UButton` (`to`, `href`, `variant`, `color`, `size`, `icon`, `trailingIcon`, `block`), forwarding events and attributes transparently.
- **Notes:** Use this instead of `UButton` inside feature components so copy and variants stay aligned with the theme defaults declared in `app.config.ts`.

## AppLinkButton
- **Purpose:** Inline/ghost link button with an optional trailing icon (arrow by default).
- **Props:** `to | href`, `variant` (`link | ghost`), `color`, `size`, `external`, `trailingIcon`.
- **Notes:** Drop-in for text links like “Learn more”; inherits layout spacing via `class` while preserving hover underline styles.

## IconBadge
- **Purpose:** Rounded badge to highlight numbers/identifiers (step counters, status chips).
- **Props:** `label`, `icon?`, `tone` (`primary | secondary | accent | neutral`).
- **Notes:** Used by `ProcessTimeline` to render step indices.

## Tag
- **Purpose:** Replaces ad-hoc uppercase meta labels.
- **Props:** `label`, `leadingIcon?`, `tone`, `size` (`sm` uppercase, `md` sentence case).
- **Notes:** Applied to service focus labels, hero highlight eyebrows, and FeatureGrid metadata.

## StatPill
- **Purpose:** Compact metric display for value + label pairs.
- **Props:** `value`, `label`, optional `icon`, `tone` (`primary | secondary | accent | neutral`).
- **Notes:** `MetricList` now renders `StatPill` by default while still exposing slots for overrides.

## LazyImage + useAppImage
- **Purpose:** Declarative wrapper around `<NuxtImg>` with project presets.
- **Props:** `src`, `alt`, optional `preset`, `ratio`, `contain`, `imgAttrs`, `wrapperClass`, plus overrides for width/quality/format.
- **Composable:** `useAppImage(preset, overrides)` returns preset-driven defaults (`default`, `hero`, `feature`, `avatar`, `logo`, `testimonial`).
- **Notes:** Service cards can now opt into media without re-styling; presets control placeholder, quality, and wrapper rounding.

## BackgroundVariant
- **Purpose:** Centralizes the radial/gradient textures previously duplicated across modules and playground routes.
- **Props:** `variant` (`hero | radial | process`), `tone` (`sky | indigo | violet | teal`), `align` (`top | center | bottom`), `intensity` (`soft | default | strong`).
- **Notes:** Slot into `BaseSection`’s `background` slot; hero/process/service sections reference it to keep gradients theme-aware.

### Usage Checklist
1. Prefer these atoms inside modules/shared components; reserve raw `UButton`/manual gradients for layout-level controls only.
2. When adding new imagery, pick the closest `useAppImage` preset (or extend it) so quality and wrapper treatments stay consistent.
3. Pair `BackgroundVariant` with `variant="gradient" | "muted"` sections to retain depth without reintroducing inline CSS.
