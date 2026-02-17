import Link from "next/link"
import { MapPin, Mail, ArrowUpRight } from "lucide-react"

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
]

const services = [
  "Interior Design Engineering",
  "Software Development",
  "E-commerce Solutions",
  "Cyber Security Advisory",
  "IT & Digital Consulting",
]

export function SiteFooter() {
  return (
    <footer className="bg-waafi-navy text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-waafi-teal text-accent-foreground font-serif font-bold text-lg">
                W
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold tracking-tight leading-tight text-primary-foreground">
                  Waafi Associates
                </span>
                <span className="text-[10px] tracking-widest uppercase text-primary-foreground/60">
                  LLC AFZ
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/70 max-w-xs">
              Professional Consulting & Technology Services. Delivering design,
              technology, and digital assurance solutions from the UAE.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-5 text-primary-foreground/90">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-waafi-teal transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0 transition-all group-hover:opacity-100 group-hover:translate-y-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-5 text-primary-foreground/90">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-primary-foreground/60">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-5 text-primary-foreground/90">
              Registered Office
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-waafi-teal mt-1 shrink-0" />
                <p className="text-sm leading-relaxed text-primary-foreground/60">
                  Office No.: CWS-2V-322433
                  <br />
                  26th Floor, Amber Gem Tower
                  <br />
                  Business District, Sheikh Khalifa Street
                  <br />
                  Ajman, United Arab Emirates
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-waafi-teal shrink-0" />
                <Link
                  href="/contact"
                  className="text-sm text-primary-foreground/60 hover:text-waafi-teal transition-colors"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-primary-foreground/10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-primary-foreground/40">
            {"\u00A9"} {new Date().getFullYear()} Waafi Associates LLC AFZ. All
            Rights Reserved.
          </p>
          <p className="text-xs text-primary-foreground/40">
            Professional Consulting & Technology Services
          </p>
        </div>
      </div>
    </footer>
  )
}
