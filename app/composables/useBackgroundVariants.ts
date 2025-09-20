import { computed } from 'vue'

type BackgroundVariant =
  | 'default'
  | 'gradient'
  | 'dark'
  | 'surface'
  | 'testimonial'
  | 'cta'
  | 'highlight'

const backgroundVariants: Record<BackgroundVariant, string> = {
  default: 'bg-transparent',
  gradient: 'bg-gradient-to-br from-sky-500/15 via-slate-900/80 to-indigo-500/20',
  dark: 'bg-slate-950/90',
  surface: 'bg-slate-900/70 backdrop-blur border border-slate-800/60',
  testimonial: 'bg-gradient-to-br from-slate-900/90 via-sky-900/40 to-slate-950',
  cta: 'bg-gradient-to-br from-sky-500/25 via-indigo-500/20 to-cyan-500/20',
  highlight: 'bg-sky-500/20 border border-sky-500/40'
}

export function useBackgroundVariant(variant: BackgroundVariant) {
  return computed(() => backgroundVariants[variant] ?? backgroundVariants.default)
}

export { backgroundVariants }
