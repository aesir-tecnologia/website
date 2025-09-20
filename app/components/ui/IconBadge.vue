<template>
  <UBadge :color="color" variant="soft" class="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold">
    <UIcon v-if="icon" :name="icon" class="h-4 w-4" aria-hidden="true" />
    <slot />
  </UBadge>
</template>

<script setup lang="ts">
withDefaults(
  defineProps({
    icon: {
      type: String,
      default: undefined
    },
    color: {
      type: String,
      default: 'primary'
    }
  }),
  {
    color: 'primary'
  }
)
</script>
