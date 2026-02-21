import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CTASection } from "@/components/cta-section"
import { ServicesContent } from "@/components/services-content"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Interior Design Engineering, Software Development, E-commerce, Cyber Security, and IT Consulting services by Waafi Associates.",
}

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ServicesContent />
        <CTASection />
      </main>
      <SiteFooter />
    </>
  )
}
