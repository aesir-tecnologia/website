<template>
  <div class="page">
    <section class="section hero">
      <div class="container section-inner">
        <div class="section-header">
          <h1>Our Process</h1>
          <p class="section-subhead">
            A consistent, battle-tested process that transforms vibe-coded prototypes into production-grade products while keeping teams aligned.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container section-inner">
        <div class="grid grid--three">
          <article v-for="step in processSteps" :key="step.title" class="card card--muted">
            <h2>{{ step.title }}</h2>
            <p>{{ step.description }}</p>
            <ul>
              <li v-for="item in step.items" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--gradient">
      <div class="container section-inner">
        <div class="section-header section-header--center">
          <h2>Designed for Scale and Reliability</h2>
        </div>
        <div class="grid grid--three">
          <article v-for="benefit in benefits" :key="benefit.title" class="card card--bright">
            <h3>{{ benefit.title }}</h3>
            <p>{{ benefit.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container section-inner">
        <div class="grid grid--two">
          <article class="card card--muted">
            <h3>What Sets Us Apart</h3>
            <ul>
              <li v-for="point in differentiation" :key="point">{{ point }}</li>
            </ul>
          </article>
          <article class="card card--muted">
            <h3>Who We Work With</h3>
            <ul>
              <li v-for="audience in audiences" :key="audience">{{ audience }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Process | Aesir Tecnologia',
  description: 'Discover the Aesir process for transforming AI-generated prototypes into production-ready software with security, performance, and scalability.'
})

const processSteps = [
  {
    title: 'Audit & Assessment',
    description: 'We start with a comprehensive review of your AI-generated codebase to uncover risks and opportunities.',
    items: [
      'Security vulnerability assessment',
      'Performance and scalability analysis',
      'Code structure and architecture review'
    ]
  },
  {
    title: 'Hardening & Restructuring',
    description: 'Stabilize and strengthen the foundation so your product can scale with confidence.',
    items: [
      'Authentication, authorization, and data protection upgrades',
      'Architecture restructuring and modularization',
      'Caching and database optimization'
    ]
  },
  {
    title: 'Production Enablement',
    description: 'Set up the tooling, automations, and documentation that keep teams shipping reliably.',
    items: [
      'Testing suites and CI/CD pipelines',
      'Monitoring, logging, and alerting',
      'Deployment strategy and scalability roadmap'
    ]
  }
]

const benefits = [
  {
    title: 'Security First',
    description: 'Catch vulnerabilities before they impact users or investors.'
  },
  {
    title: 'Operational Excellence',
    description: 'Automate testing, releases, and observability for long-term success.'
  },
  {
    title: 'Scalable Architecture',
    description: 'Design future-ready systems that support aggressive growth targets.'
  }
]

const differentiation = [
  'First-mover in vibe coding cleanup with deep specialization',
  'Technical depth that goes beyond traditional development shops',
  'Complete solution covering cleanup, custom development, and team scaling'
]

const audiences = [
  'Entrepreneurs with vibe-coded MVPs needing production deployment',
  'Businesses requiring custom development backed by engineering rigor',
  'Growing companies that need to scale their development teams'
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
