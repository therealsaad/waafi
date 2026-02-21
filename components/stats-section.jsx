"use client"

import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/animate-in"
import { Building2, Users, Globe, ShieldCheck } from "lucide-react"

const stats = [
  {
    icon: Building2,
    value: "Ajman Free Zone",
    label: "Licensed & Registered",
  },
  {
    icon: Users,
    value: "5+",
    label: "Service Verticals",
  },
  {
    icon: Globe,
    value: "UAE & Beyond",
    label: "Client Reach",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Compliant Delivery",
  },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-waafi-navy">
      <div className="mx-auto max-w-7xl px-6">
        <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <StaggerItem key={stat.label}>
                <div className="flex flex-col items-center text-center gap-3 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-waafi-teal/15">
                    <Icon className="h-6 w-6 text-waafi-teal" />
                  </div>
                  <span className="text-2xl font-bold text-primary-foreground">
                    {stat.value}
                  </span>
                  <span className="text-sm text-primary-foreground/60">
                    {stat.label}
                  </span>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
