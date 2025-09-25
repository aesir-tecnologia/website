<template>
  <div class="flex flex-col">
    <BaseSection id="hero" variant="gradient" padding="relaxed">
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

    <BaseSection id="problems">
      <div class="space-y-10">
        <SectionHeader :title="problems.primary.title" :description="problems.primary.description" />
        <ContentGrid :columns="2">
          <UCard :ui="infoCardUi" :style="infoCardStyle">
            <div class="space-y-4">
              <h3 class="text-xl font-semibold" :style="textStyles.primary">{{ problems.primary.title }}</h3>
              <BulletList :items="problems.primary.items" />
            </div>
          </UCard>
          <UCard :ui="infoCardUi" :style="infoCardStyle">
            <div class="space-y-4">
              <h3 class="text-xl font-semibold" :style="textStyles.primary">{{ problems.secondary.title }}</h3>
              <BulletList :items="problems.secondary.items" />
            </div>
          </UCard>
        </ContentGrid>
      </div>
    </BaseSection>

    <ProcessTimeline
      id="process"
      :title="process.headline"
      :steps="timelineSteps"
      :highlight="timelineHighlight"
      :columns="3"
      variant="muted"
    />

    <BaseSection id="deliverables" variant="accent">
      <div class="space-y-8">
        <SectionHeader :title="deliverables.title" align="center" />
        <BulletList :items="deliverables.items" />
      </div>
    </BaseSection>

    <BaseSection id="values" variant="muted">
      <div class="space-y-10">
        <SectionHeader :title="values.headline" align="center" />
        <ContentGrid :columns="3">
          <UCard v-for="value in values.valueProps" :key="value" :ui="infoCardUi" :style="infoCardStyle">
            <p class="text-base leading-relaxed" :style="textStyles.muted">{{ value }}</p>
          </UCard>
        </ContentGrid>
        <ContentGrid :columns="3">
          <UCard v-for="message in values.targetMessages" :key="message" :ui="infoCardUi" :style="infoCardStyle">
            <p class="text-base leading-relaxed" :style="textStyles.muted">{{ message }}</p>
          </UCard>
        </ContentGrid>
      </div>
    </BaseSection>

    <BaseSection :id="ctaSectionId" variant="default">
      <div class="space-y-8">
        <SectionHeader
          align="center"
          :title="ctas.headline"
          :description="ctas.description"
        />
        <ContentGrid :columns="2">
          <UCard
            v-for="card in ctas.cards"
            :key="card.title"
            :ui="infoCardUi"
            :style="infoCardStyle"
            class="h-full"
          >
            <div class="flex h-full flex-col gap-5">
              <div class="space-y-3">
                <h3 class="text-2xl font-semibold" :style="textStyles.primary">{{ card.title }}</h3>
                <p class="text-base leading-relaxed" :style="textStyles.muted">{{ card.description }}</p>
              </div>
              <AppButton :to="card.to" size="md" :variant="card.cta === 'Request Audit' ? 'solid' : 'soft'">
                {{ card.cta }}
              </AppButton>
            </div>
          </UCard>
        </ContentGrid>
      </div>
    </BaseSection>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseSection from '~/components/shared/BaseSection.vue'
import SectionHeader from '~/components/shared/SectionHeader.vue'
import ContentGrid from '~/components/shared/ContentGrid.vue'
import BulletList from '~/components/shared/BulletList.vue'
import AppButton from '~/components/ui/AppButton.vue'
import ProcessTimeline from '~/components/modules/ProcessTimeline.vue'
import { useServiceContent } from '~/composables/useServicesContent'
import { useTextStyles } from '~/composables/useTextStyles'

const { surfaceColor, borderColor, shadow } = useUiTokens()
const textStyles = useTextStyles()

const infoCardStyle = computed(() => ({
  backgroundColor: surfaceColor('elevated'),
  borderColor: borderColor('soft'),
  boxShadow: shadow('soft'),
}))

const infoCardUi = {
  base: 'relative overflow-hidden rounded-3xl border p-6 transition-colors duration-300',
  body: 'space-y-4 p-0'
} as const

const service = useServiceContent('vibe-coding-cleanup')

useSeoMeta({
  title: service.seo.title,
  description: service.seo.description
})

const hero = service.hero
const problems = service.problems
const process = service.process
const deliverables = service.deliverables
const values = service.values
const audiences = service.audiences
const ctas = service.ctas

const ctaSectionId = 'contact'

const timelineSteps = [...process.primaryPhases, ...process.extendedPhases]

const timelineHighlight = {
  title: audiences.title,
  items: audiences.items,
  eyebrow: 'Perfect for'
}
</script>
