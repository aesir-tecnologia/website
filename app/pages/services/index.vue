<template>
  <div class="flex flex-col">
    <ServiceShowcase
      id="services-overview"
      :title="hero.title"
      :description="hero.subheading"
      :services="serviceCards"
      variant="gradient"
      :background="false"
      :columns="3"
    />

    <BaseSection id="services-highlights" variant="muted">
      <FeatureGrid :features="highlightFeatures" :columns="2" />
    </BaseSection>
  </div>
</template>

<script setup lang="ts">
import ServiceShowcase from '~/components/modules/ServiceShowcase.vue'
import BaseSection from '~/components/shared/BaseSection.vue'
import FeatureGrid from '~/components/shared/FeatureGrid.vue'
import { useServicesOverviewContent } from '~/composables/useServicesContent'

const overview = useServicesOverviewContent()

useSeoMeta({
  title: overview.seo.title,
  description: overview.seo.description
})

const hero = overview.hero

const serviceCards = overview.services.map((service) => ({
  title: service.name,
  description: service.summary,
  to: service.to,
  cta: service.cta,
  focus: service.focus
}))

const highlightFeatures = overview.highlights.map((highlight) => ({
  title: highlight.title,
  description: highlight.description,
  to: highlight.to,
  cta: highlight.cta
}))
</script>
