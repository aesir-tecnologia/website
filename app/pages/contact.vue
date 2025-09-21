<template>
  <div class="space-y-20 pb-20">
    <BaseSection id="contact-hero" variant="gradient" padding="relaxed" width="wide">
      <template #background>
        <BackgroundVariant variant="hero" tone="indigo" align="top" intensity="strong" />
      </template>
      <SectionHeader
        eyebrow="Contact"
        title="Let's build something great together"
        description="Ready to turn your idea into reality? Tell us about your project and we'll share how the Aesir team can help."
        align="center"
      >
        <template #actions>
          <AppLinkButton
            href="mailto:hello@aesir.dev"
            trailing-icon="i-lucide-mail"
            variant="ghost"
            size="sm"
          >
            hello@aesir.dev
          </AppLinkButton>
        </template>
      </SectionHeader>
    </BaseSection>

    <BaseSection id="contact-overview" variant="muted" width="wide">
      <ContentGrid :columns="2" gap="loose">
        <UCard :ui="cardUi">
          <div class="space-y-4">
            <Tag tone="primary">Project inquiry</Tag>
            <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-50">What to share</h2>
            <p class="text-sm text-slate-600 dark:text-slate-300">
              Share the essentials so we can prepare a tailored proposal.
            </p>
            <BulletList :items="projectInquiryItems" icon="i-lucide-check-circle-2" />
          </div>
        </UCard>

        <UCard :ui="cardUi">
          <div class="space-y-4">
            <Tag tone="accent">Engagement models</Tag>
            <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-50">How we collaborate</h2>
            <ul class="space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              <li v-for="model in engagementModels" :key="model.title" class="space-y-1">
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
            <Tag tone="neutral">Prefer to talk directly?</Tag>
            <h3 class="text-2xl font-semibold text-slate-900 dark:text-slate-50">Schedule a consultation</h3>
            <p class="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              We can walk through your product goals, current stack, and success criteria in a 30-minute session.
            </p>
            <AppButton :to="ctaLink" size="lg">
              Schedule a call
            </AppButton>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              You can also email
              <AppLinkButton href="mailto:hello@aesir.dev" variant="link" size="sm">
                hello@aesir.dev
              </AppLinkButton>
              with availability.
            </p>
          </div>
        </UCard>
      </ContentGrid>
    </BaseSection>

    <BaseSection id="schedule" variant="default" width="narrow">
      <UCard :ui="cardUi">
        <div class="space-y-4">
          <Tag tone="primary">Need a calendar hold?</Tag>
          <h3 class="text-xl font-semibold text-slate-900 dark:text-slate-50">Share times that work for you</h3>
          <p class="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Send a calendar invite to
            <AppLinkButton href="mailto:hello@aesir.dev" variant="link" size="sm">
              hello@aesir.dev
            </AppLinkButton>
            or drop us a note with your availability. We'll confirm within one business day.
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

useSeoMeta({
  title: 'Contact | Aesir Tecnologia',
  description: 'Reach out to Aesir Tecnologia to discuss vibe coding cleanup, custom web and mobile development, and staff augmentation projects.'
})

const projectInquiry = [
  'Project type and scope',
  'Timeline and budget targets',
  'Technical requirements or constraints',
  'Primary business goals for the work'
]

const engagementModels = [
  { title: 'Project-based', description: 'Fixed scope with defined deliverables when you need predictable outcomes.' },
  { title: 'Retainer', description: 'Ongoing development and support to iteratively grow your product.' },
  { title: 'Consultation', description: 'Architecture reviews, roadmap planning, and guidance for internal teams.' }
]

const projectTypes = [
  'Vibe Coding Cleanup',
  'Custom Web Development',
  'Mobile Development',
  'Game Development',
  'Staff Augmentation',
  'Consultation'
]

const projectInquiryItems = computed(() => projectInquiry.map((item) => ({ label: item })))

const formTitle = 'Send project details'
const formDescription = 'Share context about your product so we can align on outcomes, scope, and the team you need.'
const ctaLink = '#schedule'

const cardUi = {
  base: 'relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-lg shadow-slate-200/60 dark:border-slate-900/70 dark:bg-slate-950/50 dark:shadow-slate-950/60',
  body: 'space-y-4 p-0'
} as const

const ctaCardUi = {
  base: 'relative overflow-hidden rounded-3xl border border-primary-300/40 bg-gradient-to-b from-white via-primary-50/60 to-white p-8 shadow-xl shadow-primary-200/40 dark:border-primary-500/30 dark:from-slate-950/70 dark:via-slate-950/40 dark:to-slate-900/40 dark:shadow-primary-900/30',
  body: 'space-y-4 p-0'
} as const
</script>
