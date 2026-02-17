"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimateIn } from "@/components/animate-in"

export function CTASection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateIn>
          <div className="relative rounded-2xl bg-waafi-navy overflow-hidden p-12 md:p-16 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_120%,rgba(56,189,248,0.15),transparent)]" />
            <div className="relative">
              <h2 className="text-3xl font-serif font-bold text-primary-foreground sm:text-4xl text-balance">
                Ready to Start Your Next Project?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/70 text-pretty">
                Whether you need design consultancy, software engineering, or
                cyber security advisory, our team is ready to support your
                business objectives.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-waafi-teal text-accent-foreground hover:bg-waafi-teal-light cursor-pointer gap-2 px-8 h-12"
                  >
                    Get in Touch
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground cursor-pointer px-8 h-12 bg-transparent"
                  >
                    View Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
