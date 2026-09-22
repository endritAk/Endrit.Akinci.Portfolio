"use client";

import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Craft } from "@/components/craft";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { SiteNav } from "@/components/nav";
import { Path } from "@/components/path";
import { ProjectStage } from "@/components/stage";
import { AiWork, EditWork } from "@/components/work";
import { LangProvider, useLang } from "@/lib/i18n";
import { ProjectProvider } from "@/lib/project-context";

function SkipLink() {
  const { t } = useLang();
  return (
    <a
      href="#work"
      className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
    >
      {t("Skip to work")}
    </a>
  );
}

export function HomePage() {
  return (
    <LangProvider>
      <ProjectProvider>
        <SkipLink />
        <SiteNav />
        <main>
          <Hero />
          <Marquee items={["VIDEO EDITING", "SHORT-FORM", "AI VIDEO", "SOCIAL MEDIA", "BRAND"]} />
          <About />
          <EditWork />
          <AiWork />
          <Marquee items={["PREMIERE PRO", "AFTER EFFECTS", "CAPCUT", "PHOTOSHOP", "AI TOOLS"]} />
          <Craft />
          <Path />
          <Contact />
        </main>
        <ProjectStage />
      </ProjectProvider>
    </LangProvider>
  );
}
