import { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";
import TextReveal from "@/components/TextReveal";
import FadeIn from "@/components/FadeIn";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/data/nav";

export const metadata: Metadata = {
  title: "Careers — promptt.dev",
  description: "Culture, working style, and open roles at promptt.dev.",
};

const culture = [
  { title: "Small on purpose", description: "We stay a small, senior team by design, so every hire has real ownership over the work, not a slice of it." },
  { title: "Remote-first", description: "The studio is distributed across time zones. We meet in person a few times a year and trust people the rest of it." },
  { title: "Craft over hustle", description: "Late nights aren't a badge of honour here. Good scoping means good work happens inside working hours." },
  { title: "Client access", description: "Everyone who does the work talks to the client who's paying for it. No layers, no telephone game." },
];

export default function CareersPage() {
  return (
    <>
      <section className="relative flex min-h-[70svh] flex-col justify-end overflow-hidden px-6 pb-16 pt-40 sm:px-10 sm:pb-24">
        <div className="absolute inset-0 -z-10">
          <ImagePlaceholder
            description="Dark, candid shot of a small team working late in a studio, orange desk lamps glowing"
            ratio="aspect-auto h-full"
            className="h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/10" />
        </div>
        <Eyebrow className="mb-6">Careers</Eyebrow>
        <TextReveal
          as="h1"
          text="Work that's senior from day one."
          className="max-w-3xl font-display text-4xl leading-[1.05] text-paper sm:text-6xl"
        />
      </section>

      {/* Culture */}
      <section className="border-t border-ink-line px-6 py-24 sm:px-10 sm:py-36">
        <div className="mx-auto max-w-[1600px]">
          <Eyebrow className="mb-6">Culture</Eyebrow>
          <TextReveal
            as="h2"
            text="How the studio actually runs."
            className="mb-14 max-w-2xl font-display text-4xl leading-[1.05] text-paper sm:mb-20 sm:text-6xl"
          />
          <div className="grid grid-cols-1 gap-10 border-t border-ink-line pt-10 sm:grid-cols-2 sm:gap-16">
            {culture.map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.05} className="flex flex-col gap-3">
                <span className="tnum font-display text-lg text-signal">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-2xl text-paper sm:text-3xl">{c.title}</h3>
                <p className="font-body text-sm leading-relaxed text-paper-dim sm:text-base">
                  {c.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="border-t border-ink-line px-6 py-24 sm:px-10 sm:py-36">
        <div className="mx-auto max-w-[1600px]">
          <Eyebrow className="mb-6">Open Positions</Eyebrow>
          <TextReveal
            as="h2"
            text="Nothing open right now."
            className="max-w-2xl font-display text-4xl leading-[1.05] text-paper sm:text-6xl"
          />

          <FadeIn delay={0.15} className="mt-16 flex flex-col items-start gap-8 border border-ink-line px-8 py-14 sm:px-16 sm:py-20">
            <p className="max-w-lg font-body text-base leading-relaxed text-paper-dim sm:text-lg">
              We don&apos;t have any roles open at the moment — but we&apos;re always interested in hearing
              from strategists, writers, designers, and developers who&apos;d be a strong fit for how
              this studio works. Send us a note and we&apos;ll reach out when something opens up.
            </p>
            <a href={`mailto:${contactInfo.email}?subject=General Application`} data-cursor="view" data-cursor-label="Go">
              <Button size="lg" className="gap-3">
                Send a general application <ArrowUpRight size={16} />
              </Button>
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
