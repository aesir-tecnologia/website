# Implementation Task Breakdown

Sequential to-do list for a single developer delivering the Nuxt UI adoption plan. Update this file as work completes or requirements shift.

## Playwright MCP Workflow
- Use the Playwright MCP tool to capture visual documentation (screenshots, recordings) whenever QA evidence is requested. Store artifacts under `docs/qa/` alongside QA notes.
- Run the Playwright MCP automated test suite as part of required checks to surface regressions early; include any failures or diffs in task updates.
- Refresh baselines through the tool before large UI sweeps so visual comparisons stay accurate across tasks.

## Task 1 – Discovery & Inventory
- **Status:** Completed — inventory stored in `/docs/discovery.md`.
- **Goal:** Map existing layouts, styles, and content dependencies to guide component work.
- **Prerequisites:** Access to `docs/COPY-*.md` and any design references.
- **Key Activities:**
  - Catalogue layout patterns in `app/app.vue` and `app/pages/**`.
  - Extract active tokens (colors, spacing, typography) from `app/assets/css/main.css`.
  - Document list/data structures (services, testimonials, CTAs) and their copy source.
  - Record global utility class usage and dynamic behaviour requirements.
- **Acceptance Criteria:** Inventory captured in `/docs/discovery.md` (or updated section if existing); stakeholders sign off on completeness.
- **Risks & Mitigations:** Missing bespoke behaviour → note open questions early. If copy source unclear, add TODOs + contact owners.
- **Required Checks:** `npx eslint .`; Visual QA spot-check key routes to confirm inventory accuracy.

## Task 2 – Nuxt UI Foundation & Theming
- **Status:** Completed — Nuxt UI theme aliases applied via `app/app.config.ts`, global CSS tokens centralized, and tokens documented in `docs/DESIGN-TOKENS.md`.
- **Goal:** Establish `@nuxt/ui` theme config and trim legacy global CSS baseline.
- **Prerequisites:** Discovery inventory finalized; confirmation of brand palette/typography decisions.
- **Key Activities:**
  - Audit `nuxt.config.ts`; enable Nuxt UI Tailwind preset as needed.
  - Create/update `app/app.config.ts` with palette, typography scale, container sizes, and component defaults.
  - Cross-reference token, layout, and utility notes in `/docs/discovery.md` when defining theme variables and deciding which legacy CSS can be removed.
  - Define `ui` variants (`primary`, `secondary`, `ghost`, etc.) matching existing treatments.
  - Reduce global CSS to reset + critical utilities.
  - Document theme tokens in `docs/DESIGN-TOKENS.md`.
- **Acceptance Criteria:** Theme loads without regressions; design tokens documented; lint and build succeed.
- **Risks & Mitigations:** Token mismatch causing regressions → use baseline visuals; feature flag major CSS deletions if unsure.
- **Required Checks:** `npx eslint .`; `npm run generate`; Visual QA regression check on homepage and services.

## Task 3 – Layout Shell & Global UI Components
- **Status:** Completed — `AppShell`, `AppHeader`, `AppFooter`, and `AppMain` use Nuxt UI primitives with navigation + CTA data sourced from `app/app.config.ts`.
- **Goal:** Introduce `AppShell`, `AppHeader`, `AppFooter`, `AppMain` components built on Nuxt UI primitives.
- **Prerequisites:** Task 2 complete; navigation copy confirmed.
- **Key Activities:**
  - Scaffold components under `app/components/layout/` and update `app/app.vue` to use them.
  - Implement responsive navigation, mobile slide-over, and color-mode toggle.
  - Source navigation links and metadata from `useAppConfig`.
  - Mirror behaviour documented in `/docs/discovery.md` (header stickiness, slide-over defaults, footer content) before swapping implementations.
