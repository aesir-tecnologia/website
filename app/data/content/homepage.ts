export const homepageContent = {
  seo: {
    title: 'Aesir Tecnologia | Vibe Coding Cleanup Specialists',
    description:
      'We transform AI-generated MVPs into production-ready software with security, performance, and scaling expertise.'
  },
  hero: {
    eyebrow: 'Vibe Coding Cleanup Specialists',
    headline: 'Transform Your AI-Generated MVP Into Production-Ready Software',
    subheadline:
      'We take vibe-coded applications and turn them into secure, scalable systems ready for real users and business growth. Plus full-stack development and expert staff augmentation.',
    primaryCta: {
      label: 'Audit My AI-Generated App',
      to: '/services/vibe-coding-cleanup'
    },
    secondaryCta: {
      label: 'Explore Our Services',
      to: '/services'
    },
    highlightsTitle: 'Why founders choose Aesir',
    points: [
      'Vibe coding cleanup specialists',
      'Full-stack development expertise',
      'Expert remote developers'
    ],
    highlights: [
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
  },
  problem: {
    headline: 'Your AI-Generated App Works... But Is It Ready for Business?',
    description:
      'Vibe coding tools like Cursor, Replit Agent, and Lovable create functional prototypes fast. But AI-generated code often contains security vulnerabilities, performance bottlenecks, and architectural issues that prevent scaling.',
    challengeTitle: 'The Challenge',
    challenges: [
      'Code generated without security guardrails',
      "Architecture that falters under real-world usage",
      'Missing tests and documentation for handoffs'
    ],
    impactTitle: 'What Happens Next',
    impacts: [
      'Your app crashes under real user load',
      'Security vulnerabilities expose sensitive data',
      'Technical debt makes new features impossible',
      'Investors question your technical foundation'
    ]
  },
  services: {
    headline: 'Three Ways We Transform Your Software Vision Into Reality',
    items: [
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
        focus: 'Web Apps · 25%'
      },
      {
        name: 'Expert Staff Augmentation',
        description: 'Skilled developers who integrate seamlessly with your team for short-term or long-term projects.',
        to: '/services/staff-augmentation',
        cta: 'Find Your Developer',
        focus: 'Team Scaling · 25%'
      }
    ]
  },
  cleanup: {
    headline: 'From Prototype to Production: The Only Vibe Coding Cleanup Service You Need',
    description:
      "Thousands of entrepreneurs are building with AI tools daily. Most create functional MVPs but lack the engineering expertise to make them production-ready. That's where we come in.",
    steps: [
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
    ],
    highlight: {
      title: 'Perfect For',
      items: [
        'Entrepreneurs seeking investment with technical due diligence',
        'Startups moving from MVP to market',
        'Non-technical founders with working prototypes',
        'Businesses needing production deployment'
      ]
    }
  },
  techStack: {
    headline: 'Modern Technologies, Production-Grade Results',
    description: 'A tech stack selected for reliability, scalability, and modern product experiences.',
    logos: [
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
  },
  reasons: {
    headline: 'The Technical Partner Your Growing Business Needs',
    items: [
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
  },
  testimonial: {
    headline: 'Real Results for Growing Businesses',
    quote:
      '“Aesir took our Cursor-generated prototype and transformed it into a system that handles 10,000+ daily users. The security audit alone saved us from potential disasters we never knew existed.”',
    author: 'SaaS Startup Founder'
  },
  finalCta: {
    headline: 'Ready to Make Your Application Production-Ready?',
    items: [
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
  }
} as const

export type HomepageContent = typeof homepageContent
