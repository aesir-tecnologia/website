import { computed } from 'vue'
import { useSectionCopy } from '~/composables/useSectionCopy'

type ServicesContent = {
  meta: Record<string, any>
  hero: Record<string, any>
  list: Array<Record<string, any>>
  callouts: Record<string, any>
  detail: Record<string, any>
}

export function useServicesContent() {
  const copy = useSectionCopy<ServicesContent>('services')
  return computed(() => copy.value)
}
