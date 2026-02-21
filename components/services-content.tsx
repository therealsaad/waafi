"use client"

import Link from "next/link"
<<<<<<< HEAD
import Image from "next/image"
=======
>>>>>>> 1fea388391f353f877825ecab5b5886437e5d20a
import {
  Ruler,
  Code2,
  ShoppingCart,
  ShieldCheck,
  Monitor,
  ArrowRight,
  Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/animate-in"

const services = [
  {
    id: "interior-design",
<<<<<<< HEAD
    image: "/images/service-interior-design.jpg",
=======
>>>>>>> 1fea388391f353f877825ecab5b5886437e5d20a
    icon: Ruler,
    title: "Interior Design Engineering Consultancy",
    description:
      "We provide professional interior design consultancy supported by engineering and technical expertise. Our team delivers comprehensive solutions from concept to completion.",
    features: [
      "Interior space planning and design strategy",
      "Concept development and layout optimization",
      "Materials, finishes, lighting, and detailing coordination",
      "Preparation of technical drawings and specifications",
      "Design review and value engineering support",
      "Coordination with contractors and consultants",
    ],
  },
  {
    id: "software-development",
    icon: Code2,
<<<<<<< HEAD
    image: "/images/service-software-dev.jpg",
=======
>>>>>>> 1fea388391f353f877825ecab5b5886437e5d20a
    title: "Software Development & Engineering",
    description:
      "We design and deliver reliable software solutions aligned with business requirements, from custom applications to enterprise-grade systems.",
    features: [
      "Custom web and application development",
      "System architecture and solution design",
      "Backend, frontend, and API development",
      "System integration and performance optimization",
      "Maintenance, upgrades, and lifecycle support",
      "Scalable solutions for growth-stage businesses",
    ],
  },
  {
    id: "e-commerce",
    icon: ShoppingCart,
<<<<<<< HEAD
    image: "/images/service-ecommerce.jpg",
=======
>>>>>>> 1fea388391f353f877825ecab5b5886437e5d20a
    title: "E-commerce & Digital Commerce Solutions",
    description:
      "We enable businesses to establish and scale secure digital commerce platforms, from storefront design to payment gateway integration.",
    features: [
      "E-commerce platform design and development",
      "Online store setup and configuration",
      "Payment gateway and logistics integration",
      "Product catalog, inventory, and workflow structuring",
      "Performance optimization and scalability planning",
      "Technical support and platform enhancement",
    ],
  },
  {
    id: "cyber-security",
    icon: ShieldCheck,
<<<<<<< HEAD
    image: "/images/service-cyber-security.jpg",
=======
>>>>>>> 1fea388391f353f877825ecab5b5886437e5d20a
    title: "Cyber Security & Digital Risk Advisory",
    description:
      "We provide cyber security advisory services to strengthen digital resilience and protect organizations against evolving threats.",
    features: [
      "Cyber risk assessment and advisory",
      "Vulnerability identification and mitigation guidance",
      "Security architecture and best-practice consulting",
      "Data protection and access control advisory",
      "Compliance-oriented security recommendations",
      "Ongoing advisory and monitoring support",
    ],
  },
  {
    id: "it-consulting",
    icon: Monitor,
<<<<<<< HEAD
    image: "/images/service-it-consulting.jpg",
=======
>>>>>>> 1fea388391f353f877825ecab5b5886437e5d20a
    title: "IT & Digital Consulting",
    description:
      "Strategic advisory services supporting digital transformation initiatives and technology modernization across your organization.",
    features: [
      "IT strategy and technology roadmap advisory",
      "Digital transformation planning",
      "Technology feasibility and vendor evaluation",
      "Process optimization through digital solutions",
      "Documentation and implementation oversight",
    ],
  },
]

export function ServicesContent() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-36 pb-20 bg-waafi-navy overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(56,189,248,0.1),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <AnimateIn>
            <span className="text-xs font-semibold uppercase tracking-widest text-waafi-teal">
              Our Expertise
            </span>
            <h1 className="mt-3 text-4xl font-serif font-bold tracking-tight text-primary-foreground sm:text-5xl text-balance">
              Services We Deliver
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/65 sm:text-lg">
              Integrated consulting and technology services covering design,
              software, digital commerce, cyber security, and strategic IT
              advisory.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 flex flex-col gap-20">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className="scroll-mt-24">
              <div
                className={`grid gap-10 lg:grid-cols-2 lg:items-start ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <AnimateIn
                  direction={index % 2 === 0 ? "left" : "right"}
                  className={index % 2 === 1 ? "lg:order-2" : ""}
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-waafi-teal/10 text-waafi-teal">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {"0" + (index + 1)}
                    </span>
                  </div>
                  <h2 className="text-2xl font-serif font-bold tracking-tight text-foreground sm:text-3xl text-balance">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <Link href="/contact" className="inline-block mt-6">
                    <Button
                      variant="outline"
                      className="gap-2 border-waafi-teal/30 text-waafi-teal hover:bg-waafi-teal/10 hover:text-waafi-teal cursor-pointer"
                    >
                      Discuss This Service
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </AnimateIn>

                <AnimateIn
                  direction={index % 2 === 0 ? "right" : "left"}
                  delay={0.15}
                  className={index % 2 === 1 ? "lg:order-1" : ""}
                >
<<<<<<< HEAD
                  <div className="mb-6">
                    <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
=======
>>>>>>> 1fea388391f353f877825ecab5b5886437e5d20a
                  <StaggerContainer className="glass-card rounded-xl p-7">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-5">
                      Key Capabilities
                    </h3>
                    <div className="flex flex-col gap-3">
                      {service.features.map((feature) => (
                        <StaggerItem key={feature}>
                          <div className="flex items-start gap-3">
                            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-waafi-teal/10 text-waafi-teal shrink-0 mt-0.5">
                              <Check className="h-3 w-3" />
                            </div>
                            <span className="text-sm leading-relaxed text-muted-foreground">
                              {feature}
                            </span>
                          </div>
                        </StaggerItem>
                      ))}
                    </div>
                  </StaggerContainer>
                </AnimateIn>
              </div>

              {index < services.length - 1 && (
                <div className="mt-20 border-t border-border" />
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
