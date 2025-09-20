<template>
  <NuxtImg
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    :class="['object-contain', rounded ? 'rounded-2xl' : '', 'bg-slate-900/60']"
    :loading="loading"
    :decoding="decoding"
    :placeholder="placeholder"
    :sizes="sizes"
  />
</template>

<script setup lang="ts">
withDefaults(
  defineProps({
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    width: {
      type: [Number, String],
      default: undefined
    },
    height: {
      type: [Number, String],
      default: undefined
    },
    loading: {
      type: String,
      default: 'lazy'
    },
    decoding: {
      type: String,
      default: 'async'
    },
    placeholder: {
      type: [Boolean, String],
      default: 'blur'
    },
    sizes: {
      type: String,
      default: 'sm:200px md:320px lg:400px'
    },
    rounded: {
      type: Boolean,
      default: false
    }
  }),
  {
    placeholder: 'blur'
  }
)
</script>
