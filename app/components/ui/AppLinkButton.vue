<template>
  <AppButton v-bind="props">
    <slot />
  </AppButton>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import AppButton from '~/components/ui/AppButton.vue'

const props = defineProps({
  intent: {
    type: String as PropType<'primary' | 'secondary' | 'outline' | 'ghost'>,
    default: 'primary'
  },
  to: {
    type: [String, Object] as PropType<string | Record<string, any> | undefined>,
    default: undefined
  },
  href: {
    type: String,
    default: undefined
  },
  target: {
    type: String,
    default: undefined
  },
  rel: {
    type: String,
    default: undefined
  },
  size: {
    type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl'>,
    default: 'md'
  },
  icon: {
    type: String,
    default: undefined
  },
  trailingIcon: {
    type: String,
    default: undefined
  }
})
</script>
