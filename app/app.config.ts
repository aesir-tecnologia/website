export default defineAppConfig({
  ui: {
    colors: {
      primary: 'sky',
      secondary: 'indigo',
      accent: 'cyan',
      neutral: 'slate',
      info: 'sky',
      success: 'emerald',
      warning: 'amber',
      error: 'rose'
    },
    button: {
      defaultVariants: {
        color: 'primary'
      }
    }
  },
  site: {
    brand: {
      name: 'Aesir Tecnologia',
      tagline: 'Transforming vibe-coded prototypes into production-ready products.',
      to: '/',
    },
    navigation: {
      links: [
        {
          label: 'Home',
          to: '/',
          match: 'exact',
        },
        {
          label: 'Services',
          to: '/services',
          match: 'startsWith',
        },
        {
          label: 'About',
          to: '/about',
          match: 'startsWith',
        },
        {
          label: 'Process',
          to: '/process',
          match: 'startsWith',
        },
      ],
      cta: {
        label: 'Contact',
        to: '/contact',
      },
    },
    footer: {
      links: [
        {
          label: 'Privacy Policy',
          to: '/privacy',
        },
        {
          label: 'Terms',
          to: '/terms',
        },
      ],
    },
  }
})
