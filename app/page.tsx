import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/hero-section"
import { AboutSnapshot } from "@/components/about-snapshot"
import { ServicesOverview } from "@/components/services-overview"
import { ValuePillars } from "@/components/value-pillars"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSnapshot />
        <ServicesOverview />
        <ValuePillars />
        <CTASection />
      </main>
      <SiteFooter />
    </>
  )
}
