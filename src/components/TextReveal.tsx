"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ElementType } from "react";

type Props = {
  text: string;
  as?: ElementType;
  className?: string;
  split?: "word" | "char";
  delay?: number;
  once?: boolean;
};

export default function TextReveal({
  text,
  as: Tag = "div",
  className,
  split = "word",
  delay = 0,
  once = true,
}: Props) {
  const pieces = split === "word" ? text.split(" ") : text.split("");

  return (
    <Tag className={cn("overflow-hidden", className)}>
      <motion.span
        className="inline"
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "-10% 0px -10% 0px" }}
        transition={{ staggerChildren: split === "word" ? 0.045 : 0.015, delayChildren: delay }}
      >
        {pieces.map((piece, i) => (
          <span key={i} className="inline-block overflow-hidden align-bottom">
            <motion.span
              className="inline-block will-change-transform"
              variants={{
                hidden: { y: "110%", rotate: 3 },
                visible: {
                  y: "0%",
                  rotate: 0,
                  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              {piece === " " ? "\u00A0" : piece}
              {split === "word" && i < pieces.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
