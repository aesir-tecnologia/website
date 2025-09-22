<template>
  <BaseSection :id="id" :variant="variant" padding="default">
    <template v-if="background" #background>
      <BackgroundVariant :tone="backgroundTone" :align="backgroundAlign" />
    </template>
    <div class="space-y-12">
      <SectionHeader
        :eyebrow="eyebrow"
        :title="title"
        :description="description"
        :icon="icon"
        align="center"
      />
      <FeatureGrid :features="features" :columns="columns" :gap="gap">
        <template #footer="{ feature }">
          <AppLinkButton
            v-if="feature.to"
            :to="feature.to"
            size="sm"
            class="mt-auto"
          >
            {{ feature.cta ?? 'Learn more' }}
          </AppLinkButton>
        </template>
      </FeatureGrid>
      <UCard v-if="testimonial" :ui="testimonialUi" :style="testimonialStyle">
        <div class="space-y-4 text-center">
          <UIcon
            name="i-lucide-quote"
            class="mx-auto h-10 w-10"
            :style="quoteIconStyle"
            aria-hidden="true"
          />
          <blockquote class="text-2xl font-medium leading-relaxed" :style="testimonialQuoteStyle">
            {{ testimonial.quote }}
          </blockquote>
          <div class="space-y-1 text-sm" :style="testimonialMetaStyle">
            <p class="font-semibold" :style="testimonialAuthorStyle">{{ testimonial.author }}</p>
            <p v-if="testimonial.role">{{ testimonial.role }}</p>
          </div>
        </div>
      </UCard>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BackgroundVariant from '~/components/ui/BackgroundVariant.vue'
import AppLinkButton from '~/components/ui/AppLinkButton.vue'
import BaseSection from '~/components/shared/BaseSection.vue'
import SectionHeader from '~/components/shared/SectionHeader.vue'
import FeatureGrid from '~/components/shared/FeatureGrid.vue'

type SectionVariant = InstanceType<typeof BaseSection>['$props']['variant']

type SocialFeature = {
  id?: string | number
  title: string
  description?: string
  icon?: string
  meta?: string
  cta?: string
  to?: string
}

type Testimonial = {
  quote: string
  author: string
  role?: string
}

type FeatureGridColumns = InstanceType<typeof FeatureGrid>['$props']['columns']

type FeatureGridGap = InstanceType<typeof FeatureGrid>['$props']['gap']

const props = withDefaults(defineProps<{
  id?: string
  eyebrow?: string
  title: string
  description?: string
  icon?: string
  features: SocialFeature[]
  testimonial?: Testimonial
  columns?: FeatureGridColumns
  gap?: FeatureGridGap
  variant?: SectionVariant
  background?: boolean
  backgroundTone?: InstanceType<typeof BackgroundVariant>['$props']['tone']
  backgroundAlign?: InstanceType<typeof BackgroundVariant>['$props']['align']
}>(), {
  id: undefined,
  eyebrow: undefined,
  description: undefined,
  icon: undefined,
  testimonial: undefined,
  columns: 4,
  gap: 'default',
  variant: 'default',
  background: true,
  backgroundTone: 'accent',
  backgroundAlign: 'top',
})

const features = computed(() => props.features)

const { surfaceColor, borderColor, shadow, textColor, gradient, tokens } = useUiTokens()

const testimonialStyle = computed(() => ({
  backgroundImage: gradient('accent'),
  backgroundColor: surfaceColor('accent'),
  borderColor: borderColor('accent'),
  boxShadow: shadow('strong'),
  color: textColor('inverse'),
}))

const quoteIconStyle = computed(() => ({
  color: tokens.value.text.onAccent,
}))

const testimonialQuoteStyle = computed(() => ({
  color: textColor('inverse'),
}))

const testimonialMetaStyle = computed(() => ({
  color: textColor('muted'),
}))

const testimonialAuthorStyle = computed(() => ({
  color: textColor('inverse'),
}))

const testimonialUi = {
  base: 'relative overflow-hidden rounded-3xl border p-10 transition-colors duration-300',
  body: 'space-y-4 p-0'
} as const

const columns = props.columns
const gap = props.gap
const variant = props.variant
const background = props.background
const id = props.id
const eyebrow = props.eyebrow
const title = props.title
const description = props.description
const icon = props.icon
const testimonial = props.testimonial
const backgroundTone = props.backgroundTone
const backgroundAlign = props.backgroundAlign
</script>
