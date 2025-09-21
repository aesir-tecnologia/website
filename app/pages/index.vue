<template>
  <div class="homepage">
    <section id="hero" class="hero">
      <div class="container hero-content">
        <div class="hero-text">
          <p class="eyebrow">{{ hero.eyebrow }}</p>
          <h1>{{ hero.headline }}</h1>
          <p class="lead">{{ hero.subheadline }}</p>
          <div class="hero-actions">
            <NuxtLink :to="hero.primaryCta.to" class="btn btn--primary">{{ hero.primaryCta.label }}</NuxtLink>
            <NuxtLink :to="hero.secondaryCta.to" class="btn btn--ghost">{{ hero.secondaryCta.label }}</NuxtLink>
          </div>
          <ul class="hero-points">
            <li v-for="point in hero.points" :key="point">{{ point }}</li>
          </ul>
        </div>
        <div class="hero-card">
          <h2 class="hero-card__title">{{ hero.highlightsTitle }}</h2>
          <ul>
            <li v-for="item in hero.highlights" :key="item.title">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section id="problem" class="section">
      <div class="container section-inner">
        <div class="section-header">
          <h2>{{ problem.headline }}</h2>
          <p class="section-subhead">{{ problem.description }}</p>
        </div>
        <div class="grid grid--two">
          <div>
            <h3>{{ problem.challengeTitle }}</h3>
            <ul class="list-check">
              <li v-for="challenge in problem.challenges" :key="challenge">{{ challenge }}</li>
            </ul>
          </div>
          <div>
            <h3>{{ problem.impactTitle }}</h3>
            <ul class="list-check">
              <li v-for="impact in problem.impacts" :key="impact">{{ impact }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="section section--gradient">
      <div class="container section-inner">
        <div class="section-header">
          <h2>{{ services.headline }}</h2>
        </div>
        <div class="grid grid--three">
          <article v-for="service in services.items" :key="service.name" class="card service-card">
            <p class="service-focus">{{ service.focus }}</p>
            <h3>{{ service.name }}</h3>
            <p class="service-description">{{ service.description }}</p>
            <NuxtLink :to="service.to" class="card-cta">{{ service.cta }}</NuxtLink>
          </article>
        </div>
      </div>
    </section>

    <section id="process" class="section">
      <div class="container section-inner">
        <div class="section-header">
          <h2>{{ cleanup.headline }}</h2>
          <p class="section-subhead">{{ cleanup.description }}</p>
        </div>
        <div class="grid grid--four">
          <article v-for="step in cleanup.steps" :key="step.title" class="card card--muted">
            <h3>{{ step.title }}</h3>
            <ul>
              <li v-for="item in step.items" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>
        <div class="card card--highlight">
          <h3>{{ cleanup.highlight.title }}</h3>
          <ul>
            <li v-for="item in cleanup.highlight.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="technology" class="section section--dark">
      <div class="container section-inner">
        <div class="section-header section-header--center">
          <h2>{{ techStack.headline }}</h2>
          <p class="section-subhead">{{ techStack.description }}</p>
        </div>
        <div class="logo-carousel" aria-label="Technology stack logos">
          <div class="logo-track" :style="trackStyle">
            <div v-for="(logo, index) in carouselLogos" :key="`${logo}-${index}`" class="logo-item">{{ logo }}</div>
          </div>
        </div>
      </div>
    </section>

    <section id="why-us" class="section">
      <div class="container section-inner">
        <div class="section-header section-header--center">
          <h2>{{ reasons.headline }}</h2>
        </div>
        <div class="grid grid--four">
          <article v-for="reason in reasons.items" :key="reason.title" class="card card--muted">
            <h3>{{ reason.title }}</h3>
            <p>{{ reason.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="results" class="section section--testimonial">
      <div class="container section-inner">
        <div class="testimonial">
          <h2>{{ testimonial.headline }}</h2>
          <blockquote>
            {{ testimonial.quote }}
          </blockquote>
          <p class="testimonial-author">— {{ testimonial.author }}</p>
        </div>
      </div>
    </section>

    <section id="get-started" class="section section--cta">
      <div class="container section-inner">
        <div class="section-header section-header--center">
          <h2>{{ finalCta.headline }}</h2>
        </div>
        <div class="grid grid--three">
          <article v-for="cta in finalCta.items" :key="cta.title" class="card card--bright">
            <h3>{{ cta.title }}</h3>
            <p>{{ cta.description }}</p>
            <NuxtLink :to="cta.to" class="card-cta">{{ cta.cta }}</NuxtLink>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useHomepageContent } from '~/composables/useHomepageContent'

const homepage = useHomepageContent()

useSeoMeta({
  title: homepage.seo.title,
  description: homepage.seo.description
})

const { hero, problem, services, cleanup, techStack, reasons, testimonial, finalCta } = homepage

const carouselLogos = computed(() => [...techStack.logos, ...techStack.logos])

const trackStyle = computed(() => ({
  '--item-count': String(carouselLogos.value.length)
}))
</script>
