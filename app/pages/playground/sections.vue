<template>
  <div class="space-y-16 pb-16">
    <BaseSection id="structural-overview" padding="tight" variant="gradient">
      <template #background>
        <BackgroundVariant variant="hero" tone="primary" align="top" intensity="strong" />
      </template>
      <SectionHeader
        eyebrow="Playground"
        title="Structural Shared Components"
        description="Snapshot of the shared building blocks introduced in Task 4. These demos use mocked content so you can validate spacing, typography, and responsive behaviour before wiring real data."
        align="center"
        icon="i-lucide-cpu"
      />
    </BaseSection>

    <BaseSection id="feature-grid" variant="gradient">
      <template #background>
        <BackgroundVariant tone="accent" />
      </template>
      <SectionHeader
        eyebrow="Feature grid"
        title="Reusable feature presentation"
        description="Ideal for home and service pages when highlighting pillars, benefits, or offerings."
        icon="i-lucide-panels-top-left"
      />
      <FeatureGrid :features="features" />
    </BaseSection>

    <BaseSection id="metrics" variant="muted">
      <template #background>
        <BackgroundVariant variant="process" tone="accent" />
      </template>
      <SectionHeader
        eyebrow="Metric list"
        title="Call out proof points"
        description="Balance hero stats across themes with automatic grid behaviour."
        icon="i-lucide-gauge"
      />
      <MetricList :metrics="metrics" :columns="3" />
    </BaseSection>

    <BaseSection id="bullet-list">
      <template #background>
        <BackgroundVariant tone="neutral" align="bottom" />
      </template>
      <SectionHeader
        eyebrow="Bullet list"
        title="Condense dense copy"
        description="Swap existing list-check markup for a semantic bullet list with icons."
        icon="i-lucide-list-tree"
      />
      <BulletList :items="bulletItems" />
    </BaseSection>

    <BaseSection id="content-grid" variant="accent" padding="tight">
      <template #background>
        <BackgroundVariant tone="primary" align="top" intensity="soft" />
      </template>
      <SectionHeader
        eyebrow="Content grid"
        title="Flexible layout wrapper"
        description="Use with cards, content blocks, or testimonials when you only need responsive columns."
        icon="i-lucide-grid"
      />
      <ContentGrid :columns="3" gap="tight">
        <UCard
          v-for="card in sampleCards"
          :key="card.title"
          :ui="cardUi"
          :style="cardStyle"
        >
          <div class="flex h-full flex-col gap-4">
            <div class="flex items-center gap-3" :style="headerStyle">
              <span
                class="flex h-10 w-10 items-center justify-center rounded-2xl border"
                :style="iconStyle"
              >
                <UIcon :name="card.icon" class="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 class="text-xl font-semibold" :style="titleStyle">{{ card.title }}</h3>
            </div>
            <p class="text-base" :style="descriptionStyle">{{ card.description }}</p>
            <BulletList :items="card.points" class="mt-auto" />
          </div>
        </UCard>
      </ContentGrid>
    </BaseSection>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BackgroundVariant from '~/components/ui/BackgroundVariant.vue'
import BaseSection from '~/components/shared/BaseSection.vue'
import SectionHeader from '~/components/shared/SectionHeader.vue'
import FeatureGrid from '~/components/shared/FeatureGrid.vue'
import MetricList from '~/components/shared/MetricList.vue'
import BulletList from '~/components/shared/BulletList.vue'
import ContentGrid from '~/components/shared/ContentGrid.vue'

useSeoMeta({
  title: 'Structural Components Playground',
  description: 'Demos for BaseSection, SectionHeader, ContentGrid, FeatureGrid, MetricList, and BulletList components.'
})

const { surfaceColor, borderColor, shadow, gradient, tone, textColor, tokens, mode } = useUiTokens()

