"use client"

import { Handshake, Cog, Scale, TrendingUp } from "lucide-react"
import { StaggerContainer, StaggerItem } from "@/components/animate-in"

const pillars = [
  {
    icon: Handshake,
    title: "Trusted Consulting Partner",
    description: "Built on long-term client relationships and professional integrity.",
  },
  {
    icon: Cog,
    title: "Engineering-led Delivery",
    description: "Structured, documented, and technically rigorous execution.",
  },
  {
    icon: Scale,
    title: "Compliance-aware Approach",
    description: "Risk-aware processes aligned with regulatory expectations.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Designed for growth, from startups to enterprise organizations.",
  },
]

export function ValuePillars() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-waafi-navy text-primary-foreground">
                  <pillar.icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground max-w-[220px]">
                  {pillar.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
