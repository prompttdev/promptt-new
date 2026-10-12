import { Metadata } from "next";
import Eyebrow from "@/components/Eyebrow";
import TextReveal from "@/components/TextReveal";
import ServiceRow from "@/components/ServiceRow";
import CTASection from "@/components/CTASection";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services — promptt.dev",
  description: "Influencer marketing, Instagram marketing, website development, content management, and AI integration.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-40 sm:px-10 sm:pb-24 sm:pt-48">
        <Eyebrow className="mb-6">Services</Eyebrow>
        <TextReveal
          as="h1"
          text="Five disciplines, one connected system."
          className="max-w-4xl font-display text-5xl leading-[1.02] text-paper sm:text-7xl"
        />
        <p className="mt-8 max-w-lg font-body text-base leading-relaxed text-paper-dim sm:text-lg">
          Every service is designed to work on its own or as part of a broader engagement — built
          by the same senior team, measured against the same outcomes.
        </p>
      </section>

      <section className="px-6 pb-24 sm:px-10 sm:pb-36">
        <div className="mx-auto max-w-[1600px]">
          {services.map((service) => (
            <ServiceRow key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
