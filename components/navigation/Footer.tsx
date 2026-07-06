import Image from "next/image"
import Link from "next/link"

import { Container } from "@/components/layout/Container"
import { Text } from "@/components/typography/Text"

// Placeholders — set the NEXT_PUBLIC_* env vars before production launch.
const LINKEDIN_URL =
  process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://linkedin.com/company/orxio"
const GITHUB_URL =
  process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/orxio"
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@orxio.ai"

interface FooterLink {
  label: string
  href: string
  external?: boolean
}

const NAVIGATION_LINKS: FooterLink[] = [
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

const SERVICES_LINKS: FooterLink[] = [
  { label: "Enterprise AI Strategy", href: "/services/enterprise-ai-strategy" },
  { label: "AI Agents", href: "/services/ai-agents" },
  { label: "Intelligent Automation", href: "/services/intelligent-automation" },
  { label: "Data Platforms", href: "/services/data-platforms" },
  { label: "Generative AI", href: "/services/generative-ai" },
  { label: "Custom AI Applications", href: "/services/custom-ai-applications" },
]

const COMPANY_LINKS: FooterLink[] = [
  { label: "LinkedIn", href: LINKEDIN_URL, external: true },
  { label: "GitHub", href: GITHUB_URL, external: true },
  { label: "Email", href: `mailto:${CONTACT_EMAIL}` },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
]

interface FooterColumnProps {
  title: string
  links: FooterLink[]
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="flex flex-col gap-4">
      <Text
        as="span"
        size="sm"
        className="font-semibold tracking-wide text-foreground uppercase"
      >
        {title}
      </Text>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
              {link.external && <span className="sr-only"> (opens in a new tab)</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <Container size="xl">
        <div className="grid grid-cols-2 gap-10 py-16 sm:py-20 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-8">
          <div className="col-span-2 flex flex-col gap-4 lg:col-span-1">
            <Link href="/" className="w-fit">
              <Image
                src="/brand/logo-primary.png"
                alt="ORXIO"
                width={36}
                height={36}
                className="size-9 rounded-lg"
              />
            </Link>
            <Text size="sm" className="font-medium text-foreground">
              Building Intelligent Enterprises.
            </Text>
            <Text size="sm" className="max-w-xs text-muted-foreground">
              Enterprise AI Consulting and AI Products for organizations
              designing the future of work.
            </Text>
          </div>

          <FooterColumn title="Navigation" links={NAVIGATION_LINKS} />
          <FooterColumn title="Services" links={SERVICES_LINKS} />
          <FooterColumn title="Company" links={COMPANY_LINKS} />
        </div>

        <div className="flex flex-col items-center gap-2 border-t border-border py-8 sm:flex-row sm:justify-between">
          <Text size="sm" className="text-muted-foreground">
            &copy; 2026 ORXIO. All rights reserved.
          </Text>
        </div>
      </Container>
    </footer>
  )
}

export { Footer }
