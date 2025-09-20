<template>
  <footer class="border-t border-slate-800/60 bg-slate-950/80">
    <UContainer class="flex flex-col gap-10 py-10 lg:flex-row lg:items-start lg:justify-between">
      <div class="flex-1 space-y-4">
        <p class="text-lg font-semibold tracking-wide">{{ site.logo.text }}</p>
        <p class="max-w-xl text-sm text-slate-400">{{ site.description }}</p>
        <div class="flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <span class="font-medium text-slate-200">{{ t('footer.contact') }}</span>
          <a :href="`mailto:${site.contactEmail}`" class="font-semibold text-slate-200 hover:text-sky-300">
            {{ site.contactEmail }}
          </a>
        </div>
      </div>
      <div class="flex flex-1 flex-col gap-8 lg:flex-row lg:justify-end">
        <nav aria-label="Footer" class="space-y-3">
          <h2 class="text-sm font-semibold uppercase tracking-wide text-slate-400">{{ t('footer.navigation') }}</h2>
          <ul class="space-y-2">
            <li v-for="link in translatedFooterLinks" :key="link.to">
              <NuxtLink :to="link.to" class="text-sm text-slate-300 hover:text-sky-300">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </nav>
        <div class="space-y-3">
          <h2 class="text-sm font-semibold uppercase tracking-wide text-slate-400">{{ t('footer.followUs') }}</h2>
          <ul class="space-y-2">
            <li v-for="link in socialLinks" :key="link.href">
              <AppLinkButton :href="link.href" intent="ghost" size="sm" class="justify-start">
                <UIcon name="i-heroicons-arrow-top-right-on-square" class="mr-2 h-4 w-4" aria-hidden="true" />
                {{ link.label }}
              </AppLinkButton>
            </li>
          </ul>
        </div>
      </div>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const { site } = useAppConfig()

const footerLinks = useSiteLinks()
const socialLinks = useSocialLinks()

const translatedFooterLinks = computed(() =>
  footerLinks.value.map((link) => ({
    ...link,
    label: t(link.labelKey),
    to: localePath(link.to)
  }))
)
</script>
