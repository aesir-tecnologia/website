<template>
  <div class="relative overflow-hidden" v-bind="$attrs">
    <div class="py-6">
      <div class="carousel-track flex items-center gap-8 whitespace-nowrap">
        <div
          v-for="(tech, index) in scrollingLogos"
          :key="index"
          class="px-6 py-3 rounded-lg bg-white/90 text-gray-900 font-semibold shadow border border-gray-200/70 backdrop-blur-lg"
        >
          {{ tech }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const logos = [
  'PHP',
  'Laravel',
  'JavaScript',
  'Vue.js',
  'React',
  'Next.js',
  'React Native',
  'Node.js',
  'Flutter',
  'Python',
  'Django',
  'Unity'
]

const scrollingLogos = [...logos, ...logos]
</script>

<style scoped>
.carousel-track {
  animation: scroll 30s linear infinite;
}

.carousel-track:hover {
  animation-play-state: paused;
}

@media (prefers-reduced-motion: reduce) {
  .carousel-track {
    animation-duration: 0s;
    animation-play-state: paused;
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}
</style>
