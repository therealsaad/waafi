"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimateIn } from "@/components/animate-in"

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden bg-waafi-navy">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_110%,rgba(56,189,248,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <AnimateIn>
          <h2 className="text-3xl font-serif font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
            Engage a Trusted Consulting
            <br className="hidden sm:block" />& Technology Partner
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.15}>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/65">
            Let us help you navigate design, technology, and digital assurance
            with clarity and competence. Reach out to start a conversation.
          </p>
        </AnimateIn>
        <AnimateIn delay={0.3}>
          <Link href="/contact" className="inline-block mt-8">
            <Button
              size="lg"
              className="bg-waafi-teal text-accent-foreground hover:bg-waafi-teal-light cursor-pointer gap-2 px-8 h-12"
            >
              Contact Waafi Associates
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </AnimateIn>
      </div>
    </section>
  )
}
