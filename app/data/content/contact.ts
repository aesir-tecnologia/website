export const contactContent = {
  seo: {
    title: 'Contact | Aesir Tecnologia',
    description:
      'Reach out to Aesir Tecnologia to discuss vibe coding cleanup, custom web and mobile development, and staff augmentation projects.'
  },
  hero: {
    eyebrow: 'Contact',
    headline: "Let's build something great together",
    description: "Ready to turn your idea into reality? Tell us about your project and we'll share how the Aesir team can help.",
    email: 'hello@aesir.dev'
  },
  projectInquiry: {
    tag: 'Project inquiry',
    title: 'What to share',
    introduction: 'Share the essentials so we can prepare a tailored proposal.',
    items: [
      'Project type and scope',
      'Timeline and budget targets',
      'Technical requirements or constraints',
      'Primary business goals for the work'
    ]
  },
  engagementModels: {
    tag: 'Engagement models',
    title: 'How we collaborate',
    items: [
      {
        title: 'Project-based',
        description: 'Fixed scope with defined deliverables when you need predictable outcomes.'
      },
      {
        title: 'Retainer',
        description: 'Ongoing development and support to iteratively grow your product.'
      },
      {
        title: 'Consultation',
        description: 'Architecture reviews, roadmap planning, and guidance for internal teams.'
      }
    ]
  },
  form: {
    title: 'Send project details',
    description: 'Share context about your product so we can align on outcomes, scope, and the team you need.',
    projectTypes: [
      'Vibe Coding Cleanup',
      'Custom Web Development',
      'Mobile Development',
      'Game Development',
      'Staff Augmentation',
      'Consultation'
    ]
  },
  consultation: {
    tag: 'Prefer to talk directly?',
    title: 'Schedule a consultation',
    description: 'We can walk through your product goals, current stack, and success criteria in a 30-minute session.',
    emailReminderPrefix: 'You can also email ',
    emailReminderSuffix: ' with availability.',
    cta: { label: 'Schedule a call', to: '#schedule' }
  },
  schedule: {
    tag: 'Need a calendar hold?',
    title: 'Share times that work for you',
    descriptionPrefix: 'Send a calendar invite to ',
    descriptionSuffix: " or drop us a note with your availability. We'll confirm within one business day."
  }
} as const

export type ContactContent = typeof contactContent
