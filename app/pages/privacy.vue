<template>
  <div class="space-y-16 pb-24">
    <BaseSection variant="gradient" padding="relaxed">
      <div class="mx-auto flex max-w-3xl flex-col gap-6 text-center">
        <h1 class="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-slate-50">
          Privacy Policy
        </h1>
        <p class="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          We respect your privacy and outline how we handle data across our services and website.
        </p>
      </div>
    </BaseSection>

    <BaseSection>
      <div class="mx-auto max-w-3xl">
        <UCard :ui="cardUi">
          <div class="space-y-6 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            <p>
              This website collects the minimum information required to respond to project inquiries and deliver requested services. We do not sell or share your data with third parties outside of direct service delivery. For privacy questions, email
              <a
                href="mailto:hello@aesir.dev"
                class="font-semibold text-primary-600 underline decoration-primary-300/70 underline-offset-4 hover:text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 dark:text-primary-300 dark:hover:text-primary-200"
              >
                hello@aesir.dev
              </a>
              .
            </p>
          </div>
        </UCard>
      </div>
    </BaseSection>
  </div>
</template>

<script setup lang="ts">
import BaseSection from '~/components/shared/BaseSection.vue'

const cardUi = {
  base: 'relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/95 p-8 shadow-lg shadow-slate-200/60 dark:border-slate-900/70 dark:bg-slate-950/50 dark:shadow-slate-950/60',
  body: 'p-0'
} as const

useSeoMeta({
  title: 'Privacy Policy | Aesir Tecnologia',
  description: 'Learn how Aesir Tecnologia manages data privacy, inquiries, and client information.'
})
</script>
