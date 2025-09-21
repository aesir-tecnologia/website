import { computed, reactive, ref } from 'vue'
import type { FormError, FormSubmitEvent } from '#ui/types'

export type ContactFormStatus = 'idle' | 'submitting' | 'success' | 'error'

export interface ContactFormState {
  name: string
  email: string
  company: string
  projectType: string
  description: string
  timeline: string
  budget: string
}

const createInitialState = (): ContactFormState => ({
  name: '',
  email: '',
  company: '',
  projectType: '',
  description: '',
  timeline: '',
  budget: '',
})

export const useContactForm = () => {
  const state = reactive<ContactFormState>(createInitialState())
  const status = ref<ContactFormStatus>('idle')
  const message = ref('')
  const lastSubmission = ref<ContactFormState | null>(null)

  const validate = (formState: ContactFormState): FormError[] => {
    const errors: FormError[] = []

    if (!formState.name.trim()) {
      errors.push({ name: 'name', message: 'Name is required.' })
    }

    if (!formState.email.trim()) {
      errors.push({ name: 'email', message: 'Email is required.' })
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errors.push({ name: 'email', message: 'Enter a valid email address.' })
    }

    if (!formState.projectType) {
      errors.push({ name: 'projectType', message: 'Select a project type.' })
    }

    if (!formState.description.trim()) {
      errors.push({ name: 'description', message: 'Tell us about your project.' })
    }

    if (formState.timeline.length > 120) {
      errors.push({ name: 'timeline', message: 'Timeline should be under 120 characters.' })
    }

    if (formState.budget.length > 120) {
      errors.push({ name: 'budget', message: 'Budget details should be under 120 characters.' })
    }

    return errors
  }

  const reset = () => {
    Object.assign(state, createInitialState())
    status.value = 'idle'
    message.value = ''
  }

  const submit = async (event: FormSubmitEvent<ContactFormState>) => {
    status.value = 'submitting'
    message.value = ''

    try {
      // Simulate network latency while hooking up real integration later.
      await new Promise((resolve) => setTimeout(resolve, 750))

      lastSubmission.value = { ...event.data }
      status.value = 'success'
      message.value = 'Thanks for reaching out! We will respond within one business day.'
      Object.assign(state, createInitialState())
    }
    catch (error) {
      status.value = 'error'
      message.value = 'We could not send your details. Please try again or email hello@aesir.dev.'
      throw error
    }
  }

  const isSubmitting = computed(() => status.value === 'submitting')
  const isSuccess = computed(() => status.value === 'success')
  const isError = computed(() => status.value === 'error')

  return {
    state,
    status,
    message,
    lastSubmission,
    validate,
    reset,
    submit,
    isSubmitting,
    isSuccess,
    isError,
  }
}
