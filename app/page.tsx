import { BackToTop } from '@/components/back-to-top'
import { ClientsCarousel } from '@/components/clients-carousel'
import { Footer } from '@/components/footer'
import { FounderSection } from '@/components/founder-section'
import { GroupCompanies } from '@/components/group-companies'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { ServicesTabs } from '@/components/services-tabs'
import { TeamSection } from '@/components/team-section'
import { Timeline } from '@/components/timeline'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Timeline />
        <TeamSection />
        <FounderSection />
        <ServicesTabs />
        <GroupCompanies />
        <ClientsCarousel />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
