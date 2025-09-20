<template>
  <div class="flex flex-col">
    <BaseSection id="services-hero" background="gradient">
      <SectionHeader :title="hero.title" :subhead="hero.lead" align="center" />
      <ServiceShowcase :services="serviceCards" align="center" />
    </BaseSection>

    <BaseSection id="services-callouts" background="surface">
      <div class="grid gap-6 md:grid-cols-2">
        <UCard :ui="cardUi">
          <template #header>
            <h3 class="text-xl font-semibold text-slate-50">{{ callouts.primary.title }}</h3>
          </template>
          <p class="text-sm text-slate-300">{{ callouts.primary.body }}</p>
          <AppLinkButton :to="resolveServiceLink(callouts.primary.cta)" intent="primary" class="mt-6 w-full justify-center">
            {{ callouts.primary.cta.label }}
          </AppLinkButton>
        </UCard>
        <UCard :ui="cardUi">
          <template #header>
            <h3 class="text-xl font-semibold text-slate-50">{{ callouts.secondary.title }}</h3>
          </template>
          <p class="text-sm text-slate-300">{{ callouts.secondary.body }}</p>
          <AppLinkButton :to="resolveLink(callouts.secondary.cta)" intent="outline" class="mt-6 w-full justify-center">
            {{ callouts.secondary.cta.label }}
          </AppLinkButton>
        </UCard>
      </div>
    </BaseSection>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { t } = useI18n()
const localePath = useLocalePath()

useSeoDefaults({
  title: t('services.meta.title'),
  description: t('services.meta.description')
})

const servicesCopy = useServicesContent()

const hero = computed(() => servicesCopy.value?.hero ?? { title: '', lead: '' })
const callouts = computed(() =>
  servicesCopy.value?.callouts ?? {
    primary: { title: '', body: '', cta: {} },
    secondary: { title: '', body: '', cta: {} }
  }
)

const cardUi = {
  base: 'border border-slate-800/70 bg-slate-900/60 backdrop-blur rounded-3xl h-full',
  body: 'p-6 sm:p-8'
}

const serviceCards = computed(() =>
  (servicesCopy.value?.list ?? []).map((service) => ({
    title: service.title,
    description: service.summary,
    focus: service.focus,
    cta: {
      label: service.cta,
      to: localePath(`/services/${service.slug}`)
    }
  }))
)

const resolveServiceLink = (cta: { slug?: string; to?: string }) => {
  if (!cta) {
    return undefined
  }
  if (cta.slug) {
    return localePath(`/services/${cta.slug}`)
  }
  if (cta.to) {
    return resolveLink(cta)
  }
  return undefined
}

const resolveLink = (cta: { to?: string }) => (cta?.to ? localePath(cta.to) : undefined)
</script>
