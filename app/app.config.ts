export default defineAppConfig({
  ui: {
    primary: 'sky',
    gray: 'slate',
    icons: {
      dynamic: true
    },
    button: {
      rounded: 'rounded-full',
      default: {
        color: 'primary',
        variant: 'solid',
        size: 'md'
      },
      variants: {
        solid: 'font-semibold shadow-sm hover:shadow-md transition-shadow duration-200',
        outline:
          'border border-slate-700/80 bg-transparent text-slate-100 hover:bg-slate-800/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400',
        ghost: 'bg-transparent text-slate-200 hover:bg-slate-800/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-200'
      }
    },
    card: {
      base: 'border border-slate-800/70 bg-slate-900/70 backdrop-blur rounded-3xl shadow-lg shadow-black/20',
      body: 'p-6 sm:p-8',
      header: 'p-6 sm:p-8 pb-0',
      footer: 'p-6 sm:p-8 pt-0'
    },
    container: {
      constrained: 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'
    },
    input: {
      rounded: 'rounded-xl',
      color: {
        white: 'bg-slate-900/60 border border-slate-700/80 focus:ring-2 focus:ring-sky-400/80 focus:border-sky-400/60 text-slate-100 placeholder:text-slate-500'
      }
    }
  },
  site: {
    name: 'Aesir Tecnologia',
    description: 'Transforming vibe-coded prototypes into production-ready products.',
    contactEmail: 'hello@aesir.dev',
    navigation: [
      { labelKey: 'navigation.home', to: '/' },
      { labelKey: 'navigation.services', to: '/services' },
      { labelKey: 'navigation.about', to: '/about' },
      { labelKey: 'navigation.process', to: '/process' },
      { labelKey: 'navigation.contact', to: '/contact' }
    ],
    primaryCta: { labelKey: 'navigation.contact', to: '/contact' },
    footerLinks: [
      { labelKey: 'footer.privacy', to: '/privacy' },
      { labelKey: 'footer.terms', to: '/terms' }
    ],
    socialLinks: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/aesir-tecnologia/' },
      { label: 'GitHub', href: 'https://github.com/aesir-tecnologia' }
    ],
    logo: {
      text: 'Aesir Tecnologia'
    }
  }
})
