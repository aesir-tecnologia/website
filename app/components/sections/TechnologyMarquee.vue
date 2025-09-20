<template>
  <BaseSection :id="id" background="dark" :eyebrow="eyebrow" :padding="padding">
    <div class="space-y-8">
      <SectionHeader :title="title" :subhead="description" :align="align" />
      <div class="marquee rounded-3xl border border-slate-800/60 bg-slate-900/80 px-4 py-6" :aria-label="ariaLabel">
        <div class="marquee-track" role="list">
          <span v-for="(item, index) in duplicatedItems" :key="`${item.label}-${index}`" class="marquee-item" role="listitem">
            <span class="sr-only" v-if="item.alt">{{ item.alt }}</span>
            {{ item.label }}
          </span>
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'
import BaseSection from '~/components/base/BaseSection.vue'
import SectionHeader from '~/components/base/SectionHeader.vue'

interface TechnologyItem {
  label: string
  alt?: string
}

const props = defineProps({
  id: {
    type: String,
    default: 'technology'
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
  items: {
    type: Array as PropType<TechnologyItem[]>,
    default: () => []
  },
  align: {
    type: String as PropType<'start' | 'center' | 'end'>,
    default: 'center'
  },
  padding: {
    type: String,
    default: 'py-20'
  },
  ariaLabel: {
    type: String,
    default: 'Technology stack logos'
  }
})

const duplicatedItems = computed(() => [...props.items, ...props.items])
</script>
