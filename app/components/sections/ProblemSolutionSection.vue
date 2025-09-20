<template>
  <BaseSection :id="id" :eyebrow="eyebrow">
    <div class="space-y-10">
      <SectionHeader :title="title" :subhead="description" :align="align" />
      <div class="grid gap-8 md:grid-cols-2">
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-slate-100">{{ challengeTitle }}</h3>
          <BulletList :items="challenges" />
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-slate-100">{{ outcomeTitle }}</h3>
          <BulletList :items="outcomes" />
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import BaseSection from '~/components/base/BaseSection.vue'
import BulletList from '~/components/base/BulletList.vue'
import SectionHeader from '~/components/base/SectionHeader.vue'

defineProps({
  id: {
    type: String,
    default: 'problem'
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
    required: true
  },
  challenges: {
    type: Array as PropType<string[]>,
    default: () => []
  },
  outcomes: {
    type: Array as PropType<string[]>,
    default: () => []
  },
  challengeTitle: {
    type: String,
    default: undefined
  },
  outcomeTitle: {
    type: String,
    default: undefined
  },
  align: {
    type: String as PropType<'start' | 'center' | 'end'>,
    default: 'start'
  }
})
</script>
