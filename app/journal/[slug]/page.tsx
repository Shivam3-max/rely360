import { notFound } from "next/navigation";
import Link from "next/link";
import Cta from "@/components/Cta";
import { Reveal } from "@/components/Reveal";
import { journal } from "@/lib/data";

export function generateStaticParams() {
  return journal.map((j) => ({ slug: j.slug }));
}

export default async function JournalEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = journal.find((j) => j.slug === slug);
  if (!entry) notFound();

  const idx = journal.findIndex((j) => j.slug === slug);
  const next = journal[(idx + 1) % journal.length];

  return (
    <>
      <section className="border-b hairline">
        <div className="mx-auto max-w-[880px] px-6 pb-16 pt-40 lg:pb-20 lg:pt-48">
          <Reveal>
            <div className="mb-8 flex flex-wrap items-center gap-5">
              <span className="mono-label text-[var(--gold)]">{entry.topic}</span>
              <span className="h-px w-10 bg-[var(--line-strong)]" />
              <span className="mono-label text-[var(--ink-3)]">{entry.read} read</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="display text-4xl md:text-6xl">{entry.title}</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="serif-i mt-8 text-xl leading-relaxed text-[var(--ink-2)] md:text-2xl">
              {entry.dek}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--panel)]">
        <div className="mx-auto max-w-[880px] px-6 py-16 lg:py-24">
          {entry.body.map((p, i) => (
            <Reveal key={i} delay={i === 0 ? 0.05 : 0}>
              <p
                className={`mb-8 leading-[1.85] text-[var(--ink-2)] ${
                  i === 0
                    ? "text-lg text-[var(--ink)] md:text-xl"
                    : "text-base md:text-[1.06rem]"
                }`}
              >
                {p}
              </p>
            </Reveal>
          ))}

          <Reveal>
            <div className="mt-16 border-t hairline pt-10">
              <p className="mono-label mb-3 text-[var(--ink-3)]">Performance Journal</p>
              <p className="text-sm text-[var(--ink-2)]">
                Written by the RELY360 architects — from live engagements across Indian
                manufacturing.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t hairline">
        <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
          <Link href={`/journal/${next.slug}`} className="group flex items-center justify-between">
            <div>
              <p className="mono-label mb-3 text-[var(--ink-3)]">Next Entry — {next.topic}</p>
              <p className="display-tight max-w-3xl text-2xl transition-colors duration-300 group-hover:text-[var(--gold)] md:text-4xl">
                {next.title}
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

      <Cta />
    </>
  );
}
