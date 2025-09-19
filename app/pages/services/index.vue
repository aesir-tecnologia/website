<template>
  <div class="page">
    <section class="section hero">
      <div class="container section-inner">
        <div class="section-header section-header--center">
          <h1>Services</h1>
          <p class="section-subhead">
            From vibe coding cleanup to full-stack delivery and team scaling, Aesir covers every step between prototype and production.
          </p>
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
          <article class="card card--muted">
            <h3>Vibe Coding Cleanup</h3>
            <p>
              Turn AI-generated MVPs into production-ready applications with security hardening, architecture restructuring, performance tuning, and deployment readiness.
            </p>
            <NuxtLink to="/services/vibe-coding-cleanup" class="card-cta">Audit My App</NuxtLink>
          </article>
          <article class="card card--muted">
            <h3>Technology Expertise</h3>
            <p>
              Multidisciplinary team fluent in Laravel, Vue, React, Node.js, Python, Unity, mobile frameworks, and modern DevOps practices.
            </p>
            <NuxtLink to="/about" class="card-cta">See How We Work</NuxtLink>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Aesir Tecnologia | Services',
  description: 'Explore vibe coding cleanup, custom web development, staff augmentation, mobile development, and game development services from Aesir.'
})

const services = [
  {
    name: 'Vibe Coding Cleanup',
    summary: 'Security audits, architecture restructuring, and performance optimization to turn AI-generated prototypes into investable products.',
    to: '/services/vibe-coding-cleanup',
    cta: 'Audit My Vibe-Coded App',
    focus: 'Primary Focus · 50%'
  },
  {
    name: 'Custom Web Development',
    summary: 'Full-stack applications engineered for scale using Laravel, React, Vue, Node.js, and Python.',
    to: '/services/web-development',
    cta: 'Start Your Web Project',
    focus: 'Custom Solutions · 25%'
  },
  {
    name: 'Expert Staff Augmentation',
    summary: 'Pre-vetted developers who integrate with your workflows for short-term or long-term engagements.',
    to: '/services/staff-augmentation',
    cta: 'Find Your Developer',
    focus: 'Team Scaling · 25%'
  },
  {
    name: 'Mobile Development',
    summary: 'Native and cross-platform mobile experiences with React Native, Flutter, Swift, and Kotlin.',
    to: '/services/mobile-development',
    cta: 'Build Your Mobile App',
    focus: 'Mobile Excellence'
  },
  {
    name: 'Game Development',
    summary: 'Interactive games and immersive experiences powered by Unity, HTML5, and WebGL.',
    to: '/services/game-development',
    cta: 'Create Your Game',
    focus: 'Engagement Experiences'
  }
]
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
