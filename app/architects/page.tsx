"use client";

import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { architects } from "@/lib/data";

export default function ArchitectsPage() {
  return (
    <>
      <PageHero
        kicker="Our Team"
        title={
          <>
            Four experts.
            <br />
            <span className="serif-i text-[var(--gold)]">One team for your business.</span>
          </>
        }
        sub="Not career consultants. These are people who have actually run factories, built quality systems, led teams and grown sales. Now they do it for your business."
      />

      <section className="section-dark">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
          <Stagger className="grid gap-px bg-[var(--dark-line)] md:grid-cols-2" gap={0.1}>
            {architects.map((a, i) => (
              <StaggerItem key={a.slug} className="bg-[var(--dark)]">
                <div className="group flex h-full min-h-[420px] flex-col justify-between p-10 transition-colors duration-500 hover:bg-[var(--dark-2)] lg:p-14">
                  <div className="flex items-start justify-between">
                    <span className="mono-num text-xs text-[var(--gold-2)] opacity-70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p
                      className="display text-[4.6rem] leading-none text-transparent transition-colors duration-700 group-hover:text-[var(--gold-2)]"
                      style={{ WebkitTextStroke: "1px var(--gold-2)" }}
                    >
                      {a.initials}
                    </p>
                  </div>
                  <div>
                    <h2 className="display-tight text-3xl md:text-4xl">{a.name}</h2>
                    <p className="mono-label mt-3 text-[var(--gold-2)]">{a.role}</p>
                    <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 border-t hairline pt-6">
                      {a.facts.map((f) => (
                        <span key={f} className="mono-label !text-[0.62rem] opacity-60">
                          {f}
                        </span>
                      ))}
                    </div>
                    <p className="mt-6 max-w-md text-sm leading-relaxed opacity-60">{a.bio}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.15} className="mt-16 text-center">
            <p className="serif-i text-2xl opacity-80 md:text-3xl">
              We don't just give a report and leave. We stay until the work is done.
            </p>
          </Reveal>
        </div>
      </section>

      {/* what we own */}
      <section>
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
          <Reveal className="mb-14">
            <p className="mono-label mb-6 text-[var(--gold)]">Why RELY360</p>
            <h2 className="display-tight max-w-3xl text-3xl md:text-5xl">
              We don't just give advice.
              <br />
              <span className="text-[var(--ink-3)]">We stay until it works.</span>
            </h2>
          </Reveal>
          <Stagger className="grid gap-px bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-5" gap={0.07}>
            {[
              "We stay until the work is done",
              "We train teams",
              "We build systems",
              "We measure the results",
              "We make changes that last",
            ].map((x, i) => (
              <StaggerItem key={x} className="bg-[var(--paper)]">
                <div className="flex min-h-[170px] flex-col justify-between p-7 transition-colors duration-500 hover:bg-[var(--panel)]">
                  <span className="mono-num text-xs text-[var(--gold)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="display-tight text-lg leading-snug">{x}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Cta
        kicker="Contact Us"
        lineA="Talk to an expert."
        lineB="Not a salesperson."
        button="Book a Free Consultation"
      />
    </>
  );
}
