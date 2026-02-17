"use client"

import { Target, Eye, BookOpen, Users } from "lucide-react"
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/animate-in"

const philosophy = [
  {
    icon: Users,
    title: "Client-driven Engagement",
    description: "Client objectives drive all engagements, ensuring alignment with your business goals at every stage.",
  },
  {
    icon: BookOpen,
    title: "Structured Documentation",
    description: "Complete transparency through structured documentation and clear communication throughout delivery.",
  },
  {
    icon: Target,
    title: "Risk-aware Execution",
    description: "Compliance-focused and risk-aware execution methodology that protects your investment.",
  },
  {
    icon: Eye,
    title: "Long-term Partnerships",
    description: "We prioritize lasting partnerships over transactional delivery, building trust through consistent results.",
  },
]

export function AboutContent() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-36 pb-20 bg-waafi-navy overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(56,189,248,0.1),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <AnimateIn>
            <span className="text-xs font-semibold uppercase tracking-widest text-waafi-teal">
              Our Firm
            </span>
            <h1 className="mt-3 text-4xl font-serif font-bold tracking-tight text-primary-foreground sm:text-5xl text-balance">
              About Waafi Associates
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/65 sm:text-lg">
              A multi-service consulting and technology firm established under
              Ajman Free Zone Authority, delivering professional services across
              the UAE and wider Middle East.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Corporate Profile */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <AnimateIn direction="left">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-waafi-teal">
                  Corporate Profile
                </span>
                <h2 className="mt-3 text-3xl font-serif font-bold tracking-tight text-foreground text-balance">
                  Engineering Discipline Meets Technology Innovation
                </h2>
                <div className="mt-6 flex flex-col gap-5 text-muted-foreground leading-relaxed">
                  <p>
                    Waafi Associates LLC AFZ is a multi-service consulting and
                    technology firm established under Ajman Free Zone Authority.
                    The firm delivers professional services across interior
                    design engineering, software development, e-commerce
                    platforms, and cyber security advisory.
                  </p>
                  <p>
                    We partner with startups, SMEs, and established
                    organizations, providing solutions that are technically
                    sound, commercially practical, and aligned with regulatory
                    and operational expectations.
                  </p>
                </div>
              </div>
            </AnimateIn>

            <div className="flex flex-col gap-8">
              <AnimateIn direction="right" delay={0.1}>
                <div className="glass-card rounded-xl p-7">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-waafi-teal/10 text-waafi-teal">
                      <Target className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Mission
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    To deliver high-quality professional services that combine
                    engineering discipline, technology innovation, and long-term
                    client trust.
                  </p>
                </div>
              </AnimateIn>

              <AnimateIn direction="right" delay={0.2}>
                <div className="glass-card rounded-xl p-7">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-waafi-teal/10 text-waafi-teal">
                      <Eye className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Vision
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    To be recognized as a trusted consulting and technology
                    partner in the UAE and the wider Middle East, known for
                    clarity, competence, and consistent delivery.
                  </p>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Philosophy */}
      <section className="py-24 bg-waafi-slate">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-waafi-teal">
              How We Operate
            </span>
            <h2 className="mt-3 text-3xl font-serif font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Operating Philosophy
            </h2>
          </AnimateIn>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {philosophy.map((item) => (
              <StaggerItem key={item.title}>
                <div className="glass-card rounded-xl p-7 h-full text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-waafi-navy text-primary-foreground mx-auto mb-5">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}
