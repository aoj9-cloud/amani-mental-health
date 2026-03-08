import { CLINIC } from "@/lib/constants";
import { services } from "@/data/services";
import { faqs } from "@/data/faq";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "MedicalOrganization", "MedicalClinic"],
        "@id": `${CLINIC.baseUrl}/#organization`,
        name: CLINIC.name,
        url: CLINIC.baseUrl,
        telephone: CLINIC.phoneTel,
        email: CLINIC.email,
        description:
          "Amani Mental Health Clinic provides compassionate, evidence-based mental health treatment in Elizabeth, NJ. We treat depression, anxiety, PTSD, ADHD, bipolar disorder, and more. Accepting new patients. Insurance accepted.",
        image: `${CLINIC.baseUrl}/og-image.jpg`,
        logo: `${CLINIC.baseUrl}/logo.svg`,
        address: {
          "@type": "PostalAddress",
          streetAddress: CLINIC.address.street,
          addressLocality: CLINIC.address.city,
          addressRegion: CLINIC.address.state,
          postalCode: CLINIC.address.zip,
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: CLINIC.geo.latitude,
          longitude: CLINIC.geo.longitude,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday"],
            opens: "09:00",
            closes: "14:00",
          },
        ],
        areaServed: [
          {
            "@type": "City",
            name: "Elizabeth",
            sameAs: "https://www.wikidata.org/wiki/Q507458",
          },
          { "@type": "City", name: "Linden" },
          { "@type": "City", name: "Westfield" },
          { "@type": "City", name: "Clark" },
          { "@type": "City", name: "Newark" },
          { "@type": "City", name: "Jersey City" },
        ],
        priceRange: "$$",
        currenciesAccepted: "USD",
        paymentAccepted: "Insurance, Cash, Credit Card",
        medicalSpecialty: ["Psychiatry", "Psychology", "Counseling"],
        availableService: services.map((s) => ({
          "@type": "MedicalTherapy",
          name: s.name,
          description: s.shortDescription,
        })),
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "47",
          bestRating: "5",
        },
        sameAs: [
          CLINIC.social.facebook,
          CLINIC.social.instagram,
          CLINIC.social.google,
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${CLINIC.baseUrl}/#website`,
        url: CLINIC.baseUrl,
        name: CLINIC.name,
        publisher: { "@id": `${CLINIC.baseUrl}/#organization` },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
