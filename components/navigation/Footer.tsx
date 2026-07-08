import { ArrowRight, Clock, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Container } from "@/components/layout/Container"
import { Heading } from "@/components/typography/Heading"
import { Text } from "@/components/typography/Text"

const LINKEDIN_URL =
  process.env.NEXT_PUBLIC_LINKEDIN_URL ??
  "https://www.linkedin.com/company/orxio"
// Placeholder — set NEXT_PUBLIC_CONTACT_EMAIL before production launch.
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@orxio.co"

interface FooterLink {
  label: string
  href: string
}

const SERVICES_LINKS: FooterLink[] = [
  { label: "Enterprise AI Strategy", href: "/services/enterprise-ai-strategy" },
  { label: "AI Agents", href: "/services/ai-agents" },
  { label: "Automation", href: "/services/intelligent-automation" },
  { label: "Data Platforms", href: "/services/data-platforms" },
  { label: "Generative AI", href: "/services/generative-ai" },
  { label: "Custom Applications", href: "/services/custom-ai-applications" },
]

const COMPANY_LINKS: FooterLink[] = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

const LEGAL_LINKS: FooterLink[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
]

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 .02-4.12 2.06 2.06 0 0 1-.02 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  )
}

interface FooterColumnProps {
  title: string
  links: FooterLink[]
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="flex flex-col gap-5">
      <Heading
        as="h3"
        className="text-sm font-semibold tracking-wide text-foreground uppercase"
      >
        {title}
      </Heading>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground transition-colors duration-300 ease-out hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <Container size="xl">
        <div className="grid grid-cols-1 gap-12 py-20 sm:grid-cols-2 sm:py-24 lg:grid-cols-4 lg:gap-8">
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="w-fit">
              <Image
                src="/brand/logo-primary.png"
                alt="ORXIO"
                width={36}
                height={36}
                className="size-9 rounded-lg"
              />
            </Link>
            <Text size="sm" className="max-w-xs text-muted-foreground">
              From AI Strategy to Production-Grade AI.
            </Text>
            <ul className="flex items-center gap-2">
              <li>
                <Link
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ORXIO on LinkedIn"
                  className="flex size-9 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-foreground/25 hover:text-foreground"
                >
                  <LinkedInIcon className="size-4" />
                </Link>
              </li>
              <li>
                <Link
                  href={`mailto:${CONTACT_EMAIL}`}
                  aria-label="Email ORXIO"
                  className="flex size-9 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-foreground/25 hover:text-foreground"
                >
                  <Mail aria-hidden="true" className="size-4" />
                </Link>
              </li>
            </ul>
          </div>

          <FooterColumn title="Services" links={SERVICES_LINKS} />
          <FooterColumn title="Company" links={COMPANY_LINKS} />

          <div className="flex flex-col gap-5">
            <Heading
              as="h3"
              className="text-sm font-semibold tracking-wide text-foreground uppercase"
            >
              Get in Touch
            </Heading>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-sm text-muted-foreground transition-colors duration-300 ease-out hover:text-foreground"
                >
                  {CONTACT_EMAIL}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors duration-300 ease-out hover:text-primary"
                >
                  Book a Strategy Call
                  <ArrowRight
                    aria-hidden="true"
                    className="size-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1"
                  />
                </Link>
              </li>
              <li className="flex items-center gap-1.5 pt-1">
                <Clock aria-hidden="true" className="size-3.5 text-muted-foreground" />
                <Text size="sm" className="text-muted-foreground">
                  Response within 1 business day
                </Text>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 border-t border-border/60 py-8 sm:flex-row sm:justify-between">
          <Text size="sm" className="text-muted-foreground">
            &copy; 2026 ORXIO. All rights reserved.
          </Text>
          <ul className="flex items-center gap-6">
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors duration-300 ease-out hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}

export { Footer }
