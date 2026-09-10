"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Cta from "@/components/Cta";
import ValueLadder from "@/components/ValueLadder";
import { Reveal, RevealLine, Stagger, StaggerItem } from "@/components/Reveal";
import { practices, udhariFacts } from "@/lib/practices";
import { industries, stories } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;
const r2 = (n: number) => Math.round(n * 100) / 100;

/* ────────────────────────── hero dial ────────────────────────── */
function HeroDial() {
  return (
    <div className="relative h-full w-full">
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
      <svg viewBox="0 0 400 400" className="dial-slower absolute inset-0 h-full w-full">
        <path d="M 200 70 A 130 130 0 0 1 320 155" fill="none" stroke="var(--gold)" strokeWidth="2" />
        <circle cx="200" cy="70" r="3.5" fill="var(--gold)" />
      </svg>
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
        <circle cx="200" cy="200" r="150" fill="none" stroke="var(--line)" strokeWidth="1" />
        <circle cx="200" cy="200" r="108" fill="none" stroke="var(--line)" strokeWidth="0.7" strokeDasharray="2 7" />
        {/* five ascending ticks — the ladder, echoed */}
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={i}
            x1={170 + i * 15}
            y1={230 - i * 14}
            x2={170 + i * 15}
            y2={244 - i * 14}
            stroke="var(--gold)"
            strokeWidth="1.6"
            opacity={0.35 + i * 0.16}
          />
        ))}
        <circle cx="200" cy="200" r="30" fill="none" stroke="var(--ink)" strokeWidth="1" />
        <text
          x="200"
          y="152"
          textAnchor="middle"
          fill="var(--gold)"
          style={{ fontFamily: "var(--font-fragment)", fontSize: "11px", letterSpacing: "0.22em" }}
        >
          360°
        </text>
        <text
          x="200"
          y="272"
          textAnchor="middle"
          fill="var(--ink-3)"
          style={{ fontFamily: "var(--font-fragment)", fontSize: "9px", letterSpacing: "0.3em" }}
        >
          FIVE PRACTICES
        </text>
      </svg>
    </div>
  );
}

function SectionMark({ n, label }: { n: string; label: string }) {
  return (
    <Reveal className="mb-14 flex items-center gap-5">
      <span className="mono-num text-sm text-[var(--gold)]">{n}</span>
      <span className="h-px w-12 bg-[var(--gold)]" />
      <span className="mono-label text-[var(--ink-2)]">{label}</span>
    </Reveal>
  );
}

/* ────────────────────────── the five traps ────────────────────────── */
const traps = [
  {
    name: "The Leak",
    line: "Profit escapes every single day — from machines, purchase, rework and rhythm.",
    answer: "Operate",
    slug: "operations",
  },
  {
    name: "The Margin Trap",
    line: "You manufacture at ten percent. Someone else's label sells it at sixty-five.",
    answer: "Own",
    slug: "brand-demand",
  },
  {
    name: "The Ceiling",
    line: "One outlet works beautifully. There is no system to make it fifty.",
    answer: "Multiply",
    slug: "franchise",
  },
  {
    name: "The Lock",
    line: "Twenty years of value, sitting inside an asset you cannot access or price.",
    answer: "Unlock",
    slug: "capital",
  },
  {
    name: "The Exposure",
    line: "The business outgrew its systems. Nobody has mapped what that now risks.",
    answer: "Govern",
    slug: "governance",
  },
];

