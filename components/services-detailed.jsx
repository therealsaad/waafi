"use client"

import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/animate-in"
import {
  Ruler,
  Code2,
  ShoppingCart,
  ShieldCheck,
  Monitor,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: "interior-design",
    icon: Ruler,
    title: "Interior Design Engineering Consultancy",
    tagline: "Where Aesthetics Meet Engineering Precision",
    description:
      "We provide professional interior design services rooted in engineering and technical discipline. Our consultancy covers concept development, spatial planning, material specification, and project coordination for commercial and residential environments.",
    deliverables: [
      "Space Planning & Layout Optimization",
      "Concept Design & Visualization",
      "Material & Finish Specification",
      "Technical Drawing Packages (AutoCAD, Revit)",
      "MEP Coordination Support",
      "Project Supervision & Handover",
      "Furniture Procurement Advisory",
      "Compliance with Local Building Codes",
    ],
    sectors: "Commercial Offices, Retail, Hospitality, Residential, Healthcare Facilities",
  },
  {
    id: "software-development",
    icon: Code2,
    title: "Software Development Services",
    tagline: "Custom Solutions Engineered for Your Business",
    description:
      "We design and build reliable software applications tailored to business operations and growth objectives. Our engineering approach ensures scalable, maintainable, and well-documented solutions that integrate with your existing systems.",
    deliverables: [
      "Custom Web Application Development",
      "Mobile Application Development (iOS & Android)",
      "API Design & System Integration",
      "Database Architecture & Optimization",
      "Cloud Infrastructure Setup (AWS, Azure, GCP)",
      "UI/UX Design & Prototyping",
      "Quality Assurance & Testing",
      "Ongoing Maintenance & Support",
    ],
    sectors: "Enterprises, SMEs, Startups, Government Entities, Financial Institutions",
  },
  {
    id: "e-commerce",
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    tagline: "Digital Commerce That Drives Revenue",
    description:
      "We build secure, scalable digital commerce platforms with integrated payment processing, inventory management, and logistics support. Our solutions are designed for the regional and global markets, with full compliance and localization capabilities.",
    deliverables: [
      "E-commerce Platform Development (Shopify, WooCommerce, Custom)",
      "Payment Gateway Integration (Regional & Global)",
      "Inventory & Order Management Systems",
      "Logistics & Shipping Integration",
      "Multi-language & Multi-currency Support",
      "SEO & Performance Optimization",
      "Analytics & Conversion Tracking",
      "Marketplace Integration (Amazon, Noon)",
    ],
    sectors: "Retail, D2C Brands, Wholesale, Marketplace Operators, Cross-border Trade",
  },
  {
    id: "cyber-security",
    icon: ShieldCheck,
    title: "Cyber Security Advisory Services",
    tagline: "Protecting Your Digital Assets & Reputation",
    description:
      "Our cyber security advisory covers risk assessment, policy development, compliance planning, and security testing. We help organizations strengthen their digital defenses in alignment with international frameworks and regional regulations.",
    deliverables: [
      "Cyber Risk Assessment & Gap Analysis",
      "Security Policy & Governance Framework",
      "Vulnerability Assessment & Penetration Testing",
      "Incident Response Planning",
      "Compliance Advisory (ISO 27001, NESA, GDPR)",
      "Security Awareness Training",
      "Data Protection & Privacy Advisory",
      "Third-Party Risk Management",
    ],
    sectors: "Banking & Finance, Healthcare, Government, Telecom, Critical Infrastructure",
  },
  {
    id: "it-consulting",
    icon: Monitor,
    title: "IT & Digital Consulting",
    tagline: "Strategic Technology Advisory for Growth",
    description:
      "We provide strategic IT advisory services that help organizations navigate digital transformation, optimize technology investments, and build sustainable technology roadmaps aligned with business strategy.",
    deliverables: [
      "Digital Transformation Strategy",
      "Technology Roadmap Development",
      "IT Infrastructure Assessment",
      "Cloud Migration Planning",
      "Vendor Selection & Management",
      "Technology Audit & Due Diligence",
      "Business Process Optimization",
      "Change Management Advisory",
    ],
    sectors: "Enterprises, Family Offices, Startups, Public Sector, Education",
  },
]

export function ServicesDetailed() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-20">
          {services.map((service, idx) => {
            const Icon = service.icon
            const isReversed = idx % 2 !== 0
            return (
              <div key={service.id} id={service.id} className="scroll-mt-28">
                <AnimateIn>
                  <div className={`grid gap-12 lg:grid-cols-2 lg:items-start ${isReversed ? "lg:direction-rtl" : ""}`}>
                    <div className={isReversed ? "lg:order-2" : ""}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-waafi-teal/10 text-waafi-teal">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-widest text-waafi-teal">
                          {service.tagline}
                        </span>
                      </div>
                      <h2 className="text-2xl font-serif font-bold tracking-tight text-foreground sm:text-3xl text-balance">
                        {service.title}
                      </h2>
                      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                      <div className="mt-4 flex items-start gap-2">
                        <span className="text-sm font-medium text-foreground shrink-0">Sectors:</span>
                        <span className="text-sm text-muted-foreground">
                          {service.sectors}
                        </span>
                      </div>
                      <Link href="/contact" className="inline-block mt-6">
                        <Button className="bg-waafi-teal text-accent-foreground hover:bg-waafi-teal-light cursor-pointer gap-2">
                          Discuss This Service
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>

                    <div className={isReversed ? "lg:order-1" : ""}>
                      <div className="glass-card rounded-xl p-7">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-5">
                          Key Deliverables
                        </h3>
                        <div className="flex flex-col gap-3">
                          {service.deliverables.map((item) => (
                            <div
                              key={item}
                              className="flex items-start gap-3"
                            >
                              <CheckCircle2 className="h-4 w-4 text-waafi-teal mt-1 shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateIn>

                {idx < services.length - 1 && (
                  <div className="mt-20 border-t border-border" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
