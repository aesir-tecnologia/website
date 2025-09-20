<template>
  <ColorModeSwitch v-model="colorMode.preference" class="text-slate-100" />
</template>

<script setup lang="ts">
const colorMode = useColorMode()
</script>
