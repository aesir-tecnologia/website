<template>
  <span :class="badgeClasses">
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

const toneClasses: Record<string, string> = {
  primary: 'bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-200',
  secondary: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-200',
  accent: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-200',
  neutral: 'bg-slate-200 text-slate-700 dark:bg-slate-800/60 dark:text-slate-200',
}

const badgeClasses = computed(() => [
  'icon-badge inline-flex items-center gap-2 rounded-2xl px-3 py-1 text-sm font-semibold tracking-tight',
  toneClasses[props.tone] ?? toneClasses.primary,
])

const label = props.label
const icon = props.icon
</script>
