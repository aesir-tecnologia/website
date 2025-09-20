<template>
  <div
    class="background-variant pointer-events-none absolute inset-0 -z-10"
    aria-hidden="true"
  >
    <component
      :is="layer.as"
      v-for="(layer, index) in layers"
      :key="index"
      :class="layer.class"
      :style="layer.style"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type BackgroundVariant = 'hero' | 'radial' | 'process'

type BackgroundTone = 'sky' | 'indigo' | 'violet' | 'teal'

type BackgroundAlignment = 'top' | 'center' | 'bottom'

type BackgroundIntensity = 'soft' | 'default' | 'strong'

const props = withDefaults(defineProps<{
  variant?: BackgroundVariant
  tone?: BackgroundTone
  align?: BackgroundAlignment
  intensity?: BackgroundIntensity
}>(), {
  variant: 'radial',
  tone: 'sky',
  align: 'center',
  intensity: 'default',
})

const toneMap: Record<BackgroundTone, { radial: string; linear: string }> = {
  sky: {
    radial: 'rgba(56,189,248,0.14)',
    linear: 'rgba(56,189,248,0.16)',
  },
  indigo: {
    radial: 'rgba(99,102,241,0.12)',
    linear: 'rgba(99,102,241,0.18)',
  },
  violet: {
    radial: 'rgba(168,85,247,0.12)',
    linear: 'rgba(168,85,247,0.18)',
  },
  teal: {
    radial: 'rgba(45,212,191,0.12)',
    linear: 'rgba(45,212,191,0.18)',
  },
}

const fadeStops: Record<BackgroundIntensity, string> = {
  soft: '55%',
  default: '70%',
  strong: '80%',
}

const alignLookup: Record<BackgroundAlignment, string> = {
  top: 'top',
  center: 'center',
  bottom: 'bottom',
}

const layers = computed(() => {
  const color = toneMap[props.tone] ?? toneMap.sky
  const stop = fadeStops[props.intensity] ?? fadeStops.default
  const position = alignLookup[props.align] ?? 'center'

  if (props.variant === 'hero') {
    return [
      {
        as: 'div',
        class: 'absolute inset-0',
        style: {
          background: `radial-gradient(circle at top, ${color.radial}, transparent ${stop})`,
        },
      },
      {
        as: 'div',
        class: 'absolute inset-0',
        style: {
          background: `linear-gradient(120deg, ${color.linear}, transparent 60%)`,
        },
      },
    ]
  }

  if (props.variant === 'process') {
    return [
      {
        as: 'div',
        class: 'absolute inset-0',
        style: {
          background: `radial-gradient(circle at ${position}, ${color.radial}, transparent ${stop})`,
        },
      },
      {
        as: 'div',
        class: 'absolute inset-y-0 left-0 w-px',
        style: {
          background: `linear-gradient(to bottom, transparent, ${color.linear}, transparent)`,
        },
      },
    ]
  }

  return [
    {
      as: 'div',
      class: 'absolute inset-0',
      style: {
        background: `radial-gradient(circle at ${position}, ${color.radial}, transparent ${stop})`,
      },
    },
  ]
})
</script>
