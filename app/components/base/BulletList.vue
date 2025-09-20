<template>
  <ul class="space-y-3 text-sm text-slate-300">
    <li v-for="item in items" :key="item" class="flex items-start gap-3">
      <UIcon name="i-heroicons-check-circle" class="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-300" aria-hidden="true" />
      <span>{{ item }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'

defineProps({
  items: {
    type: Array as PropType<string[]>,
    default: () => []
  }
})
</script>
