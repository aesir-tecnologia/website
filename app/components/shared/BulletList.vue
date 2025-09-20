<template>
  <component :is="tag" :class="listClasses">
    <li
      v-for="item in normalizedItems"
      :key="item.id ?? item.label"
      class="flex items-start gap-4"
    >
      <span class="mt-1 flex h-8 w-8 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500/20 via-primary-400/10 to-transparent text-primary-200 shadow-lg shadow-primary-950/30">
        <UIcon :name="item.icon ?? icon" class="h-4 w-4" aria-hidden="true" />
      </span>
      <div class="space-y-1">
        <span class="block text-base font-semibold text-slate-100">{{ item.label }}</span>
        <p v-if="item.description" class="text-sm leading-relaxed text-slate-300">{{ item.description }}</p>
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

const normalizedItems = computed<NormalizedBulletItem[]>(() =>
  props.items.map((item) =>
    typeof item === 'string'
      ? { label: item }
      : item
  )
)

const icon = computed(() => props.icon)
</script>
