# Repository Development Plan

## 1. Product Vision & Goals
- Position Aesir as the trusted partner for AI-assisted code cleanup (“Vibe Coding Cleanup”) and adjacent web services.
- Deliver a bilingual, conversion-oriented site that highlights process, proof, and pricing clarity.
- Support rapid iteration by codifying content sources, reusable UI primitives, and analytics from day one.

## 2. Audience & Experience Principles
- Primary: engineering leads seeking modernization help; secondary: founders needing fast cleanup projects.
- Voice: confident, technical, and transparent; avoid jargon when describing outcomes.
- Experience pillars: responsive performance, accessible interactions (WCAG 2.1 AA), and frictionless contact paths.

## 3. Architectural Foundations
- **Framework:** Nuxt 4 with hybrid rendering (ISR where possible) and TypeScript-first components.
- **Directory Layout:**
  - `app/`: page routes and layouts; introduce feature folders (`app/(marketing)/`, `app/(blog)/`).
  - `components/`: Vue equivalents of documented Vibe components, split by domain (e.g., `components/vibe/`).
  - `content/`: Markdown/MDX served via `@nuxt/content` for case studies, blog, and localization snippets.
  - `docs/`: source of canonical copy; create sync tasks to push into `content/`.
  - `locales/`: JSON message bundles for `@nuxtjs/i18n`.
- **Styling:** Adopt Nuxt UI primitives plus Tailwind CSS layer for custom tokens; define design tokens in `app.config.ts`.
- **State & Data:** Minimal global state, rely on composables; wire forms to backend/API gateway (TBD).

## 4. Feature Roadmap & Milestones
1. **Foundation Sprint** (Week 1)
   - Configure linting, formatting, commit hooks, CI skeleton.
   - Stand up global layout, navigation, footer, theme switching, and i18n scaffolding.
   - Implement analytics/telemetry placeholders (e.g., Plausible/GA).
2. **Marketing Core** (Weeks 2-3)
   - Build hero, value props, service overview using Vibe component equivalents in Vue.
   - Author bilingual copy for services and process; integrate carousel/process/CTA components.
   - Create contact funnel (form + scheduling CTA) and embed trust signals (logos, testimonials).
3. **Authority Layer** (Weeks 4-5)
   - Launch blog/case studies via `@nuxt/content` with filtering and localized metadata.
   - Add pricing/comparison tables, FAQ accordions, and downloadable resources (SEO magnets).
   - Optimize performance (image presets, route rules) and accessibility audits.
4. **Polish & Launch** (Weeks 6-7)
   - Cross-browser QA, mobile stress tests, and final copy reviews.
   - Integrate production analytics, error tracking, and CRM/webhook wiring.
   - Prepare deployment scripts (Vercel/Nitro target), run load tests, finalize launch checklist.

## 5. Localization & Content Operations
- Maintain single-source content in English, mirror Portuguese in `docs/` and `locales/` with automated diff checks.
- Define translation workflow: draft → review → sync → smoke-test on staging.
- Configure dynamic routes (`/[locale]/services/...`) with sitemap and meta tags per locale.

## 6. Quality, Testing & Tooling
- Unit/component: Vitest + Vue Test Utils; target >70% coverage on critical marketing components.
- Visual: Playwright snapshot suite for key breakpoints; run on PR via CI.
- Performance: integrate Nuxt DevTools performance budget (Largest Contentful Paint <2.5s on 3G Fast).
- Accessibility: eslint-plugin-vue-a11y + manual axe scans; document remediation tasks.

## 7. Collaboration & Delivery Practices
- Adopt trunk-based flow with feature branches; conventional commits (`feat:`, `fix:`). Squash merges gated by CI + review.
- Document acceptance criteria per task in issues; link design artifacts (Figma) and analytics requirements.
- Hold weekly planning + async status updates; maintain PLAN-CODEX.md as living roadmap with milestone burndown.

## 8. Post-Launch Optimization
- Monitor analytics funnels, heatmaps, and error logs; schedule fortnightly review.
- Backlog experiments (A/B hero messaging, CTA placements, localized offers).
- Plan quarterly content refresh and biannual accessibility/performance audits.
