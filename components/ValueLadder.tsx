"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ladder } from "@/lib/practices";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ValueLadder() {
  const [active, setActive] = useState<number | null>(null);
  const n = ladder.length;

  return (
    <div className="w-full">
      {/* ── the ladder ── */}
      <div className="relative">
        {/* ascending spine */}
        <svg
          className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <motion.line
            x1="4"
            y1="97"
            x2="72"
            y2="3"
            stroke="var(--gold)"
            strokeWidth="0.25"
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.8, ease: EASE }}
          />
        </svg>

        {/* rungs, top (05) to bottom (01) so it reads as a climb */}
        {[...ladder].reverse().map((r, i) => {
          const realIndex = n - 1 - i;
          const isActive = active === realIndex;
          const dim = active !== null && !isActive;
          // ascending indent: 05 sits furthest right
          const indent = ((n - 1 - i) / (n - 1)) * 100;

          return (
            <motion.div
              key={r.slug}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.09, ease: EASE }}
              onMouseEnter={() => setActive(realIndex)}
              onMouseLeave={() => setActive(null)}
              className="relative"
            >
              <Link
                href={`/practices/${r.slug}`}
                className="group block border-b hairline py-7 transition-colors duration-500 lg:py-8"
                style={{ opacity: dim ? 0.35 : 1 }}
              >
                <div
                  className="flex flex-col gap-3 transition-all duration-700 md:flex-row md:items-baseline md:gap-8"
                  style={{ paddingLeft: `min(${indent * 0.32}%, 220px)` }}
                >
                  {/* step marker + index */}
                  <div className="flex shrink-0 items-center gap-4">
                    <span
                      className="block h-[9px] w-[9px] rotate-45 border transition-all duration-500"
                      style={{
                        borderColor: isActive ? "var(--gold)" : "var(--line-strong)",
                        background: isActive ? "var(--gold)" : "transparent",
                      }}
                    />
                    <span className="mono-num text-sm text-[var(--gold)]">{r.index}</span>
                  </div>

                  {/* verb */}
                  <span
                    className="display text-4xl leading-none transition-colors duration-500 md:text-6xl lg:text-7xl"
                    style={{ color: isActive ? "var(--gold)" : "var(--ink)" }}
                  >
                    {r.verb}
                  </span>

                  {/* name + rung */}
                  <div className="min-w-0 flex-1 md:pb-1">
                    <p className="mono-label text-[var(--ink-2)]">{r.name}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--ink-2)] md:text-[0.95rem]">
                      {r.rung}
                    </p>
                  </div>

                  <svg
                    width="20"
                    height="14"
                    viewBox="0 0 20 14"
                    fill="none"
                    className="hidden shrink-0 self-center text-[var(--ink-3)] transition-all duration-500 group-hover:translate-x-2 group-hover:text-[var(--gold)] md:block"
                  >
                    <path d="M13 1l6 6-6 6M19 7H1" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* ── detail readout ── */}
      <div className="mt-10 min-h-[64px]">
        <AnimatePresence mode="wait">
          {active !== null ? (
            <motion.div
              key={ladder[active].slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap items-baseline gap-x-5 gap-y-2"
            >
              <span className="mono-label text-[var(--gold)]">
                {ladder[active].index} — {ladder[active].verb}
              </span>
              <span className="serif-i text-xl text-[var(--ink-2)] md:text-2xl">
                {ladder[active].short}
              </span>
            </motion.div>
          ) : (
            <motion.p
              key="default"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="serif-i text-xl text-[var(--ink-3)] md:text-2xl"
            >
              Five rungs. One firm. Most businesses are stuck on the first.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
