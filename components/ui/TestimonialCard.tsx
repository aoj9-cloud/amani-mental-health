import { TestimonialData } from "@/types";

interface TestimonialCardProps {
  testimonial: TestimonialData;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="bg-base-surface rounded-sm p-8 shadow-[0_2px_12px_rgba(26,43,60,0.06)] border border-rule/50 flex flex-col gap-4">
      <div className="text-primary/30 text-5xl font-display leading-none" aria-hidden="true">
        &ldquo;
      </div>
      <blockquote className="font-body text-ink/80 leading-relaxed -mt-4">
        {testimonial.quote}
      </blockquote>
      <figcaption className="mt-auto pt-4 border-t border-rule">
        <span className="font-body font-medium text-ink block">{testimonial.name}</span>
        <span className="text-sm text-ink-muted block">{testimonial.city}</span>
        <span className="text-xs text-accent mt-1 block">{testimonial.service}</span>
      </figcaption>
    </figure>
  );
}
