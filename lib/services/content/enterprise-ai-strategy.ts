import type { ServicePageContent } from "@/lib/services/types"

const ENTERPRISE_AI_STRATEGY: ServicePageContent = {
  slug: "enterprise-ai-strategy",

  metadata: {
    title: "Enterprise AI Strategy",
    description:
      "Enterprise AI strategy consulting: AI readiness assessment, use case prioritization, governance frameworks, and vendor-neutral roadmaps for production-ready AI.",
  },

  serviceType: "Enterprise AI Strategy",
  areaServed:
    "Enterprise organizations across regulated and technically complex industries",

  hero: {
    eyebrow: "Enterprise AI Strategy",
    headline: "A Roadmap Your Organization Can Actually Execute",
    description:
      "A governed, prioritized, and technically grounded roadmap for AI investment — validated against your data, infrastructure, and risk posture before a single engineering dollar is committed.",
    primaryCta: { label: "Book a Strategy Call", href: "/contact" },
    secondaryCta: { label: "Explore Capabilities", href: "#capabilities" },
    capabilities: [
      "Executive Workshops",
      "AI Governance",
      "Enterprise Roadmaps",
      "Solution Architecture",
    ],
  },

  businessChallenges: {
    heading: "The Challenges We Solve",
    description:
      "Organizations rarely fail at AI because the technology doesn't work. They fail for reasons a structured strategy engagement is designed to prevent.",
    columns: 2,
    items: [
      {
        icon: "ListFilter",
        title: "Too Many Competing Ideas",
        description:
          "Every function has an AI idea. Few organizations have a consistent way to rank them by value and feasibility.",
      },
      {
        icon: "ShieldAlert",
        title: "Governance Arrives Too Late",
        description:
          "Security, privacy, and model-risk questions surface after a pilot is underway, becoming blockers instead of design inputs.",
      },
      {
        icon: "ArrowLeftRight",
        title: "Vendor Selection Before Strategy",
        description:
          "Platforms get chosen before the problem is defined, locking in technical constraints prematurely.",
      },
      {
        icon: "FlaskConical",
        title: "Pilots With No Path to Production",
        description:
          "A successful proof of concept often has no defined owner, budget, or architecture for scaling past it.",
      },
    ],
  },

  approach: {
    heading: "The ORXIO Approach",
    description:
      "Technical depth without vendor affiliation — a recommendation shaped by your constraints and your business case, not by which platform we have an incentive to sell.",
    principles: [
      {
        label: "Business Before Models",
        description:
          "Every recommendation starts from a measurable business outcome, not a preferred technology.",
      },
      {
        label: "Vendor Neutral by Design",
        description:
          "Technology direction is shaped by your constraints, not a partner incentive.",
      },
      {
        label: "Governance From Day One",
        description:
          "Security, privacy, and compliance are treated as design inputs, not a later fix.",
      },
    ],
  },

  capabilities: {
    id: "capabilities",
    heading: "What's Included",
    description:
      "A structured Discover-and-Design engagement, from readiness assessment through a roadmap your team can execute.",
    columns: 3,
    items: [
      {
        icon: "ClipboardCheck",
        title: "AI Readiness Assessment",
        description:
          "A scored evaluation across data, infrastructure, governance, and organizational capability.",
      },
      {
        icon: "ListOrdered",
        title: "Use Case Prioritization",
        description:
          "Opportunities identified and ranked against a documented value, feasibility, and risk method.",
      },
      {
        icon: "ShieldCheck",
        title: "Governance Framework",
        description:
          "Data privacy, model risk, and compliance considerations defined for your specific regulatory context.",
      },
      {
        icon: "Compass",
        title: "Vendor-Neutral Technology Direction",
        description:
          "A recommended technology direction shaped by your constraints, not a partner incentive.",
      },
      {
        icon: "Map",
        title: "Phased Roadmap",
        description:
          "Sequencing, indicative resourcing, and defined success metrics for every phase.",
      },
      {
        icon: "Presentation",
        title: "Executive Presentation & Strategy Document",
        description:
          "A final presentation and written strategy document your team can act on immediately.",
      },
    ],
  },

  businessOutcomes: {
    heading: "Business Outcomes",
    description:
      "The impact a structured strategy engagement is designed to produce — measured by execution, not by the deliverables handed over.",
    columns: 4,
    items: [
      {
        icon: "ShieldCheck",
        title: "Reduce Implementation Risk",
        description:
          "Validate technical, data, and organizational feasibility before committing engineering budget.",
      },
      {
        icon: "Target",
        title: "Prioritize High-Value AI Investments",
        description:
          "Rank opportunities by business value and feasibility, not internal enthusiasm.",
      },
      {
        icon: "Users",
        title: "Align Leadership Around Execution",
        description:
          "Give business and technical stakeholders one shared plan and one definition of success.",
      },
      {
        icon: "Route",
        title: "Build an Enterprise Roadmap",
        description:
          "A phased, resourced plan your organization can execute without further outside strategy work.",
      },
    ],
  },

  faq: [
    {
      question: "How is this different from a generic AI maturity assessment?",
      answer:
        "A maturity assessment tells you where you stand. This engagement produces a specific, prioritized, resourced roadmap for what to do next — the assessment is an input, not the deliverable.",
    },
    {
      question:
        "Do we need to know which AI vendor or platform we want before starting?",
      answer:
        "No. If you already have a strong vendor preference, this engagement is where it gets pressure-tested against your actual use cases, not assumed correct by default.",
    },
    {
      question: "Can this engagement start before we have a dedicated AI team?",
      answer:
        "Yes. Many clients engage ORXIO precisely because they don't yet have internal AI leadership in place.",
    },
    {
      question: "What happens after the roadmap is delivered?",
      answer:
        "You can execute independently, engage ORXIO for implementation under one of our other services, or retain us for ongoing strategic support.",
    },
    {
      question: "How do you handle industries with heavy regulatory requirements?",
      answer:
        "Governance framework development is scoped to your actual regulatory context — this is not a one-size-fits-all template.",
    },
  ],

  relatedServices: {
    layout: "journey",
    heading: "Where Strategy Leads Next",
    description:
      "Completed strategy? Here's where it leads next — the most common paths from roadmap to production.",
    items: [
      {
        question: "Need implementation?",
        icon: "Sparkles",
        title: "AI Agents",
        description:
          "Task automation, multi-agent systems, copilots, and intelligent assistants.",
        slug: "ai-agents",
      },
      {
        question: "Need workflow automation?",
        icon: "Workflow",
        title: "Intelligent Automation",
        description:
          "Workflow automation and operational efficiency powered by AI.",
        slug: "intelligent-automation",
      },
      {
        question: "Need modern data foundations?",
        icon: "Database",
        title: "Data Platforms",
        description:
          "Modern data foundations designed for analytics, AI, and decision intelligence.",
        slug: "data-platforms",
      },
    ],
  },
}

export { ENTERPRISE_AI_STRATEGY }
