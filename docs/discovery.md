# Discovery Inventory (Task 1)

## Layout Overview
- `app/app.vue` implements the global shell (`UApp`) with a sticky header, slide-over mobile navigation, routed page slot, and footer.
  - Header uses `UNavigationMenu`, `UContainer`, and two `UButton` instances; routes defined inline via a computed `navigationItems` array and `useRoute()` for active state highlighting.
  - Mobile navigation relies on an `isMobileMenuOpen` ref toggled by a ghost button; `USlideover` hosts the vertical menu and contact CTA. A `watch` on `route.path` closes the menu after navigation.
  - Footer content is hard-coded with links to `/privacy` and `/terms`; copy references vibe-coding positioning.
- Global styles (inline `<style>` block) set typography (`Inter` font stack), dark background (`#0f172a`), and reusable containers/sections (`.app-shell`, `.container`, `.site-header`, `.site-footer`).

## Route Inventory & Content Dependencies
- **Home (`app/pages/index.vue`)**
  - Sections: hero, problem framing, services overview, cleanup process, tech stack marquee, reasons to choose Aesir, testimonial, CTA grid.
  - Data structures: `heroPoints`, `heroHighlights`, `challenges`, `impacts`, `services`, `cleanupProcess`, `idealCustomers`, `reasons`, `finalCtas`, `techLogos` (duplicated via `carouselLogos`), all defined inline within the page.
  - Dynamic behaviour: computed `carouselLogos` duplicates the tech list for marquee animation; `trackStyle` exposes `--item-count` for scrolling. Hero/service CTA links route to service subpages and anchors.
  - Copy source: inline English text; no linkage to `docs/COPY-*.md` yet.
- **Services Index (`app/pages/services/index.vue`)**
  - Sections: services hero grid, secondary gradient band highlighting cleanup and technology expertise.
  - Data structures: `services` array with focus labels, routes, and copy located directly in the page script.
  - Copy source: inline English strings.
- **Services – Vibe Coding Cleanup (`app/pages/services/vibe-coding-cleanup.vue`)**
  - Sections: hero with CTAs, problem/issues grids, dual-phase cleanup process, deliverables vs audience split, value props messaging, final contact CTA.
  - Data structures: `problemItems`, `issues`, `phases`, `phasesExtended`, `deliverables`, `audiences`, `valueProps`, `targetMessages` (all inline constants).
  - Copy source: inline English; CTA links to `/contact` and `/services` routes.
- **Services – Web Development (`app/pages/services/web-development.vue`)**
  - Sections: hero, overview/value split, approach cards, technologies & messaging, contact CTA pair.
  - Data structures: `whatWeBuild`, `values`, `approach`, `technologies`, `targetMessaging` defined inline.
  - Copy source: inline English text.
- **Services – Staff Augmentation (`app/pages/services/staff-augmentation.vue`)**
  - Sections: hero, overview/expertise split, engagement models, reasons vs messaging, contact CTA pair.
  - Data structures: `benefits`, `expertiseAreas`, `engagementModels`, `reasons`, `messages` inline.
- **Services – Mobile Development (`app/pages/services/mobile-development.vue`)**
  - Sections: hero, overview/process split, technologies vs messaging, contact CTA pair.
  - Data structures: `offerings`, `process`, `technologies`, `messages` inline.
- **Services – Game Development (`app/pages/services/game-development.vue`)**
  - Sections: hero, overview/service split, technologies vs messaging, contact CTA pair.
  - Data structures: `offerings`, `servicesList`, `technologies`, `messages` inline.
- **About (`app/pages/about.vue`)**
  - Sections: hero with CTAs, mission card, approach pillars, values grid.
  - Data structures: `pillars`, `values` inline.
- **Process (`app/pages/process.vue`)**
  - Sections: hero, three-step process grid, benefits trio, differentiation vs audiences split.
  - Data structures: `processSteps`, `benefits`, `differentiation`, `audiences` inline.
- **Contact (`app/pages/contact.vue`)**
  - Sections: hero, inquiry & engagement split, gradient contact form + call CTA, schedule card.
  - Data structures: `projectInquiry`, `engagementModels`, `projectTypes` inline.
  - Dynamic behaviour: Contact form is static HTML with prevented submit (`@submit.prevent`); no data handling yet. `contact-grid` adjusts to single column below 900px.
