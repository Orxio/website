import { escapeHtml } from "@/lib/email/escape-html"
import { renderEmailLayout } from "@/lib/email/layout"
import type { ContactSubmission, EmailContent } from "@/lib/email/types"

/** Sends the prospect a confirmation that their submission was received. */
function renderProspectAcknowledgementEmail(
  submission: ContactSubmission
): EmailContent {
  const { name } = submission

  const text = [
    `Hi ${name},`,
    "",
    "Thank you for reaching out to ORXIO. We've received your details, and a senior practitioner will review your submission and follow up within one business day to schedule a discovery conversation.",
    "",
    "In the meantime, if anything changes or you'd like to add more context, just reply to this email.",
    "",
    "— The ORXIO Team",
  ].join("\n")

  const html = renderEmailLayout(`
    <p>Hi ${escapeHtml(name)},</p>
    <p>
      Thank you for reaching out to ORXIO. We've received your details, and
      a senior practitioner will review your submission and follow up
      within one business day to schedule a discovery conversation.
    </p>
    <p>
      In the meantime, if anything changes or you'd like to add more
      context, just reply to this email.
    </p>
    <p style="color: #737373;">— The ORXIO Team</p>
  `)

  return {
    subject: "We've received your message — ORXIO",
    html,
    text,
  }
}

export { renderProspectAcknowledgementEmail }
