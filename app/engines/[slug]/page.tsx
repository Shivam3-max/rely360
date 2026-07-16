import { notFound } from "next/navigation";
import Link from "next/link";
import Cta from "@/components/Cta";
import PageHero from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { engines } from "@/lib/data";

export function generateStaticParams() {
  return engines.map((e) => ({ slug: e.slug }));
}

export default async function EnginePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const engine = engines.find((e) => e.slug === slug);
  if (!engine) notFound();

  const idx = engines.findIndex((e) => e.slug === slug);
  const next = engines[(idx + 1) % engines.length];

  return (
    <>
      <PageHero
        kicker={`Engine ${engine.index} — ${engine.name}`}
        title={
          <>
            {engine.headline[0]}
            <br />
            <span className="serif-i text-[var(--gold)]">{engine.headline[1]}</span>
          </>
        }
      />

      {/* problems → approach → impact */}
      <section className="bg-[var(--panel)]">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-3 lg:gap-10">
            <div>
              <Reveal>
                <p className="mono-label mb-8 text-[var(--gold)]">01 — The Problems</p>
              </Reveal>
              <Stagger gap={0.09}>
                {engine.problems.map((p) => (
                  <StaggerItem key={p}>
                    <p className="gold-tick mb-6 text-base leading-relaxed text-[var(--ink-2)]">
                      {p}
                    </p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
            <div>
              <Reveal delay={0.08}>
                <p className="mono-label mb-8 text-[var(--gold)]">02 — Our Approach</p>
              </Reveal>
              <Stagger gap={0.09}>
                {engine.approach.map((p) => (
                  <StaggerItem key={p}>
                    <p className="gold-tick mb-6 text-base leading-relaxed text-[var(--ink)]">
                      {p}
                    </p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
            <div>
              <Reveal delay={0.16}>
                <p className="mono-label mb-8 text-[var(--gold)]">03 — The Impact</p>
              </Reveal>
              <Stagger gap={0.09}>
                {engine.impact.map((m) => (
                  <StaggerItem key={m.metric}>
                    <div className="mb-4 flex items-center justify-between border-b hairline pb-4">
                      <span className="display-tight text-lg">{m.metric}</span>
                      <span className="mono-num text-xl text-[var(--gold)]">
                        {m.direction === "up" ? "↑" : "↓"}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      {/* capability field */}
      <section className="border-t hairline">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
          <Reveal className="mb-12">
            <p className="mono-label mb-6 text-[var(--gold)]">Inside the Engine</p>
            <h2 className="display-tight max-w-2xl text-3xl md:text-4xl">
              The working parts.
            </h2>
          </Reveal>
          <Stagger className="flex flex-wrap gap-3" gap={0.03}>
            {engine.services.map((s) => (
              <StaggerItem key={s}>
                <span className="inline-block border hairline bg-[var(--panel)] px-5 py-3 text-sm text-[var(--ink-2)] transition-colors duration-300 hover:border-[var(--gold)] hover:text-[var(--ink)]">
                  {s}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* next engine */}
      <section className="border-t hairline bg-[var(--panel)]">
        <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
          <Link
            href={`/engines/${next.slug}`}
            className="group flex items-center justify-between"
          >
            <div>
              <p className="mono-label mb-3 text-[var(--ink-3)]">Next Engine — {next.index}</p>
              <p className="display-tight text-3xl transition-colors duration-300 group-hover:text-[var(--gold)] md:text-5xl">
                {next.name}
              </p>
            </div>
            <svg
              width="34"
              height="24"
              viewBox="0 0 34 24"
              fill="none"
              className="shrink-0 text-[var(--ink-3)] transition-all duration-500 group-hover:translate-x-3 group-hover:text-[var(--gold)]"
            >
              <path d="M22 2l10 10-10 10M32 12H0" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </Link>
        </div>
      </section>

      <Cta
        kicker={engine.name}
        lineA="How much is this engine worth"
        lineB="in your plant?"
        button="Begin the Assessment"
      />
    </>
  );
}
