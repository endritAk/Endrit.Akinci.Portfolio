"use client";

import { useLang } from "@/lib/i18n";

export function Marquee({ items }: { items: string[] }) {
  const { t } = useLang();
  const row = [...items, ...items];
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        {row.map((item, i) => (
          <span key={item + i}>
            {t(item)} <em>✦</em>
          </span>
        ))}
      </div>
    </div>
  );
}
