import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';  // ← التغيير هنا (بدون /serverless)

export default defineConfig({
  site: 'https://example.com', // غيّره لاحقًا

  output: 'server',

  adapter: vercel({
    webAnalytics: { enabled: true },
    maxDuration: 10,
    images: true
    // أضف أي خيارات أخرى هنا بدون فواصل زيادة في النهاية
  }),

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'ar',
        locales: {
          ar: 'ar',
          en: 'en'
        }
      }
    })
  ],

  i18n: {
    defaultLocale: 'ar',
    locales: ['ar', 'en'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: true
    }
  },

  trailingSlash: 'ignore'
});