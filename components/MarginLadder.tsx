"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

const FIELDS = [
  { key: "units", label: "Units you ship per month", unit: "units", def: 50000, help: "Current B2B / contract volume" },
  { key: "cost", label: "Your manufacturing cost", unit: "₹/unit", def: 46 },
  { key: "b2b", label: "Your B2B selling price", unit: "₹/unit", def: 52 },
  { key: "credit", label: "Credit you extend", unit: "days", def: 75, help: "From dispatch to money in bank" },
  { key: "mrp", label: "Price the consumer pays", unit: "₹/unit", def: 199, help: "What your product retails at under someone else's label" },
  { key: "cac", label: "Marketing cost per D2C order", unit: "₹", def: 60, help: "Realistic first-year CAC for your category" },
  { key: "fulfil", label: "Fulfilment, payment & returns", unit: "₹/order", def: 45, help: "Shipping, gateway fees, RTO allowance" },
  { key: "shift", label: "Volume moved to D2C in year one", unit: "%", def: 10, help: "Start small — this is deliberately conservative" },
] as const;

const rupee = (n: number) => {
  const abs = Math.abs(n);
  if (abs >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`;
  if (abs >= 100000) return `₹${(n / 100000).toFixed(1)} L`;
  return `₹${Math.round(n).toLocaleString("en-IN")}`;
};

export default function MarginLadder() {
  const [v, setV] = useState<Record<string, number>>(() =>
    Object.fromEntries(FIELDS.map((f) => [f.key, f.def]))
  );

  const r = useMemo(() => {
    const b2bMargin = v.b2b - v.cost;
    const b2bMarginPct = v.b2b > 0 ? (b2bMargin / v.b2b) * 100 : 0;
    const annualRevenue = v.units * v.b2b * 12;
    const cashLocked = (annualRevenue / 365) * v.credit;
    const downstream = v.mrp - v.b2b;
    const downstreamPct = v.mrp > 0 ? (downstream / v.mrp) * 100 : 0;

    const d2cContribution = v.mrp - v.cost - v.cac - v.fulfil;
    const d2cContributionPct = v.mrp > 0 ? (d2cContribution / v.mrp) * 100 : 0;
    const multiple = b2bMargin > 0 ? d2cContribution / b2bMargin : 0;

    const shiftedUnits = v.units * (v.shift / 100) * 12;
    const marginIfB2B = shiftedUnits * b2bMargin;
    const marginIfD2C = shiftedUnits * d2cContribution;
    const uplift = marginIfD2C - marginIfB2B;
    const cashReleased = (shiftedUnits / 12) * v.b2b * (v.credit / 30);

    return {
      b2bMargin,
      b2bMarginPct,
      cashLocked,
      downstream,
      downstreamPct,
      d2cContribution,
      d2cContributionPct,
      multiple,
      shiftedUnits,
      marginIfB2B,
      marginIfD2C,
      uplift,
      cashReleased,
      viable: d2cContribution > 0,
    };
  }, [v]);

  // bar widths, normalised to consumer price
  const barPct = (n: number) => (v.mrp > 0 ? Math.max(0, Math.min(100, (n / v.mrp) * 100)) : 0);

  return (
    <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
      {/* ── inputs ── */}
      <div>
        <p className="mono-label mb-6 text-[var(--gold)]">Your numbers</p>
        <div className="space-y-5">
          {FIELDS.map((f) => (
            <div key={f.key}>
              <label className="mb-2 flex items-baseline justify-between gap-3">
                <span className="text-[0.84rem] text-[var(--ink)]">{f.label}</span>
                <span className="mono-label !text-[0.55rem] text-[var(--ink-3)]">{f.unit}</span>
              </label>
              <input
                type="number"
                step="any"
                value={Number.isFinite(v[f.key]) ? v[f.key] : ""}
                onChange={(e) =>
                  setV((s) => ({ ...s, [f.key]: parseFloat(e.target.value) }))
                }
                className="mono-num w-full border border-[var(--line)] bg-[var(--paper)] px-4 py-3 text-[0.95rem] text-[var(--ink)] outline-none transition-colors focus:border-[var(--gold)]"
              />
              {"help" in f && f.help && (
                <p className="mt-1.5 text-[0.68rem] text-[var(--ink-3)]">{f.help}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── results ── */}
      <div>
        <p className="mono-label mb-6 text-[var(--gold)]">Where the value actually goes</p>

        {/* the ladder of value on one unit */}
        <div className="border hairline bg-[var(--panel)] p-6 md:p-8">
          <p className="mono-label mb-6 text-[var(--ink-3)]">
            One unit · consumer pays {rupee(v.mrp)}
          </p>

          <div className="space-y-5">
            {[
              { label: "Your manufacturing cost", val: v.cost, tone: "ink3" },
              { label: "Your margin today", val: r.b2bMargin, tone: "ink" },
              { label: "Captured downstream — not by you", val: r.downstream, tone: "red" },
            ].map((row) => (
              <div key={row.label}>
                <div className="mb-1.5 flex items-baseline justify-between gap-4">
                  <span className="text-[0.82rem] text-[var(--ink-2)]">{row.label}</span>
                  <span className="mono-num text-[0.95rem]">₹{row.val.toFixed(2)}</span>
                </div>
                <div className="h-[6px] w-full bg-[var(--line)]">
                  <motion.div
                    className="h-full"
                    style={{
                      background:
                        row.tone === "red"
                          ? "#b3402e"
                          : row.tone === "ink"
                          ? "var(--ink)"
                          : "var(--line-strong)",
                    }}
                    animate={{ width: `${barPct(row.val)}%` }}
                    transition={{ duration: 0.7, ease: EASE }}
                  />
                </div>
              </div>
            ))}

            <div className="border-t hairline pt-5">
              <div className="mb-1.5 flex items-baseline justify-between gap-4">
                <span className="text-[0.82rem] text-[var(--gold)]">
                  Your contribution if you own the brand
                </span>
                <span className="mono-num text-[0.95rem] text-[var(--gold)]">
                  ₹{r.d2cContribution.toFixed(2)}
                </span>
              </div>
              <div className="h-[6px] w-full bg-[var(--line)]">
                <motion.div
                  className="h-full bg-[var(--gold)]"
                  animate={{ width: `${barPct(Math.max(0, r.d2cContribution))}%` }}
                  transition={{ duration: 0.9, ease: EASE }}
                />
              </div>
              <p className="mt-2 text-[0.68rem] text-[var(--ink-3)]">
                After manufacturing cost, marketing, fulfilment, payment fees and returns.
              </p>
            </div>
          </div>
        </div>

        {/* headline numbers */}
        <div className="mt-6 grid gap-px bg-[var(--line)] sm:grid-cols-2">
          <div className="bg-[var(--panel)] p-6">
            <p className="mono-label mb-3 text-[var(--ink-3)]">Margin today</p>
            <p className="display-tight text-3xl">{r.b2bMarginPct.toFixed(1)}%</p>
            <p className="mt-2 text-[0.7rem] text-[var(--ink-2)]">
              ₹{r.b2bMargin.toFixed(2)} on every unit you make
            </p>
          </div>
          <div className="bg-[var(--panel)] p-6">
            <p className="mono-label mb-3 text-[var(--ink-3)]">Margin owning the brand</p>
            <p className="display-tight text-3xl text-[var(--gold)]">
              {r.d2cContributionPct.toFixed(1)}%
            </p>
            <p className="mt-2 text-[0.7rem] text-[var(--ink-2)]">
              {r.viable && r.multiple > 1
                ? `${r.multiple.toFixed(1)}× your margin per unit`
                : "Adjust CAC or price — this category needs work"}
            </p>
          </div>
        </div>

        {/* the two big consequences */}
        <div className="mt-6 space-y-px bg-[var(--line)]">
          <div className="bg-[var(--dark)] p-6 text-[var(--paper-on-dark)] md:p-8">
            <p className="mono-label mb-3 text-[var(--gold-2)]">
              Cash sitting in other people's businesses
            </p>
            <p className="display text-4xl text-[var(--gold-2)] md:text-5xl">
              {rupee(r.cashLocked)}
            </p>
            <p className="mt-3 text-[0.8rem] leading-relaxed opacity-70">
              At {v.credit} days of credit on {rupee(v.units * v.b2b * 12)} of annual revenue.
              That is working capital you have financed, insured, and borrowed against —
              to fund your customer's business.
            </p>
          </div>

          <div className="bg-[var(--panel)] p-6 md:p-8">
            <p className="mono-label mb-3 text-[var(--gold)]">
              Moving just {v.shift}% of volume to your own brand
            </p>
            <p className="display text-4xl md:text-5xl">
              {r.uplift >= 0 ? "+" : ""}
              {rupee(r.uplift)}
              <span className="text-lg text-[var(--ink-3)]"> /year</span>
            </p>
            <p className="mt-3 text-[0.8rem] leading-relaxed text-[var(--ink-2)]">
              Same factory. Same product. Same {Math.round(r.shiftedUnits).toLocaleString("en-IN")} units —
              sold to the person who actually uses them, and paid for on dispatch instead of in ninety days.
            </p>
          </div>
        </div>

        <p className="mt-5 text-[0.7rem] leading-relaxed text-[var(--ink-3)]">
          Indicative model for discussion, not a forecast. Real feasibility depends on category,
          repeat rate, differentiation and regulatory load — which is exactly what the first
          phase of our work establishes.
        </p>

        <div className="mt-7">
          <Link href="/contact" className="btn-ink">
            Pressure-test this with a partner
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M9 1l4 4-4 4M13 5H1" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
