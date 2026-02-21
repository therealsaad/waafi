"use client"

import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/animate-in"
import {
  Building2,
  Target,
  Eye,
  CheckCircle2,
  Shield,
  Users,
  Globe,
  Award,
} from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Integrity & Trust",
    description:
      "We deliver on commitments, maintain transparency, and build relationships based on professional trust.",
  },
  {
    icon: Target,
    title: "Technical Excellence",
    description:
      "Our work is driven by engineering-grade precision, industry standards, and best-practice frameworks.",
  },
  {
    icon: Users,
    title: "Client-Centric Focus",
    description:
      "Every engagement is structured around client objectives, timelines, and measurable outcomes.",
  },
  {
    icon: Globe,
    title: "Regional Understanding",
    description:
      "Deep understanding of UAE and GCC business environments, regulatory requirements, and market dynamics.",
  },
]

const capabilities = [
  "Interior Design & Engineering Consultancy",
  "Custom Software Development & Integration",
  "E-commerce Platform Engineering",
  "Cyber Security Advisory & Compliance",
  "IT Strategy & Digital Transformation",
  "Technology Audit & Assessment",
  "Project Management & Delivery",
  "Regulatory & Compliance Support",
]

export function AboutContent() {
  return (
    <>
      {/* Company Overview */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <AnimateIn direction="left">
              <div className="flex flex-col gap-6">
                <div className="inline-flex items-center gap-2 self-start">
                  <Building2 className="h-5 w-5 text-waafi-teal" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-waafi-teal">
                    Our Company
                  </span>
                </div>
                <h2 className="text-3xl font-serif font-bold tracking-tight text-foreground text-balance">
                  Licensed & Registered in Ajman Free Zone
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Waafi Associates LLC AFZ is a professionally licensed service
                  company established in Ajman Free Zone, United Arab Emirates.
                  We operate as a multi-disciplinary firm providing design,
                  technology, and digital assurance services to businesses of all
                  scales.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Our integrated service model enables clients to engage a
                  single, accountable partner for interior design consultancy,
                  software engineering, digital commerce, and cyber security
                  advisory, eliminating the complexity of managing multiple
                  vendors.
                </p>
                <div className="mt-2 flex flex-col gap-2">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">License:</span>
                    AFZ Commercial License
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Office:</span>
                    CWS-2V-322433, 26th Floor, Amber Gem Tower
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Location:</span>
                    Sheikh Khalifa Street, Ajman, UAE
                  </div>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn direction="right" delay={0.15}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="glass-card rounded-xl p-6 flex flex-col gap-3">
                  <Target className="h-8 w-8 text-waafi-teal" />
                  <h3 className="text-lg font-semibold text-foreground">Our Mission</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    To empower organizations through integrated consulting and
                    technology solutions that are compliant, scalable, and
                    execution-ready.
                  </p>
                </div>
                <div className="glass-card rounded-xl p-6 flex flex-col gap-3">
                  <Eye className="h-8 w-8 text-waafi-teal" />
                  <h3 className="text-lg font-semibold text-foreground">Our Vision</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    To be a trusted regional partner for design, technology, and
                    digital assurance services, recognized for engineering rigor
                    and delivery excellence.
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-waafi-slate">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-waafi-teal">
              Our Foundation
            </span>
            <h2 className="mt-3 text-3xl font-serif font-bold tracking-tight text-foreground sm:text-4xl">
              Core Values
            </h2>
          </AnimateIn>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => {
              const Icon = item.icon
              return (
                <StaggerItem key={item.title}>
                  <div className="glass-card h-full rounded-xl p-7 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-waafi-teal/10 text-waafi-teal mx-auto mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <AnimateIn direction="left">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-waafi-teal">
                  What We Bring
                </span>
                <h2 className="mt-3 text-3xl font-serif font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                  Comprehensive Capabilities
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Our team brings cross-functional expertise to every
                  engagement. From strategic advisory to technical execution, we
                  deliver end-to-end solutions across our service verticals.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn direction="right" delay={0.15}>
              <div className="grid gap-3 sm:grid-cols-2">
                {capabilities.map((cap) => (
                  <div
                    key={cap}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <CheckCircle2 className="h-5 w-5 text-waafi-teal mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground">{cap}</span>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  )
}
