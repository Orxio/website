import { escapeHtml } from "@/lib/email/escape-html"
import { renderEmailLayout } from "@/lib/email/layout"
import type { ContactSubmission, EmailContent } from "@/lib/email/types"

const FIELD_ROWS: Array<[label: string, key: keyof ContactSubmission]> = [
  ["Name", "name"],
  ["Email", "email"],
  ["Company", "company"],
  ["Engagement type", "engagementType"],
]

/** Notifies the internal inbox of a new contact form submission. */
function renderInternalNotificationEmail(
  submission: ContactSubmission
): EmailContent {
  const { name, email, company, engagementType, message } = submission

  const text = [
    "New contact form submission",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company}`,
    `Engagement type: ${engagementType}`,
    "",
    "Project details:",
    message,
  ].join("\n")

  const rows = FIELD_ROWS.map(
    ([label, key]) => `
      <tr>
        <td style="padding: 8px 0; color: #737373; width: 160px; vertical-align: top;">${label}</td>
        <td style="padding: 8px 0;">${escapeHtml(submission[key])}</td>
      </tr>
    `
  ).join("")

  const html = renderEmailLayout(`
    <h1 style="font-size: 18px; margin-bottom: 24px;">New contact form submission</h1>
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
      <tbody>${rows}</tbody>
    </table>
    <p style="color: #737373; margin-bottom: 8px;">Project details</p>
    <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
  `)

  return {
    subject: `New inquiry from ${name} (${company})`,
    html,
    text,
  }
}

export { renderInternalNotificationEmail }
