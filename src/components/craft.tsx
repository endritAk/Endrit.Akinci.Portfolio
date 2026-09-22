"use client";

import { DESIGNS, LOGOS, SPORTS } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function Craft() {
  const { t } = useLang();
  return (
    <section id="craft" className="paper px-0 py-20 sm:py-28">
      <div className="wrap">
        <Reveal className="mb-12 flex flex-col justify-between gap-4 border-b-2 border-ink pb-4 sm:flex-row sm:items-end">
          <div>
            <p className="tiny mb-3">{t("03 / STILL WORK")}</p>
            <h2 className="text-3xl tracking-tight">{t("DESIGN / BRAND")}</h2>
          </div>
          <p className="max-w-sm text-sm leading-body text-muted">
            {t("Social posts, campaign concepts, marks and sport visuals.")}
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5">
          {DESIGNS.map((item, i) => (
            <Reveal key={item.src} delay={i * 30}>
              <figure
                className={cn(
                  "group bg-cream p-2 shadow-[6px_8px_0_0_var(--color-ink)] transition-transform duration-medium",
                  i % 2 === 0 ? "-rotate-1" : "rotate-1",
                  "hover:rotate-0 hover:scale-[1.03]",
                )}
              >
                <div className="overflow-hidden bg-paper">
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="h-auto w-full object-contain transition-transform duration-slow group-hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="design-caption">{t(item.caption)}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 border-y-2 border-ink sm:grid-cols-3">
          {LOGOS.map((logo) => (
            <figure
              key={logo.name}
              className="relative grid h-56 place-items-center border-b border-ink sm:border-r sm:border-b-0 sm:last:border-r-0"
            >
              <img src={logo.src} alt={logo.name} className="max-h-28 max-w-[58%] object-contain" />
              <figcaption className="tiny absolute bottom-4">{logo.name}</figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {SPORTS.map((item, i) => (
            <Reveal key={item.name} delay={i * 40}>
              <figure className="bg-cream p-2 pb-10 shadow-[5px_6px_0_0_var(--color-ink)]">
                <img src={item.src} alt={item.name} className="h-auto w-full object-contain" />
                <figcaption className="mt-3 px-1 font-display text-sm tracking-tight">
                  {item.name}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
