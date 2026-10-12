"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Service } from "@/data/services";

export default function ServiceRow({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      data-cursor="view"
      data-cursor-label="View"
      className="group relative flex flex-col gap-4 border-b border-ink-line py-8 sm:flex-row sm:items-center sm:gap-10 sm:py-12"
    >
      <span className="tnum font-display text-lg text-paper-dim transition-colors duration-500 group-hover:text-signal sm:w-16 sm:text-xl">
        {service.order}
      </span>

      <div className="flex-1 overflow-hidden">
        <motion.h3
          initial={{ y: 0 }}
          whileHover={{ x: 8 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-3xl text-paper transition-colors duration-500 group-hover:text-signal sm:text-5xl"
        >
          {service.name}
        </motion.h3>
      </div>

      <p className="max-w-sm font-body text-sm leading-relaxed text-paper-dim sm:text-base">
        {service.short}
      </p>

      <ArrowUpRight
        size={28}
        className="shrink-0 text-paper-dim transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-signal"
      />
    </Link>
  );
}
