<template>
  <ContentGrid :columns="columns" :gap="gap">
    <UCard
      v-for="feature in features"
      :key="feature.id ?? feature.title"
      :ui="cardUi"
      :style="cardStyle"
    >
      <div
        class="pointer-events-none absolute inset-px rounded-[1.4rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        :style="cardHighlightStyle"
      />
      <div class="relative flex h-full flex-col gap-5">
        <div
          v-if="feature.icon"
          class="flex h-12 w-12 items-center justify-center rounded-2xl border"
          :style="iconStyle"
        >
          <UIcon :name="feature.icon" class="h-6 w-6" aria-hidden="true" />
        </div>
        <div class="space-y-3">
          <Tag v-if="feature.meta" tone="primary">{{ feature.meta }}</Tag>
          <h3 class="text-2xl font-semibold" :style="titleStyle">{{ feature.title }}</h3>
          <p v-if="feature.description" class="text-base leading-relaxed" :style="descriptionStyle">{{ feature.description }}</p>
        </div>
        <slot name="footer" :feature="feature">
          <AppLinkButton
            v-if="feature.to"
            :to="feature.to"
            :external="feature.external"
            size="sm"
            class="mt-auto"
          >
            {{ feature.cta ?? 'Learn more' }}
          </AppLinkButton>
        </slot>
      </div>
    </UCard>
  </ContentGrid>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import AppLinkButton from '~/components/ui/AppLinkButton.vue'
import Tag from '~/components/ui/Tag.vue'
import ContentGrid from './ContentGrid.vue'

type Feature = {
  id?: string | number
  title: string
  description?: string
  meta?: string
  icon?: string
  cta?: string
  to?: string
  external?: boolean
}

type FeatureGridGap = 'tight' | 'default' | 'loose'
type FeatureGridColumns = 1 | 2 | 3 | 4

const props = withDefaults(defineProps<{
  features: Feature[]
  gap?: FeatureGridGap
  columns?: FeatureGridColumns
}>(), {
  gap: 'default',
  columns: 3,
})

const features = computed(() => props.features)
const gap = computed(() => props.gap)
const columns = computed(() => props.columns)

const { surfaceColor, borderColor, shadow, gradient, tone, textColor, tokens } = useUiTokens()

const cardStyle = computed(() => ({
  backgroundColor: surfaceColor('elevated'),
  color: textColor('primary'),
  borderColor: borderColor('soft'),
  boxShadow: shadow('soft'),
  backdropFilter: 'blur(12px)',
  '--card-hover-border': borderColor('strong'),
  '--card-hover-shadow': shadow('strong'),
}))

const cardHighlightStyle = computed(() => ({
  backgroundImage: gradient('spotlight'),
  backgroundColor: tokens.value.accents.highlight,
}))

const iconStyle = computed(() => {
  const accentTone = tone('accent')

  return {
    backgroundImage: gradient('accent'),
    backgroundColor: accentTone.background,
    color: tokens.value.text.onAccent,
    borderColor: accentTone.border,
    boxShadow: shadow('glow'),
  }
})

const titleStyle = computed(() => ({
  color: textColor('primary'),
}))

const descriptionStyle = computed(() => ({
  color: textColor('muted'),
}))

const cardUi = {
  base: 'group relative overflow-hidden rounded-3xl border p-8 transition duration-300 hover:[border-color:var(--card-hover-border)] hover:[box-shadow:var(--card-hover-shadow)]',
  body: 'flex h-full flex-col gap-5 p-0',
  footer: 'p-0',
  header: 'p-0'
} as const
</script>
