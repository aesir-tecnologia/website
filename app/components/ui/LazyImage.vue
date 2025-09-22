<template>
  <component
    :is="wrapperTag"
    v-bind="wrapperAttrs"
    :class="wrapperClasses"
    :style="wrapperStyle"
  >
    <NuxtImg v-bind="imageAttrs" />
    <figcaption
      v-if="$slots.caption"
      class="lazy-image__caption mt-3 text-sm"
      :style="captionStyle"
    >
      <slot name="caption" />
    </figcaption>
  </component>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { useAppImage, type AppImagePreset, type AppImageOverrides } from '~/composables/useAppImage'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<{
  src: string
  alt: string
  preset?: AppImagePreset
  width?: number | string
  height?: number | string
  sizes?: string
  quality?: number
  format?: string
  placeholder?: boolean | string
  loading?: 'lazy' | 'eager'
  decoding?: 'auto' | 'sync' | 'async'
  ratio?: number | string
  contain?: boolean
  wrapperTag?: keyof HTMLElementTagNameMap | string
  wrapperClass?: string | string[] | Record<string, boolean>
  imgClass?: string | string[]
  imgAttrs?: Record<string, unknown>
  overrides?: AppImageOverrides
}>(), {
  preset: 'default',
  width: undefined,
  height: undefined,
  sizes: undefined,
  quality: undefined,
  format: undefined,
  placeholder: true,
  loading: 'lazy',
  decoding: 'async',
  ratio: undefined,
  contain: false,
  wrapperTag: 'figure',
  wrapperClass: undefined,
  imgClass: undefined,
  imgAttrs: undefined,
  overrides: undefined,
})

const attrs = useAttrs()

const imageConfig = useAppImage(() => props.preset, () => props.overrides ?? {})

const wrapperTag = computed(() => props.wrapperTag)

const wrapperStyle = computed(() => {
  const style: Record<string, string> = {}

  if (props.ratio) {
    style.aspectRatio = String(props.ratio)
  }

  const configStyle = imageConfig.value.wrapperStyle
  if (configStyle) {
    Object.assign(style, configStyle)
  }

  return Object.keys(style).length ? style : undefined
})

const { textColor } = useUiTokens()

const captionStyle = computed(() => ({
  color: textColor('subtle'),
}))

const normalizeClass = (input: unknown): string[] => {
  if (!input) {
    return []
  }

  if (typeof input === 'string') {
    return [input]
  }

  if (Array.isArray(input)) {
    return input.flatMap((value) => normalizeClass(value))
  }

  if (typeof input === 'object') {
    return Object.entries(input as Record<string, unknown>)
      .filter(([, active]) => Boolean(active))
      .map(([key]) => key)
  }

  return []
}

const wrapperAttrs = computed(() => {
  const { class: _class, ...rest } = attrs
  return rest
})

const wrapperClasses = computed(() => {
  const classes = [
    'lazy-image relative isolate overflow-hidden',
  ]

  const config = imageConfig.value
  if (config.wrapperClass) {
    classes.push(config.wrapperClass)
  }

  classes.push(...normalizeClass(props.wrapperClass))
  classes.push(...normalizeClass(attrs.class))

  return classes
})

const imageAttrs = computed(() => {
  const config = imageConfig.value
  const attrOverrides = props.imgAttrs ?? {}
  const { class: imgAttrClass, ...restAttr } = attrOverrides

  const classes = [
    'lazy-image__img block h-full w-full',
  ]

  if (config.imgClass) {
    classes.push(config.imgClass)
  }

  if (props.contain) {
    classes.push('object-contain')
  }

  classes.push(...normalizeClass(props.imgClass))
  classes.push(...normalizeClass(imgAttrClass))

  return {
    ...restAttr,
    src: props.src,
    alt: props.alt,
    width: props.width ?? config.width,
    height: props.height ?? config.height,
    sizes: props.sizes ?? config.sizes,
    quality: props.quality ?? config.quality,
    format: props.format ?? config.format,
    placeholder: props.placeholder ?? config.placeholder,
    loading: props.loading ?? config.loading,
    decoding: props.decoding ?? config.decoding,
    fit: props.contain ? 'contain' : config.fit,
    densities: config.densities,
    modifiers: config.modifiers,
    class: classes,
  }
})
</script>
