<template>
  <BaseSection :id="id" :background="background" :eyebrow="eyebrow">
    <div class="space-y-10">
      <SectionHeader :title="title" :subhead="description" :align="align" />
      <figure v-if="quote" class="rounded-3xl border border-slate-800/60 bg-slate-900/70 p-8 text-center shadow-lg">
        <blockquote class="text-xl italic text-slate-100">“{{ quote }}”</blockquote>
        <figcaption v-if="attribution" class="mt-4 text-sm font-semibold uppercase tracking-wide text-slate-300">
          {{ attribution }}
        </figcaption>
      </figure>
      <MetricList v-if="metrics?.length" :metrics="metrics" />
      <div v-if="ctas?.length" class="grid gap-4 md:grid-cols-3">
        <UCard v-for="cta in ctas" :key="cta.title" :ui="cardUi" class="h-full">
          <template #header>
            <h3 class="text-lg font-semibold text-slate-50">{{ cta.title }}</h3>
          </template>
          <p class="text-sm text-slate-300">{{ cta.description }}</p>
          <div class="mt-6">
            <AppLinkButton :to="cta.to" :href="cta.href" intent="primary" class="w-full justify-center">
              {{ cta.label }}
            </AppLinkButton>
          </div>
        </UCard>
      </div>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import BaseSection from '~/components/base/BaseSection.vue'
import MetricList from '~/components/base/MetricList.vue'
import SectionHeader from '~/components/base/SectionHeader.vue'
import AppLinkButton from '~/components/ui/AppLinkButton.vue'

interface MetricItem {
  label: string
  value: string
  description?: string
}

interface SocialCta {
  title: string
  description: string
  label: string
  to?: string
  href?: string
}

defineProps({
  id: {
    type: String,
    default: 'social-proof'
  },
  eyebrow: {
    type: String,
    default: undefined
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: undefined
  },
  quote: {
    type: String,
    default: undefined
  },
  attribution: {
    type: String,
    default: undefined
  },
  metrics: {
    type: Array as PropType<MetricItem[]>,
    default: () => []
  },
  ctas: {
    type: Array as PropType<SocialCta[]>,
    default: () => []
  },
  align: {
    type: String as PropType<'start' | 'center' | 'end'>,
    default: 'center'
  },
  background: {
    type: String,
    default: 'testimonial'
  }
})

const cardUi = {
  base: 'border border-slate-800/70 bg-slate-900/70 backdrop-blur rounded-3xl h-full',
  header: 'p-6 pb-0',
  body: 'p-6 flex h-full flex-col gap-4'
}
</script>
