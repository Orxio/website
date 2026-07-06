"use server"

import { Resend } from "resend"

import { renderInternalNotificationEmail } from "@/lib/email/internal-notification"
import { renderProspectAcknowledgementEmail } from "@/lib/email/prospect-acknowledgement"
import type { ContactSubmission } from "@/lib/email/types"

// Server-only routing/config — distinct from the client-visible
// NEXT_PUBLIC_CONTACT_EMAIL used for the Footer's mailto link.
const CONTACT_INBOX_EMAIL = process.env.CONTACT_INBOX_EMAIL ?? "hello@orxio.ai"
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ?? "ORXIO <notifications@orxio.ai>"

const ENGAGEMENT_TYPES = new Set([
  "Strategy Sprint",
  "Project Delivery",
  "Managed AI Partnership",
  "Not sure yet",
])

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

interface ContactFormState {
  status: "idle" | "success" | "error"
  message?: string
  values?: ContactSubmission
}

function validate(submission: ContactSubmission): string | null {
  if (!submission.name) return "Please enter your name."
  if (!submission.email || !EMAIL_PATTERN.test(submission.email)) {
    return "Please enter a valid work email."
  }
  if (!submission.company) return "Please enter your company."
  if (!ENGAGEMENT_TYPES.has(submission.engagementType)) {
    return "Please select an engagement type."
  }
  if (!submission.message) return "Please share a few project details."
  return null
}

async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const submission: ContactSubmission = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    company: String(formData.get("company") ?? "").trim(),
    engagementType: String(formData.get("engagementType") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  }

  const validationError = validate(submission)
  if (validationError) {
    return { status: "error", message: validationError, values: submission }
  }

  if (!process.env.RESEND_API_KEY) {
    console.error(
      "RESEND_API_KEY is not configured; contact form email was not sent."
    )
    return {
      status: "error",
      message:
        "We couldn't submit your request right now. Please email us directly instead.",
      values: submission,
    }
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const internalEmail = renderInternalNotificationEmail(submission)
  const prospectEmail = renderProspectAcknowledgementEmail(submission)

  try {
    const [internalResult, prospectResult] = await Promise.all([
      resend.emails.send({
        from: FROM_EMAIL,
        to: CONTACT_INBOX_EMAIL,
        replyTo: submission.email,
        subject: internalEmail.subject,
        html: internalEmail.html,
        text: internalEmail.text,
      }),
      resend.emails.send({
        from: FROM_EMAIL,
        to: submission.email,
        subject: prospectEmail.subject,
        html: prospectEmail.html,
        text: prospectEmail.text,
      }),
    ])

    if (internalResult.error || prospectResult.error) {
      console.error(
        "Resend returned an error sending contact form emails",
        internalResult.error ?? prospectResult.error
      )
      return {
        status: "error",
        message:
          "Something went wrong while sending your request. Please try again or email us directly.",
        values: submission,
      }
    }

    return { status: "success" }
  } catch (error) {
    console.error("Failed to send contact form emails", error)
    return {
      status: "error",
      message:
        "Something went wrong while sending your request. Please try again or email us directly.",
      values: submission,
    }
  }
}

export { submitContactForm }
