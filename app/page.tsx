import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import {
  mission,
  performance,
  school,
  values,
  vision,
  welcome,
  whyJema,
} from "@/lib/content";
import { createPageMetadata, defaultDescription, siteName } from "@/lib/seo";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: siteName,
    description: defaultDescription,
    path: "/",
  }),
  title: {
    absolute: siteName,
  },
};

const highlights = [
  { label: "Registration", value: school.registration },
  { label: "Pupils", value: String(school.enrolment) },
  { label: "Staff", value: String(school.staff.total) },
  { label: "Hours", value: school.hours },
] as const;

export default function HomePage() {
  return (
    <>
      <Hero />

    

      <section className="atmosphere-section px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <FadeIn>
            <SectionHeading
              eyebrow="Welcome to jema Memorial school"
              title="Where every child can learn and grow"
              description={welcome}
            />
            <p className="mt-5 text-sm text-navy-muted">{school.type}</p>
            <Link
              href="/about"
              className="mt-7 inline-flex text-sm font-semibold text-brand-deep transition hover:text-navy"
            >
              Our story →
            </Link>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/Cheering.jpg"
                alt="JEMA Memorial pupils gathered at school"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white px-5  sm:px-8 ">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <SectionHeading
              eyebrow="Why families choose us"
              title="We provide a clear path from early years to primary"
             
            />
          </FadeIn>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyJema.map((item, i) => (
              <FadeIn key={item} delay={i * 50}>
                <li>
                  <span className="mb-3 block h-1 w-8 bg-brand" />
                  <p className="text-base leading-relaxed text-navy">{item}</p>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      <section className="atmosphere px-5 mt-8 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <FadeIn>
              <SectionHeading
                eyebrow="Our core values"
                title="we believe integrity, respect, excellence, care & Safety teamwork and inclusiveness"
                // description={vision}
              />
             <div className="grid gap-8 border-t border-brand/20 pt-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.slice(0, 6).map((value, i) => (
              <FadeIn key={value.title} delay={i * 40}>
                <h3 className="text-lg font-semibold text-navy">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-muted">
                  {value.description}
                </p>
              </FadeIn>
            ))}
          </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="relative aspect-[4/3.5] overflow-hidden">
                <Image
                  src="/images/pupils-cheer1.png"
                  alt="Pupils cheering at JEMA Memorial"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-brand-soft px-5 sm:px-8 mb-6 ">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.2fr_auto]">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-deep">
              Recent results
            </p>
            <p className="mt-3 text-2xl font-semibold leading-snug text-navy sm:text-3xl">
              {performance.summary}
            </p>
            <p className="mt-2 text-sm text-navy-muted">
              {performance.date} monthly assessment · {school.enrolment} pupils
            </p>
          </FadeIn>
          <FadeIn delay={80}>
            <Link
              href="/academics"
              className="inline-flex rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-deep"
            >
              View academics
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="relative px-5 py-20 sm:px-8 sm:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/staff-team.jpg"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy/75" />
        </div>
        <div className="relative mx-auto max-w-2xl text-center">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Admissions
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Enrol your child at JEMA Memorial
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80">
              Classes from Baby through Grade Two. Grade Three begins next
              academic year. School day {school.hours}.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/admissions"
                className="rounded-md bg-brand px-6 py-3 text-sm font-semibold text-navy hover:bg-white"
              >
                Admissions & fees
              </Link>
              <Link
                href="/contact"
                className="rounded-md border border-white/35 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Talk to us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
