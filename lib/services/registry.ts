import { AI_AGENTS } from "@/lib/services/content/ai-agents"
import { DATA_PLATFORMS } from "@/lib/services/content/data-platforms"
import { ENTERPRISE_AI_STRATEGY } from "@/lib/services/content/enterprise-ai-strategy"
import { GENERATIVE_AI_SOLUTIONS } from "@/lib/services/content/generative-ai-solutions"
import { INTELLIGENT_AUTOMATION } from "@/lib/services/content/intelligent-automation"
import type { ServicePageContent, ServiceSlug } from "@/lib/services/types"

/** Grows incrementally as each service page is migrated onto the engine. */
const SERVICES: Partial<Record<ServiceSlug, ServicePageContent>> = {
  "enterprise-ai-strategy": ENTERPRISE_AI_STRATEGY,
  "ai-agents": AI_AGENTS,
  "intelligent-automation": INTELLIGENT_AUTOMATION,
  "data-platforms": DATA_PLATFORMS,
  "generative-ai": GENERATIVE_AI_SOLUTIONS,
}

function getServiceContent(slug: string): ServicePageContent | undefined {
  return SERVICES[slug as ServiceSlug]
}

function getAllServiceSlugs(): ServiceSlug[] {
  return Object.keys(SERVICES) as ServiceSlug[]
}

export { SERVICES, getServiceContent, getAllServiceSlugs }
