import { computed } from 'vue'

export function useSiteLinks() {
  const appConfig = useAppConfig()

  return computed(() => appConfig.site?.footerLinks ?? [])
}
