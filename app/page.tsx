import type { Metadata } from "next";
import { Hero } from "@/components/homepage/Hero";
import { ServicesGrid } from "@/components/homepage/ServicesGrid";
import { Testimonials } from "@/components/homepage/Testimonials";
import { AreasServed } from "@/components/homepage/AreasServed";
import { FAQSection } from "@/components/homepage/FAQSection";
import { ContactFormSection } from "@/components/homepage/ContactFormSection";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { CLINIC } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mental Health Clinic in Elizabeth, NJ | Amani Mental Health",
  description:
    "Compassionate mental health care in Elizabeth, NJ. Treating depression, anxiety, PTSD & more. Accepting new patients. Call today.",
  alternates: {
    canonical: CLINIC.baseUrl,
  },
  openGraph: {
    title: "Mental Health Clinic in Elizabeth, NJ | Amani Mental Health",
    description:
      "Compassionate mental health care in Elizabeth, NJ. Treating depression, anxiety, PTSD & more. Accepting new patients.",
    url: CLINIC.baseUrl,
  },
};

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <Hero />
      <ServicesGrid />
      <Testimonials />
      <AreasServed />
      <FAQSection />
      <ContactFormSection />
    </>
  );
}
