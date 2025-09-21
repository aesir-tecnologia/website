export const processContent = {
  seo: {
    title: 'Process | Aesir Tecnologia',
    description:
      'Discover the Aesir process for transforming AI-generated prototypes into production-ready software with security, performance, and scalability.'
  },
  hero: {
    title: 'Our Process',
    subheading:
      'A consistent, battle-tested process that transforms vibe-coded prototypes into production-grade products while keeping teams aligned.'
  },
  steps: [
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
  ],
  benefits: {
    headline: 'Designed for Scale and Reliability',
    items: [
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
  },
  differentiation: {
    title: 'What Sets Us Apart',
    items: [
      'First-mover in vibe coding cleanup with deep specialization',
      'Technical depth that goes beyond traditional development shops',
      'Complete solution covering cleanup, custom development, and team scaling'
    ]
  },
  audiences: {
    title: 'Who We Work With',
    items: [
      'Entrepreneurs with vibe-coded MVPs needing production deployment',
      'Businesses requiring custom development backed by engineering rigor',
      'Growing companies that need to scale their development teams'
    ]
  }
} as const

export type ProcessContent = typeof processContent
