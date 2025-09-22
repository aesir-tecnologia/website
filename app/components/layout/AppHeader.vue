<template>
  <header class="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 text-slate-900 backdrop-blur-lg dark:border-slate-800/60 dark:bg-[#0A1F44] dark:text-slate-100">
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
        <ClientOnly>
          <UButton
            variant="ghost"
            color="neutral"
            class="hidden md:inline-flex"
            :aria-label="colorModeAriaLabel"
            @click="toggleColorMode"
          >
            <UIcon :name="colorModeIcon" class="size-5" />
          </UButton>
        </ClientOnly>

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

          <ClientOnly>
            <UButton
              variant="ghost"
              color="neutral"
              :aria-label="colorModeAriaLabel"
              class="justify-start"
              @click="toggleColorMode"
            >
              <div class="flex items-center gap-3">
                <UIcon :name="colorModeIcon" class="size-5" />
                <span>{{ colorModeToggleLabel }}</span>
              </div>
            </UButton>
          </ClientOnly>
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
const colorMode = useColorMode()
const isMobileMenuOpen = ref(false)

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

const contactLink = computed(() => cta.value)

const colorModeIsDark = computed(() => colorMode.value === 'dark')

const colorModeIcon = computed(() => (colorModeIsDark.value ? 'i-lucide-moon-star' : 'i-lucide-sun'))

const colorModeToggleLabel = computed(() => (colorModeIsDark.value ? 'Switch to light mode' : 'Switch to dark mode'))
const colorModeAriaLabel = colorModeToggleLabel

const toggleColorMode = () => {
  colorMode.preference = colorModeIsDark.value ? 'light' : 'dark'
}

watch(
  () => route.path,
  () => {
    isMobileMenuOpen.value = false
  }
)
</script>
