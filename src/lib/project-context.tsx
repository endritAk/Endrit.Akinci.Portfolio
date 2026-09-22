"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { PROJECTS, type Project } from "@/lib/content";

type Ctx = {
  active: Project | null;
  open: (project: Project) => void;
  close: () => void;
  next: () => void;
  prev: () => void;
};

const ProjectCtx = createContext<Ctx | null>(null);

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<Project | null>(null);

  const value = useMemo<Ctx>(
    () => ({
      active,
      open: (project) => setActive(project),
      close: () => setActive(null),
      next: () => {
        setActive((cur) => {
          if (!cur) return cur;
          const i = PROJECTS.findIndex((p) => p.id === cur.id);
          return PROJECTS[(i + 1) % PROJECTS.length] ?? cur;
        });
      },
      prev: () => {
        setActive((cur) => {
          if (!cur) return cur;
          const i = PROJECTS.findIndex((p) => p.id === cur.id);
          return PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length] ?? cur;
        });
      },
    }),
    [active],
  );

  return <ProjectCtx.Provider value={value}>{children}</ProjectCtx.Provider>;
}

export function useProject() {
  const ctx = useContext(ProjectCtx);
  if (!ctx) {
    return {
      active: null,
      open: () => {},
      close: () => {},
      next: () => {},
      prev: () => {},
    };
  }
  return ctx;
}