- **Acceptance Criteria:** `app/app.vue` only orchestrates the layout components; header/footer match existing behaviour; mobile menu + color mode functional.
- **Risks & Mitigations:** Navigation regressions → add temporary console warnings for missing config entries; ensure focus trapping in slide-over.
- **Required Checks:** `npx eslint .`; `npm run generate`; Visual QA on header/footer (desktop + mobile).

## Task 4 – Structural Shared Components
- **Status:** Completed — shared section primitives live under `app/components/shared/`, documented in `docs/components/STRUCTURAL.md`, and verified via `/playground/sections` with Playwright MCP capture stored in `docs/qa/task-4-structural-components.png`.
- **Goal:** Build foundational sections (`BaseSection`, `SectionHeader`, `ContentGrid`, `FeatureGrid`, `MetricList`, `BulletList`).
- **Prerequisites:** Layout shell merged; tokens available via app config.
- **Key Activities:**
  - Scaffold components in `app/components/shared/`.
  - Wire props for variant handling and responsive layouts using Nuxt UI primitives.
  - Write minimal docs usage notes in `docs/components/`.
  - Use `/docs/discovery.md` to identify repeated section layouts and data structures that need shared primitives.
- **Acceptance Criteria:** Components render in isolation via a temporary playground route; props/slots cover existing needs; documentation stub committed.
- **Risks & Mitigations:** Over-generalization → start with current page requirements; capture future enhancements in TODOs.
- **Required Checks:** `npx eslint .`; `npm run generate`; Visual QA on playground route (light/dark + mobile).

## Task 5 – Marketing Modules
- **Goal:** Implement `HeroSection`, `ProblemSolutionSection`, `ServiceShowcase`, `ProcessTimeline`, `TechnologyMarquee`, `SocialProofSection` using structural primitives.
- **Prerequisites:** Task 4 complete; content structure approved.
- **Key Activities:**
  - Build modules under `app/components/modules/` with typed props and slots.
  - Integrate `@nuxt/ui` components (`UCard`, `USteps`, `UButtonGroup`, etc.).
  - Ensure marquee and timeline handle mobile gracefully.
  - Align module scope with the home/marketing section inventory captured in `/docs/discovery.md`.
- **Acceptance Criteria:** Each module demoed in playground; responsive behaviour validated; copy sourced via composables or props, not hard-coded.
- **Risks & Mitigations:** Performance (auto-scrolling marquee) → add `prefers-reduced-motion` guard; ensure lazy-loading for heavy assets.
- **Required Checks:** `npx eslint .`; `npm run generate`; Visual QA via playground and baseline comparison.

## Task 6 – Utility Components
- **Goal:** Standardize smaller UI atoms (`AppButton`, `AppLinkButton`, `IconBadge`, `Tag`, `StatPill`, `LazyImage`, `BackgroundVariant`).
- **Prerequisites:** Tasks 4-5 complete.
- **Key Activities:**
  - Implement wrappers mapping semantic intents to theme variants.
  - Centralize background/gradient logic.
  - Add composable for `NuxtImg` presets.
  - Audit repeated utility usage noted in `/docs/discovery.md` to drive which atoms get formalized.
- **Acceptance Criteria:** Utilities adopted by modules; no direct `UButton` usage remains in feature components; documentation updated.
- **Risks & Mitigations:** Variant drift → write unit tests where practical or add snapshots later; monitor bundle size impacts of icon sets.
- **Required Checks:** `npx eslint .`; `npm run generate`; Visual QA on modules to confirm styling parity.

## Task 7 – Forms & Interactive Elements
- **Goal:** Refactor contact form and related CTAs using Nuxt UI form suite and composables.
- **Prerequisites:** Utility components ready; validation approach (e.g., Zod) agreed.
- **Key Activities:**
  - Build `ContactCard` and refactor `contact.vue` with `UForm`, `UFormGroup`, `UInput`, `UTextarea`, `USelect`.
  - Create `useContactForm` composable to manage submission states and integration.
  - Document accessibility expectations.
  - Reference the contact section analysis in `/docs/discovery.md` to preserve existing fields, CTAs, and responsive behaviour.
