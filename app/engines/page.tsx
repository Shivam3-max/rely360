"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { engines } from "@/lib/data";

export default function EnginesPage() {
  return (
    <>
      <PageHero
        kicker="Performance Engines"
        title={
          <>
            Seven engines.
            <br />
            <span className="serif-i text-[var(--gold)]">One destination.</span>
          </>
        }
        sub="We don't sell services. We install engines — interconnected systems that each exist for exactly one reason: to improve profitability."
      />

      <section>
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
          <Stagger className="grid gap-px bg-[var(--line)] md:grid-cols-2 lg:grid-cols-3" gap={0.07}>
            {engines.map((e) => (
              <StaggerItem key={e.slug} className="bg-[var(--paper)]">
                <Link
                  href={`/engines/${e.slug}`}
                  className="group flex h-full min-h-[320px] flex-col justify-between p-9 transition-colors duration-500 hover:bg-[var(--panel)]"
                >
                  <div className="flex items-start justify-between">
                    <span className="mono-num text-sm text-[var(--gold)]">Engine {e.index}</span>
                    <svg
                      width="20"
                      height="14"
                      viewBox="0 0 20 14"
                      fill="none"
                      className="mt-1 text-[var(--ink-3)] transition-all duration-500 group-hover:translate-x-2 group-hover:text-[var(--gold)]"
                    >
                      <path d="M13 1l6 6-6 6M19 7H1" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="display-tight mb-4 text-2xl md:text-3xl">{e.name}</h2>
                    <p className="text-sm leading-relaxed text-[var(--ink-2)]">{e.short}</p>
                    <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 border-t hairline pt-6">
                      {e.impact.slice(0, 2).map((m) => (
                        <span key={m.metric} className="mono-label !text-[0.62rem] text-[var(--ink-3)]">
                          <span className="text-[var(--gold)]">{m.direction === "up" ? "↑" : "↓"}</span>{" "}
                          {m.metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}

            {/* filler tile completing the grid */}
            <StaggerItem className="bg-[var(--dark)]">
              <div className="flex h-full min-h-[320px] flex-col justify-between p-9 text-[var(--paper-on-dark)]">
                <span className="mono-num text-sm text-[var(--gold-2)]">Σ</span>
                <div>
                  <p className="display-tight text-2xl md:text-3xl">
                    Every engine exists to improve{" "}
                    <span className="serif-i text-[var(--gold-2)]">profitability.</span>
                  </p>
                  <p className="mt-5 text-sm leading-relaxed opacity-60">
                    Run one engine and you fix a department. Run seven and you transform
                    a business.
                  </p>
                </div>
              </div>
            </StaggerItem>
          </Stagger>

          <Reveal delay={0.15} className="mt-16 text-center">
            <p className="serif-i text-2xl text-[var(--ink-2)] md:text-3xl">
              Not Operations. Not HR. Not Marketing. Not Quality. — Profitability.
            </p>
          </Reveal>
        </div>
      </section>

      <Cta />
    </>
  );
}
