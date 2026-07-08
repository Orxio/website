import type { Metadata } from "next"

import type { ServicePageContent } from "@/lib/services/types"

function buildServiceMetadata(content: ServicePageContent): Metadata {
  return {
    title: content.metadata.title,
    description: content.metadata.description,
    alternates: {
      canonical: `/services/${content.slug}`,
    },
  }
}

export { buildServiceMetadata }
