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
        <div class="grid grid--two">
          <article class="card card--muted">
            <h2>{{ overview.title }}</h2>
            <p>{{ overview.description }}</p>
            <ul>
              <li v-for="item in overview.offerings" :key="item">{{ item }}</li>
            </ul>
          </article>
          <article class="card card--muted">
            <h2>Our Process</h2>
            <ul>
              <li v-for="step in overview.process" :key="step.title">
                <strong>{{ step.title }}:</strong> {{ step.description }}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--gradient">
      <div class="container section-inner">
        <div class="grid grid--two">
          <article class="card card--bright">
            <h3>{{ technology.title }}</h3>
            <ul>
              <li v-for="tech in technology.items" :key="tech">{{ tech }}</li>
            </ul>
          </article>
          <article class="card card--muted">
            <h3>{{ messaging.title }}</h3>
            <ul>
              <li v-for="message in messaging.items" :key="message">{{ message }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section :id="ctaSectionId" class="section">
      <div class="container section-inner">
        <div class="section-header section-header--center">
          <h2>{{ ctas.headline }}</h2>
          <p class="section-subhead">{{ ctas.description }}</p>
        </div>
        <div class="grid grid--two">
          <article v-for="card in ctas.cards" :key="card.title" class="card" :class="cardClass(card)">
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
import { useServiceContent } from '~/composables/useServicesContent'

const service = useServiceContent('mobile-development')

useSeoMeta({
  title: service.seo.title,
  description: service.seo.description
})

const hero = service.hero
const overview = service.overview
const technology = service.technology
const messaging = service.messaging
const ctas = service.ctas

const ctaSectionId = 'contact'

const cardClass = (card: (typeof ctas.cards)[number]) =>
  card.title === 'Project Kickoff' ? 'card--bright' : 'card--muted'
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

.card ul {
  margin: 0;
  padding-left: 1.25rem;
  color: rgba(226, 232, 240, 0.85);
}
</style>
