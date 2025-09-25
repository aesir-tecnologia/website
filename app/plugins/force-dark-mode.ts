export default defineNuxtPlugin(() => {
  const colorMode = useColorMode()

  colorMode.preference = 'dark'
  colorMode.value = 'dark'
  colorMode.forced = true
})
