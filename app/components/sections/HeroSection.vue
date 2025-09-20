<template>
  <BaseSection :id="id" background="gradient" :eyebrow="eyebrow" :padding="padding">
    <div class="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:items-center">
      <div class="space-y-8">
        <SectionHeader :title="title" :subhead="lead" :align="'start'" />
        <div class="flex flex-wrap items-center gap-4">
          <AppLinkButton v-if="primaryCta" :to="primaryCta.to" :href="primaryCta.href" intent="primary" size="lg">
            {{ primaryCta.label }}
          </AppLinkButton>
          <AppLinkButton
            v-if="secondaryCta"
            :to="secondaryCta.to"
            :href="secondaryCta.href"
            intent="ghost"
            size="lg"
            class="backdrop-blur"
          >
            {{ secondaryCta.label }}
          </AppLinkButton>
        </div>
        <BulletList v-if="proofPoints?.length" :items="proofPoints" />
      </div>
      <UCard v-if="highlights?.length" :ui="cardUi" class="h-full">
        <template #header>
          <h2 class="text-xl font-semibold text-slate-50">{{ highlightTitle }}</h2>
        </template>
        <ul class="space-y-4">
          <li v-for="item in highlights" :key="item.title" class="space-y-1">
            <p class="text-base font-semibold text-slate-50">{{ item.title }}</p>
            <p class="text-sm text-slate-300">{{ item.description }}</p>
          </li>
        </ul>
      </UCard>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import AppLinkButton from '~/components/ui/AppLinkButton.vue'
import BaseSection from '~/components/base/BaseSection.vue'
import SectionHeader from '~/components/base/SectionHeader.vue'
import BulletList from '~/components/base/BulletList.vue'

interface Cta {
  label: string
  to?: string
  href?: string
}

interface HighlightItem {
  title: string
  description: string
}

defineProps({
  id: {
    type: String,
    default: 'hero'
  },
  eyebrow: {
    type: String,
    default: undefined
  },
  title: {
    type: String,
    required: true
  },
  lead: {
    type: String,
    required: true
  },
  primaryCta: {
    type: Object as PropType<Cta>,
    default: undefined
  },
  secondaryCta: {
    type: Object as PropType<Cta>,
    default: undefined
  },
  proofPoints: {
    type: Array as PropType<string[]>,
    default: () => []
  },
  highlights: {
    type: Array as PropType<HighlightItem[]>,
    default: () => []
  },
  highlightTitle: {
    type: String,
    default: undefined
  },
  padding: {
    type: String,
    default: 'py-24'
  }
})

const cardUi = {
  base: 'border border-slate-800/70 bg-slate-900/70 backdrop-blur rounded-3xl shadow-xl shadow-black/30',
  header: 'p-6 pb-0',
  body: 'p-6'
}
</script>
