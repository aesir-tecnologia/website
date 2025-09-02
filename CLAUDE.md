# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js website for "Studio" (based on Tailwind Plus template) - an award-winning developer studio. The site features a modern design with sophisticated animations using Framer Motion, MDX-powered blog and case studies, and custom Tailwind CSS configuration.

## Essential Development Commands

**Development workflow:**
```bash
npm install          # Install dependencies
npm run dev          # Start development server (localhost:3000)
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint checks
```

**No test commands are configured** - verify functionality manually in the browser.

## Architecture & Key Technologies

**Core Stack:**
- Next.js 15 with App Router
- React 19
- Tailwind CSS v4 (uses new @theme syntax in CSS)
- Framer Motion for animations
- MDX for blog posts and case studies

**Content Structure:**
- Blog posts: `src/app/blog/[slug]/page.mdx` with wrapper layout
- Case studies: `src/app/work/[slug]/page.mdx` with wrapper layout  
- MDX automatically uses layouts via `remarkMDXLayout` plugin in `next.config.mjs`

**Component Architecture:**
- Shared components in `src/components/`
- Main layout wrapper: `RootLayout.jsx` (sophisticated animated navigation)
- Import pattern: `@/components/ComponentName` and `@/styles/tailwind.css`

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

**File Structure:**
- `.jsx` extensions throughout (no TypeScript)
- Components use PascalCase naming
- Pages follow Next.js App Router conventions

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

## Code Quality Tools

- **ESLint:** Uses `next/core-web-vitals` configuration
- **Prettier:** Custom config with single quotes, no semicolons, Tailwind plugin enabled
- **Tailwind Plugin:** Configured with custom stylesheet path

## Development Notes

- Uses Tailwind CSS v4's new `@theme` configuration syntax
- Complex navigation with Framer Motion layout animations
- No TypeScript - pure JavaScript/JSX codebase
- Mobile-responsive design with extensive use of responsive Tailwind classes