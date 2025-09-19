<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gray-900 text-white py-20">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-5xl font-bold mb-6">Blog</h1>
        <p class="text-xl max-w-3xl mx-auto text-gray-300">
          Insights on AI-generated code, software development, and building production-ready applications
        </p>
      </div>
    </section>

    <!-- Coming Soon -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6 text-center">
        <div class="max-w-2xl mx-auto">
          <h2 class="text-4xl font-bold mb-8 text-gray-900">Coming Soon</h2>
          <p class="text-xl text-gray-600 mb-8">
            We're working on bringing you valuable content about vibe coding cleanup, software development best practices, and industry insights.
          </p>
          <div class="bg-gray-50 p-8 rounded-lg">
            <h3 class="text-2xl font-bold mb-4 text-gray-900">What to Expect</h3>
            <div class="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">Vibe Coding Insights</h4>
                <p class="text-gray-600 text-sm">Best practices for cleaning up AI-generated code and making it production-ready</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">Development Tips</h4>
                <p class="text-gray-600 text-sm">Technical guides and tutorials for modern web development</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">Case Studies</h4>
                <p class="text-gray-600 text-sm">Real-world examples of successful application transformations</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">Industry News</h4>
                <p class="text-gray-600 text-sm">Updates on AI tools, frameworks, and development trends</p>
              </div>
            </div>
          </div>
          <div class="mt-8">
            <NuxtLink to="/contact" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block">
              Get Notified When We Launch
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Blog - Aesir Tecnologia',
  meta: [
    { name: 'description', content: 'Insights on AI-generated code, software development, and building production-ready applications. Coming soon.' }
  ]
})
</script>