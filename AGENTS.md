# Repository Guidelines

## Project Structure & Module Organization
The Nuxt 4 application resides in `app/`, with `app/app.vue` providing the root layout and additional routes defined in `app/pages/`. Place shared components under `app/components/` and composables in `app/composables/` to leverage auto-imports. Long-form copy and translation source are stored in `docs/` (`COPY-EN.md`, `COPY-PT_BR.md`), while static assets ship from `public/`. Limit configuration updates to `nuxt.config.ts` and `tsconfig.json`; never modify the generated `.nuxt/` directory by hand.

## Nuxt Modules
`nuxt.config.ts` currently registers the following modules for the project:

- `@nuxt/content`
- `@nuxt/eslint`
- `@nuxt/image`
- `@nuxt/ui`
- `@nuxt/devtools`
- `@nuxtjs/i18n`
- `@nuxtjs/color-mode`
- `@nuxtjs/sitemap`
- `@nuxtjs/robots`
- `@nuxtjs/device`
- `@nuxtjs/seo`

## Build, Test, and Development Commands
Run `npm install` after cloning to install dependencies and trigger `nuxt prepare`. Use `npm run dev` for the HMR development server at `http://localhost:3000`. Build production bundles with `npm run build`, then validate locally via `npm run preview`. When targeting static hosting, execute `npm run generate` to emit prerendered assets.

## Coding Style & Naming Conventions
Author new code in TypeScript using Vue 3 `<script setup>` syntax with 2-space indentation. Name Vue components in PascalCase (`HeroBanner.vue`); route files should remain kebab-case (`about-us.vue`). Centralize user-facing strings in the copy docs or `@nuxtjs/i18n` resources rather than hard-coding. Before opening a PR, lint with `npx eslint .` and address reported issues.

## Testing Guidelines
Automated tests are not yet configured, so document manual verification steps in PRs. If tests are introduced, prefer Vitest suites in `tests/` named `ComponentName.spec.ts`, and keep dependencies minimal. Coordinate with maintainers before adding new testing tooling or coverage thresholds.

## Commit & Pull Request Guidelines
Craft commit subjects in imperative, sentence case (e.g., "Add Portuguese hero copy"). Squash incidental WIP commits prior to review. Pull requests should summarize scope, list user-visible changes, link related issues, and include screenshots or clips for UI updates. Confirm linting and the relevant build command succeed locally before requesting review.

## Localization Workflow
The site relies on `@nuxtjs/i18n`; update both English and Portuguese sources in `docs/` whenever copy changes. Verify locale toggling and critical routes in each language using `npm run dev` before merging.
