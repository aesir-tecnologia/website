<template>
  <BaseSection :id="id" :variant="sectionVariant" padding="relaxed" width="wide">
    <template v-if="showBackground" #background>
      <BackgroundVariant
        :variant="backgroundVariant"
        :tone="backgroundTone"
        :align="backgroundAlign"
      />
    </template>
    <div class="grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
      <div class="space-y-8">
        <SectionHeader
          :eyebrow="eyebrow"
          :title="title"
          :description="description"
          :icon="icon"
        >
          <template #actions>
            <div class="flex flex-wrap gap-3">
              <AppButton
                v-if="primaryCta"
                :to="primaryCta.to"
                :color="primaryCta.color ?? 'primary'"
                :variant="primaryCta.variant ?? 'solid'"
                size="lg"
              >
                {{ primaryCta.label }}
              </AppButton>
              <AppButton
                v-if="secondaryCta"
                :to="secondaryCta.to"
                :variant="secondaryCta.variant ?? 'ghost'"
                :color="secondaryCta.color ?? 'primary'"
                size="lg"
              >
                {{ secondaryCta.label }}
              </AppButton>
            </div>
          </template>
        </SectionHeader>

        <BulletList v-if="hasPoints" :items="points" />
      </div>

      <UCard :ui="cardUi" :style="cardStyle">
        <div class="space-y-6">
          <header class="space-y-3">
            <Tag v-if="highlightEyebrow" tone="accent" size="md">{{ highlightEyebrow }}</Tag>
            <h2 class="text-2xl font-semibold" :style="highlightTitleStyle">{{ highlightTitle }}</h2>
          </header>
          <ul class="space-y-5">
            <li
              v-for="item in highlights"
              :key="item.id ?? item.title"
              class="flex flex-col gap-2 rounded-2xl border p-4 transition-colors"
              :style="highlightItemStyle"
            >
              <h3 class="text-lg font-semibold" :style="highlightItemTitleStyle">{{ item.title }}</h3>
              <p class="text-base leading-relaxed" :style="highlightItemDescriptionStyle">{{ item.description }}</p>
            </li>
          </ul>
        </div>
      </UCard>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BackgroundVariant from '~/components/ui/BackgroundVariant.vue'
import AppButton from '~/components/ui/AppButton.vue'
import Tag from '~/components/ui/Tag.vue'
import BaseSection from '~/components/shared/BaseSection.vue'
import SectionHeader from '~/components/shared/SectionHeader.vue'
import BulletList from '~/components/shared/BulletList.vue'

type HeroCta = {
  label: string
  to: string
  color?: string
  variant?: 'solid' | 'soft' | 'outline' | 'ghost' | 'link'
}

type HeroHighlight = {
  id?: string | number
  title: string
  description: string
}

type BulletItem = InstanceType<typeof BulletList>['$props']['items'][number]

type SectionVariant = InstanceType<typeof BaseSection>['$props']['variant']

type BackgroundVariantName = InstanceType<typeof BackgroundVariant>['$props']['variant']
type BackgroundTone = InstanceType<typeof BackgroundVariant>['$props']['tone']
type BackgroundAlign = InstanceType<typeof BackgroundVariant>['$props']['align']

const props = withDefaults(defineProps<{
  id?: string
  eyebrow?: string
  title: string
  description: string
  icon?: string
  primaryCta: HeroCta
  secondaryCta?: HeroCta
  points?: BulletItem[]
  highlights: HeroHighlight[]
  highlightTitle: string
  highlightEyebrow?: string
  variant?: SectionVariant
  background?: boolean
  backgroundVariant?: BackgroundVariantName
  backgroundTone?: BackgroundTone
  backgroundAlign?: BackgroundAlign
}>(), {
  id: undefined,
  eyebrow: undefined,
  icon: undefined,
  secondaryCta: undefined,
  points: () => [],
  highlightEyebrow: 'Why it works',
  variant: 'gradient',
  background: true,
  backgroundVariant: 'hero',
  backgroundTone: 'primary',
  backgroundAlign: 'top',
})

const hasPoints = computed(() => (props.points?.length ?? 0) > 0)

const { surfaceColor, borderColor, shadow, textColor } = useUiTokens()

const cardStyle = computed(() => ({
  backgroundColor: surfaceColor('elevated'),
  borderColor: borderColor('soft'),
  boxShadow: shadow('soft'),
  color: textColor('primary'),
  '--hero-card-hover-border': borderColor('strong'),
  '--hero-card-hover-shadow': shadow('strong'),
}))

const highlightTitleStyle = computed(() => ({
  color: textColor('primary'),
}))

const highlightItemStyle = computed(() => ({
  backgroundColor: surfaceColor('muted'),
  borderColor: borderColor('soft'),
  color: textColor('primary'),
  boxShadow: shadow('soft'),
}))

const highlightItemTitleStyle = computed(() => ({
  color: textColor('primary'),
}))

const highlightItemDescriptionStyle = computed(() => ({
  color: textColor('muted'),
}))

const cardUi = {
  base: 'relative overflow-hidden rounded-3xl border p-8 transition duration-300 hover:[border-color:var(--hero-card-hover-border)] hover:[box-shadow:var(--hero-card-hover-shadow)]',
  body: 'space-y-6 p-0'
} as const

const sectionVariant = computed(() => props.variant)
const showBackground = computed(() => props.background)
const backgroundVariant = computed(() => props.backgroundVariant)
const backgroundTone = computed(() => props.backgroundTone)
const backgroundAlign = computed(() => props.backgroundAlign)
</script>
