<template>
  <div class="page">
    <section class="section hero">
      <div class="container section-inner">
        <div class="section-header">
          <h1>Custom Web Applications That Scale With Your Vision</h1>
          <p class="section-subhead">
            When AI tooling reaches its limits, our engineering team builds production-grade web applications tailored to your business.
          </p>
          <div class="hero-actions">
            <NuxtLink to="#contact" class="btn btn--primary">Start Your Web Project</NuxtLink>
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
            <p>Custom web applications using Laravel, React, Vue.js, Node.js, and Python. From e-commerce platforms to enterprise systems built for performance and scalability.</p>
            <ul>
              <li v-for="item in whatWeBuild" :key="item">{{ item }}</li>
            </ul>
          </article>
          <article class="card card--muted">
            <h2>Value Proposition</h2>
            <ul>
              <li v-for="value in values" :key="value">{{ value }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--gradient">
      <div class="container section-inner">
        <div class="section-header">
          <h2>Our Approach</h2>
        </div>
        <div class="grid grid--three">
          <article v-for="stage in approach" :key="stage.title" class="card card--muted">
            <h3>{{ stage.title }}</h3>
            <p>{{ stage.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
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
              <li v-for="message in targetMessaging" :key="message">{{ message }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section id="contact" class="section">
      <div class="container section-inner">
        <div class="section-header section-header--center">
          <h2>Bring Your Next Web Application to Market</h2>
          <p class="section-subhead">Share your requirements and we will architect a roadmap from discovery to deployment.</p>
        </div>
        <div class="grid grid--two">
          <article class="card card--bright">
            <h3>Start Your Project</h3>
            <p>Tell us about your idea, business goals, and timeline so we can design the ideal solution.</p>
            <NuxtLink to="/contact" class="card-cta">Start Your Web Project</NuxtLink>
          </article>
          <article class="card card--muted">
            <h3>Need a Technical Partner?</h3>
            <p>Blend custom development with staff augmentation for continuous delivery.</p>
            <NuxtLink to="/services/staff-augmentation" class="card-cta">Explore Team Augmentation</NuxtLink>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Custom Web Development | Aesir Tecnologia',
  description: 'Full-stack web applications built with Laravel, React, Vue.js, Node.js, and Python. Scalable architecture, comprehensive testing, and production-ready delivery.'
})

const whatWeBuild = [
  'E-commerce platforms and online stores',
  'Business management systems',
  'Customer portals and dashboards',
  'Content management systems',
  'API-driven applications',
  'Progressive web apps (PWAs)'
]

const values = [
  'When AI tools are not enough, we build from scratch',
  'Modern technologies with proven architectures',
  'Built for growth from day one',
  'Partnership approach to development'
]

const approach = [
  { title: 'Discovery & Planning', description: 'Understand business requirements, constraints, and goals to scope the right solution.' },
  { title: 'Architecture Design', description: 'Create scalable, secure system designs aligned with your growth plans.' },
  { title: 'Agile Development', description: 'Iterative delivery with frequent check-ins and release milestones.' },
  { title: 'Comprehensive Testing', description: 'Reliability through automated and manual QA before every release.' },
  { title: 'Zero-Downtime Deployment', description: 'Deployment strategies that keep your business running during launches.' },
  { title: 'Ongoing Support', description: 'Maintenance, feature updates, and performance monitoring on demand.' }
]

const technologies = [
  'Laravel',
  'Vue.js',
  'React',
  'JavaScript & TypeScript',
  'Node.js',
  'MySQL & PostgreSQL'
]

const targetMessaging = [
  'Some ideas are too unique for AI tools. We build the impossible.',
  'Skip the prototype phase. Go straight to production-ready.',
  'Your vision deserves custom solutions, not AI templates.'
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
