<template>
  <div class="app-shell">
    <NuxtRouteAnnouncer />
    <header class="site-header">
      <div class="container header-inner">
        <NuxtLink to="/" class="logo" aria-label="Aesir Tecnologia homepage">Aesir Tecnologia</NuxtLink>
        <nav class="nav" aria-label="Primary">
          <NuxtLink to="/" class="nav-link">Home</NuxtLink>
          <NuxtLink to="/services" class="nav-link">Services</NuxtLink>
          <NuxtLink to="/about" class="nav-link">About</NuxtLink>
          <NuxtLink to="/process" class="nav-link">Process</NuxtLink>
          <NuxtLink to="/blog" class="nav-link">Blog</NuxtLink>
          <NuxtLink to="/contact" class="nav-link nav-link--cta">Contact</NuxtLink>
        </nav>
      </div>
    </header>
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
</template>

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
  padding: 1rem 0;
}

.logo {
  font-weight: 700;
  font-size: 1.125rem;
  letter-spacing: 0.04em;
}

.nav {
  display: flex;
  gap: 1rem;
}

.nav-link {
  padding: 0.5rem 0.75rem;
  border-radius: 999px;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.nav-link:hover,
.nav-link:focus-visible {
  background: rgba(51, 65, 85, 0.35);
}

.nav-link--cta {
  background: linear-gradient(135deg, #38bdf8, #6366f1);
  color: #0f172a;
  font-weight: 600;
}

.nav-link--cta:hover,
.nav-link--cta:focus-visible {
  background: linear-gradient(135deg, #22d3ee, #7c3aed);
  color: #0f172a;
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

@media (max-width: 768px) {
  .nav {
    display: none;
  }
}
</style>
