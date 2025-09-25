# Discovery Inventory (Task 1)

Updated after the Nuxt UI shared component rollout.

## Layout Overview
- `app/app.vue` renders the global `UApp` wrapper and delegates layout to `AppShell`.
- `app/components/layout/AppShell.vue` stitches together `AppHeader`, `AppMain`, and `AppFooter` while exposing the routed page slot.
- `AppHeader` (`app/components/layout/AppHeader.vue`) uses `UNavigationMenu`, color-mode toggles, and a mobile `USlideover`. Navigation data is sourced from `useSiteNavigation()` so locale-aware links stay centralized.
- `AppFooter` (`app/components/layout/AppFooter.vue`) reads footer links via `useSiteFooterLinks()` and surfaces the brand tagline defined in `app/app.config.ts`.

## Shared Component System
- Structural primitives (`BaseSection`, `SectionHeader`, `ContentGrid`, `FeatureGrid`, `MetricList`, `BulletList`) live in `app/components/shared/` and govern spacing, backgrounds, and typography.
- Marketing modules such as `HeroSection`, `ServiceShowcase`, `ProcessTimeline`, `SocialProofSection`, `TechnologyMarquee`, and `ContactCard` reside in `app/components/modules/`. They are built entirely on Nuxt UI primitives and shared atoms.
- Utility atoms (`AppButton`, `AppLinkButton`, `BackgroundVariant`, `IconBadge`, `LazyImage`, `StatPill`, `Tag`) live under `app/components/ui/`.
- Forms leverage `ContactCard` + `useContactForm()` for validation, submission states, and accessibility.

## Route Inventory & Content Dependencies
- **Home (`app/pages/index.vue`)**
  - Composes all hero/problem/process/technology/social-proof modules and a CTA grid.
  - Copy provided by `useHomepageContent()` (`app/composables/useHomepageContent.ts` → `app/data/content/homepage.ts`).
- **Services Index & Detail (`app/pages/services/`)**
  - `/services/index.vue` renders `ServiceShowcase` + highlight cards using `useServicesOverviewContent()`.
  - Individual service routes (`vibe-coding-cleanup`, `web-development`, `staff-augmentation`, `mobile-development`, `game-development`) consume `useServiceContent(slug)` for hero, process, and CTA data.
- **About (`app/pages/about.vue`)**
  - Uses structural primitives + `FeatureGrid` with content from `useAboutContent()`.
- **Process (`app/pages/process.vue`)**
  - Reuses `BaseSection`, `ProcessTimeline`, `FeatureGrid`, and `BulletList` with data from `useProcessContent()`.
- **Contact (`app/pages/contact.vue`)**
  - Mixes `BackgroundVariant`, `ContentGrid`, `ContactCard`, and CTA cards populated by `useContactContent()`.
- **Legal (`app/pages/privacy.vue`, `app/pages/terms.vue`)**
  - Now mirror other marketing routes by consuming `useLegalContent()` with data defined in `app/data/content/legal.ts`. Legal copy is rendered inside shared `BaseSection` + `UCard` layouts—no markdown ingestion.

## Global Styles & Theming
- `app/app.config.ts` centralizes Nuxt UI color aliases, navigation, brand metadata, and the full token set under `ui.tokens` (surfaces, borders, text, accents, gradients).
- `app/assets/css/main.css` now holds only the Tailwind/Nuxt UI imports and base resets; component styling reads tokens through `useAppConfig()`.

## Content Sources
- Structured marketing copy lives in `app/data/content/*.ts` and is accessed through the composables documented in `docs/components/CONTENT.md`.
- Long-form reference copy still resides in `docs/COPY-EN.md` and `docs/COPY-PT_BR.md` for future localization sync.

## Open Questions / Risks
- `useSiteSocialLinks()` is still a placeholder—add real data once social channels are finalized.
- Automated test coverage for shared components remains on the backlog; QA currently relies on manual verification plus Playwright MCP captures in `docs/qa/`.