- **Acceptance Criteria:** Form validates client-side; loading/error states accessible; analytics hooks (if required) preserved.
- **Risks & Mitigations:** API integration uncertainty → mock endpoints during dev; ensure fallback for JS-disabled users if required.
- **Required Checks:** `npx eslint .`; `npm run generate`; Visual QA includes form submission path (success + failure).

## Task 8 – Content Composables & Data Access
- **Goal:** Centralize site data retrieval via composables (`useSiteNavigation`, `useSiteLinks`, `useSocialLinks`, `useHomepageContent`, etc.).
- **Prerequisites:** Modules needing data identified; copy keys agreed with localization owners.
- **Key Activities:**
  - Implement composables reading from `app.config`, markdown extracted from `docs/`, or other agreed data sources (without relying on `@nuxt/content`).
  - Add `useSectionCopy(key)` with dev-time logging for missing keys.
  - Update modules/pages to consume composables instead of inline data.
  - Map every composable back to the data structures enumerated in `/docs/discovery.md` so no lists are missed during extraction.
- **Acceptance Criteria:** No hard-coded copy within Vue templates; missing keys throw warnings; docs updated with copy mapping.
- **Risks & Mitigations:** Copy drift between docs and i18n → add checklist entry; ensure composables are tree-shakable.
- **Required Checks:** `npx eslint .`; `npm run generate`; Visual QA verifying content matches `docs/COPY-*.md`.

## Task 9 – Page Migration Phase 1 (Home)
- **Goal:** Replace homepage sections with new shared components ensuring visual and behavioural parity.
- **Prerequisites:** Tasks 4–8 complete; homepage copy double-checked.
- **Key Activities:**
  - Migrate each section sequentially, validating against baseline visuals.
  - Remove redundant bespoke components/CSS tied to home.
  - Use the homepage breakdown in `/docs/discovery.md` to ensure all sections and CTAs are represented in the new component stack.
- **Acceptance Criteria:** `app/pages/index.vue` composed solely of new shared components; Visual QA parity confirmed; legacy CSS for home removed.
- **Risks & Mitigations:** Regression to hero/layout → compare side-by-side using baseline captures; commit in small increments.
- **Required Checks:** `npx eslint .`; `npm run generate`; Visual QA (desktop/mobile, light/dark, interactions).

## Task 10 – Page Migration Phase 2 (Services)
- **Goal:** Apply shared components to services landing and detail pages.
- **Prerequisites:** Task 9 merged; services copy validated.
- **Key Activities:**
  - Update `services/index.vue` and detail routes to reuse `HeroSection`, `ServiceShowcase`, etc.
  - Ensure dynamic navigation highlighting remains accurate.
  - Follow the services inventory in `/docs/discovery.md` to migrate every offering, CTA, and messaging block.
- **Acceptance Criteria:** Services pages fully rely on shared components; QA parity achieved.
- **Risks & Mitigations:** Detail page uniqueness → extend modules carefully or add props; coordinate copy updates if gaps found.
- **Required Checks:** `npx eslint .`; `npm run generate`; Visual QA across services routes.

## Task 11 – Page Migration Phase 3 (About, Process, Contact)
- **Goal:** Refactor remaining marketing pages to shared component stack.
- **Prerequisites:** Task 10 complete; forms task (Task 7) integrated.
- **Key Activities:**
  - Align page structure to modules; introduce any new variants needed (documented immediately).
  - Validate process timelines and contact flows.
  - Reference the About/Process/Contact summaries in `/docs/discovery.md` so structural elements and form expectations remain intact.
- **Acceptance Criteria:** About, Process, Contact routes use shared system; forms work end-to-end; copy matches docs.
- **Risks & Mitigations:** Timeline accessibility → ensure keyboard navigation; contact form backend errors handled gracefully.
- **Required Checks:** `npx eslint .`; `npm run generate`; Visual QA on each route per guidelines.

