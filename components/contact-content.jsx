"use client"

import { AnimateIn } from "@/components/animate-in"
import { ContactForm } from "@/components/contact-form"
import { MapPin, Phone, Mail, Clock, Building2 } from "lucide-react"

const contactDetails = [
  {
    icon: Building2,
    label: "Registered Office",
    value: "Office No.: CWS-2V-322433\n26th Floor, Amber Gem Tower\nSheikh Khalifa Street, Ajman, UAE",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+971 55 694 9498",
    href: "tel:+971556949498",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@waafiassociates.com",
    href: "mailto:info@waafiassociates.com",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Sunday - Thursday\n9:00 AM - 6:00 PM (GST)",
  },
]

export function ContactContent() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-5">
          {/* Contact Info Sidebar */}
          <AnimateIn direction="left" className="lg:col-span-2">
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-2xl font-serif font-bold tracking-tight text-foreground">
                  {"Let's Work Together"}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  Whether you have a specific project in mind or need strategic
                  advisory, our team is ready to discuss your requirements and
                  provide tailored solutions.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon
                  return (
                    <div key={detail.label} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-waafi-teal/10 text-waafi-teal shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-foreground">
                          {detail.label}
                        </h3>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            className="text-sm text-muted-foreground hover:text-waafi-teal transition-colors whitespace-pre-line mt-1 block"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground whitespace-pre-line mt-1">
                            {detail.value}
                          </p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="glass-card rounded-xl p-6 mt-2">
                <h3 className="text-sm font-semibold text-foreground mb-2">
                  Response Commitment
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  We aim to respond to all inquiries within 24 business hours.
                  For urgent matters, please contact us directly by phone.
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Contact Form */}
          <AnimateIn direction="right" delay={0.15} className="lg:col-span-3">
            <div className="glass-card rounded-xl p-8 md:p-10">
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-foreground">
                  Send Us a Message
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fill in the form below and we will get back to you promptly.
                </p>
              </div>
              <ContactForm />
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
