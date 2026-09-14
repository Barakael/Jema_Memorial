import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import {
  directorMessage,
  headTeacherMessage,
  mission,
  promises,
  school,
  values,
  vision,
  welcome,
} from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description: `About ${school.name} — vision, mission, values, and leadership in Masasi, Mtwara Region.`,
  path: "/about",
  image: "/images/pupils-campus.jpg",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Our school"
        description="A registered English-medium pre and primary school building confident learners in Napupa Ward, Masasi."
      />

      <section className="atmosphere-section px-5 py-8 sm:px-8 sm:py-6 mt-6">
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
            <div className="relative aspect-[4/3.5] overflow-hidden">
              <Image
                src="/images/pupils-cheer1.png"
                alt="School campus and pupils"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="atmosphere-section px-5 mb-8 sm:px-8 sm:py-10 mt-5">
        <div className=" mx-auto max-w-6xl grid lg:grid-cols-3 gap-15">
          <FadeIn>
          <h3 
           className="text-navy font-semibold text-3xl"> Our Mission</h3>
            <h3 
            className="text-black text-md">{mission}</h3>
          </FadeIn>

          <FadeIn> 
           <h3 
           className="text-navy font-semibold text-3xl"> Our Vision</h3>
           
          
            <h3 className="text-black text-md"> 
              {vision}
            </h3>
          </FadeIn>

          <div className="mx-auto max-w-6xl text-black">
          <FadeIn>
          <h3 
           className="text-navy font-semibold text-3xl"> Our Promise</h3>
          </FadeIn>
          <ul className="">
            {promises.map((promise, i) => (
              <FadeIn key={promise} delay={i * 40}>
                <ul className="text-base text-black ml-2">{promise}.</ul>
              </FadeIn>
            ))}
          </ul>
        </div>

        </div>
      </section>

      <section className="atmosphere px-5 py-16 sm:px-8 sm:py-10">
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

     

  
    </>
  );
}
