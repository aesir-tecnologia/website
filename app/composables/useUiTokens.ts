import { computed, onMounted, type ComputedRef, watch } from 'vue'

type Mode = 'light' | 'dark'

type ModeValue<T> = {
  light?: T
  dark?: T
}

const defaultTokens = {
  palette: {
    primary: '#0A1F44',
    primaryDark: '#07152E',
    primaryMuted: '#1C2F57',
    accent: '#D4AF37',
    accentSoft: '#E6C86F',
    accentDeep: '#9F8324',
    neutral: '#B0B0B0',
    neutralSoft: '#D8D8D8',
    neutralDeep: '#6F6F6F'
  },
  body: {
    light: '#F5F7FB',
    dark: '#050B1D'
  },
  surfaces: {
    base: {
      light: '#FFFFFF',
      dark: 'rgba(10, 31, 68, 0.95)'
    },
    elevated: {
      light: 'rgba(255, 255, 255, 0.96)',
      dark: 'rgba(10, 31, 68, 0.85)'
    },
    muted: {
      light: '#EEF1F7',
      dark: 'rgba(10, 31, 68, 0.65)'
    },
    subtle: {
      light: '#F7F9FC',
      dark: 'rgba(10, 31, 68, 0.5)'
    },
    accent: {
      light: 'rgba(212, 175, 55, 0.18)',
      dark: 'rgba(212, 175, 55, 0.28)'
    },
    overlay: {
      light: 'rgba(10, 31, 68, 0.08)',
      dark: 'rgba(2, 7, 20, 0.65)'
    }
  },
  borders: {
    soft: {
      light: 'rgba(10, 31, 68, 0.14)',
      dark: 'rgba(212, 175, 55, 0.2)'
    },
    strong: {
      light: 'rgba(10, 31, 68, 0.24)',
      dark: 'rgba(212, 175, 55, 0.45)'
    },
    accent: '#D4AF37'
  },
  text: {
    primary: {
      light: '#0A1F44',
      dark: '#F3F6FE'
    },
    muted: {
      light: 'rgba(10, 31, 68, 0.72)',
      dark: 'rgba(240, 243, 255, 0.75)'
    },
    subtle: {
      light: 'rgba(10, 31, 68, 0.6)',
      dark: 'rgba(242, 244, 255, 0.6)'
    },
    inverse: {
      light: '#F4F6FE',
      dark: '#0A1F44'
    },
    accent: '#D4AF37',
    onAccent: '#241803'
  },
  accents: {
    primary500: '#0A1F44',
    primary400: '#132A5C',
    accent500: '#D4AF37',
    accent400: '#E6C86F',
    neutral500: '#B0B0B0',
    highlight: 'rgba(212, 175, 55, 0.22)',
    outline: 'rgba(212, 175, 55, 0.4)',
    glowShadow: '0 40px 80px rgba(10, 31, 68, 0.32)'
  },
  tones: {
    primary: {
      background: {
        light: 'rgba(10, 31, 68, 0.08)',
        dark: 'rgba(10, 31, 68, 0.35)'
      },
      border: {
        light: 'rgba(10, 31, 68, 0.2)',
        dark: 'rgba(10, 31, 68, 0.5)'
      },
      text: {
        light: '#0A1F44',
        dark: '#F3F6FE'
      }
    },
    accent: {
      background: {
        light: 'rgba(212, 175, 55, 0.18)',
        dark: 'rgba(212, 175, 55, 0.3)'
      },
      border: {
        light: 'rgba(212, 175, 55, 0.35)',
        dark: 'rgba(212, 175, 55, 0.5)'
      },
      text: {
        light: '#241803',
        dark: '#1F1405'
      }
    },
    neutral: {
      background: {
        light: 'rgba(176, 176, 176, 0.18)',
        dark: 'rgba(176, 176, 176, 0.28)'
      },
      border: {
        light: 'rgba(176, 176, 176, 0.35)',
        dark: 'rgba(176, 176, 176, 0.45)'
      },
      text: {
        light: '#2F2F2F',
        dark: '#EEEEEE'
      }
    },
    secondary: {
      background: {
        light: 'rgba(19, 42, 92, 0.18)',
        dark: 'rgba(19, 42, 92, 0.32)'
      },
      border: {
        light: 'rgba(19, 42, 92, 0.35)',
        dark: 'rgba(19, 42, 92, 0.55)'
      },
      text: {
        light: '#0A1F44',
        dark: '#E6ECFF'
      }
    }
  },
  backgrounds: {
    primary: {
      radial: 'rgba(10, 31, 68, 0.28)',
      linear: 'rgba(10, 31, 68, 0.18)'
    },
    accent: {
      radial: 'rgba(212, 175, 55, 0.3)',
      linear: 'rgba(212, 175, 55, 0.18)'
    },
    neutral: {
      radial: 'rgba(176, 176, 176, 0.24)',
      linear: 'rgba(176, 176, 176, 0.16)'
    }
  },
  gradients: {
    hero: {
      light: 'radial-gradient(circle at 12% 0%, rgba(10, 31, 68, 0.18), transparent 55%), linear-gradient(165deg, rgba(255, 255, 255, 0.95), rgba(245, 247, 251, 0.98))',
      dark: 'radial-gradient(circle at 18% 5%, rgba(212, 175, 55, 0.24), transparent 60%), linear-gradient(165deg, rgba(10, 31, 68, 0.94), rgba(8, 18, 45, 0.98))'
    },
    accent: {
      light: 'linear-gradient(120deg, rgba(212, 175, 55, 0.18), rgba(10, 31, 68, 0.08))',
      dark: 'linear-gradient(120deg, rgba(212, 175, 55, 0.28), rgba(10, 31, 68, 0.35))'
    },
    spotlight: {
      light: 'radial-gradient(circle at 25% 20%, rgba(212, 175, 55, 0.2), transparent 60%)',
      dark: 'radial-gradient(circle at 25% 20%, rgba(212, 175, 55, 0.3), transparent 65%)'
    }
  },
  shadows: {
    soft: {
      light: '0 24px 45px rgba(10, 31, 68, 0.15)',
      dark: '0 24px 45px rgba(0, 0, 0, 0.45)'
    },
    strong: {
      light: '0 48px 80px rgba(10, 31, 68, 0.22)',
      dark: '0 48px 80px rgba(0, 0, 0, 0.55)'
    },
    glow: {
      light: '0 0 0 3px rgba(212, 175, 55, 0.3)',
      dark: '0 0 0 3px rgba(212, 175, 55, 0.4)'
    }
  },
  appShell: {
    lightBackground: [
      'radial-gradient(circle at 12% 0%, rgba(10, 31, 68, 0.12), transparent 55%)',
      'linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(245, 247, 251, 1))'
    ],
    darkBackground: [
      'radial-gradient(circle at 18% 5%, rgba(212, 175, 55, 0.22), transparent 60%)',
      '#050B1D'
    ]
  }
}

