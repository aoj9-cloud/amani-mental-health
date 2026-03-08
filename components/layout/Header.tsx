"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { CLINIC } from "@/lib/constants";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Areas Served" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-rule shadow-[0_1px_8px_rgba(26,43,60,0.06)]"
          : "bg-white border-b border-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="Amani Mental Health — Home">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <span className="text-white font-display font-bold text-sm" aria-hidden="true">A</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-lg font-semibold text-ink leading-tight block">
                {CLINIC.shortName}
              </span>
              <span className="text-xs text-ink-muted font-body leading-tight block">
                Mental Health Clinic
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-body text-ink-muted hover:text-ink transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <PhoneLink
              className="text-sm font-body text-ink-muted hover:text-primary transition-colors"
              showIcon
            />
            <a
              href="#contact-form"
              className="inline-flex items-center px-4 py-2 bg-ink text-white text-sm font-body rounded-sm hover:bg-ink/90 transition-colors"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-ink"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden border-t border-rule py-4">
            <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-2 py-2 text-ink-muted hover:text-ink font-body text-sm transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-rule flex flex-col gap-2">
              <PhoneLink
                className="px-2 py-2 text-ink-muted hover:text-primary font-body text-sm"
                showIcon
              />
              <a
                href="#contact-form"
                className="px-4 py-2 bg-ink text-white text-sm font-body text-center rounded-sm"
                onClick={() => setMobileOpen(false)}
              >
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
