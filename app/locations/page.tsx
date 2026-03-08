import type { Metadata } from "next";
import Link from "next/link";
import { locations } from "@/data/locations";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ContactFormSection } from "@/components/homepage/ContactFormSection";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CLINIC } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mental Health Clinic Areas Served in NJ | Amani Mental Health",
  description:
    "Amani Mental Health Clinic in Elizabeth, NJ serves patients from Linden, Westfield, Clark, Newark, Jersey City and surrounding Union & Essex County communities.",
  alternates: {
    canonical: `${CLINIC.baseUrl}/locations`,
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Areas Served", href: "/locations" },
];

export default function LocationsPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbs} />
      </div>

      <section className="bg-base py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-body tracking-[0.15em] uppercase text-ink-muted/60 mb-4">
            Service Area
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-ink mb-6 leading-tight">
            Mental Health Care Serving Elizabeth, NJ &amp; Surrounding Areas
          </h1>
          <p className="font-body text-lg text-ink-muted leading-relaxed max-w-2xl">
            Amani Mental Health Clinic is located in Elizabeth, NJ and serves
            patients across Union County, Essex County, and throughout New
            Jersey via telehealth.
          </p>
        </div>
      </section>

      <SectionWrapper className="bg-base-warm">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="group block bg-white border border-rule rounded-sm p-6 hover:border-primary/30 hover:shadow-[0_4px_16px_rgba(26,43,60,0.08)] transition-all duration-200"
            >
              <h2 className="font-display text-xl font-semibold text-ink group-hover:text-primary transition-colors mb-2">
                {location.city}, {location.state}
              </h2>
              <p className="font-body text-sm text-ink-muted mb-4">
                {location.distanceNote}
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                {location.servicesHighlight.slice(0, 3).map((s) => (
                  <span
                    key={s}
                    className="text-xs font-body text-ink-muted bg-base-warm border border-rule px-2 py-0.5 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <span className="text-xs font-body text-primary font-medium">
                View services near {location.city} →
              </span>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      <ContactFormSection />
    </>
  );
}
