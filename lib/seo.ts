import type { Metadata } from "next";
import { school } from "@/lib/content";

/** Set NEXT_PUBLIC_SITE_URL in production (e.g. https://www.jemamemorial.ac.tz). */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

export const siteName = `${school.shortName} Pre & Primary School`;

export const defaultDescription = `${school.name} is a registered English-medium day school in ${school.location.full}, near NHC. Motto: ${school.motto}. Registration ${school.registration}.`;

export const defaultOgImage = "/images/pupils-group1.png";

export const seoKeywords = [
  "JEMA Memorial",
  "JEMA Memorial Pre and Primary School",
  "Masasi school",
  "Masasi primary school",
  "Mtwara Region school",
  "English medium school Tanzania",
  "pre primary school Masasi",
  "Napupa Ward school",
  "school near NHC Masasi",
  "admissions Masasi",
] as const;

export const routes = [
  { path: "/", label: "Home", changeFrequency: "weekly" as const, priority: 1 },
  {
    path: "/about",
    label: "About",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    path: "/academics",
    label: "Academics",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    path: "/admissions",
    label: "Admissions",
    changeFrequency: "weekly" as const,
    priority: 0.9,
  },
  {
    path: "/contact",
    label: "Contact",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  },
] as const;

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  image = defaultOgImage,
  noIndex = false,
}: PageSeoInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: "en_TZ",
      type: "website",
      images: [
        {
          url: imageUrl,
          alt: `${school.shortName} — ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function schoolJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "School",
    "@id": `${siteUrl}/#school`,
    name: school.name,
    alternateName: school.shortName,
    description: defaultDescription,
    url: siteUrl,
    logo: absoluteUrl("/images/logo.png"),
    image: absoluteUrl(defaultOgImage),
    email: school.email,
    telephone: school.phones,
    slogan: school.motto,
    foundingLocation: {
      "@type": "Place",
      name: school.location.full,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: `${school.location.landmark}, ${school.location.ward}`,
      addressLocality: school.location.council,
      addressRegion: school.location.region,
      addressCountry: "TZ",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: school.location.region,
    },
    numberOfStudents: school.enrolment,
    employee: [
      {
        "@type": "Person",
        name: school.director.name,
        jobTitle: school.director.title,
      },
      {
        "@type": "Person",
        name: school.headTeacher.name,
        jobTitle: school.headTeacher.title,
      },
    ],
    openingHours: "Mo-Fr 07:30-15:30",
    sameAs: [],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: siteName,
    description: defaultDescription,
    publisher: { "@id": `${siteUrl}/#school` },
    inLanguage: "en",
  };
}
