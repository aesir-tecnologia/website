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
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: radial-gradient(circle at top, var(--aesir-highlight), transparent 60%), var(--aesir-surface-900);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(12px);
  background: var(--aesir-surface-850);
  border-bottom: 1px solid var(--aesir-border-soft);
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
  border-top: 1px solid var(--aesir-border-soft);
  background: var(--aesir-surface-950);
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
  color: var(--aesir-text-soft);
  margin: 0.25rem 0 0;
  max-width: 24rem;
}

.footer-links {
  display: flex;
  gap: 1rem;
}

.footer-link {
  color: var(--aesir-text-muted);
  font-size: 0.95rem;
}

.footer-link:hover {
  color: var(--aesir-text-inverse);
}
</style>
