<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navigation -->
    <header class="sticky top-4 z-50 px-4">
      <div class="mx-auto max-w-6xl">
        <div class="flex items-center justify-between rounded-2xl border border-slate-700/60 bg-slate-900/80 px-6 py-4 backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.45)]">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center gap-2 text-xl font-semibold tracking-tight text-white">
            <span class="inline-grid place-items-center rounded-xl bg-blue-600/30 px-2 py-1 text-sm font-bold uppercase text-blue-200">Aesir</span>
            <span class="hidden sm:inline text-slate-200">Tecnologia</span>
          </NuxtLink>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-200">
            <NuxtLink to="/" class="transition hover:text-white/90">Home</NuxtLink>
            <div class="relative group">
              <button class="flex items-center gap-1 transition hover:text-white/90">
                Services
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div class="invisible absolute left-1/2 top-10 w-64 -translate-x-1/2 rounded-2xl border border-slate-700/60 bg-slate-900/95 p-3 opacity-0 shadow-xl backdrop-blur-xl transition group-hover:visible group-hover:opacity-100">
                <div class="flex flex-col gap-1 text-sm text-slate-200">
                  <NuxtLink to="/services" class="rounded-lg px-3 py-2 transition hover:bg-slate-800/70 hover:text-white" >All Services</NuxtLink>
                  <NuxtLink to="/services/vibe-cleanup" class="rounded-lg px-3 py-2 transition hover:bg-slate-800/70 hover:text-white">Vibe Coding Cleanup</NuxtLink>
                  <NuxtLink to="/services/web-development" class="rounded-lg px-3 py-2 transition hover:bg-slate-800/70 hover:text-white">Web Development</NuxtLink>
                  <NuxtLink to="/services/staff-augmentation" class="rounded-lg px-3 py-2 transition hover:bg-slate-800/70 hover:text-white">Staff Augmentation</NuxtLink>
                  <NuxtLink to="/services/mobile-development" class="rounded-lg px-3 py-2 transition hover:bg-slate-800/70 hover:text-white">Mobile Development</NuxtLink>
                  <NuxtLink to="/services/game-development" class="rounded-lg px-3 py-2 transition hover:bg-slate-800/70 hover:text-white">Game Development</NuxtLink>
                </div>
              </div>
            </div>
            <NuxtLink to="/about" class="transition hover:text-white/90">About</NuxtLink>
            <NuxtLink to="/process" class="transition hover:text-white/90">Process</NuxtLink>
            <NuxtLink to="/blog" class="transition hover:text-white/90">Blog</NuxtLink>
            <NuxtLink to="/contact" class="primary-cta">
              <span>Book a Call</span>
            </NuxtLink>
          </nav>

          <!-- Mobile Menu Button -->
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-slate-200 transition hover:text-white">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <transition name="fade">
          <div v-if="mobileMenuOpen" class="mt-3 rounded-2xl border border-slate-700/60 bg-slate-900/90 px-6 py-6 text-sm text-slate-200 shadow-2xl backdrop-blur-xl md:hidden">
            <div class="flex flex-col gap-3">
              <NuxtLink to="/" class="transition hover:text-white" @click="mobileMenuOpen = false">Home</NuxtLink>
              <NuxtLink to="/services" class="transition hover:text-white" @click="mobileMenuOpen = false">Services</NuxtLink>
              <NuxtLink to="/services/vibe-cleanup" class="pl-4 transition hover:text-white" @click="mobileMenuOpen = false">Vibe Coding Cleanup</NuxtLink>
              <NuxtLink to="/services/web-development" class="pl-4 transition hover:text-white" @click="mobileMenuOpen = false">Web Development</NuxtLink>
              <NuxtLink to="/services/staff-augmentation" class="pl-4 transition hover:text-white" @click="mobileMenuOpen = false">Staff Augmentation</NuxtLink>
              <NuxtLink to="/services/mobile-development" class="pl-4 transition hover:text-white" @click="mobileMenuOpen = false">Mobile Development</NuxtLink>
              <NuxtLink to="/services/game-development" class="pl-4 transition hover:text-white" @click="mobileMenuOpen = false">Game Development</NuxtLink>
              <NuxtLink to="/about" class="transition hover:text-white" @click="mobileMenuOpen = false">About</NuxtLink>
              <NuxtLink to="/process" class="transition hover:text-white" @click="mobileMenuOpen = false">Process</NuxtLink>
              <NuxtLink to="/blog" class="transition hover:text-white" @click="mobileMenuOpen = false">Blog</NuxtLink>
              <NuxtLink to="/contact" class="primary-cta w-full justify-center" @click="mobileMenuOpen = false">
                Book a Call
              </NuxtLink>
            </div>
          </div>
        </transition>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1 pb-24">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="px-4 pb-10">
      <div class="mx-auto max-w-6xl rounded-3xl border border-slate-800/60 bg-slate-900/70 px-8 py-12 backdrop-blur-xl">
        <div class="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr]">
          <!-- Company Info -->
          <div>
            <div class="mb-6 flex items-center gap-3">
              <div class="inline-grid h-10 w-10 place-items-center rounded-2xl bg-blue-600/30 text-base font-semibold uppercase tracking-widest text-blue-200">
                AT
              </div>
              <div>
                <p class="text-sm uppercase tracking-[0.35em] text-slate-400">Aesir Tecnologia</p>
                <p class="text-lg font-semibold text-white">Security-first software studio</p>
              </div>
            </div>
            <p class="max-w-xl text-base leading-relaxed text-slate-300">
              We turn vibe-coded MVPs into production-ready systems with enterprise architecture, security hardening, and a product team that scales with you.
            </p>
            <div class="mt-6 grid gap-3 sm:grid-cols-3">
              <div class="stat-card">
                <h3>10+</h3>
                <p>Years Shipping</p>
              </div>
              <div class="stat-card">
                <h3>40%</h3>
                <p>Faster Launch</p>
              </div>
              <div class="stat-card">
                <h3>100%</h3>
                <p>Audit Ready</p>
              </div>
            </div>
          </div>

          <!-- Services -->
          <div>
            <h4 class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Services</h4>
            <ul class="mt-4 space-y-3 text-slate-300">
              <li><NuxtLink to="/services/vibe-cleanup" class="transition hover:text-white">Vibe Coding Cleanup</NuxtLink></li>
              <li><NuxtLink to="/services/web-development" class="transition hover:text-white">Web Development</NuxtLink></li>
              <li><NuxtLink to="/services/staff-augmentation" class="transition hover:text-white">Staff Augmentation</NuxtLink></li>
              <li><NuxtLink to="/services/mobile-development" class="transition hover:text-white">Mobile Development</NuxtLink></li>
              <li><NuxtLink to="/services/game-development" class="transition hover:text-white">Game Development</NuxtLink></li>
            </ul>
          </div>

          <!-- Company -->
          <div>
            <h4 class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Company</h4>
            <ul class="mt-4 space-y-3 text-slate-300">
              <li><NuxtLink to="/about" class="transition hover:text-white">About</NuxtLink></li>
              <li><NuxtLink to="/process" class="transition hover:text-white">Process</NuxtLink></li>
              <li><NuxtLink to="/blog" class="transition hover:text-white">Blog</NuxtLink></li>
              <li><NuxtLink to="/contact" class="transition hover:text-white">Contact</NuxtLink></li>
            </ul>
            <div class="mt-8 space-y-3 text-sm text-slate-400">
              <p class="font-semibold text-slate-200">São Paulo • Remote-first</p>
              <p>contact@aesir.dev</p>
              <p>+55 (11) 99999-9999</p>
            </div>
          </div>
        </div>

        <div class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800/70 pt-6 text-sm text-slate-500 md:flex-row">
          <p>&copy; {{ currentYear }} Aesir Tecnologia. All rights reserved.</p>
          <div class="flex items-center gap-3">
            <span class="text-slate-400">Follow</span>
            <div class="flex items-center gap-2">
              <a href="#" aria-label="LinkedIn" class="rounded-full border border-slate-700/60 px-3 py-1 text-slate-300 transition hover:border-slate-500 hover:text-white">LinkedIn</a>
              <a href="#" aria-label="GitHub" class="rounded-full border border-slate-700/60 px-3 py-1 text-slate-300 transition hover:border-slate-500 hover:text-white">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const mobileMenuOpen = ref(false)
const currentYear = new Date().getFullYear()
const route = useRoute()

// Close mobile menu when route changes
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>
