import type { MetadataRoute } from "next";
import { school } from "@/lib/content";
import { defaultDescription } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: school.name,
    short_name: school.shortName,
    description: defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#f4fbfd",
    theme_color: "#0a3a4a",
    lang: "en",
    icons: [
      {
        src: "/images/logo.png",
        sizes: "471x386",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
