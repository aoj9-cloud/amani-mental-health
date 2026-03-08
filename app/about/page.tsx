import type { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ContactFormSection } from "@/components/homepage/ContactFormSection";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { CLINIC } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Amani Mental Health Clinic | Elizabeth, NJ",
  description:
    "Meet the compassionate team at Amani Mental Health Clinic in Elizabeth, NJ. Licensed therapists & psychiatrists serving Union & Essex County.",
  alternates: {
    canonical: `${CLINIC.baseUrl}/about`,
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

const team = [
  {
    name: "Dr. Fatima Osei, PhD",
    title: "Clinical Director & Licensed Psychologist",
    credentials: "PhD in Clinical Psychology · License #NJ-34892",
    bio: "Dr. Osei brings over 15 years of clinical experience specializing in trauma, depression, and culturally responsive mental health care. A graduate of Rutgers University, she has worked extensively with immigrant communities across Union and Essex County and holds certification in EMDR therapy.",
    specialty: "Trauma & PTSD, Depression, Cultural Competency",
  },
  {
    name: "Marcus Williams, LCSW",
    title: "Lead Therapist — Mood Disorders",
    credentials: "Licensed Clinical Social Worker · License #NJ-28741",
    bio: "Marcus specializes in depression, bipolar disorder, and grief counseling. With a background in community mental health serving Newark and Elizabeth's urban communities, he brings a strength-based, solution-focused approach to every client relationship.",
    specialty: "Depression, Bipolar Disorder, Grief & Loss",
  },
  {
    name: "Dr. Priya Mehta, MD",
    title: "Psychiatrist — Medication Management",
    credentials: "Board-Certified Psychiatrist · License #NJ-MD-19823",
    bio: "Dr. Mehta is a board-certified psychiatrist with specialized training in psychopharmacology for mood disorders, anxiety, ADHD, and psychotic disorders. She collaborates closely with our therapy team to provide integrated psychiatric care.",
    specialty: "Medication Management, Bipolar, Psychosis",
  },
  {
    name: "Sofia Mendez, LPC",
    title: "Licensed Professional Counselor — Anxiety & OCD",
    credentials: "Licensed Professional Counselor · License #NJ-19034",
    bio: "Sofia is an OCD and anxiety specialist trained in Exposure and Response Prevention (ERP) through the International OCD Foundation. Bilingual in English and Spanish, she serves Elizabeth's diverse community with evidence-based, culturally sensitive care.",
    specialty: "OCD, Anxiety, Bilingual (English/Spanish)",
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbs} />
      </div>

      {/* Hero */}
      <section className="bg-base py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-body tracking-[0.15em] uppercase text-ink-muted/60 mb-4">
            Our Story
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-ink mb-6 leading-tight">
            About Amani Mental Health Clinic
          </h1>
          <p className="font-body text-lg text-ink-muted leading-relaxed max-w-3xl mb-8">
            Amani — meaning{" "}
            <em className="font-display">&ldquo;peace&rdquo;</em> in Swahili —
            was founded on a simple conviction: every person deserves access to
            compassionate, high-quality mental health care, regardless of their
            background, insurance status, or zip code. Located in Elizabeth,
            NJ, we serve one of New Jersey&apos;s most culturally rich and
            economically diverse communities.
          </p>
          <div className="flex flex-wrap gap-2">
            <TrustBadge label="Licensed in New Jersey" />
            <TrustBadge label="HIPAA Compliant" />
            <TrustBadge label="Insurance Accepted" />
            <TrustBadge label="Bilingual Services" />
          </div>
        </div>
      </section>

      {/* Mission */}
      <SectionWrapper className="bg-base-warm">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-body tracking-[0.15em] uppercase text-ink-muted/60 mb-3">
            Our Mission
          </p>
          <blockquote className="font-display text-2xl sm:text-3xl font-semibold text-ink leading-relaxed">
            &ldquo;To provide evidence-based, culturally responsive mental
            health care to every member of our community — with compassion,
            integrity, and clinical excellence.&rdquo;
          </blockquote>
          <p className="font-body text-ink-muted mt-6 leading-relaxed">
            We believe mental health care should feel safe, non-judgmental, and
            effective. That&apos;s why we only hire clinicians who combine
            advanced training with genuine empathy — and why we constantly
            invest in supervision, continuing education, and evidence-based
            practice to ensure our clients receive the best possible care.
          </p>
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper>
        <p className="text-xs font-body tracking-[0.15em] uppercase text-ink-muted/60 mb-3">
          Our Clinical Team
        </p>
        <h2 className="font-display text-3xl font-semibold text-ink mb-10">
          Meet Our Clinicians
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white border border-rule rounded-sm p-8 shadow-[0_2px_12px_rgba(26,43,60,0.06)]"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="font-display text-2xl font-semibold text-primary">
                  {member.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold text-ink mb-1">
                {member.name}
              </h3>
              <p className="text-sm font-body text-primary mb-1">{member.title}</p>
              <p className="text-xs font-body text-ink-muted/60 mb-4">
                {member.credentials}
              </p>
              <p className="font-body text-sm text-ink-muted leading-relaxed mb-4">
                {member.bio}
              </p>
              <p className="text-xs font-body text-ink-muted">
                <span className="font-medium text-ink">Specialties:</span>{" "}
                {member.specialty}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper className="bg-base-warm">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-body tracking-[0.15em] uppercase text-ink-muted/60 mb-3">
            What We Believe
          </p>
          <h2 className="font-display text-3xl font-semibold text-ink mb-8">
            Our Clinical Values
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Evidence-Based Care",
                body: "We use only treatments with strong empirical support — CBT, DBT, EMDR, ERP, IPT, and more. We stay current with research and apply it directly to clinical practice.",
              },
              {
                title: "Cultural Humility",
                body: "Elizabeth is one of NJ's most diverse cities. We approach every client with respect for their cultural background, values, and lived experience — never imposing a one-size-fits-all framework.",
              },
              {
                title: "Collaborative Partnership",
                body: "You are the expert on your own life. We bring clinical expertise; you bring self-knowledge. Great therapy is a collaboration, not something done to you.",
              },
              {
                title: "Accessibility",
                body: "We accept most insurance plans, offer sliding-scale fees, and provide telehealth to remove geographic barriers. Mental health care should be available to everyone.",
              },
            ].map((value) => (
              <div key={value.title} className="flex gap-4">
                <span className="text-accent mt-1 flex-shrink-0 text-lg">✦</span>
                <div>
                  <h3 className="font-display font-semibold text-ink text-lg mb-1">
                    {value.title}
                  </h3>
                  <p className="font-body text-ink-muted leading-relaxed">
                    {value.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <ContactFormSection />
    </>
  );
}
