<template>
  <div :class="wrapperClasses">
    <div :class="contentClasses">
      <div
        v-if="icon"
        class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500/20 via-primary-400/10 to-transparent text-primary-300 shadow-lg shadow-primary-950/30"
      >
        <UIcon :name="icon" class="h-6 w-6" aria-hidden="true" />
      </div>
      <p v-if="eyebrow" class="text-sm font-semibold uppercase tracking-wide text-primary-400">{{ eyebrow }}</p>
      <component :is="headingTag" class="text-balance font-semibold tracking-tight text-3xl sm:text-4xl text-slate-50">
        <slot name="title">{{ title }}</slot>
      </component>
      <p v-if="description" class="text-base leading-relaxed text-slate-300">
        <slot name="description">{{ description }}</slot>
      </p>
    </div>
    <div v-if="$slots.actions" :class="actionsClasses">
      <slot name="actions" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type HeaderAlign = 'left' | 'center'

type HeadingLevel = 'h2' | 'h3' | 'h4'

const props = withDefaults(defineProps<{
  title: string
  description?: string
  eyebrow?: string
  icon?: string
  align?: HeaderAlign
  level?: HeadingLevel
}>(), {
  description: undefined,
  eyebrow: undefined,
  icon: undefined,
  align: 'left',
  level: 'h2',
})

const headingTag = computed(() => props.level)

const wrapperClasses = computed(() => [
  'flex flex-col gap-6 sm:gap-8',
  props.align === 'center' ? 'items-center text-center' : 'items-start text-left',
])

const contentClasses = computed(() => [
  'flex flex-col gap-3 sm:gap-4 max-w-3xl',
  props.align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-left',
])

const actionsClasses = computed(() => [
  'flex flex-wrap gap-3 sm:gap-4',
  props.align === 'center' ? 'justify-center' : 'justify-start',
])
</script>
