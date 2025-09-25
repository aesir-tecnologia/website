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

type BackgroundTone = 'primary' | 'accent' | 'neutral'

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

const { tokens } = useUiTokens()

const layers = computed(() => {
  const color = tokens.value.backgrounds[props.tone] ?? tokens.value.backgrounds.primary
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
