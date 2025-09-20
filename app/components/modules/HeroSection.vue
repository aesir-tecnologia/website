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

        <BulletList v-if="hasPoints" :items="points" class="text-base text-slate-200" />
      </div>

      <UCard :ui="cardUi">
        <div class="space-y-6">
          <header class="space-y-3">
            <Tag v-if="highlightEyebrow" tone="accent" size="md">{{ highlightEyebrow }}</Tag>
            <h2 class="text-2xl font-semibold text-slate-900 dark:text-slate-50">{{ highlightTitle }}</h2>
          </header>
          <ul class="space-y-5">
            <li
              v-for="item in highlights"
              :key="item.id ?? item.title"
              class="flex flex-col gap-2 rounded-2xl border border-slate-200/70 bg-white/90 p-4 dark:border-slate-900/60 dark:bg-slate-950/40"
            >
              <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-50">{{ item.title }}</h3>
              <p class="text-base leading-relaxed text-slate-600 dark:text-slate-300">{{ item.description }}</p>
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
  backgroundTone: 'sky',
  backgroundAlign: 'top',
})

const hasPoints = computed(() => (props.points?.length ?? 0) > 0)

const cardUi = {
  base: 'relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-xl shadow-slate-200/60 dark:border-slate-900/70 dark:bg-slate-950/50 dark:shadow-slate-950/60',
  body: 'space-y-6 p-0'
} as const

const sectionVariant = computed(() => props.variant)
const showBackground = computed(() => props.background)
const backgroundVariant = computed(() => props.backgroundVariant)
const backgroundTone = computed(() => props.backgroundTone)
const backgroundAlign = computed(() => props.backgroundAlign)
</script>
