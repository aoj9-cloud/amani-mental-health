import Link from "next/link";
import { LocationData } from "@/types";
import { services } from "@/data/services";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ContactFormSection } from "@/components/homepage/ContactFormSection";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { CLINIC } from "@/lib/constants";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

interface CityPageContentProps {
  location: LocationData;
}

export function CityPageContent({ location }: CityPageContentProps) {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Areas Served", href: "/locations" },
    { name: `${location.city}, ${location.state}`, href: `/locations/${location.slug}` },
  ];

  const citySchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${CLINIC.name} — Serving ${location.city}, NJ`,
    url: `${CLINIC.baseUrl}/locations/${location.slug}`,
    telephone: CLINIC.phoneTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: CLINIC.address.street,
      addressLocality: CLINIC.address.city,
      addressRegion: CLINIC.address.state,
      postalCode: CLINIC.address.zip,
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: location.city,
      addressRegion: "NJ",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
      />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbs} />
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-base py-12 md:py-20">
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[80px] pointer-events-none" aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-body tracking-[0.15em] uppercase text-ink-muted/60 mb-4">
              Mental Health Care · {location.city}, {location.state}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-ink mb-6 leading-tight">
              {location.h1}
            </h1>
            <p className="font-body text-lg text-ink-muted leading-relaxed mb-6">
              {location.distanceNote}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              <TrustBadge label="Accepting New Patients" />
              <TrustBadge label="Insurance Accepted" />
              <TrustBadge label="Telehealth Available" />
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center px-6 py-3 bg-ink text-white font-body font-medium rounded-sm hover:bg-ink/90 transition-colors"
              >
                Book an Appointment
              </a>
              <PhoneLink
                className="inline-flex items-center justify-center px-6 py-3 border border-ink text-ink font-body font-medium rounded-sm hover:bg-base-warm transition-colors"
                showIcon
              />
            </div>
          </div>
        </div>
      </section>

      {/* City Content */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-xs font-body tracking-[0.15em] uppercase text-ink-muted/60 mb-3">
              About Our Services
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink mb-6">
              Mental Health Care Serving {location.city} Residents
            </h2>
            <div className="font-body text-ink-muted leading-relaxed space-y-4">
              {location.intro.split("\n").filter(Boolean).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-base-warm rounded-sm border border-rule p-6">
              <h3 className="font-display font-semibold text-ink mb-4">
                Services for {location.city} Residents
              </h3>
              <ul className="space-y-2">
                {location.servicesHighlight.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm font-body text-ink-muted">
                    <span className="text-accent">✓</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-sm border border-rule p-6 shadow-[0_2px_12px_rgba(26,43,60,0.06)]">
              <h3 className="font-display font-semibold text-ink mb-4">
                Contact Us
              </h3>
              <div className="space-y-3">
                <a
                  href="#contact-form"
                  className="w-full flex items-center justify-center px-4 py-3 bg-ink text-white font-body font-medium rounded-sm hover:bg-ink/90 transition-colors text-sm"
                >
                  Book an Appointment
                </a>
                <PhoneLink
                  className="w-full flex items-center justify-center px-4 py-3 border border-rule text-ink font-body font-medium rounded-sm hover:bg-base-warm transition-colors text-sm"
                  showIcon
                />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* All Services */}
      <SectionWrapper className="bg-base-warm">
        <p className="text-xs font-body tracking-[0.15em] uppercase text-ink-muted/60 mb-3">
          What We Treat
        </p>
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink mb-8">
          Mental Health Services Available to {location.city} Residents
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex items-center gap-3 p-4 bg-white border border-rule rounded-sm hover:border-primary/30 hover:shadow-[0_2px_8px_rgba(26,43,60,0.06)] transition-all duration-200"
            >
              <span className="text-xl" aria-hidden="true">{service.icon}</span>
              <span className="font-body text-sm font-medium text-ink group-hover:text-primary transition-colors">
                {service.name}
              </span>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* Directions */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-body tracking-[0.15em] uppercase text-ink-muted/60 mb-3">
            Getting Here
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink mb-6">
            Directions from {location.city} to Our Elizabeth Clinic
          </h2>
          <p className="font-body text-ink-muted leading-relaxed mb-6">
            {location.directions}
          </p>
          <address className="not-italic font-body text-sm text-ink-muted bg-base-warm border border-rule rounded-sm p-4">
            <strong className="text-ink">{CLINIC.name}</strong>
            <br />
            {CLINIC.address.full}
            <br />
            <PhoneLink className="text-primary hover:underline mt-1 block" />
          </address>
        </div>
      </SectionWrapper>

      {/* Contact Form */}
      <ContactFormSection />
    </>
  );
}
