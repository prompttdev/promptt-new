import { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";
import TextReveal from "@/components/TextReveal";
import FadeIn from "@/components/FadeIn";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import InquiryForm from "@/components/InquiryForm";
import { contactInfo, socialNav } from "@/data/nav";

export const metadata: Metadata = {
  title: "Contact — promptt.dev",
  description: "Start a project with promptt.dev.",
};

const details = [
  { icon: Mail, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: Phone, label: "Phone", value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/[^\d+]/g, "")}` },
  { icon: MapPin, label: "Studio", value: contactInfo.address, href: undefined },
];

export default function ContactPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-40 sm:px-10 sm:pb-24 sm:pt-48">
        <Eyebrow className="mb-6">Contact</Eyebrow>
        <TextReveal
          as="h1"
          text="Tell us what you're building."
          className="max-w-3xl font-display text-5xl leading-[1.02] text-paper sm:text-7xl"
        />
        <p className="mt-8 max-w-lg font-body text-base leading-relaxed text-paper-dim sm:text-lg">
          Whether it&apos;s one service or all five, send us the brief and a strategist will reply
          within one business day.
        </p>
      </section>

      <section className="border-t border-ink-line px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto grid max-w-[1600px] gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div className="flex flex-col gap-10">
            <ImagePlaceholder
              description="Dark editorial shot of a studio reception desk lit by a single orange lamp"
              ratio="aspect-[4/5]"
            />
            <div className="flex flex-col gap-6">
              {details.map((d) => (
                <FadeIn key={d.label} className="flex items-start gap-4 border-t border-ink-line pt-6">
                  <d.icon size={18} className="mt-1 shrink-0 text-signal" />
                  <div>
                    <span className="block font-body text-xs uppercase tracking-[0.15em] text-paper-dim">
                      {d.label}
                    </span>
                    {d.href ? (
                      <a href={d.href} className="underline-signal font-body text-base text-paper">
                        {d.value}
                      </a>
                    ) : (
                      <span className="font-body text-base text-paper">{d.value}</span>
                    )}
                  </div>
                </FadeIn>
              ))}
              <div className="flex gap-6 border-t border-ink-line pt-6">
                {socialNav.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="ui"
                    className="font-body text-xs uppercase tracking-[0.15em] text-paper-dim transition-colors hover:text-signal"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-8 font-display text-2xl text-paper sm:text-3xl">Project brief</h2>
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
