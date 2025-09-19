<template>
  <div class="page">
    <section class="section hero">
      <div class="container section-inner">
        <div class="section-header">
          <h1>Interactive Games and Immersive Experiences</h1>
          <p class="section-subhead">
            Build engaging games and gamified experiences with Unity and HTML5 to captivate your audience across web and mobile.
          </p>
          <div class="hero-actions">
            <NuxtLink to="#contact" class="btn btn--primary">Create Your Game</NuxtLink>
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
            <p>Interactive games and experiences using Unity and HTML5. From entertainment to education, we deliver rich, performant content.</p>
            <ul>
              <li v-for="item in offerings" :key="item">{{ item }}</li>
            </ul>
          </article>
          <article class="card card--muted">
            <h2>Our Game Development Services</h2>
            <ul>
              <li v-for="service in servicesList" :key="service.title">
                <strong>{{ service.title }}:</strong> {{ service.description }}
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
          <h2>Bring Your Experience to Life</h2>
          <p class="section-subhead">Share your concept, audience, and platform needs to start production planning.</p>
        </div>
        <div class="grid grid--two">
          <article class="card card--bright">
            <h3>Start a Game Project</h3>
            <p>We guide you through concept validation, production planning, and deployment.</p>
            <NuxtLink to="/contact" class="card-cta">Create Your Game</NuxtLink>
          </article>
          <article class="card card--muted">
            <h3>Add Gamification</h3>
            <p>Enhance existing products with interactive features and retention loops.</p>
            <NuxtLink to="/services/web-development" class="card-cta">Integrate With Your App</NuxtLink>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Game Development | Aesir Tecnologia',
  description: 'Unity and HTML5 game development for mobile and web, including gamification, educational experiences, and interactive content.'
})

const offerings = [
  'Mobile games for iOS and Android',
  'Web-based games and interactive content',
  'Educational and training games',
  'Gamification features for apps',
  'HTML5 games and animations'
]

const servicesList = [
  { title: 'Concept Development', description: 'Game design, mechanics, and narrative planning.' },
  { title: 'Art and Animation', description: '2D/3D asset production, character design, and motion.' },
  { title: 'Programming', description: 'Unity, HTML5, and JavaScript engineering for cross-platform delivery.' },
  { title: 'Testing', description: 'Quality assurance and device testing for smooth experiences.' },
  { title: 'Publishing', description: 'App store submission and web deployment support.' },
  { title: 'Analytics', description: 'Player behavior tracking and live ops optimization.' }
]

const technologies = [
  'Unity',
  'HTML5',
  'JavaScript',
  'WebGL',
  'Mobile SDKs'
]

const messages = [
  'Deliver immersive experiences that drive engagement.',
  'Combine storytelling, art, and engineering to ship compelling games.',
  'Extend your product strategy with gamified touchpoints.'
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
