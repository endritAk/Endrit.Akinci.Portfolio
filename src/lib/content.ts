export const VIDEO_CDN = "/public/videos";
export type Aspect = "9:16" | "16:9";
export type Kind = "edit" | "ai";
export type Size = "sm" | "md" | "lg" | "wide";

export type Project = {
  id: string;
  number: string;
  title: string;
  client: string;
  category: string;
  role: string;
  work: string;
  tools: string;
  aspect: Aspect;
  kind: Kind;
  size: Size;
  shift?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "duaa",
    number: "01",
    title: "DUAA",
    client: "Duaa Perfume",
    category: "Short-form / Social Media",
    role: "Video Editor",
    work: "Short-form edit, pacing, subtitles, music, sound design, storytelling.",
    tools: "Premiere Pro · CapCut · After Effects",
    aspect: "9:16",
    kind: "edit",
    size: "lg",
  },
  {
    id: "nina",
    number: "02",
    title: "NINA",
    client: "Nina",
    category: "Product showcase",
    role: "Video Editor",
    work: "Product pacing, texture cuts, hold-through-the-beat structure.",
    tools: "Premiere Pro · CapCut",
    aspect: "9:16",
    kind: "edit",
    size: "md",
    shift: true,
  },
  {
    id: "mrstiff",
    number: "03",
    title: "MR. STIFF",
    client: "Mr. Stiff",
    category: "Product ad",
    role: "Video Editor",
    work: "Direct-response cuts, commercial structure, motion and punch.",
    tools: "Premiere Pro · After Effects",
    aspect: "9:16",
    kind: "edit",
    size: "lg",
  },
  {
    id: "gamp",
    number: "04",
    title: "GAMP",
    client: "GAMP by KAWA",
    category: "Industrial / Brand",
    role: "Video Editor / Content Creator",
    work: "Construction footage selection, sequencing, cuts, sound design, social-media adaptation.",
    tools: "Premiere Pro",
    aspect: "9:16",
    kind: "edit",
    size: "md",
    shift: true,
  },
  {
    id: "kawa-betoni",
    number: "05",
    title: "KAWA",
    client: "KAWA Group",
    category: "Construction / Brand",
    role: "Video Editor / Content Creator",
    work: "Brand content, construction visuals, editing, pacing, social-media content.",
    tools: "Premiere Pro · After Effects · Photoshop",
    aspect: "9:16",
    kind: "edit",
    size: "lg",
  },
  {
    id: "telesport",
    number: "06",
    title: "TELESPORT",
    client: "Telesport",
    category: "Sport / Social Media",
    role: "Video Editor",
    work: "In-feed sport edit, captions, motion, energy for social.",
    tools: "Premiere Pro · After Effects · CapCut",
    aspect: "9:16",
    kind: "edit",
    size: "md",
  },
  {
    id: "tripod",
    number: "07",
    title: "TRIPOD LED",
    client: "Product",
    category: "Motion / Product",
    role: "Video Editor / Motion",
    work: "Product motion, light, form, a tight object-first cut.",
    tools: "Premiere Pro · After Effects",
    aspect: "9:16",
    kind: "edit",
    size: "md",
  },
  {
    id: "ax300",
    number: "08",
    title: "AX300",
    client: "Tech product",
    category: "Tech / Social ad",
    role: "Video Editor",
    work: "Fast information, clear product beats, built for in-feed.",
    tools: "Premiere Pro · CapCut",
    aspect: "9:16",
    kind: "edit",
    size: "md",
  },
  {
    id: "artur10",
    number: "09",
    title: "ARTUR10",
    client: "Artur10",
    category: "Promotional",
    role: "Video Editor",
    work: "Hook in the first second, story in the rest. Social-first rhythm.",
    tools: "Premiere Pro · CapCut",
    aspect: "9:16",
    kind: "edit",
    size: "md",
    shift: true,
  },
  {
    id: "villa-triangle",
    number: "10",
    title: "VILLA TRIANGLE",
    client: "Architecture",
    category: "AI Video",
    role: "AI Video / Creative Direction",
    work: "AI image generation, image-to-video, visual continuity, camera movement and final edit.",
    tools: "AI tools · Premiere Pro · After Effects",
    aspect: "9:16",
    kind: "ai",
    size: "lg",
  },
  {
    id: "lord-dita-nata",
    number: "11",
    title: "LORD — DAY / NIGHT",
    client: "LORD Residence",
    category: "AI Video / Architecture",
    role: "AI Video / Creative Direction",
    work: "Day-to-night transition, locked geometry, lighting progression, final grade.",
    tools: "AI tools · Premiere Pro",
    aspect: "9:16",
    kind: "ai",
    size: "md",
    shift: true,
  },
  {
    id: "lgs-concept",
    number: "12",
    title: "LGS VILLA",
    client: "LGS",
    category: "AI Architectural concept",
    role: "AI Video / Creative Direction",
    work: "Concept stills to motion, camera path, material continuity, final edit.",
    tools: "AI tools · Premiere Pro",
    aspect: "9:16",
    kind: "ai",
    size: "sm",
  },
  {
    id: "villat",
    number: "13",
    title: "VILLAT",
    client: "Property",
    category: "AI Property visual",
    role: "AI Video / Creative Direction",
    work: "Atmosphere-first property film. Continuity, camera, final cut.",
    tools: "AI tools · Premiere Pro",
    aspect: "9:16",
    kind: "ai",
    size: "sm",
  },
  {
    id: "villa-lgs",
    number: "14",
    title: "VILLA LGS",
    client: "LGS",
    category: "AI Villa visualization",
    role: "AI Video / Creative Direction",
    work: "Lived-in grade, materials, landscape, a camera that behaves like a real shoot.",
    tools: "AI tools · Premiere Pro",
    aspect: "9:16",
    kind: "ai",
    size: "md",
  },
  {
    id: "ai-lord-buildings",
    number: "15",
    title: "LORD BUILDINGS",
    client: "LORD Residence",
    category: "AI Architectural visual",
    role: "AI Video / Creative Direction",
    work: "Wide architectural visual. Scale, dusk light, cinematic skyline read.",
    tools: "AI tools · Premiere Pro",
    aspect: "16:9",
    kind: "ai",
    size: "wide",
  },
];

