<template>
  <div class="page">
    <section class="section hero">
      <div class="container section-inner">
        <div class="section-header">
          <h1>Expert Developers Who Speak Both Traditional Code and AI</h1>
          <p class="section-subhead">
            Scale your development capacity with remote-first professionals who integrate seamlessly with your team and toolchain.
          </p>
          <div class="hero-actions">
            <NuxtLink to="#contact" class="btn btn--primary">Find Your Developer</NuxtLink>
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
            <p>Scale your development capacity with experienced developers who become an extension of your team. Available for short-term and long-term engagements.</p>
            <ul>
              <li v-for="item in benefits" :key="item">{{ item }}</li>
            </ul>
          </article>
          <article class="card card--muted">
            <h2>Developer Expertise</h2>
            <ul>
              <li v-for="expertise in expertiseAreas" :key="expertise.title">
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
          <h2>Engagement Models</h2>
        </div>
        <div class="grid grid--three">
          <article v-for="model in engagementModels" :key="model.title" class="card card--muted">
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
            <h3>Why Choose Our Developers</h3>
            <ul>
              <li v-for="reason in reasons" :key="reason">{{ reason }}</li>
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
          <h2>Scale Your Team Without Delay</h2>
          <p class="section-subhead">Tell us about your stack, workflows, and goals so we can match the right developers.</p>
        </div>
        <div class="grid grid--two">
          <article class="card card--bright">
            <h3>Request Talent</h3>
            <p>Share role requirements, timelines, and collaboration expectations.</p>
            <NuxtLink to="/contact" class="card-cta">Find Your Developer</NuxtLink>
          </article>
          <article class="card card--muted">
            <h3>Combine With Vibe Cleanup</h3>
            <p>Deploy augmented developers to maintain velocity after cleanup.</p>
            <NuxtLink to="/services/vibe-coding-cleanup" class="card-cta">Audit Your App</NuxtLink>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Staff Augmentation | Aesir Tecnologia',
  description: 'Pre-vetted remote developers experienced with traditional coding and AI-assisted workflows. Flexible engagements from part-time to full-time.'
})

const benefits = [
  'Pre-vetted senior and mid-level developers',
  'Expertise in your technology stack',
  'Remote-first professionals with excellent communication',
  'Flexible engagement models from part-time to full-time',
  'Direct integration with your existing workflows',
  'Ongoing support and account management'
]

const expertiseAreas = [
  { title: 'Frontend', items: 'React, Vue.js, Angular, JavaScript/TypeScript' },
  { title: 'Backend', items: 'PHP/Laravel, Node.js, Python/Django, .NET' },
  { title: 'Mobile', items: 'React Native, Flutter, iOS, Android' },
  { title: 'DevOps', items: 'AWS, Docker, CI/CD, Linux administration' },
  { title: 'Databases', items: 'MySQL, PostgreSQL, MongoDB, Redis' }
]

const engagementModels = [
  { title: 'Short-term Projects', description: '1-6 month engagements for specific deliverables and product pushes.' },
  { title: 'Long-term Partnerships', description: '6+ month collaborations for ongoing development and product growth.' },
  { title: 'Team Extension', description: 'Add multiple developers to expand velocity without hiring overhead.' },
  { title: 'Specialized Roles', description: 'Senior architects, tech leads, or niche specialists on demand.' }
]

const reasons = [
  'Rigorous technical screening process',
  'Strong English communication skills',
  'Remote work experience and self-management',
  'Cultural fit assessment for every placement'
]

const messages = [
  'Need developers who understand both traditional coding and AI assistance?',
  "Scale your team with experts who've seen it all.",
  "Remote developers who integrate like they're sitting next to you."
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
