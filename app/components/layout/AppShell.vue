<template>
  <div class="flex min-h-screen flex-col" :style="shellStyles">
    <NuxtRouteAnnouncer />
    <AppHeader />
    <AppMain>
      <slot />
    </AppMain>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import AppFooter from '~/components/layout/AppFooter.vue'
import AppHeader from '~/components/layout/AppHeader.vue'
import AppMain from '~/components/layout/AppMain.vue'

const appConfig = useAppConfig()
const colorMode = useColorMode()

const fallbackTokens = {
  body: {
    light: '#f8fafc',
    dark: '#0f172a'
  },
  text: {
    primary: '#e2e8f0'
  },
  appShell: {
    lightBackground: ['#f8fafc'],
    darkBackground: ['#0f172a']
  }
}

const tokens = computed(() => ({
  ...fallbackTokens,
  ...(appConfig.ui?.tokens ?? {}),
  body: {
    ...fallbackTokens.body,
    ...(appConfig.ui?.tokens?.body ?? {})
  },
  text: {
    ...fallbackTokens.text,
    ...(appConfig.ui?.tokens?.text ?? {})
  },
  appShell: {
    ...fallbackTokens.appShell,
    ...(appConfig.ui?.tokens?.appShell ?? {})
  }
}))

const shellStyles = computed(() => {
  const mode = colorMode.value === 'dark' ? 'dark' : 'light'
  const backgrounds = mode === 'dark'
    ? tokens.value.appShell?.darkBackground
    : tokens.value.appShell?.lightBackground

  const background = backgrounds?.length ? backgrounds.join(', ') : undefined

  const textColor = mode === 'dark'
    ? tokens.value.text?.primary
    : tokens.value.body?.dark ?? '#0f172a'

  return {
    background,
    backgroundColor: mode === 'dark' ? tokens.value.body?.dark : tokens.value.body?.light,
    color: textColor ?? undefined,
  } as Record<string, string | undefined>
})
</script>
