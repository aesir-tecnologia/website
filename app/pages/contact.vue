<template>
  <div class="flex flex-col">
    <BaseSection id="contact-hero" background="gradient">
      <SectionHeader :title="t('contact.hero.title')" :subhead="t('contact.hero.lead')" />
    </BaseSection>

    <BaseSection id="contact-overview" background="surface">
      <div class="grid gap-6 md:grid-cols-2">
        <UCard :ui="cardUi">
          <template #header>
            <h2 class="text-xl font-semibold text-slate-50">{{ t('contact.projectInquiry.title') }}</h2>
            <p class="mt-2 text-sm text-slate-300">{{ t('contact.projectInquiry.lead') }}</p>
          </template>
          <BulletList :items="projectInquiry" />
        </UCard>
        <UCard :ui="cardUi">
          <template #header>
            <h2 class="text-xl font-semibold text-slate-50">{{ t('contact.engagement.title') }}</h2>
          </template>
          <ul class="space-y-3 text-sm text-slate-300">
            <li v-for="model in engagementModels" :key="model.title">
              <strong class="text-slate-100">{{ model.title }}</strong>
              <span class="block text-slate-300">{{ model.description }}</span>
            </li>
          </ul>
        </UCard>
      </div>
    </BaseSection>

    <BaseSection id="contact-form" background="gradient">
      <div class="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:items-start">
        <UCard :ui="formCardUi">
          <template #header>
            <div class="space-y-2">
              <h3 class="text-xl font-semibold text-slate-50">{{ t('contact.form.title') }}</h3>
              <p class="text-sm text-slate-300">{{ t('contact.form.lead') }}</p>
            </div>
          </template>
          <UForm :schema="schema" :state="formState" class="space-y-5" @submit="onSubmit">
            <div class="grid gap-4 md:grid-cols-2">
              <UFormGroup :label="t('contact.form.fields.name')" name="name">
                <UInput v-model="formState.name" :placeholder="t('contact.form.placeholders.name')" />
              </UFormGroup>
              <UFormGroup :label="t('contact.form.fields.email')" name="email">
                <UInput v-model="formState.email" type="email" :placeholder="t('contact.form.placeholders.email')" />
              </UFormGroup>
            </div>
            <UFormGroup :label="t('contact.form.fields.company')" name="company">
              <UInput v-model="formState.company" :placeholder="t('contact.form.placeholders.company')" />
            </UFormGroup>
            <UFormGroup :label="t('contact.form.fields.projectType')" name="projectType">
              <USelectMenu v-model="formState.projectType" :options="projectTypes" :placeholder="t('contact.form.placeholders.projectType')" />
            </UFormGroup>
            <UFormGroup :label="t('contact.form.fields.description')" name="description">
              <UTextarea v-model="formState.description" :placeholder="t('contact.form.placeholders.description')" :rows="4" />
            </UFormGroup>
            <div class="grid gap-4 md:grid-cols-2">
              <UFormGroup :label="t('contact.form.fields.timeline')" name="timeline">
                <UInput v-model="formState.timeline" :placeholder="t('contact.form.placeholders.timeline')" />
              </UFormGroup>
              <UFormGroup :label="t('contact.form.fields.budget')" name="budget">
                <UInput v-model="formState.budget" :placeholder="t('contact.form.placeholders.budget')" />
              </UFormGroup>
            </div>
            <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div class="flex items-center gap-3">
                <UButton type="submit" :loading="isSubmitting" size="lg">
                  {{ t('contact.form.submit') }}
                </UButton>
                <UButton v-if="submitted" variant="ghost" size="lg" @click="reset">
                  {{ t('contact.form.reset') }}
                </UButton>
              </div>
              <UAlert v-if="message" :color="submitted ? 'primary' : 'rose'" variant="soft" icon="i-heroicons-sparkles">
                {{ message }}
              </UAlert>
            </div>
          </UForm>
        </UCard>
        <UCard :ui="formCardUi">
          <template #header>
            <h3 class="text-lg font-semibold text-slate-50">{{ t('contact.direct.title') }}</h3>
          </template>
          <p class="text-sm text-slate-300">{{ t('contact.direct.body') }}</p>
          <AppLinkButton :href="`mailto:${contactEmail}`" intent="outline" class="mt-6 w-full justify-center">
            {{ contactEmail }}
          </AppLinkButton>
          <AppLinkButton :to="scheduleLink" intent="ghost" class="mt-2 w-full justify-center">
            {{ t('contact.direct.scheduleCta') }}
          </AppLinkButton>
        </UCard>
      </div>
    </BaseSection>

    <BaseSection id="schedule" background="surface">
      <UCard :ui="cardUi">
        <template #header>
          <h3 class="text-lg font-semibold text-slate-50">{{ t('contact.schedule.title') }}</h3>
        </template>
        <p class="text-sm text-slate-300">
          <span>{{ t('contact.schedule.body') }}</span>
          <br />
          <a :href="`mailto:${contactEmail}`" class="font-semibold text-sky-300 hover:text-sky-200">{{ contactEmail }}</a>
        </p>
      </UCard>
    </BaseSection>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { FormSubmitEvent } from '#ui/types'
import type { ContactFormValues } from '~/composables/useContactForm'

const { t, tm } = useI18n()
const localePath = useLocalePath()
const { site } = useAppConfig()

useSeoDefaults({
  title: t('contact.meta.title'),
  description: t('contact.meta.description')
})

const { schema, values: formState, submit, isSubmitting, submitted, message, reset } = useContactForm()

const projectInquiry = computed(() => tm('contact.projectInquiry.items') as string[])
const engagementModels = computed(() => tm('contact.engagement.items') as Array<{ title: string; description: string }>)
const projectTypes = computed(() => tm('contact.form.projectTypes') as string[])
const contactEmail = computed(() => site.contactEmail)
const contactPath = computed(() => localePath('/contact'))
const scheduleLink = computed(() => `${contactPath.value}#schedule`)

const cardUi = {
  base: 'border border-slate-800/70 bg-slate-900/60 backdrop-blur rounded-3xl h-full',
  header: 'p-6 pb-0',
  body: 'p-6'
}

const formCardUi = {
  base: 'border border-slate-800/70 bg-slate-950/80 backdrop-blur rounded-3xl h-full',
  header: 'p-6 pb-0',
  body: 'p-6'
}

const onSubmit = async (event: FormSubmitEvent<ContactFormValues>) => {
  await submit(event.data, {
    success: t('contact.form.success'),
    error: t('contact.form.error')
  })
}
</script>
