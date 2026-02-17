"use client"

import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimateIn } from "@/components/animate-in"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-waafi-navy">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(56,189,248,0.12),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M30 0v60M0 30h60' stroke='%23fff' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-32 text-center">
        <AnimateIn delay={0.1}>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-2 mb-8">
            <div className="h-1.5 w-1.5 rounded-full bg-waafi-teal animate-pulse" />
            <span className="text-xs font-medium tracking-wider uppercase text-primary-foreground/70">
              UAE-based Professional Services
            </span>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <h1 className="text-4xl font-serif font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance leading-[1.1]">
            Delivering Design, Technology
            <br className="hidden sm:block" />
            <span className="text-waafi-teal">
              {" & Digital Assurance "}
            </span>
            Solutions
          </h1>
        </AnimateIn>

        <AnimateIn delay={0.35}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/65 sm:text-lg text-pretty">
            Waafi Associates LLC AFZ is a UAE-based professional services firm
            providing Interior Design Engineering Consultancy, Software
            Development, E-commerce Solutions, and Cyber Security Services —
            built on technical excellence and trusted delivery.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.5}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/services">
              <Button
                size="lg"
                className="bg-waafi-teal text-accent-foreground hover:bg-waafi-teal-light cursor-pointer gap-2 px-8 h-12 text-sm font-medium"
              >
                Explore Our Services
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground cursor-pointer gap-2 px-8 h-12 text-sm font-medium bg-transparent"
              >
                Engage With Us
              </Button>
            </Link>
          </div>
        </AnimateIn>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-primary-foreground/30" />
        </motion.div>
      </div>
    </section>
  )
}
