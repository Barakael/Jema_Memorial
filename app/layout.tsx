import type { Metadata, Viewport } from "next";
import Script from "next/script";
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
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a3a4a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="h-full">
      <body className="flex min-h-full flex-col antialiased">
        <Script
          id="status-bar-surface"
          strategy="beforeInteractive"
        >{`(function(){try{var home=location.pathname==="/";var solid=!home||scrollY>24;var c=solid?"#ffffff":"#0a3a4a";document.documentElement.style.backgroundColor=c;var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",c);}catch(e){}})();`}</Script>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
