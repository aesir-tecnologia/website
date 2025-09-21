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

    <BaseSection id="overview">
      <div class="space-y-10">
        <SectionHeader :title="overview.title" :description="overview.description" />
        <UCard>
          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-slate-900 dark:text-slate-50">{{ overview.title }}</h3>
            <BulletList :items="overview.offerings" />
          </div>
        </UCard>
        <FeatureGrid :features="overviewProcess" :columns="3" />
      </div>
    </BaseSection>

    <BaseSection id="technology" variant="accent">
      <ContentGrid :columns="2">
        <UCard>
          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-slate-900 dark:text-slate-50">{{ technology.title }}</h3>
            <BulletList :items="technology.items" />
          </div>
        </UCard>
        <UCard>
          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-slate-900 dark:text-slate-50">{{ messaging.title }}</h3>
            <BulletList :items="messaging.items" />
          </div>
        </UCard>
      </ContentGrid>
    </BaseSection>

    <BaseSection :id="ctaSectionId">
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
              <AppButton :to="card.to" size="md" :variant="card.cta === 'Build Your Mobile App' ? 'solid' : 'soft'">
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
import FeatureGrid from '~/components/shared/FeatureGrid.vue'
import BulletList from '~/components/shared/BulletList.vue'
import AppButton from '~/components/ui/AppButton.vue'
import { useServiceContent } from '~/composables/useServicesContent'

const service = useServiceContent('mobile-development')

useSeoMeta({
  title: service.seo.title,
  description: service.seo.description
})

const hero = service.hero
const overview = service.overview
const technology = service.technology
const messaging = service.messaging
const ctas = service.ctas

const overviewProcess = overview.process.map((stage) => ({
  title: stage.title,
  description: stage.description
}))

const ctaSectionId = 'contact'
</script>
