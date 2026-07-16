"use client";

import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { stories } from "@/lib/data";

const stages = ["The Problem", "The Investigation", "The Solution"] as const;

export default function StoriesPage() {
  return (
    <>
      <PageHero
        kicker="Transformation Stories"
        title={
          <>
            Before.
            <br />
            <span className="serif-i text-[var(--gold)]">After.</span>
          </>
        }
        sub="Not testimonials. Case studies — the problem, the investigation, the solution, the measured result. Engagement details anonymized; the numbers are the kind we sign up for."
      />

      <section>
        <div className="mx-auto max-w-[1400px] px-6 py-10 lg:px-10">
          {stories.map((s, si) => {
            const texts = [s.problem, s.investigation, s.solution];
            return (
              <article
                key={s.slug}
                id={s.slug}
                className="border-b hairline py-16 last:border-b-0 lg:py-24"
              >
                <Reveal>
                  <div className="mb-4 flex items-center gap-5">
                    <span className="mono-num text-sm text-[var(--gold)]">
                      {String(si + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px w-12 bg-[var(--gold)]" />
                    <span className="mono-label text-[var(--ink-2)]">{s.sector}</span>
                  </div>
                </Reveal>
                <Reveal delay={0.08}>
                  <h2 className="display-tight mb-14 max-w-3xl text-3xl md:text-5xl">{s.title}</h2>
                </Reveal>

                <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
                  <Stagger gap={0.12}>
                    {stages.map((st, i) => (
                      <StaggerItem key={st}>
                        <div className="mb-10 grid gap-3 md:grid-cols-[180px_1fr] md:gap-8">
                          <p className="mono-label pt-1 text-[var(--gold)]">{st}</p>
                          <p className="text-base leading-relaxed text-[var(--ink-2)]">
                            {texts[i]}
                          </p>
                        </div>
                      </StaggerItem>
                    ))}
                  </Stagger>

                  <Reveal delay={0.15}>
                    <div className="border hairline bg-[var(--panel)] p-8">
                      <p className="mono-label mb-8 text-[var(--gold)]">The Result</p>
                      <div className="space-y-7">
                        {s.results.map((r) => (
                          <div key={r.label} className="flex items-baseline justify-between gap-4 border-b hairline pb-4 last:border-b-0 last:pb-0">
                            <span className="text-sm text-[var(--ink-2)]">{r.label}</span>
                            <span className="mono-num text-lg text-[var(--ink)] md:text-xl">
                              <span className="mr-2 text-[var(--gold)]">
                                {r.direction === "up" ? "↑" : "↓"}
                              </span>
                              {r.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <Cta
        kicker="Your Story"
        lineA="The next transformation story"
        lineB="could carry your numbers."
        button="Start the Conversation"
        href="/contact"
      />
    </>
  );
}
