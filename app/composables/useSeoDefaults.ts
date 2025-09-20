import { computed } from 'vue'

interface SeoDefaultsOptions {
  title?: string
  description?: string
}

export function useSeoDefaults(options: SeoDefaultsOptions = {}) {
  const appConfig = useAppConfig()
  const route = useRoute()
  const runtimeConfig = useRuntimeConfig()
  const { locales } = useI18n()
  const switchLocalePath = useSwitchLocalePath()

  const siteName = appConfig.site?.name ?? 'Aesir Tecnologia'
  const description = options.description ?? appConfig.site?.description ?? ''

  const siteUrl = (runtimeConfig.public?.siteUrl as string | undefined)?.replace(/\/$/, '')

  const canonicalUrl = computed(() => {
    if (!siteUrl) {
      return undefined
    }
    return `${siteUrl}${route.path}`
  })

  useSeoMeta({
    title: options.title ?? siteName,
    description,
    ogTitle: options.title ?? siteName,
    ogDescription: description,
    ogSiteName: siteName,
    ogType: 'website',
    twitterCard: 'summary_large_image'
  })

  useHead(() => {
    const links: Array<Record<string, string>> = []

    if (canonicalUrl.value) {
      links.push({ rel: 'canonical', href: canonicalUrl.value })
    }

    if (siteUrl) {
      for (const loc of locales.value) {
        const href = switchLocalePath(loc.code)
        if (href) {
          links.push({ rel: 'alternate', hreflang: loc.code, href: `${siteUrl}${href}` })
        }
      }
    }

    return {
      titleTemplate: (titleChunk?: string) => (titleChunk ? `${titleChunk} · ${siteName}` : siteName),
      link: links
    }
  })
}
