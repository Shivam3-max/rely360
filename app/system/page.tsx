"use client";

import Link from "next/link";
import { motion } from "motion/react";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";
import Circle360 from "@/components/Circle360";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { framework, kpis, wheel } from "@/lib/data";

export default function SystemPage() {
  return (
    <>
      <PageHero
        kicker="The RELY360 System"
        title={
          <>
            Manufacturing is not departments.
            <br />
            <span className="serif-i text-[var(--gold)]">It's one system.</span>
          </>
        }
        sub="Purchase feeds production. Production feeds quality. Quality feeds people. People feed technology. Technology feeds sales. Sales feed profit. Break one — everything breaks."
      />

      {/* why rely360 exists */}
      <section className="bg-[var(--panel)]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-2">
            <Reveal>
              <p className="mono-label mb-8 text-[var(--gold)]">Why RELY360 Exists</p>
              <h2 className="display-tight text-3xl md:text-5xl">
                Most businesses hire a different consultant for each issue.
              </h2>
            </Reveal>
            <div>
              <Stagger gap={0.08}>
                {[
                  "Multiple vendors",
                  "Conflicting advice",
                  "No ownership",
                  "Poor execution",
                  "Limited long-term impact",
                ].map((x, i) => (
                  <StaggerItem key={x}>
                    <div className="flex items-baseline gap-6 border-b hairline py-5">
                      <span className="mono-num text-sm text-[var(--ink-3)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="display-tight text-xl text-[var(--ink-2)] line-through decoration-[var(--gold)] decoration-1 md:text-2xl">
                        {x}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
              <Reveal delay={0.3}>
                <p className="serif-i mt-10 text-2xl md:text-3xl">
                  Instead — one integrated transformation partner.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* the circle, expanded */}
      <section className="border-t hairline">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <Reveal className="mb-20 text-center">
            <p className="mono-label mb-6 text-[var(--gold)]">What 360° Means</p>
            <h2 className="display-tight mx-auto max-w-3xl text-3xl md:text-5xl">
              Every department works together.
              <br />
              <span className="text-[var(--ink-3)]">So should every solution.</span>
            </h2>
          </Reveal>
          <Circle360 />
        </div>
      </section>

      {/* vertical journey */}
      <section className="border-t hairline bg-[var(--panel)]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <Reveal className="mb-20">
            <p className="mono-label mb-6 text-[var(--gold)]">The Chain of Profit</p>
            <h2 className="display-tight text-3xl md:text-5xl">
              One rupee of revenue.
              <br />
              <span className="text-[var(--ink-3)]">Seven chances to lose it — or multiply it.</span>
            </h2>
          </Reveal>

          <div className="relative mx-auto max-w-3xl">
            <motion.div
              className="absolute left-[7px] top-2 w-px bg-[var(--gold)] md:left-1/2"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 2.4, ease: "easeInOut" }}
            />
            {wheel.map((w, i) => (
              <Reveal key={w.key} delay={i * 0.06}>
                <div
                  className={`relative mb-14 flex flex-col gap-2 pl-10 md:w-1/2 md:pl-0 ${
                    i % 2 === 0
                      ? "md:pr-14 md:text-right"
                      : "md:ml-auto md:pl-14"
                  }`}
                >
                  <span
                    className={`absolute top-1.5 h-[15px] w-[15px] rotate-45 border border-[var(--gold)] bg-[var(--paper)] ${
                      i % 2 === 0
                        ? "left-0 md:left-auto md:-right-[7.5px]"
                        : "left-0 md:-left-[7.5px]"
                    }`}
                  />
                  <span className="mono-label text-[var(--gold)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="display-tight text-2xl md:text-3xl">{w.label}</span>
                  <span className="text-sm leading-relaxed text-[var(--ink-2)]">{w.note}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* transformation framework */}
      <section className="section-dark">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <Reveal className="mb-16">
            <p className="mono-label mb-6 text-[var(--gold-2)]">Our Transformation Framework</p>
            <h2 className="display-tight text-3xl md:text-5xl">
              Every engagement follows one disciplined system.
              <br />
              <span className="serif-i text-[var(--gold-2)]">No guesswork. Only measurable execution.</span>
            </h2>
          </Reveal>

          <Stagger className="grid gap-px bg-[var(--dark-line)] sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7" gap={0.07}>
            {framework.map((f, i) => (
              <StaggerItem key={f.step} className="bg-[var(--dark)]">
                <div className="group flex h-full min-h-[220px] flex-col justify-between p-6 transition-colors duration-500 hover:bg-[var(--dark-2)]">
                  <span className="mono-num text-xs text-[var(--gold-2)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="display-tight mb-3 text-lg">{f.step}</p>
                    <p className="text-[0.72rem] leading-relaxed opacity-55">{f.note}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* we measure what matters */}
      <section>
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
            <Reveal>
              <p className="mono-label mb-6 text-[var(--gold)]">We Measure What Matters</p>
              <h2 className="display-tight text-3xl md:text-5xl">
                Success is measured by outcomes.
                <br />
                <span className="text-[var(--ink-3)]">Not reports.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link href="/assessment" className="link-arrow">
                Measure your business
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M9 1l4 4-4 4M13 5H1" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </Link>
            </Reveal>
          </div>

          <Stagger className="grid grid-cols-2 gap-px bg-[var(--line)] md:grid-cols-3 lg:grid-cols-4" gap={0.05}>
            {kpis.map((k, i) => (
              <StaggerItem key={k} className="bg-[var(--paper)]">
                <div className="group flex min-h-[130px] flex-col justify-between p-6 transition-colors duration-500 hover:bg-[var(--panel)]">
                  <span className="mono-num text-[0.65rem] text-[var(--ink-3)] transition-colors group-hover:text-[var(--gold)]">
                    KPI · {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="display-tight text-lg md:text-xl">{k}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Cta
        kicker="The Difference"
        lineA="The best consulting firms ask: 'What's your problem?'"
        lineB="RELY360 asks: 'How much more profitable can your business become?'"
        button="Find Out — Begin the Assessment"
      />
    </>
  );
}
