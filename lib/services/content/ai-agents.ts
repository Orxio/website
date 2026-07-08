import type { ServicePageContent } from "@/lib/services/types"

const AI_AGENTS: ServicePageContent = {
  slug: "ai-agents",

  metadata: {
    title: "AI Agents",
    description:
      "Enterprise AI agent development: multi-agent systems, agentic workflows, MCP-based tool integration, and human-in-the-loop governance for production-grade automation.",
  },

  serviceType: "AI Agents",
  areaServed:
    "Enterprise organizations across regulated and technically complex industries",

  hero: {
    eyebrow: "AI Agents",
    headline: "AI Agents Built to Operate Inside Your Guardrails",
    description:
      "Multi-agent systems and agentic workflows designed for enterprise environments — with human-in-the-loop controls, governance, and observability built in from the first line of code.",
    primaryCta: { label: "Book a Strategy Call", href: "/contact" },
    secondaryCta: { label: "Explore Capabilities", href: "#capabilities" },
    capabilities: [
      "Multi-Agent Systems",
      "Tool Integration",
      "Human-in-the-Loop",
      "Observability",
    ],
  },

  businessChallenges: {
    heading: "Where Agent Initiatives Break Down",
    description:
      "Agent initiatives rarely fail because the underlying models aren't capable enough. They fail for reasons a structured engagement is designed to prevent.",
    columns: 2,
    items: [
      {
        icon: "Eye",
        title: "Agents That Act Without Oversight",
        description:
          "Autonomous systems making consequential decisions with no human checkpoint or audit trail.",
      },
      {
        icon: "Plug",
        title: "Fragile Tool Integrations",
        description:
          "Agents wired directly into internal systems through one-off connections with no standardized, secure integration layer.",
      },
      {
        icon: "Activity",
        title: "No Visibility Into Agent Behavior",
        description:
          "Once deployed, agent decisions and failures are difficult to trace, explain, or debug.",
      },
      {
        icon: "ShieldAlert",
        title: "Security Treated as an Afterthought",
        description:
          "Agent access to internal systems and data expands the attack surface faster than governance can keep up.",
      },
    ],
  },

  approach: {
    heading: "The ORXIO Approach",
    description:
      "Agents that earn trust through design, not through assurances after the fact — every capability below is a governance decision as much as a technical one.",
    principles: [
      {
        label: "Human-in-the-Loop by Default",
        description:
          "Every agent workflow includes a defined checkpoint for human review before consequential actions execute.",
      },
      {
        label: "Governed Tool Access",
        description:
          "Agents connect to internal systems through standardized, permissioned interfaces, not ad hoc integrations.",
      },
      {
        label: "Observable by Design",
        description:
          "Every agent decision and tool call is logged, traceable, and auditable from day one.",
      },
    ],
  },

  capabilities: {
    id: "capabilities",
    heading: "Agent Capabilities",
    description:
      "Production-grade agent systems, engineered for environments where actions have real business consequences.",
    columns: 3,
    items: [
      {
        icon: "Network",
        title: "Multi-Agent Orchestration",
        description:
          "Coordinated systems of specialized agents, each scoped to a defined task and authority boundary.",
      },
      {
        icon: "Workflow",
        title: "Agentic Workflow Design",
        description:
          "Multi-step, tool-using workflows designed around your actual business processes, not generic automation templates.",
      },
      {
        icon: "Plug",
        title: "MCP-Based Tool Integration",
        description:
          "Standardized, secure connections between agents and your internal systems using the Model Context Protocol.",
      },
      {
        icon: "Database",
        title: "Retrieval-Augmented Generation",
        description:
          "Agents grounded in your organization's own knowledge and data, not model training data alone.",
      },
      {
        icon: "Users",
        title: "Human-in-the-Loop Controls",
        description:
          "Defined checkpoints for human review and approval before high-consequence actions execute.",
      },
      {
        icon: "ShieldCheck",
        title: "Enterprise Security & Governance",
        description:
          "Agent access, permissions, and data handling governed to your organization's security and compliance requirements.",
      },
    ],
  },

  businessOutcomes: {
    heading: "Business Outcomes",
    description:
      "The impact a well-governed agent deployment is designed to produce — accountability included, not traded away for speed.",
    columns: 4,
    items: [
      {
        icon: "Workflow",
        title: "Reduce Manual Operational Load",
        description:
          "Shift repetitive, multi-step tasks to agents operating inside defined guardrails.",
      },
      {
        icon: "Users",
        title: "Maintain Human Accountability",
        description:
          "Keep a human decision-maker in the loop for every consequential action.",
      },
      {
        icon: "Activity",
        title: "Improve Auditability",
        description:
          "Every agent action is logged and traceable, supporting internal review and compliance.",
      },
      {
        icon: "ShieldCheck",
        title: "Reduce Integration Risk",
        description:
          "Standardized tool access reduces the security exposure of ad hoc system integrations.",
      },
    ],
  },

  faq: [
    {
      question: "How is this different from simple task automation?",
      answer:
        "Automation follows fixed rules. Agents reason over context, call tools, and adapt within defined boundaries — with human checkpoints for anything consequential.",
    },
    {
      question: "What is MCP, and why does it matter?",
      answer:
        "The Model Context Protocol is a standardized way for agents to connect to your internal systems and data. It replaces one-off, custom integrations with a consistent, auditable interface.",
    },
    {
      question: "How do you prevent agents from taking unauthorized actions?",
      answer:
        "Every agent operates within an explicit permission and tool-access boundary, with human-in-the-loop checkpoints defined before deployment, not added after an incident.",
    },
    {
      question: "Can agents be integrated with our existing systems?",
      answer:
        "Yes. Tool integration is scoped during the engagement to your actual systems, using MCP where applicable and secure API integration elsewhere.",
    },
    {
      question: "How do you handle security and compliance?",
      answer:
        "Agent access, data handling, and audit logging are governed to your organization's specific security and compliance requirements from the design phase, not retrofitted after deployment.",
    },
  ],

  relatedServices: {
    layout: "grid",
    heading: "Where Agents Extend Your Stack",
    description:
      "AI agents are often paired with a broader technical foundation. These are the most common extensions.",
    items: [
      {
        icon: "Database",
        title: "Data Platforms",
        description:
          "Modern data foundations designed for analytics, AI, and decision intelligence.",
        slug: "data-platforms",
      },
      {
        icon: "Workflow",
        title: "Intelligent Automation",
        description:
          "Workflow automation and operational efficiency powered by AI.",
        slug: "intelligent-automation",
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

export { AI_AGENTS }