export const EDIT_PROJECTS = PROJECTS.filter((p) => p.kind === "edit");
export const AI_PROJECTS = PROJECTS.filter((p) => p.kind === "ai");

export const FOCUS = [
  "VIDEO EDITING",
  "SHORT-FORM",
  "SOCIAL MEDIA",
  "AI VIDEO",
  "CONTENT CREATION",
  "MOTION GRAPHICS",
  "VISUAL STORYTELLING",
  "BRAND",
] as const;

export const TOOLS = [
  "Adobe Premiere Pro",
  "After Effects",
  "Photoshop",
  "Illustrator",
  "CapCut",
  "AI Tools",
] as const;

export const DESIGNS = [
  { src: "/media/designs/lord-realitet.jpeg", caption: "LORD RESIDENCE / REALITET" },
  { src: "/media/designs/gamp-struktura.jpeg", caption: "GAMP BY KAWA / NGA STRUKTURA" },
  { src: "/media/designs/lord-arkitekture.jpeg", caption: "LORD RESIDENCE / ARKITEKTURË" },
  { src: "/media/designs/gamp-vizion.jpeg", caption: "GAMP BY KAWA / ME VIZION" },
  { src: "/media/designs/wolt.jpg", caption: "WOLT KOSOVA / 3D SOCIAL CONCEPT" },
  { src: "/media/designs/plus-travel.jpg", caption: "PLUS TRAVEL" },
  { src: "/media/designs/paris.jpg", caption: "PARIS TRIP" },
  { src: "/media/designs/urime-kosove.png", caption: "URIME KOSOVË" },
] as const;

export const LOGOS = [
  { src: "/media/logos/brain-logo.png", name: "BRAIND_" },
  { src: "/media/logos/infd-logo.png", name: "INFD" },
  { src: "/media/logos/zip-vintage.jpg", name: "ZIPVINTAGE" },
] as const;

export const SPORTS = [
  { src: "/media/sports/roma.webp", name: "Roma" },
  { src: "/media/sports/psg.webp", name: "PSG" },
  { src: "/media/sports/inter.webp", name: "Inter" },
  { src: "/media/sports/morocco.webp", name: "Morocco" },
] as const;

export const EXPERIENCE = [
  {
    years: "2026 — Present",
    place: "KAWA Group",
    role: "Marketing Manager / Video Editor / Cameraman / Graphic Designer",
    copy: "Marketing content and visual communication — video, filming, design, social.",
  },
  {
    years: "2025 — 2026",
    place: "Jungle Creations",
    parent: "MetDaan",
    role: "Video Editor",
    copy: "TikTok, Instagram and Snapchat. Pace, creativity, a social-first cut.",
  },
  {
    years: "2024 — 2026",
    place: "MetDaan",
    role: "Video Editor",
    copy: "Professional editing for Instagram and TikTok.",
  },
  {
    years: "2023 — Present",
    place: "Freelance",
    role: "Video Editor",
    copy: "Product, social, brand and creative requests for different clients.",
  },
] as const;

export const EDUCATION = [
  {
    years: "2023 — 2024",
    place: "Innovemia Academy",
    role: "Digital Media Video Editing",
  },
  {
    years: "2019 — 2022",
    place: "Shtjefën Gjeçovi",
    role: "CNC Engineering",
  },
  {
    years: "2021",
    place: "English Course",
    role: "Language Course",
  },
] as const;

export const LINKS = {
  email: "videoeditingendrit@gmail.com",
  instagram: "https://www.instagram.com/endritakinci_/",
  linkedin: "https://www.linkedin.com/in/endrit-akinci-7a831b325/",
  archive:
    "https://drive.google.com/drive/folders/18FFAU--_qcUwUq2zymQW-QTRGxc7rs2B?usp=sharing",
} as const;

export const NAV = [
  { href: "#work", label: "WORK" },
  { href: "#about", label: "ABOUT" },
  { href: "#contact", label: "CONTACT" },
] as const;

export function videoSrc(id: string) {
  return `${VIDEO_CDN}/${id}.mp4`;
}

export function posterSrc(id: string) {
  return `/media/posters/${id}.jpg`;
}

export function projectById(id: string) {
  return PROJECTS.find((p) => p.id === id);
}

export function projectIndex(id: string) {
  return PROJECTS.findIndex((p) => p.id === id);
}
