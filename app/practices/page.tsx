"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";
import ValueLadder from "@/components/ValueLadder";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { practices } from "@/lib/practices";

export default function PracticesPage() {
  return (
    <>
      <PageHero
        kicker="Our Five Services"
        title={
          <>
            One partner for all five
            <br />
            <span className="serif-i text-[var(--gold)]">services.</span>
          </>
        }
        sub="Most people sell you one thing. An operations consultant here, a marketing agency there, a broker when you want to sell. Nobody is responsible for the whole business. We do all five."
      />

      {/* the ladder */}
      <section className="border-b hairline bg-[var(--panel)]">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
          <ValueLadder />
        </div>
      </section>

      {/* practice cards */}
      <section>
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
          <Reveal className="mb-14">
            <p className="mono-label mb-6 text-[var(--gold)]">What Each One Does</p>
            <h2 className="display-tight max-w-3xl text-3xl md:text-5xl">
              Take one service.
              <br />
              <span className="text-[var(--ink-3)]">Or take all five.</span>
            </h2>
          </Reveal>

          <Stagger className="grid gap-px bg-[var(--line)] md:grid-cols-2" gap={0.07}>
            {practices.map((p) => (
              <StaggerItem key={p.slug} className="bg-[var(--paper)]">
                <Link
                  href={`/practices/${p.slug}`}
                  className="group flex h-full min-h-[340px] flex-col justify-between p-9 transition-colors duration-500 hover:bg-[var(--panel)] lg:p-12"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <span className="mono-num text-sm text-[var(--gold)]">{p.index}</span>
                      <p className="display mt-4 text-4xl md:text-5xl">{p.verb}</p>
                    </div>
                    <svg
                      width="20"
                      height="14"
                      viewBox="0 0 20 14"
                      fill="none"
                      className="mt-2 shrink-0 text-[var(--ink-3)] transition-all duration-500 group-hover:translate-x-2 group-hover:text-[var(--gold)]"
                    >
                      <path d="M13 1l6 6-6 6M19 7H1" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                  </div>

                  <div className="mt-10">
                    <p className="mono-label mb-3 text-[var(--ink-2)]">{p.name}</p>
                    <p className="text-[0.95rem] leading-relaxed text-[var(--ink-2)]">{p.short}</p>
                    <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 border-t hairline pt-6">
                      {p.outcomes.slice(0, 3).map((o) => (
                        <span key={o.metric} className="mono-label !text-[0.6rem] text-[var(--ink-3)]">
                          <span className="text-[var(--gold)]">
                            {o.direction === "up" ? "↑" : "↓"}
                          </span>{" "}
                          {o.metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}

            {/* closing tile */}
            <StaggerItem className="bg-[var(--dark)]">
              <div className="flex h-full min-h-[340px] flex-col justify-between p-9 text-[var(--paper-on-dark)] lg:p-12">
                <span className="mono-num text-sm text-[var(--gold-2)]">Σ</span>
                <div>
                  <p className="display-tight text-2xl md:text-3xl">
                    A factory that makes good profit, has its own brand, franchise outlets
                    and clean records is worth far more.
                    <br />
                    <span className="serif-i text-[var(--gold-2)]">
                      It is a completely different business.
                    </span>
                  </p>
                  <p className="mt-6 text-sm leading-relaxed opacity-60">
                    That is why one partner for everything works better than five different
                    people, none of whom is responsible for the final result.
                  </p>
                </div>
              </div>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      <Cta />
    </>
  );
}
