<template>
  <div :class="gridClass">
    <UCard
      v-for="item in items"
      :key="item.title"
      :ui="cardUi"
      class="flex h-full flex-col gap-4"
    >
      <div class="space-y-2">
        <IconBadge v-if="item.badge" :icon="item.icon">{{ item.badge }}</IconBadge>
        <h3 class="text-xl font-semibold text-slate-50">{{ item.title }}</h3>
        <p v-if="item.description" class="text-sm text-slate-300">{{ item.description }}</p>
        <slot name="item" :item="item" />
      </div>
      <div v-if="item.cta" class="mt-auto pt-4">
        <AppLinkButton :to="item.cta.to" :href="item.cta.href" intent="outline" class="justify-between text-sm">
          {{ item.cta.label }}
          <UIcon name="i-heroicons-arrow-right" class="h-4 w-4" aria-hidden="true" />
        </AppLinkButton>
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'
import AppLinkButton from '~/components/ui/AppLinkButton.vue'
import IconBadge from '~/components/ui/IconBadge.vue'

interface GridItemCta {
  label: string
  to?: string
  href?: string
}

interface GridItem {
  title: string
  description?: string
  badge?: string
  icon?: string
  cta?: GridItemCta
}

const props = withDefaults(
  defineProps({
    items: {
      type: Array as PropType<GridItem[]>,
      default: () => []
    },
    columns: {
      type: Number,
      default: 3
    }
  }),
  {
    columns: 3
  }
)

const columnClass = computed(() => {
  switch (props.columns) {
    case 2:
      return 'lg:grid-cols-2'
    case 4:
      return 'lg:grid-cols-4'
    default:
      return 'lg:grid-cols-3'
  }
})

const gridClass = computed(() => `grid gap-6 sm:gap-8 md:grid-cols-2 ${columnClass.value}`)

const cardUi = {
  base: 'h-full border border-slate-800/70 bg-slate-900/60 backdrop-blur rounded-3xl',
  body: 'flex h-full flex-col gap-4 p-6 sm:p-8'
}
</script>
