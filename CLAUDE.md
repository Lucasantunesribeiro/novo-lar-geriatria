# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Development server on localhost:3000
npm run build     # Production build
npm run lint      # ESLint check
npm run analyze   # Bundle analysis (ANALYZE=true next build)
```

No test suite configured.

## Architecture

Next.js 16 App Router with TypeScript 5 and Tailwind CSS 4. Path alias `@/*` maps to project root.

### Routing

All routes live under `app/(routes)/` (route group for shared layout). Dynamic routes:
- `/servicos/[slug]` — 8 services defined in `lib/services-data.ts` (generateStaticParams)
- `/blog/[slug]` — 6 blog posts defined in `lib/blog-data.ts` (generateStaticParams)
- `/unidades/[slug]` — 3 units pulled from Sanity CMS with mock fallback in `lib/sanity/mock-data.ts`

### Content Sources

- **Static**: `lib/services-data.ts` (8 services), `lib/blog-data.ts` (6 posts), `lib/site-data.ts` (units contact info, nav links, company contact)
- **Sanity CMS**: `lib/sanity/queries.ts` — only used for unit pages. Falls back to mock data when `NEXT_PUBLIC_SANITY_PROJECT_ID` is not a valid ID. Check `isSanityConfigured` in `lib/sanity/client.ts` before assuming CMS data is live.

### SEO

- Global metadata in `app/layout.tsx`; page-specific via `export const metadata` or `generateMetadata` in each `page.tsx`
- JSON-LD schemas in `components/seo/JsonLd.tsx`: WebSite, Organization, FAQ, Service, AggregateRating, Breadcrumb (defined but NOT yet used on pages)
- `LocalBusinessSchema` in `components/seo/LocalBusinessSchema.tsx` — used on unit pages
- Sitemap: `app/sitemap.ts` — Robots: `app/robots.ts`

### Styling

Tailwind CSS 4 (`@tailwindcss/postcss`). Brand colors as CSS variables in `app/globals.css` (lines 8–29):
- `--primary-blue: #2C3E6B`
- `--primary-gold: #D4A853`

Some older components use inline styles — avoid adding more, always prefer Tailwind.

### Analytics

GTM via `components/analytics/GoogleTagManager.tsx` (loaded in root layout). Custom events in `lib/gtm.ts`: `trackPhoneClick`, `trackWhatsAppClick`, `trackFormSubmit`.

### Forms & Leads

Two contact form implementations:
- `components/forms/ContactForm.tsx` — generic, used across service/unit pages
- `components/contato/ContactForm.tsx` — contact page specific, has inline UNITS array (duplicated from `lib/site-data.ts`)

Both submit to `app/api/contact/route.ts`.

**IMPORTANT**: The API only validates and logs. Email sending and Sanity CMS storage are TODO at lines 47–64. Leads are not currently captured in production.

### Components

- `components/layout/` — Header (mobile dialog + desktop CTAs), Footer variants, wrappers
- `components/home/` — All homepage sections
- `components/ui/` — WhatsAppButton (desktop floating, `hidden lg:flex`), MobileBottomBar (mobile sticky bar, `lg:hidden`)
- `components/seo/` — JSON-LD schema components
- `components/sections/` — **Dead code, not imported anywhere — do not add to**

### Known Issues

- `components/sections/` — 13 unused files, not imported anywhere
- `styled-components`, `swr`, `canvas-confetti`, `react-google-recaptcha-v3` — installed but unused throughout the codebase
- `components/sections/GoogleReviews.tsx` — returns null (disabled per client request)
- `app/api/contact/route.ts:47–64` — email/Sanity TODOs, leads not saved or sent
- Header CTAs (`lg:flex`) and MobileBottomBar (`lg:hidden`) have a gap at tablet (768–1024px) where neither renders
