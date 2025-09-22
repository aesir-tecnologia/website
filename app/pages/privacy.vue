<template>
  <div class="space-y-16 pb-24">
    <BaseSection variant="gradient" padding="relaxed" width="wide">
      <SectionHeader
        level="h1"
        align="center"
        :eyebrow="hero.eyebrow"
        :title="hero.title"
        :description="hero.description"
      />
    </BaseSection>

    <BaseSection width="narrow">
      <div class="space-y-10">
        <UCard
          v-for="section in sections"
          :key="section.title"
          :ui="cardUi"
          :style="cardStyle"
        >
          <div class="space-y-4">
            <h2 class="text-2xl font-semibold" :style="headingStyle">{{ section.title }}</h2>
            <p
              v-for="paragraph in section.paragraphs"
              :key="paragraph"
              class="text-base leading-relaxed"
              :style="paragraphStyle"
            >
              {{ paragraph }}
            </p>
          </div>
        </UCard>

        <UCard :ui="cardUi" :style="cardStyle">
          <div class="space-y-4">
            <p class="text-base leading-relaxed" :style="paragraphStyle">
              {{ contact.prompt }}
              <AppLinkButton :href="contactHref" variant="link" size="sm">
                {{ contact.email }}
              </AppLinkButton>
              {{ contact.suffix }}
            </p>
            <AppButton :href="contactHref" external size="md" icon="i-lucide-mail">
              {{ contact.ctaLabel }}
            </AppButton>
          </div>
        </UCard>
      </div>
    </BaseSection>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import AppButton from '~/components/ui/AppButton.vue'
import AppLinkButton from '~/components/ui/AppLinkButton.vue'
import BaseSection from '~/components/shared/BaseSection.vue'
import SectionHeader from '~/components/shared/SectionHeader.vue'
import { useLegalContent } from '~/composables/useLegalContent'

const { surfaceColor, borderColor, shadow, textColor } = useUiTokens()

const content = useLegalContent('privacy')

useSeoMeta({
  title: content.seo.title,
  description: content.seo.description
})

const hero = content.hero
const sections = content.sections
const contact = content.contact

const contactHref = computed(() => `mailto:${contact.email}`)

const cardStyle = computed(() => ({
  backgroundColor: surfaceColor('elevated'),
  borderColor: borderColor('soft'),
  boxShadow: shadow('soft'),
  color: textColor('primary'),
}))

const headingStyle = computed(() => ({
  color: textColor('primary'),
}))

const paragraphStyle = computed(() => ({
  color: textColor('muted'),
}))

const cardUi = {
  base: 'relative overflow-hidden rounded-3xl border p-8 transition-colors duration-300',
  body: 'space-y-4 p-0'
} as const
</script>
