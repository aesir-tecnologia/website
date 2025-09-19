<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gray-900 text-white py-20">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-5xl font-bold mb-6">Let's Build Something Great Together</h1>
        <p class="text-xl max-w-3xl mx-auto text-gray-300">
          Ready to turn your idea into reality? We'd love to hear about your project and discuss how we can help.
        </p>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-12">
            <!-- Contact Form -->
            <div>
              <h2 class="text-3xl font-bold mb-8 text-gray-900">Get Started</h2>
              <form @submit.prevent="submitForm" class="space-y-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    v-model="form.name"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                </div>

                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    v-model="form.email"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                </div>

                <div>
                  <label for="company" class="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input
                    type="text"
                    id="company"
                    v-model="form.company"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                </div>

                <div>
                  <label for="projectType" class="block text-sm font-medium text-gray-700 mb-2">Project Type *</label>
                  <select
                    id="projectType"
                    v-model="form.projectType"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="vibe-cleanup">Vibe Coding Cleanup</option>
                    <option value="web-development">Web Development</option>
                    <option value="staff-augmentation">Staff Augmentation</option>
                    <option value="mobile-development">Mobile Development</option>
                    <option value="game-development">Game Development</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>

                <div>
                  <label for="description" class="block text-sm font-medium text-gray-700 mb-2">Project Description *</label>
                  <textarea
                    id="description"
                    v-model="form.description"
                    required
                    rows="5"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  ></textarea>
                </div>

                <div>
                  <label for="timeline" class="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
                  <select
                    id="timeline"
                    v-model="form.timeline"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="3-months">Within 3 months</option>
                    <option value="6-months">Within 6 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div>
                  <label for="budget" class="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                  <select
                    id="budget"
                    v-model="form.budget"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-10k">Under $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="over-100k">Over $100,000</option>
                    <option value="discuss">Let's discuss</option>
                  </select>
                </div>

                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  {{ isSubmitting ? 'Sending...' : 'Send Project Details' }}
                </button>
              </form>
            </div>

            <!-- Contact Info -->
            <div>
              <h2 class="text-3xl font-bold mb-8 text-gray-900">Get In Touch</h2>

              <!-- Engagement Models -->
              <div class="mb-12">
                <h3 class="text-xl font-bold mb-4 text-gray-900">Engagement Models</h3>
                <div class="space-y-4">
                  <div class="border border-gray-200 rounded-lg p-4">
                    <h4 class="font-semibold text-gray-900 mb-2">Project-Based</h4>
                    <p class="text-gray-600 text-sm">Fixed scope with defined deliverables and timeline</p>
                  </div>
                  <div class="border border-gray-200 rounded-lg p-4">
                    <h4 class="font-semibold text-gray-900 mb-2">Retainer</h4>
                    <p class="text-gray-600 text-sm">Ongoing development and support partnership</p>
                  </div>
                  <div class="border border-gray-200 rounded-lg p-4">
                    <h4 class="font-semibold text-gray-900 mb-2">Consultation</h4>
                    <p class="text-gray-600 text-sm">Technical guidance and strategic planning</p>
                  </div>
                </div>
              </div>

              <!-- Quick Actions -->
              <div class="space-y-4">
                <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 class="text-lg font-bold mb-2 text-blue-900">Vibe Coding Cleanup</h3>
                  <p class="text-blue-700 mb-4 text-sm">Get a free audit of your AI-generated application</p>
                  <button
                    @click="selectService('vibe-cleanup')"
                    class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                  >
                    Request Free Audit
                  </button>
                </div>

                <div class="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 class="text-lg font-bold mb-2 text-green-900">Custom Development</h3>
                  <p class="text-green-700 mb-4 text-sm">Start building your custom solution</p>
                  <button
                    @click="selectService('web-development')"
                    class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                  >
                    Start Your Project
                  </button>
                </div>

                <div class="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <h3 class="text-lg font-bold mb-2 text-purple-900">Staff Augmentation</h3>
                  <p class="text-purple-700 mb-4 text-sm">Find expert developers for your team</p>
                  <button
                    @click="selectService('staff-augmentation')"
                    class="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                  >
                    Find Your Developer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Alternative Contact -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-6 text-gray-900">Prefer to Talk Directly?</h2>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Schedule a consultation call to discuss your project in detail and get expert advice on the best approach.
        </p>
        <button class="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
          Schedule a Call
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
const form = ref({
  name: '',
  email: '',
  company: '',
  projectType: '',
  description: '',
  timeline: '',
  budget: ''
})

const isSubmitting = ref(false)

const selectService = (serviceType) => {
  form.value.projectType = serviceType
  // Scroll to form
  document.getElementById('projectType')?.scrollIntoView({ behavior: 'smooth' })
}

const submitForm = async () => {
  isSubmitting.value = true

  try {
    // In a real application, you would send this to your backend
    console.log('Form submitted:', form.value)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Show success message (you could use a toast notification)
    alert('Thank you! We\'ll get back to you within 24 hours.')

    // Reset form
    form.value = {
      name: '',
      email: '',
      company: '',
      projectType: '',
      description: '',
      timeline: '',
      budget: ''
    }
  } catch (error) {
    console.error('Form submission error:', error)
    alert('There was an error sending your message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}

useHead({
  title: 'Contact - Aesir Tecnologia',
  meta: [
    { name: 'description', content: 'Get in touch with Aesir Tecnologia. Let\'s discuss your project and how we can help transform your software vision into reality.' }
  ]
})
</script>