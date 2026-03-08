import Link from "next/link";
import { ServiceData } from "@/types";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ContactFormSection } from "@/components/homepage/ContactFormSection";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

interface ServicePageContentProps {
  service: ServiceData;
}

const CONDITION_FAQS: Record<string, { q: string; a: string }[]> = {
  depression: [
    {
      q: "How long does depression treatment take?",
      a: "Most clients see meaningful improvement within 8–16 sessions of therapy. For some, depression is a chronic condition requiring longer-term support. We regularly review progress with you and adjust the treatment plan accordingly.",
    },
    {
      q: "Can depression be treated without medication?",
      a: "Yes. Evidence-based therapies like CBT are highly effective for depression and are often the first-line recommendation. Medication is one option — not a requirement — and works best when combined with therapy for many patients.",
    },
    {
      q: "How do I know if what I'm feeling is depression or just sadness?",
      a: "Sadness is a normal emotion that typically resolves over time. Depression is characterized by persistent symptoms lasting two or more weeks that affect daily functioning. Our intake evaluation will help clarify what you're experiencing.",
    },
  ],
  anxiety: [
    {
      q: "Is anxiety treatable?",
      a: "Absolutely. Anxiety disorders are among the most responsive to treatment. Most people with anxiety see significant improvement with evidence-based therapy. CBT, in particular, has decades of research supporting its effectiveness.",
    },
    {
      q: "How is therapy different from just 'trying to calm down'?",
      a: "Therapy provides structured, evidence-based techniques for addressing the root cognitive and behavioral patterns driving anxiety — not just symptom management. You'll develop lasting skills, not just temporary relief.",
    },
    {
      q: "Do I need medication for anxiety?",
      a: "Not necessarily. Many people manage anxiety successfully through therapy alone. For others, a combination of therapy and medication produces the best results. Our team will discuss all options with you based on your specific situation.",
    },
  ],
};

