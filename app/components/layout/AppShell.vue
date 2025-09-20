<template>
  <div class="flex min-h-screen flex-col bg-slate-950 text-slate-100">
    <AppHeader />
    <AppMain>
      <slot />
    </AppMain>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const { site } = useAppConfig()

useSeoDefaults({
  title: site.name,
  description: site.description
})
</script>
