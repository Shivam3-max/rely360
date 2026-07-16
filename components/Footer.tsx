import Link from "next/link";

export default function Footer() {
  return (
    <footer className="section-dark relative overflow-hidden">
      {/* faint dial ornament */}
      <svg
        className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] opacity-[0.06]"
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="98" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="72" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="46" fill="none" stroke="currentColor" strokeWidth="0.5" />
        {Array.from({ length: 36 }).map((_, i) => {
          const a = (i * 10 * Math.PI) / 180;
          const r2 = (n: number) => Math.round(n * 100) / 100;
          return (
            <line
              key={i}
              x1={r2(100 + 92 * Math.cos(a))}
              y1={r2(100 + 92 * Math.sin(a))}
              x2={r2(100 + 98 * Math.cos(a))}
              y2={r2(100 + 98 * Math.sin(a))}
              stroke="currentColor"
              strokeWidth="0.5"
            />
          );
        })}
      </svg>

      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="mb-16 max-w-4xl">
          <p className="mono-label mb-6 text-[var(--gold-2)]">RELY360</p>
          <p className="display text-4xl leading-[1.05] md:text-6xl">
            One Partner.
            <br />
            Every Function.
            <br />
            <span className="serif-i text-[var(--gold-2)]">Measurable Impact.</span>
          </p>
        </div>

        <div className="grid gap-12 border-t hairline pt-12 md:grid-cols-4">
          <div>
            <p className="mono-label mb-5 opacity-50">Navigate</p>
            <ul className="space-y-3 text-sm opacity-80">
              <li><Link href="/system" className="hover:text-[var(--gold-2)] transition-colors">The System</Link></li>
              <li><Link href="/engines" className="hover:text-[var(--gold-2)] transition-colors">Performance Engines</Link></li>
              <li><Link href="/industries" className="hover:text-[var(--gold-2)] transition-colors">Where We Transform</Link></li>
              <li><Link href="/architects" className="hover:text-[var(--gold-2)] transition-colors">The Architects</Link></li>
            </ul>
          </div>
          <div>
            <p className="mono-label mb-5 opacity-50">Evidence</p>
            <ul className="space-y-3 text-sm opacity-80">
              <li><Link href="/stories" className="hover:text-[var(--gold-2)] transition-colors">Transformation Stories</Link></li>
              <li><Link href="/journal" className="hover:text-[var(--gold-2)] transition-colors">Performance Journal</Link></li>
              <li><Link href="/assessment" className="hover:text-[var(--gold-2)] transition-colors">Performance Assessment</Link></li>
            </ul>
          </div>
          <div>
            <p className="mono-label mb-5 opacity-50">Start the Conversation</p>
            <ul className="space-y-3 text-sm opacity-80">
              <li>
                <Link href="/contact" className="hover:text-[var(--gold-2)] transition-colors">
                  Contact — Send an Enquiry
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/919805700090"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--gold-2)] transition-colors"
                >
                  WhatsApp · +91 98057 00090
                </a>
              </li>
              <li>
                <a href="mailto:shivam@relytask.com" className="hover:text-[var(--gold-2)] transition-colors">
                  shivam@relytask.com
                </a>
              </li>
              <li>India · On-site nationwide</li>
            </ul>
          </div>
          <div className="md:text-right">
            <Link href="/assessment" className="btn-paper">
              Begin the Assessment
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t hairline pt-8 md:flex-row">
          <p className="mono-label opacity-40">
            © {new Date().getFullYear()} RELY360 — Manufacturing Performance Architects
          </p>
          <p className="mono-label opacity-40">Transforming Manufacturing. Delivering Results.</p>
        </div>
      </div>
    </footer>
  );
}
