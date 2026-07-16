import { notFound } from "next/navigation";
import Link from "next/link";
import Cta from "@/components/Cta";
import PageHero from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { engines, industries } from "@/lib/data";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) notFound();

  const focusEngines = ind.focus
    .map((f) => engines.find((e) => e.slug === f))
    .filter(Boolean) as typeof engines;

  const idx = industries.findIndex((i) => i.slug === slug);
  const next = industries[(idx + 1) % industries.length];

  return (
    <>
      <PageHero
        kicker={`Where We Transform — ${String(idx + 1).padStart(2, "0")}`}
        title={
          <>
            {ind.name}
            <span className="text-[var(--gold)]">.</span>
          </>
        }
        sub={ind.line}
      />

      <section className="bg-[var(--panel)]">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <Reveal>
                <p className="mono-label mb-8 text-[var(--gold)]">Where the profit leaks</p>
              </Reveal>
              <Stagger gap={0.1}>
                {ind.challenges.map((c, i) => (
                  <StaggerItem key={c}>
                    <div className="flex items-baseline gap-6 border-b hairline py-6">
                      <span className="mono-num shrink-0 text-sm text-[var(--gold)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-base leading-relaxed text-[var(--ink-2)] md:text-lg">{c}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>

            <div>
              <Reveal delay={0.1}>
                <p className="mono-label mb-8 text-[var(--gold)]">Engines we lead with</p>
              </Reveal>
              <Stagger gap={0.1}>
                {focusEngines.map((e) => (
                  <StaggerItem key={e.slug}>
                    <Link
                      href={`/engines/${e.slug}`}
                      className="group mb-4 flex items-center justify-between border hairline bg-[var(--paper)] p-6 transition-colors duration-300 hover:border-[var(--gold)]"
                    >
                      <div>
                        <p className="mono-num mb-1 text-xs text-[var(--ink-3)]">Engine {e.index}</p>
                        <p className="display-tight text-xl transition-colors group-hover:text-[var(--gold)]">
                          {e.name}
                        </p>
                      </div>
                      <svg
                        width="18"
                        height="13"
                        viewBox="0 0 20 14"
                        fill="none"
                        className="text-[var(--ink-3)] transition-all duration-500 group-hover:translate-x-2 group-hover:text-[var(--gold)]"
                      >
                        <path d="M13 1l6 6-6 6M19 7H1" stroke="currentColor" strokeWidth="1.2" />
                      </svg>
                    </Link>
                  </StaggerItem>
                ))}
              </Stagger>
              <Reveal delay={0.2}>
                <p className="mt-8 text-sm leading-relaxed text-[var(--ink-2)]">
                  Every engagement still begins with the full 360° diagnostic — the leading
                  engines simply tell us where the fastest payback usually hides in{" "}
                  {ind.name.toLowerCase()}.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* next industry */}
      <section className="border-t hairline">
        <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
          <Link href={`/industries/${next.slug}`} className="group flex items-center justify-between">
            <div>
              <p className="mono-label mb-3 text-[var(--ink-3)]">Next Industry</p>
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
        kicker={ind.name}
        lineA="How much hidden profit sits"
        lineB="in your plant?"
        button="Begin the Assessment"
      />
    </>
  );
}
