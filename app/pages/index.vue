<template>
  <div class="homepage">
    <section id="hero" class="hero">
      <div class="container hero-content">
        <div class="hero-text">
          <p class="eyebrow">Vibe Coding Cleanup Specialists</p>
          <h1>Transform Your AI-Generated MVP Into Production-Ready Software</h1>
          <p class="lead">
            We take vibe-coded applications and turn them into secure, scalable systems ready for real users and business growth.
            Plus full-stack development and expert staff augmentation.
          </p>
          <div class="hero-actions">
            <NuxtLink to="/services/vibe-coding-cleanup" class="btn btn--primary">Audit My AI-Generated App</NuxtLink>
            <NuxtLink to="/services" class="btn btn--ghost">Explore Our Services</NuxtLink>
          </div>
          <ul class="hero-points">
            <li v-for="point in heroPoints" :key="point">{{ point }}</li>
          </ul>
        </div>
        <div class="hero-card">
          <h2 class="hero-card__title">Why founders choose Aesir</h2>
          <ul>
            <li v-for="item in heroHighlights" :key="item.title">
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
          <h2>Your AI-Generated App Works... But Is It Ready for Business?</h2>
          <p class="section-subhead">
            Vibe coding tools like Cursor, Replit Agent, and Lovable create functional prototypes fast.
            But AI-generated code often contains security vulnerabilities, performance bottlenecks, and architectural issues that prevent scaling.
          </p>
        </div>
        <div class="grid grid--two">
          <div>
            <h3>The Challenge</h3>
            <ul class="list-check">
              <li v-for="challenge in challenges" :key="challenge">{{ challenge }}</li>
            </ul>
          </div>
          <div>
            <h3>What Happens Next</h3>
            <ul class="list-check">
              <li v-for="impact in impacts" :key="impact">{{ impact }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="section section--gradient">
      <div class="container section-inner">
        <div class="section-header">
          <h2>Three Ways We Transform Your Software Vision Into Reality</h2>
        </div>
        <div class="grid grid--three">
          <article v-for="service in services" :key="service.name" class="card service-card">
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
          <h2>From Prototype to Production: The Only Vibe Coding Cleanup Service You Need</h2>
          <p class="section-subhead">Thousands of entrepreneurs are building with AI tools daily. Most create functional MVPs but lack the engineering expertise to make them production-ready. That's where we come in.</p>
        </div>
        <div class="grid grid--four">
          <article v-for="step in cleanupProcess" :key="step.title" class="card card--muted">
            <h3>{{ step.title }}</h3>
            <ul>
              <li v-for="item in step.items" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>
        <div class="card card--highlight">
          <h3>Perfect For</h3>
          <ul>
            <li v-for="item in idealCustomers" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="technology" class="section section--dark">
      <div class="container section-inner">
        <div class="section-header section-header--center">
          <h2>Modern Technologies, Production-Grade Results</h2>
          <p class="section-subhead">A tech stack selected for reliability, scalability, and modern product experiences.</p>
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
          <h2>The Technical Partner Your Growing Business Needs</h2>
        </div>
        <div class="grid grid--four">
          <article v-for="reason in reasons" :key="reason.title" class="card card--muted">
            <h3>{{ reason.title }}</h3>
            <p>{{ reason.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="results" class="section section--testimonial">
      <div class="container section-inner">
        <div class="testimonial">
          <h2>Real Results for Growing Businesses</h2>
          <blockquote>
            “Aesir took our Cursor-generated prototype and transformed it into a system that handles 10,000+ daily users. The security audit alone saved us from potential disasters we never knew existed.”
          </blockquote>
          <p class="testimonial-author">— SaaS Startup Founder</p>
        </div>
      </div>
    </section>

    <section id="get-started" class="section section--cta">
      <div class="container section-inner">
        <div class="section-header section-header--center">
          <h2>Ready to Make Your Application Production-Ready?</h2>
        </div>
        <div class="grid grid--three">
          <article v-for="cta in finalCtas" :key="cta.title" class="card card--bright">
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

useSeoMeta({
  title: 'Aesir Tecnologia | Vibe Coding Cleanup Specialists',
  description: 'We transform AI-generated MVPs into production-ready software with security, performance, and scaling expertise.'
})

const heroPoints = [
  'Vibe coding cleanup specialists',
  'Full-stack development expertise',
  'Expert remote developers'
]

const heroHighlights = [
  {
    title: 'Secure Foundations',
    description: 'Security hardening and architecture restructuring so your app is investor-ready.'
  },
  {
    title: 'Scale With Confidence',
    description: 'Performance optimization, monitoring, and CI/CD pipelines to support aggressive growth.'
  },
  {
    title: 'On-Demand Expertise',
    description: 'Senior developers who understand both AI-generated and hand-crafted codebases.'
  }
]

const challenges = [
  'Code generated without security guardrails',
  'Architecture that falters under real-world usage',
  'Missing tests and documentation for handoffs'
]

const impacts = [
  'Your app crashes under real user load',
  'Security vulnerabilities expose sensitive data',
  'Technical debt makes new features impossible',
  'Investors question your technical foundation'
]

const services = [
  {
    name: 'Vibe Coding Cleanup',
    description: 'Turn your AI-generated MVP into production-ready software with our comprehensive cleanup process.',
    to: '/services/vibe-coding-cleanup',
    cta: 'Audit My App',
    focus: 'Primary Focus · 50%'
  },
  {
    name: 'Custom Web Development',
    description: 'Full-stack applications built for performance and scalability using modern technologies.',
    to: '/services/web-development',
    cta: 'Start Your Project',
    focus: 'Web Development · 25%'
  },
  {
    name: 'Expert Staff Augmentation',
    description: 'Skilled developers who integrate seamlessly with your team for short-term or long-term projects.',
    to: '/services/staff-augmentation',
    cta: 'Find Your Developer',
    focus: 'Team Scaling · 25%'
  }
]

const cleanupProcess = [
  {
    title: 'Security Hardening',
    items: [
      'Fix vulnerabilities and secure endpoints',
      'Implement authentication and authorization',
      'Ensure OWASP-aligned coding practices'
    ]
  },
  {
    title: 'Performance Optimization',
    items: [
      'Optimize database queries and caching',
      'Prepare for load balancing and scaling',
      'Improve frontend delivery and asset usage'
    ]
  },
  {
    title: 'Architecture Restructuring',
    items: [
      'Clean code organization and modular design',
      'Documented patterns future teams can trust',
      'Maintainable structure ready for new features'
    ]
  },
  {
    title: 'Production Readiness',
    items: [
      'Automated testing suites and monitoring',
      'Deployment pipelines and observability',
      'Documentation for ongoing development'
    ]
  }
]

const idealCustomers = [
  'Entrepreneurs seeking investment with technical due diligence',
  'Startups moving from MVP to market',
  'Non-technical founders with working prototypes',
  'Businesses needing production deployment'
]

const reasons = [
  {
    title: 'Vibe Coding Specialists',
    description: 'Specialized agency focused on transforming AI-generated code into production systems.'
  },
  {
    title: 'Full-Stack Expertise',
    description: 'Complete web and mobile development capabilities when you need custom solutions.'
  },
  {
    title: 'Proven Remote Team',
    description: 'Expert developers who integrate seamlessly with your existing workflows.'
  },
  {
    title: 'Built for Scale',
    description: 'Applications designed to handle growth from day one with proper architecture and optimization.'
  }
]

const finalCtas = [
  {
    title: 'For Vibe-Coded MVPs',
    description: 'Get a professional security and scalability audit of your AI-generated application.',
    cta: 'Request Audit',
    to: '/services/vibe-coding-cleanup#contact'
  },
  {
    title: 'For Custom Development',
    description: "Need a solution built from scratch? Let's discuss your requirements.",
    cta: 'Start Your Project',
    to: '/services/web-development#contact'
  },
  {
    title: 'For Team Scaling',
    description: 'Looking to add expert developers to your team?',
    cta: 'Find Your Developer',
    to: '/services/staff-augmentation#contact'
  }
]

const techLogos = [
  'PHP',
  'Laravel',
  'JavaScript',
  'Vue.js',
  'React',
  'Next.js',
  'React Native',
  'Node.js',
  'Flutter',
  'Python',
  'Django',
  'Unity'
]

const carouselLogos = computed(() => [...techLogos, ...techLogos])

const trackStyle = computed(() => ({
  '--item-count': String(carouselLogos.value.length)
}))
</script>

