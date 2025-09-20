<template>
  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <div v-for="metric in metrics" :key="metric.label" class="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6">
      <p class="text-xs font-semibold uppercase tracking-wide text-slate-400">{{ metric.label }}</p>
      <p class="mt-2 text-3xl font-semibold text-slate-50">{{ metric.value }}</p>
      <p v-if="metric.description" class="mt-2 text-sm text-slate-400">{{ metric.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'

interface MetricItem {
  label: string
  value: string
  description?: string
}

defineProps({
  metrics: {
    type: Array as PropType<MetricItem[]>,
    default: () => []
  }
})
</script>
