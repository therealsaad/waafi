import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CTASection } from "@/components/cta-section"
import { AboutContent } from "@/components/about-content"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Waafi Associates LLC AFZ is a multi-service consulting and technology firm established under Ajman Free Zone Authority.",
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <AboutContent />
        <CTASection />
      </main>
      <SiteFooter />
    </>
  )
}
