export interface ServiceData {
  slug: string;
  name: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  symptoms: string[];
  treatmentApproach: string;
  whyChooseUs: string;
  icon: string;
  relatedSlugs: string[];
  crisisDisclaimer?: boolean;
}

export interface LocationData {
  slug: string;
  city: string;
  state: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  distanceNote: string;
  servicesHighlight: string[];
  directions: string;
}

export interface TestimonialData {
  id: number;
  quote: string;
  name: string;
  city: string;
  service: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  href: string;
}
