<template>
  <div class="flex flex-col">
    <BaseSection id="about-hero" variant="gradient" padding="relaxed">
      <SectionHeader
        level="h1"
        :title="hero.title"
        :description="hero.subheading"
      >
        <template #actions>
          <div class="flex flex-wrap gap-3">
            <AppButton :to="hero.primaryCta.to" size="lg">{{ hero.primaryCta.label }}</AppButton>
            <AppButton :to="hero.secondaryCta.to" variant="ghost" size="lg">{{ hero.secondaryCta.label }}</AppButton>
          </div>
        </template>
      </SectionHeader>
    </BaseSection>

    <BaseSection id="mission" variant="muted">
      <UCard :ui="missionCardUi" :style="missionCardStyle">
        <div class="space-y-4">
          <h2 class="text-2xl font-semibold" :style="missionTitleStyle">{{ mission.title }}</h2>
          <p class="text-base leading-relaxed" :style="missionDescriptionStyle">{{ mission.description }}</p>
        </div>
      </UCard>
    </BaseSection>

    <BaseSection id="approach" variant="default">
      <div class="space-y-8">
        <SectionHeader :title="approachTitle" />
        <FeatureGrid :features="pillarFeatures" :columns="4" />
      </div>
    </BaseSection>

    <BaseSection id="values" variant="accent">
      <div class="space-y-8">
        <SectionHeader align="center" :title="values.headline" />
        <FeatureGrid :features="valueFeatures" :columns="4" />
      </div>
    </BaseSection>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import AppButton from '~/components/ui/AppButton.vue'
import BaseSection from '~/components/shared/BaseSection.vue'
import SectionHeader from '~/components/shared/SectionHeader.vue'
import FeatureGrid from '~/components/shared/FeatureGrid.vue'
import { useAboutContent } from '~/composables/useAboutContent'

const { surfaceColor, borderColor, shadow, textColor } = useUiTokens()

const missionCardStyle = computed(() => ({
  backgroundColor: surfaceColor('elevated'),
  borderColor: borderColor('soft'),
  boxShadow: shadow('soft'),
  color: textColor('primary'),
}))

const missionTitleStyle = computed(() => ({
  color: textColor('primary'),
}))

const missionDescriptionStyle = computed(() => ({
  color: textColor('muted'),
}))

const missionCardUi = {
  base: 'relative overflow-hidden rounded-3xl border p-8 transition-colors duration-300',
  body: 'space-y-4 p-0'
} as const

const content = useAboutContent()

useSeoMeta({
  title: content.seo.title,
  description: content.seo.description
})

const hero = content.hero
const mission = content.mission
const pillars = content.pillars
const values = content.values

const approachTitle = 'Our Approach'

const pillarFeatures = pillars.map((pillar) => ({
  title: pillar.title,
  description: pillar.description
}))

const valueFeatures = values.items.map((value) => ({
  title: value.title,
  description: value.description,
  meta: value.meta
}))
</script>
