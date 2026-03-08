"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { faqs } from "@/data/faq";
import { FAQSchema } from "@/components/seo/FAQSchema";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="faq">
      <FAQSchema faqs={faqs} />
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-body tracking-[0.15em] uppercase text-ink-muted/60 mb-3">
            Common Questions
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-body text-ink-muted">
            Have more questions? Call us at{" "}
            <a
              href="tel:+19085550192"
              className="text-primary hover:underline"
            >
              (908) 555-0192
            </a>{" "}
            or{" "}
            <a href="#contact-form" className="text-primary hover:underline">
              send us a message
            </a>
            .
          </p>
        </div>

        <dl className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-rule rounded-sm overflow-hidden"
            >
              <dt>
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left font-body font-medium text-ink hover:bg-base-warm transition-colors"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  aria-expanded={openIndex === index}
                >
                  <span>{faq.question}</span>
                  <svg
                    className={`w-4 h-4 flex-shrink-0 text-ink-muted transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </dt>
              <dd
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-5 font-body text-ink-muted leading-relaxed border-t border-rule pt-4">
                  {faq.answer}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </SectionWrapper>
  );
}
