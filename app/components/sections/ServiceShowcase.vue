<template>
  <BaseSection :id="id" background="surface" :eyebrow="eyebrow">
    <div class="space-y-10">
      <SectionHeader :title="title" :subhead="description" :align="align" />
      <ContentGrid :items="services" :columns="3">
        <template #item="{ item }">
          <p v-if="item.focus" class="text-xs font-semibold uppercase tracking-wide text-sky-300">{{ item.focus }}</p>
        </template>
      </ContentGrid>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import BaseSection from '~/components/base/BaseSection.vue'
import ContentGrid from '~/components/base/ContentGrid.vue'
import SectionHeader from '~/components/base/SectionHeader.vue'

interface ServiceItem {
  title: string
  description: string
  badge?: string
  focus?: string
  cta?: {
    label: string
    to?: string
    href?: string
  }
}

defineProps({
  id: {
    type: String,
    default: 'services'
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
  services: {
    type: Array as PropType<ServiceItem[]>,
    default: () => []
  },
  align: {
    type: String as PropType<'start' | 'center' | 'end'>,
    default: 'start'
  }
})
</script>
