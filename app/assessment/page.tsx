"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { assessmentQuestions, engines } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;
const TOTAL = assessmentQuestions.length;

function ScoreRing({ score }: { score: number }) {
  const R = 88;
  const CIRC = 2 * Math.PI * R;
  return (
    <div className="relative mx-auto h-[220px] w-[220px]">
      <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90">
        <circle cx="100" cy="100" r={R} fill="none" stroke="var(--line)" strokeWidth="6" />
        <motion.circle
          cx="100"
          cy="100"
          r={R}
          fill="none"
          stroke="var(--gold)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={CIRC}
          initial={{ strokeDashoffset: CIRC }}
          animate={{ strokeDashoffset: CIRC * (1 - score / 100) }}
          transition={{ duration: 2, delay: 0.4, ease: EASE }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="display text-6xl"
        >
          {score}
        </motion.span>
        <span className="mono-label mt-1 text-[var(--ink-3)]">/ 100</span>
      </div>
    </div>
  );
}

function verdict(score: number) {
  if (score >= 80)
    return {
      title: "Performance-led. Now compound it.",
      note: "Your systems are strong. The opportunity now is integration — making seven good engines behave like one great machine, and defending the gains as you scale.",
    };
  if (score >= 60)
    return {
      title: "Solid foundations. Serious upside.",
      note: "You run better than most — and that's exactly why the remaining leaks are expensive. The gap between where you are and where the system could take you is measured in EBITDA points.",
    };
  if (score >= 40)
    return {
      title: "Profit is leaking — daily.",
      note: "Pockets of discipline exist, but the functions aren't working as one system. In our experience this profile hides 15–25% capacity and several points of margin.",
    };
  return {
    title: "Enormous hidden profit.",
    note: "Almost everything runs on effort and memory instead of systems. That's not a weakness — it's the single largest profit opportunity a business can have. Every improvement will be visible in the P&L.",
  };
}

export default function AssessmentPage() {
  const [step, setStep] = useState(-1); // -1 intro, 0..19 questions, 20 result
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const done = Object.keys(answers).length === TOTAL;

  const result = useMemo(() => {
    if (!done) return null;
    const total = Object.values(answers).reduce((a, b) => a + b, 0);
    const score = Math.round((total / (TOTAL * 3)) * 100);
    const byEngine = engines.map((e) => {
      const qs = assessmentQuestions.filter((q) => q.engine === e.slug);
      const pts = qs.reduce((a, q) => a + (answers[q.id] ?? 0), 0);
      return { engine: e, pct: Math.round((pts / (qs.length * 3)) * 100) };
    });
    const sorted = [...byEngine].sort((a, b) => a.pct - b.pct);
    return { score, byEngine, weakest: sorted.slice(0, 3) };
  }, [answers, done]);

  const q = step >= 0 && step < TOTAL ? assessmentQuestions[step] : null;
  const engineOfQ = q ? engines.find((e) => e.slug === q.engine) : null;

  const answer = (score: number) => {
    if (!q) return;
    setAnswers((prev) => ({ ...prev, [q.id]: score }));
    setTimeout(() => setStep((s) => s + 1), 260);
  };

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-[880px] px-6">
        <AnimatePresence mode="wait">
          {/* ─── intro ─── */}
          {step === -1 && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="pt-14 text-center"
            >
              <p className="mono-label mb-8 text-[var(--gold)]">The Performance Assessment</p>
              <h1 className="display text-5xl md:text-7xl">
                Discover your hidden
                <br />
                <span className="serif-i text-[var(--gold)]">profit potential.</span>
              </h1>
              <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-[var(--ink-2)]">
                Twenty questions. Five minutes. Answer honestly — the score only works if the
                answers are true. You'll see exactly where your business stands operationally,
                and which rung of the ladder is actually holding you back.
              </p>
              <div className="mt-12">
                <button onClick={() => setStep(0)} className="btn-ink">
                  Begin the Assessment
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path d="M9 1l4 4-4 4M13 5H1" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </button>
              </div>
              <p className="mono-label mt-10 text-[var(--ink-3)]">
                No email required to see your score
              </p>
            </motion.div>
          )}

          {/* ─── questions ─── */}
          {q && engineOfQ && (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              {/* progress */}
              <div className="mb-14">
                <div className="mb-4 flex items-baseline justify-between">
                  <span className="mono-label text-[var(--gold)]">
                    Engine {engineOfQ.index} — {engineOfQ.name}
                  </span>
                  <span className="mono-num text-sm text-[var(--ink-3)]">
                    {String(step + 1).padStart(2, "0")} / {TOTAL}
                  </span>
                </div>
                <div className="h-px w-full bg-[var(--line)]">
                  <motion.div
                    className="h-full bg-[var(--gold)]"
                    animate={{ width: `${((step + 1) / TOTAL) * 100}%` }}
                    transition={{ duration: 0.5, ease: EASE }}
                  />
                </div>
              </div>

              <h2 className="display-tight mb-12 text-2xl leading-snug md:text-4xl">
                {q.question}
              </h2>

              <div className="space-y-3">
                {q.options.map((o, i) => (
                  <button
                    key={o.label}
                    onClick={() => answer(o.score)}
                    className={`opt-card flex w-full items-center gap-6 p-5 text-left md:p-6 ${
                      answers[q.id] === o.score ? "selected" : ""
                    }`}
                  >
                    <span className="mono-num text-xs text-[var(--ink-3)]">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="text-sm leading-relaxed text-[var(--ink)] md:text-base">
                      {o.label}
                    </span>
                  </button>
                ))}
              </div>

              {step > 0 && (
                <button
                  onClick={() => setStep((s) => s - 1)}
                  className="link-arrow mt-10 !text-[var(--ink-3)]"
                >
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="rotate-180">
                    <path d="M9 1l4 4-4 4M13 5H1" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                  Previous question
                </button>
              )}
            </motion.div>
          )}

          {/* ─── result ─── */}
          {step >= TOTAL && result && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <div className="text-center">
                <p className="mono-label mb-10 text-[var(--gold)]">Your Performance Score</p>
                <ScoreRing score={result.score} />
                <h2 className="display-tight mx-auto mt-10 max-w-2xl text-3xl md:text-5xl">
                  {verdict(result.score).title}
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--ink-2)]">
                  {verdict(result.score).note}
                </p>
              </div>

              {/* per-engine breakdown */}
              <div className="mt-20 border hairline bg-[var(--panel)] p-8 md:p-12">
                <p className="mono-label mb-10 text-[var(--gold)]">Engine by Engine</p>
                <div className="space-y-7">
                  {result.byEngine.map((b, i) => (
                    <div key={b.engine.slug}>
                      <div className="mb-2.5 flex items-baseline justify-between">
                        <span className="display-tight text-base md:text-lg">
                          <span className="mono-num mr-3 text-xs text-[var(--ink-3)]">
                            {b.engine.index}
                          </span>
                          {b.engine.name}
                        </span>
                        <span className="mono-num text-sm text-[var(--ink-2)]">{b.pct}%</span>
                      </div>
                      <div className="h-[3px] w-full bg-[var(--line)]">
                        <motion.div
                          className="h-full"
                          style={{
                            background: b.pct < 45 ? "var(--ink-3)" : "var(--gold)",
                          }}
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.max(b.pct, 3)}%` }}
                          transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: EASE }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* biggest leaks */}
              <div className="mt-12">
                <p className="mono-label mb-8 text-[var(--gold)]">
                  Where your profit is hiding
                </p>
                <div className="grid gap-px bg-[var(--line)] md:grid-cols-3">
                  {result.weakest.map((w, i) => (
                    <Link
                      key={w.engine.slug}
                      href={`/engines/${w.engine.slug}`}
                      className="group bg-[var(--paper)] p-7 transition-colors duration-500 hover:bg-[var(--panel)]"
                    >
                      <p className="mono-num mb-6 text-xs text-[var(--ink-3)]">
                        Priority {String(i + 1).padStart(2, "0")}
                      </p>
                      <p className="display-tight text-xl transition-colors group-hover:text-[var(--gold)]">
                        {w.engine.name}
                      </p>
                      <p className="mt-3 text-xs leading-relaxed text-[var(--ink-2)]">
                        {w.engine.short}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="section-dark mt-16 p-10 text-center md:p-16">
                <p className="mono-label mb-6 text-[var(--gold-2)]">The Next Step</p>
                <p className="display-tight mx-auto max-w-xl text-2xl md:text-4xl">
                  A score shows the gap.
                  <br />
                  <span className="serif-i text-[var(--gold-2)]">
                    A conversation sizes the profit inside it.
                  </span>
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <a
                    href={`mailto:shivam@relytask.com?subject=Performance Assessment — Score ${result.score}/100&body=My RELY360 Performance Score: ${result.score}/100%0D%0APriority engines: ${result.weakest.map((w) => w.engine.name).join(", ")}%0D%0A%0D%0ACompany:%0D%0AIndustry:%0D%0APhone:`}
                    className="btn-paper"
                  >
                    Book a Consultation
                  </a>
                  <button
                    onClick={() => {
                      setAnswers({});
                      setStep(-1);
                      window.scrollTo({ top: 0 });
                    }}
                    className="btn-ghost !border-[var(--dark-line)] !text-[var(--paper-on-dark)]"
                  >
                    Retake the Assessment
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
