import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ServiceCard } from "@/components/services/ServiceCard";
import { services } from "@/data/services";
import Link from "next/link";

export function ServicesGrid() {
  return (
    <SectionWrapper className="bg-base-warm" id="services">
      <div className="text-center mb-12">
        <p className="text-xs font-body tracking-[0.15em] uppercase text-ink-muted/60 mb-3">
          What We Treat
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink mb-4">
          Mental Health Services We Offer
        </h2>
        <p className="font-body text-ink-muted max-w-2xl mx-auto">
          Our licensed therapists and psychiatrists specialize in evidence-based
          treatment for the full spectrum of mental health conditions. Every
          treatment plan is individualized to your unique needs.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
        {services.map((service, index) => (
          <ServiceCard key={service.slug} service={service} index={index} />
        ))}
      </div>

      <div className="text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 font-body text-primary hover:text-primary-dark transition-colors border-b border-primary pb-0.5"
        >
          View all mental health services
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </SectionWrapper>
  );
}
