import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <SectionWrapper>
      <div className="text-center mb-12">
        <p className="text-xs font-body tracking-[0.15em] uppercase text-ink-muted/60 mb-3">
          Patient Experiences
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink mb-4">
          What Our Patients Say
        </h2>
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="flex gap-0.5" aria-label="4.9 out of 5 stars">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-amber-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="font-body font-medium text-ink">4.9</span>
          <span className="text-ink-muted text-sm font-body">· 47 reviews</span>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.slice(0, 3).map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>

      <p className="text-center text-xs text-ink-muted/60 font-body mt-6">
        * Names and identifying details have been changed to protect patient privacy.
        Reviews are representative patient experiences.
      </p>
    </SectionWrapper>
  );
}
