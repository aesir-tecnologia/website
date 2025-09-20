<template>
  <ContentGrid :columns="columns" :gap="gap">
    <UCard
      v-for="feature in features"
      :key="feature.id ?? feature.title"
      :ui="cardUi"
    >
      <div class="pointer-events-none absolute inset-px rounded-[1.4rem] bg-gradient-to-br from-primary-500/10 via-slate-950/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div class="relative flex h-full flex-col gap-5">
        <div
          v-if="feature.icon"
          class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500/20 via-primary-500/10 to-transparent text-primary-300 shadow-lg shadow-primary-950/40"
        >
          <UIcon :name="feature.icon" class="h-6 w-6" aria-hidden="true" />
        </div>
        <div class="space-y-3">
          <p v-if="feature.meta" class="text-xs font-semibold uppercase tracking-[0.2em] text-primary-300/80">{{ feature.meta }}</p>
          <h3 class="text-2xl font-semibold text-slate-50">{{ feature.title }}</h3>
          <p v-if="feature.description" class="text-base leading-relaxed text-slate-300">{{ feature.description }}</p>
        </div>
        <slot name="footer" :feature="feature">
          <NuxtLink
            v-if="feature.to"
            :to="feature.to"
            :target="feature.external ? '_blank' : undefined"
            class="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary-200 transition duration-200 hover:text-primary-100"
          >
            {{ feature.cta ?? 'Learn more' }}
            <UIcon name="i-lucide-arrow-up-right" class="h-4 w-4" aria-hidden="true" />
          </NuxtLink>
        </slot>
      </div>
    </UCard>
  </ContentGrid>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ContentGrid from './ContentGrid.vue'

type Feature = {
  id?: string | number
  title: string
  description?: string
  meta?: string
  icon?: string
  cta?: string
  to?: string
  external?: boolean
}

type FeatureGridGap = 'tight' | 'default' | 'loose'
type FeatureGridColumns = 1 | 2 | 3 | 4

const props = withDefaults(defineProps<{
  features: Feature[]
  gap?: FeatureGridGap
  columns?: FeatureGridColumns
}>(), {
  gap: 'default',
  columns: 3,
})

const features = computed(() => props.features)
const gap = computed(() => props.gap)
const columns = computed(() => props.columns)

const cardUi = {
  base: 'group relative overflow-hidden rounded-3xl border border-slate-900/70 bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-slate-900/60 p-8 shadow-xl shadow-slate-950/60 transition duration-300 hover:border-primary-500/50 hover:shadow-primary-900/40',
  body: 'flex h-full flex-col gap-5 p-0',
  footer: 'p-0',
  header: 'p-0'
} as const
</script>
