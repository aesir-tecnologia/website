import '@/styles/tailwind.css'
import {NextIntlClientProvider} from 'next-intl';

export const metadata = {
  title: {
    template: '%s - Aesir Tecnologia',
    default: 'Aesir Tecnologia - Expert Development & Staff Augmentation Services',
  },
}

export default function Layout({ children }) {
  return (
    <html className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
