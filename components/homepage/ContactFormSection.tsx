import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ContactForm } from "@/components/forms/ContactForm";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { CLINIC } from "@/lib/constants";

export function ContactFormSection() {
  return (
    <SectionWrapper className="bg-base-warm" id="contact-form">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left: Info */}
        <div>
          <p className="text-xs font-body tracking-[0.15em] uppercase text-ink-muted/60 mb-3">
            Get In Touch
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink mb-4">
            Schedule Your First Appointment
          </h2>
          <p className="font-body text-ink-muted leading-relaxed mb-8">
            Taking the first step toward mental health support is an act of
            courage. Our team will respond within one business day to discuss
            your needs and schedule a convenient appointment.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-body font-medium text-ink">Call or Text</p>
                <PhoneLink className="text-primary hover:text-primary-dark transition-colors font-body" />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-body font-medium text-ink">Email</p>
                <a href={`mailto:${CLINIC.email}`} className="text-primary hover:text-primary-dark transition-colors font-body">
                  {CLINIC.email}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-body font-medium text-ink">Location</p>
                <address className="not-italic font-body text-ink-muted text-sm">
                  {CLINIC.address.full}
                </address>
              </div>
            </div>
          </div>

          <div className="p-4 bg-amber-50 border border-amber-200/60 rounded-sm">
            <p className="text-sm font-body text-amber-800 leading-relaxed">
              <strong>Mental health emergency?</strong> Please call or text{" "}
              <a href="tel:988" className="font-bold hover:underline">
                988
              </a>{" "}
              (Suicide &amp; Crisis Lifeline) or go to your nearest emergency room.
            </p>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-white rounded-sm border border-rule p-8 shadow-[0_2px_12px_rgba(26,43,60,0.06)]">
          <ContactForm />
        </div>
      </div>
    </SectionWrapper>
  );
}
