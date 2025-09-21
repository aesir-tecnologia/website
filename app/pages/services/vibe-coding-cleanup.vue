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
          <UCard>
            <div class="space-y-4">
              <h3 class="text-xl font-semibold text-slate-900 dark:text-slate-50">{{ problems.primary.title }}</h3>
              <BulletList :items="problems.primary.items" />
            </div>
          </UCard>
          <UCard>
            <div class="space-y-4">
              <h3 class="text-xl font-semibold text-slate-900 dark:text-slate-50">{{ problems.secondary.title }}</h3>
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
          <UCard v-for="value in values.valueProps" :key="value">
            <p class="text-base leading-relaxed text-slate-600 dark:text-slate-300">{{ value }}</p>
          </UCard>
        </ContentGrid>
        <ContentGrid :columns="3">
          <UCard v-for="message in values.targetMessages" :key="message">
            <p class="text-base leading-relaxed text-slate-600 dark:text-slate-300">{{ message }}</p>
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
          <UCard v-for="card in ctas.cards" :key="card.title" class="h-full">
            <div class="flex h-full flex-col gap-5">
              <div class="space-y-3">
                <h3 class="text-2xl font-semibold text-slate-900 dark:text-slate-50">{{ card.title }}</h3>
                <p class="text-base leading-relaxed text-slate-600 dark:text-slate-300">{{ card.description }}</p>
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
import BaseSection from '~/components/shared/BaseSection.vue'
import SectionHeader from '~/components/shared/SectionHeader.vue'
import ContentGrid from '~/components/shared/ContentGrid.vue'
import BulletList from '~/components/shared/BulletList.vue'
import AppButton from '~/components/ui/AppButton.vue'
import ProcessTimeline from '~/components/modules/ProcessTimeline.vue'
import { useServiceContent } from '~/composables/useServicesContent'

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
