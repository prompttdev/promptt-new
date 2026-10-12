"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("promptt-loaded")) {
      setShow(false);
      setDone(true);
      return;
    }

    document.body.style.overflow = "hidden";

    const start = performance.now();
    const duration = 1600;

    let raf: number;
    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        sessionStorage.setItem("promptt-loaded", "1");
        setTimeout(() => {
          setDone(true);
          document.body.style.overflow = "";
        }, 350);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (!show) return null;

  return (
    <AnimatePresence onExitComplete={() => setShow(false)}>
      {!done && (
        <motion.div
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
        >
          <div className="flex flex-col items-center gap-6">
            <span className="font-display text-sm uppercase tracking-[0.4em] text-paper-dim">
              promptt.dev
            </span>
            <span className="tnum font-display text-[13vw] leading-none text-paper sm:text-[7vw]">
              {progress}
              <span className="text-signal">%</span>
            </span>
          </div>
          <div className="absolute bottom-10 h-px w-40 bg-ink-line">
            <motion.div
              className="h-full bg-signal"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
