"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function PageHero({
  kicker,
  title,
  sub,
}: {
  kicker: string;
  title: ReactNode;
  sub?: ReactNode;
}) {
  return (
    <section className="border-b hairline">
      <div className="mx-auto max-w-[1400px] px-6 pb-16 pt-40 lg:px-10 lg:pb-24 lg:pt-48">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mono-label mb-8 text-[var(--gold)]"
        >
          {kicker}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.12, ease: EASE }}
          className="display max-w-5xl text-5xl md:text-7xl lg:text-8xl"
        >
          {title}
        </motion.h1>
        {sub && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
            className="mt-8 max-w-2xl text-base leading-relaxed text-[var(--ink-2)] md:text-lg"
          >
            {sub}
          </motion.div>
        )}
      </div>
    </section>
  );
}
