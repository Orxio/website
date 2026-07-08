import type { ServicePageContent } from "@/lib/services/types"

const INTELLIGENT_AUTOMATION: ServicePageContent = {
  slug: "intelligent-automation",

  metadata: {
    title: "Intelligent Automation",
    description:
      "Enterprise process automation: AI-powered workflow orchestration, ERP and CRM integration, intelligent document processing, and human-in-the-loop approval workflows built for scale.",
  },

  serviceType: "Intelligent Automation",
  areaServed:
    "Enterprise organizations across regulated and technically complex industries",

  hero: {
    eyebrow: "Intelligent Automation",
    headline: "Automation Built for How the Enterprise Actually Operates",
    description:
      "AI-powered workflow orchestration across your existing systems — ERP, CRM, and internal tools — with human-in-the-loop approval, full observability, and governance built in, not automation for its own sake.",
    primaryCta: { label: "Book a Strategy Call", href: "/contact" },
    secondaryCta: { label: "Explore Capabilities", href: "#capabilities" },
    capabilities: [
      "Process Orchestration",
      "ERP & CRM Integration",
      "Document Processing",
      "Approval Workflows",
    ],
  },

  businessChallenges: {
    heading: "Where Automation Programs Stall",
    description:
      "Most automation programs don't fail on the happy path. They fail at the exception, the integration, or the audit request.",
    columns: 2,
    items: [
      {
        icon: "AlertTriangle",
        title: "Automation That Stops at the First Exception",
        description:
          "Rule-based automation breaks down the moment a process deviates from the happy path.",
      },
      {
        icon: "Plug",
        title: "Disconnected Systems",
        description:
          "ERP, CRM, and internal tools operate in isolation, requiring manual data re-entry between them.",
      },
      {
        icon: "Activity",
        title: "No Visibility Into Process Performance",
        description:
          "Once automated, workflows run as a black box, with no way to measure throughput, bottlenecks, or failure points.",
      },
      {
        icon: "ShieldAlert",
        title: "Compliance Gaps in Automated Processes",
        description:
          "Automated approval and document workflows that bypass the audit trail and control requirements manual processes had.",
      },
    ],
  },

  approach: {
    heading: "The ORXIO Approach",
    description:
      "Orchestration designed around the process as it actually runs — exceptions, approvals, and audit requirements included, not designed around afterward.",
    principles: [
      {
        label: "Orchestration, Not Just Automation",
        description:
          "Workflows are designed around your actual business process end-to-end, not isolated point-to-point scripts.",
      },
      {
        label: "Human-in-the-Loop Where It Matters",
        description:
          "Approval and exception-handling checkpoints stay with the people accountable for the outcome.",
      },
      {
        label: "Governed Integration",
        description:
          "Every connection into ERP, CRM, and core systems is built for auditability and control, not just throughput.",
      },
    ],
  },

  capabilities: {
    id: "capabilities",
    heading: "Automation Capabilities",
    description:
      "Process automation engineered for enterprise systems, enterprise exceptions, and enterprise audit requirements.",
    columns: 3,
    items: [
      {
        icon: "Workflow",
        title: "AI-Powered Workflow Orchestration",
        description:
          "Multi-step business processes automated end-to-end, coordinated across systems and teams.",
      },
      {
        icon: "Plug",
        title: "ERP & CRM Integration",
        description:
          "Native, governed integration with the enterprise systems your operations already run on.",
      },
      {
        icon: "FileText",
        title: "Intelligent Document Processing",
        description:
          "Automated extraction, classification, and routing of structured and unstructured documents.",
      },
      {
        icon: "Zap",
        title: "Event-Driven Architecture",
        description:
          "Processes triggered by real business events, not fixed schedules, for automation that responds in real time.",
      },
      {
        icon: "Users",
        title: "Approval Workflow Automation",
        description:
          "Structured, auditable approval chains with human-in-the-loop checkpoints at every consequential step.",
      },
      {
        icon: "ShieldCheck",
        title: "Compliance & Governance",
        description:
          "Automated processes built with the audit trail, access control, and reporting your compliance function requires.",
      },
    ],
  },

  businessOutcomes: {
    heading: "Business Outcomes",
    description:
      "The operational impact a well-orchestrated automation program is designed to produce.",
    columns: 3,
    items: [
      {
        icon: "Zap",
        title: "Faster Operations",
        description:
          "Reduce cycle time on multi-step processes that previously required manual handoffs.",
      },
      {
        icon: "Workflow",
        title: "Reduced Manual Effort",
        description:
          "Shift repetitive data entry and routing work away from operational teams.",
      },
      {
        icon: "ListOrdered",
        title: "Improved Process Consistency",
        description:
          "The same process executes the same way every time, regardless of who initiated it.",
      },
      {
        icon: "Target",
        title: "Better Decision Support",
        description:
          "Operational data surfaced in context, so decisions are made with current information, not after the fact.",
      },
      {
        icon: "Activity",
        title: "Increased Operational Visibility",
        description:
          "Clear, measurable insight into process throughput, bottlenecks, and exceptions as they happen.",
      },
    ],
  },

  faq: [
    {
      question: "How is this different from basic RPA?",
      answer:
        "Traditional RPA follows fixed scripts against a static UI. Intelligent automation orchestrates processes across systems using APIs and events, and adapts to exceptions with human-in-the-loop checkpoints rather than breaking.",
    },
    {
      question: "Can this integrate with our existing ERP and CRM systems?",
      answer:
        "Yes. Integration is scoped to your actual systems during the engagement, using API-first connections rather than fragile UI-level automation.",
    },
    {
      question: "How do you handle exceptions and edge cases?",
      answer:
        "Every workflow is designed with defined escalation and human-in-the-loop checkpoints for exceptions, not just the happy path.",
    },
    {
      question: "What about compliance and audit requirements?",
      answer:
        "Automated processes are built with the audit trail, access control, and reporting your compliance function requires, defined during design, not added afterward.",
    },
    {
      question: "Can automation scale across multiple departments?",
      answer:
        "Yes. Process orchestration is architected for automation at scale from the first deployment, not re-engineered department by department.",
    },
  ],

  relatedServices: {
    layout: "grid",
    heading: "Where Automation Extends Your Stack",
    description:
      "Intelligent automation is often paired with a broader technical foundation. These are the most common extensions.",
    items: [
      {
        icon: "Sparkles",
        title: "AI Agents",
        description:
          "Task automation, multi-agent systems, copilots, and intelligent assistants.",
        slug: "ai-agents",
      },
      {
        icon: "Database",
        title: "Data Platforms",
        description:
          "Modern data foundations designed for analytics, AI, and decision intelligence.",
        slug: "data-platforms",
      },
      {
        icon: "AppWindow",
        title: "Custom AI Applications",
        description:
          "Secure, scalable AI applications tailored to your business requirements.",
        slug: "custom-ai-applications",
      },
    ],
  },
}

export { INTELLIGENT_AUTOMATION }
