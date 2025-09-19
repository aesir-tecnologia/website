<template>
  <div class="page">
    <section class="section hero">
      <div class="container section-inner">
        <div class="section-header">
          <h1>Native and Cross-Platform Mobile Solutions</h1>
          <p class="section-subhead">
            Mobile applications that deliver exceptional user experiences across iOS and Android, from concept to launch and growth.
          </p>
          <div class="hero-actions">
            <NuxtLink to="#contact" class="btn btn--primary">Build Your Mobile App</NuxtLink>
            <NuxtLink to="/services" class="btn btn--ghost">View All Services</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container section-inner">
        <div class="grid grid--two">
          <article class="card card--muted">
            <h2>Overview</h2>
            <p>Whether you need a native app or cross-platform experience, we build mobile products users love with reliable performance and maintainability.</p>
            <ul>
              <li v-for="item in offerings" :key="item">{{ item }}</li>
            </ul>
          </article>
          <article class="card card--muted">
            <h2>Our Process</h2>
            <ul>
              <li v-for="step in process" :key="step.title">
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
            <h3>Technologies Used</h3>
            <ul>
              <li v-for="tech in technologies" :key="tech">{{ tech }}</li>
            </ul>
          </article>
          <article class="card card--muted">
            <h3>Target Messaging</h3>
            <ul>
              <li v-for="message in messages" :key="message">{{ message }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section id="contact" class="section">
      <div class="container section-inner">
        <div class="section-header section-header--center">
          <h2>Launch Your Next Mobile Experience</h2>
          <p class="section-subhead">Share your platform goals, priority features, and schedule so we can assemble the right mobile team.</p>
        </div>
        <div class="grid grid--two">
          <article class="card card--bright">
            <h3>Project Kickoff</h3>
            <p>We help refine scope, choose the right technology stack, and plan for launch.</p>
            <NuxtLink to="/contact" class="card-cta">Build Your Mobile App</NuxtLink>
          </article>
          <article class="card card--muted">
            <h3>Need Web Support Too?</h3>
            <p>Extend your mobile experience with backend and web app development.</p>
            <NuxtLink to="/services/web-development" class="card-cta">Explore Web Development</NuxtLink>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Mobile Development | Aesir Tecnologia',
  description: 'Native iOS, Android, and cross-platform mobile applications built with React Native, Flutter, and modern APIs.'
})

const offerings = [
  'iOS and Android native apps',
  'Cross-platform applications (React Native, Flutter)',
  'Progressive web apps (PWAs)',
  'API integrations and real-time features',
  'Mobile-first web experiences'
]

const process = [
  { title: 'Strategy', description: 'Evaluate platform fit, feature set, and success metrics.' },
  { title: 'Design', description: 'User-centered design and rapid prototyping.' },
  { title: 'Development', description: 'Native or cross-platform development with continuous communication.' },
  { title: 'Testing', description: 'Device testing and performance optimization for stability.' },
  { title: 'Launch', description: 'App store submission, deployment, and release coordination.' },
  { title: 'Growth', description: 'Analytics integration, A/B testing, and feature updates.' }
]

const technologies = [
  'React Native',
  'Flutter',
  'Swift',
  'Kotlin',
  'JavaScript & TypeScript',
  'API integration'
]

const messages = [
  'Deliver native-quality experiences across platforms.',
  'Balance speed and performance with cross-platform tooling.',
  'Launch with confidence backed by rigorous testing and analytics.'
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

.card ul {
  margin: 0;
  padding-left: 1.25rem;
  color: rgba(226, 232, 240, 0.85);
}

</style>