/* ════════════════════════════ PAGE ════════════════════════════ */
export default function Home() {
  return (
    <>
      {/* ── 01 · HERO ── */}
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
            RELY360 — Manufacturing & Business Transformation
          </motion.p>

          <h1 className="display max-w-4xl text-[11.5vw] leading-[0.95] sm:text-6xl md:text-7xl lg:text-[5.6rem]">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25, ease: EASE }}
            >
              From running a factory
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.42, ease: EASE }}
            >
              to owning an{" "}
              <span className="serif-i text-[var(--gold)]">enterprise.</span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0, ease: EASE }}
            className="mt-9 max-w-xl text-base leading-relaxed text-[var(--ink-2)] md:text-lg"
          >
            Operations. Brand and D2C. Franchise. Capital and exit. Governance.
            Five practices under one partner — the whole climb from making a product
            to owning something worth selling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.35, ease: EASE }}
            className="mt-12 flex flex-wrap items-center gap-5"
          >
            <Link href="/assessment" className="btn-ink">
              Begin the Assessment
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M9 1l4 4-4 4M13 5H1" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </Link>
            <Link href="/practices" className="btn-ghost">
              The Five Practices
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="mt-20 flex items-center gap-4"
          >
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
            <span className="mono-label text-[var(--ink-3)]">
              One partner · Every function · Measurable growth
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── 02 · THE FIVE TRAPS ── */}
      <section className="border-t hairline bg-[var(--panel)]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-36">
          <SectionMark n="02" label="The Reality" />
          <Reveal>
            <h2 className="display-tight max-w-4xl text-4xl md:text-6xl">
              Businesses don't stall for one reason.
              <br />
              <span className="text-[var(--ink-3)]">They get caught in five.</span>
            </h2>
          </Reveal>

          <Stagger className="mt-20" gap={0.09}>
            {traps.map((t, i) => (
              <StaggerItem key={t.name}>
                <Link
                  href={`/practices/${t.slug}`}
                  className="group grid grid-cols-1 items-baseline gap-3 border-b hairline py-7 transition-colors duration-500 hover:bg-[rgba(169,129,47,0.03)] md:grid-cols-[4rem_18rem_1fr_auto] md:gap-8 md:py-8"
                >
                  <span className="mono-num text-sm text-[var(--gold)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="display-tight text-2xl transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
                    {t.name}
                  </span>
                  <span className="text-sm leading-relaxed text-[var(--ink-2)] md:text-[0.95rem]">
                    {t.line}
                  </span>
                  <span className="mono-label whitespace-nowrap text-[var(--ink-3)] transition-colors duration-500 group-hover:text-[var(--gold)]">
                    → {t.answer}
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.2} className="mt-16">
            <p className="serif-i text-2xl text-[var(--ink-2)] md:text-3xl">
              Most firms sell one escape. We built all five.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 03 · THE VALUE LADDER ── */}
      <section className="border-t hairline">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-36">
          <SectionMark n="03" label="The Value Ladder" />
          <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
            <Reveal>
              <h2 className="display-tight max-w-2xl text-4xl md:text-6xl">
                Five rungs.
                <br />
                <span className="serif-i text-[var(--gold)]">One climb.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-sm text-sm leading-relaxed text-[var(--ink-2)]">
                Each rung stands on the one below it. A business that isn't profitable can't
                be branded. A brand that isn't systematised can't be franchised. And nothing
                unsystematised ever sells for what it's worth.
              </p>
            </Reveal>
          </div>
          <ValueLadder />
        </div>
      </section>

      {/* ── 04 · THE UDHARI TRAP ── */}
      <section className="section-dark">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-36">
          <Reveal className="mb-14 flex items-center gap-5">
            <span className="mono-num text-sm text-[var(--gold-2)]">04</span>
            <span className="h-px w-12 bg-[var(--gold-2)]" />
            <span className="mono-label opacity-60">The Udhari Trap</span>
          </Reveal>

          <Reveal>
            <h2 className="display max-w-4xl text-4xl leading-[1.03] md:text-6xl lg:text-7xl">
              You make the product.
              <br />
              <span className="serif-i text-[var(--gold-2)]">
                Someone else makes the margin.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-10 max-w-2xl text-base leading-[1.85] opacity-70 md:text-lg">
              You manufacture at eight to twelve percent. The brand whose label goes on your
              product sells it at sixty to seventy. Then you wait ninety days to be paid —
              your working capital financing your customer's growth, at your interest cost.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-6 max-w-2xl text-base leading-[1.85] opacity-70 md:text-lg">
              The escape isn't a new factory. It's the same factory, the same product, and a
              direct line to the customer — under a brand you own.
            </p>
          </Reveal>

          <Stagger className="mt-16 grid gap-px bg-[var(--dark-line)] sm:grid-cols-2 lg:grid-cols-4" gap={0.08}>
            {udhariFacts.map((f) => (
              <StaggerItem key={f.label} className="bg-[var(--dark)]">
                <div className="flex h-full min-h-[220px] flex-col justify-between p-8">
                  <p className="display text-4xl text-[var(--gold-2)] md:text-5xl">{f.stat}</p>
                  <div>
                    <p className="mono-label mb-3">{f.label}</p>
                    <p className="text-[0.76rem] leading-relaxed opacity-55">{f.note}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.2}>
            <div className="mt-14">
              <Link href="/practices/brand-demand" className="btn-paper">
                Run your numbers on the Margin Ladder
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M9 1l4 4-4 4M13 5H1" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 05 · PRACTICES ── */}
      <section className="border-t hairline bg-[var(--panel)]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-36">
          <SectionMark n="05" label="The Practices" />
          <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
            <Reveal>
              <h2 className="display-tight text-4xl md:text-6xl">
                Five practices.
                <br />
                <span className="text-[var(--ink-3)]">One accountable partner.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link href="/practices" className="link-arrow">
                All Practices
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M9 1l4 4-4 4M13 5H1" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </Link>
            </Reveal>
          </div>

          <Stagger gap={0.06}>
            {practices.map((p) => (
              <StaggerItem key={p.slug}>
                <Link
                  href={`/practices/${p.slug}`}
                  className="engine-card group grid grid-cols-[3rem_1fr] items-center gap-4 py-7 md:grid-cols-[5rem_11rem_1fr_auto] md:gap-8 md:py-8"
                >
                  <span className="mono-num text-sm text-[var(--gold)]">{p.index}</span>
                  <span className="display-tight text-2xl md:text-3xl">{p.verb}</span>
                  <span className="col-span-2 col-start-1 text-sm leading-relaxed text-[var(--ink-2)] md:col-span-1 md:col-start-3">
                    <span className="mono-label mr-3 text-[var(--ink-3)]">{p.name}</span>
                    {p.short}
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

      {/* ── 06 · INDUSTRIES ── */}
      <section className="border-t hairline">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-36">
          <SectionMark n="06" label="Where We Transform" />
          <div className="mb-14 flex flex-wrap items-end justify-between gap-8">
            <Reveal>
              <h2 className="display-tight text-4xl md:text-6xl">
                If it manufactures,
                <br />
                <span className="serif-i text-[var(--gold)]">we can transform it.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link href="/industries" className="link-arrow">
                All Industries
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M9 1l4 4-4 4M13 5H1" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </Link>
            </Reveal>
          </div>
          <Stagger className="flex flex-wrap gap-2.5" gap={0.03}>
            {industries.map((i) => (
              <StaggerItem key={i.slug}>
                <Link
                  href={`/industries/${i.slug}`}
                  className="inline-block border hairline bg-[var(--panel)] px-5 py-3 text-sm text-[var(--ink-2)] transition-colors duration-300 hover:border-[var(--gold)] hover:text-[var(--ink)]"
                >
                  {i.name}
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
          <RevealLine className="mt-14 h-px w-full bg-[var(--gold)]" delay={0.2} />
        </div>
      </section>

      {/* ── 07 · ARCHITECTS ── */}
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
              { name: "Mohit Sapra", role: "Quality & Operations", facts: ["Operational Excellence", "Plant Leadership"] },
              { name: "Arun Sharma", role: "Business Transformation", facts: ["Leadership", "Execution Systems"] },
              { name: "Shivam Bhandari", role: "Growth, Brand & Digital", facts: ["D2C & Marketing", "Market Expansion"] },
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
                        <p key={f} className="text-xs opacity-55">{f}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── 08 · STORIES ── */}
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

          <div className="grid gap-px bg-[var(--line)] md:grid-cols-3">
            {stories.slice(0, 3).map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.1} className="bg-[var(--paper)]">
                <Link
                  href={`/stories#${s.slug}`}
                  className="group block h-full p-8 transition-colors duration-500 hover:bg-[var(--panel)] lg:p-10"
                >
                  <p className="mono-label mb-6 text-[var(--gold)]">{s.sector}</p>
                  <h3 className="display-tight mb-8 text-xl md:text-2xl">{s.title}</h3>
                  <div className="grid grid-cols-2 gap-5 border-t hairline pt-7">
                    {s.results.slice(0, 2).map((r) => (
                      <div key={r.label}>
                        <p className="mono-num text-lg text-[var(--ink)]">{r.value}</p>
                        <p className="mono-label mt-1.5 !text-[0.55rem] text-[var(--ink-3)]">
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

      {/* ── 09 · CTA ── */}
      <Cta />
    </>
  );
}
