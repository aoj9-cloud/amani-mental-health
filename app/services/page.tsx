import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ContactFormSection } from "@/components/homepage/ContactFormSection";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CLINIC } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mental Health Services in Elizabeth, NJ | Amani Mental Health",
  description:
    "Expert mental health services including therapy for depression, anxiety, ADHD, bipolar disorder & more. Serving Elizabeth, NJ and surrounding areas.",
  alternates: {
    canonical: `${CLINIC.baseUrl}/services`,
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
];

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbs} />
      </div>

      <section className="bg-base py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-body tracking-[0.15em] uppercase text-ink-muted/60 mb-4">
            What We Treat
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-ink mb-6 leading-tight">
            Mental Health Services We Offer in Elizabeth, NJ
          </h1>
          <p className="font-body text-lg text-ink-muted leading-relaxed max-w-2xl">
            Our licensed clinicians provide individualized, evidence-based
            treatment for the full spectrum of mental health conditions.
            Accepting new patients in Elizabeth, NJ and surrounding areas.
          </p>
        </div>
      </section>

      <SectionWrapper className="bg-base-warm">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group block bg-white border border-rule border-t-[3px] border-t-rule hover:border-t-primary rounded-sm p-6 shadow-[0_2px_12px_rgba(26,43,60,0.06)] hover:shadow-[0_6px_24px_rgba(26,43,60,0.10)] transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="text-3xl" aria-hidden="true">{service.icon}</span>
                <span className="text-xs font-body text-ink-muted/50 pt-1.5">0{index + 1}</span>
              </div>
              <h2 className="font-display text-xl font-semibold text-ink group-hover:text-primary transition-colors mb-2">
                {service.name}
              </h2>
              <p className="font-body text-sm text-ink-muted leading-relaxed mb-4">
                {service.shortDescription}
              </p>
              <span className="text-xs font-body text-primary font-medium">
                Learn about treatment →
              </span>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      <ContactFormSection />
    </>
  );
}
