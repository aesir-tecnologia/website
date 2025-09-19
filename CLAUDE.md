# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

**Development Server:**
```bash
npm run dev
```
Start the development server on `http://localhost:3000`

**Build & Production:**
```bash
npm run build          # Build for production
npm run generate       # Generate static site
npm run preview        # Preview production build locally
```

**Maintenance:**
```bash
npm install            # Install dependencies
npm run postinstall    # Prepare Nuxt (runs automatically after install)
```

**Linting:**
```bash
npx eslint .           # Run ESLint (uses .nuxt/eslint.config.mjs)
```

## Architecture Overview

This is a **Nuxt 4** application being transformed from a Next.js website. The project is currently in transition from a Studio template to an Aesir Tecnologia website focusing on AI-generated code cleanup services ("vibe coding cleanup").

**Current Status:**
- On `nuxt` branch (main development branch)
- Many original Next.js files have been removed (marked as deleted in git status)
- New Nuxt architecture being implemented
- Minimal app.vue currently shows NuxtWelcome component

**Key Technology Stack:**
- **Framework:** Nuxt 4 with Vue 3
- **Build:** Vite 7, TypeScript 5
- **Modules:** Content, UI, ESLint, Image, DevTools, i18n, SEO, Sitemap
- **Styling:** Tailwind CSS (via @nuxt/ui)
- **Features:** Color mode, Device detection, Internationalization (EN/PT-BR)

**Module Configuration:**
The app uses these key Nuxt modules (nuxt.config.ts):
- `@nuxt/content` - Content management
- `@nuxt/ui` - UI components and Tailwind
- `@nuxtjs/i18n` - Internationalization
- `@nuxtjs/seo` - SEO optimization
- `@nuxtjs/sitemap` - Sitemap generation
- `@nuxtjs/color-mode` - Dark/light mode
- `@nuxtjs/device` - Device detection

**Content Strategy:**
- Marketing copy exists in `docs/COPY-EN.md` and `docs/COPY-PT_BR.md`
- Detailed component documentation in `VIBE_COMPONENTS.md`
- Focus on "vibe coding cleanup" services (transforming AI-generated MVPs to production-ready apps)

**File Structure Notes:**
- Single `app/app.vue` file currently (minimal setup)
- No pages/ directory structure yet implemented
- Content and component files from previous Next.js implementation were removed
- TypeScript configuration references Nuxt's generated configs

## Development Workflow

**Branch Strategy:**
- Main development happens on `nuxt` branch
- No main branch reference found in git status

**Code Style:**
- Uses Nuxt's built-in ESLint configuration
- TypeScript enabled by default
- Follows Vue 3 Composition API patterns (implied by Nuxt 4)

**Important Notes:**
- This is a website transformation project, not a greenfield application
- Previous Next.js components and pages were removed - don't reference them
- Focus is on Brazilian technology consultancy specializing in AI-generated code cleanup
- Internationalization (EN/PT-BR) is a key requirement
- The project targets entrepreneurs and startups with AI-generated MVPs

## Special Considerations

- **Content Migration:** Existing content in docs/ folder needs to be integrated into Nuxt Content structure
- **Component Library:** VIBE_COMPONENTS.md documents custom components that need to be recreated in Vue/Nuxt
- **SEO Focus:** Website is service-focused with strong SEO requirements (multiple modules installed)
- **Mobile-First:** Device detection module suggests mobile-first approach is important

When making changes, always consider the bilingual nature (EN/PT-BR) and the specific service focus on transforming AI-generated applications into production-ready software.