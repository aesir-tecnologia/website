<template>
  <div
    :class="[
      'rounded-lg p-6 transition-all duration-300 hover:shadow-lg',
      emphasis === 'primary'
        ? 'bg-blue-50 border-2 border-blue-200 hover:border-blue-300'
        : 'bg-white border border-gray-200 hover:border-gray-300',
      invert && 'bg-gray-800 text-white border-gray-700',
      className
    ]"
  >
    <!-- Icon -->
    <div v-if="icon" class="mb-4">
      <component :is="icon" />
    </div>

    <!-- Title -->
    <h3
      :class="[
        'text-xl font-bold mb-3',
        emphasis === 'primary' ? 'text-blue-900' : 'text-gray-900',
        invert && 'text-white'
      ]"
    >
      {{ title }}
    </h3>

    <!-- Description -->
    <p
      :class="[
        'mb-6 leading-relaxed',
        emphasis === 'primary' ? 'text-blue-700' : 'text-gray-600',
        invert && 'text-gray-300'
      ]"
    >
      {{ description }}
    </p>

    <!-- CTA Button -->
    <div v-if="ctaText && ctaHref">
      <NuxtLink
        :to="ctaHref"
        :class="[
          'inline-block px-6 py-3 rounded-lg font-semibold transition-colors',
          emphasis === 'primary'
            ? 'bg-blue-600 hover:bg-blue-700 text-white'
            : 'bg-gray-600 hover:bg-gray-700 text-white',
          invert && 'bg-white text-gray-900 hover:bg-gray-100'
        ]"
      >
        {{ ctaText }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
interface Props {
  icon?: object
  title: string
  description: string
  ctaText?: string
  ctaHref?: string
  emphasis?: 'primary' | 'secondary'
  className?: string
  invert?: boolean
}

withDefaults(defineProps<Props>(), {
  emphasis: 'secondary',
  invert: false,
  icon: undefined,
  ctaText: undefined,
  ctaHref: undefined,
  className: undefined
})
</script>