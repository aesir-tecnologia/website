<template>
  <div :class="pillClasses" :style="toneStyle">
    <UIcon v-if="icon" :name="icon" class="size-4" aria-hidden="true" />
    <div class="flex flex-col">
      <span class="text-lg font-semibold leading-tight sm:text-xl">{{ value }}</span>
      <span class="text-xs font-medium uppercase tracking-[0.2em]" :style="labelStyle">{{ label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  value: string | number
  label: string
  icon?: string
  tone?: 'primary' | 'secondary' | 'accent' | 'neutral'
}>(), {
  icon: undefined,
  tone: 'primary',
})

const pillClasses = computed(() => [
  'stat-pill inline-flex items-center gap-3 rounded-2xl border px-4 py-3 shadow-sm transition-colors duration-200',
])

const icon = props.icon
const value = props.value
const label = props.label

const { tone, shadow, textColor } = useUiTokens()

const toneStyle = computed(() => {
  const currentTone = tone(props.tone === 'secondary' ? 'secondary' : props.tone)

  return {
    backgroundColor: currentTone.background,
    borderColor: currentTone.border,
    color: currentTone.text,
    boxShadow: shadow('soft'),
  }
})

const labelStyle = computed(() => ({
  color: textColor('muted'),
}))
</script>
