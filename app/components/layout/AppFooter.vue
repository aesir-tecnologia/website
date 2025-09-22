<template>
  <footer class="border-t border-slate-200/70 bg-white text-slate-800 dark:border-slate-800/60 dark:bg-slate-950 dark:text-slate-100">
    <UContainer class="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.08em]">
          {{ siteBrand.name }}
        </p>
        <p class="mt-2 max-w-md text-sm text-slate-500 dark:text-slate-400">
          {{ siteBrand.tagline }}
        </p>
      </div>

      <nav v-if="footerLinks.length" aria-label="Footer">
        <ul class="flex flex-wrap items-center gap-4 text-sm">
          <li v-for="link in footerLinks" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="text-slate-500 transition-colors hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-50"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSiteNavigation } from '~/composables/useSiteNavigation'
import { useSiteFooterLinks } from '~/composables/useSiteFooterLinks'

const { brand } = useSiteNavigation()
const footerLinks = useSiteFooterLinks()

const siteBrand = computed(() => ({
  name: brand.value.name,
  tagline: brand.value.tagline ?? 'Transforming vibe-coded prototypes into production-ready products.'
}))
</script>
