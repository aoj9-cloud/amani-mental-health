import type { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CLINIC } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Amani Mental Health Clinic",
  description:
    "Privacy policy for Amani Mental Health Clinic in Elizabeth, NJ. Learn how we protect your personal and health information under HIPAA.",
  alternates: {
    canonical: `${CLINIC.baseUrl}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <SectionWrapper>
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-4xl font-semibold text-ink mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm font-body text-ink-muted mb-8">
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <div className="font-body text-ink-muted leading-relaxed space-y-8">
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-3">
              1. Introduction
            </h2>
            <p>
              {CLINIC.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) is committed to protecting your privacy and
              the security of your personal and health information. This Privacy
              Policy explains how we collect, use, and protect information
              gathered through our website at{" "}
              <a href={CLINIC.baseUrl} className="text-primary hover:underline">
                {CLINIC.baseUrl}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-3">
              2. HIPAA Notice
            </h2>
            <p>
              As a healthcare provider, Amani Mental Health Clinic is a covered
              entity under the Health Insurance Portability and Accountability
              Act (HIPAA). Protected Health Information (PHI) collected in the
              course of providing clinical services is governed by our Notice of
              Privacy Practices, which is provided to all patients at the start
              of treatment.
            </p>
            <p className="mt-3">
              Information submitted through our website contact form is
              treated as confidential but does not constitute a
              provider-patient relationship or protected health information
              until you become a patient of the practice.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-3">
              3. Information We Collect
            </h2>
            <p>We may collect the following information through our website:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Name, email address, and phone number (via contact form)</li>
              <li>
                General inquiry information you choose to share in message fields
              </li>
              <li>
                Technical data including IP address, browser type, and pages
                visited (via analytics)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-3">
              4. How We Use Your Information
            </h2>
            <p>We use information collected through this website to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Respond to appointment inquiries and contact form submissions</li>
              <li>Improve our website and services</li>
              <li>
                Comply with applicable legal and regulatory obligations
              </li>
            </ul>
            <p className="mt-3">
              We do not sell, rent, or share your personal information with
              third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-3">
              5. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your information from unauthorized access, disclosure,
              alteration, or destruction. Our website uses SSL/TLS encryption
              for all data transmission.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-3">
              6. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy or our data
              practices, please contact us:
            </p>
            <address className="not-italic mt-3 space-y-1">
              <p>{CLINIC.name}</p>
              <p>{CLINIC.address.full}</p>
              <p>
                Email:{" "}
                <a href={`mailto:${CLINIC.email}`} className="text-primary hover:underline">
                  {CLINIC.email}
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href={`tel:${CLINIC.phoneTel}`} className="text-primary hover:underline">
                  {CLINIC.phone}
                </a>
              </p>
            </address>
          </section>
        </div>
      </div>
    </SectionWrapper>
  );
}
