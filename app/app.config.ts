export default defineAppConfig({
  ui: {
    colors: {
      primary: '#007BFF',
      secondary: 'slate',
      accent: 'slate',
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
    },
    tokens: {
      body: {
        light: '#f8fafc',
        dark: '#0f172a'
      },
      surfaces: {
        900: '#0f172a',
        850: 'rgba(15, 23, 42, 0.85)',
        800: 'rgba(15, 23, 42, 0.8)',
        750: 'rgba(15, 23, 42, 0.75)',
        600: 'rgba(15, 23, 42, 0.6)',
        400: 'rgba(15, 23, 42, 0.4)',
        300: 'rgba(15, 23, 42, 0.3)',
        950: 'rgba(15, 23, 42, 0.95)'
      },
      borders: {
        soft: 'rgba(148, 163, 184, 0.2)',
        mid: 'rgba(148, 163, 184, 0.25)',
        strong: 'rgba(148, 163, 184, 0.4)',
        emphasis: 'rgba(148, 163, 184, 0.8)'
      },
      text: {
        primary: '#e2e8f0',
        subtle: 'rgba(226, 232, 240, 0.85)',
        muted: 'rgba(226, 232, 240, 0.75)',
        soft: 'rgba(226, 232, 240, 0.7)',
        secondary: 'rgba(226, 232, 240, 0.8)',
        inverse: '#f8fafc'
      },
      accents: {
        highlight: 'rgba(30, 64, 175, 0.25)',
        primary500: '#38bdf8',
        primary400: '#22d3ee',
        secondary500: '#6366f1',
        secondary400: '#7c3aed',
        accent500: '#2dd4bf',
        primaryContrast: '#0f172a',
        primaryOutline: 'rgba(56, 189, 248, 0.5)',
        primaryGlow: '0 20px 40px rgba(56, 189, 248, 0.25)',
        secondaryOutline: 'rgba(59, 130, 246, 0.45)',
        secondarySurface: 'rgba(37, 99, 235, 0.12)',
        accentSurface: 'rgba(45, 212, 191, 0.08)',
        textFocus: 'rgba(148, 163, 184, 0.9)',
        glowShadow: '0 40px 80px rgba(15, 23, 42, 0.35)'
      },
      appShell: {
        lightBackground: [
          'radial-gradient(circle at top, rgba(56, 189, 248, 0.18), transparent 60%)',
          'linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 1))'
        ],
        darkBackground: [
          'radial-gradient(circle at top, rgba(30, 64, 175, 0.25), transparent 60%)',
          '#0f172a'
        ]
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
