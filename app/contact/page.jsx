import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "@/components/page-header"
import { ContactContent } from "@/components/contact-content"

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Waafi Associates LLC AFZ. We are ready to discuss your next project.",
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHeader
          label="Get in Touch"
          title="Contact Us"
          description="Ready to discuss your project? Reach out and our team will respond within 24 hours."
        />
        <ContactContent />
      </main>
      <SiteFooter />
    </>
  )
}
