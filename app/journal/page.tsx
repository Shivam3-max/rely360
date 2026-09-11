"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";
import { Stagger, StaggerItem } from "@/components/Reveal";
import { journal } from "@/lib/data";

export default function JournalPage() {
  return (
    <>
      <PageHero
        kicker="Articles"
        title={
          <>
            Simple articles about
            <br />
            <span className="serif-i text-[var(--gold)]">making more money.</span>
          </>
        }
        sub="Short, practical articles on where factories lose money, how to build a brand, and how to grow — written from the shop floor, not a meeting room."
      />

      <section>
        <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-24">
          <Stagger gap={0.08}>
            {journal.map((j, i) => (
              <StaggerItem key={j.slug}>
                <Link
                  href={`/journal/${j.slug}`}
                  className="engine-card group grid gap-4 py-10 md:grid-cols-[130px_1fr_auto] md:gap-12"
                >
                  <div>
                    <p className="mono-label text-[var(--gold)]">{j.topic}</p>
                    <p className="mono-label mt-2 !text-[0.6rem] text-[var(--ink-3)]">
                      {j.read} read
                    </p>
                  </div>
                  <div>
                    <h2 className="display-tight mb-3 text-2xl transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
                      {j.title}
                    </h2>
                    <p className="max-w-2xl text-sm leading-relaxed text-[var(--ink-2)] md:text-base">
                      {j.dek}
                    </p>
                  </div>
                  <span className="mono-num hidden self-start pt-2 text-sm text-[var(--ink-3)] md:block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="border-t hairline" />
        </div>
      </section>

      <Cta
        kicker="Next Step"
        lineA="Reading is free."
        lineB="Doing it is where we help."
        button="Get a Free Business Check"
      />
    </>
  );
}
