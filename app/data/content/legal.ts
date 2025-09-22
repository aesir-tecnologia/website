export const legalContent = {
  privacy: {
    seo: {
      title: 'Privacy Policy | Aesir Tecnologia',
      description:
        'Understand how Aesir Tecnologia handles inquiry data, service information, and direct communications.'
    },
    hero: {
      eyebrow: 'Legal',
      title: 'Privacy Policy',
      description: 'We respect your privacy and outline how we handle data across our services and website.'
    },
    sections: [
      {
        title: 'How we handle your data',
        paragraphs: [
          'We collect only the information needed to respond to project inquiries, deliver agreed services, and coordinate ongoing support. Data is never sold or shared beyond direct service delivery requirements.'
        ]
      }
    ],
    contact: {
      prompt: 'For privacy questions, email',
      email: 'hello@aesir.dev',
      suffix: '.',
      ctaLabel: 'Email privacy team'
    }
  },
  terms: {
    seo: {
      title: 'Terms & Conditions | Aesir Tecnologia',
      description:
        'Review the terms and conditions that govern Aesir Tecnologia service engagements and deliverables.'
    },
    hero: {
      eyebrow: 'Legal',
      title: 'Terms & Conditions',
      description: "The following outlines the terms for engaging with Aesir Tecnologia's services."
    },
    sections: [
      {
        title: 'Engagement overview',
        paragraphs: [
          'Service engagements are governed by mutual agreements that define scope, deliverables, and timelines. We deliver work using industry-leading practices for security, performance, and reliability.'
        ]
      }
    ],
    contact: {
      prompt: 'Need contract details or clarifications? Email',
      email: 'hello@aesir.dev',
      suffix: '.',
      ctaLabel: 'Email legal team'
    }
  }
} as const

export type LegalContent = typeof legalContent
export type LegalSlug = keyof LegalContent
