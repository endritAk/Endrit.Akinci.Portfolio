"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const playing = new Set<HTMLVideoElement>();
const MAX_PLAYING = 5;

function tryPlay(el: HTMLVideoElement) {
  if (playing.has(el)) return;
  if (playing.size >= MAX_PLAYING) {
    const first = playing.values().next().value;
    if (first && first !== el) {
      first.pause();
      playing.delete(first);
    }
  }
  playing.add(el);
  const play = el.play();
  if (play) play.catch(() => playing.delete(el));
}

function stop(el: HTMLVideoElement) {
  el.pause();
  playing.delete(el);
}

type AutoVideoProps = {
  src: string;
  poster: string;
  className?: string;
  title: string;
  preload?: "none" | "metadata" | "auto";
  eager?: boolean;
  fit?: "contain" | "cover";
  frozen?: boolean;
  sound?: boolean;
};

export function AutoVideo({
  src,
  poster,
  className,
  title,
  preload = "none",
  eager = false,
  fit = "contain",
  frozen = false,
  sound = false,
}: AutoVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = !sound;
    el.defaultMuted = true;
    el.playsInline = true;
    el.loop = true;
    setReady(false);

    const onPlaying = () => setReady(true);
    el.addEventListener("playing", onPlaying);

    if (eager && !frozen) tryPlay(el);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry || frozen) return;
        if (entry.isIntersecting && entry.intersectionRatio >= 0.28) tryPlay(el);
        else stop(el);
      },
      { threshold: [0, 0.28, 0.55], rootMargin: "80px 0px" },
    );
    io.observe(el);
    return () => {
      el.removeEventListener("playing", onPlaying);
      io.disconnect();
      stop(el);
    };
  }, [src, eager, frozen, sound]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = !sound;
    if (sound) {
      el.volume = 1;
      const play = el.play();
      if (play) play.catch(() => {
        el.muted = true;
      });
    }
  }, [sound]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (frozen) stop(el);
    else tryPlay(el);
  }, [frozen]);

  const fitClass = fit === "cover" ? "object-cover" : "object-contain";

  return (
    <div className={cn("absolute inset-0 bg-ink", className)}>
      <img
        src={poster}
        alt=""
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 h-full w-full transition-opacity duration-medium",
          fitClass,
          ready ? "opacity-0" : "opacity-100",
        )}
      />
      <video
        ref={ref}
        className={cn("pointer-events-none absolute inset-0 h-full w-full", fitClass)}
        poster={poster}
        muted={!sound}
        loop
        playsInline
        preload={eager ? "metadata" : preload}
        autoPlay={eager && !frozen}
        disablePictureInPicture
        controlsList="nodownload noplaybackrate"
        aria-label={title}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
