interface FAQ {
  question: string
  answer: string
}

const FAQS: FAQ[] = [
  {
    question: "Is this a sales call?",
    answer:
      "No. Our first conversation is a discovery call focused on understanding your goals, not a sales pitch.",
  },
  {
    question: "What should I prepare before the call?",
    answer:
      "Nothing formal. It helps to have a general sense of the business problem or opportunity you're exploring.",
  },
  {
    question: "How quickly will I hear back?",
    answer: "We review every submission within one business day.",
  },
  {
    question: "Do you work with companies outside your listed industries?",
    answer:
      "Yes. Our industry list reflects where we have the deepest experience, not a limit on who we work with.",
  },
  {
    question: "Can I request a specific practitioner?",
    answer:
      "If you've spoken with someone at ORXIO before, mention it in your message and we'll route your request accordingly.",
  },
]

export { FAQS }
export type { FAQ }
