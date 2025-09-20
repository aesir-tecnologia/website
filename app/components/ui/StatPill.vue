<template>
  <div :class="pillClasses">
    <UIcon v-if="icon" :name="icon" class="size-4" aria-hidden="true" />
    <div class="flex flex-col">
      <span class="text-lg font-semibold leading-tight sm:text-xl">{{ value }}</span>
      <span class="text-xs font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{{ label }}</span>
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

const toneClasses: Record<string, string> = {
  primary: 'bg-primary-500/10 text-primary-700 dark:bg-primary-500/20 dark:text-primary-100',
  secondary: 'bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-100',
  accent: 'bg-cyan-500/10 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-100',
  neutral: 'bg-slate-200/70 text-slate-700 dark:bg-slate-800/60 dark:text-slate-100',
}

const pillClasses = computed(() => [
  'stat-pill inline-flex items-center gap-3 rounded-2xl px-4 py-3 shadow-sm shadow-slate-200/40 dark:shadow-slate-950/40',
  toneClasses[props.tone] ?? toneClasses.primary,
])

const icon = props.icon
const value = props.value
const label = props.label
</script>
