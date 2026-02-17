"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-sm border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-waafi-navy text-primary-foreground font-serif font-bold text-lg transition-transform group-hover:scale-105">
            W
          </div>
          <div className="flex flex-col">
            <span
              className={cn(
                "text-lg font-semibold tracking-tight leading-tight transition-colors",
                scrolled ? "text-foreground" : "text-primary-foreground"
              )}
            >
              Waafi Associates
            </span>
            <span
              className={cn(
                "text-[10px] tracking-widest uppercase transition-colors",
                scrolled
                  ? "text-muted-foreground"
                  : "text-primary-foreground/70"
              )}
            >
              LLC AFZ
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                pathname === link.href
                  ? scrolled
                    ? "text-accent bg-accent/10"
                    : "text-primary-foreground bg-primary-foreground/15"
                  : scrolled
                    ? "text-muted-foreground hover:text-foreground hover:bg-muted"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="ml-3">
            <Button
              size="sm"
              className="bg-waafi-teal text-accent-foreground hover:bg-waafi-teal-light cursor-pointer"
            >
              Engage With Us
            </Button>
          </Link>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "md:hidden p-2 rounded-md transition-colors",
            scrolled
              ? "text-foreground hover:bg-muted"
              : "text-primary-foreground hover:bg-primary-foreground/10"
          )}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-card/98 backdrop-blur-lg border-t border-border">
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-3 text-sm font-medium rounded-md transition-colors",
                  pathname === link.href
                    ? "text-accent bg-accent/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="mt-2">
              <Button className="w-full bg-waafi-teal text-accent-foreground hover:bg-waafi-teal-light cursor-pointer">
                Engage With Us
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
