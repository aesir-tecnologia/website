import { computed } from 'vue'

interface TechnologyItem {
  label: string
  alt?: string
  href?: string
}

const technologies: TechnologyItem[] = [
  { label: 'PHP' },
  { label: 'Laravel' },
  { label: 'JavaScript' },
  { label: 'Vue.js' },
  { label: 'React' },
  { label: 'Next.js' },
  { label: 'React Native' },
  { label: 'Node.js' },
  { label: 'Flutter' },
  { label: 'Python' },
  { label: 'Django' },
  { label: 'Unity' }
]

export function useTechnologyStack() {
  return computed(() => technologies)
}
