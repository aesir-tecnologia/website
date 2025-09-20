<template>
  <component :is="tag" :class="gridClasses">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type GridColumns = 1 | 2 | 3 | 4

type GridGap = 'tight' | 'default' | 'loose'

const props = withDefaults(defineProps<{
  as?: keyof HTMLElementTagNameMap | string
  columns?: GridColumns
  gap?: GridGap
}>(), {
  as: 'div',
  columns: 3,
  gap: 'default',
})

const tag = computed(() => props.as)

const gapMap: Record<GridGap, string> = {
  tight: 'gap-6 sm:gap-8',
  default: 'gap-8 sm:gap-10',
  loose: 'gap-10 sm:gap-12',
}

const columnMap: Record<GridColumns, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 xl:grid-cols-4',
}

const gridClasses = computed(() => [
  'grid',
  gapMap[props.gap],
  columnMap[props.columns],
])
</script>