const features = [
  {
    title: 'Production-grade audits',
    description: 'Security, performance, and code quality checks bundled into a single report.',
    meta: 'Artifact ready',
    icon: 'i-lucide-shield-check',
    cta: 'View services',
    to: '/services'
  },
  {
    title: 'Nuxt UI foundation',
    description: 'Shared tokens and primitives keep layout work fast and consistent.',
    meta: 'Tokens wired',
    icon: 'i-lucide-layers'
  },
  {
    title: 'Localization ready',
    description: 'Structure content so the i18n rollout only swaps strings, not markup.',
    meta: 'i18n friendly',
    icon: 'i-lucide-languages'
  }
]

const metrics = [
  {
    label: 'Stability rating',
    value: '99.9%',
    description: 'CI + QA coverage for production migrations.',
    icon: 'i-lucide-activity',
    tone: 'primary'
  },
  {
    label: 'Team experience',
    value: '12yr',
    description: 'Average seniority across the engineering team.',
    icon: 'i-lucide-users-round',
    tone: 'secondary'
  },
  {
    label: 'Launch cadence',
    value: '2x',
    description: 'Faster rollouts after vibe coding cleanup.',
    icon: 'i-lucide-rocket',
    tone: 'accent'
  }
]

const bulletItems = [
  {
    label: 'Highlight pain points without duplicating markup',
    description: 'Standardized structure keeps reflections aligned across services.',
    icon: 'i-lucide-sparkles'
  },
  {
    label: 'Keep icons consistent with Nuxt UI + Lucide',
    description: 'Bundled iconify JSON ensures offline builds match production.',
    icon: 'i-lucide-scan-face'
  },
  {
    label: 'Supports per-item overrides when you need variety',
    description: 'Each entry can swap glyphs or copy for localized nuance.',
    icon: 'i-lucide-shuffle'
  }
]

const sampleCards = [
  {
    title: 'Migration checklist',
    description: 'Track component adoption across home and service pages.',
    icon: 'i-lucide-clipboard-check',
    points: [
      'Audit legacy CSS usage',
      'Swap markup to BaseSection + SectionHeader',
      'Capture deltas in docs'
    ]
  },
  {
    title: 'Content reuse',
    description: 'Extract shared arrays into composables for localization.',
    icon: 'i-lucide-folders',
    points: [
      'Map list structures in discovery doc',
      'Move sources closer to COPY docs',
      'Leave TODOs for i18n handoff'
    ]
  },
  {
    title: 'Visual QA',
    description: 'Run Playwright MCP to snapshot new sections in both themes.',
    icon: 'i-lucide-camera',
    points: [
      'Update baselines before refactors',
      'Attach screenshots to docs/qa',
      'Note responsive quirks early'
    ]
  }
]

const cardStyle = computed(() => ({
  backgroundImage: gradient('accent'),
  backgroundColor: surfaceColor('overlay'),
  borderColor: borderColor('strong'),
  boxShadow: shadow('strong'),
  color: textColor('inverse'),
  '--playground-hover-border': borderColor('accent'),
  '--playground-hover-shadow': shadow('strong'),
}))

const headerStyle = computed(() => ({
  color: textColor('inverse'),
}))

const iconStyle = computed(() => {
  const accentTone = tone('accent')

  return {
    backgroundColor: accentTone.background,
    borderColor: accentTone.border,
    color: mode.value === 'dark' ? textColor('inverse') : tokens.value.text.onAccent,
    boxShadow: shadow('glow'),
  }
})

const titleStyle = computed(() => ({
  color: textColor('inverse'),
}))

const descriptionStyle = computed(() => ({
  color: textColor('muted'),
}))

const cardUi = {
  base: 'group relative overflow-hidden rounded-3xl border p-8 transition duration-300 hover:[border-color:var(--playground-hover-border)] hover:[box-shadow:var(--playground-hover-shadow)]',
  body: 'flex h-full flex-col gap-4 p-0',
  header: 'p-0',
  footer: 'p-0'
} as const
</script>
