"use client"

import { Send } from "lucide-react"
import { useActionState, useEffect, useRef, useState, type ReactNode } from "react"
import { useFormStatus } from "react-dom"

import { submitContactForm } from "@/app/actions/contact"
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

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Sending..." : "Request a Strategy Call"}
      <Send aria-hidden="true" data-icon="inline-end" />
    </Button>
  )
}

function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, {
    status: "idle",
  })
  const formRef = useRef<HTMLFormElement>(null)
  const selectRef = useRef<HTMLSelectElement>(null)
  // Controlled because native form-reset (triggered after every action
  // dispatch, including errors) restores a <select> to its first option.
  // React re-applies `value` on the next render, but the reset itself is a
  // raw DOM mutation that lands after that render commits, so we also
  // resync the DOM node imperatively once the action settles.
  const [engagementType, setEngagementType] = useState("")

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset()
      return
    }
    if (selectRef.current) {
      selectRef.current.value = engagementType
    }
  }, [state, engagementType])

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

        {state.status === "success" ? (
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
          <form
            ref={formRef}
            action={formAction}
            className="mt-12 flex flex-col gap-6"
          >
            {state.status === "error" && state.message && (
              <div
                role="alert"
                className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
              >
                {state.message}
              </div>
            )}

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <FormField id="name" label="Full name">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  defaultValue={state.values?.name}
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
                  defaultValue={state.values?.email}
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
                  defaultValue={state.values?.company}
                  className={fieldClassName}
                />
              </FormField>

              <FormField id="engagement-type" label="Engagement type">
                <select
                  ref={selectRef}
                  id="engagement-type"
                  name="engagementType"
                  required
                  value={engagementType}
                  onChange={(event) => setEngagementType(event.target.value)}
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
                defaultValue={state.values?.message}
                placeholder="Tell us about your goals, timeline, and current AI maturity."
                className={cn(fieldClassName, "resize-none")}
              />
            </FormField>

            {/* Honeypot: invisible to real users, excluded from the tab order
                and from assistive tech. Left blank by humans; bots that
                auto-fill every field trip it. Zero-size + overflow-hidden
                (rather than absolute positioning) so it never depends on
                an ancestor's positioning context. */}
            <div aria-hidden="true" className="h-0 w-0 overflow-hidden opacity-0">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div>
              <SubmitButton />
            </div>
          </form>
        )}
      </Container>
    </Section>
  )
}

export { ContactForm }
