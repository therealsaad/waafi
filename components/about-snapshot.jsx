"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimateIn } from "@/components/animate-in"

export function AboutSnapshot() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <AnimateIn direction="left">
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
              <Image
                src="/images/about-team.jpg"
                alt="Waafi Associates professional team in a strategic meeting"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-waafi-navy/10" />
            </div>
          </AnimateIn>

          <AnimateIn direction="right" delay={0.15}>
            <div className="flex flex-col gap-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-waafi-teal">
                About Our Firm
              </span>
              <h2 className="text-3xl font-serif font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                A Trusted Partner for
                <br />
                Design & Technology
              </h2>
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
