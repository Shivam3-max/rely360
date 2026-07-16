"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Circle360 from "@/components/Circle360";
import Cta from "@/components/Cta";
import { Reveal, RevealLine, Stagger, StaggerItem } from "@/components/Reveal";
import { engines, leaks, stories, wheel } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ────────────────────────────── hero dial ornament ────────────────────────────── */
const r2 = (n: number) => Math.round(n * 100) / 100;

function HeroDial() {
  return (
    <div className="relative h-full w-full">
      {/* rotating tick ring — whole svg rotates (compositor-friendly) */}
      <svg viewBox="0 0 400 400" className="dial-slow absolute inset-0 h-full w-full">
        {Array.from({ length: 90 }).map((_, i) => {
          const a = (i * 4 * Math.PI) / 180;
          const major = i % 15 === 0;
          const r0 = major ? 178 : 184;
          return (
            <line
              key={i}
              x1={r2(200 + r0 * Math.cos(a))}
              y1={r2(200 + r0 * Math.sin(a))}
              x2={r2(200 + 190 * Math.cos(a))}
              y2={r2(200 + 190 * Math.sin(a))}
              stroke={major ? "var(--gold)" : "var(--line-strong)"}
              strokeWidth={major ? 1.4 : 0.8}
            />
          );
        })}
      </svg>
      {/* rotating gold sweep */}
      <svg viewBox="0 0 400 400" className="dial-slower absolute inset-0 h-full w-full">
        <path
          d="M 200 70 A 130 130 0 0 1 320 155"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="2"
        />
        <circle cx="200" cy="70" r="3.5" fill="var(--gold)" />
      </svg>
      {/* static layer */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
        <circle cx="200" cy="200" r="150" fill="none" stroke="var(--line)" strokeWidth="1" />
        <circle cx="200" cy="200" r="108" fill="none" stroke="var(--line)" strokeWidth="0.7" strokeDasharray="2 7" />
        <line x1="200" y1="182" x2="200" y2="218" stroke="var(--ink-3)" strokeWidth="0.7" />
        <line x1="182" y1="200" x2="218" y2="200" stroke="var(--ink-3)" strokeWidth="0.7" />
        <circle cx="200" cy="200" r="30" fill="none" stroke="var(--ink)" strokeWidth="1" />
        <text
          x="200"
          y="258"
          textAnchor="middle"
          fill="var(--ink-3)"
          style={{ fontFamily: "var(--font-fragment)", fontSize: "9px", letterSpacing: "0.3em" }}
        >
          PERFORMANCE
        </text>
        <text
          x="200"
          y="152"
          textAnchor="middle"
          fill="var(--gold)"
          style={{ fontFamily: "var(--font-fragment)", fontSize: "11px", letterSpacing: "0.22em" }}
        >
          360°
        </text>
      </svg>
    </div>
  );
}

/* ────────────────────────────── section label ────────────────────────────── */
function SectionMark({ n, label }: { n: string; label: string }) {
  return (
    <Reveal className="mb-14 flex items-center gap-5">
      <span className="mono-num text-sm text-[var(--gold)]">{n}</span>
      <span className="h-px w-12 bg-[var(--gold)]" />
      <span className="mono-label text-[var(--ink-2)]">{label}</span>
    </Reveal>
  );
}

/* ────────────────────────────── system constellation ────────────────────────────── */
function SystemFlow() {
  // node positions across a wide canvas — a system, not a line
  const pts: [number, number][] = [
    [60, 150],
    [220, 70],
    [390, 180],
    [560, 60],
    [730, 160],
    [900, 80],
    [1070, 150],
  ];
  const d = pts
    .map((p, i) => (i === 0 ? `M ${p[0]} ${p[1]}` : `L ${p[0]} ${p[1]}`))
    .join(" ");

  return (
    <div className="overflow-x-auto">
      <svg viewBox="0 0 1130 240" className="min-w-[760px] w-full">
        <motion.path
          d={d}
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1.4"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 2.4, ease: "easeInOut" }}
        />
        {pts.map((p, i) => (
          <g key={i}>
            <motion.circle
              cx={p[0]}
              cy={p[1]}
              r="5"
              fill="var(--paper)"
              stroke="var(--ink)"
              strokeWidth="1.4"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3 * i + 0.2, duration: 0.5, ease: EASE }}
              style={{ transformOrigin: `${p[0]}px ${p[1]}px` }}
            />
            <motion.text
              x={p[0]}
              y={p[1] + (p[1] > 120 ? 34 : -24)}
              textAnchor="middle"
              fill="var(--ink)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3 * i + 0.35, duration: 0.6 }}
              style={{
                fontFamily: "var(--font-fragment)",
                fontSize: "12px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              {wheel[i].label}
            </motion.text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ────────────────────────────── before / after ────────────────────────────── */
const transforms = [
  { label: "Profitability", today: 28, after: 88 },
  { label: "Visibility", today: 18, after: 92 },
  { label: "Quality", today: 40, after: 90 },
  { label: "Leadership", today: 32, after: 85 },
  { label: "Technology", today: 22, after: 86 },
  { label: "Growth", today: 30, after: 94 },
];

function BeforeAfter() {
  return (
    <div className="space-y-9">
      {transforms.map((t, i) => (
        <div key={t.label}>
          <div className="mb-3 flex items-baseline justify-between">
            <span className="display-tight text-xl md:text-2xl">{t.label}</span>
            <span className="mono-label text-[var(--gold)]">
              ↑ transformed
            </span>
          </div>
          <div className="relative h-[3px] w-full bg-[var(--line)]">
            <motion.div
              className="absolute left-0 top-0 h-full bg-[var(--ink-3)]"
              initial={{ width: 0 }}
              whileInView={{ width: `${t.today}%` }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: EASE }}
            />
            <motion.div
              className="absolute left-0 top-0 h-full bg-[var(--gold)]"
              initial={{ width: 0 }}
              whileInView={{ width: `${t.after}%` }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.4, delay: i * 0.08 + 0.5, ease: EASE }}
            />
            <motion.div
              className="absolute top-1/2 h-[11px] w-[11px] -translate-y-1/2 rotate-45 border border-[var(--gold)] bg-[var(--paper)]"
              initial={{ left: "0%", opacity: 0 }}
              whileInView={{ left: `${t.after}%`, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.4, delay: i * 0.08 + 0.5, ease: EASE }}
            />
          </div>
          <div className="mt-2 flex justify-between">
            <span className="mono-label !text-[0.6rem] text-[var(--ink-3)]">business today</span>
            <span className="mono-label !text-[0.6rem] text-[var(--gold)]">after RELY360</span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ════════════════════════════════ PAGE ════════════════════════════════ */
export default function Home() {
  return (
    <>
      {/* ── 01 · HERO ─────────────────────────────────────────── */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="pointer-events-none absolute -right-[12%] top-1/2 hidden h-[720px] w-[720px] -translate-y-1/2 lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, delay: 0.4, ease: EASE }}
            className="h-full w-full"
          >
            <HeroDial />
          </motion.div>
        </div>

        <div className="relative mx-auto w-full max-w-[1400px] px-6 pt-28 pb-20 lg:px-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="mono-label mb-10 text-[var(--ink-2)]"
          >
            RELY360 — Manufacturing Performance Architects
          </motion.p>

          <h1 className="display max-w-5xl text-[13vw] leading-[0.95] sm:text-7xl md:text-8xl lg:text-[6.6rem]">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25, ease: EASE }}
            >
              Every factory has
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: EASE }}
            >
              hidden <span className="serif-i text-[var(--gold)]">profit.</span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: EASE }}
            className="display-tight mt-8 text-3xl text-[var(--ink-2)] md:text-4xl"
          >
            We find it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.45, ease: EASE }}
            className="mt-14 flex flex-wrap items-center gap-5"
          >
            <Link href="/assessment" className="btn-ink">
              Begin the Assessment
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M9 1l4 4-4 4M13 5H1" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </Link>
            <Link href="/system" className="btn-ghost">
              How the System Works
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.9 }}
            className="mt-24 flex items-center gap-4"
          >
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
            <span className="mono-label text-[var(--ink-3)]">
              One partner · Every function · Measurable growth
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── 02 · THE REALITY ─────────────────────────────────────────── */}
      <section className="border-t hairline bg-[var(--panel)]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-36">
          <SectionMark n="02" label="The Reality" />
          <Reveal>
            <h2 className="display-tight max-w-4xl text-4xl md:text-6xl">
              Manufacturers don't fail because they lack orders.
              <br />
              <span className="text-[var(--ink-3)]">They fail because profit leaks every day.</span>
            </h2>
          </Reveal>

          <Stagger className="mt-20" gap={0.09}>
            {leaks.map((l, i) => (
              <StaggerItem key={l}>
                <div className="group flex items-baseline gap-6 border-b hairline py-6 transition-colors duration-500 hover:bg-[rgba(169,129,47,0.03)] md:gap-12 md:py-7">
                  <span className="mono-num w-14 shrink-0 text-sm text-[var(--gold)] md:text-base">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="display-tight text-3xl transition-transform duration-500 group-hover:translate-x-3 md:text-5xl">
                    {l}
                  </span>
                  <span className="ml-auto hidden text-2xl text-[var(--ink-3)] transition-colors duration-500 group-hover:text-[var(--gold)] md:block">
                    ↓
                  </span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.2} className="mt-16">
            <p className="serif-i text-2xl text-[var(--ink-2)] md:text-3xl">
              None of these exist independently.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 03 · THE 360° WHEEL ─────────────────────────────────────────── */}
      <section className="border-t hairline">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-36">
          <SectionMark n="03" label="The 360° View" />
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.15fr]">
            <div>
              <Reveal>
                <h2 className="display-tight text-4xl md:text-6xl">
                  Nobody owns
                  <br />
                  the whole picture.
                  <br />
                  <span className="serif-i text-[var(--gold)]">We do.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-8 max-w-md text-base leading-relaxed text-[var(--ink-2)]">
                  Machine. People. Quality. Purchase. Inventory. Leadership. Sales.
                  Technology. A factory leaks money from hundreds of places — not one.
                  Move around the circle. Every function determines the same outcome.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <p className="mono-label mt-10 text-[var(--ink-3)]">
                  Hover the ring — explore the system
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.2} y={40}>
              <Circle360 />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 04 · SYSTEM STATEMENT ─────────────────────────────────────────── */}
      <section className="border-t hairline bg-[var(--panel)]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-36">
          <SectionMark n="04" label="The Philosophy" />
          <Reveal>
            <h2 className="display max-w-5xl text-4xl leading-[1.02] md:text-6xl lg:text-7xl">
              Businesses aren't built{" "}
              <span className="text-[var(--ink-3)]">department by department.</span>
              <br />
              They're built{" "}
              <span className="serif-i text-[var(--gold)]">system by system.</span>
            </h2>
          </Reveal>
          <div className="mt-24">
            <SystemFlow />
          </div>
          <Reveal delay={0.2} className="mt-14">
            <p className="mono-label text-[var(--ink-3)]">
              Break one — everything breaks. Connect all seven — profit compounds.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 05 · PERFORMANCE ENGINES ─────────────────────────────────────────── */}
      <section className="border-t hairline">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-36">
          <SectionMark n="05" label="Performance Engines" />
          <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
            <Reveal>
              <h2 className="display-tight text-4xl md:text-6xl">
                Seven engines.
                <br />
                <span className="text-[var(--ink-3)]">One destination.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="serif-i max-w-xs text-xl text-[var(--ink-2)]">
                Every engine exists to improve profitability.
              </p>
            </Reveal>
          </div>

          <Stagger gap={0.06}>
            {engines.map((e) => (
              <StaggerItem key={e.slug}>
                <Link
                  href={`/engines/${e.slug}`}
                  className="engine-card group grid grid-cols-[3rem_1fr_auto] items-center gap-4 py-7 md:grid-cols-[5rem_1fr_1fr_auto] md:gap-8 md:py-8"
                >
                  <span className="mono-num text-sm text-[var(--gold)]">{e.index}</span>
                  <span className="display-tight text-2xl md:text-3xl">{e.name}</span>
                  <span className="col-span-3 col-start-2 text-sm leading-relaxed text-[var(--ink-2)] md:col-span-1 md:col-start-3">
                    {e.short}
                  </span>
                  <svg
                    width="20"
                    height="14"
                    viewBox="0 0 20 14"
                    fill="none"
                    className="hidden text-[var(--ink-3)] transition-all duration-500 group-hover:translate-x-2 group-hover:text-[var(--gold)] md:block"
                  >
                    <path d="M13 1l6 6-6 6M19 7H1" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="border-t hairline" />
        </div>
      </section>

      {/* ── 06 · TRANSFORMATION ─────────────────────────────────────────── */}
      <section className="border-t hairline bg-[var(--panel)]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-36">
          <SectionMark n="06" label="The Shift" />
          <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
            <div>
              <Reveal>
                <h2 className="display-tight text-4xl md:text-6xl">
                  Business today.
                  <br />
                  <span className="serif-i text-[var(--gold)]">Business after RELY360.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-8 max-w-md text-base leading-relaxed text-[var(--ink-2)]">
                  Machine efficiency up. Scrap down. Purchase cost down. First pass
                  yield up. Employee skills up. Brand value up. Sales up. Profit up.
                  Everything connected. Everything measurable.
                </p>
              </Reveal>
              <RevealLine className="mt-12 h-px w-full max-w-md bg-[var(--gold)]" delay={0.3} />
            </div>
            <BeforeAfter />
          </div>
        </div>
      </section>

      {/* ── 07 · THE ARCHITECTS ─────────────────────────────────────────── */}
      <section className="section-dark">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-36">
          <Reveal className="mb-14 flex items-center gap-5">
            <span className="mono-num text-sm text-[var(--gold-2)]">07</span>
            <span className="h-px w-12 bg-[var(--gold-2)]" />
            <span className="mono-label opacity-60">Meet the Architects</span>
          </Reveal>

          <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
            <Reveal>
              <h2 className="display-tight text-4xl md:text-6xl">
                Four specialists.
                <br />
                <span className="serif-i text-[var(--gold-2)]">One transformation team.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link href="/architects" className="link-arrow !text-[var(--paper-on-dark)] hover:!text-[var(--gold-2)]">
                The Architects
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M9 1l4 4-4 4M13 5H1" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </Link>
            </Reveal>
          </div>

          <Stagger className="grid gap-px bg-[var(--dark-line)] sm:grid-cols-2 lg:grid-cols-4" gap={0.1}>
            {[
              { name: "Sandeep Sood", role: "Manufacturing Excellence", facts: ["20+ Years", "Plant Leadership"] },
              { name: "Mohit Sapra", role: "Quality Systems", facts: ["Operational Excellence", "Plant Leadership"] },
              { name: "Arun Sharma", role: "Business Transformation", facts: ["Leadership", "Execution Systems"] },
              { name: "Shivam Bhandari", role: "Growth & Digital", facts: ["Technology", "Market Expansion"] },
            ].map((a, i) => (
              <StaggerItem key={a.name} className="bg-[var(--dark)]">
                <div className="group flex h-full flex-col justify-between p-8 transition-colors duration-500 hover:bg-[var(--dark-2)]">
                  <div className="mb-20">
                    <span className="mono-num text-xs text-[var(--gold-2)] opacity-70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <p
                      className="display mb-2 text-[3.4rem] leading-none text-transparent transition-colors duration-700 group-hover:text-[var(--gold-2)]"
                      style={{ WebkitTextStroke: "1px var(--gold-2)" }}
                    >
                      {a.name.split(" ").map((w) => w[0]).join("")}
                    </p>
                    <p className="display-tight mt-6 text-xl">{a.name}</p>
                    <p className="mono-label mt-2 text-[var(--gold-2)]">{a.role}</p>
                    <div className="mt-5 space-y-1.5">
                      {a.facts.map((f) => (
                        <p key={f} className="text-xs opacity-55">
                          {f}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── 08 · TRANSFORMATION STORIES ─────────────────────────────────────────── */}
      <section>
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-36">
          <SectionMark n="08" label="Transformation Stories" />
          <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
            <Reveal>
              <h2 className="display-tight text-4xl md:text-6xl">
                Real impact.
                <br />
                <span className="text-[var(--ink-3)]">Not praise.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link href="/stories" className="link-arrow">
                All Stories
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M9 1l4 4-4 4M13 5H1" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-px bg-[var(--line)] md:grid-cols-2">
            {stories.slice(0, 2).map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.12} className="bg-[var(--paper)]">
                <Link href={`/stories#${s.slug}`} className="group block h-full p-9 transition-colors duration-500 hover:bg-[var(--panel)] md:p-12">
                  <p className="mono-label mb-6 text-[var(--gold)]">{s.sector}</p>
                  <h3 className="display-tight mb-8 text-2xl md:text-3xl">{s.title}</h3>
                  <div className="grid grid-cols-2 gap-6 border-t hairline pt-8">
                    {s.results.slice(0, 2).map((r) => (
                      <div key={r.label}>
                        <p className="mono-num text-xl text-[var(--ink)] md:text-2xl">{r.value}</p>
                        <p className="mono-label mt-1.5 !text-[0.6rem] text-[var(--ink-3)]">
                          {r.direction === "up" ? "↑" : "↓"} {r.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 09 · CTA ─────────────────────────────────────────── */}
      <Cta />
    </>
  );
}
