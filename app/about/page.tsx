import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import {
  directorMessage,
  headTeacherMessage,
  promises,
  school,
  values,
  welcome,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: `About ${school.name} — vision, mission, values, and leadership in Masasi.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Our school"
        description="A registered English-medium pre and primary school building confident learners in Napupa Ward, Masasi."
      />

      <section className="atmosphere-section px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <FadeIn>
            <SectionHeading
              eyebrow="Who we are"
              title="Child-centred education near NHC, Masasi"
              description={welcome}
            />
            <dl className="mt-10 grid grid-cols-2 gap-6">
              {[
                { label: "Registration", value: school.registration },
                { label: "Pupils", value: String(school.enrolment) },
                {
                  label: "Staff",
                  value: `${school.staff.total} (${school.staff.teaching} teaching)`,
                },
                { label: "Next grade", value: "Grade Three" },
              ].map((item) => (
                <div key={item.label} className="border-t border-brand/25 pt-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-deep">
                    {item.label}
                  </dt>
                  <dd className="mt-1 font-semibold text-xl text-navy">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/pupils-campus.jpg"
                alt="School campus and pupils"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <SectionHeading
              eyebrow="Core values"
              title="What guides every day at Jema"
            />
          </FadeIn>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 50}>
                <div className="border-t-2 border-brand pt-5">
                  <h3 className="font-semibold text-xl text-navy">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-muted">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="atmosphere px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl space-y-14">
          <FadeIn>
            <SectionHeading
              eyebrow="Leadership"
              title="Messages from our leaders"
            />
          </FadeIn>
          <div className="grid gap-10 lg:grid-cols-2">
            <FadeIn>
              <blockquote className="h-full border-l-2 border-brand pl-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-deep">
                  {school.director.title}
                </p>
                <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-navy-muted">
                  {directorMessage}
                </p>
                <footer className="mt-6 font-semibold text-lg text-navy">
                  {school.director.name}
                </footer>
              </blockquote>
            </FadeIn>
            <FadeIn delay={100}>
              <blockquote className="h-full border-l-2 border-brand pl-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-deep">
                  {school.headTeacher.title}
                </p>
                <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-navy-muted">
                  {headTeacherMessage}
                </p>
                <footer className="mt-6 font-semibold text-lg text-navy">
                  {school.headTeacher.name}
                </footer>
              </blockquote>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-navy px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <SectionHeading
              light
              eyebrow="Our promise"
              title="Every child matters"
            />
          </FadeIn>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {promises.map((promise, i) => (
              <FadeIn key={promise} delay={i * 40}>
                <li className="text-lg text-white/90">{promise}.</li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <FadeIn>
          <div className="relative mx-auto max-w-6xl overflow-hidden">
            <div className="relative aspect-[21/9] min-h-[220px]">
              <Image
                src="/images/staff-team.jpg"
                alt="JEMA Memorial staff team"
                fill
                className="object-cover object-[center_35%]"
                sizes="100vw"
              />
            </div>
            <p className="mt-4 text-center text-sm text-navy-muted">
              Our community — {school.staff.teaching} teaching and{" "}
              {school.staff.nonTeaching} non-teaching staff supporting{" "}
              {school.enrolment} pupils.
            </p>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
