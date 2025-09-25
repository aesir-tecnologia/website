<template>
  <header
    class="sticky top-0 z-50 border-b backdrop-blur-lg transition-colors"
    :style="headerStyle"
  >
    <UContainer class="flex items-center justify-between gap-4 py-4">
      <NuxtLink :to="brandLink" class="text-base font-semibold tracking-[0.04em] text-inherit">
        {{ brand.name }}
      </NuxtLink>

      <UNavigationMenu
        v-if="navigationItems.length"
        :items="navigationItems"
        highlight
        class="hidden md:flex"
      />

      <div class="flex items-center gap-3">
        <UButton
          v-if="contactLink"
          class="hidden md:inline-flex"
          :to="contactLink.to"
          :label="contactLink.label"
        />

        <UButton
          variant="ghost"
          color="neutral"
          class="md:hidden"
          aria-label="Open navigation"
          @click="isMobileMenuOpen = true"
        >
          <UIcon name="i-lucide-menu" class="size-5" />
        </UButton>
      </div>
    </UContainer>

    <USlideover v-model="isMobileMenuOpen" side="right" title="Menu">
      <template #body>
        <div class="flex flex-col gap-6">
          <UNavigationMenu
            v-if="navigationItems.length"
            :items="navigationItems"
            color="neutral"
            variant="link"
            orientation="vertical"
            class="flex flex-col gap-2"
          />

          <UButton
            v-if="contactLink"
            block
            :to="contactLink.to"
            :label="contactLink.label"
            @click="isMobileMenuOpen = false"
          />
        </div>
      </template>
    </USlideover>
  </header>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { NavigationMenuItem } from '@nuxt/ui'
import { useSiteNavigation } from '~/composables/useSiteNavigation'

const route = useRoute()
const isMobileMenuOpen = ref(false)

const { surfaceColor, borderColor, textColor, shadow } = useUiTokens()

const headerStyle = computed(() => ({
  backgroundColor: surfaceColor('elevated'),
  borderColor: borderColor('soft'),
  color: textColor('primary'),
  boxShadow: shadow('soft'),
}))

const { brand, links, cta } = useSiteNavigation()

const brandLink = computed(() => brand.value.to)

const navigationItems = computed<NavigationMenuItem[]>(() =>
  links.value.map((link) => {
    const active =
      link.match === 'exact'
        ? route.path === link.to
        : route.path.startsWith(link.to)

    return {
      label: link.label,
      to: link.to,
      active,
    }
  })
)

const contactLink = useState('app-header-contact-link', () => cta.value)

watch(
  cta,
  (value) => {
    contactLink.value = value
  },
  { immediate: true }
)

watch(
  () => route.path,
  () => {
    isMobileMenuOpen.value = false
  }
)
</script>
