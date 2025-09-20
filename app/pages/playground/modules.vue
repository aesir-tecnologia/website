<template>
  <div class="space-y-20 pb-20">
    <HeroSection
      id="hero-demo"
      eyebrow="Playground Demo"
      title="Transform vibe-coded prototypes into resilient products"
      description="Composable marketing modules built on the shared structural primitives. Wire sample data or hook up composables to migrate pages incrementally."
      icon="i-lucide-rocket"
      :points="heroPoints"
      :highlights="heroHighlights"
      highlight-title="Why founders choose this approach"
      highlight-eyebrow="Proof"
      :primary-cta="{ label: 'Audit My App', to: '/services/vibe-coding-cleanup' }"
      :secondary-cta="{ label: 'Explore Services', to: '/services', variant: 'outline' }"
    />

    <ProblemSolutionSection
      id="problem-solution-demo"
      eyebrow="Pain points"
      title="Your AI-generated MVP works, but it struggles under pressure"
      description="Surface the gap between prototype and production. Feed localized copy through props later—no markup rewrites needed."
      icon="i-lucide-radar"
      challenge-title="The challenge"
      impact-title="What happens next"
      :challenges="challenges"
      :impacts="impacts"
    />

    <ServiceShowcase
      id="service-showcase-demo"
      eyebrow="Offerings"
      title="Three ways to ship production-grade software"
      description="Map page arrays or composable output to instantly restyle the services grid."
      icon="i-lucide-layers"
      :services="services"
      :cta="{ label: 'See all services', to: '/services' }"
    />

    <ProcessTimeline
      id="process-timeline-demo"
      eyebrow="Process"
      title="From vibe-coded MVP to production-ready system"
      description="Timeline cards use the structural BulletList component for consistent typography and spacing."
      icon="i-lucide-timer"
      :steps="steps"
      :highlight="perfectFor"
    />

    <TechnologyMarquee
      id="marquee-demo"
      eyebrow="Tech stack"
      title="Modern frameworks, production discipline"
      description="Marquee loops twice the source list and pauses on hover. Toggle reduced motion to halt the animation."
      caption="Update the items array from composables or content sources—no CSS changes required."
      icon="i-lucide-cpu"
      :items="technologies"
      :speed="26"
    />

    <SocialProofSection
      id="social-proof-demo"
      eyebrow="Social proof"
      title="Trusted by founders scaling beyond prototypes"
      description="Testimonials and differentiators lean on FeatureGrid for consistency."
      icon="i-lucide-sparkle"
      :features="reasons"
      :testimonial="testimonial"
    />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '~/components/modules/HeroSection.vue'
import ProblemSolutionSection from '~/components/modules/ProblemSolutionSection.vue'
import ServiceShowcase from '~/components/modules/ServiceShowcase.vue'
import ProcessTimeline from '~/components/modules/ProcessTimeline.vue'
import TechnologyMarquee from '~/components/modules/TechnologyMarquee.vue'
import SocialProofSection from '~/components/modules/SocialProofSection.vue'

useSeoMeta({
  title: 'Marketing Modules Playground',
  description: 'Demo route for Hero, Problem/Solution, Service Showcase, Process Timeline, Technology Marquee, and Social Proof modules.'
})

const heroPoints = [
  'Security, performance, and architecture audits built in',
  'Nuxt UI primitives for rapid iteration and theming',
  'Localization-ready props with no hard-coded copy'
]

const heroHighlights = [
  {
    title: 'Delivery at startup speed',
    description: 'Launch improvements weekly by composing shared modules with page data.'
  },
  {
    title: 'Design-system aligned',
    description: 'Theming and spacing mirror tokens defined in `app/app.config.ts`.'
  },
  {
    title: 'Documentation ready',
    description: 'Every module links to playground demos and docs for quick adoption.'
  }
]

const challenges = [
  'AI-assisted code ships without security guardrails',
  'Architecture falters when real users spike traffic',
  'Missing docs slow down onboarding and fundraising'
]

const impacts = [
  'Outages undermine investor confidence',
  'Sensitive data exposure risks compliance fines',
  'Technical debt blocks roadmap features'
]

const services = [
  {
    title: 'Vibe Coding Cleanup',
    description: 'Audit, stabilize, and harden AI-generated code before it hits production.',
    to: '/services/vibe-coding-cleanup',
    cta: 'Request audit',
    focus: 'Primary focus · 50%'
  },
  {
    title: 'Custom Web Development',
    description: 'Product engineering teams building full-stack applications with modern Nuxt foundations.',
    to: '/services/web-development',
    cta: 'Start your project',
    focus: 'Web apps · 25%'
  },
  {
    title: 'Staff Augmentation',
    description: 'Senior developers embedded into existing squads for accelerated delivery.',
    to: '/services/staff-augmentation',
    cta: 'Find your developer',
    focus: 'Team scaling · 25%'
  }
]

const steps = [
  {
    title: 'Security hardening',
    items: [
      'Patch vulnerabilities and enforce auth patterns',
      'Instrument monitoring and alerting hooks'
    ]
  },
  {
    title: 'Performance tune-up',
    items: [
      'Profile bottlenecks and optimize queries',
      'Assemble caching and edge strategies'
    ]
  },
  {
    title: 'Architecture reshape',
    items: [
      'Modularize features with clear ownership',
      'Document critical flows for future teams'
    ]
  },
  {
    title: 'Production launch',
    items: [
      'Automate CI/CD pipelines with confidence gates',
      'Coach teams on ongoing health checks'
    ]
  }
]

const perfectFor = {
  title: 'Perfect for',
  eyebrow: 'Best fit',
  items: [
    'Seed to Series A founders prepping for diligence',
    'Product teams inheriting AI-generated MVPs',
    'Operators racing to ship reliable customer experiences'
  ]
}

const technologies = [
  'Nuxt 4',
  'Vue 3',
  'Supabase',
  'PlanetScale',
  'Storyblok',
  'Vercel',
  'Tailwind CSS',
  'Playwright',
  'Ladle',
  'Figma Tokens'
]

const reasons = [
  {
    title: 'Vibe coding specialists',
    description: 'Dedicated to stabilizing AI-generated MVPs without rewriting from scratch.',
    icon: 'i-lucide-bot'
  },
  {
    title: 'Full-stack experts',
    description: 'Ship Nuxt, React, and mobile apps with the same rigor as monolith rescues.',
    icon: 'i-lucide-layers'
  },
  {
    title: 'Operations partners',
    description: 'We own delivery and knowledge transfer so internal teams stay unblocked.',
    icon: 'i-lucide-briefcase'
  },
  {
    title: 'QA baked in',
    description: 'Visual QA runs via MCP; baselines live alongside docs for fast reviews.',
    icon: 'i-lucide-badge-check'
  }
]

const testimonial = {
  quote: '“Aesir upgraded our Cursor prototype into a secure platform investors trust. The new component system cut landing page iteration from days to hours.”',
  author: 'SaaS Founder, Series A',
  role: 'Healthtech startup scaling to 10k DAU'
}
</script>
