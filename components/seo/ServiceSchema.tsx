import { ServiceData } from "@/types";
import { CLINIC } from "@/lib/constants";

interface ServiceSchemaProps {
  service: ServiceData;
}

export function ServiceSchema({ service }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalTherapy",
        "@id": `${CLINIC.baseUrl}/services/${service.slug}`,
        name: service.name,
        description: service.intro,
        relevantSpecialty: "MentalHealth",
        recognizingAuthority: {
          "@type": "Organization",
          name: "American Psychological Association",
        },
        seriousness: "Chronic",
        possibleTreatment: service.treatmentApproach,
        provider: {
          "@id": `${CLINIC.baseUrl}/#organization`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${CLINIC.baseUrl}/services/${service.slug}/#webpage`,
        url: `${CLINIC.baseUrl}/services/${service.slug}`,
        name: service.metaTitle,
        description: service.metaDescription,
        isPartOf: { "@id": `${CLINIC.baseUrl}/#website` },
        about: { "@id": `${CLINIC.baseUrl}/services/${service.slug}` },
        dateModified: new Date().toISOString().split("T")[0],
        author: {
          "@type": "Person",
          name: "Clinical Team, Amani Mental Health Clinic",
          jobTitle: "Licensed Mental Health Clinicians",
        },
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
