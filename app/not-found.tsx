import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export default function NotFound() {
  return (
    <SectionWrapper>
      <div className="max-w-xl mx-auto text-center">
        <p className="font-display text-8xl font-semibold text-primary/20 mb-4">404</p>
        <h1 className="font-display text-3xl font-semibold text-ink mb-4">
          Page Not Found
        </h1>
        <p className="font-body text-ink-muted mb-8">
          The page you&apos;re looking for doesn&apos;t exist. It may have moved
          or the URL may be incorrect.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-ink text-white font-body font-medium rounded-sm hover:bg-ink/90 transition-colors"
          >
            Go to Homepage
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 border border-rule text-ink font-body font-medium rounded-sm hover:bg-base-warm transition-colors"
          >
            View Services
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-rule text-ink font-body font-medium rounded-sm hover:bg-base-warm transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
