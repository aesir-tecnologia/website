# Repository Guidelines

## Project Structure & Module Organization
The Nuxt 4 application lives under `app/`, with `app/app.vue` acting as the root layout and future route-level pages expected in `app/pages/`. Static assets ship from `public/`, while long-form copy and translation source live in `docs/` (`COPY-EN.md`, `COPY-PT_BR.md`). Configuration and build metadata reside in `nuxt.config.ts`, `tsconfig.json`, and the auto-generated `.nuxt/` directory (do not edit `.nuxt/` by hand).

## Build, Test, and Development Commands
- `npm install` prepares dependencies and triggers `nuxt prepare` on postinstall.
- `npm run dev` starts the local dev server at `http://localhost:3000` with hot module replacement.
- `npm run build` compiles the production bundle; pair with `npm run preview` to smoke-test the output locally.
- `npm run generate` emits a fully static build when deploying to static-friendly platforms.

## Coding Style & Naming Conventions
Use TypeScript and Vue 3 `<script setup>` syntax whenever practical. Follow Nuxt defaults: 2-space indentation, PascalCase for Vue components, and kebab-case for route filenames. Linting flows through `@nuxt/eslint`; run `npx eslint .` before opening a PR. Keep configuration changes inside `nuxt.config.ts`, and co-locate i18n strings alongside content rather than hard-coding strings in components.

## Testing Guidelines
Automated tests are not yet configured. When adding them, prefer Nuxt-compatible Vitest suites under `tests/` with file names like `MyComponent.spec.ts`. For now, document manual verification steps in PRs and keep critical logic isolated so coverage can be added incrementally. Coordinate before introducing new testing dependencies.

## Commit & Pull Request Guidelines
Match the existing Git history: imperative, sentence-case commit subjects (e.g., "Implement internationalization with English and Portuguese support"). Squash small WIP commits before review. PRs should describe scope, list user-facing changes, and link issues. Include screenshots or short clips for UI updates and note any configuration or content migrations. Ensure linting passes and the dev server builds before requesting review.

## Internationalization & Localization Notes
The project ships with `@nuxtjs/i18n`; keep translation keys centralized and update both English and Portuguese sources in `docs/` when altering copy. Validate language switches locally and confirm routes render correctly for each locale prior to merging.
