<template>
  <span :class="tagClasses" :style="toneStyle">
    <UIcon v-if="leadingIcon" :name="leadingIcon" class="size-3" aria-hidden="true" />
    <slot>{{ label }}</slot>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  label?: string
  leadingIcon?: string
  tone?: 'primary' | 'accent' | 'neutral'
  size?: 'sm' | 'md'
}>(), {
  label: undefined,
  leadingIcon: undefined,
  tone: 'neutral',
  size: 'sm',
})

const sizeMap: Record<string, string> = {
  sm: 'text-xs font-semibold uppercase tracking-[0.3em] px-3 py-1',
  md: 'text-sm font-semibold tracking-wide px-4 py-1.5',
}

const tagClasses = computed(() => [
  'tag inline-flex items-center gap-2 rounded-full border transition-colors duration-200',
  sizeMap[props.size] ?? sizeMap.sm,
])

const leadingIcon = props.leadingIcon
const label = props.label

const { tone } = useUiTokens()

const toneStyle = computed(() => {
  const currentTone = tone(props.tone)

  return {
    backgroundColor: currentTone.background,
    borderColor: currentTone.border,
    color: currentTone.text,
  }
})
</script>
