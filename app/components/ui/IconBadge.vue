<template>
  <span :class="badgeClasses" :style="toneStyle">
    <UIcon v-if="icon" :name="icon" class="size-4" aria-hidden="true" />
    <slot>{{ label }}</slot>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  label?: string
  icon?: string
  tone?: 'primary' | 'secondary' | 'accent' | 'neutral'
}>(), {
  label: undefined,
  icon: undefined,
  tone: 'primary',
})

const badgeClasses = computed(() => [
  'icon-badge inline-flex items-center gap-2 rounded-2xl border px-3 py-1 text-sm font-semibold tracking-tight transition-colors duration-200',
])

const label = props.label
const icon = props.icon

const { tone } = useUiTokens()

const toneStyle = computed(() => {
  const currentTone = tone(props.tone === 'secondary' ? 'secondary' : props.tone)

  return {
    backgroundColor: currentTone.background,
    borderColor: currentTone.border,
    color: currentTone.text,
  }
})
</script>
