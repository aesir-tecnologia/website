<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gray-900 text-white py-20">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-5xl font-bold mb-6">Building Software Excellence for Over a Decade</h1>
        <p class="text-xl max-w-4xl mx-auto text-gray-300">
          We've been passionate about creating software that makes a difference. What started as a vision to build better applications has grown into a team dedicated to delivering exceptional digital solutions.
        </p>
      </div>
    </section>

    <!-- Our Mission -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl font-bold mb-8 text-gray-900">Our Mission</h2>
          <p class="text-xl text-gray-600 leading-relaxed">
            We believe great software should be human-centered, scalable, and built to last. Every application we create is designed to grow with your business while providing an exceptional user experience.
          </p>
        </div>
      </div>
    </section>

    <!-- Our Approach -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-6 text-gray-900">Our Approach</h2>
        </div>
        <div class="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 class="text-2xl font-bold mb-4 text-gray-900">Quality First</h3>
            <p class="text-gray-600 mb-8">
              We build applications with strong engineering principles, ensuring every line of code contributes to a robust, maintainable solution.
            </p>

            <h3 class="text-2xl font-bold mb-4 text-gray-900">Zero Downtime</h3>
            <p class="text-gray-600">
              Critical applications demand seamless deployments. We implement strategies that keep your business running while we enhance your systems.
            </p>
          </div>
          <div>
            <h3 class="text-2xl font-bold mb-4 text-gray-900">Modern Technologies</h3>
            <p class="text-gray-600 mb-8">
              We stay current with the latest frameworks and best practices, ensuring your applications leverage the most effective tools available.
            </p>

            <h3 class="text-2xl font-bold mb-4 text-gray-900">Client Partnership</h3>
            <p class="text-gray-600">
              Your success is our success. We work closely with you throughout the development process and beyond, ensuring long-term satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Values -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-6 text-gray-900">Our Values</h2>
        </div>
        <div class="grid lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl text-white">⭐</span>
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-900">Excellence</h3>
            <p class="text-gray-600">Every line of code matters. We pursue excellence in every aspect of development.</p>
          </div>
          <div class="text-center">
            <div class="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl text-white">🛡️</span>
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-900">Reliability</h3>
            <p class="text-gray-600">Applications you can depend on, with robust architecture and comprehensive testing.</p>
          </div>
          <div class="text-center">
            <div class="bg-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl text-white">🚀</span>
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-900">Innovation</h3>
            <p class="text-gray-600">Embracing new technologies thoughtfully to deliver cutting-edge solutions.</p>
          </div>
          <div class="text-center">
            <div class="bg-orange-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl text-white">🤝</span>
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-900">Partnership</h3>
            <p class="text-gray-600">Building long-term client relationships based on trust and mutual success.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-6 text-gray-900">Why Choose Aesir Tecnologia</h2>
        </div>
        <div class="grid lg:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-4 text-gray-900">Specialized Expertise</h3>
            <p class="text-gray-600">
              We're the first agency specializing in vibe coding cleanup, with deep expertise in transforming AI-generated code into production systems.
            </p>
          </div>
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-4 text-gray-900">Full-Stack Capability</h3>
            <p class="text-gray-600">
              Complete web and mobile development capabilities, from concept to deployment and ongoing maintenance.
            </p>
          </div>
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-4 text-gray-900">Proven Track Record</h3>
            <p class="text-gray-600">
              Over a decade of experience building applications that scale and evolve with growing businesses.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gray-900 text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold mb-8">Ready to Work With Us?</h2>
        <p class="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
          Let's discuss how we can help transform your software vision into reality.
        </p>
        <NuxtLink to="/contact" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block">
          Work With Us
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'About - Aesir Tecnologia',
  meta: [
    { name: 'description', content: 'Building software excellence for over a decade. Learn about our mission, values, and approach to creating exceptional digital solutions.' }
  ]
})
</script>