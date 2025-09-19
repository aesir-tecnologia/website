<template>
  <div class="page">
    <section class="section hero">
      <div class="container section-inner">
        <div class="section-header">
          <h1>Privacy Policy</h1>
          <p class="section-subhead">We respect your privacy and outline how we handle data across our services and website.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container section-inner">
        <div class="card card--muted">
          <p>This website collects the minimum information required to respond to project inquiries and deliver requested services. We do not sell or share your data with third parties outside of direct service delivery. For privacy questions, email <a href="mailto:hello@aesir.dev">hello@aesir.dev</a>.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Privacy Policy | Aesir Tecnologia',
  description: 'Learn how Aesir Tecnologia manages data privacy, inquiries, and client information.'
})
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding-bottom: 6rem;
}

h1 {
  font-size: clamp(2.5rem, 3.5vw, 3.25rem);
  margin: 0;
}
</style>
