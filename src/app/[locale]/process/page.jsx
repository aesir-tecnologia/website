import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import { RootLayout } from '@/components/RootLayout'
import { setRequestLocale } from 'next-intl/server'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-135 flex-none lg:w-180">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-148 lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Discovery" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We begin every project with a comprehensive discovery phase to 
          understand your business{' '}
          <strong className="font-semibold text-neutral-950">objectives</strong>, 
          technical requirements, and project constraints. This collaborative 
          process ensures we&apos;re aligned from day one.
        </p>
        <p>
          Our team conducts stakeholder interviews, analyzes existing systems, 
          and evaluates technical requirements to create a clear project{' '}
          <strong className="font-semibold text-neutral-950">roadmap</strong>. 
          We identify potential challenges early and establish success metrics 
          for measurable outcomes.
        </p>
        <p>
          The discovery phase concludes with a detailed project{' '}
          <strong className="font-semibold text-neutral-950">proposal</strong> 
          including technical specifications, timeline, and budget breakdown 
          so you know exactly what to expect.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Stakeholder interviews</TagListItem>
        <TagListItem>Technical requirements analysis</TagListItem>
        <TagListItem>System architecture planning</TagListItem>
        <TagListItem>User story mapping</TagListItem>
        <TagListItem>Technology stack evaluation</TagListItem>
        <TagListItem>Project roadmap creation</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Development" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Our development process follows Agile principles with regular sprints, 
          continuous integration, and frequent client{' '}
          <strong className="font-semibold text-neutral-950">collaboration</strong>. 
          We break complex projects into manageable iterations, delivering 
          working software regularly for your feedback.
        </p>
        <p>
          Each project is assigned a dedicated{' '}
          <strong className="font-semibold text-neutral-950">team</strong> including 
          project manager, lead developer, and specialists as needed. We maintain 
          open communication through daily standups, sprint reviews, and regular 
          progress reports to keep you informed every step of the way.
        </p>
        <p>
          Our developers follow best practices including code reviews, automated 
          testing, and continuous deployment to ensure{' '}
          <strong className="font-semibold text-neutral-950">quality</strong> and 
          maintainable code that scales with your business needs.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Sarah Mitchell', role: 'CTO, RetailTech Solutions' }}
        className="mt-12"
      >
        Aesir&apos;s team delivered our e-commerce platform exactly as planned. 
        Their transparent communication and regular updates made the entire 
        development process smooth and predictable.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Launch & Support" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Our delivery process includes comprehensive testing, performance 
          optimization, and{' '}
          <strong className="font-semibold text-neutral-950">deployment</strong> 
          to production environments. We conduct thorough QA testing and user 
          acceptance testing to ensure everything meets your requirements.
        </p>
        <p>
          We provide detailed documentation, training materials, and knowledge 
          transfer sessions to ensure your team can effectively maintain and 
          extend the{' '}
          <strong className="font-semibold text-neutral-950">solution</strong>. 
          Our goal is to deliver not just working software, but a system you 
          can confidently operate and evolve.
        </p>
        <p>
          Post-launch support includes monitoring, bug fixes, and performance 
          optimization during the initial weeks. We also offer ongoing{' '}
          <strong className="font-semibold text-neutral-950">maintenance</strong> 
          packages to keep your solution secure, updated, and performing 
          optimally as your business grows.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Quality Assurance">
          Comprehensive testing including unit tests, integration tests, and 
          user acceptance testing to ensure reliability and performance.
        </ListItem>
        <ListItem title="Deployment">
          Professional deployment to production environments with monitoring, 
          backup strategies, and rollback procedures for peace of mind.
        </ListItem>
        <ListItem title="Documentation">
          Complete technical documentation, user guides, and training materials 
          to ensure your team can maintain and extend the solution.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our approach"
        title="Professional development with proven methodologies"
      >
        <p>
          We combine modern technologies with proven development practices to 
          deliver reliable, scalable solutions. Our commitment to code quality 
          and transparent communication ensures successful project outcomes.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Quality Focused">
            We maintain high standards through code reviews, automated testing, 
            and continuous integration to ensure robust, maintainable solutions.
          </GridListItem>
          <GridListItem title="Transparent">
            Regular communication, progress updates, and clear documentation 
            keep all stakeholders informed throughout the development process.
          </GridListItem>
          <GridListItem title="Collaborative">
            We work closely with your team, incorporating feedback and adapting 
            to changing requirements while maintaining project momentum.
          </GridListItem>
          <GridListItem title="Reliable">
            Our proven track record of on-time, on-budget delivery speaks to 
            our commitment to meeting project goals and client expectations.
          </GridListItem>
          <GridListItem title="Experienced">
            Seven years of experience across multiple industries gives us 
            the expertise to handle complex technical challenges effectively.
          </GridListItem>
          <GridListItem title="Modern">
            We stay current with technology trends and best practices, ensuring 
            your solution is built with the right tools for long-term success.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Our Process',
  description:
    'Our proven Agile development process ensures quality deliverables through transparent communication, regular iteration, and collaborative partnership.',
}

export default async function Process({ params }) {
  const { locale } = await params
  setRequestLocale(locale)
  return (
    <RootLayout>
      <PageIntro eyebrow="Our process" title="Agile development that delivers">
        <p>
          Our proven Agile methodology ensures transparent communication, 
          rapid iteration, and high-quality deliverables. We work closely 
          with your team to understand requirements and deliver solutions 
          that meet your business objectives.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </RootLayout>
  )
}
