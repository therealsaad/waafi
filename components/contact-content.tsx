"use client"

import { MapPin, Clock, Building2 } from "lucide-react"
import { AnimateIn } from "@/components/animate-in"
import { ContactForm } from "@/components/contact-form"

const details = [
  {
    icon: Building2,
    title: "Company",
    lines: ["Waafi Associates LLC AFZ"],
  },
  {
    icon: MapPin,
    title: "Registered Office",
    lines: [
      "Office No.: CWS-2V-322433",
      "26th Floor, Amber Gem Tower",
<<<<<<< HEAD
      " Sheikh Khalifa Street",
=======
      "Business District, Sheikh Khalifa Street",
>>>>>>> 1fea388391f353f877825ecab5b5886437e5d20a
      "Ajman, United Arab Emirates",
    ],
  },
  {
    icon: Clock,
    title: "Business Hours",
<<<<<<< HEAD
    lines: ["Monday - Friday", "9:00 AM - 5:00 PM (GST)"],
=======
    lines: ["Sunday - Thursday", "9:00 AM - 6:00 PM (GST)"],
>>>>>>> 1fea388391f353f877825ecab5b5886437e5d20a
  },
]

export function ContactContent() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-36 pb-20 bg-waafi-navy overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(56,189,248,0.1),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <AnimateIn>
            <span className="text-xs font-semibold uppercase tracking-widest text-waafi-teal">
              Get In Touch
            </span>
            <h1 className="mt-3 text-4xl font-serif font-bold tracking-tight text-primary-foreground sm:text-5xl text-balance">
              Contact Us
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/65 sm:text-lg">
              Whether you have a project in mind or need guidance on the right
              approach, we are here to help. Reach out to start a conversation.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            <AnimateIn direction="left" className="lg:col-span-3">
              <div className="glass-card rounded-xl p-8 sm:p-10">
                <h2 className="text-xl font-semibold text-foreground mb-1">
                  Send us a message
                </h2>
                <p className="text-sm text-muted-foreground mb-8">
                  Fill out the form below and our team will respond within one
                  business day.
                </p>
                <ContactForm />
              </div>
            </AnimateIn>

            <AnimateIn direction="right" delay={0.15} className="lg:col-span-2">
              <div className="flex flex-col gap-8">
                {details.map((detail) => (
                  <div key={detail.title} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-waafi-teal/10 text-waafi-teal shrink-0">
                      <detail.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-1.5">
                        {detail.title}
                      </h3>
                      {detail.lines.map((line) => (
                        <p
                          key={line}
                          className="text-sm text-muted-foreground leading-relaxed"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="glass-card rounded-xl p-7 mt-4">
                  <h3 className="text-sm font-semibold text-foreground mb-2">
                    Ajman Free Zone
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Waafi Associates LLC AFZ is professionally licensed under
                    Ajman Free Zone Authority, UAE. Our multi-disciplinary
                    license covers design, technology, and digital security
                    services.
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  )
}
