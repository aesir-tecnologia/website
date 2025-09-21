<template>
  <UCard :ui="cardUi">
    <div class="space-y-6">
      <header class="space-y-2">
        <Tag v-if="eyebrow" tone="accent" size="md">{{ eyebrow }}</Tag>
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-slate-50">{{ title }}</h3>
        <p v-if="description" class="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{{ description }}</p>
      </header>

      <UForm :state="state" :validate="validate" class="space-y-5" @submit="handleSubmit">
        <div class="grid gap-5 md:grid-cols-2">
          <UFormGroup name="name" label="Name" required>
            <UInput v-model="state.name" placeholder="Your name" autocomplete="name" />
          </UFormGroup>
          <UFormGroup name="email" label="Email" required>
            <UInput v-model="state.email" placeholder="you@company.com" type="email" autocomplete="email" />
          </UFormGroup>
          <UFormGroup name="company" label="Company">
            <UInput v-model="state.company" placeholder="Company name" autocomplete="organization" />
          </UFormGroup>
          <UFormGroup name="projectType" label="Project type" required>
            <USelect
              v-model="state.projectType"
              :items="projectTypeItems"
              placeholder="Select a project type"
            />
          </UFormGroup>
        </div>

        <UFormGroup name="description" label="Project description" required>
          <UTextarea
            v-model="state.description"
            placeholder="Tell us about your project, goals, and challenges."
            :rows="5"
            autoresize
          />
        </UFormGroup>

        <div class="grid gap-5 md:grid-cols-2">
          <UFormGroup name="timeline" label="Timeline" hint="Optional">
            <UInput v-model="state.timeline" placeholder="Desired timeline" />
          </UFormGroup>
          <UFormGroup name="budget" label="Budget range" hint="Optional">
            <UInput v-model="state.budget" placeholder="Estimated budget" />
          </UFormGroup>
        </div>

        <div class="space-y-3">
          <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <AppButton type="submit" size="lg" :loading="isSubmitting">
              {{ submitLabel }}
            </AppButton>
            <p class="text-sm text-slate-500 dark:text-slate-400">We respond within one business day.</p>
          </div>

          <transition name="fade">
            <UAlert
              v-if="isSuccess"
              color="success"
              variant="soft"
              icon="i-lucide-check-circle-2"
              :title="successTitle"
              :description="message"
            />
          </transition>

          <transition name="fade">
            <UAlert
              v-if="isError"
              color="error"
              variant="subtle"
              icon="i-lucide-alert-circle"
              title="Something went wrong"
              :description="message"
            />
          </transition>
        </div>
      </UForm>
    </div>
  </UCard>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useContactForm } from '~/composables/useContactForm'

const props = withDefaults(defineProps<{
  title?: string
  eyebrow?: string
  description?: string
  projectTypes?: string[]
  submitLabel?: string
  successTitle?: string
}>(), {
  title: 'Send Project Details',
  eyebrow: 'Contact',
  description: 'Share the essentials so we can prepare a tailored proposal.',
  projectTypes: () => [],
  submitLabel: 'Send project details',
  successTitle: 'Message sent',
})

const {
  state,
  validate,
  submit,
  isSubmitting,
  isSuccess,
  isError,
  message,
} = useContactForm()

const projectTypeItems = computed(() => props.projectTypes.map((value) => ({ label: value, value })))

const handleSubmit = async (event: Parameters<typeof submit>[0]) => {
  try {
    await submit(event)
  }
  catch (error) {
    console.error('Unable to submit contact form', error)
  }
}

const cardUi = {
  base: 'relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/95 p-8 shadow-xl shadow-slate-200/60 dark:border-slate-900/70 dark:bg-slate-950/60 dark:shadow-slate-950/70',
  body: 'space-y-6 p-0'
} as const

const eyebrow = props.eyebrow
const title = props.title
const description = props.description
const submitLabel = props.submitLabel
const successTitle = props.successTitle
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
