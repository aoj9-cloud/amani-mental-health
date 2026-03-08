import type { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ContactForm } from "@/components/forms/ContactForm";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CLINIC } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Amani Mental Health Clinic Elizabeth NJ",
  description:
    "Schedule an appointment at Amani Mental Health Clinic in Elizabeth, NJ. Call or complete our form. Accepting most insurance plans. Same-week appointments available.",
  alternates: {
    canonical: `${CLINIC.baseUrl}/contact`,
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbs} />
      </div>

      <section className="bg-base py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-body tracking-[0.15em] uppercase text-ink-muted/60 mb-4">
            Get In Touch
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-ink mb-4 leading-tight">
            Contact Amani Mental Health Clinic
          </h1>
          <p className="font-body text-lg text-ink-muted max-w-2xl">
            We&apos;re accepting new patients. Reach out by phone, email, or
            the contact form below — we respond within one business day.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink mb-6">
                Contact Information
              </h2>
              <div className="space-y-4 font-body text-sm">
                <div>
                  <p className="font-medium text-ink mb-0.5">Phone</p>
                  <PhoneLink className="text-primary hover:text-primary-dark transition-colors" />
                </div>
                <div>
                  <p className="font-medium text-ink mb-0.5">Email</p>
                  <a
                    href={`mailto:${CLINIC.email}`}
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    {CLINIC.email}
                  </a>
                </div>
                <div>
                  <p className="font-medium text-ink mb-0.5">Address</p>
                  <address className="not-italic text-ink-muted">
                    {CLINIC.address.street}
                    <br />
                    {CLINIC.address.city}, {CLINIC.address.state}{" "}
                    {CLINIC.address.zip}
                  </address>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-ink mb-4">
                Office Hours
              </h3>
              <div className="space-y-1 font-body text-sm text-ink-muted">
                <p>{CLINIC.hours.weekdays}</p>
                <p>{CLINIC.hours.saturday}</p>
                <p>{CLINIC.hours.sunday}</p>
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-ink mb-4">
                Insurance
              </h3>
              <p className="font-body text-sm text-ink-muted mb-3">
                We accept most major NJ insurance plans including:
              </p>
              <ul className="space-y-1 text-sm font-body text-ink-muted">
                {[
                  "Horizon Blue Cross Blue Shield",
                  "Aetna",
                  "Cigna",
                  "United Healthcare",
                  "Medicaid / NJ FamilyCare",
                  "And more — call to verify",
                ].map((ins) => (
                  <li key={ins} className="flex items-center gap-2">
                    <span className="text-accent">✓</span>
                    {ins}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-amber-50 border border-amber-200/60 rounded-sm">
              <p className="text-sm font-body text-amber-800">
                <strong>Crisis?</strong> Call or text{" "}
                <a href="tel:988" className="font-bold hover:underline">
                  988
                </a>{" "}
                or go to your nearest ER. Amani is an outpatient practice only.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white border border-rule rounded-sm p-8 shadow-[0_2px_12px_rgba(26,43,60,0.06)]">
            <h2 className="font-display text-2xl font-semibold text-ink mb-6">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
