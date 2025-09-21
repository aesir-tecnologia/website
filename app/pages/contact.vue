<template>
  <div class="space-y-20 pb-20">
    <BaseSection id="contact-hero" variant="gradient" padding="relaxed" width="wide">
      <template #background>
        <BackgroundVariant variant="hero" tone="indigo" align="top" intensity="strong" />
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
        <UCard :ui="cardUi">
          <div class="space-y-4">
            <Tag tone="primary">{{ projectInquiry.tag }}</Tag>
            <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-50">{{ projectInquiry.title }}</h2>
            <p class="text-sm text-slate-600 dark:text-slate-300">
              {{ projectInquiry.introduction }}
            </p>
            <BulletList :items="projectInquiryItems" icon="i-lucide-check-circle-2" />
          </div>
        </UCard>

        <UCard :ui="cardUi">
          <div class="space-y-4">
            <Tag tone="accent">{{ engagementModels.tag }}</Tag>
            <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-50">{{ engagementModels.title }}</h2>
            <ul class="space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              <li v-for="model in engagementModels.items" :key="model.title" class="space-y-1">
                <p class="font-semibold text-slate-900 dark:text-slate-50">{{ model.title }}</p>
                <p>{{ model.description }}</p>
              </li>
            </ul>
          </div>
        </UCard>
      </ContentGrid>
    </BaseSection>

    <BaseSection id="form" variant="gradient" width="wide">
      <template #background>
        <BackgroundVariant tone="sky" align="center" intensity="default" />
      </template>
      <ContentGrid :columns="2" gap="loose">
        <ContactCard :project-types="projectTypes" :description="formDescription" :title="formTitle" />

        <UCard :ui="ctaCardUi">
          <div class="space-y-4">
            <Tag tone="neutral">{{ consultation.tag }}</Tag>
            <h3 class="text-2xl font-semibold text-slate-900 dark:text-slate-50">{{ consultation.title }}</h3>
            <p class="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {{ consultation.description }}
            </p>
            <AppButton :to="ctaLink" size="lg">
              {{ ctaLabel }}
            </AppButton>
            <p class="text-xs text-slate-500 dark:text-slate-400">
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
      <UCard :ui="cardUi">
        <div class="space-y-4">
          <Tag tone="primary">{{ schedule.tag }}</Tag>
          <h3 class="text-xl font-semibold text-slate-900 dark:text-slate-50">{{ schedule.title }}</h3>
          <p class="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
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

const cardUi = {
  base: 'relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-lg shadow-slate-200/60 dark:border-slate-900/70 dark:bg-slate-950/50 dark:shadow-slate-950/60',
  body: 'space-y-4 p-0'
} as const

const ctaCardUi = {
  base: 'relative overflow-hidden rounded-3xl border border-primary-300/40 bg-gradient-to-b from-white via-primary-50/60 to-white p-8 shadow-xl shadow-primary-200/40 dark:border-primary-500/30 dark:from-slate-950/70 dark:via-slate-950/40 dark:to-slate-900/40 dark:shadow-primary-900/30',
  body: 'space-y-4 p-0'
} as const
</script>
