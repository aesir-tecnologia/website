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
            <h2>{{ problems.primary.title }}</h2>
            <p>{{ problems.primary.description }}</p>
            <ul>
              <li v-for="item in problems.primary.items" :key="item">{{ item }}</li>
            </ul>
          </article>
          <article class="card card--muted">
            <h2>{{ problems.secondary.title }}</h2>
            <ul>
              <li v-for="issue in problems.secondary.items" :key="issue">{{ issue }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--gradient">
      <div class="container section-inner">
        <div class="section-header">
          <h2>{{ process.headline }}</h2>
        </div>
        <div class="grid grid--three">
          <article v-for="phase in process.primaryPhases" :key="phase.title" class="card card--muted">
            <h3>{{ phase.title }}</h3>
            <ul>
              <li v-for="item in phase.items" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>
        <div class="grid grid--three">
          <article v-for="phase in process.extendedPhases" :key="phase.title" class="card card--muted">
            <h3>{{ phase.title }}</h3>
            <ul>
              <li v-for="item in phase.items" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container section-inner">
        <div class="grid grid--two">
          <article class="card card--bright">
            <h3>{{ deliverables.title }}</h3>
            <ul>
              <li v-for="deliverable in deliverables.items" :key="deliverable">{{ deliverable }}</li>
            </ul>
          </article>
          <article class="card card--highlight">
            <h3>{{ audiences.title }}</h3>
            <ul>
              <li v-for="audience in audiences.items" :key="audience">{{ audience }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--testimonial">
      <div class="container section-inner">
        <div class="grid grid--three">
          <article v-for="value in values.valueProps" :key="value" class="card card--muted">
            <p>{{ value }}</p>
          </article>
        </div>
        <div class="grid grid--three">
          <article v-for="message in values.targetMessages" :key="message" class="card card--muted">
            <p>{{ message }}</p>
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

const service = useServiceContent('vibe-coding-cleanup')

useSeoMeta({
  title: service.seo.title,
  description: service.seo.description
})

const hero = service.hero
const problems = service.problems
const process = service.process
const deliverables = service.deliverables
const audiences = service.audiences
const values = service.values
const ctas = service.ctas

const ctaSectionId = 'contact'

const cardClass = (card: (typeof ctas.cards)[number]) =>
  card.title === 'Request an Audit' ? 'card--bright' : 'card--muted'
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
