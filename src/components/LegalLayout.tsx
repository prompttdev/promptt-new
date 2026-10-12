import Eyebrow from "@/components/Eyebrow";

type Section = { heading: string; body: string[] };

export default function LegalLayout({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: Section[];
}) {
  return (
    <section className="px-6 py-40 sm:px-10 sm:py-48">
      <div className="mx-auto max-w-3xl">
        <Eyebrow className="mb-6">Legal</Eyebrow>
        <h1 className="font-display text-4xl leading-[1.05] text-paper sm:text-5xl">{title}</h1>
        <p className="mt-4 font-body text-xs uppercase tracking-[0.15em] text-paper-dim">
          Last updated {updated}
        </p>

        <div className="mt-16 flex flex-col gap-12">
          {sections.map((s) => (
            <div key={s.heading} className="border-t border-ink-line pt-8">
              <h2 className="font-display text-xl text-paper sm:text-2xl">{s.heading}</h2>
              <div className="mt-4 flex flex-col gap-4">
                {s.body.map((p, i) => (
                  <p key={i} className="font-body text-sm leading-relaxed text-paper-dim sm:text-base">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
