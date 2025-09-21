export const servicesContent = {
  overview: {
    seo: {
      title: 'Aesir Tecnologia | Services',
      description:
        'Explore vibe coding cleanup, custom web development, staff augmentation, mobile development, and game development services from Aesir.'
    },
    hero: {
      title: 'Services',
      subheading:
        'From vibe coding cleanup to full-stack delivery and team scaling, Aesir covers every step between prototype and production.'
    },
    services: [
      {
        name: 'Vibe Coding Cleanup',
        summary: 'Security audits, architecture restructuring, and performance optimization to turn AI-generated prototypes into investable products.',
        to: '/services/vibe-coding-cleanup',
        cta: 'Audit My Vibe-Coded App',
        focus: 'Primary Focus · 50%'
      },
      {
        name: 'Custom Web Development',
        summary: 'Full-stack applications engineered for scale using Laravel, React, Vue, Node.js, and Python.',
        to: '/services/web-development',
        cta: 'Start Your Web Project',
        focus: 'Custom Solutions · 25%'
      },
      {
        name: 'Expert Staff Augmentation',
        summary: 'Pre-vetted developers who integrate with your workflows for short-term or long-term engagements.',
        to: '/services/staff-augmentation',
        cta: 'Find Your Developer',
        focus: 'Team Scaling · 25%'
      },
      {
        name: 'Mobile Development',
        summary: 'Native and cross-platform mobile experiences with React Native, Flutter, Swift, and Kotlin.',
        to: '/services/mobile-development',
        cta: 'Build Your Mobile App',
        focus: 'Mobile Excellence'
      },
      {
        name: 'Game Development',
        summary: 'Interactive games and immersive experiences powered by Unity, HTML5, and WebGL.',
        to: '/services/game-development',
        cta: 'Create Your Game',
        focus: 'Engagement Experiences'
      }
    ],
    highlights: [
      {
        title: 'Vibe Coding Cleanup',
        description:
          'Turn AI-generated MVPs into production-ready applications with security hardening, architecture restructuring, performance tuning, and deployment readiness.',
        to: '/services/vibe-coding-cleanup',
        cta: 'Audit My App'
      },
      {
        title: 'Technology Expertise',
        description:
          'Multidisciplinary team fluent in Laravel, Vue, React, Node.js, Python, Unity, mobile frameworks, and modern DevOps practices.',
        to: '/about',
        cta: 'See How We Work'
      }
    ]
  },
  details: {
    vibeCodingCleanup: {
      seo: {
        title: 'Vibe Coding Cleanup | Aesir Tecnologia',
        description:
          'Comprehensive vibe coding cleanup: security hardening, performance optimization, architecture restructuring, testing, and deployment readiness.'
      },
      hero: {
        title: 'The First and Only Vibe Coding Cleanup Service',
        subheading:
          'Your vibe-coded app works, but is it ready for real users and business growth? We transform AI-generated applications into secure, scalable, maintainable systems that can handle production traffic and continued development.',
        primaryCta: { label: 'Audit My Vibe-Coded App', to: '#contact' },
        secondaryCta: { label: 'Explore All Services', to: '/services' }
      },
      problems: {
        primary: {
          title: 'The Problem We Solve',
          description:
            'Vibe coding tools like Cursor, Replit Agent, and Lovable create functional prototypes fast, but the generated code often has:',
          items: [
            'Security vulnerabilities and exposed endpoints',
            "Poor architecture that doesn't scale",
            'Lack of proper error handling and validation',
            'No testing framework or documentation',
            'Performance bottlenecks and inefficient queries',
            'Technical debt that blocks future development'
          ]
        },
        secondary: {
          title: 'Common Issues We Fix',
          items: [
            'Exposed admin panels and debug endpoints',
            'Hardcoded API keys and credentials',
            'Missing input validation leading to injection attacks',
            'Inefficient database queries causing slowdowns',
            'Poor error handling causing crashes',
            'Lack of proper user authentication',
            'Unstructured code making updates impossible'
          ]
        }
      },
      process: {
        headline: 'Our Vibe Cleanup Process',
        primaryPhases: [
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
        ],
        extendedPhases: [
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
      },
      deliverables: {
        title: 'What You Get',
        items: [
          'Security report with detailed vulnerability fixes',
          'Performance benchmarks before and after optimization',
          'Clean, well-structured codebase ready for handoff',
          'Documentation and development guidelines',
          'Comprehensive testing suite',
          'Deployment and monitoring strategy',
          'Scalability roadmap for future growth'
        ]
      },
      audiences: {
        title: 'Perfect For',
        items: [
          'Entrepreneurs with vibe-coded MVPs seeking investment',
          'Startups moving from prototype to product',
          'Businesses with AI-generated apps needing production deployment',
          'Non-technical founders with working prototypes',
          'Companies switching from rapid prototyping to serious development'
        ]
      },
      values: {
        headline: 'Why Founders Trust the Cleanup',
        valueProps: [
          'Turn AI-generated prototypes into investable assets',
          'Fix security vulnerabilities before they become breaches',
          'Transform unscalable code into enterprise-ready systems'
        ],
        targetMessages: [
          "Your competitors are building with AI. Don't let them beat you to market because of technical issues.",
          "Investors will scrutinize your technical foundation. Make sure it passes.",
          'Scale confidently knowing your foundation is solid.'
        ]
      },
      ctas: {
        headline: 'Ready to Clean Up Your AI-Generated Application?',
        description: 'Request a comprehensive audit to understand your security, performance, and scalability gaps.',
        cards: [
          {
            title: 'Request an Audit',
            description: 'Share your repository or deployment and we will prepare a detailed plan of action.',
            to: '/contact',
            cta: 'Request Audit'
          },
          {
            title: 'Need Ongoing Support?',
            description: 'Combine vibe coding cleanup with custom development and staff augmentation for a complete product team.',
            to: '/services',
            cta: 'Plan a Roadmap'
          }
        ]
      }
    },
    webDevelopment: {
      seo: {
        title: 'Custom Web Development | Aesir Tecnologia',
        description:
          'Full-stack web applications built with Laravel, React, Vue.js, Node.js, and Python. Scalable architecture, comprehensive testing, and production-ready delivery.'
      },
      hero: {
        title: 'Custom Web Applications That Scale With Your Vision',
        subheading:
          'When AI tooling reaches its limits, our engineering team builds production-grade web applications tailored to your business.',
        primaryCta: { label: 'Start Your Web Project', to: '#contact' },
        secondaryCta: { label: 'View All Services', to: '/services' }
      },
      overview: {
        title: 'Overview',
        description:
          'Custom web applications using Laravel, React, Vue.js, Node.js, and Python. From e-commerce platforms to enterprise systems built for performance and scalability.',
        whatWeBuild: [
          'E-commerce platforms and online stores',
          'Business management systems',
          'Customer portals and dashboards',
          'Content management systems',
          'API-driven applications',
          'Progressive web apps (PWAs)'
        ],
        values: [
          'When AI tools are not enough, we build from scratch',
          'Modern technologies with proven architectures',
          'Built for growth from day one',
          'Partnership approach to development'
        ]
      },
      approach: {
        headline: 'Our Approach',
        stages: [
          { title: 'Discovery & Planning', description: 'Understand business requirements, constraints, and goals to scope the right solution.' },
          { title: 'Architecture Design', description: 'Create scalable, secure system designs aligned with your growth plans.' },
          { title: 'Agile Development', description: 'Iterative delivery with frequent check-ins and release milestones.' },
          { title: 'Comprehensive Testing', description: 'Reliability through automated and manual QA before every release.' },
          { title: 'Zero-Downtime Deployment', description: 'Deployment strategies that keep your business running during launches.' },
          { title: 'Ongoing Support', description: 'Maintenance, feature updates, and performance monitoring on demand.' }
        ]
      },
      technology: {
        title: 'Technologies Used',
        items: [
          'Laravel',
          'Vue.js',
          'React',
          'JavaScript & TypeScript',
          'Node.js',
          'MySQL & PostgreSQL'
        ]
      },
      messaging: {
        title: 'Target Messaging',
        items: [
          'Some ideas are too unique for AI tools. We build the impossible.',
          'Skip the prototype phase. Go straight to production-ready.',
          'Your vision deserves custom solutions, not AI templates.'
        ]
      },
      ctas: {
        headline: 'Bring Your Next Web Application to Market',
        description: 'Share your requirements and we will architect a roadmap from discovery to deployment.',
        cards: [
          {
            title: 'Start Your Project',
            description: 'Tell us about your idea, business goals, and timeline so we can design the ideal solution.',
            to: '/contact',
            cta: 'Start Your Web Project'
          },
          {
            title: 'Need a Technical Partner?',
            description: 'Blend custom development with staff augmentation for continuous delivery.',
            to: '/services/staff-augmentation',
            cta: 'Explore Team Augmentation'
          }
        ]
      }
    },
    staffAugmentation: {
      seo: {
        title: 'Staff Augmentation | Aesir Tecnologia',
        description:
          'Pre-vetted remote developers experienced with traditional coding and AI-assisted workflows. Flexible engagements from part-time to full-time.'
      },
      hero: {
        title: 'Expert Developers Who Speak Both Traditional Code and AI',
        subheading:
          'Scale your development capacity with remote-first professionals who integrate seamlessly with your team and toolchain.',
        primaryCta: { label: 'Find Your Developer', to: '#contact' },
        secondaryCta: { label: 'View All Services', to: '/services' }
      },
      overview: {
        title: 'Overview',
        description:
          'Scale your development capacity with experienced developers who become an extension of your team. Available for short-term and long-term engagements.',
        benefits: [
          'Pre-vetted senior and mid-level developers',
          'Expertise in your technology stack',
          'Remote-first professionals with excellent communication',
          'Flexible engagement models from part-time to full-time',
          'Direct integration with your existing workflows',
          'Ongoing support and account management'
        ],
        expertiseAreas: [
          { title: 'Frontend', items: 'React, Vue.js, Angular, JavaScript/TypeScript' },
          { title: 'Backend', items: 'PHP/Laravel, Node.js, Python/Django, .NET' },
          { title: 'Mobile', items: 'React Native, Flutter, iOS, Android' },
          { title: 'DevOps', items: 'AWS, Docker, CI/CD, Linux administration' },
          { title: 'Databases', items: 'MySQL, PostgreSQL, MongoDB, Redis' }
        ]
      },
      engagementModels: {
        headline: 'Engagement Models',
        items: [
          { title: 'Short-term Projects', description: '1-6 month engagements for specific deliverables and product pushes.' },
          { title: 'Long-term Partnerships', description: '6+ month collaborations for ongoing development and product growth.' },
          { title: 'Team Extension', description: 'Add multiple developers to expand velocity without hiring overhead.' },
          { title: 'Specialized Roles', description: 'Senior architects, tech leads, or niche specialists on demand.' }
        ]
      },
      reasons: {
        title: 'Why Choose Our Developers',
        items: [
          'Rigorous technical screening process',
          'Strong English communication skills',
          'Remote work experience and self-management',
          'Cultural fit assessment for every placement'
        ]
      },
      messaging: {
        title: 'Target Messaging',
        items: [
          'Need developers who understand both traditional coding and AI assistance?',
          "Scale your team with experts who've seen it all.",
          "Remote developers who integrate like they're sitting next to you."
        ]
      },
      ctas: {
        headline: 'Scale Your Team Without Delay',
        description: 'Tell us about your stack, workflows, and goals so we can match the right developers.',
        cards: [
          {
            title: 'Request Talent',
            description: 'Share role requirements, timelines, and collaboration expectations.',
            to: '/contact',
            cta: 'Find Your Developer'
          },
          {
            title: 'Combine With Vibe Cleanup',
            description: 'Deploy augmented developers to maintain velocity after cleanup.',
            to: '/services/vibe-coding-cleanup',
            cta: 'Audit Your App'
          }
        ]
      }
    },
    mobileDevelopment: {
      seo: {
        title: 'Mobile Development | Aesir Tecnologia',
        description:
          'Native iOS, Android, and cross-platform mobile applications built with React Native, Flutter, and modern APIs.'
      },
      hero: {
        title: 'Native and Cross-Platform Mobile Solutions',
        subheading:
          'Mobile applications that deliver exceptional user experiences across iOS and Android, from concept to launch and growth.',
        primaryCta: { label: 'Build Your Mobile App', to: '#contact' },
        secondaryCta: { label: 'View All Services', to: '/services' }
      },
      overview: {
        title: 'Overview',
        description:
          'Whether you need a native app or cross-platform experience, we build mobile products users love with reliable performance and maintainability.',
        offerings: [
          'iOS and Android native apps',
          'Cross-platform applications (React Native, Flutter)',
          'Progressive web apps (PWAs)',
          'API integrations and real-time features',
          'Mobile-first web experiences'
        ],
        process: [
          { title: 'Strategy', description: 'Evaluate platform fit, feature set, and success metrics.' },
          { title: 'Design', description: 'User-centered design and rapid prototyping.' },
          { title: 'Development', description: 'Native or cross-platform development with continuous communication.' },
          { title: 'Testing', description: 'Device testing and performance optimization for stability.' },
          { title: 'Launch', description: 'App store submission, deployment, and release coordination.' },
          { title: 'Growth', description: 'Analytics integration, A/B testing, and feature updates.' }
        ]
      },
      technology: {
        title: 'Technologies Used',
        items: [
          'React Native',
          'Flutter',
          'Swift',
          'Kotlin',
          'JavaScript & TypeScript',
          'API integration'
        ]
      },
      messaging: {
        title: 'Target Messaging',
        items: [
          'Deliver native-quality experiences across platforms.',
          'Balance speed and performance with cross-platform tooling.',
          'Launch with confidence backed by rigorous testing and analytics.'
        ]
      },
      ctas: {
        headline: 'Launch Your Next Mobile Experience',
        description: 'Share your platform goals, priority features, and schedule so we can assemble the right mobile team.',
        cards: [
          {
            title: 'Project Kickoff',
            description: 'We help refine scope, choose the right technology stack, and plan for launch.',
            to: '/contact',
            cta: 'Build Your Mobile App'
          },
          {
            title: 'Need Web Support Too?',
            description: 'Extend your mobile experience with backend and web app development.',
            to: '/services/web-development',
            cta: 'Explore Web Development'
          }
        ]
      }
    },
    gameDevelopment: {
      seo: {
        title: 'Game Development | Aesir Tecnologia',
        description:
          'Unity and HTML5 game development for mobile and web, including gamification, educational experiences, and interactive content.'
      },
      hero: {
        title: 'Interactive Games and Immersive Experiences',
        subheading:
          'Build engaging games and gamified experiences with Unity and HTML5 to captivate your audience across web and mobile.',
        primaryCta: { label: 'Create Your Game', to: '#contact' },
        secondaryCta: { label: 'View All Services', to: '/services' }
      },
      overview: {
        title: 'Overview',
        description:
          'Interactive games and experiences using Unity and HTML5. From entertainment to education, we deliver rich, performant content.',
        offerings: [
          'Mobile games for iOS and Android',
          'Web-based games and interactive content',
          'Educational and training games',
          'Gamification features for apps',
          'HTML5 games and animations'
        ],
        services: [
          { title: 'Concept Development', description: 'Game design, mechanics, and narrative planning.' },
          { title: 'Art and Animation', description: '2D/3D asset production, character design, and motion.' },
          { title: 'Programming', description: 'Unity, HTML5, and JavaScript engineering for cross-platform delivery.' },
          { title: 'Testing', description: 'Quality assurance and device testing for smooth experiences.' },
          { title: 'Publishing', description: 'App store submission and web deployment support.' },
          { title: 'Analytics', description: 'Player behavior tracking and live ops optimization.' }
        ]
      },
      technology: {
        title: 'Technologies Used',
        items: ['Unity', 'HTML5', 'JavaScript', 'WebGL', 'Mobile SDKs']
      },
      messaging: {
        title: 'Target Messaging',
        items: [
          'Deliver immersive experiences that drive engagement.',
          'Combine storytelling, art, and engineering to ship compelling games.',
          'Extend your product strategy with gamified touchpoints.'
        ]
      },
      ctas: {
        headline: 'Bring Your Experience to Life',
        description: 'Share your concept, audience, and platform needs to start production planning.',
        cards: [
          {
            title: 'Start a Game Project',
            description: 'We guide you through concept validation, production planning, and deployment.',
            to: '/contact',
            cta: 'Create Your Game'
          },
          {
            title: 'Add Gamification',
            description: 'Enhance existing products with interactive features and retention loops.',
            to: '/services/web-development',
            cta: 'Integrate With Your App'
          }
        ]
      }
    }
  }
} as const

export type ServicesContent = typeof servicesContent
