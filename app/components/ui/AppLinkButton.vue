<template>
  <AppButton
    v-bind="forwardedAttrs"
    :variant="variant"
    :color="color"
    :trailing-icon="trailingIcon"
    :size="size"
    :class="buttonClasses"
  >
    <slot>{{ label }}</slot>
  </AppButton>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

const props = withDefaults(defineProps<{
  label?: string
  to?: string | RouteLocationRaw
  href?: string
  external?: boolean
  color?: string
  trailingIcon?: string
  variant?: 'link' | 'ghost'
  size?: 'xs' | 'sm' | 'md' | 'lg'
}>(), {
  label: undefined,
  to: undefined,
  href: undefined,
  external: false,
  color: 'primary',
  trailingIcon: 'i-lucide-arrow-up-right',
  variant: 'link',
  size: 'md',
})

const attrs = useAttrs()

const forwardedAttrs = computed(() => {
  const { class: _class, ...rest } = attrs

  return {
    ...rest,
    to: props.href ? undefined : props.to,
    href: props.href,
    external: props.external,
  }
})

const buttonClasses = computed(() => {
  const classes = [
    'app-link-button inline-flex items-center gap-2 font-semibold tracking-tight',
    props.variant === 'link' ? 'underline-offset-4 hover:underline' : null,
  ]

  const attrClass = attrs.class

  if (typeof attrClass === 'string') {
    classes.push(attrClass)
  }
  else if (Array.isArray(attrClass)) {
    classes.push(...attrClass.map((value) => String(value)))
  }
  else if (attrClass && typeof attrClass === 'object') {
    classes.push(
      ...Object.entries(attrClass)
        .filter(([, value]) => Boolean(value))
        .map(([key]) => key)
    )
  }

  return classes
})

const label = props.label
const color = props.color
const trailingIcon = props.trailingIcon
const variant = props.variant
const size = props.size
</script>
