"use client";

import { useState } from "react";
import { AutoVideo } from "@/components/auto-video";
import { Reveal } from "@/components/reveal";
import {
  AI_PROJECTS,
  EDIT_PROJECTS,
  type Project,
  posterSrc,
  videoSrc,
} from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { useProject } from "@/lib/project-context";
import { cn } from "@/lib/utils";

function FilmCard({ project }: { project: Project }) {
  const { t } = useLang();
  const { open, active } = useProject();
  const [on, setOn] = useState(false);
  const landscape = project.aspect === "16:9";

  return (
    <article
      className={cn(
        "film-card",
        `card-${project.size}`,
        project.shift && "card-shift",
        on && "is-on",
      )}
    >
      <button
        type="button"
        className="block w-full text-left"
        onMouseEnter={() => setOn(true)}
        onMouseLeave={() => setOn(false)}
        onFocus={() => setOn(true)}
        onBlur={() => setOn(false)}
        onClick={() => open(project)}
        aria-label={`${project.title}. ${project.role}. ${t("Open project")}`}
      >
        <div
          className="relative overflow-hidden border-2 border-ink bg-ink"
          style={{ aspectRatio: landscape ? "16 / 9" : "9 / 16" }}
        >
          <AutoVideo
            src={videoSrc(project.id)}
            poster={posterSrc(project.id)}
            title={project.title}
            frozen={Boolean(active)}
          />
          <div className="film-meta pointer-events-none absolute inset-x-0 bottom-0 hidden bg-gradient-to-t from-ink via-ink/90 to-transparent p-4 pt-16 text-paper md:block lg:p-5">
            <p className="tiny text-red">{t(project.category)}</p>
            <h3 className="mt-1.5 font-display text-2xl tracking-tight">{project.title}</h3>
            <p className="mt-1.5 text-sm font-bold tracking-wide">{t(project.role)}</p>
            <p className="mt-2 max-w-[36ch] text-sm leading-snug text-paper/90">
              {t(project.work)}
            </p>
            <p className="tiny mt-3 text-paper/85">{t("Click for sound")}</p>
          </div>
        </div>
        <div className="mt-2.5 border-t border-ink pt-2 md:hidden">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-lg tracking-tight">{project.title}</h3>
            <span className="tiny max-w-[46%] text-right text-muted">{t(project.category)}</span>
          </div>
          <p className="mt-1.5 text-sm font-bold">{t(project.role)}</p>
          <p className="mt-1 text-sm leading-snug text-muted">{t(project.work)}</p>
          <p className="tiny mt-2 text-red">{t("Tap for sound")}</p>
        </div>
      </button>
    </article>
  );
}

function WorkBlock({
  id,
  kicker,
  title,
  copy,
  projects,
}: {
  id: string;
  kicker: string;
  title: string;
  copy: string;
  projects: Project[];
}) {
  const { t } = useLang();
  return (
    <section id={id} className="paper px-0 py-20 sm:py-28">
      <div className="wrap">
        <Reveal className={cn(
          "mb-12 flex flex-col justify-between gap-4 border-b-2 border-ink pb-4 sm:flex-row sm:items-end",
          id === "work" && "mb-8 sm:mb-10",
        )}>
          <div>
            <p className="tiny mb-3">{t(kicker)}</p>
            <h2 className="text-3xl tracking-tight">{t(title)}</h2>
          </div>
          <p className="max-w-sm text-sm leading-body text-muted">{t(copy)}</p>
        </Reveal>
        <div className={cn("work-grid", id === "work" && "work-grid-edit")}>
          {projects.map((project, i) => (
            <Reveal
              key={project.id}
              delay={Math.min(i * 35, 180)}
              className={cn(`card-${project.size}`, project.shift && "card-shift")}
            >
              <FilmCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EditWork() {
  return (
    <WorkBlock
      id="work"
      kicker="01 / SELECTED WORK"
      title="VIDEO EDITING"
      copy="Hover a cut to read what I did. Click to open it with sound."
      projects={EDIT_PROJECTS}
    />
  );
}

export function AiWork() {
  return (
    <WorkBlock
      id="ai"
      kicker="02 / AI WORK"
      title="AI VIDEO"
      copy="Architectural and property films — generated, directed and edited as finished pieces."
      projects={AI_PROJECTS}
    />
  );
}
