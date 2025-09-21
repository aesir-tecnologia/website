import { computed } from 'vue'

export type NavigationMatch = 'exact' | 'startsWith'

export interface SiteNavigationLink {
  label: string
  to: string
  match: NavigationMatch
}

export interface SiteBrand {
  name: string
  to: string
  tagline?: string
}

export interface SiteNavigationCta {
  label: string
  to: string
}

export const useSiteNavigation = () => {
  const appConfig = useAppConfig()
  const localePath = useLocalePath()

  const brand = computed<SiteBrand>(() => ({
    name: appConfig.site?.brand?.name ?? 'Aesir Tecnologia',
    to: String(localePath(appConfig.site?.brand?.to ?? '/')),
    tagline: appConfig.site?.brand?.tagline,
  }))

  const links = computed<SiteNavigationLink[]>(() =>
    (appConfig.site?.navigation?.links ?? []).map((link) => ({
      label: link.label,
      to: String(localePath(link.to)),
      match: link.match ?? 'startsWith',
    }))
  )

  const cta = computed<SiteNavigationCta | null>(() => {
    const callToAction = appConfig.site?.navigation?.cta
    if (!callToAction) {
      return null
    }

    return {
      label: callToAction.label,
      to: String(localePath(callToAction.to)),
    }
  })

  return {
    brand,
    links,
    cta,
  }
}
