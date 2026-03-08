import type { Metadata } from "next";
import { Cormorant, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomBar } from "@/components/layout/MobileBottomBar";
import { CLINIC } from "@/lib/constants";

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(CLINIC.baseUrl),
  title: {
    template: "%s | Amani Mental Health",
    default: "Mental Health Clinic in Elizabeth, NJ | Amani Mental Health",
  },
  description:
    "Compassionate mental health care in Elizabeth, NJ. Treating depression, anxiety, PTSD & more. Accepting new patients. Call today.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: CLINIC.baseUrl,
    siteName: CLINIC.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amani Mental Health Clinic in Elizabeth, NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${cormorantGaramond.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
