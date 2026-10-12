import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import TextReveal from "@/components/TextReveal";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] flex-col items-center justify-center px-6 text-center sm:px-10">
      <span className="tnum font-display text-signal text-sm uppercase tracking-[0.3em]">404</span>
      <TextReveal
        as="h1"
        text="This page went off-brief."
        className="mt-6 font-display text-4xl leading-[1.05] text-paper sm:text-6xl"
      />
      <p className="mt-6 max-w-sm font-body text-base text-paper-dim">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link href="/" data-cursor="view" data-cursor-label="Go">
        <Button size="lg" className="mt-10 gap-3">
          Back to home <ArrowUpRight size={16} />
        </Button>
      </Link>
    </section>
  );
}
