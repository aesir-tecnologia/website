# Aesir Website

Nuxt 4 marketing site built on Nuxt UI components.

Key resources:

- UI theme tokens live in `docs/DESIGN-TOKENS.md` and are applied through `app/app.config.ts`.
- Layout shell components (`AppShell`, `AppHeader`, `AppFooter`, `AppMain`) live under `app/components/layout/`.
- Lucide icons are bundled locally via `@iconify-json/lucide`, so `UIcon` calls work offline and during prerendering.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

Optionally set your canonical URL (used by sitemap/robots):

```bash
export NUXT_PUBLIC_SITE_URL="https://example.com"
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
