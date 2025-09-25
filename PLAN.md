# Nuxt UI & Shared Component Adoption Plan

## Status Update
- Tasks 1–14 are complete; documentation, QA evidence, and handoff materials are now in place.
- Legacy CSS audit concluded in Task 13 — surviving atoms are catalogued in `docs/components/UTILITIES.md`.
- Visual baselines, Playwright MCP captures, and Lighthouse results are logged under `docs/qa/`, with the formal report maintained in `docs/qa/REPORT.md`.

## 1. Goals & Guardrails
- Replace bespoke CSS-heavy markup with `@nuxt/ui` primitives to guarantee consistent styling, accessibility, and dark/light parity.
- Centralize layout, navigation, and section patterns into shared components so every page reuses the same building blocks.
- Reduce global CSS to a slim baseline, relying on Nuxt UI tokens, utility classes, and theme settings for the visual system.
- Preserve performance budgets (bundle size, CLS) while introducing richer UI patterns.
- Capture non-UI follow-ups (SEO, i18n) in a deferred backlog for later iterations.

## 2. Discovery & Inventory (Sprint 0)
- Catalogue each layout pattern in `app/app.vue` and `app/pages/**`, noting overlapping structures and bespoke variants.
- Extract color, spacing, and gradient tokens from `app/assets/css/main.css` and map them to Nuxt UI theme variables.
- Identify all lists (services, processes, testimonials, CTAs, technology logos) and confirm canonical copy in `docs/COPY-*.md`.
- Flag routes that need dynamic behaviour (forms, accordions, timeline animations) to ensure new components satisfy the requirements.
- Audit current component auto-imports to understand which bespoke components can be retired or wrapped with Nuxt UI equivalents.
- Trace every usage of global utility classes (e.g., `.container`, `.nav-link`, `.cta`) so replacements account for spacing and responsive breakpoints already in use.
- Inventory icons, imagery, and decorative assets referenced across pages to plan `NuxtImg` presets and icon sets before migration.
- Record layout or typography edge-cases (hero gradients, split backgrounds, custom headings) where Nuxt UI tokens might need extension hooks.

## 3. Nuxt UI Foundation & Theming
- Audit existing `nuxt.config.ts` settings and install the Nuxt UI Tailwind preset, ensuring `@nuxt/ui` tokens are active globally.
- Create `app/app.config.ts` with `defineAppConfig` to declare brand palette, gradient tokens, typography scale, container sizes, and UI defaults.
- Configure custom `ui` variants (e.g., `primary`, `ghost`, `muted`, `highlight`) that replicate current button and card treatments.
- Trim legacy global CSS to a minimal reset, delegating spacing, gradients, and typography to Nuxt UI utility classes and tokens.
- Document theme decisions (naming, usage) in a new `docs/DESIGN-TOKENS.md` entry so future components stay aligned.

## 4. Layout Shell & Global UI
- Replace `app/app.vue` markup with a lightweight wrapper that renders a new `AppShell` layout component built from `UContainer`, `UNavigationMenu`, `UButton`, and `UFooter`.
- Implement `AppHeader`, `AppFooter`, and `AppMain` components under `app/components/layout/`, each using Nuxt UI primitives and consuming config-driven navigation.
- Add a theme-aware color mode toggle (wrapping `ColorModeSwitch` from Nuxt UI) once the layout stabilizes.
- Expose top-level metadata (logo text/svg, contact CTA link, social links) via `useAppConfig`, ensuring layout components stay data-driven.
- Leverage `@nuxt/device` to adjust layout behaviour (e.g., collapse nav into `UButtonGroup`/`USlideover` on mobile) without duplicating markup.

## 5. Shared Component System
### 5.1 Structural primitives
- Build `BaseSection` to standardize padding, background variants (default, gradient, dark, testimonial, CTA), and optional eyebrow headings using Nuxt UI classes.
- Provide `SectionHeader` that encapsulates eyebrow, title, subhead, and alignment options, automatically rendering typography tokens.
- Introduce `ContentGrid` and `FeatureGrid` components powered by `UCard`, `UBadge`, and `UAvatar` for two-, three-, and four-column layouts.
- Create `MetricList` and `BulletList` wrappers for repeated lists (checkmarks, deliverables), mapping boolean props to icons from `@nuxt/ui`.

