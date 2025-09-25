<template>
  <div class="flex flex-col">
    <HeroSection
      id="hero"
      :eyebrow="hero.eyebrow"
      :title="hero.headline"
      :description="hero.subheadline"
      :points="hero.points"
      :primary-cta="hero.primaryCta"
      :secondary-cta="hero.secondaryCta"
      :highlights="hero.highlights"
      :highlight-title="hero.highlightsTitle"
    />

    <ProblemSolutionSection
      id="problem"
      :title="problem.headline"
      :description="problem.description"
      :challenge-title="problem.challengeTitle"
      :impact-title="problem.impactTitle"
      :challenges="problem.challenges"
      :impacts="problem.impacts"
    />

    <ServiceShowcase
      id="services"
      :title="services.headline"
      :services="serviceCards"
    />

    <ProcessTimeline
      id="process"
      :title="cleanup.headline"
      :description="cleanup.description"
      :steps="cleanup.steps"
      :highlight="processHighlight"
    />

    <TechnologyMarquee
      id="technology"
      :title="techStack.headline"
      :description="techStack.description"
      :items="techStack.logos"
    />

    <SocialProofSection
      id="why-us"
      :title="reasons.headline"
      :features="differentiators"
      :testimonial="testimonial"
    />

    <BaseSection id="get-started" variant="accent" padding="relaxed">
      <div class="space-y-10">
        <SectionHeader
          align="center"
          :title="finalCta.headline"
        />
        <ContentGrid :columns="3">
          <UCard
            v-for="cta in finalCtaCards"
            :key="cta.title"
            :ui="finalCtaCardUi"
            :style="finalCtaCardStyle"
          >
            <div class="flex h-full flex-col gap-5">
              <div class="space-y-3">
                <h3 class="text-2xl font-semibold" :style="finalCtaTitleStyle">{{ cta.title }}</h3>
                <p class="text-base leading-relaxed" :style="finalCtaDescriptionStyle">{{ cta.description }}</p>
              </div>
              <AppButton :to="cta.to" size="md" class="mt-auto">{{ cta.cta }}</AppButton>
            </div>
          </UCard>
        </ContentGrid>
      </div>
    </BaseSection>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import HeroSection from '~/components/modules/HeroSection.vue'
import ProblemSolutionSection from '~/components/modules/ProblemSolutionSection.vue'
import ServiceShowcase from '~/components/modules/ServiceShowcase.vue'
import ProcessTimeline from '~/components/modules/ProcessTimeline.vue'
import TechnologyMarquee from '~/components/modules/TechnologyMarquee.vue'
import SocialProofSection from '~/components/modules/SocialProofSection.vue'
import BaseSection from '~/components/shared/BaseSection.vue'
import SectionHeader from '~/components/shared/SectionHeader.vue'
import ContentGrid from '~/components/shared/ContentGrid.vue'
import AppButton from '~/components/ui/AppButton.vue'
import { useHomepageContent } from '~/composables/useHomepageContent'

const homepage = useHomepageContent()

useSeoMeta({
  title: homepage.seo.title,
  description: homepage.seo.description
})

const { hero, problem, services, cleanup, techStack, reasons, testimonial, finalCta } = homepage

type ServiceCard = InstanceType<typeof ServiceShowcase>['$props']['services'][number]
const serviceCards: ServiceCard[] = services.items.map((service) => ({
  title: service.name,
  description: service.description,
  to: service.to,
  cta: service.cta,
  focus: service.focus
}))

type Differentiator = InstanceType<typeof SocialProofSection>['$props']['features'][number]
const differentiators: Differentiator[] = reasons.items.map((reason) => ({
  title: reason.title,
  description: reason.description
}))

type ProcessHighlight = NonNullable<InstanceType<typeof ProcessTimeline>['$props']['highlight']>
const processHighlight: ProcessHighlight = {
  title: cleanup.highlight.title,
  items: cleanup.highlight.items,
  eyebrow: 'Perfect for'
}

type FinalCtaCard = {
  title: string
  description: string
  cta: string
  to: string
}

const finalCtaCards: FinalCtaCard[] = finalCta.items.map((cta) => ({
  title: cta.title,
  description: cta.description,
  cta: cta.cta,
  to: cta.to
}))

const { surfaceColor, borderColor, shadow, textColor } = useUiTokens()

const finalCtaCardStyle = computed(() => ({
  backgroundColor: surfaceColor('elevated'),
  borderColor: borderColor('soft'),
  boxShadow: shadow('soft'),
  color: textColor('primary'),
}))

const finalCtaTitleStyle = computed(() => ({
  color: textColor('primary'),
}))

const finalCtaDescriptionStyle = computed(() => ({
  color: textColor('muted'),
}))

const finalCtaCardUi = {
  base: 'relative overflow-hidden rounded-3xl border p-8 transition-colors duration-300',
  body: 'h-full p-0'
} as const
</script>
