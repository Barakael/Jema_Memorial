import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { school } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${school.shortName} Pre & Primary School`,
    template: `%s · ${school.shortName}`,
  },
  description: `${school.name} — English-medium day school in ${school.location.full}. Motto: ${school.motto}. Registration ${school.registration}.`,
  keywords: [
    "JEMA Memorial",
    "Masasi school",
    "Mtwara primary school",
    "English medium",
    "pre primary Tanzania",
  ],
  icons: {
    icon: [{ url: "/images/logo.png", type: "image/png" }],
    apple: [{ url: "/images/logo.png", type: "image/png" }],
    shortcut: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="h-full">
      <body className="flex min-h-full flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
