# Content Composables (Task 8)

Task 8 centralises marketing copy in typed composables so pages and modules no longer duplicate inline arrays. All composables return frozen config objects – mutate at the source instead of per component.

## Adoption Notes (Task 13+)
- Every migrated page consumes these composables; update copy sources here (and `docs/COPY-*.md`) to keep locales in sync.
- When adding new modules, expose content via a dedicated composable so analytics, QA, and localisation follow the same contract.
- Document any schema changes in `docs/components/MODULES.md` and surface them through the contributor checklist before merging.

## Site-Wide
- **`useSiteNavigation()`** → `{ brand, links, cta }`
  - `brand`: `{ name, to, tagline? }` already locale-aware.
  - `links`: navigation entries with `match` metadata for active state handling.
  - `cta`: optional header CTA (`null` when not defined).
- **`useSiteFooterLinks()`** → `SiteFooterLink[]` for footer navigation.
- **`useSiteSocialLinks()`** → placeholder (empty tuple) until socials are added; keeps the interface ready for future tasks.

## Homepage (`useHomepageContent`)
- Provides hero copy, problem statements, services overview, cleanup steps, tech stack logos, trust reasons, testimonial, and final CTA deck.
- Exported `homepageContent.finalCta.items` feed CTA grids while `techStack.logos` powers the marquee; pages can compute `carouselLogos` & `trackStyle` from this data without redefining copy.

## Services
- **`useServicesOverviewContent()`** → hero copy + service cards + highlight tiles for `/services`.
- **`useServiceContent(slug)`** with slugs:
  - `vibe-coding-cleanup`
  - `web-development`
  - `staff-augmentation`
  - `mobile-development`
  - `game-development`
- Each service object contains:
  - `seo` metadata
  - `hero` CTA copy
  - Section-specific data (overview lists, engagement models, process stages, deliverables, messaging, CTA cards).

## About (`useAboutContent`)
- Surfaces hero CTAs, mission card, approach pillars, and values grid. Use the `values.headline` helper to keep section headers in sync.

## Process (`useProcessContent`)
- Exposes the three-phase process array, benefit cards, differentiation bullets, and target audiences.

## Contact (`useContactContent`)
- Supplies hero copy/email, project inquiry + engagement model metadata, form configuration (project types), consultation CTA details, and schedule copy.
- Designed to pair with `ContactCard` + `useContactForm` (Task 7) so additional forms can reuse the same data contract.

## Legal (`useLegalContent`)
- Handles copy for `/privacy` and `/terms` routes.
- Returns `{ seo, hero, sections, contact }` objects defined in `app/data/content/legal.ts`.
  - `sections`: array of `{ title, paragraphs }` rendered in shared `BaseSection` + `UCard` layouts.
  - `contact`: `{ prompt, email, suffix, ctaLabel }` used for inline messaging and CTA buttons.
- Eliminates the old markdown dependency so legal pages share the same component system as marketing routes.

### Usage Guidelines
1. Import composables inside page-level `<script setup>` blocks; destructure locally for readability.
2. Update content in `app/data/content/*.ts` – avoid sprinkling strings throughout Vue files.
3. When adding new marketing or legal copy, prefer extending the relevant data module before consuming it in templates.
