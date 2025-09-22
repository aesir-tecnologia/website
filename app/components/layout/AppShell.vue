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

const { bodyColor, textColor, appShellBackgrounds } = useUiTokens()

const shellStyles = computed(() => {
  const backgrounds = appShellBackgrounds.value
  const background = backgrounds?.length ? backgrounds.join(', ') : undefined

  const foreground = textColor('primary')

  return {
    background,
    backgroundColor: bodyColor.value,
    color: foreground,
    transition: 'background-color 200ms ease, color 200ms ease'
  } satisfies Record<string, string | undefined>
})
</script>
