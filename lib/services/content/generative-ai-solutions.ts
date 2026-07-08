import type { ServicePageContent } from "@/lib/services/types"

const GENERATIVE_AI_SOLUTIONS: ServicePageContent = {
  slug: "generative-ai",

  metadata: {
    title: "Generative AI Solutions",
    description:
      "Enterprise generative AI: RAG-based knowledge assistants, semantic search, AI copilots, and document intelligence — built with governance, human-in-the-loop review, and responsible AI controls.",
  },

  serviceType: "Generative AI Solutions",
  areaServed:
    "Enterprise organizations across regulated and technically complex industries",

  hero: {
    eyebrow: "Generative AI Solutions",
    headline: "Generative AI Grounded in Your Enterprise Knowledge",
    description:
      "AI knowledge assistants, semantic search, and copilots built on enterprise RAG — so responses are grounded in your own data, reviewed where it matters, and governed from the start.",
    primaryCta: { label: "Book a Strategy Call", href: "/contact" },
    secondaryCta: { label: "Explore Capabilities", href: "#capabilities" },
    capabilities: [
      "Enterprise RAG",
      "Knowledge Assistants",
      "Semantic Search",
      "Responsible AI",
    ],
  },

  businessChallenges: {
    heading: "Where Generative AI Initiatives Fall Short",
    description:
      "Most generative AI pilots don't fail on language quality. They fail on grounding, review, and governance.",
    columns: 2,
    items: [
      {
        icon: "FileText",
        title: "Knowledge Trapped in Silos",
        description:
          "Institutional knowledge spread across documents, systems, and teams, inaccessible at the moment it's needed.",
      },
      {
        icon: "Search",
        title: "Responses Without Verifiable Grounding",
        description:
          "Generic language model outputs with no connection to your organization's actual, current knowledge.",
      },
      {
        icon: "Eye",
        title: "No Review Path for High-Stakes Output",
        description:
          "AI-generated content reaching decisions or customers with no human checkpoint before it matters.",
      },
      {
        icon: "ShieldAlert",
        title: "Governance Bolted On After Deployment",
        description:
          "Access controls, usage policies, and responsible AI guardrails added after a GenAI tool is already in use.",
      },
    ],
  },

  approach: {
    heading: "The ORXIO Approach",
    description:
      "Generative AI that earns trust through grounding and review, not through confident-sounding output alone.",
    principles: [
      {
        label: "Grounded, Not Generic",
        description:
          "Every assistant and copilot is built on retrieval from your own knowledge base, not general model training data alone.",
      },
      {
        label: "Human-in-the-Loop for Consequential Output",
        description:
          "Review checkpoints are defined wherever AI-generated content informs a decision or reaches a customer.",
      },
      {
        label: "Responsible AI as a Design Requirement",
        description:
          "Access control, usage policy, and content safeguards are part of the architecture, not a policy document filed separately.",
      },
    ],
  },

  capabilities: {
    id: "capabilities",
    heading: "Generative AI Capabilities",
    description:
      "Enterprise-grade generative AI, engineered for accuracy, governance, and the systems you already run.",
    columns: 3,
    items: [
      {
        icon: "Search",
        title: "Enterprise RAG",
        description:
          "Retrieval-augmented generation grounded in your organization's own documents, systems, and data.",
      },
      {
        icon: "Users",
        title: "AI Knowledge Assistants",
        description:
          "Conversational assistants that answer from your internal knowledge base, with citations back to source.",
      },
      {
        icon: "Network",
        title: "Semantic Search",
        description:
          "Search built on meaning, not keyword matching, across your organization's documents and systems.",
      },
      {
        icon: "FileText",
        title: "Document Intelligence",
        description:
          "Automated extraction and understanding of structured and unstructured documents at scale.",
      },
      {
        icon: "Sparkles",
        title: "AI Copilots",
        description:
          "Embedded assistants that support specific workflows and roles, not a generic chat interface.",
      },
      {
        icon: "ShieldCheck",
        title: "Governance & Responsible AI",
        description:
          "Access control, usage policy, and content safeguards built into every deployment.",
      },
    ],
  },

  businessOutcomes: {
    heading: "Business Outcomes",
    description:
      "The impact a grounded, governed generative AI deployment is designed to produce.",
    columns: 3,
    items: [
      {
        icon: "Zap",
        title: "Faster Access to Enterprise Knowledge",
        description:
          "Employees find accurate answers in seconds, without searching across disconnected systems.",
      },
      {
        icon: "Target",
        title: "Better Employee Productivity",
        description:
          "Time spent searching for information is redirected to higher-value work.",
      },
      {
        icon: "ShieldCheck",
        title: "Higher Response Accuracy",
        description:
          "Answers grounded in your own knowledge base, reducing the risk of confident but incorrect output.",
      },
      {
        icon: "Network",
        title: "Reduced Knowledge Silos",
        description:
          "A shared, governed knowledge layer accessible across teams, not fragmented by department.",
      },
      {
        icon: "Eye",
        title: "Secure AI Adoption",
        description:
          "Governance and access control that let the organization adopt GenAI without expanding uncontrolled risk.",
      },
    ],
  },

  faq: [
    {
      question: "How is this different from a general-purpose AI assistant?",
      answer:
        "General-purpose assistants respond from public training data. Our knowledge assistants retrieve and ground responses in your organization's own documents and systems, with citations back to source.",
    },
    {
      question: "How do you prevent inaccurate or fabricated responses?",
      answer:
        "Responses are grounded in retrieval from your verified knowledge base, and human-in-the-loop review is defined for any output that informs a consequential decision.",
    },
    {
      question: "Can this work across multiple AI models?",
      answer:
        "Yes. Solutions are architected to work across model providers, so you aren't locked into a single vendor as the underlying technology evolves.",
    },
    {
      question: "How do you handle data security and access control?",
      answer:
        "Knowledge retrieval respects your existing access permissions, so users only receive answers grounded in content they're authorized to see.",
    },
    {
      question: "What does \"responsible AI\" mean in practice here?",
      answer:
        "Defined usage policies, content safeguards, and human review checkpoints built into the deployment, not a separate governance document that sits apart from the system.",
    },
  ],

  relatedServices: {
    layout: "grid",
    heading: "Where Generative AI Extends Your Stack",
    description:
      "Generative AI solutions are often paired with a broader technical foundation. These are the most common extensions.",
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

export { GENERATIVE_AI_SOLUTIONS }
