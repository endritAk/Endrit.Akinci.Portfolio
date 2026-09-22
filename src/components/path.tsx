"use client";

import { EDUCATION, EXPERIENCE } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";

export function Path() {
  const { t, lang } = useLang();
  const headline =
    lang === "sq"
      ? ["PËRVOJË", "QË MË MËSON", "GJITHMONË", "DIÇKA TË RE."]
      : ["BUILT BY", "EXPERIENCE,", "SHAPED BY LEARNING."];
  return (
    <section className="paper px-0 py-20 sm:py-28">
      <div className="wrap">
        <Reveal>
          <p className="tiny mb-4">{t("EXPERIENCE")}</p>
          <h2 className="mega mb-12 sm:mb-16">
            {headline.map((line, i) => (
              <span key={line}>
                {i === headline.length - 1 ? (
                  <em className="not-italic text-red">{line}</em>
                ) : (
                  line
                )}
                {i < headline.length - 1 ? <br /> : null}
              </span>
            ))}
          </h2>
        </Reveal>

        <ul>
          {EXPERIENCE.map((item) => (
            <li
              key={item.place}
              className="grid gap-2 border-t-2 border-ink py-6 sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:py-8"
            >
              <p className="tiny text-red sm:col-span-3">{t(item.years)}</p>
              <div className="sm:col-span-9">
                <h3 className="font-display text-2xl tracking-tight sm:text-3xl">
                  {item.place}
                  {"parent" in item && item.parent ? (
                    <span className="ml-2 align-baseline text-[0.72em] font-normal tracking-normal text-muted">
                      ({item.parent})
                    </span>
                  ) : null}
                </h3>
                <p className="mt-1 text-sm font-bold">{t(item.role)}</p>
                <p className="mt-2 max-w-xl text-sm text-muted">{t(item.copy)}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="tiny mt-16 mb-4">{t("EDUCATION")}</p>
        <ul className="grid gap-0 border-t-2 border-ink sm:grid-cols-3">
          {EDUCATION.map((item) => (
            <li
              key={item.place}
              className="border-b border-ink py-6 sm:border-r sm:border-b-0 sm:px-5 sm:py-7 sm:last:border-r-0 sm:first:pl-0"
            >
              <p className="tiny mb-4 text-red">{item.years}</p>
              <h3 className="font-display text-xl tracking-tight">{item.place}</h3>
              <p className="mt-1 text-sm">{t(item.role)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
