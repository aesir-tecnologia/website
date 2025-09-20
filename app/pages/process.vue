<template>
  <div class="flex flex-col">
    <BaseSection id="process-hero" background="gradient">
      <SectionHeader :title="t('process.hero.title')" :subhead="t('process.hero.lead')" />
    </BaseSection>

    <BaseSection id="process-steps" background="surface" :eyebrow="t('process.steps.eyebrow')">
      <div class="space-y-10">
        <SectionHeader :title="t('process.steps.title')" :subhead="t('process.steps.description')" />
        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <UCard v-for="step in steps" :key="step.title" :ui="cardUi">
            <template #header>
              <h2 class="text-xl font-semibold text-slate-50">{{ step.title }}</h2>
              <p class="mt-2 text-sm text-slate-300">{{ step.description }}</p>
            </template>
            <BulletList :items="step.items" />
          </UCard>
        </div>
      </div>
    </BaseSection>

    <BaseSection id="process-benefits" :eyebrow="t('process.benefits.eyebrow')">
      <div class="space-y-10">
        <SectionHeader :title="t('process.benefits.title')" align="center" />
        <FeatureGrid :features="benefits" :columns="3" />
      </div>
    </BaseSection>

    <BaseSection id="process-differentiation" background="surface">
      <div class="grid gap-6 md:grid-cols-2">
        <UCard :ui="cardUi">
          <template #header>
            <h3 class="text-lg font-semibold text-slate-50">{{ t('process.differentiation.title') }}</h3>
          </template>
          <BulletList :items="differentiation" />
        </UCard>
        <UCard :ui="cardUi">
          <template #header>
            <h3 class="text-lg font-semibold text-slate-50">{{ t('process.audience.title') }}</h3>
          </template>
          <BulletList :items="audiences" />
        </UCard>
      </div>
    </BaseSection>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { t, tm } = useI18n()

useSeoDefaults({
  title: t('process.meta.title'),
  description: t('process.meta.description')
})

const cardUi = {
  base: 'border border-slate-800/70 bg-slate-900/60 backdrop-blur rounded-3xl h-full',
  header: 'p-6 pb-0',
  body: 'p-6'
}

const steps = computed(() => tm('process.steps.items') as Array<{ title: string; description: string; items: string[] }>)
const benefits = computed(() => tm('process.benefits.items') as Array<{ title: string; description: string }>)
const differentiation = computed(() => tm('process.differentiation.items') as string[])
const audiences = computed(() => tm('process.audience.items') as string[])
</script>
