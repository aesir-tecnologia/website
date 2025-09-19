# Nuxt UI & Shared Component Adoption Plan

## 1. Goals & Guardrails
- Replace bespoke CSS-heavy markup with `@nuxt/ui` primitives to guarantee consistent styling and accessibility.
- Centralize layout, navigation, and section patterns into shared components so every page reuses the same building blocks.
- Keep English and Portuguese copy in `docs/` and expose via `@nuxtjs/i18n`, eliminating hard-coded text in Vue files.
- Strengthen default SEO (meta, Open Graph, structured data) using `@nuxtjs/seo` while preserving fast, responsive rendering.
- Maintain dark/light color modes, keyboard navigation, and performance budgets during the refactor.

## 2. Discovery & Inventory (Sprint 0)
- Catalogue each layout pattern in `app/app.vue` and `app/pages/**`, noting overlapping structures and bespoke variants.
- Extract color, spacing, and gradient tokens from `app/assets/css/main.css` and map them to Nuxt UI theme variables.
- Identify all lists (services, processes, testimonials, CTAs, technology logos) and confirm canonical copy in `docs/COPY-*.md`.
- Flag routes that need dynamic behaviour (forms, accordions, timeline animations) to ensure new components satisfy the requirements.

## 3. Nuxt UI Foundation & Theming
- Audit existing `nuxt.config.ts` settings and install the Nuxt UI Tailwind preset, ensuring `@nuxt/ui` tokens are active globally.
- Create `app/app.config.ts` with `defineAppConfig` to declare brand palette, gradient tokens, typography scale, container sizes, and UI defaults.
- Configure custom `ui` variants (e.g., `primary`, `ghost`, `muted`, `highlight`) that replicate current button and card treatments.
- Trim legacy global CSS to a minimal reset, delegating spacing, gradients, and typography to Nuxt UI utility classes and tokens.
- Document theme decisions (naming, usage) in a new `docs/DESIGN-TOKENS.md` entry so future components stay aligned.

## 4. Layout Shell & Global UI
- Replace `app/app.vue` markup with a lightweight wrapper that renders a new `AppShell` layout component built from `UContainer`, `UNavigationMenu`, `UButton`, and `UFooter`.
- Implement `AppHeader`, `AppFooter`, and `AppMain` components under `app/components/layout/`, each using Nuxt UI primitives and consuming config-driven navigation.
- Add a `LanguageSwitcher` (using `@nuxtjs/i18n`’s `useSwitchLocalePath`) and a `ColorModeToggle` (wrapping `ColorModeSwitch` from Nuxt UI) inside the header.
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
- Add `useSectionCopy(key, locale)` helper that fetches copy by key, falling back to English and logging missing translations during development.
- Provide `useSeoDefaults` composable that returns base meta (title template, description, canonical) and merges route-specific overrides.
- Expose a `useTechnologyStack` composable returning logos, accessible labels, and links for the marquee component.

## 8. Page Migration Plan
- Phase 1: Migrate Home (`app/pages/index.vue`) to the new component stack, validating each section against the copy docs and ensuring parity.
- Phase 2: Update Services index and detail pages to reuse `HeroSection`, `ServiceShowcase`, `ProcessTimeline`, and `SocialProofSection` variants.
- Phase 3: Refactor About, Process, and Contact pages, introducing any needed specialized sections (timeline, team bios) as shared modules.
- Phase 4: Align legal pages (Privacy, Terms) with `@nuxt/content` or `UProse` for Markdown rendering, ensuring they use `BaseSection`.
- Phase 5: Remove legacy CSS classes once all pages consume shared components and run visual regression sweeps to confirm fidelity.

## 9. Localization & Copy Workflow
- Split `docs/COPY-EN.md` and `docs/COPY-PT_BR.md` into structured blocks (front matter or markdown sections) with machine-readable keys.
- Generate `locales/en.json` and `locales/pt-br.json` from the docs via a simple sync script, storing section keys such as `homepage.hero.headline`.
- Replace hard-coded strings with `t('key')` lookups, injecting localized content into shared components via props.
- Configure `@nuxtjs/i18n` route strategy for services detail pages (e.g., `/pt-br/services/vibe-coding-cleanup`) and ensure `alternate` links are emitted.
- Establish a translation QA checklist: toggle locales on each route, confirm layout integrity, and cross-check copy with docs before release.

## 10. SEO, Metadata & Analytics
- Define global SEO defaults in `nuxt.config.ts` using `@nuxtjs/seo` (`site` object, trailing slash, canonical host, robots directives).
- Use `defineOgImageComponent` or static OG templates per page type, driven by section props such as hero title and CTA.
- Emit structured data (`Article`, `Service`, `Organization`) via `useSchemaOrg` for key pages, matching localized content.
- Configure `@nuxt/sitemap` to include localized routes and priority weighting for services and contact.
- Ensure `TechnologyMarquee` and other dynamic sections remain performant (respect `prefers-reduced-motion`, lazy-load heavy assets, and prefetch marquee data).

## 11. Quality, Testing & Verification
- Establish a component playground (Storybook or Nuxt UI preview route) to develop and document shared components in isolation.
- Write smoke tests or snapshot scripts (Vitest + @testing-library/vue) for critical shared components such as Hero, ProcessTimeline, and SocialProofSection.
- Document manual QA flows: navigation across locales, dark/light mode toggles, mobile/desktop breakpoints, and form submission paths.
- Integrate lint rules enforcing component auto-import paths, translation key usage, and disallowing raw copy in templates.

## 12. Documentation & Governance
- Maintain this plan (`PLAN.md`) as a living document, updating sections as milestones complete and new components emerge.
- Add usage guidelines for each shared component in `docs/components/` with props, slots, and screenshot references.
- Create a contributor checklist referencing linting, copy sync, translation verification, accessibility, and SEO validation steps before merging.
- Schedule periodic reviews with stakeholders to confirm copy accuracy, design alignment, and upcoming feature needs.
