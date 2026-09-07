"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, school } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || !isHome || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-brand/20 bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt={`${school.shortName} logo`}
            width={52}
            height={52}
            className="h-11 w-11 object-contain sm:h-12 sm:w-12"
            priority
          />
          <span className="flex flex-col leading-tight">
            <span
              className={`text-sm font-semibold tracking-tight sm:text-base ${
                solid ? "text-navy" : "text-white"
              }`}
            >
              JEMA Memorial
            </span>
            <span
              className={`text-[10px] font-medium uppercase tracking-[0.14em] sm:text-[11px] ${
                solid ? "text-navy-muted" : "text-white/80"
              }`}
            >
              Pre & Primary School
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  solid
                    ? active
                      ? "text-brand-deep"
                      : "text-navy-muted hover:text-navy"
                    : active
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/admissions"
            className={`ml-2 rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
              solid
                ? "bg-brand-deep text-white hover:bg-navy"
                : "bg-white text-navy hover:bg-brand-soft"
            }`}
          >
            Apply
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={`flex h-10 w-10 items-center justify-center rounded-md lg:hidden ${
            solid ? "text-navy" : "text-white"
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full rounded-full bg-current transition ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-current transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-current transition ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-brand/15 bg-white px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-3 text-base font-medium ${
                  pathname === link.href
                    ? "bg-brand-soft text-brand-deep"
                    : "text-navy"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/admissions"
              className="mt-2 rounded-md bg-brand-deep px-3 py-3 text-center text-base font-semibold text-white"
            >
              Apply Now
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
