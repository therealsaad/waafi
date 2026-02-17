import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "@/components/page-header"
import { CTASection } from "@/components/cta-section"
import { AboutContent } from "@/components/about-content"

export const metadata = {
  title: "About Us",
  description:
    "Learn about Waafi Associates LLC AFZ, a UAE-based multi-disciplinary consulting and technology services firm.",
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHeader
          label="Who We Are"
          title="About Waafi Associates"
          description="A professionally licensed, multi-disciplinary service company operating from Ajman Free Zone, UAE - delivering integrated design, technology, and digital assurance solutions."
        />
        <AboutContent />
        <CTASection />
      </main>
      <SiteFooter />
    </>
  )
}