export function ServicePageContent({ service }: ServicePageContentProps) {
  const related = services.filter((s) => service.relatedSlugs.includes(s.slug));
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: service.name, href: `/services/${service.slug}` },
  ];

  const serviceFaqs = CONDITION_FAQS[service.slug] ?? [
    {
      q: `What does ${service.name.toLowerCase()} treatment involve?`,
      a: `Our ${service.name.toLowerCase()} treatment begins with a comprehensive evaluation, followed by an individualized plan using evidence-based approaches. ${service.treatmentApproach}`,
    },
    {
      q: `How do I know if I need ${service.name.toLowerCase()} treatment?`,
      a: `If ${service.name.toLowerCase()} symptoms are interfering with your daily life, relationships, or work, it's time to seek support. Our intake team can help clarify what you're experiencing and whether we're a good fit.`,
    },
    {
      q: "Do you accept insurance for this service?",
      a: "Yes. We accept most major New Jersey insurance plans including Horizon BCBS, Aetna, Cigna, United Healthcare, and Medicaid/NJ FamilyCare. Our team will verify your benefits before your first appointment.",
    },
  ];

  return (
    <>
      <ServiceSchema service={service} />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbs} />
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-base py-12 md:py-20">
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[80px] pointer-events-none" aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-body tracking-[0.15em] uppercase text-ink-muted/60 mb-4">
              Mental Health Services · Elizabeth, NJ
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-ink mb-6 leading-tight">
              {service.h1}
            </h1>
            <p className="font-body text-lg text-ink-muted leading-relaxed mb-8">
              {service.intro}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              <TrustBadge label="Accepting New Patients" />
              <TrustBadge label="Insurance Accepted" />
              <TrustBadge label="Same-Week Appointments" />
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

      {/* Symptoms */}
      <SectionWrapper className="bg-base-warm">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-body tracking-[0.15em] uppercase text-ink-muted/60 mb-3">
              Signs &amp; Symptoms
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink mb-6">
              Common Symptoms of {service.name}
            </h2>
            <ul className="space-y-3">
              {service.symptoms.map((symptom, i) => (
                <li key={i} className="flex gap-3 font-body text-ink-muted">
                  <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
                  <span>{symptom}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-sm border border-rule p-8 shadow-[0_2px_12px_rgba(26,43,60,0.06)]">
            <h3 className="font-display text-xl font-semibold text-ink mb-4">
              Ready to Get Help?
            </h3>
            <p className="font-body text-ink-muted text-sm mb-6">
              Our team is accepting new patients. Same-week appointments are
              often available. Insurance accepted.
            </p>
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
      </SectionWrapper>

      {/* Treatment Approach */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-body tracking-[0.15em] uppercase text-ink-muted/60 mb-3">
            Our Approach
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink mb-6">
            How We Treat {service.name}
          </h2>
          <p className="font-body text-ink-muted leading-relaxed mb-8">
            {service.treatmentApproach}
          </p>
          <p className="font-body text-ink-muted leading-relaxed">
            {service.whyChooseUs}
          </p>
        </div>
      </SectionWrapper>

      {/* Crisis Disclaimer */}
      {service.crisisDisclaimer && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="p-4 bg-amber-50 border border-amber-200/60 rounded-sm">
            <p className="text-sm font-body text-amber-800">
              <strong>Important:</strong> If you are experiencing a mental health
              emergency, please call or text{" "}
              <a href="tel:988" className="font-bold hover:underline">
                988
              </a>{" "}
              (Suicide &amp; Crisis Lifeline) or go to your nearest emergency room.
              Amani Mental Health Clinic is an outpatient practice and does not
              provide emergency or crisis services.
            </p>
          </div>
        </div>
      )}

      {/* Service-specific FAQ */}
      <SectionWrapper className="bg-base-warm">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-body tracking-[0.15em] uppercase text-ink-muted/60 mb-3">
            Questions &amp; Answers
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink mb-8">
            Frequently Asked Questions About {service.name}
          </h2>
          <div className="space-y-6">
            {serviceFaqs.map((faq, i) => (
              <div key={i} className="border-b border-rule pb-6">
                <h3 className="font-display text-lg font-semibold text-ink mb-3">
                  {faq.q}
                </h3>
                <p className="font-body text-ink-muted leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Areas Served Inline */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="font-body text-sm text-ink-muted">
          Serving patients from{" "}
          {locations.map((loc, i) => (
            <span key={loc.slug}>
              <Link
                href={`/locations/${loc.slug}`}
                className="text-primary hover:underline"
              >
                {loc.city}, NJ
              </Link>
              {i < locations.length - 2 ? ", " : i < locations.length - 1 ? " and " : ""}
            </span>
          ))}.
        </p>
      </div>

      {/* Related Services */}
      {related.length > 0 && (
        <SectionWrapper>
          <p className="text-xs font-body tracking-[0.15em] uppercase text-ink-muted/60 mb-3">
            Related Services
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink mb-8">
            You Might Also Be Interested In
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/services/${rel.slug}`}
                className="group block bg-base-warm border border-rule rounded-sm p-6 hover:border-primary/30 hover:shadow-[0_2px_12px_rgba(26,43,60,0.06)] transition-all duration-200"
              >
                <span className="text-2xl block mb-3" aria-hidden="true">{rel.icon}</span>
                <h3 className="font-display font-semibold text-ink group-hover:text-primary transition-colors mb-2">
                  {rel.name}
                </h3>
                <p className="text-sm font-body text-ink-muted line-clamp-2">
                  {rel.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* Content reviewed note */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <p className="text-xs font-body text-ink-muted/50">
          Content reviewed by the clinical team at Amani Mental Health Clinic,
          Elizabeth, NJ. Last reviewed:{" "}
          {new Date().toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
          .
        </p>
      </div>

      {/* Contact Form */}
      <ContactFormSection />
    </>
  );
}
