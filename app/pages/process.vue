<template>
  <div class="flex flex-col">
    <BaseSection id="process-hero" variant="gradient" padding="relaxed">
      <SectionHeader
        level="h1"
        :title="hero.title"
        :description="hero.subheading"
      />
    </BaseSection>

    <ProcessTimeline
      id="process-steps"
      :title="timelineTitle"
      :steps="timelineSteps"
      :columns="3"
      variant="muted"
      :highlight="timelineHighlight"
    />

    <BaseSection id="benefits" variant="accent">
      <div class="space-y-8">
        <SectionHeader align="center" :title="benefits.headline" />
        <FeatureGrid :features="benefitFeatures" :columns="3" />
      </div>
    </BaseSection>

    <BaseSection id="differentiation" variant="default">
      <ContentGrid :columns="2">
        <UCard :ui="infoCardUi" :style="infoCardStyle">
          <div class="space-y-4">
            <h3 class="text-xl font-semibold" :style="infoCardTitleStyle">{{ differentiation.title }}</h3>
            <BulletList :items="differentiationItems" />
          </div>
        </UCard>
        <UCard :ui="infoCardUi" :style="infoCardStyle">
          <div class="space-y-4">
            <h3 class="text-xl font-semibold" :style="infoCardTitleStyle">{{ audiences.title }}</h3>
            <BulletList :items="audienceItems" />
          </div>
        </UCard>
      </ContentGrid>
    </BaseSection>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseSection from '~/components/shared/BaseSection.vue'
import SectionHeader from '~/components/shared/SectionHeader.vue'
import ContentGrid from '~/components/shared/ContentGrid.vue'
import FeatureGrid from '~/components/shared/FeatureGrid.vue'
import BulletList from '~/components/shared/BulletList.vue'
import ProcessTimeline from '~/components/modules/ProcessTimeline.vue'
import { useProcessContent } from '~/composables/useProcessContent'

const { surfaceColor, borderColor, shadow, textColor } = useUiTokens()

const infoCardStyle = computed(() => ({
  backgroundColor: surfaceColor('elevated'),
  borderColor: borderColor('soft'),
  boxShadow: shadow('soft'),
  color: textColor('primary'),
}))

const infoCardTitleStyle = computed(() => ({
  color: textColor('primary'),
}))

const infoCardUi = {
  base: 'relative overflow-hidden rounded-3xl border p-6 transition-colors duration-300',
  body: 'space-y-4 p-0'
} as const

const content = useProcessContent()

useSeoMeta({
  title: content.seo.title,
  description: content.seo.description
})

const hero = content.hero
const steps = content.steps
const benefits = content.benefits
const differentiation = content.differentiation
const audiences = content.audiences

const timelineTitle = hero.timelineTitle ?? 'Our Proven Process'

const timelineSteps = steps.map((step) => ({
  title: step.title,
  items: [step.description, ...step.items]
}))

const timelineHighlight = {
  title: audiences.title,
  items: audiences.items,
  eyebrow: 'Perfect for'
}

const benefitFeatures = benefits.items.map((benefit) => ({
  title: benefit.title,
  description: benefit.description
}))

const differentiationItems = differentiation.items.map((item) => ({ label: item }))
const audienceItems = audiences.items.map((item) => ({ label: item }))
</script>
