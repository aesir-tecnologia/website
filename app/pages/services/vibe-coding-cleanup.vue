<template>
  <div class="page">
    <section class="section hero">
      <div class="container section-inner">
        <div class="section-header">
          <h1>The First and Only Vibe Coding Cleanup Service</h1>
          <p class="section-subhead">
            Your vibe-coded app works, but is it ready for real users and business growth? We transform AI-generated applications into secure, scalable, maintainable systems that can handle production traffic and continued development.
          </p>
          <div class="hero-actions">
            <NuxtLink to="#contact" class="btn btn--primary">Audit My Vibe-Coded App</NuxtLink>
            <NuxtLink to="/services" class="btn btn--ghost">Explore All Services</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container section-inner">
        <div class="grid grid--two">
          <article class="card card--muted">
            <h2>The Problem We Solve</h2>
            <p>Vibe coding tools like Cursor, Replit Agent, and Lovable create functional prototypes fast, but the generated code often has:</p>
            <ul>
              <li v-for="item in problemItems" :key="item">{{ item }}</li>
            </ul>
          </article>
          <article class="card card--muted">
            <h2>Common Issues We Fix</h2>
            <ul>
              <li v-for="issue in issues" :key="issue">{{ issue }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--gradient">
      <div class="container section-inner">
        <div class="section-header">
          <h2>Our Vibe Cleanup Process</h2>
        </div>
        <div class="grid grid--three">
          <article v-for="phase in phases" :key="phase.title" class="card card--muted">
            <h3>{{ phase.title }}</h3>
            <ul>
              <li v-for="item in phase.items" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>
        <div class="grid grid--three">
          <article v-for="phase in phasesExtended" :key="phase.title" class="card card--muted">
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
            <h3>What You Get</h3>
            <ul>
              <li v-for="deliverable in deliverables" :key="deliverable">{{ deliverable }}</li>
            </ul>
          </article>
          <article class="card card--highlight">
            <h3>Perfect For</h3>
            <ul>
              <li v-for="audience in audiences" :key="audience">{{ audience }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--testimonial">
      <div class="container section-inner">
        <div class="grid grid--three">
          <article v-for="value in valueProps" :key="value" class="card card--muted">
            <p>{{ value }}</p>
          </article>
        </div>
        <div class="grid grid--three">
          <article v-for="message in targetMessages" :key="message" class="card card--muted">
            <p>{{ message }}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="contact" class="section">
      <div class="container section-inner">
        <div class="section-header section-header--center">
          <h2>Ready to Clean Up Your AI-Generated Application?</h2>
          <p class="section-subhead">Request a comprehensive audit to understand your security, performance, and scalability gaps.</p>
        </div>
        <div class="grid grid--two">
          <article class="card card--bright">
            <h3>Request an Audit</h3>
            <p>Share your repository or deployment and we will prepare a detailed plan of action.</p>
            <NuxtLink to="/contact" class="card-cta">Request Audit</NuxtLink>
          </article>
          <article class="card card--muted">
            <h3>Need Ongoing Support?</h3>
            <p>Combine vibe coding cleanup with custom development and staff augmentation for a complete product team.</p>
            <NuxtLink to="/services" class="card-cta">Plan a Roadmap</NuxtLink>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Vibe Coding Cleanup | Aesir Tecnologia',
  description: 'Comprehensive vibe coding cleanup: security hardening, performance optimization, architecture restructuring, testing, and deployment readiness.'
})

const problemItems = [
  'Security vulnerabilities and exposed endpoints',
  "Poor architecture that doesn't scale",
  'Lack of proper error handling and validation',
  'No testing framework or documentation',
  'Performance bottlenecks and inefficient queries',
  'Technical debt that blocks future development'
]

const issues = [
  'Exposed admin panels and debug endpoints',
  'Hardcoded API keys and credentials',
  'Missing input validation leading to injection attacks',
  'Inefficient database queries causing slowdowns',
  'Poor error handling causing crashes',
  'Lack of proper user authentication',
  'Unstructured code making updates impossible'
]

const phases = [
  {
    title: '1. Comprehensive Code Audit',
    items: [
      'Security vulnerability assessment',
      'Performance and scalability analysis',
      'Code quality and structure review',
      'Database optimization opportunities',
      'Architecture assessment'
    ]
  },
  {
    title: '2. Security Hardening',
    items: [
      'Input validation and sanitization',
      'Authentication and authorization fixes',
      'API security and rate limiting',
      'Data encryption and secure storage',
      'OWASP compliance implementation'
    ]
  },
  {
    title: '3. Architecture Restructuring',
    items: [
      'Modular code organization',
      'Separation of concerns',
      'Scalable database design',
      'Caching strategy implementation',
      'Load balancing preparation'
    ]
  }
]

const phasesExtended = [
  {
    title: '4. Performance Optimization',
    items: [
      'Database query optimization',
      'Frontend performance improvements',
      'API response time reduction',
      'Memory usage optimization',
      'CDN and asset optimization'
    ]
  },
  {
    title: '5. Production Readiness',
    items: [
      'Comprehensive testing suite (unit, integration, e2e)',
      'Error handling and logging',
      'Monitoring and alerting setup',
      'CI/CD pipeline implementation',
      'Documentation and code comments'
    ]
  },
  {
    title: '6. Scalability Preparation',
    items: [
      'Horizontal scaling architecture',
      'Microservices consideration',
      'Database sharding strategy',
      'Caching layer implementation',
      'Auto-scaling configuration'
    ]
  }
]

const deliverables = [
  'Security report with detailed vulnerability fixes',
  'Performance benchmarks before and after optimization',
  'Clean, well-structured codebase ready for handoff',
  'Documentation and development guidelines',
  'Comprehensive testing suite',
  'Deployment and monitoring strategy',
  'Scalability roadmap for future growth'
]

const audiences = [
  'Entrepreneurs with vibe-coded MVPs seeking investment',
  'Startups moving from prototype to product',
  'Businesses with AI-generated apps needing production deployment',
  'Non-technical founders with working prototypes',
  'Companies switching from rapid prototyping to serious development'
]

const valueProps = [
  'Turn AI-generated prototypes into investable assets',
  'Fix security vulnerabilities before they become breaches',
  'Transform unscalable code into enterprise-ready systems'
]

const targetMessages = [
  "Your competitors are building with AI. Don't let them beat you to market because of technical issues.",
  'Investors will scrutinize your technical foundation. Make sure it passes.',
  'Scale confidently knowing your foundation is solid.'
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
