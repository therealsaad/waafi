import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "@/components/page-header"
import { CTASection } from "@/components/cta-section"
import { ServicesDetailed } from "@/components/services-detailed"

export const metadata = {
  title: "Our Services",
  description:
    "Explore our full service portfolio: Interior Design Engineering, Software Development, E-commerce, Cyber Security, and IT Consulting.",
}

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHeader
          label="Our Capabilities"
          title="Service Portfolio"
          description="We deliver integrated consulting and technology services across five core verticals, each backed by domain expertise and execution rigor."
        />
        <ServicesDetailed />
        <CTASection />
      </main>
      <SiteFooter />
    </>
  )
}
