<template>
  <BaseSection :id="id" :variant="variant" padding="default">
    <template v-if="background" #background>
      <BackgroundVariant variant="process" :tone="backgroundTone" />
    </template>
    <div class="space-y-12">
      <SectionHeader
        :eyebrow="eyebrow"
        :title="title"
        :description="description"
        :icon="icon"
      />
      <ContentGrid :columns="columns" :gap="gap">
        <UCard
          v-for="(step, index) in steps"
          :key="step.id ?? step.title ?? index"
          :ui="stepCardUi"
        >
          <div class="flex h-full flex-col gap-4">
            <div class="flex items-center gap-3">
              <IconBadge tone="primary">
                {{ (index + 1).toString().padStart(2, '0') }}
              </IconBadge>
              <h3 class="text-xl font-semibold text-slate-900 dark:text-slate-50">{{ step.title }}</h3>
            </div>
            <BulletList :items="step.items" />
          </div>
        </UCard>
      </ContentGrid>

      <UCard v-if="highlight" :ui="highlightCardUi">
        <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div class="space-y-1">
            <p class="text-sm font-semibold uppercase tracking-[0.3em] text-primary-200/80">{{ highlight.eyebrow ?? 'Best fit' }}</p>
            <h3 class="text-2xl font-semibold text-slate-50">{{ highlight.title }}</h3>
          </div>
          <BulletList :items="highlight.items" class="md:max-w-2xl" />
        </div>
      </UCard>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import BackgroundVariant from '~/components/ui/BackgroundVariant.vue'
import IconBadge from '~/components/ui/IconBadge.vue'
import BaseSection from '~/components/shared/BaseSection.vue'
import SectionHeader from '~/components/shared/SectionHeader.vue'
import ContentGrid from '~/components/shared/ContentGrid.vue'
import BulletList from '~/components/shared/BulletList.vue'

type SectionVariant = InstanceType<typeof BaseSection>['$props']['variant']

type BulletItems = InstanceType<typeof BulletList>['$props']['items']

type ProcessStep = {
  id?: string | number
  title: string
  items: BulletItems
}

type Highlight = {
  title: string
  items: BulletItems
  eyebrow?: string
}

type GridColumns = InstanceType<typeof ContentGrid>['$props']['columns']

type GridGap = InstanceType<typeof ContentGrid>['$props']['gap']

const props = withDefaults(defineProps<{
  id?: string
  eyebrow?: string
  title: string
  description?: string
  icon?: string
  steps: ProcessStep[]
  highlight?: Highlight
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
  highlight: undefined,
  columns: 4,
  gap: 'default',
  variant: 'default',
  background: true,
  backgroundTone: 'sky',
})

const stepCardUi = {
  base: 'relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-lg shadow-slate-200/50 transition duration-300 hover:border-primary-400/40 hover:shadow-primary-200/40 dark:border-slate-900/60 dark:bg-slate-950/40 dark:shadow-slate-950/50 dark:hover:border-primary-500/40 dark:hover:shadow-primary-900/30',
  body: 'flex h-full flex-col gap-4 p-0'
} as const

const highlightCardUi = {
  base: 'relative overflow-hidden rounded-3xl border border-primary-400/40 bg-gradient-to-r from-primary-200/40 via-white/70 to-primary-50/40 p-6 shadow-xl shadow-primary-200/40 dark:border-primary-500/30 dark:from-primary-500/20 dark:via-slate-950/40 dark:to-slate-900/30 dark:shadow-primary-900/40',
  body: 'flex flex-col gap-6 p-0'
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
const steps = props.steps
const highlight = props.highlight
const backgroundTone = props.backgroundTone
</script>
