import { defineI18nConfig } from '@nuxtjs/i18n'
import en from './locales/en.json'
import ptBR from './locales/pt-br.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    'pt-br': ptBR
  }
}))
