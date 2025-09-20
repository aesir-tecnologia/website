import { computed, unref, type MaybeRefOrGetter } from 'vue'

type AppImagePreset = 'default' | 'hero' | 'feature' | 'avatar' | 'logo' | 'testimonial'

type AppImageOptions = {
  sizes?: string
  width?: number | string
  height?: number | string
  quality?: number
  format?: string
  placeholder?: boolean | string
  loading?: 'lazy' | 'eager'
  decoding?: 'auto' | 'sync' | 'async'
  fit?: 'cover' | 'contain' | 'fill'
  densities?: string
  modifiers?: Record<string, unknown>
  wrapperClass?: string
  imgClass?: string
}

type AppImageOverrides = Partial<AppImageOptions>

const presetConfig: Record<AppImagePreset, AppImageOptions> = {
  default: {
    sizes: 'sm:100vw md:50vw lg:560px',
    quality: 80,
    format: 'webp',
    placeholder: true,
    loading: 'lazy',
    decoding: 'async',
    fit: 'cover',
    wrapperClass: 'overflow-hidden rounded-3xl bg-slate-200/30 dark:bg-slate-800/30',
    imgClass: 'h-full w-full object-cover',
  },
  hero: {
    sizes: '100vw',
    quality: 85,
    format: 'webp',
    placeholder: true,
    loading: 'lazy',
    decoding: 'async',
    fit: 'cover',
    wrapperClass: 'overflow-hidden rounded-[2.5rem] bg-slate-200/20 dark:bg-slate-800/40',
    imgClass: 'h-full w-full object-cover',
  },
  feature: {
    sizes: 'sm:100vw md:50vw lg:480px',
    quality: 75,
    format: 'webp',
    placeholder: true,
    fit: 'cover',
    wrapperClass: 'overflow-hidden rounded-3xl bg-slate-200/20 dark:bg-slate-800/40',
    imgClass: 'h-full w-full object-cover',
  },
  avatar: {
    width: 128,
    height: 128,
    sizes: '128px',
    quality: 80,
    format: 'webp',
    placeholder: true,
    fit: 'cover',
    wrapperClass: 'overflow-hidden rounded-full border border-slate-200/60 dark:border-slate-800/60',
    imgClass: 'h-full w-full object-cover',
  },
  logo: {
    sizes: '140px',
    quality: 80,
    format: 'png',
    placeholder: false,
    fit: 'contain',
    wrapperClass: 'flex items-center justify-center rounded-xl bg-white/90 p-4 shadow-sm shadow-slate-200/20 dark:bg-slate-900/80 dark:shadow-slate-950/40',
    imgClass: 'h-full w-full object-contain',
  },
  testimonial: {
    sizes: 'sm:100vw md:40vw',
    quality: 72,
    format: 'webp',
    placeholder: true,
    fit: 'cover',
    wrapperClass: 'overflow-hidden rounded-3xl bg-slate-200/20 dark:bg-slate-900/40',
    imgClass: 'h-full w-full object-cover',
  },
}

export const useAppImage = (
  preset: MaybeRefOrGetter<AppImagePreset> = 'default',
  overrides: MaybeRefOrGetter<AppImageOverrides> = {}
) => {
  return computed(() => {
    const resolvedPreset = unref(preset)
    const resolvedOverrides = unref(overrides)
    const config = presetConfig[resolvedPreset] ?? presetConfig.default

    return {
      ...presetConfig.default,
      ...config,
      ...resolvedOverrides,
    }
  })
}

export type { AppImagePreset, AppImageOptions, AppImageOverrides }
