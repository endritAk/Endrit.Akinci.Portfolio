"use client";

import { useEffect, useState } from "react";
import { NAV } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const { t, lang, setLang, chosen } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-40 transition-colors duration-fast",
        scrolled || open ? "bg-paper/92 backdrop-blur-sm" : "bg-transparent",
      )}
    >
      <div className="wrap flex h-14 items-center justify-between gap-4 sm:h-16">
        <a href="#top" className="font-display text-sm tracking-tight sm:text-base">
          ENDRIT AKINCI
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="tiny hover:text-red">
              {t(item.label)}
            </a>
          ))}
          {chosen ? (
            <div className="flex gap-1">
              {(["en", "sq"] as const).map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLang(code)}
                  className={cn(
                    "tiny min-h-8 px-2",
                    lang === code ? "text-red" : "text-muted",
                  )}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
          ) : null}
        </nav>
        <button
          type="button"
          className="tiny min-h-11 min-w-11 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? t("CLOSE") : t("MENU")}
        </button>
      </div>
      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-t border-ink/10 md:hidden",
          open ? "max-h-64" : "max-h-0",
        )}
        style={{ transition: "max-height 280ms cubic-bezier(0.22, 1, 0.36, 1)" }}
      >
        <nav className="wrap flex flex-col gap-1 py-3">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="tiny min-h-11 py-3"
              onClick={() => setOpen(false)}
            >
              {t(item.label)}
            </a>
          ))}
          {chosen ? (
            <div className="flex gap-3 py-2">
              {(["en", "sq"] as const).map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLang(code)}
                  className={cn("tiny min-h-11 px-2", lang === code ? "text-red" : "text-muted")}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
          ) : null}
        </nav>
      </div>
    </header>
  );
}
