<template>
  <div class="space-y-24">
    <!-- Hero Section -->
    <section class="relative overflow-hidden px-6 pt-28">
      <div class="absolute -right-28 top-12 h-96 w-96 rounded-full bg-emerald-500/25 blur-[140px]"></div>
      <div class="absolute -left-16 top-40 h-80 w-80 rounded-full bg-sky-500/25 blur-[120px]"></div>
      <div class="mx-auto max-w-6xl">
        <div class="rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-600/40 via-slate-900/70 to-slate-900/90 px-10 py-16 text-center backdrop-blur-xl">
          <div class="badge-chip mx-auto w-fit">Custom Web Development</div>
          <h1 class="mt-6 text-4xl font-semibold text-white md:text-5xl">Custom Web Applications That Scale With Your Vision</h1>
          <p class="mt-6 max-w-3xl mx-auto text-lg leading-relaxed text-emerald-100">
            Custom web applications using Laravel, React, Vue.js, Node.js, and Python. From e-commerce platforms to custom enterprise solutions built for performance and scalability.
          </p>
          <NuxtLink to="/contact" class="primary-cta mt-10 inline-flex">Start Your Web Project</NuxtLink>
        </div>
      </div>
    </section>

    <!-- What We Build -->
    <section class="section-shell px-6">
      <div class="mx-auto max-w-6xl">
        <div class="section-heading">
          <h2>What We Build</h2>
        </div>
        <div class="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div class="glass-card px-6 py-7">
            <div class="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-2xl">🛒</div>
            <h3 class="text-lg font-semibold text-white">E-commerce Platforms</h3>
            <p class="mt-3 text-sm text-slate-300">Online stores with payment processing, inventory management, and customer portals.</p>
          </div>
          <div class="glass-card px-6 py-7">
            <div class="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/20 text-2xl">💼</div>
            <h3 class="text-lg font-semibold text-white">Business Management Systems</h3>
            <p class="mt-3 text-sm text-slate-300">Custom CRM, ERP, and workflow management solutions.</p>
          </div>
          <div class="glass-card px-6 py-7">
            <div class="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple-500/20 text-2xl">📊</div>
            <h3 class="text-lg font-semibold text-white">Dashboards & Analytics</h3>
            <p class="mt-3 text-sm text-slate-300">Customer portals and data visualization applications.</p>
          </div>
          <div class="glass-card px-6 py-7">
            <div class="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500/20 text-2xl">📝</div>
            <h3 class="text-lg font-semibold text-white">Content Management</h3>
            <p class="mt-3 text-sm text-slate-300">Custom CMS solutions tailored to your content workflow.</p>
          </div>
          <div class="glass-card px-6 py-7">
            <div class="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-rose-500/20 text-2xl">🔗</div>
            <h3 class="text-lg font-semibold text-white">API-Driven Applications</h3>
            <p class="mt-3 text-sm text-slate-300">Microservices and API-first architecture solutions.</p>
          </div>
          <div class="glass-card px-6 py-7">
            <div class="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-500/20 text-2xl">📱</div>
            <h3 class="text-lg font-semibold text-white">Progressive Web Apps</h3>
            <p class="mt-3 text-sm text-slate-300">PWAs that work seamlessly across all devices.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Development Process -->
    <section class="px-6">
      <div class="mx-auto max-w-6xl">
        <div class="section-heading">
          <h2>Our Development Process</h2>
        </div>
        <div class="mt-14 grid gap-6 md:grid-cols-3">
          <div class="glass-card px-6 py-7">
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-base font-semibold text-emerald-200">1</div>
            <h3 class="mt-5 text-lg font-semibold text-white">Discovery & Planning</h3>
            <p class="mt-3 text-sm text-slate-300">Understanding your business requirements and technical specifications.</p>
          </div>
          <div class="glass-card px-6 py-7">
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-base font-semibold text-emerald-200">2</div>
            <h3 class="mt-5 text-lg font-semibold text-white">Architecture Design</h3>
            <p class="mt-3 text-sm text-slate-300">Scalable, secure system design with future growth in mind.</p>
          </div>
          <div class="glass-card px-6 py-7">
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-base font-semibold text-emerald-200">3</div>
            <h3 class="mt-5 text-lg font-semibold text-white">Agile Development</h3>
            <p class="mt-3 text-sm text-slate-300">Iterative development with regular check-ins and feedback.</p>
          </div>
          <div class="glass-card px-6 py-7">
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-base font-semibold text-emerald-200">4</div>
            <h3 class="mt-5 text-lg font-semibold text-white">Testing & Quality Assurance</h3>
            <p class="mt-3 text-sm text-slate-300">Comprehensive testing for reliability and performance.</p>
          </div>
          <div class="glass-card px-6 py-7">
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-base font-semibold text-emerald-200">5</div>
            <h3 class="mt-5 text-lg font-semibold text-white">Deployment & Launch</h3>
            <p class="mt-3 text-sm text-slate-300">Zero-downtime deployment strategies and production monitoring.</p>
          </div>
          <div class="glass-card px-6 py-7">
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-base font-semibold text-emerald-200">6</div>
            <h3 class="mt-5 text-lg font-semibold text-white">Support & Maintenance</h3>
            <p class="mt-3 text-sm text-slate-300">Ongoing maintenance, updates, and feature enhancements.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Value Proposition -->
    <section class="section-shell px-6">
      <div class="mx-auto max-w-6xl">
        <div class="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 class="text-3xl font-semibold text-white">Value Proposition</h2>
            <ul class="mt-6 space-y-4 text-base text-slate-300">
              <li>• When AI tools aren't enough, we build from scratch</li>
              <li>• Modern technologies with proven architectures</li>
              <li>• Built for growth from day one</li>
              <li>• Partnership approach to development</li>
            </ul>
          </div>
          <div>
            <h2 class="text-3xl font-semibold text-white">Target Messaging</h2>
            <div class="mt-6 space-y-4 text-base text-slate-300">
              <p>"Some ideas are too unique for AI tools. We build the impossible."</p>
              <p>"Skip the prototype phase. Go straight to production-ready."</p>
              <p>"Your vision deserves custom solutions, not AI templates."</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies -->
    <section class="px-6">
      <div class="mx-auto max-w-6xl">
        <div class="section-heading">
          <h2>Technologies We Use</h2>
          <p>Modern, proven technologies for scalable web applications.</p>
        </div>
        <div class="mt-10 grid gap-4 md:grid-cols-2 text-base text-slate-300">
          <span class="rounded-2xl border border-slate-700/60 bg-slate-900/70 px-6 py-3">Laravel</span>
          <span class="rounded-2xl border border-slate-700/60 bg-slate-900/70 px-6 py-3">Vue.js</span>
          <span class="rounded-2xl border border-slate-700/60 bg-slate-900/70 px-6 py-3">React</span>
          <span class="rounded-2xl border border-slate-700/60 bg-slate-900/70 px-6 py-3">JavaScript</span>
          <span class="rounded-2xl border border-slate-700/60 bg-slate-900/70 px-6 py-3">Node.js</span>
          <span class="rounded-2xl border border-slate-700/60 bg-slate-900/70 px-6 py-3">MySQL</span>
          <span class="rounded-2xl border border-slate-700/60 bg-slate-900/70 px-6 py-3">PostgreSQL</span>
        </div>
        <TechnologyCarousel class="mt-12" />
      </div>
    </section>

    <!-- CTA Section -->
    <section class="px-6 pb-12">
      <div class="mx-auto max-w-5xl text-center">
        <div class="rounded-3xl border border-emerald-500/30 bg-emerald-600/25 px-10 py-14 backdrop-blur-2xl">
          <h2 class="text-3xl font-semibold text-white md:text-4xl">Ready to Build Your Custom Web Application?</h2>
          <p class="mt-4 text-lg text-emerald-100">Let's discuss your project requirements and create a solution that grows with your business.</p>
          <NuxtLink to="/contact" class="primary-cta mt-8 inline-flex">Start Your Project</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Custom Web Development - Aesir Tecnologia',
  meta: [
    { name: 'description', content: 'Custom web applications built for performance and scalability using Laravel, React, Vue.js, Node.js, and Python.' }
  ]
})
</script>
