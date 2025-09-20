import { computed } from 'vue'
import { useSectionCopy } from '~/composables/useSectionCopy'

type HomepageContent = {
  hero: any
  problem: any
  services: any
  process: any
  technology: any
  advantages: any
  socialProof: any
}

export function useHomepageContent() {
  const copy = useSectionCopy<HomepageContent>('homepage')

  return computed(() => copy.value)
}
