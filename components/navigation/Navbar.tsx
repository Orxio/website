"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

import { Container } from "@/components/layout/Container"
import { MobileMenu } from "@/components/navigation/MobileMenu"
import { ThemeToggle } from "@/components/navigation/ThemeToggle"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

function isNavItemActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`)
}

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
  const pathname = usePathname()

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
          "sticky top-0 z-40 w-full border-b border-transparent transition-all duration-500 ease-out",
          scrolled &&
            "border-border bg-background/75 shadow-sm backdrop-blur-lg"
        )}
      >
        <Container size="xl">
          <nav
            aria-label="Primary"
            className="flex h-16 items-center justify-between gap-6"
          >
            <Link
              href="/"
              className="shrink-0 transition-opacity duration-300 ease-out hover:opacity-80"
            >
              <Image
                src="/brand/logo-primary.png"
                alt="ORXIO"
                width={40}
                height={40}
                priority
                className="size-9 rounded-lg lg:size-10"
              />
            </Link>

            <ul className="hidden items-center gap-9 lg:flex">
              {NAV_ITEMS.map((item) => {
                const active = isNavItemActive(pathname, item.href)
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "group relative inline-block py-1 text-sm font-medium transition-all duration-300 ease-out hover:-translate-y-px",
                        active
                          ? "text-foreground"
                          : "text-muted-foreground opacity-90 hover:text-foreground hover:opacity-100"
                      )}
                    >
                      {item.label}
                      <span
                        className={cn(
                          "absolute -bottom-1 left-0 h-px w-full origin-left bg-foreground transition-transform duration-300 ease-out",
                          active
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        )}
                      />
                    </Link>
                  </li>
                )
              })}
            </ul>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button
                render={<Link href={CTA_HREF} />}
                nativeButton={false}
                className="hidden px-5 py-2 shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg lg:inline-flex"
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
