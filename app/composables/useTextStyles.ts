import { computed } from 'vue'

export const useTextStyles = () => {
  const { textColor } = useUiTokens()

  const primary = computed(() => ({
    color: textColor('primary'),
  }))

  const muted = computed(() => ({
    color: textColor('muted'),
  }))

  const subtle = computed(() => ({
    color: textColor('subtle'),
  }))

  const inverse = computed(() => ({
    color: textColor('inverse'),
  }))

  const accent = computed(() => ({
    color: textColor('accent'),
  }))

  return {
    primary,
    muted,
    subtle,
    inverse,
    accent,
  }
}
