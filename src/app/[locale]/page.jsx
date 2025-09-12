
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import imageLaptop from '@/images/laptop.jpg'
import { RootLayout } from '@/components/RootLayout'
import { setRequestLocale, getTranslations } from 'next-intl/server'

function Technologies({ technologies, title }) {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            {title}
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {technologies.map((tech, index) => (
              <li key={index}>
                <FadeIn>
                  <div className="group relative">
                    <h3 className="font-display text-lg font-semibold text-white">
                      {tech.name}
                    </h3>
                    <p className="mt-2 text-sm text-neutral-300">
                      {tech.description}
                    </p>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}


function Services({ services }) {
  return (
    <>
      <SectionIntro
        eyebrow={services.eyebrow}
        title={services.title}
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          {services.description}
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <ListItem title={services.web.title}>
              {services.web.description}
            </ListItem>
            <ListItem title={services.mobile.title}>
              {services.mobile.description}
            </ListItem>
            <ListItem title={services.game.title}>
              {services.game.description}
            </ListItem>
            <ListItem title={services.staff.title}>
              {services.staff.description}
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'HomePage.metadata' })

  return {
    description: t('description')
  }
}

export default async function Home({ params }) {
  const { locale } = await params
  
  // Enable static rendering
  setRequestLocale(locale)

  // Get translations
  const t = await getTranslations({ locale, namespace: 'HomePage' })
  const tTech = await getTranslations({ locale, namespace: 'Technologies' })
  const tServices = await getTranslations({ locale, namespace: 'Services' })
  const tTestimonial = await getTranslations({ locale, namespace: 'Testimonial' })

  const technologies = [
    { name: tTech('php.name'), description: tTech('php.description') },
    { name: tTech('react.name'), description: tTech('react.description') },
    { name: tTech('vue.name'), description: tTech('vue.description') },
    { name: tTech('node.name'), description: tTech('node.description') },
    { name: tTech('python.name'), description: tTech('python.description') },
    { name: tTech('reactNative.name'), description: tTech('reactNative.description') },
    { name: tTech('flutter.name'), description: tTech('flutter.description') },
    { name: tTech('unity.name'), description: tTech('unity.description') }
  ]

  const services = {
    eyebrow: tServices('eyebrow'),
    title: tServices('title'),
    description: tServices('description'),
    web: { title: tServices('web.title'), description: tServices('web.description') },
    mobile: { title: tServices('mobile.title'), description: tServices('mobile.description') },
    game: { title: tServices('game.title'), description: tServices('game.description') },
    staff: { title: tServices('staff.title'), description: tServices('staff.description') }
  }

  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
            {t('title')}
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            {t('description')}
          </p>
        </FadeIn>
      </Container>

      <Technologies technologies={technologies} title={tTech('title')} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: tTestimonial('client'), logo: logoPhobiaDark }}
      >
        {tTestimonial('quote')}
      </Testimonial>

      <Services services={services} />

      <ContactSection />
    </RootLayout>
  )
}
