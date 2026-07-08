"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import { Container } from "@/components/layout/Container"
import { MobileMenu } from "@/components/navigation/MobileMenu"
import { ThemeToggle } from "@/components/navigation/ThemeToggle"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

const CTA_LABEL = "Book a Strategy Call"
const CTA_HREF = "/contact"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <header
        className={cn(
          "sticky top-0 z-40 w-full border-b border-transparent transition-all duration-300 ease-out",
          scrolled &&
            "border-border bg-background/75 shadow-sm backdrop-blur-lg"
        )}
      >
        <Container size="xl">
          <nav
            aria-label="Primary"
            className="flex h-16 items-center justify-between gap-4"
          >
            <Link href="/" className="shrink-0">
              <Image
                src="/brand/logo-primary.png"
                alt="ORXIO"
                width={40}
                height={40}
                priority
                className="size-10 rounded-lg"
              />
            </Link>

            <ul className="hidden items-center gap-10 lg:flex">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group relative text-sm font-medium text-muted-foreground opacity-90 transition-all duration-300 ease-out hover:text-foreground hover:opacity-100"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-foreground transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button
                render={<Link href={CTA_HREF} />}
                nativeButton={false}
                className="hidden px-5 py-2 shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md lg:inline-flex"
              >
                {CTA_LABEL}
              </Button>
              <MobileMenu
                navItems={NAV_ITEMS}
                ctaLabel={CTA_LABEL}
                ctaHref={CTA_HREF}
              />
            </div>
          </nav>
        </Container>
      </header>
    </>
  )
}

export { Navbar }
