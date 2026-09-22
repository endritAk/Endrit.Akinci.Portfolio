import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ChevronRight, n as VolumeX, o as ChevronLeft, r as Volume2, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CsKFvCuv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var VIDEO_CDN = "https://endritak.github.io/Endrit.Akinci.Portfolio/videos";
var PROJECTS = [
	{
		id: "duaa",
		number: "01",
		title: "DUAA",
		client: "Duaa Perfume",
		category: "Short-form / Social",
		role: "Video Editor",
		work: "Short-form edit, pacing, subtitles, music, sound design, storytelling.",
		tools: "Premiere Pro · CapCut · After Effects",
		aspect: "9:16",
		kind: "edit",
		size: "lg"
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
		size: "sm",
		shift: true
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
		size: "md"
	},
	{
		id: "gamp",
		number: "04",
		title: "GAMP",
		client: "GAMP by KAWA",
		category: "Industrial / Brand",
		role: "Video Editor / Content Creator",
		work: "Construction footage selection, sequencing, cuts, sound design, social-media adaptation.",
		tools: "Premiere Pro · DaVinci Resolve",
		aspect: "9:16",
		kind: "edit",
		size: "md",
		shift: true
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
		size: "lg"
	},
	{
		id: "telesport",
		number: "06",
		title: "TELESPORT",
		client: "Telesport",
		category: "Sport / Social",
		role: "Video Editor",
		work: "In-feed sport edit, captions, motion, energy for social.",
		tools: "Premiere Pro · After Effects · CapCut",
		aspect: "9:16",
		kind: "edit",
		size: "sm"
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
		size: "sm"
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
		size: "md"
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
		size: "sm",
		shift: true
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
		size: "lg"
	},
	{
		id: "lord-dita-nata",
		number: "11",
		title: "LORD — DAY / NIGHT",
		client: "LORD Residence",
		category: "AI Video / Architecture",
		role: "AI Video / Creative Direction",
		work: "Day-to-night transition, locked geometry, lighting progression, final grade.",
		tools: "AI tools · Premiere Pro · DaVinci Resolve",
		aspect: "9:16",
		kind: "ai",
		size: "md",
		shift: true
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
		size: "sm"
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
		size: "sm"
	},
	{
		id: "villa-lgs",
		number: "14",
		title: "VILLA LGS",
		client: "LGS",
		category: "AI Villa visualization",
		role: "AI Video / Creative Direction",
		work: "Lived-in grade, materials, landscape, a camera that behaves like a real shoot.",
		tools: "AI tools · Premiere Pro · DaVinci Resolve",
		aspect: "9:16",
		kind: "ai",
		size: "md"
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
		size: "wide"
	}
];
var EDIT_PROJECTS = PROJECTS.filter((p) => p.kind === "edit");
var AI_PROJECTS = PROJECTS.filter((p) => p.kind === "ai");
var FOCUS = [
	"Video Editing",
	"Short-form Content",
	"Social Media",
	"AI Video",
	"Content Creation",
	"Motion Graphics",
	"Visual Storytelling",
	"Brand Content"
];
var TOOLS$1 = [
	"Adobe Premiere Pro",
	"After Effects",
	"Photoshop",
	"Illustrator",
	"CapCut",
	"DaVinci Resolve",
	"AI tools"
];
var DESIGNS = [
	{
		src: "/media/designs/lord-realitet.jpeg",
		caption: "LORD RESIDENCE / REALITET"
	},
	{
		src: "/media/designs/gamp-struktura.jpeg",
		caption: "GAMP BY KAWA / NGA STRUKTURA"
	},
	{
		src: "/media/designs/lord-arkitekture.jpeg",
		caption: "LORD RESIDENCE / ARKITEKTURË"
	},
	{
		src: "/media/designs/gamp-vizion.jpeg",
		caption: "GAMP BY KAWA / ME VIZION"
	},
	{
		src: "/media/designs/wolt.jpg",
		caption: "WOLT KOSOVA / 3D SOCIAL CONCEPT"
	},
	{
		src: "/media/designs/plus-travel.jpg",
		caption: "PLUS TRAVEL"
	},
	{
		src: "/media/designs/paris.jpg",
		caption: "PARIS TRIP"
	},
	{
		src: "/media/designs/urime-kosove.png",
		caption: "URIME KOSOVË"
	}
];
var LOGOS = [
	{
		src: "/media/logos/brain-logo.png",
		name: "BRAIND_"
	},
	{
		src: "/media/logos/infd-logo.png",
		name: "INFD"
	},
	{
		src: "/media/logos/zip-vintage.jpg",
		name: "ZIPVINTAGE"
	}
];
var SPORTS = [
	{
		src: "/media/sports/roma.webp",
		name: "Roma"
	},
	{
		src: "/media/sports/psg.webp",
		name: "PSG"
	},
	{
		src: "/media/sports/inter.webp",
		name: "Inter"
	},
	{
		src: "/media/sports/morocco.webp",
		name: "Morocco"
	}
];
var EXPERIENCE$1 = [
	{
		years: "2026 — Present",
		place: "KAWA Group",
		role: "Marketing Manager / Video Editor / Cameraman / Graphic Designer",
		copy: "Marketing content and visual communication — video, filming, design, social."
	},
	{
		years: "2025 — 2026",
		place: "Jungle Creations",
		role: "Video Editor",
		copy: "TikTok, Instagram and Snapchat. Pace, creativity, a social-first cut."
	},
	{
		years: "2024 — 2025",
		place: "MetDaan",
		role: "Video Editor",
		copy: "Professional editing for Instagram and TikTok."
	},
	{
		years: "2023 — Present",
		place: "Freelance",
		role: "Video Editor",
		copy: "Product, social, brand and creative requests for different clients."
	}
];
var EDUCATION$1 = [
	{
		years: "2023 — 2024",
		place: "Innovemia Academy",
		role: "Digital Media Video Editing"
	},
	{
		years: "2019 — 2022",
		place: "Shtjefën Gjeçovi",
		role: "CNC Engineering"
	},
	{
		years: "2021",
		place: "English Course",
		role: "Language Course"
	}
];
var LINKS = {
	email: "videoeditingendrit@gmail.com",
	instagram: "https://www.instagram.com/endritakinci_/",
	linkedin: "https://www.linkedin.com/in/endrit-akinci-7a831b325/",
	archive: "https://drive.google.com/drive/folders/18FFAU--_qcUwUq2zymQW-QTRGxc7rs2B?usp=sharing"
};
var NAV = [
	{
		href: "#work",
		label: "WORK"
	},
	{
		href: "#about",
		label: "ABOUT"
	},
	{
		href: "#contact",
		label: "CONTACT"
	}
];
function videoSrc(id) {
	return `${VIDEO_CDN}/${id}.mp4`;
}
function posterSrc(id) {
	return `/media/posters/${id}.jpg`;
}
var SQ = {
	"VIDEO EDITOR / CREATOR": "VIDEO EDITOR / KRIJUES",
	"Short-form content, social videos, commercials and cinematic edits.": "Përmbajtje short-form, video për rrjete sociale, reklama dhe montazhe kinematike.",
	"VIEW THE WORK": "SHIKO PUNËN",
	WORK: "PUNA",
	ABOUT: "RRETH MEJE",
	CONTACT: "KONTAKT",
	MENU: "MENU",
	CLOSE: "MBYLL",
	"I CUT": "MONTOJ",
	"FOR THE": "PËR",
	"FIRST SECOND.": "SEKONDËN E PARË.",
	"Hi, I'm Endrit Akinci.": "Përshëndetje, unë jam Endrit Akinci.",
	"Video editor and content creator. Short-form, social, product, brand and AI-assisted cinematic work.": "Video editor dhe content creator. Short-form, social, produkt, brand dhe punë kinematike me AI.",
	"I look for a strong hook, clean pacing and a visual style that feels intentional.": "Kërkoj një hook të fortë, ritëm të pastër dhe një stil vizual me qëllim.",
	"Video Editing": "Montazh Video",
	"Short-form Content": "Përmbajtje Short-form",
	"Social Media": "Rrjetet Sociale",
	"AI Video": "Video me AI",
	"Content Creation": "Krijim Përmbajtjeje",
	"Motion Graphics": "Motion Graphics",
	"Visual Storytelling": "Tregim Vizual",
	"Brand Content": "Përmbajtje Brendi",
	TOOLS: "MJETET",
	"01 / SELECTED WORK": "01 / PUNË TË ZGJEDHURA",
	"VIDEO EDITING": "MONTAZH VIDEO",
	"Hover a cut to read what I did. Click to open it with sound.": "Vendos mausin mbi një video për të lexuar çfarë bëra. Kliko për ta hapur me zë.",
	"02 / AI WORK": "02 / PUNË ME AI",
	"Architectural and property films — generated, directed and edited as finished pieces.": "Filma arkitekturore dhe të pronave — të gjeneruara, drejtuara dhe montuara si pjesë të plota.",
	"03 / STILL WORK": "03 / PUNË STATIKE",
	"DESIGN / BRAND": "DIZAJN / BRAND",
	"Social posts, campaign concepts, marks and sport visuals.": "Postime sociale, koncepte fushatash, identitet dhe vizuale sportive.",
	"Open project": "Hap projektin",
	"Click for sound": "Kliko për zë",
	ROLE: "ROLI",
	"WHAT I DID": "ÇFARË BËRA",
	"SOUND ON": "ZËRI NDEZUR",
	"SOUND OFF": "ZËRI FIKUR",
	"FULL ARCHIVE": "ARKIVA E PLOTË",
	PREV: "PARA",
	NEXT: "TJETRA",
	"Video Editor": "Video Editor",
	"Video Editor / Content Creator": "Video Editor / Content Creator",
	"Video Editor / Motion": "Video Editor / Motion",
	"AI Video / Creative Direction": "Video me AI / Drejtim Kreativ",
	"Short-form edit, pacing, subtitles, music, sound design, storytelling.": "Montazh short-form, ritëm, titra, muzikë, sound design, tregim.",
	"Product pacing, texture cuts, hold-through-the-beat structure.": "Ritëm produkti, prerje teksturash, strukturë mbi beat.",
	"Direct-response cuts, commercial structure, motion and punch.": "Prerje direct-response, strukturë reklamuese, motion dhe goditje.",
	"Construction footage selection, sequencing, cuts, sound design, social-media adaptation.": "Përzgjedhje xhirimesh ndërtimi, sekuencë, prerje, sound design, përshtatje për rrjete sociale.",
	"Brand content, construction visuals, editing, pacing, social-media content.": "Përmbajtje brendi, vizuale ndërtimi, montazh, ritëm, content për rrjete sociale.",
	"In-feed sport edit, captions, motion, energy for social.": "Montazh sportiv për feed, titra, motion, energji për rrjete sociale.",
	"Product motion, light, form, a tight object-first cut.": "Motion produkti, dritë, formë, montazh i ngushtë mbi objekt.",
	"Fast information, clear product beats, built for in-feed.": "Informacion i shpejtë, bite të qarta produkti, ndërtuar për feed.",
	"Hook in the first second, story in the rest. Social-first rhythm.": "Hook në sekondën e parë, histori në pjesën tjetër. Ritëm social-first.",
	"AI image generation, image-to-video, visual continuity, camera movement and final edit.": "Gjenerim imazhesh me AI, image-to-video, vazhdimësi vizuale, lëvizje kamere dhe montazh final.",
	"Day-to-night transition, locked geometry, lighting progression, final grade.": "Kalim ditë-natë, gjeometri e fiksuar, progresion ndriçimi, grade final.",
	"Concept stills to motion, camera path, material continuity, final edit.": "Nga still-e koncepti në lëvizje, rrugë kamere, vazhdimësi materialesh, montazh final.",
	"Atmosphere-first property film. Continuity, camera, final cut.": "Film prone me atmosferë. Vazhdimësi, kamerë, montazh final.",
	"Lived-in grade, materials, landscape, a camera that behaves like a real shoot.": "Grade e gjallë, materiale, peizazh, kamerë që sillet si xhirim i vërtetë.",
	"Wide architectural visual. Scale, dusk light, cinematic skyline read.": "Vizual i gjerë arkitekturor. Shkallë, dritë muzgu, lexime kinematike e skyline-it.",
	"Short-form / Social": "Short-form / Sociale",
	"Product showcase": "Prezantim produkti",
	"Product ad": "Reklamë produkti",
	"Industrial / Brand": "Industriale / Brand",
	"Construction / Brand": "Ndërtim / Brand",
	"Sport / Social": "Sport / Sociale",
	"Motion / Product": "Motion / Produkt",
	"Tech / Social ad": "Teknologji / Reklamë sociale",
	Promotional: "Promocionale",
	"AI Architectural concept": "Koncept arkitekturor me AI",
	"AI Video / Architecture": "Video me AI / Arkitekturë",
	"AI Property visual": "Vizual prone me AI",
	"AI Villa visualization": "Vizualizim vile me AI",
	"AI Architectural visual": "Vizual arkitekturor me AI",
	"LORD RESIDENCE / REALITET": "LORD RESIDENCE / REALITET",
	"GAMP BY KAWA / NGA STRUKTURA": "GAMP BY KAWA / NGA STRUKTURA",
	"LORD RESIDENCE / ARKITEKTURË": "LORD RESIDENCE / ARKITEKTURË",
	"GAMP BY KAWA / ME VIZION": "GAMP BY KAWA / ME VIZION",
	"WOLT KOSOVA / 3D SOCIAL CONCEPT": "WOLT KOSOVA / KONCEPT 3D PËR RRJETE SOCIALE",
	"PLUS TRAVEL": "PLUS TRAVEL",
	"PARIS TRIP": "UDHËTIM NË PARIS",
	"URIME KOSOVË": "URIME KOSOVË",
	EXPERIENCE: "PËRVOJA",
	EDUCATION: "EDUKIMI",
	WHERE: "KU",
	"THE CUT": "MONTAZHI",
	"GOT SHARP.": "U MPREH.",
	"2026 — Present": "2026 — Tani",
	"2025 — 2026": "2025 — 2026",
	"2024 — 2025": "2024 — 2025",
	"2023 — Present": "2023 — Tani",
	"Marketing Manager / Video Editor / Cameraman / Graphic Designer": "Menaxher Marketingu / Video Editor / Kameraman / Dizajner Grafik",
	"TikTok, Instagram and Snapchat. Pace, creativity, a social-first cut.": "TikTok, Instagram dhe Snapchat. Ritëm, kreativitet, montazh social-first.",
	"Professional editing for Instagram and TikTok.": "Montazh profesional për Instagram dhe TikTok.",
	"Product, social, brand and creative requests for different clients.": "Produkt, social, brand dhe kërkesa kreative për klientë të ndryshëm.",
	"Marketing content and visual communication — video, filming, design, social.": "Përmbajtje marketingu dhe komunikim vizual — video, xhirim, dizajn, social.",
	"Digital Media Video Editing": "Montazh Video për Media Digjitale",
	"CNC Engineering": "Inxhinieri CNC",
	"Language Course": "Kurs Gjuhësor",
	"AVAILABLE FOR FREELANCE / COLLABORATION": "I DISPONUESHËM PËR FREELANCE / BASHKËPUNIM",
	"LET'S MAKE": "TË BËJMË",
	SOMETHING: "DIÇKA",
	"WORTH WATCHING.": "QË MERITON T'U SHIKOHET.",
	EMAIL: "EMAIL",
	INSTAGRAM: "INSTAGRAM",
	LINKEDIN: "LINKEDIN",
	"SHORT-FORM": "SHORT-FORM",
	SOCIAL: "SOCIALE",
	BRAND: "BRAND",
	"PREMIERE PRO": "PREMIERE PRO",
	"AFTER EFFECTS": "AFTER EFFECTS",
	CAPCUT: "CAPCUT",
	DAVINCI: "DAVINCI",
	"AI TOOLS": "MJETE AI"
};
var I18nContext = (0, import_react.createContext)(null);
function LangProvider({ children }) {
	const [lang, setLangState] = (0, import_react.useState)("en");
	const [chosen, setChosen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const saved = window.localStorage.getItem("ea-lang");
		if (saved === "en" || saved === "sq") {
			setLangState(saved);
			setChosen(true);
		}
	}, []);
	const value = (0, import_react.useMemo)(() => ({
		lang,
		chosen,
		setLang: (next) => {
			setLangState(next);
			setChosen(true);
			window.localStorage.setItem("ea-lang", next);
			document.documentElement.lang = next === "sq" ? "sq" : "en";
		},
		t: (s) => lang === "sq" ? SQ[s] ?? s : s
	}), [lang, chosen]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nContext.Provider, {
		value,
		children
	});
}
function useLang() {
	const ctx = (0, import_react.useContext)(I18nContext);
	if (!ctx) return {
		lang: "en",
		chosen: false,
		setLang: () => {},
		t: (s) => s
	};
	return ctx;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Reveal({ children, className, delay = 0 }) {
	const ref = (0, import_react.useRef)(null);
	const [on, setOn] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) {
				setOn(true);
				io.disconnect();
			}
		}, { threshold: .12 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("reveal", on && "on", className),
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
function About() {
	const { t } = useLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "about",
		className: "paper relative overflow-hidden px-0 py-24 sm:py-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap grid items-end gap-10 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "lg:col-span-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "tiny mb-5",
						children: t("ABOUT")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mega",
						children: [
							t("I CUT"),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							t("FOR THE"),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "not-italic text-red",
								children: t("FIRST SECOND.")
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 80,
					className: "max-w-md lg:col-span-5 lg:pb-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-4 font-display text-xl tracking-tight",
							children: t("Hi, I'm Endrit Akinci.")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-4 text-sm leading-body text-muted",
							children: t("Video editor and content creator. Short-form, social, product, brand and AI-assisted cinematic work.")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-body text-muted",
							children: t("I look for a strong hook, clean pacing and a visual style that feels intentional.")
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "wrap mt-16 grid gap-3 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4",
				children: FOCUS.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 40,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "border-t-2 border-ink pt-3 font-display text-xl tracking-tight sm:text-2xl",
						children: t(item)
					})
				}, item))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "tiny mb-4",
					children: t("TOOLS")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-wrap gap-x-6 gap-y-2",
					children: TOOLS$1.map((tool) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "text-sm font-bold",
						children: tool
					}, tool))
				})]
			})
		]
	});
}
function Contact() {
	const { t } = useLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "paper flex min-h-[100svh] items-center px-0 py-20 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "tiny mb-6",
					children: t("AVAILABLE FOR FREELANCE / COLLABORATION")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mega",
					children: [
						t("LET'S MAKE"),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						t("SOMETHING"),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "not-italic text-red",
							children: t("WORTH WATCHING.")
						})
					]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 font-display text-xl tracking-tight",
					children: "Endrit Akinci"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: t("Video Editor / Content Creator")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 flex flex-wrap gap-3 border-t-2 border-ink pt-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `mailto:${LINKS.email}`,
							className: "tiny min-h-11 border-2 border-ink bg-ink px-4 py-3 text-paper",
							children: [t("EMAIL"), " ↗"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: LINKS.instagram,
							target: "_blank",
							rel: "noreferrer",
							className: "tiny min-h-11 border-2 border-ink px-4 py-3 hover:bg-ink hover:text-paper",
							children: [t("INSTAGRAM"), " ↗"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: LINKS.linkedin,
							target: "_blank",
							rel: "noreferrer",
							className: "tiny min-h-11 border-2 border-ink px-4 py-3 hover:bg-ink hover:text-paper",
							children: [t("LINKEDIN"), " ↗"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: LINKS.archive,
							target: "_blank",
							rel: "noreferrer",
							className: "tiny min-h-11 border-2 border-ink px-4 py-3 hover:bg-ink hover:text-paper",
							children: [t("FULL ARCHIVE"), " ↗"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-16 text-xs font-bold tracking-wide text-muted",
					children: ["© Endrit Akinci · ", t("Video Editor / Content Creator")]
				})
			]
		})
	});
}
function Craft() {
	const { t } = useLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "craft",
		className: "paper px-0 py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mb-12 flex flex-col justify-between gap-4 border-b-2 border-ink pb-4 sm:flex-row sm:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "tiny mb-3",
						children: t("03 / STILL WORK")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl tracking-tight",
						children: t("DESIGN / BRAND")
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-sm text-sm leading-body text-muted",
						children: t("Social posts, campaign concepts, marks and sport visuals.")
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5",
					children: DESIGNS.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 30,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: cn("group bg-cream p-2 shadow-[6px_8px_0_0_var(--color-ink)] transition-transform duration-medium", i % 2 === 0 ? "-rotate-1" : "rotate-1", "hover:rotate-0 hover:scale-[1.03]"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden bg-paper",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: item.src,
									alt: item.caption,
									className: "h-auto w-full object-contain transition-transform duration-slow group-hover:scale-[1.04]"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
								className: "tiny mt-2 px-1 py-1",
								children: t(item.caption)
							})]
						})
					}, item.src))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-20 grid grid-cols-1 border-y-2 border-ink sm:grid-cols-3",
					children: LOGOS.map((logo) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "relative grid h-56 place-items-center border-b border-ink sm:border-r sm:border-b-0 sm:last:border-r-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logo.src,
							alt: logo.name,
							className: "max-h-28 max-w-[58%] object-contain"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
							className: "tiny absolute bottom-4",
							children: logo.name
						})]
					}, logo.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4",
					children: SPORTS.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 40,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "bg-cream p-2 pb-10 shadow-[5px_6px_0_0_var(--color-ink)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.src,
								alt: item.name,
								className: "h-auto w-full object-contain"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
								className: "mt-3 px-1 font-display text-sm tracking-tight",
								children: item.name
							})]
						})
					}, item.name))
				})
			]
		})
	});
}
var playing = /* @__PURE__ */ new Set();
var MAX_PLAYING = 5;
function tryPlay(el) {
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
function stop(el) {
	el.pause();
	playing.delete(el);
}
function AutoVideo({ src, poster, className, title, preload = "none", eager = false, fit = "contain", frozen = false, sound = false }) {
	const ref = (0, import_react.useRef)(null);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
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
		const io = new IntersectionObserver(([entry]) => {
			if (!entry || frozen) return;
			if (entry.isIntersecting && entry.intersectionRatio >= .28) tryPlay(el);
			else stop(el);
		}, {
			threshold: [
				0,
				.28,
				.55
			],
			rootMargin: "80px 0px"
		});
		io.observe(el);
		return () => {
			el.removeEventListener("playing", onPlaying);
			io.disconnect();
			stop(el);
		};
	}, [
		src,
		eager,
		frozen,
		sound
	]);
	(0, import_react.useEffect)(() => {
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
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (frozen) stop(el);
		else tryPlay(el);
	}, [frozen]);
	const fitClass = fit === "cover" ? "object-cover" : "object-contain";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("absolute inset-0 bg-ink", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: poster,
			alt: "",
			"aria-hidden": true,
			className: cn("pointer-events-none absolute inset-0 h-full w-full transition-opacity duration-medium", fitClass, ready ? "opacity-0" : "opacity-100")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
			ref,
			className: cn("pointer-events-none absolute inset-0 h-full w-full", fitClass),
			poster,
			muted: !sound,
			loop: true,
			playsInline: true,
			preload: eager ? "metadata" : preload,
			autoPlay: eager && !frozen,
			disablePictureInPicture: true,
			controlsList: "nodownload noplaybackrate",
			"aria-label": title,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
				src,
				type: "video/mp4"
			})
		})]
	});
}
var ProjectCtx = (0, import_react.createContext)(null);
function ProjectProvider({ children }) {
	const [active, setActive] = (0, import_react.useState)(null);
	const value = (0, import_react.useMemo)(() => ({
		active,
		open: (project) => setActive(project),
		close: () => setActive(null),
		next: () => {
			setActive((cur) => {
				if (!cur) return cur;
				return PROJECTS[(PROJECTS.findIndex((p) => p.id === cur.id) + 1) % PROJECTS.length] ?? cur;
			});
		},
		prev: () => {
			setActive((cur) => {
				if (!cur) return cur;
				return PROJECTS[(PROJECTS.findIndex((p) => p.id === cur.id) - 1 + PROJECTS.length) % PROJECTS.length] ?? cur;
			});
		}
	}), [active]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCtx.Provider, {
		value,
		children
	});
}
function useProject() {
	const ctx = (0, import_react.useContext)(ProjectCtx);
	if (!ctx) return {
		active: null,
		open: () => {},
		close: () => {},
		next: () => {},
		prev: () => {}
	};
	return ctx;
}
function Hero() {
	const { t, setLang, chosen } = useLang();
	const { active } = useProject();
	const [pos, setPos] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		const onMove = (e) => {
			if (mq.matches) return;
			setPos({
				x: (e.clientX / window.innerWidth - .5) * 2,
				y: (e.clientY / window.innerHeight - .5) * 2
			});
		};
		window.addEventListener("mousemove", onMove);
		return () => window.removeEventListener("mousemove", onMove);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "paper relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-4 pt-20 pb-10 sm:px-8 sm:pt-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "tiny pointer-events-none absolute top-20 left-4 sm:top-24 sm:left-8",
				children: t("VIDEO EDITOR / CREATOR")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "tiny pointer-events-none absolute top-20 right-4 sm:top-24 sm:right-8",
				children: "2026"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hero-reel pointer-events-none absolute top-[22%] right-[3%] z-10 hidden h-[200px] w-[112px] lg:block lg:h-[240px] lg:w-[136px]",
				style: { transform: `rotate(8deg) translate3d(${pos.x * -12}px, ${pos.y * -8}px, 0)` },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative h-full w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoVideo, {
						src: videoSrc("duaa"),
						poster: posterSrc("duaa"),
						title: "Duaa showreel",
						eager: true,
						frozen: Boolean(active)
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hero-reel pointer-events-none absolute bottom-[14%] left-[3%] z-10 hidden h-[170px] w-[96px] lg:block lg:h-[210px] lg:w-[118px]",
				style: { transform: `rotate(-7deg) translate3d(${pos.x * 10}px, ${pos.y * 7}px, 0)` },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative h-full w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoVideo, {
						src: videoSrc("kawa-betoni"),
						poster: posterSrc("kawa-betoni"),
						title: "KAWA showreel",
						frozen: Boolean(active)
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-20 mx-auto w-full max-w-[1400px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "lockup",
						style: { transform: `translate3d(${pos.x * 10}px, ${pos.y * 7}px, 0)` },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PORTF" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "lockup-face",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/media/portrait.webp",
									alt: "",
									width: 900,
									height: 1350
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "lockup-name",
									children: "Endrit Akinci"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "LIO" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "PORTFOLIO — Endrit Akinci, Video Editor and Content Creator"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 flex justify-center sm:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hero-reel h-[200px] w-[112px] rotate-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative h-full w-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoVideo, {
									src: videoSrc("duaa"),
									poster: posterSrc("duaa"),
									title: "Duaa showreel",
									eager: true,
									frozen: Boolean(active)
								})
							})
						})
					})
				]
			}),
			!chosen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mt-20 text-center sm:mt-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "tiny mb-3",
					children: "CHOOSE YOUR LANGUAGE / ZGJIDH GJUHËN"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setLang("en"),
						className: "tiny border-2 border-ink bg-paper px-4 py-2.5 hover:bg-ink hover:text-paper",
						children: "ENGLISH"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setLang("sq"),
						className: "tiny border-2 border-ink bg-paper px-4 py-2.5 hover:bg-ink hover:text-paper",
						children: "SHQIP"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("relative z-10 mt-16 flex flex-col items-center gap-6 sm:mt-24"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-md text-center text-sm text-muted",
					children: t("Short-form content, social videos, commercials and cinematic edits.")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#work",
					className: "tiny inline-flex min-h-11 items-center gap-2 hover:text-red",
					children: [t("VIEW THE WORK"), " ↓"]
				})]
			})
		]
	});
}
function Marquee({ items }) {
	const { t } = useLang();
	const row = [...items, ...items];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "marquee",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "marquee-track",
			children: row.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
				t(item),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "✦" })
			] }, item + i))
		})
	});
}
function SiteNav() {
	const { t, lang, setLang, chosen } = useLang();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed top-0 right-0 left-0 z-40 transition-colors duration-fast", scrolled || open ? "bg-paper/92 backdrop-blur-sm" : "bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap flex h-14 items-center justify-between gap-4 sm:h-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "font-display text-sm tracking-tight sm:text-base",
					children: "ENDRIT AKINCI"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-7 md:flex",
					children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "tiny hover:text-red",
						children: t(item.label)
					}, item.href)), chosen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-1",
						children: ["en", "sq"].map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setLang(code),
							className: cn("tiny min-h-8 px-2", lang === code ? "text-red" : "text-muted"),
							children: code.toUpperCase()
						}, code))
					}) : null]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "tiny min-h-11 min-w-11 md:hidden",
					"aria-expanded": open,
					"aria-controls": "mobile-nav",
					onClick: () => setOpen((v) => !v),
					children: open ? t("CLOSE") : t("MENU")
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "mobile-nav",
			className: cn("overflow-hidden border-t border-ink/10 md:hidden", open ? "max-h-64" : "max-h-0"),
			style: { transition: "max-height 280ms cubic-bezier(0.22, 1, 0.36, 1)" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "wrap flex flex-col gap-1 py-3",
				children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.href,
					className: "tiny min-h-11 py-3",
					onClick: () => setOpen(false),
					children: t(item.label)
				}, item.href)), chosen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-3 py-2",
					children: ["en", "sq"].map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setLang(code),
						className: cn("tiny min-h-11 px-2", lang === code ? "text-red" : "text-muted"),
						children: code.toUpperCase()
					}, code))
				}) : null]
			})
		})]
	});
}
function Path() {
	const { t } = useLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "paper px-0 py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "tiny mb-4",
					children: t("EXPERIENCE")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mega mb-12 sm:mb-16",
					children: [
						t("WHERE"),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						t("THE CUT"),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						t("GOT SHARP.")
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: EXPERIENCE$1.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "grid gap-2 border-t-2 border-ink py-6 sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:py-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "tiny text-red sm:col-span-3",
						children: t(item.years)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sm:col-span-9",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl tracking-tight sm:text-3xl",
								children: item.place
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm font-bold",
								children: t(item.role)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-xl text-sm text-muted",
								children: t(item.copy)
							})
						]
					})]
				}, item.place)) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "tiny mt-16 mb-4",
					children: t("EDUCATION")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-0 border-t-2 border-ink sm:grid-cols-3",
					children: EDUCATION$1.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border-b border-ink py-6 sm:border-r sm:border-b-0 sm:px-5 sm:py-7 sm:last:border-r-0 sm:first:pl-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "tiny mb-4 text-red",
								children: item.years
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl tracking-tight",
								children: item.place
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm",
								children: t(item.role)
							})
						]
					}, item.place))
				})
			]
		})
	});
}
function ProjectStage() {
	const { t } = useLang();
	const { active, close, next, prev } = useProject();
	const [sound, setSound] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		if (!active) return;
		setSound(true);
		const prevOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		const onKey = (e) => {
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
	}, [
		active,
		close,
		next,
		prev
	]);
	if (!active) return null;
	const landscape = active.aspect === "16:9";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex items-stretch bg-stage text-paper",
		role: "dialog",
		"aria-modal": "true",
		"aria-labelledby": "stage-title",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "stage-enter grid h-full min-h-0 w-full grid-rows-[minmax(240px,54svh)_minmax(0,1fr)] lg:grid-cols-12 lg:grid-rows-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("relative min-h-0 bg-ink p-3 sm:p-6", landscape ? "lg:col-span-8" : "lg:col-span-7"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto h-full w-full max-w-[460px] lg:max-w-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoVideo, {
						src: videoSrc(active.id),
						poster: posterSrc(active.id),
						title: active.title,
						eager: true,
						sound
					}, active.id)
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "flex min-h-0 flex-col overflow-y-auto border-t border-paper/15 p-5 sm:p-8 lg:col-span-5 lg:border-t-0 lg:border-l lg:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "tiny text-red",
						children: [
							active.number,
							" / ",
							t(active.category)
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "stage-title",
						className: "mt-4 font-display text-3xl tracking-tight sm:text-4xl",
						children: active.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-paper/70",
						children: active.client
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-8 grid gap-5 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "tiny text-paper/50",
								children: t("ROLE")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 font-bold",
								children: t(active.role)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "tiny text-paper/50",
								children: t("WHAT I DID")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 max-w-sm leading-body",
								children: t(active.work)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "tiny text-paper/50",
								children: t("TOOLS")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1",
								children: active.tools
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setSound((s) => !s),
							className: cn("tiny inline-flex min-h-11 items-center gap-2 border px-4", sound ? "border-red bg-red text-paper" : "border-paper text-paper"),
							children: [sound ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { size: 16 }), sound ? t("SOUND ON") : t("SOUND OFF")]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: LINKS.archive,
							target: "_blank",
							rel: "noreferrer",
							className: "tiny inline-flex min-h-11 items-center border border-paper/40 px-4",
							children: [t("FULL ARCHIVE"), " ↗"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-auto flex items-center justify-between gap-3 pt-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: prev,
							className: "tiny inline-flex min-h-11 items-center gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 16 }),
								" ",
								t("PREV")
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: next,
							className: "tiny inline-flex min-h-11 items-center gap-1",
							children: [
								t("NEXT"),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 16 })
							]
						})]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: close,
			className: "tiny absolute top-3 right-3 z-10 inline-flex min-h-11 min-w-11 items-center justify-center bg-stage text-paper sm:top-5 sm:right-5",
			"aria-label": t("CLOSE"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 20 })
		})]
	});
}
function FilmCard({ project }) {
	const { t } = useLang();
	const { open, active } = useProject();
	const [on, setOn] = (0, import_react.useState)(false);
	const landscape = project.aspect === "16:9";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: cn("film-card", `card-${project.size}`, project.shift && "card-shift", on && "is-on"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "block w-full text-left",
			onMouseEnter: () => setOn(true),
			onMouseLeave: () => setOn(false),
			onFocus: () => setOn(true),
			onBlur: () => setOn(false),
			onClick: () => open(project),
			"aria-label": `${project.title}. ${project.role}. ${t("Open project")}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden border-2 border-ink bg-ink",
				style: { aspectRatio: landscape ? "16 / 9" : "9 / 16" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoVideo, {
					src: videoSrc(project.id),
					poster: posterSrc(project.id),
					title: project.title,
					frozen: Boolean(active)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "film-meta pointer-events-none absolute inset-x-0 bottom-0 hidden bg-gradient-to-t from-ink via-ink/85 to-transparent p-4 pt-20 text-paper md:block",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "tiny text-red",
							children: project.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 font-display text-2xl tracking-tight",
							children: project.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs font-bold tracking-wide",
							children: t(project.role)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-[28ch] text-[12px] leading-snug text-paper/80",
							children: t(project.work)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "tiny mt-3 text-paper/70",
							children: t("Click for sound")
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2.5 flex items-start justify-between gap-3 border-t border-ink pt-2 md:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-base tracking-tight",
					children: project.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tiny max-w-[48%] text-right text-muted",
					children: t(project.category)
				})]
			})]
		})
	});
}
function WorkBlock({ id, kicker, title, copy, projects }) {
	const { t } = useLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: "paper px-0 py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mb-12 flex flex-col justify-between gap-4 border-b-2 border-ink pb-4 sm:flex-row sm:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "tiny mb-3",
					children: t(kicker)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl tracking-tight",
					children: t(title)
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-sm text-sm leading-body text-muted",
					children: t(copy)
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "work-grid",
				children: projects.map((project, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: Math.min(i * 35, 180),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilmCard, { project })
				}, project.id))
			})]
		})
	});
}
function EditWork() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkBlock, {
		id: "work",
		kicker: "01 / SELECTED WORK",
		title: "VIDEO EDITING",
		copy: "Hover a cut to read what I did. Click to open it with sound.",
		projects: EDIT_PROJECTS
	});
}
function AiWork() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkBlock, {
		id: "ai",
		kicker: "02 / AI WORK",
		title: "AI VIDEO",
		copy: "Architectural and property films — generated, directed and edited as finished pieces.",
		projects: AI_PROJECTS
	});
}
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ProjectProvider, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#work",
			className: "sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-paper",
			children: "Skip to work"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, { items: [
				"VIDEO EDITING",
				"SHORT-FORM",
				"AI VIDEO",
				"SOCIAL",
				"BRAND"
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditWork, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AiWork, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, { items: [
				"PREMIERE PRO",
				"AFTER EFFECTS",
				"CAPCUT",
				"DAVINCI",
				"AI TOOLS"
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Craft, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectStage, {})
	] }) });
}
var SplitComponent = HomePage;
//#endregion
export { SplitComponent as component };
