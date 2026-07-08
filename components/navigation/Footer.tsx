import { ArrowRight, Clock, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Container } from "@/components/layout/Container"
import { Heading } from "@/components/typography/Heading"
import { Text } from "@/components/typography/Text"

// Placeholders — set the NEXT_PUBLIC_* env vars before production launch.
const LINKEDIN_URL =
  process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://linkedin.com/company/orxio"
const GITHUB_URL =
  process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/orxio"
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
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
]

const LEGAL_LINKS: FooterLink[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
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

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3.01-.4c1.02 0 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.29 0 .32.22.7.83.58C20.56 21.79 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
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
              From Strategic Consulting to Production-Grade AI.
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
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ORXIO on GitHub"
                  className="flex size-9 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-foreground/25 hover:text-foreground"
                >
                  <GitHubIcon className="size-4" />
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
