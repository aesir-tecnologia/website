<template>
  <div class="space-y-24">
    <!-- Hero Section -->
    <section class="relative overflow-hidden px-6 pt-28">
      <div class="absolute -left-20 top-12 h-96 w-96 rounded-full bg-blue-500/20 blur-[140px]"></div>
      <div class="absolute -right-24 top-32 h-80 w-80 rounded-full bg-purple-500/25 blur-[130px]"></div>
      <div class="mx-auto max-w-6xl">
        <div class="rounded-3xl border border-slate-700/60 bg-slate-900/80 px-10 py-16 text-center backdrop-blur-xl">
          <div class="badge-chip mx-auto w-fit">Aesir Services</div>
          <h1 class="mt-6 text-4xl font-semibold text-white md:text-5xl">Our Services</h1>
          <p class="mt-6 max-w-3xl mx-auto text-lg leading-relaxed text-slate-300">
            From transforming AI-generated prototypes to building custom solutions and scaling your development team, we help you move faster with confidence.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="section-shell px-6">
      <div class="mx-auto max-w-6xl">
        <div class="grid gap-8 lg:grid-cols-2">
          <div class="glass-card border-blue-500/40 bg-gradient-to-br from-blue-600/30 via-slate-900/60 to-slate-900/80">
            <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">Primary Focus · 50%</div>
            <h2 class="text-3xl font-semibold text-white">Vibe Coding Cleanup</h2>
            <p class="mt-4 text-base leading-relaxed text-slate-200">
              The first and only vibe coding cleanup service. Transform your AI-generated MVP into production-ready software.
            </p>
            <NuxtLink to="/services/vibe-cleanup" class="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-200 transition hover:text-white">
              Learn More
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </div>
          <div class="glass-card">
            <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">25% Focus</div>
            <h2 class="text-3xl font-semibold text-white">Web Development</h2>
            <p class="mt-4 text-base leading-relaxed text-slate-200">
              Custom web applications built for performance and scalability using modern technologies.
            </p>
            <NuxtLink to="/services/web-development" class="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 transition hover:text-white">
              Learn More
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </div>
          <div class="glass-card">
            <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-purple-200">25% Focus</div>
            <h2 class="text-3xl font-semibold text-white">Staff Augmentation</h2>
            <p class="mt-4 text-base leading-relaxed text-slate-200">
              Expert developers who integrate seamlessly with your team for short-term or long-term projects.
            </p>
            <NuxtLink to="/services/staff-augmentation" class="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-purple-200 transition hover:text-white">
              Learn More
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </div>
          <div class="glass-card">
            <h2 class="text-3xl font-semibold text-white">Mobile Development</h2>
            <p class="mt-4 text-base leading-relaxed text-slate-200">Native and cross-platform mobile applications that deliver exceptional user experiences.</p>
            <NuxtLink to="/services/mobile-development" class="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-orange-200 transition hover:text-white">
              Learn More
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <div class="mt-10 mx-auto max-w-3xl">
          <div class="glass-card px-6 py-8 text-center">
            <h2 class="text-3xl font-semibold text-white">Game Development</h2>
            <p class="mt-3 text-base text-slate-200">Interactive games and immersive experiences using Unity and HTML5.</p>
            <NuxtLink to="/services/game-development" class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-rose-200 transition hover:text-white">
              Learn More
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="px-6 pb-12">
      <div class="mx-auto max-w-5xl text-center">
        <div class="rounded-3xl border border-slate-700/60 bg-slate-900/80 px-10 py-14 backdrop-blur-xl">
          <h2 class="text-3xl font-semibold text-white md:text-4xl">Ready to Get Started?</h2>
          <p class="mt-4 text-lg text-slate-300">Let's discuss your project and how we can help transform your vision into reality.</p>
          <NuxtLink to="/contact" class="primary-cta mt-8 inline-flex">Contact Us Today</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Our Services - Aesir Tecnologia',
  meta: [
    { name: 'description', content: 'Vibe coding cleanup, custom web development, staff augmentation, mobile development, and game development services.' }
  ]
})
</script>
