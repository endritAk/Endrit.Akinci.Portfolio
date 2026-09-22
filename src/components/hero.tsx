"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Hero() {
  const { t, setLang, chosen } = useLang();
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMove = (e: MouseEvent) => {
      if (mq.matches) return;
      setPos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="top"
      className="paper relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-4 pt-20 pb-10 sm:px-8 sm:pt-24"
    >
      <p className="tiny pointer-events-none absolute top-20 left-4 z-20 sm:top-24 sm:left-8">
        {t("VIDEO EDITOR / CREATOR")}
      </p>
      <p className="tiny pointer-events-none absolute top-20 right-4 z-20 sm:top-24 sm:right-8">2026</p>

      <div className="hero-floaters pointer-events-none absolute inset-0 z-[1]" aria-hidden>
        <span
          className="floater floater-a left-[4%] top-[20%] hidden sm:block"
          style={{ transform: `translate3d(${pos.x * -14}px, ${pos.y * -10}px, 0) rotate(-8deg)` }}
        >
          <img src="/media/float/timeline.png" alt="" width={256} height={256} className="h-16 w-16 lg:h-20 lg:w-20" />
        </span>
        <span
          className="floater floater-b right-[5%] top-[18%] hidden sm:block"
          style={{ transform: `translate3d(${pos.x * 16}px, ${pos.y * -8}px, 0) rotate(7deg)` }}
        >
          <img src="/media/float/premiere.png" alt="" width={160} height={160} className="h-11 w-11 lg:h-14 lg:w-14" />
        </span>
        <span
          className="floater floater-c left-[7%] bottom-[16%]"
          style={{ transform: `translate3d(${pos.x * 10}px, ${pos.y * 12}px, 0) rotate(-6deg)` }}
        >
          <img src="/media/float/clapper.png" alt="" width={256} height={256} className="h-14 w-14 sm:h-[4.5rem] sm:w-[4.5rem]" />
        </span>
        <span
          className="floater floater-d right-[6%] bottom-[14%]"
          style={{ transform: `translate3d(${pos.x * -12}px, ${pos.y * 10}px, 0) rotate(8deg)` }}
        >
          <img src="/media/float/camera.png" alt="" width={256} height={256} className="h-14 w-14 sm:h-16 sm:w-16" />
        </span>
        <span
          className="floater floater-e left-[15%] top-[44%] hidden md:block"
          style={{ transform: `translate3d(${pos.x * 8}px, ${pos.y * -14}px, 0) rotate(4deg)` }}
        >
          <img src="/media/float/ai-chip.png" alt="" width={256} height={256} className="h-12 w-12" />
        </span>
        <span
          className="floater floater-f right-[14%] top-[48%] hidden md:block"
          style={{ transform: `translate3d(${pos.x * -9}px, ${pos.y * 11}px, 0) rotate(-5deg)` }}
        >
          <img src="/media/float/timeline-2.png" alt="" width={256} height={256} className="h-14 w-14" />
        </span>
        <span
          className="floater floater-h left-[3%] top-[58%] hidden lg:block"
          style={{ transform: `translate3d(${pos.x * -6}px, ${pos.y * 8}px, 0) rotate(10deg)` }}
        >
          <img src="/media/float/capcut.png" alt="" width={160} height={160} className="h-10 w-10" />
        </span>
      </div>

      <div className="relative z-20 mx-auto w-full max-w-[1400px]">
        <h1
          className="lockup"
          style={{ transform: `translate3d(${pos.x * 10}px, ${pos.y * 7}px, 0)` }}
        >
          <span>PORTF</span>
          <span className="lockup-face">
            <img
              src="/media/hero-face.png"
              alt=""
              width={1169}
              height={1746}
            />
            <span className="lockup-name">Endrit Akinci</span>
          </span>
          <span>LIO</span>
        </h1>
        <span className="sr-only">PORTFOLIO — Endrit Akinci, Video Editor and Content Creator</span>
      </div>

      {!chosen && (
        <div className="relative z-20 mt-20 text-center sm:mt-24">
          <p className="tiny mb-3">CHOOSE YOUR LANGUAGE / ZGJIDH GJUHËN</p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => setLang("en")}
              className="tiny border-2 border-ink bg-paper px-4 py-2.5 hover:bg-ink hover:text-paper"
            >
              ENGLISH
            </button>
            <button
              type="button"
              onClick={() => setLang("sq")}
              className="tiny border-2 border-ink bg-paper px-4 py-2.5 hover:bg-ink hover:text-paper"
            >
              SHQIP
            </button>
          </div>
        </div>
      )}

      <div className={cn("relative z-20 mt-16 flex flex-col items-center gap-6 sm:mt-24")}>
        <p className="max-w-md text-center text-sm text-muted">
          {t("Short-form content, social videos, commercials and cinematic edits.")}
        </p>
        <a href="#work" className="tiny inline-flex min-h-11 items-center gap-2 hover:text-red">
          {t("VIEW THE WORK")} ↓
        </a>
      </div>
    </section>
  );
}
