<template>
  <footer class="border-t border-slate-200/70 bg-white text-slate-800 dark:border-[color:var(--aesir-border-soft)] dark:bg-[color:var(--aesir-surface-950)] dark:text-[color:var(--aesir-text-primary)]">
    <UContainer class="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.08em]">
          {{ brand.name }}
        </p>
        <p class="mt-2 max-w-md text-sm text-slate-500 dark:text-[color:var(--aesir-text-soft)]">
          {{ brand.tagline }}
        </p>
      </div>

      <nav v-if="footerLinks.length" aria-label="Footer">
        <ul class="flex flex-wrap items-center gap-4 text-sm">
          <li v-for="link in footerLinks" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="text-slate-500 transition-colors hover:text-slate-800 dark:text-[color:var(--aesir-text-muted)] dark:hover:text-[color:var(--aesir-text-inverse)]"
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

interface ConfigFooterLink {
  label: string
  to: string
}

const appConfig = useAppConfig()
const localePath = useLocalePath()

const brand = computed(() => ({
  name: appConfig.site?.brand?.name ?? 'Aesir Tecnologia',
  tagline: appConfig.site?.brand?.tagline ?? 'Transforming vibe-coded prototypes into production-ready products.',
}))

const footerLinks = computed<ConfigFooterLink[]>(() =>
  (appConfig.site?.footer?.links ?? []).map((link) => ({
    label: link.label,
    to: String(localePath(link.to)),
  }))
)
</script>
