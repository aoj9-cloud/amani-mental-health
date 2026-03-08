import { TrustBadge } from "@/components/ui/TrustBadge";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { CLINIC } from "@/lib/constants";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-base py-16 md:py-24 lg:py-32"
      aria-label="Welcome to Amani Mental Health Clinic"
    >
      {/* Breath background shapes */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left: Editorial Headline (60%) */}
          <div className="lg:col-span-3">
            {/* Section label */}
            <p
              className="text-xs font-body tracking-[0.15em] uppercase text-ink-muted mb-6 animate-fade-in-up"
              style={{ animationDelay: "0ms" }}
            >
              Mental Health Care · Elizabeth, NJ
            </p>

            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-ink leading-tight mb-6 animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              Mental Health Clinic
              <br />
              <span className="text-primary">in Elizabeth, NJ</span>
            </h1>

            <p
              className="font-body text-lg text-ink-muted leading-relaxed mb-8 max-w-xl animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              Compassionate, evidence-based mental health care for depression,
              anxiety, PTSD, ADHD, bipolar disorder, and more. Serving Elizabeth
              and surrounding New Jersey communities. Accepting new patients.
            </p>

            {/* Trust badges */}
            <div
              className="flex flex-wrap gap-2 mb-8 animate-fade-in-up"
              style={{ animationDelay: "350ms" }}
            >
              <TrustBadge label="Accepting New Patients" />
              <TrustBadge label="Insurance Accepted" />
              <TrustBadge label="Same-Week Appointments" />
              <TrustBadge label="Telehealth Available" />
            </div>

            {/* Dual CTA */}
            <div
              className="flex flex-col sm:flex-row gap-3 animate-fade-in-up"
              style={{ animationDelay: "350ms" }}
            >
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center px-6 py-3 bg-ink text-white font-body font-medium rounded-sm hover:bg-ink/90 transition-colors text-base"
              >
                Book an Appointment
              </a>
              <PhoneLink
                className="inline-flex items-center justify-center px-6 py-3 border border-ink text-ink font-body font-medium rounded-sm hover:bg-base-warm transition-colors text-base"
                showIcon
              />
            </div>
          </div>

          {/* Right: Quick Contact Card (40%) */}
          <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <div className="bg-white rounded-sm shadow-[0_8px_32px_rgba(26,43,60,0.10)] border border-rule p-8">
              <h2 className="font-display text-xl font-semibold text-ink mb-1">
                Ready to Get Started?
              </h2>
              <p className="text-sm font-body text-ink-muted mb-6">
                Call us or complete the form below — our team responds within one business day.
              </p>

              {/* Hours */}
              <div className="space-y-2 mb-6 text-sm font-body">
                <div className="flex items-center gap-2 text-ink-muted">
                  <span className="text-accent text-base">●</span>
                  <span>{CLINIC.hours.weekdays}</span>
                </div>
                <div className="flex items-center gap-2 text-ink-muted">
                  <span className="text-accent text-base">●</span>
                  <span>{CLINIC.hours.saturday}</span>
                </div>
              </div>

              <div className="space-y-3">
                <PhoneLink
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-ink text-white font-body font-medium rounded-sm hover:bg-ink/90 transition-colors text-sm"
                  showIcon
                />
                <a
                  href="#contact-form"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-primary text-primary font-body font-medium rounded-sm hover:bg-primary hover:text-white transition-colors text-sm"
                >
                  Complete Contact Form
                </a>
              </div>

              <p className="text-xs text-ink-muted/60 mt-4 text-center font-body">
                All inquiries are confidential · HIPAA compliant
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
