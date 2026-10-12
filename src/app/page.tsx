import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import TextReveal from "@/components/TextReveal";
import FadeIn from "@/components/FadeIn";
import Eyebrow from "@/components/Eyebrow";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ServiceRow from "@/components/ServiceRow";
import PortfolioCard from "@/components/PortfolioCard";
import ProcessSteps from "@/components/ProcessSteps";
import LogoStrip from "@/components/LogoStrip";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { Hero } from "@/components/HeroSection";

const process = [
  { title: "Discover", description: "We spend the first two weeks inside your data, your customers, and your category before recommending anything." },
  { title: "Strategy", description: "A written strategy tying every channel back to a single commercial goal — not a deck full of tactics." },
  { title: "Build", description: "Production, design, and development happen in-house, on a schedule you can see from day one." },
  { title: "Grow", description: "We stay in the numbers after launch, iterating on what the data says is actually working." },
];

const workTeaser = [
  { title: "Field Kit skincare launch", category: "Influencer Marketing", image: "Moody flat-lay of amber skincare bottles on dark concrete", href: "/services/influencer-marketing" },
  { title: "Kepler analytics", category: "Website Development", image: "Dark dashboard UI glowing against a near-black desk setup", href: "/services/website-development" },
  { title: "Verano coffee roasters", category: "Instagram Marketing", image: "Steam rising from a dark espresso cup against a black backdrop", href: "/services/instagram-marketing" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Services overview */}
      <section className="px-6 pb-24 sm:px-10 sm:pb-36 pt-0">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-14 flex flex-col gap-6 sm:mb-20 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow className="mb-6">What We Do</Eyebrow>
              <TextReveal
                as="h2"
                text="Five disciplines. One outcome."
                className="max-w-2xl font-display text-4xl leading-[1.05] text-paper sm:text-6xl"
              />
            </div>
            <p className="max-w-xs font-body text-sm text-paper-dim sm:text-base">
              Every engagement is built from these five capabilities, deployed together or on
              their own.
            </p>
          </div>

          <div>
            {services.map((service) => (
              <ServiceRow key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Work teaser strip */}
      <section className="border-t border-ink-line px-6 py-24 sm:px-10 sm:py-36">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-14 flex flex-col gap-6 sm:mb-20 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow className="mb-6">Selected Work</Eyebrow>
              <TextReveal
                as="h2"
                text="Recent results."
                className="font-display text-4xl leading-[1.05] text-paper sm:text-6xl"
              />
            </div>
            <Link href="/services" data-cursor="view" data-cursor-label="View" className="group flex items-center gap-2 font-body text-sm uppercase tracking-[0.15em] text-paper-dim transition-colors hover:text-signal">
              View all services
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
            {workTeaser.map((item, i) => (
              <PortfolioCard key={item.title} {...item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Agency positioning */}
      <section className="border-t border-ink-line px-6 py-24 sm:px-10 sm:py-36">
        <div className="mx-auto grid max-w-[1600px] gap-12 sm:grid-cols-2 sm:gap-20">
          <div>
            <Eyebrow className="mb-6">The Studio</Eyebrow>
            <TextReveal
              as="h2"
              text="An agency built like a product team."
              className="font-display text-4xl leading-[1.05] text-paper sm:text-5xl"
            />
          </div>
          <FadeIn className="flex flex-col justify-between gap-10">
            <p className="font-body text-base leading-relaxed text-paper-dim sm:text-lg">
              promptt.dev started because most agencies sell tactics, not outcomes. We&apos;re a small,
              senior team that treats every channel — creator, social, web, content, and AI — as
              part of one connected system, measured against one number: the one that matters to
              your business.
            </p>
            <Link href="/about" data-cursor="view" data-cursor-label="View" className="group flex w-fit items-center gap-2 font-body text-sm uppercase tracking-[0.15em] text-paper transition-colors hover:text-signal">
              More about us
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-ink-line px-6 py-24 sm:px-10 sm:py-36">
        <div className="mx-auto max-w-[1600px]">
          <Eyebrow className="mb-6">How We Work</Eyebrow>
          <TextReveal
            as="h2"
            text="Four stages, no guesswork."
            className="mb-14 font-display text-4xl leading-[1.05] text-paper sm:mb-20 sm:text-6xl"
          />
          <ProcessSteps steps={process} />
        </div>
      </section>

      {/* Client logos */}
      <LogoStrip />

      {/* Closing CTA */}
      <CTASection />
    </>
  );
}
