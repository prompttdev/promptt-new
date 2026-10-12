"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  description: string;
  src?: string;
  className?: string;
  ratio?: string;
  parallax?: boolean;
  link?: string;
  hoverScale?: boolean;
  index?: number;
};

/**
 * Image component with a gradient placeholder fallback.
 *
 * If `src` is provided, the actual image is rendered.
 * Otherwise, a moody gradient placeholder is shown.
 */
export default function ImagePlaceholder({
  description,
  link,
  src,
  className,
  ratio = "aspect-[4/5]",
  parallax = true,
  hoverScale = false,
  index = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    parallax ? ["-6%", "6%"] : ["0%", "0%"]
  );

  const gradients = [
    "linear-gradient(155deg, #17130f 0%, #0a0a0b 55%, #2a1206 100%)",
    "linear-gradient(200deg, #0f0f10 0%, #0a0a0b 50%, #241008 100%)",
    "linear-gradient(120deg, #14100c 0%, #0a0a0b 60%, #1e0d05 100%)",
    "linear-gradient(165deg, #100e0d 0%, #0a0a0b 45%, #331507 100%)",
  ];

  const bg = gradients[index % gradients.length];

  return (
    <div
      ref={ref}
      role="img"
      aria-label={description}
      className={cn(
        "group relative overflow-hidden bg-ink-raised",
        ratio,
        className
      )}
    >
      <motion.div
        // initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
        // whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        {src ? (
          <motion.img
            src={src}
            alt={description}
            style={{ y }}
            className={cn(
              "absolute -inset-y-[8%] inset-x-0 h-[116%] w-full object-cover transition-transform duration-700 ease-out",
              hoverScale && "group-hover:scale-[1.06]"
            )}
          />
        ) : (
          <motion.div
            style={{ y, backgroundImage: bg }}
            className={cn(
              "absolute -inset-y-[8%] inset-x-0",
              hoverScale && "transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            )}
          />
        )}

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,59,0,0.10),transparent_55%)]" />

        <div className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay [background-image:repeating-linear-gradient(0deg,#fff_0px,transparent_1px,transparent_2px)]" />
      </motion.div>

      <span className="sr-only">{description}</span>
    </div>
  );
}