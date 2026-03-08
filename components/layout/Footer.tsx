import Link from "next/link";
import { CLINIC } from "@/lib/constants";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

export function Footer() {
  const serviceLinks = services.slice(0, 8);
  const locationLinks = locations;

  return (
    <footer className="bg-ink text-white/80">
      {/* Crisis Banner */}
      <div className="bg-accent/10 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center gap-2 text-sm font-body">
          <span className="font-medium text-accent">Mental Health Crisis?</span>
          <span>Call or text</span>
          <a href="tel:988" className="font-bold text-white hover:text-accent transition-colors">
            988
          </a>
          <span>(Suicide &amp; Crisis Lifeline) or go to your nearest emergency room.</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* NAP Block */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-display font-bold text-xs">A</span>
              </div>
              <span className="font-display text-white font-semibold">{CLINIC.shortName}</span>
            </div>
            <address className="font-body not-italic text-sm leading-relaxed space-y-1">
              <p>{CLINIC.name}</p>
              <p>{CLINIC.address.street}</p>
              <p>
                {CLINIC.address.city}, {CLINIC.address.state} {CLINIC.address.zip}
              </p>
              <p className="pt-2">
                <PhoneLink
                  className="text-white/80 hover:text-white transition-colors"
                  showIcon
                />
              </p>
              <p>
                <a
                  href={`mailto:${CLINIC.email}`}
                  className="hover:text-white transition-colors"
                >
                  {CLINIC.email}
                </a>
              </p>
            </address>
            <div className="mt-4 text-xs space-y-1 text-white/50">
              <p>{CLINIC.hours.weekdays}</p>
              <p>{CLINIC.hours.saturday}</p>
              <p>{CLINIC.hours.sunday}</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-white font-medium mb-4 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-1.5 text-sm font-body">
              {serviceLinks.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="hover:text-white transition-colors text-accent/80">
                  View all services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas Served */}
          <div>
            <h3 className="font-display text-white font-medium mb-4 text-sm uppercase tracking-wider">
              Areas Served
            </h3>
            <ul className="space-y-1.5 text-sm font-body">
              {locationLinks.map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/locations/${location.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {location.city}, {location.state}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust & Legal */}
          <div>
            <h3 className="font-display text-white font-medium mb-4 text-sm uppercase tracking-wider">
              Trust & Compliance
            </h3>
            <div className="space-y-3 text-sm font-body">
              <div className="flex items-center gap-2">
                <span className="text-accent">✓</span>
                <span>Licensed & Insured in NJ</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent">✓</span>
                <span>HIPAA Compliant Practice</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent">✓</span>
                <span>Insurance Accepted</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent">✓</span>
                <span>NPI: {CLINIC.npi}</span>
              </div>
            </div>
            <div className="mt-6 space-y-1.5 text-sm font-body">
              <Link href="/about" className="block hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="block hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="/privacy-policy" className="block hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-body">
          <p>
            © {new Date().getFullYear()} {CLINIC.name}. All rights reserved.
          </p>
          <p>
            The information on this website is for general informational purposes only and does not
            constitute medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
