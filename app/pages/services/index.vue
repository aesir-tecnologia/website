<template>
  <div class="page">
    <section class="section hero">
      <div class="container section-inner">
        <div class="section-header section-header--center">
          <h1>{{ hero.title }}</h1>
          <p class="section-subhead">{{ hero.subheading }}</p>
        </div>
        <div class="grid grid--three">
          <article v-for="service in services" :key="service.name" class="card card--bright">
            <p class="service-focus">{{ service.focus }}</p>
            <h2>{{ service.name }}</h2>
            <p>{{ service.summary }}</p>
            <NuxtLink :to="service.to" class="card-cta">{{ service.cta }}</NuxtLink>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--gradient">
      <div class="container section-inner">
        <div class="grid grid--two">
          <article v-for="card in highlights" :key="card.title" class="card card--muted">
            <h3>{{ card.title }}</h3>
            <p>{{ card.description }}</p>
            <NuxtLink :to="card.to" class="card-cta">{{ card.cta }}</NuxtLink>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useServicesOverviewContent } from '~/composables/useServicesContent'

const overview = useServicesOverviewContent()

useSeoMeta({
  title: overview.seo.title,
  description: overview.seo.description
})

const hero = overview.hero
const services = overview.services
const highlights = overview.highlights
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding-bottom: 6rem;
}

h1 {
  font-size: clamp(2.5rem, 3.5vw, 3.25rem);
  margin: 0;
}
</style>
