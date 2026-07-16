"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { engines, industries } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;
const FORM_ENDPOINT = "https://formsubmit.co/ajax/shivam@relytask.com";

const inputCls =
  "w-full border border-[var(--line)] bg-[var(--paper)] px-5 py-4 text-[0.95rem] text-[var(--ink)] outline-none transition-colors duration-300 placeholder:text-[var(--ink-3)] focus:border-[var(--gold)]";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mono-label mb-3 block text-[var(--ink-2)]">{label}</span>
      {children}
    </label>
  );
}

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [interest, setInterest] = useState<string[]>([]);

  const toggle = (name: string) =>
    setInterest((p) => (p.includes(name) ? p.filter((x) => x !== name) : [...p, name]));

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload: Record<string, string> = {
      _subject: `RELY360 Lead — ${fd.get("name") || "New enquiry"}`,
      _template: "table",
      _captcha: "false",
      Name: String(fd.get("name") || ""),
      Company: String(fd.get("company") || ""),
      Phone: String(fd.get("phone") || ""),
      Email: String(fd.get("email") || ""),
      Industry: String(fd.get("industry") || ""),
      "Interested In": interest.join(", ") || "Not specified",
      "Biggest Challenge": String(fd.get("message") || ""),
      Source: "rely360 website — Start the Conversation",
    };

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      // FormSubmit returns HTTP 200 even on failure — trust the body, not the status
      if (!res.ok || String(data.success) !== "true") throw new Error(data.message || String(res.status));
      setStatus("sent");
      form.reset();
      setInterest([]);
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <PageHero
        kicker="Start the Conversation"
        title={
          <>
            Talk to an architect.
            <br />
            <span className="serif-i text-[var(--gold)]">Not a salesperson.</span>
          </>
        }
        sub="Tell us where your business stands. A RELY360 partner — not a junior associate — reviews every enquiry and responds within one working day."
      />

      <section className="bg-[var(--panel)]">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
            {/* left rail */}
            <div>
              <Reveal>
                <p className="mono-label mb-8 text-[var(--gold)]">Direct Lines</p>
                <div className="space-y-6">
                  <a
                    href="https://wa.me/919805700090?text=Hi%20RELY360%20%E2%80%94%20I%27d%20like%20to%20discuss%20improving%20my%20manufacturing%20business."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between border-b hairline pb-5"
                  >
                    <div>
                      <p className="mono-label !text-[0.6rem] text-[var(--ink-3)]">WhatsApp / Call</p>
                      <p className="display-tight mt-1.5 text-xl transition-colors group-hover:text-[var(--gold)]">
                        +91 98057 00090
                      </p>
                    </div>
                    <svg width="18" height="13" viewBox="0 0 20 14" fill="none" className="text-[var(--ink-3)] transition-all duration-500 group-hover:translate-x-2 group-hover:text-[var(--gold)]">
                      <path d="M13 1l6 6-6 6M19 7H1" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                  </a>
                  <a
                    href="mailto:shivam@relytask.com"
                    className="group flex items-center justify-between border-b hairline pb-5"
                  >
                    <div>
                      <p className="mono-label !text-[0.6rem] text-[var(--ink-3)]">Email</p>
                      <p className="display-tight mt-1.5 text-xl transition-colors group-hover:text-[var(--gold)]">
                        shivam@relytask.com
                      </p>
                    </div>
                    <svg width="18" height="13" viewBox="0 0 20 14" fill="none" className="text-[var(--ink-3)] transition-all duration-500 group-hover:translate-x-2 group-hover:text-[var(--gold)]">
                      <path d="M13 1l6 6-6 6M19 7H1" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                  </a>
                  <div className="border-b hairline pb-5">
                    <p className="mono-label !text-[0.6rem] text-[var(--ink-3)]">On-site</p>
                    <p className="display-tight mt-1.5 text-xl">India · Nationwide</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-12 border hairline bg-[var(--paper)] p-7">
                  <p className="mono-label mb-4 text-[var(--gold)]">What happens next</p>
                  <ol className="space-y-3 text-sm leading-relaxed text-[var(--ink-2)]">
                    <li className="gold-tick">A partner reviews your details — within one working day.</li>
                    <li className="gold-tick">A 30-minute conversation about where profit is leaking.</li>
                    <li className="gold-tick">If it makes sense: a structured performance assessment.</li>
                  </ol>
                  <p className="mt-5 text-xs text-[var(--ink-3)]">
                    No obligation. No junior handoffs. No spam.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* form */}
            <Reveal delay={0.1}>
              <AnimatePresence mode="wait">
                {status === "sent" ? (
                  <motion.div
                    key="sent"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: EASE }}
                    className="flex min-h-[540px] flex-col items-center justify-center border hairline bg-[var(--paper)] p-12 text-center"
                  >
                    <span className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-[var(--gold)]">
                      <svg width="26" height="20" viewBox="0 0 26 20" fill="none">
                        <path d="M2 10.5L9.5 18L24 2" stroke="var(--gold)" strokeWidth="2" />
                      </svg>
                    </span>
                    <h2 className="display-tight text-3xl md:text-4xl">
                      The conversation has started.
                    </h2>
                    <p className="mt-5 max-w-md text-base leading-relaxed text-[var(--ink-2)]">
                      Your details are on their way to a RELY360 partner. Expect a
                      response within one working day — or reach us instantly on
                      WhatsApp.
                    </p>
                    <button onClick={() => setStatus("idle")} className="btn-ghost mt-10">
                      Send another enquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={onSubmit}
                    initial={false}
                    className="border hairline bg-[var(--paper)] p-8 md:p-12"
                  >
                    <div className="grid gap-7 md:grid-cols-2">
                      <Field label="Your Name *">
                        <input name="name" required placeholder="Full name" className={inputCls} />
                      </Field>
                      <Field label="Company *">
                        <input name="company" required placeholder="Company name" className={inputCls} />
                      </Field>
                      <Field label="Phone *">
                        <input
                          name="phone"
                          required
                          type="tel"
                          placeholder="+91 …"
                          className={inputCls}
                        />
                      </Field>
                      <Field label="Email *">
                        <input
                          name="email"
                          required
                          type="email"
                          placeholder="you@company.com"
                          className={inputCls}
                        />
                      </Field>
                      <div className="md:col-span-2">
                        <Field label="Industry">
                          <select name="industry" defaultValue="" className={inputCls}>
                            <option value="" disabled>
                              Select your industry
                            </option>
                            {industries.map((i) => (
                              <option key={i.slug} value={i.name}>
                                {i.name}
                              </option>
                            ))}
                            <option value="Other">Other</option>
                          </select>
                        </Field>
                      </div>
                    </div>

                    <div className="mt-8">
                      <p className="mono-label mb-4 text-[var(--ink-2)]">
                        Where do you want improvement? (optional)
                      </p>
                      <div className="flex flex-wrap gap-2.5">
                        {engines.map((e) => {
                          const on = interest.includes(e.name);
                          return (
                            <button
                              type="button"
                              key={e.slug}
                              onClick={() => toggle(e.name)}
                              className={`border px-4 py-2.5 text-xs transition-colors duration-300 ${
                                on
                                  ? "border-[var(--gold)] bg-[rgba(169,129,47,0.08)] text-[var(--ink)]"
                                  : "border-[var(--line)] text-[var(--ink-2)] hover:border-[var(--gold-2)]"
                              }`}
                            >
                              {e.name}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="mt-8">
                      <Field label="Your biggest challenge right now">
                        <textarea
                          name="message"
                          rows={4}
                          placeholder="e.g. Margins are shrinking even though sales are growing…"
                          className={`${inputCls} resize-none`}
                        />
                      </Field>
                    </div>

                    {status === "error" && (
                      <p className="mt-6 border border-red-300 bg-red-50 px-5 py-4 text-sm text-red-700">
                        Something went wrong sending your enquiry. Please try again — or
                        reach us directly on WhatsApp at +91 98057 00090.
                      </p>
                    )}

                    <div className="mt-10 flex flex-wrap items-center gap-6">
                      <button type="submit" disabled={status === "sending"} className="btn-ink disabled:opacity-60">
                        {status === "sending" ? "Sending…" : "Start the Conversation"}
                        <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                          <path d="M9 1l4 4-4 4M13 5H1" stroke="currentColor" strokeWidth="1.2" />
                        </svg>
                      </button>
                      <p className="mono-label !text-[0.6rem] text-[var(--ink-3)]">
                        Goes directly to a RELY360 partner
                      </p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
