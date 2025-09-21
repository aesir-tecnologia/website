import { computed } from 'vue'

export interface SiteFooterLink {
  label: string
  to: string
}

export const useSiteFooterLinks = () => {
  const appConfig = useAppConfig()
  const localePath = useLocalePath()

  return computed<SiteFooterLink[]>(() =>
    (appConfig.site?.footer?.links ?? []).map((link) => ({
      label: link.label,
      to: String(localePath(link.to)),
    }))
  )
}
