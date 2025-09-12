# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js website for Aesir Tecnologia - a Brazilian technology company specializing in web, mobile, and game development services plus staff augmentation. The site features a modern design with sophisticated animations using Framer Motion, MDX-powered blog and case studies, and comprehensive internationalization support for English and Brazilian Portuguese.

## Essential Development Commands

**Development workflow:**
```bash
npm install          # Install dependencies
npm run dev          # Start development server (localhost:3000)
npm run build        # Build for production with static generation
npm start            # Start production server
npm run lint         # Run ESLint checks
```

**No test commands are configured** - verify functionality manually in the browser.

## Architecture & Key Technologies

**Core Stack:**
- Next.js 15 with App Router and internationalization
- React 19
- Tailwind CSS v4 (uses new @theme syntax in CSS)
- Framer Motion for animations
- MDX for blog posts and case studies
- next-intl for internationalization

**Internationalization Architecture:**
The site supports English (en) and Brazilian Portuguese (pt) using next-intl:
- **Locale Routing**: Pages are structured in `src/app/[locale]/` with static generation for both languages
- **Middleware**: `src/middleware.js` handles automatic locale detection and URL routing
- **Configuration**: `src/i18n/routing.js` defines supported locales with 'en' as default
- **Translations**: `messages/en.json` and `messages/pt.json` contain all UI text
- **Navigation**: Use `import { Link } from '@/i18n/navigation'` for locale-aware routing

**Content Structure:**
- Blog posts: `src/app/[locale]/blog/[slug]/page.mdx` with automatic layout wrapping
- Case studies: `src/app/[locale]/work/[slug]/page.mdx` with automatic layout wrapping  
- MDX automatically uses layouts via `remarkMDXLayout` plugin in `next.config.mjs`
- Translation keys are organized hierarchically (e.g., `HomePage.title`, `Navigation.about`)

**Component Architecture:**
- Shared components in `src/components/`
- Main layout wrapper: `RootLayout.jsx` (sophisticated animated navigation, client component)
- Import pattern: `@/components/ComponentName` and `@/styles/tailwind.css`
- All pages must be async functions with `params` and include `setRequestLocale(locale)` for static rendering

## Styling System

**Tailwind CSS v4 Configuration:**
- Custom theme variables in `src/styles/tailwind.css` using `@theme` syntax
- Custom font: Mona Sans for both `font-sans` and `font-display` with width variation
- Base styles imported from `base.css` and `typography.css`

**Component Patterns:**
- Uses `clsx` for conditional classes
- `invert` prop pattern for dark/light theme variants
- Components typically accept `className` prop for customization

## Code Conventions

**Internationalization Requirements:**
- All new pages must include: `import { setRequestLocale } from 'next-intl/server'`
- Page functions must be async: `export default async function PageName({ params })`
- Add locale setup at function start: 
  ```javascript
  const { locale } = await params
  setRequestLocale(locale)
  ```
- Use `useTranslations('namespace')` in client components or `getTranslations()` in server components
- Use locale-aware Link: `import { Link } from '@/i18n/navigation'`

**File Structure:**
- `.jsx` extensions throughout (no TypeScript)
- Components use PascalCase naming
- Pages follow Next.js App Router conventions in `[locale]` directory

**Styling Patterns:**
- Extensive use of Tailwind utility classes
- Consistent `invert` prop for theme variants
- Motion components from Framer Motion for animations

**Import Organization:**
- React imports first
- Next.js imports second  
- External libraries third
- Internal components with `@/` prefix last

**Component Patterns:**
- Destructured props with defaults: `{ invert = false, className, ...props }`
- Conditional rendering based on props (e.g., Button component renders Link or button)
- Consistent use of `clsx` for dynamic className construction

## Content Management

**MDX Processing:**
- Blog posts automatically get `article` metadata via wrapper
- Case studies automatically get `caseStudy` metadata via wrapper
- Images processed via `recmaImportImages` plugin
- Syntax highlighting via Shiki with CSS variables theme
- Custom Typography wrapper for content styling

**Adding Translations:**
- Add new keys to both `messages/en.json` and `messages/pt.json`
- Use hierarchical structure: `"Navigation": { "about": "About Us" }`
- Server components: `const t = await getTranslations('namespace')`
- Client components: `const t = useTranslations('namespace')`
- Access nested keys: `t('Navigation.about')` or `t('about')` when namespace is 'Navigation'

## Code Quality Tools

- **ESLint:** Uses `next/core-web-vitals` configuration
- **Prettier:** Uses package.json configuration - single quotes, no semicolons, Tailwind plugin enabled
- **Tailwind Plugin:** Configured with custom stylesheet path

## Development Notes

- Uses Tailwind CSS v4's new `@theme` configuration syntax (not traditional config file)
- Complex navigation with Framer Motion layout animations
- No TypeScript - pure JavaScript/JSX codebase  
- Mobile-responsive design with extensive use of responsive Tailwind classes
- All pages are statically generated for both locales (SSG) - 26 pages × 2 languages = 52 total pages
- Middleware handles automatic locale detection but requires server deployment (not compatible with static export)