### 5.2 Marketing modules
- Implement `HeroSection` with slots/props for eyebrow, title, lead, CTA group (`UButtonGroup`), proof points, and an optional side card using `UCard`.
- Add `ProblemSolutionSection` that renders two-column narratives (challenge vs. outcome) leveraging `BaseSection` plus `ContentGrid`.
- Build `ServiceShowcase` to display cards sourced from docs, supporting emphasis variants, icon slots, and CTA links.
- Craft `ProcessTimeline` using `USteps` or `UStepper` for sequential phases, including horizontal scroll fallback for mobile via Nuxt UI flex utilities.
- Create `TechnologyMarquee` that wraps a composable-driven list of logos into an auto-scrolling marquee with pause-on-hover controls.
- Deliver `SocialProofSection` combining `TestimonialBlock`, logos, and `CTADeck` variants to cover quotes, stats, and final CTAs.

### 5.3 Utility components
- Standardize buttons via `AppButton` and `AppLinkButton` components that map semantic intents (`primary`, `secondary`, `outline`, `ghost`) to Nuxt UI variants.
- Create `IconBadge`, `Tag`, and `StatPill` wrappers to surface small highlight elements consistently across pages.
- Introduce a `LazyImage` wrapper around `NuxtImg` (`@nuxt/image`) for technology logos and illustrations, including responsive presets.
- Provide a `BackgroundVariant` helper (object or composable) that centralizes gradient and surface classes shared across sections.

## 6. Forms & Interactive Elements
- Refactor the Contact page to use `UForm`, `UFormGroup`, `UInput`, `UTextarea`, and `USelect`, wiring validation through `zod` or Nuxt UI schema helpers.
- Provide a reusable `ContactCard` component for CTA sections, ensuring analytics events can be attached to CTA buttons.
- Wrap form submission in a `useContactForm` composable that handles loading states, error surfacing, and server integration.
- Document accessibility expectations (labels, error messaging, focus management) and bake them into the shared form components.

## 7. Composables & Data Access
- Implement `useSiteNavigation`, `useSiteLinks`, and `useSocialLinks` composables that pull structured data from `app.config` for header/footer components.
- Create `useHomepageContent`, `useServicesContent`, and similar helpers, each hydrating copy blocks from `@nuxt/content` or pre-parsed markdown sections in `docs/`.
- Add a `useSectionCopy(key)` helper that fetches copy by key and logs missing sections during development.
- Expose a `useTechnologyStack` composable returning logos, accessible labels, and links for the marquee component.

## 8. Page Migration Plan
- Phase 1: Migrate Home (`app/pages/index.vue`) to the new component stack, validating each section against the copy docs and ensuring parity.
- Phase 2: Update Services index and detail pages to reuse `HeroSection`, `ServiceShowcase`, `ProcessTimeline`, and `SocialProofSection` variants.
- Phase 3: Refactor About, Process, and Contact pages, introducing any needed specialized sections (timeline, team bios) as shared modules.
- Phase 4: Align legal pages (Privacy, Terms) with `@nuxt/content` or `UProse` for Markdown rendering, ensuring they use `BaseSection`.
- Phase 5: Remove legacy CSS classes once all pages consume shared components and run visual regression sweeps to confirm fidelity.

## 9. Deferred Backlog (Post-UI Refactor)
- Revisit localization by syncing copy from `docs/COPY-*.md` into `@nuxtjs/i18n` resources, adding locale QA, and documenting variance within the contributor checklist.
- Layer in SEO defaults with `@nuxtjs/seo`, structured data recipes, and sitemap refinements; ensure meta presets cover the legal routes migrated in Task 13.
- Expand analytics and experimentation hooks once shared components stabilize, including tracking for CTA variants and marquee interactions.
- Schedule an accessibility sweep (focus management, reduced-motion fallbacks) now that the component system is consistent.
- Automate Playwright MCP baseline refreshes as part of release prep so docs/qa artefacts stay current.

## 10. Quality, Testing & Verification
- Establish a component playground (Storybook or Nuxt UI preview route) to develop and document shared components in isolation.
- Write smoke tests or snapshot scripts (Vitest + @testing-library/vue) for critical shared components such as Hero, ProcessTimeline, and SocialProofSection.
- Document manual QA flows: navigation (desktop/mobile), dark/light mode toggles, and form submission paths.
- Integrate lint rules enforcing component auto-import paths and disallowing raw copy in templates.

## 11. Documentation & Governance
- Maintain this plan (`PLAN.md`) as a living document, updating sections as milestones complete and new components emerge.
- Keep usage guidelines for each shared component in `docs/components/` aligned with the live props/slots and note any deprecations after Task 13 cleanup.
- Host the contributor checklist in `docs/CONTRIBUTOR-CHECKLIST.md`, covering linting, copy sync, accessibility, and visual QA expectations.
- Record QA evidence and findings in `docs/qa/REPORT.md`, linking to Playwright artefacts and manual verification notes.
- Schedule periodic reviews with stakeholders to confirm copy accuracy, design alignment, and upcoming feature needs.
