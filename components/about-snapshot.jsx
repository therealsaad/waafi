"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimateIn } from "@/components/animate-in"

export function AboutSnapshot() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <AnimateIn direction="left">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-waafi-teal">
                About Our Firm
              </span>
              <h2 className="mt-3 text-3xl font-serif font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                A Trusted Partner for
                <br />
                Design & Technology
              </h2>
            </div>
          </AnimateIn>

          <AnimateIn direction="right" delay={0.15}>
            <div className="flex flex-col gap-5">
              <p className="text-base leading-relaxed text-muted-foreground">
                Waafi Associates LLC AFZ is a professionally licensed service
                company operating from Ajman Free Zone, UAE. We support
                organizations across design, technology, and digital domains by
                delivering structured, compliant, and execution-ready solutions.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Our integrated service model allows clients to engage a single,
                accountable partner for design consultancy, software
                engineering, digital commerce enablement, and cyber security
                advisory.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-medium text-waafi-teal hover:text-waafi-teal-light transition-colors group mt-1"
              >
                Learn more about us
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
