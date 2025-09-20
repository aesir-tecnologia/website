<template>
  <div :class="['flex flex-col gap-4', alignmentClass]">
    <Tag v-if="eyebrow" class="self-start">{{ eyebrow }}</Tag>
    <div class="space-y-3">
      <component :is="headingTag" class="font-semibold text-3xl tracking-tight text-slate-50 sm:text-4xl">
        <slot>{{ title }}</slot>
      </component>
      <p v-if="subhead" class="max-w-3xl text-base text-slate-300 sm:text-lg">{{ subhead }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'
import Tag from '~/components/ui/Tag.vue'

const props = withDefaults(
  defineProps({
    title: {
      type: String,
      default: undefined
    },
    subhead: {
      type: String,
      default: undefined
    },
    eyebrow: {
      type: String,
      default: undefined
    },
    align: {
      type: String as PropType<'start' | 'center' | 'end'>,
      default: 'start'
    },
    level: {
      type: Number as PropType<2 | 3>,
      default: 2
    }
  }),
  {
    align: 'start'
  }
)

const headingTag = computed(() => `h${props.level}`)

const alignmentClass = computed(() => {
  switch (props.align) {
    case 'center':
      return 'items-center text-center'
    case 'end':
      return 'items-end text-right'
    default:
      return 'items-start text-left'
  }
})
</script>
