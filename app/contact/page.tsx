import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { school } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description: `Contact ${school.name} in ${school.location.full}. Phone, email, and enquiry form for admissions and visits.`,
  path: "/contact",
  image: "/images/staff-team.jpg",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We would love to hear from you"
        description="Visit us in Napupa Ward, Masasi, or reach out by phone or email for admissions, school visits and partnerships."
      />

      <section className="atmosphere-section px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2">
          <FadeIn>
            <SectionHeading
              eyebrow="Details"
              title="Find JEMA Memorial"
            />
            <dl className="mt-10 space-y-6">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-deep">
                  Location
                </dt>
                <dd className="mt-2 text-navy">
                  {school.location.full}
                  <br />
                  <span className="text-navy-muted">
                    {school.location.landmark}
                  </span>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-deep">
                  Telephone
                </dt>
                <dd className="mt-2 space-y-1 grid lg:grid-cols-3">
                  {school.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="block text-navy transition hover:text-brand-deep"
                    >
                      {phone}
                    </a>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-deep">
                  Email
                </dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${school.email}`}
                    className="text-navy transition hover:text-brand-deep"
                  >
                    {school.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-deep">
                  School hours
                </dt>
                <dd className="mt-2 text-navy">{school.hours}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-deep">
                  Leadership
                </dt>
                <dd className="mt-2 text-navy">
                  {school.director.title}: {school.director.name}
                  <br />
                  {school.headTeacher.title}: {school.headTeacher.name}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-deep">
                  Registration
                </dt>
                <dd className="mt-2 text-navy">{school.registration}</dd>
              </div>
            </dl>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="border border-brand/20 bg-white/80 px-6 py-8 sm:px-8">
              <h2 className="font-semibold text-2xl text-navy">Send an enquiry</h2>
              <p className="mt-2 text-sm text-navy-muted">
                Tell us about your child and the class you are interested in.
                We will reply as soon as we can.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
