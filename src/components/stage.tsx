"use client";

import { useEffect, useState } from "react";
import { Volume2, VolumeX, X, ChevronLeft, ChevronRight } from "lucide-react";
import { AutoVideo } from "@/components/auto-video";
import { LINKS, posterSrc, videoSrc } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { useProject } from "@/lib/project-context";
import { cn } from "@/lib/utils";

export function ProjectStage() {
  const { t } = useLang();
  const { active, close, next, prev } = useProject();
  const [sound, setSound] = useState(true);

  useEffect(() => {
    if (!active) return;
    setSound(true);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "m" || e.key === "M") setSound((s) => !s);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, next, prev]);

  if (!active) return null;
  const landscape = active.aspect === "16:9";

  return (
    <div
      className="fixed inset-0 z-50 flex items-stretch bg-stage text-paper"
      role="dialog"
      aria-modal="true"
      aria-labelledby="stage-title"
    >
      <div className="stage-enter grid h-full min-h-0 w-full grid-rows-[minmax(240px,54svh)_minmax(0,1fr)] lg:grid-cols-12 lg:grid-rows-1">
        <div
          className={cn(
            "relative min-h-0 bg-ink p-3 sm:p-6",
            landscape ? "lg:col-span-8" : "lg:col-span-7",
          )}
        >
          <div className="relative mx-auto h-full w-full max-w-[460px] lg:max-w-none">
            <AutoVideo
              key={active.id}
              src={videoSrc(active.id)}
              poster={posterSrc(active.id)}
              title={active.title}
              eager
              sound={sound}
            />
          </div>
        </div>

        <aside className="flex min-h-0 flex-col overflow-y-auto border-t border-paper/15 p-5 sm:p-8 lg:col-span-5 lg:border-t-0 lg:border-l lg:p-10">
          <p className="tiny text-red">
            {active.number} / {t(active.category)}
          </p>
          <h2 id="stage-title" className="mt-4 font-display text-3xl tracking-tight sm:text-4xl">
            {active.title}
          </h2>
          <p className="mt-2 text-sm text-paper/70">{active.client}</p>

          <dl className="mt-8 grid gap-6 text-[0.95rem]">
            <div>
              <dt className="tiny text-paper/55">{t("ROLE")}</dt>
              <dd className="mt-1.5 font-bold leading-snug">{t(active.role)}</dd>
            </div>
            <div>
              <dt className="tiny text-paper/55">{t("WHAT I DID")}</dt>
              <dd className="mt-1.5 max-w-sm leading-body text-paper/90">{t(active.work)}</dd>
            </div>
            <div>
              <dt className="tiny text-paper/55">{t("TOOLS")}</dt>
              <dd className="mt-1.5">{active.tools}</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setSound((s) => !s)}
              className={cn(
                "tiny inline-flex min-h-11 items-center gap-2 border px-4",
                sound ? "border-red bg-red text-paper" : "border-paper text-paper",
              )}
            >
              {sound ? <Volume2 size={16} /> : <VolumeX size={16} />}
              {sound ? t("SOUND ON") : t("SOUND OFF")}
            </button>
            <a
              href={LINKS.archive}
              target="_blank"
              rel="noreferrer"
              className="tiny inline-flex min-h-11 items-center border border-paper/40 px-4"
            >
              {t("FULL ARCHIVE")} ↗
            </a>
          </div>

          <div className="mt-auto flex items-center justify-between gap-3 pt-10">
            <button
              type="button"
              onClick={prev}
              className="tiny inline-flex min-h-11 items-center gap-1"
            >
              <ChevronLeft size={16} /> {t("PREV")}
            </button>
            <button
              type="button"
              onClick={next}
              className="tiny inline-flex min-h-11 items-center gap-1"
            >
              {t("NEXT")} <ChevronRight size={16} />
            </button>
          </div>
        </aside>
      </div>

      <button
        type="button"
        onClick={close}
        className="tiny absolute top-3 right-3 z-10 inline-flex min-h-11 min-w-11 items-center justify-center bg-stage text-paper sm:top-5 sm:right-5"
        aria-label={t("CLOSE")}
      >
        <X size={20} />
      </button>
    </div>
  );
}
