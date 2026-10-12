import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { primaryNav, legalNav, socialNav, contactInfo } from "@/data/nav";
import { services } from "@/data/services";
import Image from "next/image";

export default function Footer() {
  return (
    <div
      className="w-full px-6 pb-8 sm:px-10"
      style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #0d0d0d 50%, #0a0a0a 100%)' }}
    >
      <footer className="relative mx-auto max-w-[1600px] overflow-hidden border border-ink-line">
        {/* Gradient glow at bottom */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-signal/10 to-transparent" />

        <div className="relative px-6 py-16 sm:px-10">
          <div className="grid grid-cols-2 gap-10 pb-5 sm:grid-cols-4">
            <div className="col-span-2 sm:col-span-1">
              <Link href="/" className="font-display text-2xl text-paper">
                <Image src={"/logo-dark.png"} width={160} height={40} alt="promptt.dev" />
              </Link>
              <p className="mt-4 max-w-[26ch] font-display text-sm leading-relaxed text-paper-dim">
                A digital marketing studio for brands that refuse to look ordinary.
              </p>
              <div className="mt-6 flex gap-3">
                {socialNav.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex font-display h-8 w-8 items-center justify-center rounded-full bg-paper/5 text-paper-dim transition-colors hover:bg-paper/10 hover:text-signal"
                  >
                    <ArrowUpRight size={14} />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <span className="font-display text-xs uppercase tracking-[0.2em] text-paper-dim">Sitemap</span>
              <ul className="mt-5 flex flex-col gap-1.5">
                {primaryNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="underline-signal font-display text-sm text-paper/90">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="font-display text-xs uppercase tracking-[0.2em] text-paper-dim">Services</span>
              <ul className="mt-5 flex flex-col gap-1.5">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="underline-signal font-display text-sm text-paper/90">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="font-display text-xs uppercase tracking-[0.2em] text-paper-dim">Legal</span>
              <ul className="mt-5 flex flex-col gap-1.5">
                {legalNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="underline-signal font-display text-sm text-paper/90">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <span className="mt-8 block font-display text-xs uppercase tracking-[0.2em] text-paper-dim">Contact</span>
              <div className="mt-5 flex flex-col gap-1 font-display text-sm text-paper/90">
                <a href={`mailto:${contactInfo.email}`} className="underline-signal w-fit">
                  {contactInfo.email}
                </a>
                <span className="text-paper-dim">{contactInfo.phone}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse items-start gap-4 border-t border-ink-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-display text-xs text-paper-dim">
              © {new Date().getFullYear()} promptt.dev. All rights reserved.
            </span>
            <div className="flex gap-6">
              {socialNav.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 font-display text-xs uppercase tracking-[0.15em] text-paper-dim transition-colors hover:text-signal"
                >
                  {s.label} < ArrowUpRight size={11} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer >
    </div >
  );
}