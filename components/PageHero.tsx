type Props = {
  title: string;
  description: string;
  eyebrow?: string;
};

export function PageHero({ title, description, eyebrow }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-brand/15 bg-navy pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 0% 0%, rgba(94,200,219,0.35), transparent 55%), radial-gradient(ellipse 50% 50% at 100% 100%, rgba(58,175,196,0.2), transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {eyebrow ? (
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.24em] text-brand">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="animate-fade-up delay-1 mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="animate-fade-up delay-2 mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
