import { computed } from 'vue'

export function useSiteNavigation() {
  const appConfig = useAppConfig()

  const navigation = computed(() => appConfig.site?.navigation ?? [])
  const primaryCta = computed(() => appConfig.site?.primaryCta)

  return {
    navigation,
    primaryCta
  }
}
