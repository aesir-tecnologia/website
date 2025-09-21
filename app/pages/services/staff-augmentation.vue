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
              <li v-for="item in overview.benefits" :key="item">{{ item }}</li>
            </ul>
          </article>
          <article class="card card--muted">
            <h2>Developer Expertise</h2>
            <ul>
              <li v-for="expertise in overview.expertiseAreas" :key="expertise.title">
                <strong>{{ expertise.title }}:</strong> {{ expertise.items }}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--gradient">
      <div class="container section-inner">
        <div class="section-header">
          <h2>{{ engagementModels.headline }}</h2>
        </div>
        <div class="grid grid--three">
          <article v-for="model in engagementModels.items" :key="model.title" class="card card--muted">
            <h3>{{ model.title }}</h3>
            <p>{{ model.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container section-inner">
        <div class="grid grid--two">
          <article class="card card--bright">
            <h3>{{ reasons.title }}</h3>
            <ul>
              <li v-for="reason in reasons.items" :key="reason">{{ reason }}</li>
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

const service = useServiceContent('staff-augmentation')

useSeoMeta({
  title: service.seo.title,
  description: service.seo.description
})

const hero = service.hero
const overview = service.overview
const engagementModels = service.engagementModels
const reasons = service.reasons
const messaging = service.messaging
const ctas = service.ctas

const ctaSectionId = 'contact'

const cardClass = (card: (typeof ctas.cards)[number]) =>
  card.title === 'Request Talent' ? 'card--bright' : 'card--muted'
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
