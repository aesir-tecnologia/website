import { reactive, ref } from 'vue'
import { z } from 'zod'

const contactFormSchema = z.object({
  name: z.string().min(2, 'Please provide your name.'),
  email: z.string().email('Enter a valid email address.'),
  company: z.string().optional(),
  projectType: z.string().min(1, 'Select a project type.'),
  description: z.string().min(20, 'Tell us a bit more about your project.'),
  timeline: z.string().optional(),
  budget: z.string().optional()
})

type ContactFormSchema = typeof contactFormSchema
export type ContactFormValues = z.infer<ContactFormSchema>

export function useContactForm() {
  const initialValues: ContactFormValues = {
    name: '',
    email: '',
    company: '',
    projectType: '',
    description: '',
    timeline: '',
    budget: ''
  }

  const values = reactive({ ...initialValues })
  const isSubmitting = ref(false)
  const submitted = ref(false)
  const message = ref<string | null>(null)

  const reset = () => {
    Object.assign(values, initialValues)
    submitted.value = false
    message.value = null
  }

  const submit = async (
    payload: ContactFormValues,
    messages: { success: string; error: string }
  ) => {
    isSubmitting.value = true
    submitted.value = false
    message.value = null

    try {
      await new Promise((resolve) => setTimeout(resolve, 600))
      submitted.value = true
      message.value = messages.success
      Object.assign(values, initialValues)
    } catch (error) {
      console.error(error)
      message.value = messages.error
    } finally {
      isSubmitting.value = false
    }
  }

  return {
    schema: contactFormSchema,
    values,
    isSubmitting,
    submitted,
    message,
    submit,
    reset
  }
}