## Task 12 – Page Migration Phase 4 (Legal Pages)
- **Goal:** Ensure legal routes render via Nuxt UI (`UProse` etc.) and match design tokens.
- **Prerequisites:** Task 11 done; content verified up to date.
- **Key Activities:**
  - Integrate a Markdown rendering pipeline (e.g., Markdown-it with `UProse`) for legal copy sourced from `docs/`.
  - Apply `BaseSection` wrappers for consistent spacing.
  - Reconcile layouts and links with the legal section notes in `/docs/discovery.md` before swapping implementations.
- **Acceptance Criteria:** Privacy and Terms pages match baseline content; styling unified; links accessible.
- **Risks & Mitigations:** Markdown parsing differences → preview before commit; watch for SEO regressions (title/meta).
- **Required Checks:** `npx eslint .`; `npm run generate`; Visual QA on legal pages.

## Task 13 – Page Migration Phase 5 & Legacy CSS Cleanup
- **Goal:** Remove unused CSS/utilities and finalize component adoption.
- **Prerequisites:** All pages migrated; list of unused styles prepared.
- **Key Activities:**
  - Prune legacy styles from `app/assets/css/main.css`.
  - Run visual regression sweep against baseline captures.
  - Document removed classes in changelog if they affect downstream usage.
  - Cross-check the global style inventory in `/docs/discovery.md` to confirm tokens/utilities slated for removal are actually unused.
- **Acceptance Criteria:** No references to removed classes remain; build size reduction measured; QA confirms no regressions.
- **Risks & Mitigations:** Hidden dependency on CSS → search repo before deletion, deprecate gradually if needed.
- **Required Checks:** `npx eslint .`; `npm run generate`; Visual QA full site sweep.

## Task 14 – Documentation, QA Sign-off, and Handoff
- **Goal:** Solidify documentation, backlog, and QA evidence prior to release.
- **Prerequisites:** All previous tasks complete and merged.
- **Key Activities:**
  - Update `PLAN.md` status, `docs/components/`, and contributor checklist.
  - Record Visual QA results and attach updated visuals.
  - Compile deferred backlog items and localization/SEO follow-ups.
- **Acceptance Criteria:** Documentation current; QA log stored in `/docs/qa/REPORT.md`; stakeholders approve final pass.
- **Risks & Mitigations:** Knowledge siloing → include implementation notes; ensure backlog items tracked in issue tracker.
- **Required Checks:** `npx eslint .`; `npm run generate`; final Visual QA (full navigation, light/dark, mobile/desktop).

## Visual QA Guidelines
Perform these checks for each task flagged above:
0. **Playwright MCP:** Trigger the Playwright MCP capture run before hands-on testing to collect updated visuals and execute automated smoke checks; review diff output for regressions.
1. **Environment:** Run `npm run dev` locally; test on Chrome + Safari (or closest equivalents) at common breakpoints (desktop ≥1280px, tablet 768px, mobile 375px).
2. **Theme Modes:** Toggle dark/light via color-mode switch; ensure contrast meets WCAG AA; confirm gradients/backgrounds render correctly.
3. **Responsive Navigation:** Verify header/footer, mobile menu, and focus states using keyboard navigation.
4. **Critical Flows:** Exercise CTA buttons, form submissions (success + failure), carousels/marquees with reduced-motion settings.
5. **Content Accuracy:** Cross-check copy against `docs/COPY-EN.md` and `docs/COPY-PT_BR.md`; ensure localization hooks remain intact.
6. **Performance Smoke:** Capture Lighthouse snapshot (Chrome dev tools) for the homepage after major UI changes; note significant regressions.
7. **Regression Logging:** Record findings/screenshots in `/docs/qa/REPORT.md`, referencing task numbers and page routes.

Always run `npx eslint .` and `npm run generate` before marking a task complete; document any deviations and escalate blockers immediately.
