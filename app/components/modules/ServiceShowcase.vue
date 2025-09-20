<template>
  <BaseSection :id="id" :variant="variant" padding="default">
    <template v-if="background" #background>
      <BackgroundVariant :tone="backgroundTone" />
    </template>
    <div class="space-y-10">
        <SectionHeader
          :eyebrow="eyebrow"
          :title="title"
          :description="description"
          :icon="icon"
        >
          <template v-if="cta" #actions>
            <AppButton :to="cta.to" size="lg" :color="cta.color ?? 'primary'">
              {{ cta.label }}
            </AppButton>
          </template>
        </SectionHeader>
      <ContentGrid :columns="columns" :gap="gap">
        <UCard
          v-for="service in services"
          :key="service.id ?? service.title"
          :ui="cardUi"
        >
          <div class="flex h-full flex-col gap-5">
            <Tag v-if="service.focus" tone="primary">{{ service.focus }}</Tag>

            <div v-if="service.image" class="overflow-hidden rounded-2xl">
              <LazyImage
                :src="service.image.src"
                :alt="service.image.alt"
                :preset="service.image.preset ?? 'feature'"
                :ratio="service.image.ratio ?? '16/9'"
              />
            </div>

            <div class="space-y-2">
              <h3 class="text-2xl font-semibold text-slate-900 dark:text-slate-50">{{ service.title }}</h3>
              <p v-if="service.description" class="text-base leading-relaxed text-slate-600 dark:text-slate-300">{{ service.description }}</p>
            </div>
            <div class="mt-auto flex flex-wrap items-center gap-3">
              <AppButton :to="service.to" size="md" variant="soft">
                {{ service.cta }}
              </AppButton>
              <span v-if="service.meta" class="text-sm text-slate-500 dark:text-slate-400">{{ service.meta }}</span>
            </div>
          </div>
        </UCard>
      </ContentGrid>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import BackgroundVariant from '~/components/ui/BackgroundVariant.vue'
import AppButton from '~/components/ui/AppButton.vue'
import Tag from '~/components/ui/Tag.vue'
import LazyImage from '~/components/ui/LazyImage.vue'
import BaseSection from '~/components/shared/BaseSection.vue'
import SectionHeader from '~/components/shared/SectionHeader.vue'
import ContentGrid from '~/components/shared/ContentGrid.vue'

type SectionVariant = InstanceType<typeof BaseSection>['$props']['variant']

type ServiceItem = {
  id?: string | number
  title: string
  description?: string
  to: string
  cta: string
  focus?: string
  meta?: string
  image?: {
    src: string
    alt: string
    preset?: InstanceType<typeof LazyImage>['$props']['preset']
    ratio?: number | string
  }
}

type ShowcaseCta = {
  label: string
  to: string
  color?: string
}

type GridColumns = InstanceType<typeof ContentGrid>['$props']['columns']

type GridGap = InstanceType<typeof ContentGrid>['$props']['gap']

const props = withDefaults(defineProps<{
  id?: string
  eyebrow?: string
  title: string
  description?: string
  icon?: string
  services: ServiceItem[]
  cta?: ShowcaseCta
  columns?: GridColumns
  gap?: GridGap
  variant?: SectionVariant
  background?: boolean
  backgroundTone?: InstanceType<typeof BackgroundVariant>['$props']['tone']
}>(), {
  id: undefined,
  eyebrow: undefined,
  description: undefined,
  icon: undefined,
  cta: undefined,
  columns: 3,
  gap: 'default',
  variant: 'gradient',
  background: true,
  backgroundTone: 'sky',
})

const cardUi = {
  base: 'relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-xl shadow-slate-200/50 transition duration-300 hover:border-primary-400/40 hover:shadow-primary-200/40 dark:border-slate-900/60 dark:bg-slate-950/50 dark:shadow-slate-950/50 dark:hover:border-primary-500/40 dark:hover:shadow-primary-900/30',
  body: 'flex h-full flex-col gap-5 p-0'
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
const services = props.services
const cta = props.cta
const backgroundTone = props.backgroundTone
</script>
