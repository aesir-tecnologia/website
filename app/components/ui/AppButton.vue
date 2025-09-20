<template>
  <UButton v-bind="buttonAttrs" :class="buttonClasses">
    <slot>{{ label }}</slot>
  </UButton>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

const props = withDefaults(defineProps<{
  label?: string
  to?: string | RouteLocationRaw
  href?: string
  external?: boolean
  variant?: 'solid' | 'soft' | 'outline' | 'ghost' | 'link'
  color?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  icon?: string
  trailingIcon?: string
  block?: boolean
  loading?: boolean
  disabled?: boolean
}>(), {
  label: undefined,
  to: undefined,
  href: undefined,
  external: false,
  variant: 'solid',
  color: 'primary',
  size: 'md',
  icon: undefined,
  trailingIcon: undefined,
  block: false,
  loading: false,
  disabled: false,
})

const attrs = useAttrs()

const buttonAttrs = computed(() => ({
  ...attrs,
  to: props.href ? undefined : props.to,
  href: props.href,
  external: props.external,
  variant: props.variant,
  color: props.color,
  size: props.size,
  icon: props.icon,
  trailingIcon: props.trailingIcon,
  block: props.block,
  loading: props.loading,
  disabled: props.disabled,
}))

const buttonClasses = computed(() => ([
  'app-button font-semibold tracking-tight',
  props.block ? 'w-full' : null,
]))
</script>
