<template>
  <UButtonGroup size="xs" class="rounded-full bg-slate-900/60 p-1">
    <UButton
      v-for="localeOption in localeOptions"
      :key="localeOption.code"
      :to="switchLocalePath(localeOption.code)"
      :color="isActive(localeOption.code) ? 'primary' : 'gray'"
      :variant="isActive(localeOption.code) ? 'solid' : 'ghost'"
      class="px-3"
    >
      <span class="text-xs font-semibold uppercase tracking-wide">{{ localeOption.label }}</span>
    </UButton>
  </UButtonGroup>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const localeOptions = computed(() =>
  locales.value.map((loc) => ({
    code: loc.code,
    label: loc.name || loc.code.toUpperCase()
  }))
)

const isActive = (code: string) => code === locale.value
</script>
