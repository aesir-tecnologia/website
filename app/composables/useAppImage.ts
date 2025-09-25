import { computed, unref, type MaybeRefOrGetter } from 'vue'
import { useUiTokens } from '~/composables/useUiTokens'

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
  wrapperStyle?: Record<string, string>
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
    wrapperClass: 'overflow-hidden rounded-3xl border',
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
    wrapperClass: 'overflow-hidden rounded-[2.5rem] border',
    imgClass: 'h-full w-full object-cover',
  },
  feature: {
    sizes: 'sm:100vw md:50vw lg:480px',
    quality: 75,
    format: 'webp',
    placeholder: true,
    fit: 'cover',
    wrapperClass: 'overflow-hidden rounded-3xl border',
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
    wrapperClass: 'overflow-hidden rounded-full border',
    imgClass: 'h-full w-full object-cover',
  },
  logo: {
    sizes: '140px',
    quality: 80,
    format: 'png',
    placeholder: false,
    fit: 'contain',
    wrapperClass: 'flex items-center justify-center rounded-xl border p-4 shadow-sm',
    imgClass: 'h-full w-full object-contain',
  },
  testimonial: {
    sizes: 'sm:100vw md:40vw',
    quality: 72,
    format: 'webp',
    placeholder: true,
    fit: 'cover',
    wrapperClass: 'overflow-hidden rounded-3xl border',
    imgClass: 'h-full w-full object-cover',
  },
}

export const useAppImage = (
  preset: MaybeRefOrGetter<AppImagePreset> = 'default',
  overrides: MaybeRefOrGetter<AppImageOverrides> = {}
) => {
  const { surfaceColor, borderColor, shadow } = useUiTokens()

  const buildWrapperStyle = (name: AppImagePreset): Record<string, string> => {
    switch (name) {
      case 'logo':
        return {
          backgroundColor: surfaceColor('elevated'),
          borderColor: borderColor('soft'),
          boxShadow: shadow('soft'),
        }
      case 'avatar':
        return {
          backgroundColor: surfaceColor('muted'),
          borderColor: borderColor('soft'),
        }
      case 'testimonial':
        return {
          backgroundColor: surfaceColor('muted'),
          borderColor: borderColor('soft'),
        }
      case 'hero':
        return {
          backgroundColor: surfaceColor('muted'),
          borderColor: borderColor('soft'),
        }
      case 'feature':
        return {
          backgroundColor: surfaceColor('muted'),
          borderColor: borderColor('soft'),
        }
      default:
        return {
          backgroundColor: surfaceColor('muted'),
          borderColor: borderColor('soft'),
        }
    }
  }

  return computed(() => {
    const resolvedPreset = unref(preset)
    const resolvedOverrides = unref(overrides)
    const config = presetConfig[resolvedPreset] ?? presetConfig.default

    return {
      ...presetConfig.default,
      ...config,
      ...resolvedOverrides,
      wrapperStyle: buildWrapperStyle(resolvedPreset),
    }
  })
}

export type { AppImagePreset, AppImageOptions, AppImageOverrides }
