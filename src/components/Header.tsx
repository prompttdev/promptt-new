"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { primaryNav, socialNav, contactInfo } from "@/data/nav";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${scrolled || open ? "bg-ink/85 backdrop-blur-sm" : "bg-transparent"
          }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 sm:px-16">
          <Link
            href="/"
            data-cursor="ui"
            className="font-display text-lg font-medium tracking-tight text-paper"
          >
            <Image src={"/logo-dark.png"} width={100} height={20} alt="promptt.dev" />
          </Link>

          {/* <nav className="hidden items-center gap-9 lg:flex">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-cursor="ui"
                className={`font-body text-xs uppercase tracking-[0.15em] transition-colors duration-300 hover:text-signal ${pathname === item.href ? "text-signal" : "text-paper/80"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav> */}

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              data-cursor="view"
              data-cursor-label="Go"
              className="hidden md:flex shrink-0"
            >
              <Button
                size="sm"
                className="gap-3"
              >
                Start a Project

                <ArrowUpRight
                  size={16}
                />
              </Button>
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              data-cursor="ui"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex h-11 w-11 cursor-none-desktop items-center justify-center border border-ink-line text-paper transition-colors duration-300 hover:border-signal hover:text-signal"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-ink px-6 pb-10 pt-28 sm:px-10"
          >
            <nav className="flex flex-col gap-1">
              {primaryNav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-ink-line py-4"
                >
                  <Link
                    href={item.href}
                    data-cursor="view"
                    data-cursor-label="Go"
                    className="group flex items-baseline justify-between font-display text-[12vw] leading-none text-paper transition-colors duration-300 hover:text-signal sm:text-6xl"
                  >
                    <span>{item.label}</span>
                    <span className="text-sm text-paper-dim tnum">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="flex flex-col gap-8 pt-10 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex flex-col gap-1 font-body text-sm text-paper-dim">
                <a href={`mailto:${contactInfo.email}`} className="underline-signal w-fit">
                  {contactInfo.email}
                </a>
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex gap-6">
                {socialNav.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="ui"
                    className="flex items-center gap-1 font-body text-xs uppercase tracking-[0.15em] text-paper-dim transition-colors hover:text-signal"
                  >
                    {s.label} <ArrowUpRight size={12} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
