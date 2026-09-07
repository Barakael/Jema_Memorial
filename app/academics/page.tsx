import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import {
  academicFocus,
  beyondClassroom,
  classes,
  performance,
  school,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Academics",
  description: `Academic programmes at ${school.shortName} — English-medium learning from Baby class through Grade Two.`,
};

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="Learning that builds a strong foundation"
        description="English is our language of teaching and school life. Kiswahili is taught as a subject. Continuous assessment guides support and enrichment."
      />

      <section className="atmosphere-section px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <SectionHeading
              eyebrow="Classes"
              title="Our current pathway"
              description={`From early childhood to Grade Two — ${school.enrolment} pupils. Grade Three is planned for the next academic year.`}
            />
          </FadeIn>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[480px] text-left">
              <thead>
                <tr className="border-b border-brand/30 text-xs uppercase tracking-[0.14em] text-brand-deep">
                  <th className="pb-3 font-semibold">Level</th>
                  <th className="pb-3 font-semibold">Class</th>
                  <th className="pb-3 font-semibold">Pupils</th>
                </tr>
              </thead>
              <tbody>
                {classes.map((row) => (
                  <tr
                    key={row.name}
                    className="border-b border-brand/15 text-navy"
                  >
                    <td className="py-4 text-navy-muted">{row.level}</td>
                    <td className="py-4 font-semibold text-lg">{row.name}</td>
                    <td className="py-4">
                      {row.pupils}
                      {"detail" in row && row.detail ? (
                        <span className="ml-2 text-sm text-navy-muted">
                          ({row.detail})
                        </span>
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <FadeIn>
            <SectionHeading
              eyebrow="Focus"
              title="What we prioritise in the classroom"
            />
            <ul className="mt-8 space-y-4">
              {academicFocus.map((item) => (
                <li key={item} className="flex gap-3 text-navy-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/pupils-cheer.jpg"
                alt="JEMA pupils celebrating together"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-brand-soft px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <SectionHeading
              eyebrow={`Performance · ${performance.date}`}
              title={performance.summary}
              description="Monthly test across Baby, Middle, Pre-Unit, Grade One and Grade Two (27–29 July 2026)."
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {performance.grades.map((g, i) => (
              <FadeIn key={g.grade} delay={i * 80}>
                <div className="border-t-2 border-brand-deep bg-white/60 px-5 py-6">
                  <p className="font-semibold text-4xl text-navy">
                    Grade {g.grade}
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-brand-deep">
                    {g.count}
                  </p>
                  <p className="text-sm text-navy-muted">{g.percent} of pupils</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="atmosphere px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <SectionHeading
              eyebrow="Beyond the classroom"
              title="Play, sport, arts and character"
              description="Education at Jema is broader than examinations — children need space to create, cooperate and grow confidence."
            />
          </FadeIn>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {beyondClassroom.map((item, i) => (
              <FadeIn key={item.area} delay={i * 50}>
                <div>
                  <h3 className="font-semibold text-xl text-navy">{item.area}</h3>
                  <p className="mt-2 text-sm text-navy-muted">{item.focus}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <SectionHeading
              light
              eyebrow="Care & inclusion"
              title="Safe, inclusive learning for every child"
              description="We are committed to safeguarding and inclusive education — accommodating children with and without special needs, in partnership with parents who share accurate information and maintain good attendance."
            />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
