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
          :style="stepCardStyle"
        >
          <div class="flex h-full flex-col gap-4">
            <div class="flex items-center gap-3">
              <IconBadge tone="primary">
                {{ (index + 1).toString().padStart(2, '0') }}
              </IconBadge>
              <h3 class="text-xl font-semibold" :style="stepTitleStyle">{{ step.title }}</h3>
            </div>
            <BulletList :items="step.items" />
          </div>
        </UCard>
      </ContentGrid>

      <UCard v-if="highlight" :ui="highlightCardUi" :style="highlightCardStyle">
        <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div class="space-y-1">
            <p class="text-sm font-semibold uppercase tracking-[0.3em]" :style="highlightEyebrowStyle">{{ highlight.eyebrow ?? 'Best fit' }}</p>
            <h3 class="text-2xl font-semibold" :style="highlightTitleStyle">{{ highlight.title }}</h3>
          </div>
          <BulletList :items="highlight.items" class="md:max-w-2xl" />
        </div>
      </UCard>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import { computed } from 'vue'
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
  backgroundTone: 'primary',
})

const { surfaceColor, borderColor, shadow, textColor, gradient, tokens } = useUiTokens()

const stepCardStyle = computed(() => ({
  backgroundColor: surfaceColor('elevated'),
  borderColor: borderColor('soft'),
  boxShadow: shadow('soft'),
  color: textColor('primary'),
  '--process-card-hover-border': borderColor('strong'),
  '--process-card-hover-shadow': shadow('strong'),
}))

const stepTitleStyle = computed(() => ({
  color: textColor('primary'),
}))

const highlightCardStyle = computed(() => ({
  backgroundImage: gradient('accent'),
  backgroundColor: surfaceColor('accent'),
  borderColor: borderColor('accent'),
  boxShadow: shadow('strong'),
  color: textColor('inverse'),
}))

const highlightEyebrowStyle = computed(() => ({
  color: tokens.value.text.onAccent,
}))

const highlightTitleStyle = computed(() => ({
  color: textColor('inverse'),
}))

const stepCardUi = {
  base: 'relative overflow-hidden rounded-3xl border p-6 transition duration-300 hover:[border-color:var(--process-card-hover-border)] hover:[box-shadow:var(--process-card-hover-shadow)]',
  body: 'flex h-full flex-col gap-4 p-0'
} as const

const highlightCardUi = {
  base: 'relative overflow-hidden rounded-3xl border p-6 transition-colors duration-300',
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
