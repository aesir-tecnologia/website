<template>
  <div :class="listClasses" role="list">
    <div
      v-for="metric in metrics"
      :key="metric.id ?? metric.label"
      class="group relative overflow-hidden rounded-3xl border p-6 transition duration-300 hover:[border-color:var(--metric-hover-border)] hover:[box-shadow:var(--metric-hover-shadow)]"
      :style="metricStyle"
      role="listitem"
    >
      <div
        class="pointer-events-none absolute inset-px rounded-[1.4rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        :style="metricHighlightStyle"
      />
      <div class="relative space-y-4">
        <slot name="metric" :metric="metric">
          <StatPill
            :value="metric.value"
            :label="metric.label"
            :icon="metric.icon"
            :tone="metric.tone ?? 'primary'"
          />
        </slot>
        <p v-if="metric.description" class="relative text-sm leading-relaxed" :style="descriptionStyle">
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

const { surfaceColor, borderColor, shadow, gradient, textColor, tokens } = useUiTokens()

const metricStyle = computed(() => ({
  backgroundColor: surfaceColor('elevated'),
  color: textColor('primary'),
  borderColor: borderColor('soft'),
  boxShadow: shadow('soft'),
  '--metric-hover-border': borderColor('strong'),
  '--metric-hover-shadow': shadow('strong'),
  backdropFilter: 'blur(8px)',
}))

const metricHighlightStyle = computed(() => ({
  backgroundImage: gradient('spotlight'),
  backgroundColor: tokens.value.accents.highlight,
}))

const descriptionStyle = computed(() => ({
  color: textColor('muted'),
}))
</script>
