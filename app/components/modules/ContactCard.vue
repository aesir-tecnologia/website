<template>
  <UCard :ui="cardUi" :style="cardStyle">
    <div class="space-y-6">
      <header class="space-y-2">
        <Tag v-if="eyebrow" tone="accent" size="md">{{ eyebrow }}</Tag>
        <h3 class="text-2xl font-semibold" :style="titleStyle">{{ title }}</h3>
        <p v-if="description" class="text-sm leading-relaxed" :style="descriptionStyle">{{ description }}</p>
      </header>

      <UForm :state="state" :validate="validate" class="space-y-5" @submit="handleSubmit">
        <div class="grid gap-5 md:grid-cols-2">
        <UFormField name="name" label="Name" required>
          <UInput v-model="state.name" placeholder="Your name" autocomplete="name" />
        </UFormField>
        <UFormField name="email" label="Email" required>
          <UInput v-model="state.email" placeholder="you@company.com" type="email" autocomplete="email" />
        </UFormField>
        <UFormField name="company" label="Company">
          <UInput v-model="state.company" placeholder="Company name" autocomplete="organization" />
        </UFormField>
        <UFormField name="projectType" label="Project type" required>
          <USelect
            v-model="state.projectType"
            :items="projectTypeItems"
            placeholder="Select a project type"
          />
        </UFormField>
      </div>

      <UFormField name="description" label="Project description" required>
        <UTextarea
          v-model="state.description"
          placeholder="Tell us about your project, goals, and challenges."
          :rows="5"
          autoresize
        />
      </UFormField>

      <div class="grid gap-5 md:grid-cols-2">
        <UFormField name="timeline" label="Timeline" hint="Optional">
          <UInput v-model="state.timeline" placeholder="Desired timeline" />
        </UFormField>
        <UFormField name="budget" label="Budget range" hint="Optional">
          <UInput v-model="state.budget" placeholder="Estimated budget" />
        </UFormField>
      </div>

        <div class="space-y-3">
          <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <AppButton type="submit" size="lg" :loading="isSubmitting">
              {{ submitLabel }}
            </AppButton>
            <p class="text-sm" :style="supportingTextStyle">We respond within one business day.</p>
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
import AppButton from '~/components/ui/AppButton.vue'
import Tag from '~/components/ui/Tag.vue'
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

const { surfaceColor, borderColor, shadow, textColor } = useUiTokens()

const cardStyle = computed(() => ({
  backgroundColor: surfaceColor('elevated'),
  borderColor: borderColor('soft'),
  boxShadow: shadow('soft'),
  color: textColor('primary'),
}))

const titleStyle = computed(() => ({
  color: textColor('primary'),
}))

const descriptionStyle = computed(() => ({
  color: textColor('muted'),
}))

const supportingTextStyle = computed(() => ({
  color: textColor('subtle'),
}))

const cardUi = {
  base: 'relative overflow-hidden rounded-3xl border p-8 transition-colors duration-300',
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
