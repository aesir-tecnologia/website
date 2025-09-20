<template>
  <div :class="listClasses" role="list">
    <div
      v-for="metric in metrics"
      :key="metric.id ?? metric.label"
      class="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-lg shadow-slate-200/50 transition duration-300 hover:border-primary-400/40 hover:shadow-primary-200/50 dark:border-slate-900/70 dark:bg-slate-950/40 dark:shadow-slate-950/50 dark:hover:border-primary-500/40 dark:hover:shadow-primary-900/40"
      role="listitem"
    >
      <div class="pointer-events-none absolute inset-px rounded-[1.4rem] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div class="relative space-y-4">
        <slot name="metric" :metric="metric">
          <StatPill
            :value="metric.value"
            :label="metric.label"
            :icon="metric.icon"
            :tone="metric.tone ?? 'primary'"
          />
        </slot>
        <p v-if="metric.description" class="relative text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          <slot name="description" :metric="metric">{{ metric.description }}</slot>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import StatPill from '~/components/ui/StatPill.vue'

type Metric = {
  id?: string | number
  label: string
  value: string
  description?: string
  icon?: string
  tone?: InstanceType<typeof StatPill>['$props']['tone']
}

type MetricColumns = 1 | 2 | 3 | 4

type MetricGap = 'tight' | 'default' | 'loose'

const props = withDefaults(defineProps<{
  metrics: Metric[]
  columns?: MetricColumns
  gap?: MetricGap
}>(), {
  columns: 3,
  gap: 'default',
})

const gapMap: Record<MetricGap, string> = {
  tight: 'gap-4 sm:gap-6',
  default: 'gap-6 sm:gap-8',
  loose: 'gap-8 sm:gap-10',
}

const columnMap: Record<MetricColumns, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-4',
}

const listClasses = computed(() => [
  'grid',
  gapMap[props.gap],
  columnMap[props.columns],
])
</script>
