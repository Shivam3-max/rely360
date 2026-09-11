"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { industries } from "@/lib/data";

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        kicker="Industries We Work In"
        title={
          <>
            If you manufacture it,
            <br />
            <span className="serif-i text-[var(--gold)]">we can improve it.</span>
          </>
        }
        sub="Every industry loses money in different places. The way we find it is the same."
      />

      <section>
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
          <Stagger className="grid gap-px bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3" gap={0.05}>
            {industries.map((ind, i) => (
              <StaggerItem key={ind.slug} className="bg-[var(--paper)]">
                <Link
                  href={`/industries/${ind.slug}`}
                  className="group flex h-full min-h-[240px] flex-col justify-between p-8 transition-colors duration-500 hover:bg-[var(--panel)]"
                >
                  <div className="flex items-start justify-between">
                    <span className="mono-num text-xs text-[var(--ink-3)] transition-colors group-hover:text-[var(--gold)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <svg
                      width="18"
                      height="13"
                      viewBox="0 0 20 14"
                      fill="none"
                      className="text-[var(--ink-3)] transition-all duration-500 group-hover:translate-x-2 group-hover:text-[var(--gold)]"
                    >
                      <path d="M13 1l6 6-6 6M19 7H1" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="display-tight mb-3 text-2xl">{ind.name}</h2>
                    <p className="text-[0.83rem] leading-relaxed text-[var(--ink-2)]">{ind.line}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1} className="mt-16 text-center">
            <p className="serif-i text-2xl text-[var(--ink-2)] md:text-3xl">
              The industry changes the vocabulary. Never the physics of profit.
            </p>
          </Reveal>
        </div>
      </section>

      <Cta />
    </>
  );
}
