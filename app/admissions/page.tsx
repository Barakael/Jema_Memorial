import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import {
  admissionSteps,
  banks,
  fees,
  formatTzs,
  school,
  uniforms,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Admissions",
  description: `Admissions and 2026 fees for ${school.name}. Apply for Baby through Grade Two.`,
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions 2026"
        title="Join the JEMA Memorial family"
        description={`School days run ${school.hours}. Current classes: Baby, Middle, Pre-Unit, Grade One and Grade Two. Grade Three opens next year.`}
      />

      <section className="atmosphere-section px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <SectionHeading
              eyebrow="How to apply"
              title="Admission steps"
              description="Application form fee and interview fee are TZS 10,000 each, payable against an official receipt."
            />
          </FadeIn>
          <ol className="mt-12 space-y-0">
            {admissionSteps.map((step, i) => (
              <FadeIn key={step} delay={i * 40}>
                <li className="flex gap-5 border-t border-brand/20 py-5">
                  <span className="font-semibold text-2xl text-brand-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="pt-1 text-navy">{step}</span>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <SectionHeading
              eyebrow={`${fees.year} fees`}
              title="Primary fee summary"
              description="Amounts as printed in the 2026 joining form. Confirm current figures with the school before payment."
            />
          </FadeIn>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[420px] text-left">
              <thead>
                <tr className="border-b border-brand/30 text-xs uppercase tracking-[0.14em] text-brand-deep">
                  <th className="pb-3 font-semibold">Item</th>
                  <th className="pb-3 text-right font-semibold">Amount</th>
                </tr>
              </thead>
              <tbody>
                {fees.items.map((row) => (
                  <tr
                    key={row.item}
                    className="border-b border-brand/15 text-navy"
                  >
                    <td className="py-4">{row.item}</td>
                    <td className="py-4 text-right font-medium tabular-nums">
                      {formatTzs(row.amount)}
                    </td>
                  </tr>
                ))}
                <tr className="border-b border-brand/15 font-semibold text-navy">
                  <td className="py-4">Total excluding transport</td>
                  <td className="py-4 text-right tabular-nums">
                    {formatTzs(fees.totalExcludingTransport)}
                  </td>
                </tr>
                <tr className="font-semibold text-brand-deep">
                  <td className="py-4">Total including transport</td>
                  <td className="py-4 text-right tabular-nums">
                    {formatTzs(fees.totalIncludingTransport)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-navy-muted">
            Application {formatTzs(fees.application)} · Interview{" "}
            {formatTzs(fees.interview)} · Transport is optional and charged
            separately when used.
          </p>
        </div>
      </section>

      <section className="bg-brand-soft px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <SectionHeading
              eyebrow="Payment"
              title="School bank accounts"
              description="Pay school fees and transport through the designated accounts and keep your receipts."
            />
          </FadeIn>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {banks.map((bank, i) => (
              <FadeIn key={bank.bank} delay={i * 80}>
                <div className="border border-brand/25 bg-white/70 px-6 py-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-deep">
                    {bank.bank}
                  </p>
                  <p className="mt-3 font-semibold text-2xl tracking-wide text-navy">
                    {bank.account}
                  </p>
                  <p className="mt-2 text-sm text-navy-muted">{bank.name}</p>
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
              eyebrow="Uniform"
              title="School colours: blue, yellow and white"
            />
          </FadeIn>
          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            <FadeIn>
              <h3 className="font-semibold text-2xl text-navy">Boys</h3>
              <ul className="mt-4 space-y-3">
                {uniforms.boys.map((item) => (
                  <li key={item} className="flex gap-3 text-navy-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={80}>
              <h3 className="font-semibold text-2xl text-navy">Girls</h3>
              <ul className="mt-4 space-y-3">
                {uniforms.girls.map((item) => (
                  <li key={item} className="flex gap-3 text-navy-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
          <p className="mt-8 text-sm text-navy-muted">
            Uniform fabric, T-shirts and sweaters are available through the
            school or identified stationery outlet.
          </p>
        </div>
      </section>

      <section className="bg-navy px-5 py-16 text-center sm:px-8 sm:py-20">
        <FadeIn>
          <h2 className="font-semibold text-3xl text-white sm:text-4xl">
            Ready to enrol?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Contact the school for current availability, fee confirmation and
            transport arrangements.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-md bg-brand px-6 py-3 text-sm font-semibold text-navy hover:bg-white"
          >
            Contact admissions
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
