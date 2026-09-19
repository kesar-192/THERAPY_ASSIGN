# Dr. Maya Reynolds, PsyD

Standalone Next.js site for a fictional trauma-informed therapy practice in
Santa Monica, California.

## Local development

```bash
pnpm install
pnpm dev
```

Useful checks:

```bash
pnpm build
pnpm lint
pnpm exec tsc --noEmit
```

## Vercel deployment

Import the GitHub repository with these settings:

- Framework preset: `Next.js`
- Root directory: `.`
- Install command: `pnpm install`
- Build command: `pnpm build`
- Output directory: leave blank (Next.js default)

Set this production environment variable in Vercel:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

The site is currently a static marketing experience. Its contact form is a
front-end demo and does not send email. No database or API environment
variables are required for this deployment.

## Project structure

- `src/app/` — Next.js App Router entry points
- `src/components/sections/` — homepage sections
- `src/content/site-content.ts` — page copy and practice content
- `public/images/` — supplied portrait and office imagery
