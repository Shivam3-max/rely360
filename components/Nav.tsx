"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";

const links = [
  { href: "/practices", label: "Practices" },
  { href: "/system", label: "How We Work" },
  { href: "/industries", label: "Where We Transform" },
  { href: "/stories", label: "Stories" },
  { href: "/journal", label: "Journal" },
  { href: "/architects", label: "The Architects" },
  { href: "/contact", label: "Start the Conversation" },
];

function ProgressRing() {
  const { scrollYProgress } = useScroll();
  const p = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" className="shrink-0">
      <circle cx="17" cy="17" r="14.5" fill="none" stroke="var(--line)" strokeWidth="1.5" />
      <motion.circle
        cx="17"
        cy="17"
        r="14.5"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="1.5"
        strokeLinecap="round"
        style={{ pathLength: p, rotate: -90, transformOrigin: "center" }}
      />
      <text
        x="17"
        y="18"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="var(--ink)"
        style={{ fontFamily: "var(--font-fragment)", fontSize: "8.5px", letterSpacing: "0.04em" }}
      >
        360
      </text>
    </svg>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "nav-blur border-b hairline" : ""
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-4 lg:px-10">
          <Link href="/" className="flex items-center gap-3.5 group">
            <ProgressRing />
            <span
              className="display text-[1.05rem] tracking-tight"
              style={{ fontVariationSettings: "'wdth' 125" }}
            >
              RELY<span className="text-[var(--gold)]">360</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 xl:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link ${pathname.startsWith(l.href) ? "active" : ""}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/assessment" className="btn-ink hidden md:inline-flex !py-3 !px-5">
              Unlock Hidden Profit
            </Link>
            <button
              aria-label="Menu"
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] xl:hidden"
            >
              <span
                className={`block h-px w-6 bg-[var(--ink)] transition-transform duration-300 ${
                  open ? "translate-y-[3px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-6 bg-[var(--ink)] transition-transform duration-300 ${
                  open ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-[var(--paper)] pt-28"
          >
            <nav className="mx-auto flex max-w-[1400px] flex-col px-6 lg:px-10">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={l.href}
                    className="display-tight block border-b hairline py-5 text-3xl"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.5 }}
                className="pt-8"
              >
                <Link href="/assessment" className="btn-ink">
                  Unlock Hidden Profit
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
