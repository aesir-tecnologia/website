export const aboutContent = {
  seo: {
    title: 'About Aesir Tecnologia',
    description:
      'Aesir Tecnologia builds secure, scalable software with a focus on vibe coding cleanup, custom development, and long-term client partnerships.'
  },
  hero: {
    title: 'Building Software Excellence for Over a Decade',
    subheading:
      "We've been passionate about creating software that makes a difference. What started as a vision to build better applications has grown into a team dedicated to delivering exceptional digital solutions.",
    primaryCta: { label: 'Work With Us', to: '/contact' },
    secondaryCta: { label: 'Explore Our Services', to: '/services' }
  },
  mission: {
    title: 'Our Mission',
    description:
      'We believe great software should be human-centered, scalable, and built to last. Every application we create is designed to grow with your business while providing an exceptional user experience.'
  },
  pillars: [
    { title: 'Quality First', description: 'We build applications with strong engineering principles and proven architecture.' },
    { title: 'Zero Downtime', description: 'Critical applications demand seamless deployments and resilient infrastructure.' },
    { title: 'Modern Technologies', description: 'We stay current with frameworks, tooling, and best practices so your stack stays modern.' },
    { title: 'Client Partnership', description: 'Your success is our success. We operate as an embedded extension of your team.' }
  ],
  values: {
    headline: 'Values',
    items: [
      { title: 'Excellence', description: 'Every line of code matters and receives rigorous review.' },
      { title: 'Reliability', description: 'Applications you can depend on from launch to scale.' },
      { title: 'Innovation', description: 'We embrace new technologies thoughtfully to deliver meaningful value.' },
      { title: 'Partnership', description: 'Long-term collaboration built on transparency and trust.' }
    ]
  }
} as const

export type AboutContent = typeof aboutContent
