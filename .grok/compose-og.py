#!/usr/bin/env python3
"""Editorial paper poster for Endrit Akinci — exact type, exact palette."""

from __future__ import annotations

import math
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageEnhance, ImageFont, ImageFilter

ROOT = Path("/workspace")
PAPER_SRC = ROOT / "artifacts/imagine_images/15da6b0f-1584-4947-90d0-3fc76581569d.jpg"
FONT_BLACK = ROOT / ".grok/fonts/ArchivoBlack-Regular.ttf"
FONT_BODY = ROOT / ".grok/fonts/Archivo-Regular.ttf"
OUT_PNG = ROOT / ".grok/og-raw.png"

W, H = 1200, 630
PAPER = np.array([243, 242, 238], dtype=np.float32)  # #f3f2ee
INK = (21, 21, 21)  # #151515
RED = (255, 42, 25)  # #ff2a19
RULE = (211, 208, 199)  # #d3d0c7


def cover_crop(im: Image.Image, w: int, h: int) -> Image.Image:
    scale = max(w / im.width, h / im.height)
    nw, nh = int(round(im.width * scale)), int(round(im.height * scale))
    im = im.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - w) // 2
    top = (nh - h) // 2
    return im.crop((left, top, left + w, top + h))


def grade_to_paper(im: Image.Image) -> Image.Image:
    tex = np.array(im.convert("RGB"), dtype=np.float32)
    lum = tex @ np.array([0.299, 0.587, 0.114], dtype=np.float32)
    lum_n = (lum - lum.mean()) / (lum.std() + 1e-6)
    out = np.clip(PAPER + lum_n[..., None] * 7.0, 0, 255).astype(np.uint8)
    graded = Image.fromarray(out, "RGB")
    # Keep a whisper of the original warmth
    return Image.blend(graded, im.convert("RGB").resize(graded.size, Image.Resampling.LANCZOS), 0.06)


def tracked_width(font: ImageFont.FreeTypeFont, text: str, extra: float) -> float:
    if not text:
        return 0.0
    return sum(font.getlength(ch) for ch in text) + extra * max(len(text) - 1, 0)


def draw_tracked(
    draw: ImageDraw.ImageDraw,
    text: str,
    font: ImageFont.FreeTypeFont,
    fill: tuple[int, int, int],
    cx: float,
    cy: float,
    extra: float = 0.0,
) -> float:
    total = tracked_width(font, text, extra)
    x = cx - total / 2
    for ch in text:
        draw.text((x, cy), ch, font=font, fill=fill, anchor="lm")
        x += font.getlength(ch) + extra
    return total


def fit_line(
    text: str,
    path: Path,
    target: float,
    start: int,
    extra: float,
    min_size: int = 28,
) -> tuple[ImageFont.FreeTypeFont, int, float, float]:
    size = start
    font = ImageFont.truetype(str(path), size)
    width = tracked_width(font, text, extra)
    while width > target and size > min_size:
        size -= 1
        font = ImageFont.truetype(str(path), size)
        width = tracked_width(font, text, extra)
    return font, size, width, extra


def match_width(
    text: str,
    path: Path,
    target: float,
    start: int,
    extra: float,
) -> tuple[ImageFont.FreeTypeFont, int, float, float]:
    """Grow/shrink so the line sits on the same measure as the title."""
    size = start
    font = ImageFont.truetype(str(path), size)
    width = tracked_width(font, text, extra)
    if width < target:
        while size < start + 80:
            nxt = ImageFont.truetype(str(path), size + 1)
            nxt_w = tracked_width(nxt, text, extra)
            if nxt_w > target:
                break
            font, size, width = nxt, size + 1, nxt_w
    else:
        font, size, width, extra = fit_line(text, path, target, size, extra, 24)
    # Fine-tune tracking to land on the same width
    if len(text) > 1:
        extra += (target - width) / (len(text) - 1)
        width = tracked_width(font, text, extra)
    return font, size, width, extra


def star4(draw: ImageDraw.ImageDraw, cx: float, cy: float, r: float, fill) -> None:
    pts = []
    for i in range(8):
        ang = math.radians(-90 + i * 45)
        rad = r if i % 2 == 0 else r * 0.36
        pts.append((cx + rad * math.cos(ang), cy + rad * math.sin(ang)))
    draw.polygon(pts, fill=fill)


