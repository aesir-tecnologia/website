// import Image from 'next/image' - preserved for future use
import { setRequestLocale } from 'next-intl/server'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
// Team images - preserved for future use
// import imageAngelaFisher from '@/images/team/angela-fisher.jpg'
// import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'
// import imageBlakeReid from '@/images/team/blake-reid.jpg'
// import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
// import imageDriesVincent from '@/images/team/dries-vincent.jpg'
// import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
// import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg'
// import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
// import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
// import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
// import imageMichaelFoster from '@/images/team/michael-foster.jpg'
// import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'
import { loadArticles } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our values"
        title="Partnership, quality, and technical excellence."
        invert
      >
        <p>
          These principles guide our remote-first approach and define how we 
          collaborate with clients and deliver exceptional results.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Technical Excellence" invert>
            We maintain the highest standards in code quality, architecture, 
            and development practices, ensuring robust and scalable solutions.
          </GridListItem>
          <GridListItem title="Client Partnership" invert>
            We work as an extension of your team, understanding your business 
            goals and delivering solutions that drive real value.
          </GridListItem>
          <GridListItem title="Agile Collaboration" invert>
            Our remote-first approach and Agile methodologies ensure transparent 
            communication and efficient project delivery.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

// Team section - preserved for future use
/*
const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        image: { src: imageLeslieAlexander },
      },
      {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        image: { src: imageMichaelFoster },
      },
      {
        name: 'Dries Vincent',
        role: 'Partner & Business Relations',
        image: { src: imageDriesVincent },
      },
    ],
  },
  {
    title: 'Team',
    people: [
      {
        name: 'Chelsea Hagon',
        role: 'Senior Developer',
        image: { src: imageChelseaHagon },
      },
      {
        name: 'Emma Dorsey',
        role: 'Senior Designer',
        image: { src: imageEmmaDorsey },
      },
      {
        name: 'Leonard Krasner',
        role: 'VP, User Experience',
        image: { src: imageLeonardKrasner },
      },
      {
        name: 'Blake Reid',
        role: 'Junior Copywriter',
        image: { src: imageBlakeReid },
      },
      {
        name: 'Kathryn Murphy',
        role: 'VP, Human Resources',
        image: { src: imageKathrynMurphy },
      },
      {
        name: 'Whitney Francis',
        role: 'Content Specialist',
        image: { src: imageWhitneyFrancis },
      },
      {
        name: 'Jeffrey Webb',
        role: 'Account Coordinator',
        image: { src: imageJeffreyWebb },
      },
      {
        name: 'Benjamin Russel',
        role: 'Senior Developer',
        image: { src: imageBenjaminRussel },
      },
      {
        name: 'Angela Fisher',
        role: 'Front-end Developer',
        image: { src: imageAngelaFisher },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}
*/

export const metadata = {
  title: 'About Us',
  description:
    'Since 2017, Aesir Tecnologia has delivered web, mobile, and game development services plus staff augmentation.',
}

export default async function About({ params }) {
  const { locale } = await params
  setRequestLocale(locale)
  
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <RootLayout>
      <PageIntro eyebrow="About us" title="Seven years of development excellence">
        <p>
          Since 2017, Aesir Tecnologia has delivered exceptional development 
          services and strategic staff augmentation to companies worldwide.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Founded with a commitment to technical excellence and client 
            partnership, we specialize in web, mobile, and game development 
            using modern technologies like PHP/Laravel, React, Vue.js, and 
            React Native. Our remote-first approach allows us to work seamlessly 
            with teams regardless of location.
          </p>
          <p>
            We serve diverse industries including healthcare, retail, real estate, 
            hospitality, and content providers, bringing deep technical expertise 
            to projects starting at $20K USD. Whether you need a complete solution 
            or skilled developers to augment your team, we deliver quality results 
            through Agile methodologies and collaborative partnerships.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="7+" label="Years of experience" />
          <StatListItem value="20+" label="Projects delivered" />
          <StatListItem value="5+" label="Industries served" />
        </StatList>
      </Container>

      <Culture />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Get insights from our development team on best practices, emerging technologies, and lessons learned from working with clients across different industries."
        pages={blogArticles}
      />

      <ContactSection />
    </RootLayout>
  )
}
