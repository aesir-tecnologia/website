<template>
  <div class="flex flex-col">
    <BaseSection id="privacy-hero" background="gradient">
      <SectionHeader :title="t('legal.privacy.title')" :subhead="t('legal.privacy.lead')" />
    </BaseSection>

    <BaseSection id="privacy-body" background="surface">
      <UCard :ui="cardUi">
        <UProse class="max-w-3xl text-slate-300">
          <template v-for="(paragraph, index) in body" :key="index">
            <p v-if="typeof paragraph === 'string'">{{ paragraph }}</p>
            <p v-else>
              <span>{{ paragraph.before }}</span>
              <a :href="`mailto:${contactEmail}`" class="font-semibold text-sky-300 hover:text-sky-200">{{ contactEmail }}</a>
              <span>{{ paragraph.after }}</span>
            </p>
          </template>
        </UProse>
      </UCard>
    </BaseSection>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { t, tm } = useI18n()
const { site } = useAppConfig()

useSeoDefaults({
  title: t('legal.privacy.metaTitle'),
  description: t('legal.privacy.metaDescription')
})

const cardUi = {
  base: 'border border-slate-800/70 bg-slate-900/60 backdrop-blur rounded-3xl',
  body: 'p-6 sm:p-8'
}

const body = computed(() => tm('legal.privacy.body') as Array<string | { before: string; after: string }>)
const contactEmail = computed(() => site.contactEmail)
</script>
