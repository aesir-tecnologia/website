<template>
  <div :class="gridClass">
    <UCard
      v-for="feature in features"
      :key="feature.title"
      :ui="cardUi"
      class="flex h-full flex-col gap-4"
    >
      <div class="flex items-center gap-3">
        <UIcon v-if="feature.icon" :name="feature.icon" class="h-6 w-6 text-sky-300" aria-hidden="true" />
        <h3 class="text-xl font-semibold text-slate-50">{{ feature.title }}</h3>
      </div>
      <p v-if="feature.description" class="text-sm text-slate-300">{{ feature.description }}</p>
      <slot name="feature" :feature="feature" />
    </UCard>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'

interface FeatureItem {
  title: string
  description?: string
  icon?: string
}

const props = withDefaults(
  defineProps({
    features: {
      type: Array as PropType<FeatureItem[]>,
      default: () => []
    },
    columns: {
      type: Number,
      default: 3
    }
  }),
  {
    columns: 3
  }
)

const columnClass = computed(() => {
  switch (props.columns) {
    case 2:
      return 'lg:grid-cols-2'
    case 4:
      return 'lg:grid-cols-4'
    default:
      return 'lg:grid-cols-3'
  }
})

const gridClass = computed(() => `grid gap-6 sm:gap-8 md:grid-cols-2 ${columnClass.value}`)

const cardUi = {
  base: 'border border-slate-800/70 bg-slate-900/60 backdrop-blur rounded-3xl',
  body: 'flex h-full flex-col gap-4 p-6 sm:p-8'
}
</script>
