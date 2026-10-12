import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";
import TextReveal from "@/components/TextReveal";
import FadeIn from "@/components/FadeIn";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ProcessSteps from "@/components/ProcessSteps";
import PortfolioCard from "@/components/PortfolioCard";
import InquiryForm from "@/components/InquiryForm";
import { Button } from "@/components/ui/button";
import { services, getServiceBySlug } from "@/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.name} — promptt.dev`,
    description: service.tagline,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[85svh] flex-col justify-end overflow-hidden px-6 pb-16 pt-40 sm:px-10 sm:pb-24">
        <div className="absolute inset-0 -z-10">
          <ImagePlaceholder description={service.heroImage} ratio="aspect-auto h-full" className="h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
        </div>

        <Eyebrow className="mb-6">Service {service.order}</Eyebrow>
        <TextReveal
          as="h1"
          text={service.name}
          className="max-w-4xl font-display text-[11vw] leading-[0.95] text-paper sm:text-7xl lg:text-8xl"
        />
        <FadeIn delay={0.4} className="mt-8 max-w-xl font-body text-lg leading-relaxed text-paper-dim sm:text-xl">
          {service.tagline}
        </FadeIn>
      </section>

      {/* Overview */}
      <section className="border-t border-ink-line px-6 py-24 sm:px-10 sm:py-36">
        <div className="mx-auto grid max-w-[1600px] gap-12 sm:grid-cols-[1fr_1fr] sm:gap-20">
          <div>
            <Eyebrow className="mb-6">What It Covers</Eyebrow>
            <TextReveal
              as="h2"
              text="Who this is built for."
              className="font-display text-3xl leading-[1.05] text-paper sm:text-4xl"
            />
          </div>
          <div className="flex flex-col gap-10">
            <p className="font-body text-base leading-relaxed text-paper-dim sm:text-lg">
              {service.overview}
            </p>
            <ul className="flex flex-col gap-4">
              {service.whoFor.map((w) => (
                <li key={w} className="flex items-start gap-3 border-t border-ink-line pt-4 font-body text-sm text-paper sm:text-base">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="border-t border-ink-line px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {service.results.map((r) => (
            <FadeIn key={r.label}>
              <span className="tnum block font-display text-5xl text-signal sm:text-6xl">{r.stat}</span>
              <span className="mt-3 block font-body text-sm text-paper-dim sm:text-base">{r.label}</span>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section className="border-t border-ink-line px-6 py-24 sm:px-10 sm:py-36">
        <div className="mx-auto max-w-[1600px]">
          <Eyebrow className="mb-6">Results in the Wild</Eyebrow>
          <TextReveal
            as="h2"
            text="Recent work in this discipline."
            className="mb-14 max-w-2xl font-display text-4xl leading-[1.05] text-paper sm:mb-20 sm:text-5xl"
          />
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
            {service.portfolio.map((p, i) => (
              <PortfolioCard
                key={p.title}
                title={p.title}
                category={p.category}
                image={p.image}
                link={p.link}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-ink-line px-6 py-24 sm:px-10 sm:py-36">
        <div className="mx-auto max-w-[1600px]">
          <Eyebrow className="mb-6">Our Process</Eyebrow>
          <TextReveal
            as="h2"
            text="How we run this engagement."
            className="mb-14 font-display text-4xl leading-[1.05] text-paper sm:mb-20 sm:text-5xl"
          />
          <ProcessSteps steps={service.process} />
        </div>
      </section>

      {/* Inquiry */}
      <section className="border-t border-ink-line px-6 py-24 sm:px-10 sm:py-36">
        <div className="mx-auto grid max-w-[1600px] gap-16 sm:grid-cols-[0.8fr_1.2fr] sm:gap-20">
          <div>
            <Eyebrow className="mb-6">Get Started</Eyebrow>
            <TextReveal
              as="h2"
              text={`Ready to talk ${service.name.toLowerCase()}?`}
              className="font-display text-3xl leading-[1.05] text-paper sm:text-4xl"
            />
            <p className="mt-6 max-w-sm font-body text-sm leading-relaxed text-paper-dim sm:text-base">
              Fill in the brief and a strategist will follow up within one business day — or email
              us directly and we&apos;ll pick it up from there.
            </p>
            <Link
              href="/contact"
              data-cursor="ui"
              className="mt-8 flex w-fit items-center gap-2 font-body text-sm uppercase tracking-[0.15em] text-paper transition-colors hover:text-signal"
            >
              Or visit our contact page <ArrowUpRight size={14} />
            </Link>
          </div>
          <InquiryForm serviceName={service.name} />
        </div>
      </section>

      {/* Other services */}
      <section className="border-t border-ink-line px-6 py-24 sm:px-10 sm:py-36">
        <div className="mx-auto max-w-[1600px]">
          <Eyebrow className="mb-14 sm:mb-20">Explore More</Eyebrow>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                data-cursor="view"
                data-cursor-label="View"
                className="group flex flex-col gap-3 border-t border-ink-line pt-6"
              >
                <span className="tnum font-body text-xs text-paper-dim">{s.order}</span>
                <h3 className="font-display text-2xl text-paper transition-colors duration-300 group-hover:text-signal">
                  {s.name}
                </h3>
                <p className="font-body text-sm text-paper-dim">{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-ink-line px-6 py-16 text-center sm:px-10">
        <Link href="/contact" data-cursor="view" data-cursor-label="Go">
          <Button size="lg" className="gap-3">
            Start a Project <ArrowUpRight size={16} />
          </Button>
        </Link>
      </div>
    </>
  );
}
