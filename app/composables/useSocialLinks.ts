import { computed } from 'vue'

export function useSocialLinks() {
  const appConfig = useAppConfig()
  return computed(() => appConfig.site?.socialLinks ?? [])
}
