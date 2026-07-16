"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { wheel } from "@/lib/data";

const SIZE = 680;
const C = SIZE / 2;
const R_ARC = 252; // arc centerline radius
const ARC_W = 40;
const R_LABEL = 306;
const GAP_DEG = 5;

const r2 = (n: number) => Math.round(n * 100) / 100;

function polar(r: number, deg: number) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return [r2(C + r * Math.cos(rad)), r2(C + r * Math.sin(rad))] as const;
}

function arcPath(r: number, a0: number, a1: number) {
  const [x0, y0] = polar(r, a0);
  const [x1, y1] = polar(r, a1);
  const large = a1 - a0 > 180 ? 1 : 0;
  return `M ${x0} ${y0} A ${r} ${r} 0 ${large} 1 ${x1} ${y1}`;
}

export default function Circle360() {
  const [active, setActive] = useState<number | null>(null);
  const seg = 360 / wheel.length;

  return (
    <div className="relative mx-auto w-full max-w-[720px]">
      {/* rotating tick ring — separate svg so the rotation runs on the compositor */}
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="dial-slow pointer-events-none absolute inset-0 w-full"
      >
        {Array.from({ length: 120 }).map((_, i) => {
          const a = i * 3;
          const major = i % 10 === 0;
          const [x0, y0] = polar(major ? 322 : 328, a);
          const [x1, y1] = polar(334, a);
          return (
            <line
              key={i}
              x1={x0}
              y1={y0}
              x2={x1}
              y2={y1}
              stroke={major ? "var(--gold)" : "var(--line-strong)"}
              strokeWidth={major ? 1.2 : 0.7}
            />
          );
        })}
      </svg>

      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="relative w-full">
        {/* faint guide circles */}
        <circle cx={C} cy={C} r={210} fill="none" stroke="var(--line)" strokeWidth="1" />
        <circle cx={C} cy={C} r={160} fill="none" stroke="var(--line)" strokeWidth="0.6" strokeDasharray="2 6" />

        {/* segments */}
        {wheel.map((w, i) => {
          const a0 = i * seg + GAP_DEG / 2;
          const a1 = (i + 1) * seg - GAP_DEG / 2;
          const mid = (a0 + a1) / 2;
          const [lx, ly] = polar(R_LABEL, mid);
          const [nx, ny] = polar(R_ARC - ARC_W / 2 - 18, mid);
          const isActive = active === i;
          const dim = active !== null && !isActive;
          const anchor = mid > 15 && mid < 165 ? "start" : mid > 195 && mid < 345 ? "end" : "middle";

          return (
            <g
              key={w.key}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setActive(isActive ? null : i)}
              style={{ cursor: "pointer" }}
            >
              {/* hit area */}
              <path
                d={arcPath(R_ARC, a0, a1)}
                fill="none"
                stroke="transparent"
                strokeWidth={ARC_W + 44}
              />
              {/* visible arc */}
              <path
                d={arcPath(R_ARC, a0, a1)}
                fill="none"
                stroke={isActive ? "var(--gold)" : "var(--ink)"}
                strokeWidth={isActive ? ARC_W + 6 : ARC_W}
                opacity={dim ? 0.14 : isActive ? 1 : 0.88}
                style={{ transition: "all .5s cubic-bezier(.22,1,.36,1)" }}
              />
              {/* index numeral inside */}
              <text
                x={nx}
                y={ny}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={isActive ? "var(--gold)" : "var(--ink-3)"}
                opacity={dim ? 0.25 : 1}
                style={{
                  fontFamily: "var(--font-fragment)",
                  fontSize: "13px",
                  transition: "all .4s ease",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </text>
              {/* label outside */}
              <text
                x={lx}
                y={ly}
                textAnchor={anchor}
                dominantBaseline="middle"
                fill={isActive ? "var(--gold)" : "var(--ink)"}
                opacity={dim ? 0.3 : 1}
                style={{
                  fontFamily: "var(--font-fragment)",
                  fontSize: "13.5px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  transition: "all .4s ease",
                }}
              >
                {w.label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* empty center — the business */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[42%] text-center">
          <AnimatePresence mode="wait">
            {active === null ? (
              <motion.div
                key="default"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                <p className="mono-label mb-3 text-[var(--gold)]">The Center</p>
                <p className="display-tight text-lg leading-snug md:text-2xl">
                  is your business.
                </p>
                <p className="mt-3 text-xs leading-relaxed text-[var(--ink-2)] md:text-sm">
                  Everything around it determines profitability.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key={wheel[active].key}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                <p className="mono-label mb-3 text-[var(--gold)]">
                  {String(active + 1).padStart(2, "0")} — {wheel[active].label}
                </p>
                <p className="display-tight text-base leading-snug md:text-xl">
                  {wheel[active].note}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
