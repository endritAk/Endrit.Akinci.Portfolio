"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import sq from "./sq.json";

export type Lang = "en" | "sq";

const SQ = sq as Record<string, string>;

type I18n = {
  lang: Lang;
  chosen: boolean;
  setLang: (lang: Lang) => void;
  t: (s: string) => string;
};

const I18nContext = createContext<I18n | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [chosen, setChosen] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("ea-lang");
    if (saved === "en" || saved === "sq") {
      setLangState(saved);
      setChosen(true);
    }
  }, []);

  const value = useMemo<I18n>(
    () => ({
      lang,
      chosen,
      setLang: (next) => {
        setLangState(next);
        setChosen(true);
        window.localStorage.setItem("ea-lang", next);
        document.documentElement.lang = next === "sq" ? "sq" : "en";
      },
      t: (s) => (lang === "sq" ? (SQ[s] ?? s) : s),
    }),
    [lang, chosen],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useLang() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    return {
      lang: "en" as const,
      chosen: false,
      setLang: () => {},
      t: (s: string) => s,
    };
  }
  return ctx;
}
