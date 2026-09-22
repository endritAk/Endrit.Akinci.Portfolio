"use client";

import { FOCUS } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";
import { TOOL_MARKS } from "@/components/marks";

export function About() {
  const { t, lang } = useLang();
  const headline =
    lang === "sq" ? ["MONTOJ,", "KRIJOJ,", "EVOLUOJ."] : ["EDITING,", "CREATING,", "EVOLVING."];
  return (
    <section id="about" className="paper relative overflow-x-clip px-0 py-24 sm:py-32">
      <div className="wrap about-split">
        <Reveal>
          <p className="tiny mb-5">{t("ABOUT")}</p>
          <h2 className="mega about-mega">
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
        <Reveal delay={60} className="about-face">
          <img
            src="/media/portrait.jpg"
            alt="Endrit Akinci"
            width={1024}
            height={1536}
          />
        </Reveal>
        <Reveal delay={80} className="about-copy">
          <p className="mb-4 font-display text-xl tracking-tight">{t("Hi, I'm Endrit Akinci.")}</p>
          <p className="mb-4 text-sm leading-body text-muted">
            {t(
              "Video editor and content creator focused on Short-form, Social Media, product videos, Brand Content and AI-driven visual work.",
            )}
          </p>
          <p className="text-sm leading-body text-muted">
            {t("My focus is a strong hook, clean pacing and purposeful visual storytelling.")}
          </p>
        </Reveal>
      </div>

      <div className="wrap mt-16 grid grid-cols-2 gap-x-5 gap-y-5 sm:mt-20 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-10">
        {FOCUS.map((item, i) => (
          <Reveal key={item} delay={i * 40} className="skill-cell">
            <p>{t(item)}</p>
          </Reveal>
        ))}
      </div>

      <div className="wrap mt-16">
        <p className="tiny mb-6">{t("TOOLS")}</p>
        <ul className="tools-row">
          {TOOL_MARKS.map(({ id, label, src }) => (
            <li key={id}>
              <div className="tool-item">
                <img src={src} alt="" className="tool-mark" width={128} height={128} />
                <span>{label}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
