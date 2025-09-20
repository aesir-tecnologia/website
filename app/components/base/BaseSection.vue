<template>
  <component :is="as" :id="id" :class="['relative', paddingClass, backgroundClass]">
    <UContainer v-if="useContainer" :class="['flex flex-col gap-12', contentClass]">
      <div v-if="eyebrow" class="flex justify-start">
        <Tag>{{ eyebrow }}</Tag>
      </div>
      <slot />
    </UContainer>
    <slot v-else />
  </component>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'
import Tag from '~/components/ui/Tag.vue'
import { useBackgroundVariant, backgroundVariants } from '~/composables/useBackgroundVariants'

type BackgroundKey = keyof typeof backgroundVariants

const props = withDefaults(
  defineProps({
    id: {
      type: String,
      default: undefined
    },
    background: {
      type: String as PropType<BackgroundKey>,
      default: 'default'
    },
    padding: {
      type: String,
      default: 'py-20'
    },
    contentClass: {
      type: String,
      default: ''
    },
    eyebrow: {
      type: String,
      default: undefined
    },
    as: {
      type: String,
      default: 'section'
    },
    container: {
      type: Boolean,
      default: true
    }
  }),
  {
    padding: 'py-20'
  }
)

const variantClass = useBackgroundVariant(props.background as BackgroundKey)

const backgroundClass = computed(() => variantClass.value)
const paddingClass = computed(() => props.padding)
const useContainer = computed(() => props.container)
</script>
