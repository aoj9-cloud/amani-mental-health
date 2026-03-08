"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { services } from "@/data/services";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  async function onSubmit(data: ContactFormData) {
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
        reset();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-semibold text-ink mb-2">
          Thank You
        </h3>
        <p className="font-body text-ink-muted">
          We&apos;ve received your message and will reach out within one business
          day. If you need immediate support, please call us at{" "}
          <a href="tel:+19085550192" className="text-primary hover:underline">
            (908) 555-0192
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
      noValidate
      aria-label="Contact form"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-body font-medium text-ink mb-1.5"
          >
            Full Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            className={`w-full px-4 py-2.5 border rounded-sm font-body text-ink bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow ${
              errors.name ? "border-red-400" : "border-rule"
            }`}
            placeholder="Jane Smith"
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name", { required: "Please enter your name" })}
          />
          {errors.name && (
            <p id="name-error" className="text-xs text-red-500 mt-1 font-body" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-body font-medium text-ink mb-1.5"
          >
            Phone Number <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className={`w-full px-4 py-2.5 border rounded-sm font-body text-ink bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow ${
              errors.phone ? "border-red-400" : "border-rule"
            }`}
            placeholder="(908) 555-0000"
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone", {
              required: "Please enter your phone number",
              pattern: {
                value: /^[\d\s\-+().]{7,}$/,
                message: "Please enter a valid phone number",
              },
            })}
          />
          {errors.phone && (
            <p id="phone-error" className="text-xs text-red-500 mt-1 font-body" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-body font-medium text-ink mb-1.5"
        >
          Email Address <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className={`w-full px-4 py-2.5 border rounded-sm font-body text-ink bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow ${
            errors.email ? "border-red-400" : "border-rule"
          }`}
          placeholder="jane@example.com"
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email", {
            required: "Please enter your email address",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a valid email address",
            },
          })}
        />
        {errors.email && (
          <p id="email-error" className="text-xs text-red-500 mt-1 font-body" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="service"
          className="block text-sm font-body font-medium text-ink mb-1.5"
        >
          Service of Interest
        </label>
        <select
          id="service"
          className="w-full px-4 py-2.5 border border-rule rounded-sm font-body text-ink bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
          {...register("service")}
        >
          <option value="">Select a service (optional)</option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Not sure">Not sure / General inquiry</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-body font-medium text-ink mb-1.5"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-4 py-2.5 border border-rule rounded-sm font-body text-ink bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow resize-none"
          placeholder="Briefly describe what brings you in or any questions you have..."
          {...register("message")}
        />
      </div>

      <p className="text-xs font-body text-ink-muted/60">
        Your information is confidential and HIPAA-protected. We will never sell
        or share your personal information.
      </p>

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-3 bg-ink text-white font-body font-medium rounded-sm hover:bg-ink/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-base"
      >
        {submitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
