<template>
  <header class="sticky top-0 z-30 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
    <UContainer as="div" class="flex items-center justify-between gap-6 py-4">
      <div class="flex items-center gap-3">
        <NuxtLink to="/" class="text-base font-semibold tracking-wide">{{ site.logo.text }}</NuxtLink>
      </div>
      <nav class="hidden items-center gap-1 lg:flex" aria-label="Primary">
        <UNavigationMenu :items="menuItems" variant="link" />
      </nav>
      <div class="hidden items-center gap-2 lg:flex">
        <LanguageSwitcher />
        <ColorModeToggle />
        <AppLinkButton :to="primaryCtaTo" intent="primary">{{ primaryCtaLabel }}</AppLinkButton>
      </div>
      <div class="flex items-center gap-2 lg:hidden">
        <LanguageSwitcher />
        <ColorModeToggle />
        <UButton variant="ghost" color="primary" class="lg:hidden" @click="mobileOpen = true">
          <span class="sr-only">{{ t('navigation.openMenu') }}</span>
          <UIcon name="i-heroicons-bars-3" class="h-5 w-5" aria-hidden="true" />
        </UButton>
      </div>
    </UContainer>
    <USlideover v-model="mobileOpen" class="lg:hidden">
      <div class="flex h-full flex-col gap-6 bg-slate-950/95 p-6">
        <div class="flex items-center justify-between">
          <span class="text-lg font-semibold tracking-wide">{{ site.logo.text }}</span>
          <UButton variant="ghost" color="gray" @click="mobileOpen = false">
            <span class="sr-only">{{ t('navigation.closeMenu') }}</span>
            <UIcon name="i-heroicons-x-mark" class="h-6 w-6" aria-hidden="true" />
          </UButton>
        </div>
        <nav class="flex flex-col gap-2" aria-label="Mobile primary">
          <NuxtLink
            v-for="item in translatedNavigation"
            :key="item.to"
            :to="item.to"
            class="rounded-2xl px-4 py-3 text-lg font-medium hover:bg-slate-800/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
            @click="mobileOpen = false"
          >
            {{ item.label }}
          </NuxtLink>
          <AppLinkButton :to="primaryCtaTo" intent="primary" class="mt-4 w-full justify-center" @click="mobileOpen = false">
            {{ primaryCtaLabel }}
          </AppLinkButton>
        </nav>
      </div>
    </USlideover>
  </header>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const { site } = useAppConfig()
const mobileOpen = ref(false)

const primaryCta = computed(() => site.primaryCta)
const primaryCtaLabel = computed(() => (primaryCta.value ? t(primaryCta.value.labelKey) : ''))
const primaryCtaTo = computed(() => (primaryCta.value?.to ? localePath(primaryCta.value.to) : undefined))

const { navigation } = useSiteNavigation()

const translatedNavigation = computed(() =>
  navigation.value.map((item) => ({
    ...item,
    label: t(item.labelKey),
    to: localePath(item.to)
  }))
)

const menuItems = computed(() =>
  translatedNavigation.value.map((item) => ({
    label: item.label,
    to: item.to
  }))
)
</script>
