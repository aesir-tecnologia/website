import { computed, watchEffect } from 'vue'

export function useSectionCopy<T = Record<string, any>>(key: string) {
  const { tm } = useI18n<{ [key: string]: T }>()

  const section = computed<T>(() => tm(key) as T)

  if (import.meta.dev) {
    watchEffect(() => {
      if (!section.value) {
        console.warn(`Missing translation section for key: ${key}`)
      }
    })
  }

  return section
}
