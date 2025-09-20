<template>
  <span :class="tagClasses">
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

const toneClasses: Record<string, string> = {
  primary: 'bg-primary-500/10 text-primary-600 ring-1 ring-primary-500/30 dark:bg-primary-500/15 dark:text-primary-200',
  accent: 'bg-cyan-500/10 text-cyan-600 ring-1 ring-cyan-500/30 dark:bg-cyan-500/15 dark:text-cyan-200',
  neutral: 'bg-slate-200/80 text-slate-700 ring-1 ring-slate-200 dark:bg-slate-800/60 dark:text-slate-200 dark:ring-slate-700',
}

const sizeMap: Record<string, string> = {
  sm: 'text-xs font-semibold uppercase tracking-[0.3em] px-3 py-1',
  md: 'text-sm font-semibold tracking-wide px-4 py-1.5',
}

const tagClasses = computed(() => [
  'tag inline-flex items-center gap-2 rounded-full transition-colors duration-200',
  toneClasses[props.tone] ?? toneClasses.neutral,
  sizeMap[props.size] ?? sizeMap.sm,
])

const leadingIcon = props.leadingIcon
const label = props.label
</script>
