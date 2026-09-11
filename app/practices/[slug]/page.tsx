import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";
import Circle360 from "@/components/Circle360";
import MarginLadder from "@/components/MarginLadder";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { practices, practiceBySlug, udhariFacts } from "@/lib/practices";
import { engines } from "@/lib/data";

export function generateStaticParams() {
  return practices.map((p) => ({ slug: p.slug }));
}

export default async function PracticePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = practiceBySlug(slug);
  if (!p) notFound();

  const idx = practices.findIndex((x) => x.slug === slug);
  const next = practices[(idx + 1) % practices.length];

  return (
    <>
      <PageHero
        kicker={`Service ${p.index} — ${p.verb}`}
        title={
          <>
            {p.headline[0]}
            <br />
            <span className="serif-i text-[var(--gold)]">{p.headline[1]}</span>
          </>
        }
        sub={p.short}
      />

      {/* ── thesis ── */}
      <section className="bg-[var(--panel)]">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-20">
            <Reveal>
              <p className="mono-label text-[var(--gold)]">Why This Matters</p>
            </Reveal>
            <div className="max-w-3xl">
              {p.thesis.map((t, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <p
                    className={`mb-7 leading-[1.85] ${
                      i === 0
                        ? "text-lg text-[var(--ink)] md:text-xl"
                        : "text-base text-[var(--ink-2)] md:text-[1.05rem]"
                    }`}
                  >
                    {t}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── udhari facts — brand practice only ── */}
      {p.slug === "brand-demand" && (
        <section className="section-dark">
          <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
            <Reveal className="mb-14">
              <p className="mono-label mb-6 text-[var(--gold-2)]">The Udhari Problem</p>
              <h2 className="display-tight max-w-3xl text-3xl md:text-5xl">
                Four numbers every factory owner
                <br />
                <span className="serif-i text-[var(--gold-2)]">already knows, but nobody says out loud.</span>
              </h2>
            </Reveal>
            <Stagger className="grid gap-px bg-[var(--dark-line)] sm:grid-cols-2 lg:grid-cols-4" gap={0.08}>
              {udhariFacts.map((f) => (
                <StaggerItem key={f.label} className="bg-[var(--dark)]">
                  <div className="flex h-full min-h-[230px] flex-col justify-between p-8">
                    <p className="display text-4xl text-[var(--gold-2)] md:text-5xl">{f.stat}</p>
                    <div>
                      <p className="mono-label mb-3 text-[var(--paper-on-dark)]">{f.label}</p>
                      <p className="text-[0.78rem] leading-relaxed opacity-55">{f.note}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {/* ── problems ── */}
      <section className="border-t hairline">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
          <Reveal className="mb-14">
            <p className="mono-label mb-6 text-[var(--gold)]">Common Problems</p>
            <h2 className="display-tight max-w-2xl text-3xl md:text-5xl">
              What we see in most businesses.
            </h2>
          </Reveal>
          <Stagger className="grid gap-px bg-[var(--line)] md:grid-cols-2" gap={0.07}>
            {p.problems.map((pr, i) => (
              <StaggerItem key={pr.title} className="bg-[var(--paper)]">
                <div className="h-full p-8 transition-colors duration-500 hover:bg-[var(--panel)] lg:p-10">
                  <span className="mono-num text-sm text-[var(--gold)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display-tight mb-4 mt-5 text-xl md:text-2xl">{pr.title}</h3>
                  <p className="text-[0.9rem] leading-relaxed text-[var(--ink-2)]">{pr.detail}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── margin ladder — brand practice only ── */}
      {p.slug === "brand-demand" && (
        <section className="border-t hairline bg-[var(--panel)]">
          <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
            <Reveal className="mb-14">
              <p className="mono-label mb-6 text-[var(--gold)]">Check Your Own Numbers</p>
              <h2 className="display-tight max-w-3xl text-3xl md:text-5xl">
                Put your own figures in.
                <br />
                <span className="text-[var(--ink-3)]">
                  The maths surprises everyone the first time.
                </span>
              </h2>
            </Reveal>
            <MarginLadder />
          </div>
        </section>
      )}

      {/* ── the 360 wheel — operations practice only ── */}
      {p.slug === "operations" && (
        <section className="border-t hairline bg-[var(--panel)]">
          <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
            <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.15fr]">
              <div>
                <Reveal>
                  <p className="mono-label mb-6 text-[var(--gold)]">The 360° View</p>
                  <h2 className="display-tight text-3xl md:text-5xl">
                    Nobody owns
                    <br />
                    the whole picture.
                    <br />
                    <span className="serif-i text-[var(--gold)]">We do.</span>
                  </h2>
                </Reveal>
                <Reveal delay={0.15}>
                  <p className="mt-8 max-w-md text-base leading-relaxed text-[var(--ink-2)]">
                    A factory leaks money from hundreds of places, not one. Move around
                    the circle — every function determines the same outcome.
                  </p>
                </Reveal>
              </div>
              <Reveal delay={0.2} y={40}>
                <Circle360 />
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* ── approach ── */}
      <section className="border-t hairline bg-[var(--panel)]">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
          <Reveal className="mb-14">
            <p className="mono-label mb-6 text-[var(--gold)]">How We Do It</p>
            <h2 className="display-tight max-w-2xl text-3xl md:text-5xl">
              {p.approach.length} steps.
              <br />
              <span className="text-[var(--ink-3)]">Nothing left vague.</span>
            </h2>
          </Reveal>

          <div className="space-y-px bg-[var(--line)]">
            {p.approach.map((a, i) => (
              <Reveal key={a.phase} delay={i * 0.05}>
                <div className="grid gap-4 bg-[var(--paper)] p-8 transition-colors duration-500 hover:bg-[var(--panel)] md:grid-cols-[80px_320px_1fr] md:gap-10 md:p-10">
                  <span className="mono-num text-sm text-[var(--gold)]">{a.phase}</span>
                  <h3 className="display-tight text-xl md:text-2xl">{a.title}</h3>
                  <p className="text-[0.92rem] leading-relaxed text-[var(--ink-2)]">{a.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── engines — operations practice only ── */}
      {p.slug === "operations" && (
        <section className="border-t hairline">
          <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
            <Reveal className="mb-12">
              <p className="mono-label mb-6 text-[var(--gold)]">Inside This Service</p>
              <h2 className="display-tight max-w-2xl text-3xl md:text-5xl">
                Seven ways we improve your factory.
              </h2>
            </Reveal>
            <Stagger className="grid gap-px bg-[var(--line)] md:grid-cols-2 lg:grid-cols-4" gap={0.05}>
              {engines.map((e) => (
                <StaggerItem key={e.slug} className="bg-[var(--paper)]">
                  <Link
                    href={`/engines/${e.slug}`}
                    className="group flex h-full min-h-[190px] flex-col justify-between p-7 transition-colors duration-500 hover:bg-[var(--panel)]"
                  >
                    <span className="mono-num text-xs text-[var(--gold)]">{e.index}</span>
                    <div>
                      <p className="display-tight text-lg transition-colors group-hover:text-[var(--gold)]">
                        {e.name}
                      </p>
                      <p className="mt-2 text-[0.72rem] leading-relaxed text-[var(--ink-2)]">
                        {e.short}
                      </p>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {/* ── outcomes + services ── */}
      <section className="border-t hairline">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
            <div>
              <Reveal>
                <p className="mono-label mb-6 text-[var(--gold)]">What Improves</p>
              </Reveal>
              <Stagger gap={0.08}>
                {p.outcomes.map((o) => (
                  <StaggerItem key={o.metric}>
                    <div className="flex items-center justify-between border-b hairline py-5">
                      <span className="display-tight text-xl md:text-2xl">{o.metric}</span>
                      <span className="mono-num text-2xl text-[var(--gold)]">
                        {o.direction === "up" ? "↑" : "↓"}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>

            <div>
              <Reveal>
                <p className="mono-label mb-6 text-[var(--gold)]">What We Do</p>
              </Reveal>
              <Stagger className="flex flex-wrap gap-2.5" gap={0.025}>
                {p.services.map((s) => (
                  <StaggerItem key={s}>
                    <span className="inline-block border hairline bg-[var(--panel)] px-5 py-3 text-sm text-[var(--ink-2)] transition-colors duration-300 hover:border-[var(--gold)] hover:text-[var(--ink)]">
                      {s}
                    </span>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      {/* ── interlocks ── */}
      <section className="border-t hairline bg-[var(--panel)]">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
          <Reveal className="mb-12">
            <p className="mono-label mb-6 text-[var(--gold)]">Works Well With</p>
            <h2 className="display-tight max-w-2xl text-3xl md:text-4xl">
              These services work better together.
            </h2>
          </Reveal>
          <div className="grid gap-px bg-[var(--line)] md:grid-cols-2">
            {p.linksTo.map((l) => {
              const target = practiceBySlug(l.slug);
              if (!target) return null;
              return (
                <Link
                  key={l.slug}
                  href={`/practices/${target.slug}`}
                  className="group bg-[var(--paper)] p-8 transition-colors duration-500 hover:bg-[var(--panel)] lg:p-10"
                >
                  <span className="mono-num text-xs text-[var(--gold)]">{target.index}</span>
                  <p className="display-tight mt-4 text-2xl transition-colors group-hover:text-[var(--gold)] md:text-3xl">
                    {target.verb}
                  </p>
                  <p className="mt-4 text-[0.9rem] leading-relaxed text-[var(--ink-2)]">{l.why}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── next practice ── */}
      <section className="border-t hairline">
        <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
          <Link href={`/practices/${next.slug}`} className="group flex items-center justify-between gap-6">
            <div>
              <p className="mono-label mb-3 text-[var(--ink-3)]">
                Next Service — {next.index} · {next.verb}
              </p>
              <p className="display-tight text-2xl transition-colors duration-300 group-hover:text-[var(--gold)] md:text-4xl">
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
        kicker={p.verb}
        lineA={p.headline[0]}
        lineB="Let us show you what that means in rupees."
        button="Talk To Us"
        href="/contact"
      />
    </>
  );
}
