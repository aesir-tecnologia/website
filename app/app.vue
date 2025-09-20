<template>
  <UApp>
    <div class="app-shell">
      <NuxtRouteAnnouncer />
      <header class="site-header">
        <UContainer class="header-inner">
          <NuxtLink to="/" class="logo" aria-label="Aesir Tecnologia homepage">
            Aesir Tecnologia
          </NuxtLink>

          <UNavigationMenu
            :items="navigationItems"
            highlight
            class="hidden md:flex"
          />

          <div class="header-actions">
            <UButton
              to="/contact"
              label="Contact"
              color="primary"
              class="hidden md:inline-flex"
            />
            <UButton
              label="Menu"
              color="neutral"
              variant="ghost"
              class="md:hidden"
              aria-label="Open navigation"
              @click="isMobileMenuOpen = true"
            />
          </div>
        </UContainer>
      </header>

      <USlideover v-model="isMobileMenuOpen" side="right" title="Menu" class="mobile-menu">
        <template #body>
          <UNavigationMenu
            :items="navigationItems"
            color="neutral"
            variant="link"
            orientation="vertical"
            class="mobile-navigation"
          />
          <UButton
            to="/contact"
            label="Contact"
            color="primary"
            block
            class="mobile-contact"
            @click="isMobileMenuOpen = false"
          />
        </template>
      </USlideover>
      <main class="page-content">
        <NuxtPage />
      </main>
      <footer class="site-footer">
        <div class="container footer-inner">
          <div>
            <p class="logo">Aesir Tecnologia</p>
            <p class="footer-copy">Transforming vibe-coded prototypes into production-ready products.</p>
          </div>
          <div class="footer-links">
            <NuxtLink to="/privacy" class="footer-link">Privacy Policy</NuxtLink>
            <NuxtLink to="/terms" class="footer-link">Terms</NuxtLink>
          </div>
        </div>
      </footer>
    </div>
  </UApp>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()
const isMobileMenuOpen = ref(false)

const navigationItems = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: '/',
    active: route.path === '/',
  },
  {
    label: 'Services',
    to: '/services',
    active: route.path.startsWith('/services'),
  },
  {
    label: 'About',
    to: '/about',
    active: route.path.startsWith('/about'),
  },
  {
    label: 'Process',
    to: '/process',
    active: route.path.startsWith('/process'),
  },
])

watch(
  () => route.path,
  () => {
    isMobileMenuOpen.value = false
  }
)
</script>
<style>
:root {
  color-scheme: light dark;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background-color: #0f172a;
  color: #e2e8f0;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #0f172a;
  color: #e2e8f0;
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: radial-gradient(circle at top, rgba(30, 64, 175, 0.25), transparent 60%), #0f172a;
}

.container {
  width: min(1120px, 100% - 3rem);
  margin-inline: auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(12px);
  background: rgba(15, 23, 42, 0.85);
  border-bottom: 1px solid rgba(148, 163, 184, 0.2);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 0;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo {
  font-weight: 700;
  font-size: 1.125rem;
  letter-spacing: 0.04em;
}

.mobile-navigation {
  margin-top: 1rem;
}

.mobile-contact {
  margin-top: 1.5rem;
}

.page-content {
  flex: 1;
}

.site-footer {
  border-top: 1px solid rgba(148, 163, 184, 0.2);
  background: rgba(15, 23, 42, 0.95);
}

.footer-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  gap: 1rem;
}

.footer-copy {
  color: rgba(226, 232, 240, 0.7);
  margin: 0.25rem 0 0;
  max-width: 24rem;
}

.footer-links {
  display: flex;
  gap: 1rem;
}

.footer-link {
  color: rgba(226, 232, 240, 0.75);
  font-size: 0.95rem;
}

.footer-link:hover {
  color: #f8fafc;
}
</style>
