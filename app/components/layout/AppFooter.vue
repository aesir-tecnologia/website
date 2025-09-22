<template>
  <footer
    class="border-t transition-colors"
    :style="footerStyle"
  >
    <UContainer class="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.08em]">
          {{ siteBrand.name }}
        </p>
        <p class="mt-2 max-w-md text-sm" :style="taglineStyle">
          {{ siteBrand.tagline }}
        </p>
      </div>

      <nav v-if="footerLinks.length" aria-label="Footer">
        <ul class="flex flex-wrap items-center gap-4 text-sm">
          <li v-for="link in footerLinks" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="transition-colors hover:[color:var(--footer-link-hover)]"
              :style="linkStyle"
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

const { surfaceColor, borderColor, textColor } = useUiTokens()

const siteBrand = computed(() => ({
  name: brand.value.name,
  tagline: brand.value.tagline ?? 'Transforming vibe-coded prototypes into production-ready products.'
}))

const footerStyle = computed(() => ({
  backgroundColor: surfaceColor('base'),
  borderColor: borderColor('soft'),
  color: textColor('primary'),
  transition: 'background-color 200ms ease, color 200ms ease'
}))

const taglineStyle = computed(() => ({
  color: textColor('muted')
}))

const linkStyle = computed(() => ({
  color: textColor('muted'),
  '--footer-link-hover': textColor('primary')
}))
</script>
