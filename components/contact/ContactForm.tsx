"use client"

import { Send } from "lucide-react"
import { useState, type FormEvent, type ReactNode } from "react"

import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { Heading } from "@/components/typography/Heading"
import { Text } from "@/components/typography/Text"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const ENGAGEMENT_TYPES = [
  "Strategy Sprint",
  "Project Delivery",
  "Managed AI Partnership",
  "Not sure yet",
]

const fieldClassName =
  "w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"

interface FormFieldProps {
  id: string
  label: string
  children: ReactNode
}

function FormField({ id, label, children }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
    </div>
  )
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // No backend endpoint yet — wire this up to the real submission API
    // once it exists. Fields/names below are stable for that integration.
    setSubmitted(true)
  }

  return (
    <Section id="contact-form" size="lg">
      <Container size="md">
        <div className="flex flex-col items-start gap-4">
          <Heading as="h2" size="lg">
            Tell Us About Your Project
          </Heading>
          <Text size="lg" className="max-w-prose text-muted-foreground">
            Share a few details and a senior practitioner will follow up to
            schedule a discovery conversation.
          </Text>
        </div>

        {submitted ? (
          <div
            role="status"
            className="mt-12 rounded-xl border border-border bg-muted/40 p-8 text-center"
          >
            <Heading as="h3" size="sm">
              Thank you
            </Heading>
            <Text size="sm" className="mt-2 text-muted-foreground">
              We&apos;ve received your details. A member of our team will be
              in touch shortly.
            </Text>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <FormField id="name" label="Full name">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className={fieldClassName}
                />
              </FormField>

              <FormField id="email" label="Work email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={fieldClassName}
                />
              </FormField>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <FormField id="company" label="Company">
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  required
                  className={fieldClassName}
                />
              </FormField>

              <FormField id="engagement-type" label="Engagement type">
                <select
                  id="engagement-type"
                  name="engagementType"
                  required
                  defaultValue=""
                  className={fieldClassName}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {ENGAGEMENT_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </FormField>
            </div>

            <FormField id="message" label="Project details">
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell us about your goals, timeline, and current AI maturity."
                className={cn(fieldClassName, "resize-none")}
              />
            </FormField>

            <div>
              <Button type="submit">
                Request a Strategy Call
                <Send aria-hidden="true" data-icon="inline-end" />
              </Button>
            </div>
          </form>
        )}
      </Container>
    </Section>
  )
}

export { ContactForm }
