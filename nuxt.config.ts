// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/devtools',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/device',
    '@nuxtjs/seo'
  ],

  ui: {
    theme: {
      colors: ['primary', 'secondary', 'accent', 'neutral', 'info', 'success', 'warning', 'error']
    }
  },

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://aesir.dev'
  },

  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    locales: [
      { code: 'en', iso: 'en-US', name: 'English' },
      { code: 'pt-br', iso: 'pt-BR', name: 'Português (Brasil)' }
    ],
    detectBrowserLanguage: {
      cookieKey: 'i18n_redirected',
      redirectOn: 'root' // avoids middleware redirects on every route change
    },
    vueI18n: './i18n.config.ts'
  }
})
