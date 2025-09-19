<template>
  <div class="page">
    <section class="section hero">
      <div class="container section-inner">
        <div class="section-header">
          <h1>Building Software Excellence for Over a Decade</h1>
          <p class="section-subhead">
            We've been passionate about creating software that makes a difference. What started as a vision to build better applications has grown into a team dedicated to delivering exceptional digital solutions.
          </p>
          <div class="hero-actions">
            <NuxtLink to="/contact" class="btn btn--primary">Work With Us</NuxtLink>
            <NuxtLink to="/services" class="btn btn--ghost">Explore Our Services</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container section-inner">
        <article class="card card--muted">
          <h2>Our Mission</h2>
          <p>We believe great software should be human-centered, scalable, and built to last. Every application we create is designed to grow with your business while providing an exceptional user experience.</p>
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
          <h2>Values</h2>
        </div>
        <div class="grid grid--four">
          <article v-for="value in values" :key="value.title" class="card card--bright">
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'About Aesir Tecnologia',
  description: 'Aesir Tecnologia builds secure, scalable software with a focus on vibe coding cleanup, custom development, and long-term client partnerships.'
})

const pillars = [
  { title: 'Quality First', description: 'We build applications with strong engineering principles and proven architecture.' },
  { title: 'Zero Downtime', description: 'Critical applications demand seamless deployments and resilient infrastructure.' },
  { title: 'Modern Technologies', description: 'We stay current with frameworks, tooling, and best practices so your stack stays modern.' },
  { title: 'Client Partnership', description: 'Your success is our success. We operate as an embedded extension of your team.' }
]

const values = [
  { title: 'Excellence', description: 'Every line of code matters and receives rigorous review.' },
  { title: 'Reliability', description: 'Applications you can depend on from launch to scale.' },
  { title: 'Innovation', description: 'We embrace new technologies thoughtfully to deliver meaningful value.' },
  { title: 'Partnership', description: 'Long-term collaboration built on transparency and trust.' }
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
