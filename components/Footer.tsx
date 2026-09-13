import Image from "next/image";
import Link from "next/link";
import { navLinks, school } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 80% 0%, rgba(94,200,219,0.45), transparent 60%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
            />
            <div>
              <p className="text-lg font-semibold tracking-tight">
                {school.shortName}
              </p>
              <p className="text-xs uppercase tracking-[0.16em] text-brand">
                {school.motto}
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75">
            English-medium pre & primary education in {school.location.full},
            near NHC. Registration {school.registration}.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Explore
          </p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>{school.location.full}</li>
            {school.phones.map((phone) => (
              <li key={phone}>
                <a href={`tel:${phone}`} className="hover:text-white">
                  {phone}
                </a>
              </li>
            ))}

            <li>
            P O. BOX 434, Masasi, Tanzania
            </li>
            <li>

              <a
                href={`mailto:${school.email}`}
                className="break-all hover:text-white"
              >
                {school.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10 px-5 py-5 text-center text-xs text-white/55 sm:px-8">
        © {new Date().getFullYear()} {school.name}. All rights reserved.
      </div>
    </footer>
  );
}
