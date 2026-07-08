interface FAQ {
  question: string
  answer: string
}

const FAQS: FAQ[] = [
  {
    question: "How do we get started with ORXIO?",
    answer:
      "Every engagement begins with a Strategy Sprint to align on objectives, identify high-value AI opportunities, and define a clear roadmap before any development begins.",
  },
  {
    question:
      "Do you work with teams that have no existing AI infrastructure?",
    answer:
      "Yes. We regularly help organizations build their first production AI systems, including the underlying data and cloud foundations required to support them.",
  },
  {
    question: "How long does a typical engagement take?",
    answer:
      "Timelines vary by scope, but most engagements move from strategy to a production-ready deployment within one to two quarters.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We support organizations across manufacturing, financial services, healthcare, retail and commerce, logistics and supply chain, and enterprise operations.",
  },
  {
    question: "How do you approach security and governance?",
    answer:
      "Security, compliance, and governance considerations are embedded from the first discovery conversation, not added after deployment.",
  },
  {
    question: "Can you support us after deployment?",
    answer:
      "Yes. Our Managed AI Partnership model provides ongoing monitoring, optimization, and scaling support after go-live.",
  },
]

export { FAQS }
export type { FAQ }