- **Privacy (`app/pages/privacy.vue`)** and **Terms (`app/pages/terms.vue`)**
  - Each contains hero + single informational card with inline copy and mailto links. No external markdown ingestion yet.

## Global Styles & Token Inventory (`app/assets/css/main.css`)
- **Imports**: Tailwind base via `@import "tailwindcss";` and Nuxt UI preset via `@import "@nuxt/ui";`.
- **Typography & Base**: Global font stack `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`; headings size via `clamp` utilities in hero/section styles.
- **Color Palette Observed**:
  - Dark base: `#0f172a` backgrounds, transparent variants (`rgba(15,23,42,…)`).
  - Light text: `#e2e8f0` with opacity variations (`rgba(226,232,240,0.7–0.85)`).
  - Accent gradients: `#38bdf8`, `#6366f1`, `#22d3ee`, `#7c3aed`, `#2dd4bf`, plus teal/purple overlays via rgba.
  - Neutral borders: `rgba(148,163,184,0.2–0.8)`.
- **Spacing & Layout Tokens**:
  - `.container`: `min(1120px, 100% - 3rem)` width; mobile adjustment to `100% - 2.5rem` below 640px.
  - Section rhythm now driven by shared `BaseSection` defaults (`padding: default`, `width: default`); legacy `.page` wrappers remain on routes not yet migrated.
  - Grids: `.grid` base gap `2rem` with responsive `auto-fit` templates for 2/3/4 column layouts.
- **Utility/Structural Classes**:
  - `.section`, `.section-inner`, `.section--gradient`, `.section--dark`, `.section--testimonial` still power unmigrated routes; the homepage now composes `BaseSection`, `SectionHeader`, and module wrappers (`HeroSection`, `ProblemSolutionSection`, `ServiceShowcase`, `ProcessTimeline`, `TechnologyMarquee`, `SocialProofSection`).
  - `.card` variants (`--muted`, `--highlight`, `--bright`) continue supporting legacy pages; module cards lean on Nuxt UI (`UCard`) styles.
  - Button utilities `.btn`, `.btn--primary`, `.btn--ghost` manage CTA styling outside of Nuxt UI components.
- **Responsive Behaviour**:
  - BaseSection + ContentGrid handle breakpoints for migrated sections; remaining media queries cover legacy hero layout and container width adjustments.

## Global Utility & Behaviour Notes
- Navigation menu state is handled globally in `app/app.vue`; ensures mobile slide-over closes on route change.
- Shared components now live under `app/components/` (layout primitives, shared sections, marketing modules); remaining legacy pages still render handcrafted CSS structures until their migration tasks land.
- Tailwind utilities are available through Nuxt UI, but the codebase still relies mainly on handcrafted classes from `main.css` on unmigrated routes.
- `useSeoMeta` invoked in every page to set title/description.
- Forms and CTAs link to internal routes; no API integrations or composables for data fetching yet.

## Content Source Observations
- English and Portuguese copy files exist under `docs/COPY-EN.md` and `docs/COPY-PT_BR.md`. Until locale files are created for `@nuxtjs/i18n`, treat these Markdown docs as the canonical source of truth and sync page copy accordingly. Once translation JSON/YAML resources are introduced, they become the primary source while the docs remain the reference for long-form content.
- Lists (services, process steps, benefits, etc.) are embedded per route; ideal candidates for extraction into composables (`useServices`, `useCompanyValues`, etc.) or content-driven sources once Nuxt UI migration proceeds.
- Testimonials, technology logos, and CTA messaging live inline, meaning localization or reuse will require refactoring.

## Open Questions / Risks
- Establish a timeline for moving structured copy from inline arrays into shared composables or direct consumption from `docs/COPY-*.md`, then plan the handoff to i18n language files when they are introduced.
- Identify overlap between page-specific arrays (e.g., repeating CTA copy across services) before extracting to shared modules.
- Assess plan for phasing out custom `.btn` styles once Nuxt UI button variants are established.
