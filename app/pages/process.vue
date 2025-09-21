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
        <UCard>
          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-slate-900 dark:text-slate-50">{{ differentiation.title }}</h3>
            <BulletList :items="differentiationItems" />
          </div>
        </UCard>
        <UCard>
          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-slate-900 dark:text-slate-50">{{ audiences.title }}</h3>
            <BulletList :items="audienceItems" />
          </div>
        </UCard>
      </ContentGrid>
    </BaseSection>
  </div>
</template>

<script setup lang="ts">
import BaseSection from '~/components/shared/BaseSection.vue'
import SectionHeader from '~/components/shared/SectionHeader.vue'
import ContentGrid from '~/components/shared/ContentGrid.vue'
import FeatureGrid from '~/components/shared/FeatureGrid.vue'
import BulletList from '~/components/shared/BulletList.vue'
import ProcessTimeline from '~/components/modules/ProcessTimeline.vue'
import { useProcessContent } from '~/composables/useProcessContent'

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