def diamond(draw: ImageDraw.ImageDraw, cx: float, cy: float, r: float, fill) -> None:
    draw.polygon(
        [(cx, cy - r), (cx + r * 0.78, cy), (cx, cy + r), (cx - r * 0.78, cy)],
        fill=fill,
    )


def quatrefoil(draw: ImageDraw.ImageDraw, cx: float, cy: float, r: float, fill) -> None:
    petal = r * 0.48
    for dx, dy in ((0, -r * 0.42), (0, r * 0.42), (-r * 0.42, 0), (r * 0.42, 0)):
        draw.ellipse(
            (cx + dx - petal, cy + dy - petal, cx + dx + petal, cy + dy + petal),
            fill=fill,
        )
    draw.ellipse((cx - r * 0.28, cy - r * 0.28, cx + r * 0.28, cy + r * 0.28), fill=fill)


def main() -> None:
    paper = cover_crop(Image.open(PAPER_SRC), W, H)
    base = grade_to_paper(paper)
    rng = np.random.default_rng(2026)
    arr = np.array(base, dtype=np.int16)
    grain = rng.integers(-6, 7, (H, W, 1), dtype=np.int16)
    arr = np.clip(arr + grain, 0, 255).astype(np.uint8)
    img = Image.fromarray(arr, "RGB")

    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)

    # Double hairline frame
    m = 34
    d.rectangle((m, m, W - m - 1, H - m - 1), outline=INK + (230,), width=2)
    d.rectangle((m + 7, m + 7, W - m - 8, H - m - 8), outline=INK + (140,), width=1)

    # Tiny red folio mark — the only painted accent besides the ornaments
    d.rectangle((m + 18, m + 18, m + 30, m + 30), fill=RED + (255,))

    cx = W / 2
    black = str(FONT_BLACK)
    body = str(FONT_BODY)

    title_extra = -10
    title_font, title_size, title_w, title_extra = fit_line(
        "PORTFOLIO", black, 780, 168, title_extra, 96
    )
    name_font, name_size, name_w, name_extra = match_width(
        "ENDRIT AKINCI", black, title_w, 62, 4
    )
    label_font = ImageFont.truetype(body, 15)
    foot_font = ImageFont.truetype(body, 14)

    # Optical center: lockup sits a hair above geometric middle
    title_cy = 268
    orn_cy = 342
    name_cy = 400

    draw_tracked(d, "PORTFOLIO", title_font, INK + (255,), cx, title_cy, title_extra)
    draw_tracked(d, "ENDRIT AKINCI", name_font, INK + (255,), cx, name_cy, name_extra)

    # Red ornaments on a thin ink hairline
    rule_y = orn_cy
    gap = 86
    d.line((cx - title_w / 2, rule_y, cx - 28, rule_y), fill=INK + (180,), width=1)
    d.line((cx + 28, rule_y, cx + title_w / 2, rule_y), fill=INK + (180,), width=1)
    star4(d, cx - gap, rule_y, 9, RED + (255,))
    diamond(d, cx, rule_y, 11, RED + (255,))
    quatrefoil(d, cx + gap, rule_y, 10, RED + (255,))

    # Metalines
    draw_tracked(
        d,
        "VIDEO EDITOR  /  CREATOR",
        label_font,
        INK + (220,),
        280,
        m + 28,
        2.2,
    )
    draw_tracked(d, "2026", label_font, INK + (220,), W - 160, m + 28, 3.4)
    draw_tracked(
        d,
        "VIDEO EDITING   ·   AI VIDEO   ·   SOCIAL DESIGN   ·   BRAND WORK",
        foot_font,
        INK + (210,),
        cx,
        H - m - 28,
        1.8,
    )

    composed = Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")
    composed = ImageEnhance.Contrast(composed).enhance(1.04)
    composed = composed.filter(ImageFilter.UnsharpMask(radius=0.6, percent=40, threshold=2))
    composed.save(OUT_PNG, "PNG")
    print(
        f"wrote {OUT_PNG} {composed.size} title={title_size}px/{title_w:.0f} "
        f"name={name_size}px/{name_w:.0f} extra_t={title_extra:.1f} extra_n={name_extra:.1f}"
    )


if __name__ == "__main__":
    main()
