# Contributor Checklist

Use this checklist before opening a pull request or handing off work. It captures the guardrails from PLAN.md, TASKS.md, and Task 14 documentation.

## Planning & Scope
- [ ] Confirm the task in `TASKS.md` (or issue tracker) has clear acceptance criteria and dependencies.
- [ ] Review component guidance in `docs/components/` to reuse existing primitives before introducing new ones.
- [ ] Sync with `docs/discovery.md` and `docs/DESIGN-TOKENS.md` when proposing new variants or tokens.

## Implementation
- [ ] Keep user-facing copy in `docs/COPY-*.md` or the content composables described in `docs/components/CONTENT.md`.
- [ ] Prefer Nuxt UI primitives, shared modules, and utility atoms instead of bespoke markup or CSS.
- [ ] Extend `app.config.ts` theme tokens (colors, typography, spacing) before adding ad-hoc Tailwind rules.
- [ ] Update relevant composables/components with TypeScript typings and minimal inline comments when behaviour is non-obvious.

## Local Verification
- [ ] Run `npm install` (once) to sync dependencies and `nuxt prepare` artefacts.
- [ ] Execute `npx eslint .` and address reported issues.
- [ ] Build or generate as required (`npm run generate` for static output, `npm run build` if release-focused).

## Visual & Functional QA
- [ ] Trigger the Playwright MCP capture to refresh baselines and collect screenshots.
- [ ] Verify light/dark modes and responsive breakpoints (≥1280, 768, 375) for updated routes.
- [ ] Walk through navigation, forms, and interactive widgets with keyboard navigation and reduced-motion preferences.
- [ ] Record findings in `docs/qa/REPORT.md`, linking to artefacts under `docs/qa/`.

## Documentation & Handoff
- [ ] Update `PLAN.md` and `TASKS.md` statuses if the work completes a milestone.
- [ ] Refresh component docs under `docs/components/` when props, slots, or usage patterns change.
- [ ] Append new backlog or follow-up items to the Deferred Backlog in `PLAN.md` when scope is trimmed.
- [ ] Include manual verification steps, copy diffs, and outstanding risks in your PR description.

## Localization & SEO
- [ ] Reflect copy updates in both `docs/COPY-EN.md` and `docs/COPY-PT_BR.md` (or note untranslated strings in the backlog).
- [ ] Confirm `@nuxtjs/i18n` routes and toggles continue to work after content changes.
- [ ] Ensure meta tags or structured data edits align with `@nuxtjs/seo` best practices; note gaps in the backlog section if deferred.

## Post-Merge Follow-up (as needed)
- [ ] Schedule accessibility or performance spot-checks when major UI shifts land.
- [ ] Coordinate with maintainers on analytics tagging for new CTAs or modules.
- [ ] Archive new QA captures or baseline updates in `docs/qa/` for future regressions.
