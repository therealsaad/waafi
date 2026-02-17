import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactContent } from "@/components/contact-content"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Waafi Associates LLC AFZ. Reach out from our Ajman Free Zone office.",
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ContactContent />
      </main>
      <SiteFooter />
    </>
  )
}
