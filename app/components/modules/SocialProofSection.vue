<template>
  <BaseSection :id="id" :variant="variant" padding="default">
    <template v-if="background" #background>
      <div class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.12),_transparent_75%)]" />
    </template>
    <div class="space-y-12">
      <SectionHeader
        :eyebrow="eyebrow"
        :title="title"
        :description="description"
        :icon="icon"
        align="center"
      />
      <FeatureGrid :features="features" :columns="columns" :gap="gap">
        <template #footer="{ feature }">
          <NuxtLink
            v-if="feature.to"
            :to="feature.to"
            class="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition duration-200 hover:text-primary-500 dark:text-primary-200 dark:hover:text-primary-100"
          >
            {{ feature.cta ?? 'Learn more' }}
            <UIcon name="i-lucide-arrow-up-right" class="h-4 w-4" aria-hidden="true" />
          </NuxtLink>
        </template>
      </FeatureGrid>
      <UCard v-if="testimonial" :ui="testimonialUi">
        <div class="space-y-4 text-center">
          <UIcon name="i-lucide-quote" class="mx-auto h-10 w-10 text-primary-500 dark:text-primary-300" aria-hidden="true" />
          <blockquote class="text-2xl font-medium leading-relaxed text-slate-900 dark:text-slate-100">
            {{ testimonial.quote }}
          </blockquote>
          <div class="space-y-1 text-sm text-slate-600 dark:text-slate-300">
            <p class="font-semibold text-slate-900 dark:text-slate-100">{{ testimonial.author }}</p>
            <p v-if="testimonial.role">{{ testimonial.role }}</p>
          </div>
        </div>
      </UCard>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseSection from '~/components/shared/BaseSection.vue'
import SectionHeader from '~/components/shared/SectionHeader.vue'
import FeatureGrid from '~/components/shared/FeatureGrid.vue'

type SectionVariant = InstanceType<typeof BaseSection>['$props']['variant']

type SocialFeature = {
  id?: string | number
  title: string
  description?: string
  icon?: string
  meta?: string
  cta?: string
  to?: string
}

type Testimonial = {
  quote: string
  author: string
  role?: string
}

type FeatureGridColumns = InstanceType<typeof FeatureGrid>['$props']['columns']

type FeatureGridGap = InstanceType<typeof FeatureGrid>['$props']['gap']

const props = withDefaults(defineProps<{
  id?: string
  eyebrow?: string
  title: string
  description?: string
  icon?: string
  features: SocialFeature[]
  testimonial?: Testimonial
  columns?: FeatureGridColumns
  gap?: FeatureGridGap
  variant?: SectionVariant
  background?: boolean
}>(), {
  id: undefined,
  eyebrow: undefined,
  description: undefined,
  icon: undefined,
  testimonial: undefined,
  columns: 4,
  gap: 'default',
  variant: 'default',
  background: true,
})

const features = computed(() => props.features)

const testimonialUi = {
  base: 'relative overflow-hidden rounded-3xl border border-primary-400/40 bg-gradient-to-b from-primary-100/50 via-white/80 to-white/70 p-10 shadow-xl shadow-primary-200/40 dark:border-primary-500/40 dark:from-primary-500/20 dark:via-slate-950/60 dark:to-slate-900/50 dark:shadow-primary-900/40',
  body: 'space-y-4 p-0'
} as const

const columns = props.columns
const gap = props.gap
const variant = props.variant
const background = props.background
const id = props.id
const eyebrow = props.eyebrow
const title = props.title
const description = props.description
const icon = props.icon
const testimonial = props.testimonial
</script>
