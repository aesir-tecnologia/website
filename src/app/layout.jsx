import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Aesir Tecnologia',
    default: 'Aesir Tecnologia - Innovative Technology Solutions for Modern Businesses',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
