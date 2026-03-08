import Link from "next/link";
import { ServiceData } from "@/types";

interface ServiceCardProps {
  service: ServiceData;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block bg-white border border-rule border-t-[3px] border-t-rule hover:border-t-primary rounded-sm p-6 shadow-[0_2px_12px_rgba(26,43,60,0.06)] hover:shadow-[0_6px_24px_rgba(26,43,60,0.10)] transition-all duration-200 hover:-translate-y-0.5"
      aria-label={`Learn about ${service.name}`}
    >
      <div className="flex items-start gap-4 mb-3">
        <span className="text-2xl flex-shrink-0" aria-hidden="true">
          {service.icon}
        </span>
        <span className="text-xs font-body text-ink-muted/60 pt-1">
          0{index + 1}
        </span>
      </div>
      <h3 className="font-display text-lg font-semibold text-ink group-hover:text-primary transition-colors mb-2">
        {service.name}
      </h3>
      <p className="text-sm font-body text-ink-muted leading-relaxed">
        {service.shortDescription}
      </p>
      <span className="inline-flex items-center gap-1 mt-4 text-xs font-body text-primary opacity-0 group-hover:opacity-100 transition-opacity">
        Learn more →
      </span>
    </Link>
  );
}
