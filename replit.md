# Astro Multilingual Website

## Overview
A bilingual (Arabic/English) website built with Astro, featuring i18n support and Supabase integration. Arabic is the default locale.

## Recent Changes
- 2026-02-15: Initial Replit setup - configured Astro dev server on port 5000 with host 0.0.0.0 and allowedHosts: true for Replit proxy compatibility.

## Project Architecture
- **Framework**: Astro v5.17
- **Language**: TypeScript
- **Integrations**: @astrojs/sitemap, @supabase/supabase-js
- **i18n**: Arabic (default) + English, routing via Astro's built-in i18n
- **Structure**:
  - `src/pages/` - Arabic pages (default locale, no prefix)
  - `src/pages/en/` - English pages
  - `src/components/` - Shared Astro components
  - `src/content/` - Content sections
  - `src/i18n/` - Translation utilities
  - `src/layouts/` - Base layouts
  - `src/lib/supabase.ts` - Supabase client
  - `public/` - Static assets (CSS, favicons)

## Environment Variables
- `PUBLIC_SUPABASE_URL` - Supabase project URL
- `PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key

## Running
- Dev: `npm run dev` (port 5000)
- Build: `npm run build`
- Preview: `npm run preview`
