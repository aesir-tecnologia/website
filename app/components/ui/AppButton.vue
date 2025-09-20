<template>
  <UButton
    v-bind="buttonProps"
    :to="to"
    :href="href"
    :target="target"
    :rel="rel"
    :size="size"
    :icon="icon"
    :trailing-icon="trailingIcon"
    class="font-semibold"
  >
    <slot />
  </UButton>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'

const props = withDefaults(
  defineProps({
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
  }),
  {
    rel: undefined,
    target: undefined
  }
)

const buttonProps = computed(() => {
  switch (props.intent) {
    case 'secondary':
      return { color: 'gray', variant: 'solid' as const }
    case 'outline':
      return { color: 'gray', variant: 'outline' as const }
    case 'ghost':
      return { color: 'gray', variant: 'ghost' as const }
    default:
      return { color: 'primary', variant: 'solid' as const }
  }
})
</script>
