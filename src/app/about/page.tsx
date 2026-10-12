import { Metadata } from "next";
import Eyebrow from "@/components/Eyebrow";
import TextReveal from "@/components/TextReveal";
import FadeIn from "@/components/FadeIn";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About — promptt.dev",
  description: "The story, mission, and studio philosophy behind promptt.dev.",
};

const values = [
  { title: "Senior, always", description: "Every account is run by people who've done the work themselves — no account gets handed to a junior team once it's sold." },
  { title: "One number", description: "We agree on the metric that matters before any work starts, and every channel is judged against it." },
  { title: "In-house, end to end", description: "Strategy, production, and development happen under one roof, so nothing gets lost in a handoff." },
  { title: "Built to be owned", description: "Every system, site, and asset we build ships with documentation your team can run without us." },
];

const timeline = [
  { year: "2019", event: "Founded as a two-person creative studio running content for early-stage DTC brands." },
  { year: "2021", event: "Added performance and paid social as clients asked us to own results, not just output." },
  { year: "2023", event: "Brought website development in-house after one too many handoffs to outside developers." },
  { year: "2025", event: "Launched our AI Integration practice to build the tooling our own team was already relying on." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70svh] flex-col justify-end overflow-hidden px-6 pb-16 pt-40 sm:px-10 sm:pb-24">
        <div className="absolute inset-0 -z-10">
          <ImagePlaceholder
            description="Wide dark editorial portrait of a small studio team silhouetted against orange backlight"
            ratio="aspect-auto h-full"
            className="h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/10" />
        </div>
        <Eyebrow className="mb-6">About promptt.dev</Eyebrow>
        <TextReveal
          as="h1"
          text="We started this studio to fix a specific problem."
          className="max-w-3xl font-display text-4xl leading-[1.05] text-paper sm:text-6xl"
        />
      </section>

      {/* Story */}
      <section className="border-t border-ink-line px-6 py-24 sm:px-10 sm:py-36">
        <div className="mx-auto grid max-w-[1600px] gap-16 sm:grid-cols-[1fr_1.4fr] sm:gap-24">
          <Eyebrow>Our Story</Eyebrow>
          <div className="flex flex-col gap-8">
            <FadeIn>
              <p className="font-display text-2xl leading-snug text-paper sm:text-3xl">
                Most agencies sell tactics. We got tired of watching good brands buy them one at a
                time — a social retainer here, a freelance developer there — with nobody
                accountable for how it all added up.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="font-body text-base leading-relaxed text-paper-dim sm:text-lg">
                promptt.dev exists to run marketing as one connected system instead of five
                disconnected vendors. We keep the team small and senior on purpose — every
                strategist, writer, and developer here has run the exact kind of work they&apos;re
                overseeing, which means less translation and faster decisions.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="font-body text-base leading-relaxed text-paper-dim sm:text-lg">
                We work with a deliberately limited number of clients at a time. It&apos;s the only way
                we&apos;ve found to keep the quality bar where we want it while staying fast enough to
                actually move a brand forward.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission / values */}
      <section className="border-t border-ink-line px-6 py-24 sm:px-10 sm:py-36">
        <div className="mx-auto max-w-[1600px]">
          <Eyebrow className="mb-6">What Makes Us Different</Eyebrow>
          <TextReveal
            as="h2"
            text="Four things we don't compromise on."
            className="mb-14 max-w-2xl font-display text-4xl leading-[1.05] text-paper sm:mb-20 sm:text-6xl"
          />
          <div className="grid grid-cols-1 gap-10 border-t border-ink-line pt-10 sm:grid-cols-2 sm:gap-16">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.05} className="flex flex-col gap-3">
                <span className="tnum font-display text-lg text-signal">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-2xl text-paper sm:text-3xl">{v.title}</h3>
                <p className="font-body text-sm leading-relaxed text-paper-dim sm:text-base">
                  {v.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-ink-line px-6 py-24 sm:px-10 sm:py-36">
        <div className="mx-auto max-w-[1600px]">
          <Eyebrow className="mb-14 sm:mb-20">Since 2019</Eyebrow>
          <div className="divide-y divide-ink-line border-t border-ink-line">
            {timeline.map((t, i) => (
              <FadeIn key={t.year} delay={i * 0.05}>
                <div className="grid grid-cols-[5rem_1fr] gap-6 py-8 sm:grid-cols-[10rem_1fr] sm:py-10">
                  <span className="tnum font-display text-2xl text-signal sm:text-3xl">{t.year}</span>
                  <p className="font-body text-sm leading-relaxed text-paper-dim sm:max-w-xl sm:text-base">
                    {t.event}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial image break */}
      <section className="grid grid-cols-1 gap-6 border-t border-ink-line px-6 py-24 sm:grid-cols-3 sm:px-10 sm:py-36">
        <ImagePlaceholder description="Close-up of hands sketching a layout on dark paper, orange desk lamp glow" index={0} />
        <ImagePlaceholder description="Studio wall covered in dark moodboard prints and orange sticky notes" index={1} className="sm:mt-16" />
        <ImagePlaceholder description="Team gathered around a monitor reviewing a dark website mockup" index={2} className="sm:mt-8" />
      </section>

      <CTASection heading="Curious if we're the right fit?" subheading="Most good partnerships start with a fifteen-minute conversation." />
    </>
  );
}