const isPlainObject = (value: unknown): value is Record<string, any> =>
  Object.prototype.toString.call(value) === '[object Object]'

const deepMergeTokens = <T extends Record<string, any>>(base: T, override: Partial<T>): T => {
  const output: Record<string, any> = { ...base }

  for (const [key, value] of Object.entries(override)) {
    if (value === undefined) {
      continue
    }

    const current = output[key]

    if (Array.isArray(value)) {
      output[key] = value.slice()
      continue
    }

    if (isPlainObject(current) && isPlainObject(value)) {
      output[key] = deepMergeTokens(current, value)
      continue
    }

    output[key] = value
  }

  return output as T
}

const resolveModeValue = <T>(value: T | ModeValue<T>, mode: Mode): T => {
  if (value && isPlainObject(value) && ('light' in value || 'dark' in value)) {
    const record = value as ModeValue<T>
    if (mode === 'dark') {
      return (record.dark ?? record.light ?? record.dark ?? '') as T
    }

    return (record.light ?? record.dark ?? record.light ?? '') as T
  }

  return value as T
}

export const useUiTokens = () => {
  const appConfig = useAppConfig()
  const colorMode = useColorMode()

  const resolvedMode = useState<Mode>('ui-resolved-color-mode', () =>
    colorMode.value === 'dark' ? 'dark' : 'light'
  )

  const hasRegisteredWatcher = useState('ui-color-mode-watcher-registered', () => false)

  if (import.meta.client && !hasRegisteredWatcher.value) {
    hasRegisteredWatcher.value = true

    onMounted(() => {
      const syncMode = () => {
        resolvedMode.value = colorMode.value === 'dark' ? 'dark' : 'light'
      }

      syncMode()

      watch(
        () => colorMode.value,
        () => {
          syncMode()
        },
        { flush: 'post' }
      )
    })
  }

  const mergedTokens = computed(() => {
    const provided = (appConfig.ui?.tokens ?? {}) as Partial<typeof defaultTokens>
    return deepMergeTokens(defaultTokens, provided)
  })

  const mode = computed<Mode>(() => resolvedMode.value)

  const surfaceColor = (key: keyof typeof defaultTokens.surfaces) =>
    resolveModeValue(mergedTokens.value.surfaces[key], mode.value)

  const borderColor = (key: keyof typeof defaultTokens.borders) =>
    resolveModeValue(mergedTokens.value.borders[key], mode.value)

  const textColor = (key: keyof typeof defaultTokens.text) =>
    resolveModeValue(mergedTokens.value.text[key], mode.value)

  const gradient = (key: keyof typeof defaultTokens.gradients) =>
    resolveModeValue(mergedTokens.value.gradients[key], mode.value)

  const shadow = (key: keyof typeof defaultTokens.shadows) =>
    resolveModeValue(mergedTokens.value.shadows[key], mode.value)

  const tone = (key: keyof typeof defaultTokens.tones) => {
    const toneTokens = mergedTokens.value.tones[key]

    return {
      background: resolveModeValue(toneTokens.background, mode.value),
      border: resolveModeValue(toneTokens.border, mode.value),
      text: resolveModeValue(toneTokens.text, mode.value)
    }
  }

  const bodyColor = computed(() => resolveModeValue(mergedTokens.value.body, mode.value))

  const appShellBackgrounds = computed(() =>
    mode.value === 'dark'
      ? mergedTokens.value.appShell.darkBackground
      : mergedTokens.value.appShell.lightBackground
  )

  return {
    mode,
    tokens: mergedTokens as ComputedRef<typeof defaultTokens>,
    palette: computed(() => mergedTokens.value.palette),
    bodyColor,
    surfaceColor,
    borderColor,
    textColor,
    gradient,
    shadow,
    tone,
    appShellBackgrounds,
  }
}

export type UiTokensComposable = ReturnType<typeof useUiTokens>
