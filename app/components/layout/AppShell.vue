<template>
  <div class="app-shell">
    <NuxtRouteAnnouncer />
    <AppHeader />
    <AppMain>
      <slot />
    </AppMain>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppFooter from '~/components/layout/AppFooter.vue'
import AppHeader from '~/components/layout/AppHeader.vue'
import AppMain from '~/components/layout/AppMain.vue'
</script>
