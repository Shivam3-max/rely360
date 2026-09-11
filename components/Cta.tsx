import Link from "next/link";
import { Reveal } from "./Reveal";

export default function Cta({
  kicker = "Next Step",
  lineA = "How much more could your business earn?",
  lineB = "Let's find out — free, no obligation.",
  button = "Book a Free Consultation",
  href = "/assessment",
}: {
  kicker?: string;
  lineA?: string;
  lineB?: string;
  button?: string;
  href?: string;
}) {
  return (
    <section className="section-dark relative overflow-hidden">
      {/* concentric ornament */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-[0.07]">
        <svg className="dial-slower h-full w-full" viewBox="0 0 200 200">
          {[98, 84, 70, 56].map((r) => (
            <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="currentColor" strokeWidth="0.4" />
          ))}
          {Array.from({ length: 72 }).map((_, i) => {
            const a = (i * 5 * Math.PI) / 180;
            const r2 = (n: number) => Math.round(n * 100) / 100;
            return (
              <line
                key={i}
                x1={r2(100 + 94 * Math.cos(a))}
                y1={r2(100 + 94 * Math.sin(a))}
                x2={r2(100 + 98 * Math.cos(a))}
                y2={r2(100 + 98 * Math.sin(a))}
                stroke="currentColor"
                strokeWidth="0.4"
              />
            );
          })}
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-28 text-center lg:px-10 lg:py-40">
        <Reveal>
          <p className="mono-label mb-8 text-[var(--gold-2)]">{kicker}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display mx-auto max-w-5xl text-4xl md:text-6xl lg:text-7xl">
            {lineA}
            <br />
            <span className="serif-i text-[var(--gold-2)]">{lineB}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="mt-14">
            <Link href={href} className="btn-paper">
              {button}
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M9 1l4 4-4 4M13 5H1" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
