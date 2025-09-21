<template>
  <div class="page">
    <section class="section hero">
      <div class="container section-inner">
        <div class="section-header">
          <h1>{{ hero.title }}</h1>
          <p class="section-subhead">{{ hero.subheading }}</p>
          <div class="hero-actions">
            <NuxtLink :to="hero.primaryCta.to" class="btn btn--primary">{{ hero.primaryCta.label }}</NuxtLink>
            <NuxtLink :to="hero.secondaryCta.to" class="btn btn--ghost">{{ hero.secondaryCta.label }}</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container section-inner">
        <article class="card card--muted">
          <h2>{{ mission.title }}</h2>
          <p>{{ mission.description }}</p>
        </article>
      </div>
    </section>

    <section class="section section--gradient">
      <div class="container section-inner">
        <div class="section-header">
          <h2>Our Approach</h2>
        </div>
        <div class="grid grid--four">
          <article v-for="pillar in pillars" :key="pillar.title" class="card card--muted">
            <h3>{{ pillar.title }}</h3>
            <p>{{ pillar.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container section-inner">
        <div class="section-header section-header--center">
          <h2>{{ values.headline }}</h2>
        </div>
        <div class="grid grid--four">
          <article v-for="value in values.items" :key="value.title" class="card card--bright">
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useAboutContent } from '~/composables/useAboutContent'

const content = useAboutContent()

useSeoMeta({
  title: content.seo.title,
  description: content.seo.description
})

const hero = content.hero
const mission = content.mission
const pillars = content.pillars
const values = content.values
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
