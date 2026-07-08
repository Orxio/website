import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServicePageRenderer } from "@/components/services/engine/ServicePageRenderer";
import { buildServiceJsonLd } from "@/lib/services/json-ld";
import { buildServiceMetadata } from "@/lib/services/metadata";
import { getAllServiceSlugs, getServiceContent } from "@/lib/services/registry";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = getServiceContent(slug);
  if (!content) notFound();
  return buildServiceMetadata(content);
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const content = getServiceContent(slug);
  if (!content) notFound();

  const { service, faq } = buildServiceJsonLd(content);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
      <ServicePageRenderer content={content} />
    </>
  );
}
