<template>
  <component :is="tag" :id="id" :class="sectionClasses" :style="sectionStyle">
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

const { surfaceColor, borderColor, gradient, shadow, textColor } = useUiTokens()

const variantStyles = computed<Record<SectionVariant, Record<string, string>>>((() => ({
  default: {
    backgroundColor: 'transparent',
    color: textColor('primary'),
  },
  muted: {
    backgroundColor: surfaceColor('muted'),
    color: textColor('primary'),
    borderColor: borderColor('soft'),
    boxShadow: shadow('soft'),
    backdropFilter: 'blur(12px)',
  },
  dark: {
    backgroundColor: surfaceColor('base'),
    color: textColor('inverse'),
  },
  gradient: {
    backgroundImage: gradient('hero'),
    backgroundColor: surfaceColor('subtle'),
    color: textColor('primary'),
  },
  accent: {
    backgroundColor: surfaceColor('accent'),
    color: textColor('primary'),
    borderColor: borderColor('accent'),
    boxShadow: shadow('soft'),
    backdropFilter: 'blur(8px)',
  },
}))())

const sectionStyle = computed(() => ({
  ...variantStyles.value[props.variant],
  transition: 'background-color 200ms ease, color 200ms ease, box-shadow 200ms ease'
}))

const variantHasBorder = computed(() => ['muted', 'accent'].includes(props.variant))

const sectionClasses = computed(() => [
  'relative isolate w-full overflow-hidden',
  paddingMap[props.padding],
  variantHasBorder.value ? 'border' : null,
])

const containerClasses = computed(() => [
  'relative mx-auto w-full',
  widthMap[props.width],
  props.width === 'full' ? 'px-0' : 'px-6 sm:px-8',
])
</script>
