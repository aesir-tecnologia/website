<template>
  <div class="flex flex-col">
    <BaseSection id="about-hero" background="gradient">
      <div class="space-y-10">
        <SectionHeader
          :title="t('about.hero.title')"
          :subhead="t('about.hero.lead')"
        />
        <div class="flex flex-wrap gap-4">
          <AppLinkButton :to="localePath('/contact')" intent="primary">
            {{ t('about.hero.primaryCta') }}
          </AppLinkButton>
          <AppLinkButton :to="localePath('/services')" intent="ghost">
            {{ t('about.hero.secondaryCta') }}
          </AppLinkButton>
        </div>
      </div>
    </BaseSection>

    <BaseSection id="mission" background="surface" :eyebrow="t('about.mission.eyebrow')">
      <UCard :ui="cardUi">
        <template #header>
          <h2 class="text-2xl font-semibold text-slate-50">{{ t('about.mission.title') }}</h2>
        </template>
        <p class="text-base text-slate-300">{{ t('about.mission.body') }}</p>
      </UCard>
    </BaseSection>

    <BaseSection id="approach" :eyebrow="t('about.approach.eyebrow')">
      <div class="space-y-10">
        <SectionHeader :title="t('about.approach.title')" />
        <FeatureGrid :features="pillars" :columns="4" />
      </div>
    </BaseSection>

    <BaseSection id="values" background="surface" :eyebrow="t('about.values.eyebrow')">
      <div class="space-y-10">
        <SectionHeader :title="t('about.values.title')" align="center" />
        <FeatureGrid :features="values" :columns="4" />
      </div>
    </BaseSection>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { t, tm } = useI18n()
const localePath = useLocalePath()

useSeoDefaults({
  title: t('about.meta.title'),
  description: t('about.meta.description')
})

const cardUi = {
  base: 'border border-slate-800/70 bg-slate-900/60 backdrop-blur rounded-3xl',
  header: 'p-6 pb-0',
  body: 'p-6'
}

const pillars = computed(() => tm('about.approach.pillars') as Array<{ title: string; description: string }>)
const values = computed(() => tm('about.values.items') as Array<{ title: string; description: string }>)
</script>
