"use client"

import Link from "next/link"
import {
  Ruler,
  Code2,
  ShoppingCart,
  ShieldCheck,
  Monitor,
  ArrowRight,
} from "lucide-react"
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/animate-in"

const services = [
  {
    icon: Ruler,
    title: "Interior Design Engineering",
    description:
      "Professional interior design consultancy supported by engineering and technical expertise for commercial and residential spaces.",
    slug: "interior-design",
  },
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Reliable software solutions aligned with business requirements and scalable for growth, from web apps to enterprise systems.",
    slug: "software-development",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description:
      "Secure digital commerce platforms with payment gateway and logistics integration for regional and global markets.",
    slug: "e-commerce",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security Advisory",
    description:
      "Comprehensive cyber security advisory services to strengthen your organization's digital resilience and regulatory compliance.",
    slug: "cyber-security",
  },
  {
    icon: Monitor,
    title: "IT & Digital Consulting",
    description:
      "Strategic advisory services supporting digital transformation, technology roadmaps, and infrastructure modernization.",
    slug: "it-consulting",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-24 bg-waafi-slate">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateIn className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-waafi-teal">
            What We Do
          </span>
          <h2 className="mt-3 text-3xl font-serif font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Our Service Portfolio
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Integrated consulting and technology services designed for
            enterprises, SMEs, and growth-stage businesses.
          </p>
        </AnimateIn>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <StaggerItem key={service.slug}>
                <Link href={`/services#${service.slug}`} className="group block h-full">
                  <div className="glass-card h-full rounded-xl p-7 transition-all hover:shadow-xl hover:-translate-y-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-waafi-teal/10 text-waafi-teal mb-5 transition-colors group-hover:bg-waafi-teal group-hover:text-accent-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-waafi-teal opacity-0 transition-opacity group-hover:opacity-100">
                      Learn more
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
