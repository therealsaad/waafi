"use client"

import { AnimateIn } from "@/components/animate-in"

export function PageHeader({ label, title, description }) {
  return (
    <section className="relative bg-waafi-navy pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(56,189,248,0.1),transparent)]" />
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M30 0v60M0 30h60' stroke='%23fff' stroke-width='0.5'/%3E%3C/svg%3E")`,
        backgroundSize: "60px 60px",
      }} />
      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <AnimateIn delay={0.1}>
          <span className="text-xs font-semibold uppercase tracking-widest text-waafi-teal">
            {label}
          </span>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <h1 className="mt-4 text-4xl font-serif font-bold tracking-tight text-primary-foreground sm:text-5xl text-balance">
            {title}
          </h1>
        </AnimateIn>
        {description && (
          <AnimateIn delay={0.3}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/65 text-pretty">
              {description}
            </p>
          </AnimateIn>
        )}
      </div>
    </section>
  )
}
