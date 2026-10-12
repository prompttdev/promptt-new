import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import TextReveal from "@/components/TextReveal";
import { Button } from "@/components/ui/button";

export default function CTASection({
  heading = "Let's build something worth talking about.",
  subheading = "Tell us where the brand needs to go. We'll tell you exactly how we'd get it there.",
}: {
  heading?: string;
  subheading?: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-ink-line px-6 py-28 sm:px-10 sm:py-40">
      <div className="mx-auto max-w-4xl text-center">
        <TextReveal
          as="h2"
          text={heading}
          className="font-display text-4xl leading-[1.05] text-paper sm:text-6xl md:text-7xl"
        />
        <p className="mx-auto mt-6 max-w-md font-body text-base text-paper-dim">{subheading}</p>
        <Link href="/contact" data-cursor="view" data-cursor-label="Go">
          <Button size="lg" className="mt-10 gap-3">
            Start a Project <ArrowUpRight size={16} />
          </Button>
        </Link>
      </div>
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[60vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/10 blur-[120px]" />
    </section>
  );
}
