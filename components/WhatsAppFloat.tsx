"use client";

import { useEffect, useState } from "react";

const WA_URL =
  "https://wa.me/919805700090?text=" +
  encodeURIComponent(
    "Hi RELY360 — I'd like to discuss improving my manufacturing business."
  );

export default function WhatsAppFloat() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp — +91 98057 00090"
      className={`group fixed bottom-6 right-6 z-[60] flex items-center gap-0 transition-all duration-700 ${
        show ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      {/* label slides out on hover */}
      <span className="mono-label pointer-events-none mr-3 hidden max-w-0 overflow-hidden whitespace-nowrap rounded-sm border border-[var(--line-strong)] bg-[var(--paper)] py-2 text-[var(--ink)] opacity-0 shadow-[0_8px_30px_rgba(19,20,23,0.10)] transition-all duration-500 group-hover:max-w-[260px] group-hover:px-4 group-hover:opacity-100 md:block">
        Chat on WhatsApp · +91 98057 00090
      </span>

      <span className="relative flex h-14 w-14 items-center justify-center">
        {/* pulse ring */}
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-transform duration-300 group-hover:scale-110">
          {/* WhatsApp glyph */}
          <svg viewBox="0 0 32 32" width="28" height="28" fill="#fff" aria-hidden>
            <path d="M16.04 5.33c-5.87 0-10.64 4.77-10.64 10.64 0 1.88.49 3.71 1.43 5.33L5.33 26.8l5.64-1.48a10.6 10.6 0 0 0 5.07 1.29h.01c5.86 0 10.63-4.77 10.63-10.64 0-2.84-1.1-5.51-3.11-7.52a10.57 10.57 0 0 0-7.53-3.12Zm0 19.48h-.01a8.83 8.83 0 0 1-4.5-1.23l-.32-.19-3.35.88.9-3.26-.21-.34a8.81 8.81 0 0 1-1.35-4.7c0-4.88 3.97-8.85 8.85-8.85 2.36 0 4.58.92 6.25 2.59a8.79 8.79 0 0 1 2.59 6.26c0 4.88-3.97 8.84-8.85 8.84Zm4.85-6.62c-.27-.13-1.57-.78-1.82-.87-.24-.09-.42-.13-.6.14-.18.26-.69.86-.85 1.04-.15.18-.31.2-.58.07-.27-.14-1.12-.42-2.14-1.32a8.06 8.06 0 0 1-1.48-1.84c-.16-.27-.02-.41.12-.55.12-.12.26-.31.4-.47.13-.16.18-.27.27-.44.09-.18.04-.33-.02-.47-.07-.13-.6-1.44-.82-1.98-.21-.52-.43-.45-.6-.45-.15-.01-.33-.01-.51-.01s-.47.07-.71.33c-.25.27-.94.92-.94 2.23 0 1.32.96 2.59 1.09 2.77.13.18 1.88 2.87 4.56 4.03.64.27 1.13.44 1.52.56.64.2 1.22.17 1.68.11.51-.08 1.57-.64 1.79-1.26.22-.62.22-1.15.16-1.26-.07-.11-.25-.18-.52-.31Z" />
          </svg>
        </span>
      </span>
    </a>
  );
}
