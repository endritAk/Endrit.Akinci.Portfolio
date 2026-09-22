"use client";

import { LINKS } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";

export function Contact() {
  const { t, lang } = useLang();
  const lines =
    lang === "sq"
      ? ["TË BËJMË", "DIÇKA", "QË IA VLEN", "TË SHIKOHET."]
      : ["LET’S MAKE", "SOMETHING", "WORTH WATCHING."];

  return (
    <section id="contact" className="paper flex min-h-[100svh] items-center px-0 py-20 sm:py-24">
      <div className="wrap">
        <p className="tiny mb-6">{t("AVAILABLE FOR FREELANCE / COLLABORATION")}</p>
        <Reveal>
          <h2 className="mega">
            {lines.map((line, i) => (
              <span key={line}>
                {i === lines.length - 1 ? (
                  <em className="not-italic text-red">{line}</em>
                ) : (
                  line
                )}
                {i < lines.length - 1 ? <br /> : null}
              </span>
            ))}
          </h2>
        </Reveal>
        <p className="mt-8 font-display text-xl tracking-tight">Endrit Akinci</p>
        <p className="mt-1 text-sm text-muted">{t("Video Editor / Content Creator")}</p>
        <div className="mt-12 flex flex-wrap gap-3 border-t-2 border-ink pt-6 sm:gap-4">
          <a href={`mailto:${LINKS.email}`} className="cta-link is-fill">
            {t("EMAIL")} ↗
          </a>
          <a href={LINKS.instagram} target="_blank" rel="noreferrer" className="cta-link">
            {t("INSTAGRAM")} ↗
          </a>
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="cta-link">
            {t("LINKEDIN")} ↗
          </a>
          <a href={LINKS.archive} target="_blank" rel="noreferrer" className="cta-link">
            {t("FULL ARCHIVE")} ↗
          </a>
        </div>
        <p className="mt-16 text-xs font-bold tracking-wide text-muted">
          © Endrit Akinci · {t("Video Editor / Content Creator")}
        </p>
      </div>
    </section>
  );
}
