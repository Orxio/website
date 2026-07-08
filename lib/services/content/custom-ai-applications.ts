import type { ServicePageContent } from "@/lib/services/types"

const CUSTOM_AI_APPLICATIONS: ServicePageContent = {
  slug: "custom-ai-applications",

  metadata: {
    title: "Custom AI Applications",
    description:
      "Bespoke enterprise AI applications: AI-powered web and mobile products, internal platforms, and customer-facing experiences — built on secure, API-first, production-ready architecture.",
  },

  serviceType: "Custom AI Applications",
  areaServed:
    "Enterprise organizations across regulated and technically complex industries",

  hero: {
    eyebrow: "Custom AI Applications",
    headline: "AI Applications Engineered for Production, Not a Demo",
    description:
      "Bespoke web, mobile, and internal AI applications built on secure, API-first architecture — designed for the authentication, scale, and observability requirements of a real enterprise deployment, not a prototype.",
    primaryCta: { label: "Book a Strategy Call", href: "/contact" },
    secondaryCta: { label: "Explore Capabilities", href: "#capabilities" },
    capabilities: [
      "Enterprise Portals",
      "API-First Architecture",
      "Secure Authentication",
      "Production Engineering",
    ],
  },

  businessChallenges: {
    heading: "Where Custom AI Builds Go Wrong",
    description:
      "Most custom AI applications don't fail on functionality. They fail on the architecture, security, and operations decisions made — or skipped — before launch.",
    columns: 2,
    items: [
      {
        icon: "FlaskConical",
        title: "Prototypes That Never Reach Production",
        description:
          "AI proofs of concept built without the architecture, authentication, or scale required to actually deploy.",
      },
      {
        icon: "Workflow",
        title: "Off-the-Shelf Tools That Don't Fit the Workflow",
        description:
          "Generic AI products bolted onto a process they weren't designed for, creating more workarounds than value.",
      },
      {
        icon: "ShieldAlert",
        title: "Security and Access Control as an Afterthought",
        description:
          "Applications built before enterprise authentication, permissions, and data handling requirements were defined.",
      },
      {
        icon: "Activity",
        title: "No Visibility Once the Application Ships",
        description:
          "Production AI applications with no monitoring for performance, cost, or failure, until something breaks.",
      },
    ],
  },

  approach: {
    heading: "The ORXIO Approach",
    description:
      "Applications engineered for the production requirements you'll actually face, defined before development starts, not discovered after launch.",
    principles: [
      {
        label: "Built for Production From the Start",
        description:
          "Architecture, authentication, and deployment requirements are defined before development begins, not retrofitted after a prototype succeeds.",
      },
      {
        label: "Designed Around Your Workflow",
        description:
          "Applications are built around how your teams and customers actually work, not adapted from a generic template.",
      },
      {
        label: "Observable and Accountable",
        description:
          "Monitoring, human-in-the-loop checkpoints, and audit logging are part of the application, not added after launch.",
      },
    ],
  },

  capabilities: {
    id: "capabilities",
    heading: "AI Application Capabilities",
    description:
      "Bespoke applications engineered to the same standard as the rest of your production systems.",
    columns: 3,
    items: [
      {
        icon: "AppWindow",
        title: "AI-Powered Web & Mobile Applications",
        description:
          "Custom applications with AI capabilities built into the core product experience, not layered on top.",
      },
      {
        icon: "Network",
        title: "Enterprise AI Portals & Internal Platforms",
        description:
          "Internal tools and portals that give teams a governed way to work with AI across the organization.",
      },
      {
        icon: "Users",
        title: "Customer-Facing AI Experiences",
        description:
          "AI-powered features embedded directly into the products and experiences your customers use.",
      },
      {
        icon: "Plug",
        title: "API-First Integration",
        description:
          "Applications architected around well-defined APIs, built to integrate with your existing systems from day one.",
      },
      {
        icon: "ShieldCheck",
        title: "Enterprise Authentication & Access Control",
        description:
          "Identity, permissions, and data access governed to your organization's security requirements.",
      },
      {
        icon: "Eye",
        title: "Monitoring & Observability",
        description:
          "Performance, usage, and failure monitoring built into the application, not bolted on after an incident.",
      },
    ],
  },

  businessOutcomes: {
    heading: "Business Outcomes",
    description:
      "The impact a production-engineered custom AI application is designed to produce.",
    columns: 3,
    items: [
      {
        icon: "Zap",
        title: "Faster Business Innovation",
        description:
          "Move from concept to a production-ready AI application without a lengthy, disconnected build cycle.",
      },
      {
        icon: "Sparkles",
        title: "Competitive Differentiation",
        description:
          "AI capabilities built into your own products, not available to every organization using the same off-the-shelf tool.",
      },
      {
        icon: "Target",
        title: "Improved Employee Productivity",
        description:
          "Internal platforms that give teams direct, governed access to AI capabilities inside their existing workflow.",
      },
      {
        icon: "Users",
        title: "Better Customer Experiences",
        description:
          "AI-powered features embedded where customers already interact with your product.",
      },
      {
        icon: "Cloud",
        title: "Long-Term Scalability",
        description:
          "Architecture designed to handle production load and evolve as requirements grow, not rebuilt at the next milestone.",
      },
    ],
  },

  faq: [
    {
      question: "How is this different from using an off-the-shelf AI tool?",
      answer:
        "Off-the-shelf tools solve a generic problem the same way for every customer. A custom application is built around your specific workflow, systems, and requirements.",
    },
    {
      question: "Do you build both the AI and the application around it?",
      answer:
        "Yes. The engagement covers the full application, from architecture and authentication through the AI capabilities embedded inside it.",
    },
    {
      question: "How do you handle enterprise authentication and security?",
      answer:
        "Identity, permissions, and data access are architected to your organization's security requirements from the start, not added before launch as a separate step.",
    },
    {
      question: "What happens after the application is deployed?",
      answer:
        "Monitoring and observability are built into the application at launch, and ongoing support is available through our Managed AI Partnership model.",
    },
    {
      question: "Can this integrate with our existing systems?",
      answer:
        "Yes. Applications are built API-first and scoped to integrate with your existing enterprise systems during the engagement.",
    },
  ],

  relatedServices: {
    layout: "grid",
    heading: "Where Custom Applications Extend Your Stack",
    description:
      "Custom AI applications are often paired with a broader strategic or technical foundation. These are the most common extensions.",
    items: [
      {
        icon: "Compass",
        title: "Enterprise AI Strategy",
        description:
          "AI strategy, use case discovery, roadmap creation, and transformation planning.",
        slug: "enterprise-ai-strategy",
      },
      {
        icon: "Wand2",
        title: "Generative AI Solutions",
        description:
          "Enterprise copilots, semantic search, knowledge assistants, and GenAI products.",
        slug: "generative-ai",
      },
      {
        icon: "Sparkles",
        title: "AI Agents",
        description:
          "Task automation, multi-agent systems, copilots, and intelligent assistants.",
        slug: "ai-agents",
      },
    ],
  },
}

export { CUSTOM_AI_APPLICATIONS }
