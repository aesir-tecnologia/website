<template>
  <component :is="tag" :class="listClasses">
    <li
      v-for="item in normalizedItems"
      :key="item.id ?? item.label"
      class="flex items-start gap-4"
    >
      <span
        class="mt-1 flex h-8 w-8 items-center justify-center rounded-2xl border"
        :style="iconStyle"
      >
        <UIcon :name="item.icon ?? icon" class="h-4 w-4" aria-hidden="true" />
      </span>
      <div class="space-y-1">
        <span class="block text-base font-semibold" :style="labelStyle">{{ item.label }}</span>
        <p v-if="item.description" class="text-sm leading-relaxed" :style="descriptionStyle">{{ item.description }}</p>
      </div>
    </li>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type BulletItem =
  | string
  | {
      id?: string | number
      label: string
      description?: string
      icon?: string
    }

type NormalizedBulletItem = {
  id?: string | number
  label: string
  description?: string
  icon?: string
}

const props = withDefaults(defineProps<{
  as?: keyof HTMLElementTagNameMap | string
  items: BulletItem[]
  icon?: string
}>(), {
  as: 'ul',
  icon: 'i-lucide-check'
})

const tag = computed(() => props.as)

const listClasses = computed(() => [
  'space-y-4',
])

const { textColor, gradient, tone, tokens } = useUiTokens()

const iconStyle = computed(() => {
  const accentTone = tone('accent')

  return {
    backgroundImage: gradient('accent'),
    backgroundColor: accentTone.background,
    color: tokens.value.text.onAccent,
    borderColor: accentTone.border,
    boxShadow: tokens.value.accents.glowShadow,
  }
})

const labelStyle = computed(() => ({
  color: textColor('primary'),
}))

const descriptionStyle = computed(() => ({
  color: textColor('muted'),
}))

const normalizedItems = computed<NormalizedBulletItem[]>(() =>
  props.items.map((item) =>
    typeof item === 'string'
      ? { label: item }
      : item
  )
)

const icon = computed(() => props.icon)
</script>
