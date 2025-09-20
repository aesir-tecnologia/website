<template>
  <ContentGrid :columns="columns" :gap="gap">
    <UCard
      v-for="feature in features"
      :key="feature.id ?? feature.title"
      :ui="cardUi"
    >
      <div class="pointer-events-none absolute inset-px rounded-[1.4rem] bg-gradient-to-br from-primary-200/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-primary-500/10" />
      <div class="relative flex h-full flex-col gap-5">
        <div
          v-if="feature.icon"
          class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-200/40 via-primary-400/20 to-transparent text-primary-600 shadow-lg shadow-primary-200/50 dark:from-primary-500/20 dark:via-primary-500/10 dark:text-primary-300 dark:shadow-primary-900/40"
        >
          <UIcon :name="feature.icon" class="h-6 w-6" aria-hidden="true" />
        </div>
        <div class="space-y-3">
          <Tag v-if="feature.meta" tone="primary">{{ feature.meta }}</Tag>
          <h3 class="text-2xl font-semibold text-slate-900 dark:text-slate-50">{{ feature.title }}</h3>
          <p v-if="feature.description" class="text-base leading-relaxed text-slate-600 dark:text-slate-300">{{ feature.description }}</p>
        </div>
        <slot name="footer" :feature="feature">
          <AppLinkButton
            v-if="feature.to"
            :to="feature.to"
            :external="feature.external"
            size="sm"
            class="mt-auto"
          >
            {{ feature.cta ?? 'Learn more' }}
          </AppLinkButton>
        </slot>
      </div>
    </UCard>
  </ContentGrid>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import AppLinkButton from '~/components/ui/AppLinkButton.vue'
import Tag from '~/components/ui/Tag.vue'
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
  base: 'group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-xl shadow-slate-200/60 transition duration-300 hover:border-primary-400/50 hover:shadow-primary-200/50 dark:border-slate-900/70 dark:bg-slate-950/50 dark:shadow-slate-950/60 dark:hover:border-primary-500/50 dark:hover:shadow-primary-900/40',
  body: 'flex h-full flex-col gap-5 p-0',
  footer: 'p-0',
  header: 'p-0'
} as const
</script>
