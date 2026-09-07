import Image from "next/image";
import Link from "next/link";
import { school } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <Image
        src="/images/pupils-group.png"
        alt="JEMA Memorial pupils in school tracksuits"
        fill
        priority
        className="animate-hero-zoom object-cover object-[center_55%]"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,58,74,0.62) 0%, rgba(10,58,74,0.35) 42%, rgba(10,58,74,0.15) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/45 via-transparent to-transparent" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:justify-center lg:pb-24">
        <div className="max-w-3xl">
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.28em] text-brand sm:text-sm">
            {school.motto}
          </p>
          <h1 className="animate-fade-up delay-1 mt-4 text-[2.35rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            JEMA Memorial
            <span className="mt-2 block text-[0.72em] font-medium text-white/90">
              Pre & Primary School
            </span>
          </h1>
          <p className="animate-fade-up delay-2 mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            A caring English-medium school in Masasi where children learn, grow,
            and prepare for the future with confidence.
          </p>
          <div className="animate-fade-up delay-3 mt-8 flex flex-wrap gap-3">
            <Link
              href="/admissions"
              className="rounded-md bg-brand px-6 py-3 text-sm font-semibold text-navy transition hover:bg-white"
            >
              Apply for Admission
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
