interface ContactSubmission {
  name: string
  email: string
  company: string
  engagementType: string
  message: string
}

interface EmailContent {
  subject: string
  html: string
  text: string
}

export type { ContactSubmission, EmailContent }
