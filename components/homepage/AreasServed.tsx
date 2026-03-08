import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { locations } from "@/data/locations";

export function AreasServed() {
  return (
    <SectionWrapper className="bg-base-warm">
      <div className="text-center mb-12">
        <p className="text-xs font-body tracking-[0.15em] uppercase text-ink-muted/60 mb-3">
          Service Area
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink mb-4">
          Serving Elizabeth, NJ &amp; Surrounding Communities
        </h2>
        <p className="font-body text-ink-muted max-w-2xl mx-auto">
          Amani Mental Health Clinic is located in Elizabeth, NJ and proudly
          serves patients from across Union and Essex County — in person and via
          telehealth throughout New Jersey.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {locations.map((location) => (
          <Link
            key={location.slug}
            href={`/locations/${location.slug}`}
            className="group flex items-center justify-between bg-white border border-rule rounded-sm p-5 hover:border-primary/30 hover:shadow-[0_2px_12px_rgba(26,43,60,0.06)] transition-all duration-200"
          >
            <div>
              <h3 className="font-display font-semibold text-ink group-hover:text-primary transition-colors">
                {location.city}, {location.state}
              </h3>
              <p className="text-sm font-body text-ink-muted mt-0.5">
                {location.distanceNote}
              </p>
            </div>
            <span
              className="text-ink-muted/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="font-body text-sm text-ink-muted">
          Not in these areas?{" "}
          <Link href="/contact" className="text-primary hover:underline">
            Contact us about telehealth availability
          </Link>{" "}
          throughout New Jersey.
        </p>
      </div>
    </SectionWrapper>
  );
}
