<template>
  <component :is="tag" :id="id" :class="sectionClasses">
    <slot name="background" />
    <UContainer v-if="withContainer" :class="containerClasses">
      <slot />
    </UContainer>
    <template v-else>
      <slot />
    </template>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type SectionVariant = 'default' | 'muted' | 'dark' | 'gradient' | 'accent'
type SectionPadding = 'none' | 'tight' | 'default' | 'relaxed'
type SectionWidth = 'narrow' | 'default' | 'wide' | 'full'

const props = withDefaults(defineProps<{
  id?: string
  as?: keyof HTMLElementTagNameMap | string
  variant?: SectionVariant
  padding?: SectionPadding
  width?: SectionWidth
  container?: boolean
}>(), {
  id: undefined,
  as: 'section',
  variant: 'default',
  padding: 'default',
  width: 'default',
  container: true,
})

const tag = computed(() => props.as)

const variantMap: Record<SectionVariant, string> = {
  default: 'bg-transparent',
  muted: 'backdrop-blur-sm bg-slate-100/80 ring-1 ring-slate-200/60 dark:bg-slate-900/40 dark:ring-slate-800/60',
  dark: 'bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100',
  gradient: 'bg-gradient-to-b from-white via-primary-100/10 to-white dark:from-slate-950/0 dark:via-slate-950/60 dark:to-slate-950',
  accent: 'ring-1 ring-primary-300/40 bg-primary-100/25 dark:bg-primary-500/10 dark:ring-primary-500/20',
}

const paddingMap: Record<SectionPadding, string> = {
  none: 'py-0',
  tight: 'py-12 sm:py-16',
  default: 'py-16 sm:py-20',
  relaxed: 'py-20 sm:py-24',
}

const widthMap: Record<SectionWidth, string> = {
  narrow: 'max-w-3xl',
  default: 'max-w-6xl',
  wide: 'max-w-7xl',
  full: 'max-w-none',
}

const withContainer = computed(() => props.container)

const sectionClasses = computed(() => [
  'relative isolate w-full overflow-hidden',
  variantMap[props.variant],
  paddingMap[props.padding],
])

const containerClasses = computed(() => [
  'relative mx-auto w-full',
  widthMap[props.width],
  props.width === 'full' ? 'px-0' : 'px-6 sm:px-8',
])
</script>
