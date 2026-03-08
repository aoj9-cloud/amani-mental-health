import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locations, getLocationBySlug } from "@/data/locations";
import { CityPageContent } from "@/components/locations/CityPageContent";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return locations.map((location) => ({
    city: location.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const location = getLocationBySlug(city);
  if (!location) return {};

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: {
      canonical: `https://amanimentalhealth.com/locations/${location.slug}`,
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: `https://amanimentalhealth.com/locations/${location.slug}`,
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const location = getLocationBySlug(city);
  if (!location) notFound();

  return <CityPageContent location={location} />;
}
