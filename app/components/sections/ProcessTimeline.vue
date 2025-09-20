<template>
  <BaseSection :id="id" :background="background" :eyebrow="eyebrow">
    <div class="space-y-10">
      <SectionHeader :title="title" :subhead="description" :align="align" />
      <div class="overflow-x-auto pb-4">
        <div class="grid min-w-[720px] gap-6 sm:grid-cols-2 lg:min-w-0 lg:grid-cols-4">
          <UCard v-for="step in steps" :key="step.title" :ui="cardUi" class="h-full">
            <template #header>
              <h3 class="text-lg font-semibold text-slate-50">{{ step.title }}</h3>
            </template>
            <BulletList v-if="step.items?.length" :items="step.items" />
          </UCard>
        </div>
      </div>
      <UCard v-if="idealCustomers?.length" :ui="cardUi">
        <template #header>
          <h3 class="text-lg font-semibold text-slate-50">{{ idealTitle }}</h3>
        </template>
        <BulletList :items="idealCustomers" />
      </UCard>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import BaseSection from '~/components/base/BaseSection.vue'
import BulletList from '~/components/base/BulletList.vue'
import SectionHeader from '~/components/base/SectionHeader.vue'

interface TimelineStep {
  title: string
  items: string[]
}

defineProps({
  id: {
    type: String,
    default: 'process'
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
  steps: {
    type: Array as PropType<TimelineStep[]>,
    default: () => []
  },
  idealCustomers: {
    type: Array as PropType<string[]>,
    default: () => []
  },
  idealTitle: {
    type: String,
    default: undefined
  },
  align: {
    type: String as PropType<'start' | 'center' | 'end'>,
    default: 'start'
  },
  background: {
    type: String,
    default: 'default'
  }
})

const cardUi = {
  base: 'border border-slate-800/70 bg-slate-900/60 backdrop-blur rounded-3xl h-full',
  header: 'p-6 pb-0',
  body: 'p-6'
}
</script>
