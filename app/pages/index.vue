<template>
  <div class="flex flex-col">
    <HeroSection
      v-if="hero"
      :eyebrow="hero.eyebrow"
      :title="hero.title"
      :lead="hero.lead"
      :primary-cta="hero.primaryCta"
      :secondary-cta="hero.secondaryCta"
      :proof-points="hero.proofPoints"
      :highlights="hero.highlights"
      :highlight-title="hero.highlightTitle"
    />

    <ProblemSolutionSection
      v-if="problem"
      :eyebrow="problem.eyebrow"
      :title="problem.title"
      :description="problem.description"
      :challenges="problem.challenges"
      :outcomes="problem.outcomes"
      :challenge-title="problem.challengeTitle"
      :outcome-title="problem.outcomeTitle"
    />

    <ServiceShowcase
      v-if="services"
      :eyebrow="services.eyebrow"
      :title="services.title"
      :description="services.description"
      :services="services.items"
      align="center"
    />

    <ProcessTimeline
      v-if="process"
      :eyebrow="process.eyebrow"
      :title="process.title"
      :description="process.description"
      :steps="process.steps"
      :ideal-customers="process.idealCustomers"
      :ideal-title="process.idealTitle"
      background="surface"
    />

    <TechnologyMarquee
      v-if="technology"
      :eyebrow="technology.eyebrow"
      :title="technology.title"
      :description="technology.description"
      :items="technologyItems"
      align="center"
    />

    <BaseSection v-if="advantages" id="why-us" :eyebrow="advantages.eyebrow">
      <div class="space-y-10">
        <SectionHeader :title="advantages.title" :subhead="advantages.description" align="center" />
        <FeatureGrid :features="advantages.items" :columns="4" />
      </div>
    </BaseSection>

    <SocialProofSection
      v-if="socialProof"
      :eyebrow="socialProof.eyebrow"
      :title="socialProof.title"
      :description="socialProof.description"
      :quote="socialProof.quote"
      :attribution="socialProof.attribution"
      :metrics="socialProof.metrics"
      :ctas="socialProof.ctas"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { t } = useI18n()
const localePath = useLocalePath()

useSeoDefaults({
  title: t('homepage.meta.title'),
  description: t('homepage.meta.description')
})

const homepage = useHomepageContent()
const technologyItems = useTechnologyStack()

const localizeLink = <T extends { to?: string | null }>(link?: T | null) => {
  if (!link) {
    return link
  }

  if (!link.to) {
    return link
  }

  const [path, hash] = link.to.split('#')
  const localized = localePath(path)
  return {
    ...link,
    to: hash ? `${localized}#${hash}` : localized
  }
}

const hero = computed(() => {
  const data = homepage.value?.hero
  if (!data) {
    return undefined
  }
  return {
    ...data,
    primaryCta: localizeLink(data.primaryCta),
    secondaryCta: localizeLink(data.secondaryCta)
  }
})

const problem = computed(() => homepage.value?.problem)

const services = computed(() => {
  const data = homepage.value?.services
  if (!data) {
    return undefined
  }

  return {
    ...data,
    items: data.items?.map((item: any) => ({
      ...item,
      cta: localizeLink(item.cta)
    }))
  }
})

const process = computed(() => homepage.value?.process)
const technology = computed(() => homepage.value?.technology)
const advantages = computed(() => homepage.value?.advantages)

const socialProof = computed(() => {
  const data = homepage.value?.socialProof
  if (!data) {
    return undefined
  }

  return {
    ...data,
    ctas: data.ctas?.map((cta: any) => localizeLink(cta))
  }
})
</script>
