<template>
  <div class="space-y-20 pb-20">
    <BaseSection id="contact-hero" variant="gradient" padding="relaxed" width="wide">
      <template #background>
        <BackgroundVariant variant="hero" tone="primary" align="top" intensity="strong" />
      </template>
      <SectionHeader
        :eyebrow="hero.eyebrow"
        :title="hero.headline"
        :description="hero.description"
        align="center"
      >
        <template #actions>
          <AppLinkButton
            :href="emailHref"
            trailing-icon="i-lucide-mail"
            variant="ghost"
            size="sm"
          >
            {{ hero.email }}
          </AppLinkButton>
        </template>
      </SectionHeader>
    </BaseSection>

    <BaseSection id="contact-overview" variant="muted" width="wide">
      <ContentGrid :columns="2" gap="loose">
        <UCard :ui="cardUi" :style="cardStyle">
          <div class="space-y-4">
            <Tag tone="primary">{{ projectInquiry.tag }}</Tag>
            <h2 class="text-xl font-semibold" :style="cardTitleStyle">{{ projectInquiry.title }}</h2>
            <p class="text-sm" :style="cardBodyStyle">
              {{ projectInquiry.introduction }}
            </p>
            <BulletList :items="projectInquiryItems" icon="i-lucide-check-circle-2" />
          </div>
        </UCard>

        <UCard :ui="cardUi" :style="cardStyle">
          <div class="space-y-4">
            <Tag tone="accent">{{ engagementModels.tag }}</Tag>
            <h2 class="text-xl font-semibold" :style="cardTitleStyle">{{ engagementModels.title }}</h2>
            <ul class="space-y-3 text-sm leading-relaxed">
              <li v-for="model in engagementModels.items" :key="model.title" class="space-y-1">
                <p class="font-semibold" :style="cardTitleStyle">{{ model.title }}</p>
                <p :style="cardBodyStyle">{{ model.description }}</p>
              </li>
            </ul>
          </div>
        </UCard>
      </ContentGrid>
    </BaseSection>

    <BaseSection id="form" variant="gradient" width="wide">
      <template #background>
        <BackgroundVariant tone="accent" align="center" intensity="default" />
      </template>
      <ContentGrid :columns="2" gap="loose">
        <ContactCard :project-types="projectTypes" :description="formDescription" :title="formTitle" />

        <UCard :ui="ctaCardUi" :style="ctaCardStyle">
          <div class="space-y-4">
            <Tag tone="neutral">{{ consultation.tag }}</Tag>
            <h3 class="text-2xl font-semibold" :style="ctaTitleStyle">{{ consultation.title }}</h3>
            <p class="text-sm leading-relaxed" :style="ctaBodyStyle">
              {{ consultation.description }}
            </p>
            <AppButton :to="ctaLink" size="lg">
              {{ ctaLabel }}
            </AppButton>
            <p class="text-xs" :style="ctaSubtleStyle">
              {{ consultation.emailReminderPrefix }}
              <AppLinkButton :href="emailHref" variant="link" size="sm">
                {{ hero.email }}
              </AppLinkButton>
              {{ consultation.emailReminderSuffix }}
            </p>
          </div>
        </UCard>
      </ContentGrid>
    </BaseSection>

    <BaseSection id="schedule" variant="default" width="narrow">
      <UCard :ui="cardUi" :style="cardStyle">
        <div class="space-y-4">
          <Tag tone="primary">{{ schedule.tag }}</Tag>
          <h3 class="text-xl font-semibold" :style="cardTitleStyle">{{ schedule.title }}</h3>
          <p class="text-sm leading-relaxed" :style="cardBodyStyle">
            {{ schedule.descriptionPrefix }}
            <AppLinkButton :href="emailHref" variant="link" size="sm">
              {{ hero.email }}
            </AppLinkButton>
            {{ schedule.descriptionSuffix }}
          </p>
        </div>
      </UCard>
    </BaseSection>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import AppButton from '~/components/ui/AppButton.vue'
import AppLinkButton from '~/components/ui/AppLinkButton.vue'
import BackgroundVariant from '~/components/ui/BackgroundVariant.vue'
import Tag from '~/components/ui/Tag.vue'
import ContactCard from '~/components/modules/ContactCard.vue'
import BaseSection from '~/components/shared/BaseSection.vue'
import SectionHeader from '~/components/shared/SectionHeader.vue'
import ContentGrid from '~/components/shared/ContentGrid.vue'
import BulletList from '~/components/shared/BulletList.vue'
import { useContactContent } from '~/composables/useContactContent'

const content = useContactContent()

useSeoMeta({
  title: content.seo.title,
  description: content.seo.description
})

const hero = content.hero
const projectInquiry = content.projectInquiry
const engagementModels = content.engagementModels
const form = content.form
const consultation = content.consultation
const schedule = content.schedule

const projectInquiryItems = computed(() => projectInquiry.items.map((item) => ({ label: item })))

const projectTypes = form.projectTypes
const formTitle = form.title
const formDescription = form.description
const ctaLink = consultation.cta.to
const ctaLabel = consultation.cta.label
const emailHref = `mailto:${hero.email}`

const { surfaceColor, borderColor, shadow, textColor, gradient, tokens, mode } = useUiTokens()

const cardStyle = computed(() => ({
  backgroundColor: surfaceColor('elevated'),
  borderColor: borderColor('soft'),
  boxShadow: shadow('soft'),
  color: textColor('primary'),
}))

const cardTitleStyle = computed(() => ({
  color: textColor('primary'),
}))

const cardBodyStyle = computed(() => ({
  color: textColor('muted'),
}))

const cardSubtleStyle = computed(() => ({
  color: textColor('subtle'),
}))

const cardUi = {
  base: 'relative overflow-hidden rounded-3xl border p-8 transition-colors duration-300',
  body: 'space-y-4 p-0'
} as const

const ctaCardStyle = computed(() => ({
  backgroundImage: gradient('accent'),
  backgroundColor: surfaceColor('accent'),
  borderColor: borderColor('accent'),
  boxShadow: shadow('strong'),
  color: mode.value === 'dark' ? textColor('inverse') : tokens.value.text.onAccent,
}))

const ctaTitleStyle = computed(() => ({
  color: mode.value === 'dark' ? textColor('inverse') : tokens.value.text.onAccent,
}))

const ctaBodyStyle = computed(() => ({
  color: mode.value === 'dark' ? textColor('inverse') : tokens.value.text.onAccent,
}))

const ctaSubtleStyle = computed(() => ({
  color: mode.value === 'dark' ? textColor('muted') : tokens.value.text.onAccent,
}))

const ctaCardUi = {
  base: 'relative overflow-hidden rounded-3xl border p-8 transition-colors duration-300',
  body: 'space-y-4 p-0'
} as const
</script>
