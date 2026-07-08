import type { ServicePageContent } from "@/lib/services/types"

const DATA_PLATFORMS: ServicePageContent = {
  slug: "data-platforms",

  metadata: {
    title: "Data Platforms",
    description:
      "Enterprise AI-ready data platforms: modern lakehouse architecture, data engineering, governance, vector databases, and scalable data foundations built for production AI.",
  },

  serviceType: "Data Platforms",
  areaServed:
    "Enterprise organizations across regulated and technically complex industries",

  hero: {
    eyebrow: "Data Platforms",
    headline: "The Data Foundation Your AI Initiatives Actually Need",
    description:
      "Modern lakehouse architecture, governed data pipelines, and vector infrastructure — built so your AI systems are grounded in accurate, current, well-governed data, not best-effort exports.",
    primaryCta: { label: "Book a Strategy Call", href: "/contact" },
    secondaryCta: { label: "Explore Capabilities", href: "#capabilities" },
    capabilities: [
      "Lakehouse Architecture",
      "Data Governance",
      "Vector Databases",
      "Data Pipelines",
    ],
  },

  businessChallenges: {
    heading: "Where Data Foundations Fall Short",
    description:
      "AI initiatives rarely fail because of the model. They fail because the data underneath it wasn't built to support them.",
    columns: 2,
    items: [
      {
        icon: "AlertTriangle",
        title: "AI Built on an Unstable Data Foundation",
        description:
          "Models and agents pull from inconsistent, duplicated, or stale data spread across disconnected systems.",
      },
      {
        icon: "ShieldAlert",
        title: "Governance Added After the Fact",
        description:
          "Data access, lineage, and quality controls get retrofitted once a platform is already in production.",
      },
      {
        icon: "Search",
        title: "Retrieval That Doesn't Scale",
        description:
          "Search and retrieval built for a proof of concept breaks down under real production query volume.",
      },
      {
        icon: "Users",
        title: "Analytics Teams Locked Out of AI Investments",
        description:
          "Data engineering and AI infrastructure built in isolation from the analytics function that should benefit from it.",
      },
    ],
  },

  approach: {
    heading: "The ORXIO Approach",
    description:
      "A data foundation designed for how AI systems actually consume information — not a reporting warehouse repurposed after the fact.",
    principles: [
      {
        label: "Architecture Before Ingestion",
        description:
          "Lakehouse and pipeline design is defined against your actual use cases before data movement begins.",
      },
      {
        label: "Governance as a Platform Property",
        description:
          "Access control, lineage, and data quality are built into the platform, not layered on afterward.",
      },
      {
        label: "Built for Retrieval, Not Just Storage",
        description:
          "Data foundations are designed for how AI systems actually query and retrieve information, not only for reporting.",
      },
    ],
  },

  capabilities: {
    id: "capabilities",
    heading: "Platform Capabilities",
    description:
      "A governed data foundation built to serve AI systems, analytics, and reporting from a single source of truth.",
    columns: 3,
    items: [
      {
        icon: "Database",
        title: "Modern Lakehouse Architecture",
        description:
          "A unified data foundation combining the flexibility of a data lake with the structure of a warehouse.",
      },
      {
        icon: "Workflow",
        title: "Data Engineering",
        description:
          "Reliable, well-tested pipelines that move and transform data without silently breaking downstream systems.",
      },
      {
        icon: "ShieldCheck",
        title: "Data Governance",
        description:
          "Access control, lineage tracking, and quality rules built into the platform, not enforced manually.",
      },
      {
        icon: "Network",
        title: "Vector Database Infrastructure",
        description:
          "Purpose-built retrieval infrastructure for semantic search and AI-grounded knowledge access.",
      },
      {
        icon: "Presentation",
        title: "Enterprise Analytics",
        description:
          "Reporting and analytics built on the same governed foundation your AI systems use, not a separate parallel stack.",
      },
      {
        icon: "Cloud",
        title: "Cloud-Native Data Infrastructure",
        description:
          "Scalable, cloud-native infrastructure designed to grow with data volume and AI workload demand.",
      },
    ],
  },

  businessOutcomes: {
    heading: "Business Outcomes",
    description:
      "The impact a governed, AI-ready data foundation is designed to produce.",
    columns: 4,
    items: [
      {
        icon: "ShieldCheck",
        title: "Reliable AI Grounding",
        description:
          "AI systems draw from accurate, current data instead of stale exports or inconsistent sources.",
      },
      {
        icon: "Zap",
        title: "Faster Time to Insight",
        description:
          "Analytics and AI teams work from the same governed foundation, without duplicating data engineering effort.",
      },
      {
        icon: "Eye",
        title: "Reduced Data Risk",
        description:
          "Access control and lineage reduce exposure as more systems and models consume the same data.",
      },
      {
        icon: "Cloud",
        title: "Infrastructure That Scales With Demand",
        description:
          "Cloud-native architecture grows with data volume and AI workload, without a re-platforming project.",
      },
    ],
  },

  faq: [
    {
      question: "Do we need to migrate off our existing data warehouse?",
      answer:
        "Not necessarily. Lakehouse architecture is often layered alongside existing systems, with a migration path scoped to what your use cases actually require.",
    },
    {
      question: "What is a vector database, and do we need one?",
      answer:
        "A vector database enables semantic search and retrieval for AI systems. It's typically required once AI agents or applications need to ground responses in your own knowledge, not general model training data.",
    },
    {
      question: "How do you handle data governance and compliance?",
      answer:
        "Access control, lineage tracking, and data quality rules are defined as part of the platform architecture, scoped to your organization's specific regulatory requirements.",
    },
    {
      question: "Can this integrate with our existing analytics tools?",
      answer:
        "Yes. The platform is designed to serve both AI systems and existing analytics and reporting tools from the same governed data foundation.",
    },
    {
      question: "How long does a typical data platform engagement take?",
      answer:
        "Timelines depend on the current state of your data infrastructure, but most engagements move from architecture to a production-ready foundation within one to two quarters.",
    },
  ],

  relatedServices: {
    layout: "grid",
    heading: "Where Your Data Foundation Leads Next",
    description:
      "A governed data platform is the foundation most AI initiatives build on next. These are the most common extensions.",
    items: [
      {
        icon: "Sparkles",
        title: "AI Agents",
        description:
          "Task automation, multi-agent systems, copilots, and intelligent assistants.",
        slug: "ai-agents",
      },
      {
        icon: "Wand2",
        title: "Generative AI Solutions",
        description:
          "Enterprise copilots, semantic search, knowledge assistants, and GenAI products.",
        slug: "generative-ai",
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

export { DATA_PLATFORMS }
