#!/usr/bin/env python3
"""OG 1200x630 + X banner 1200x264 — exact type, paper identity, face as O."""

from __future__ import annotations

import math
from pathlib import Path

import numpy as np
from PIL import Image, ImageChops, ImageDraw, ImageEnhance, ImageFilter, ImageFont

ROOT = Path("/workspace")
PAPER_OG = ROOT / "artifacts/imagine_images/57a54e64-1340-44f1-9fe1-fc8db969c076.jpg"
PAPER_BANNER = ROOT / "artifacts/imagine_images/ad723cb6-79ac-47b6-abcb-95c1fd5467b5.jpg"
PORTRAIT = ROOT / "public/media/portrait.webp"
FONT_BLACK = ROOT / ".grok/fonts/ArchivoBlack-Regular.ttf"
FONT_BODY = ROOT / ".grok/fonts/Archivo-Regular.ttf"
OUT_OG = ROOT / ".grok/og-raw.png"
OUT_BANNER = ROOT / ".grok/x-banner-raw.png"

INK = (21, 21, 21)
RED = (255, 42, 25)
PAPER_RGB = np.array([243, 242, 238], dtype=np.float32)


def cover_crop(im: Image.Image, w: int, h: int) -> Image.Image:
    scale = max(w / im.width, h / im.height)
    nw, nh = int(round(im.width * scale)), int(round(im.height * scale))
    im = im.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - w) // 2
    top = (nh - h) // 2
    return im.crop((left, top, left + w, top + h))


def grade_paper(im: Image.Image, w: int, h: int) -> Image.Image:
    base = cover_crop(im.convert("RGB"), w, h)
    tex = np.array(base, dtype=np.float32)
    lum = tex @ np.array([0.299, 0.587, 0.114], dtype=np.float32)
    lum_n = (lum - lum.mean()) / (lum.std() + 1e-6)
    out = np.clip(PAPER_RGB + lum_n[..., None] * 6.5, 0, 255).astype(np.uint8)
    graded = Image.fromarray(out, "RGB")
    return Image.blend(graded, base, 0.08)


def grain(im: Image.Image, seed: int) -> Image.Image:
    rng = np.random.default_rng(seed)
    arr = np.array(im, dtype=np.int16)
    h, w = arr.shape[:2]
    arr = np.clip(arr + rng.integers(-5, 6, (h, w, 1), dtype=np.int16), 0, 255).astype(np.uint8)
    return Image.fromarray(arr, "RGB")


def face_letter(h: int) -> Image.Image:
    src = Image.open(PORTRAIT).convert("RGB")
    w0, h0 = src.size
    # Head-and-shoulders crop of the studio portrait
    box = (int(w0 * 0.18), int(h0 * 0.04), int(w0 * 0.82), int(h0 * 0.78))
    crop = src.crop(box)
    fw = max(1, int(round(h * 0.72)))
    face = crop.resize((fw, h), Image.Resampling.LANCZOS)
    face = ImageEnhance.Contrast(face).enhance(1.12)
    face = ImageEnhance.Color(face).enhance(0.92)
    return face


def paste_multiply(dst: Image.Image, src: Image.Image, xy: tuple[int, int]) -> None:
    x, y = xy
    region = dst.crop((x, y, x + src.width, y + src.height))
    blended = ImageChops.multiply(region, src)
    dst.paste(blended, (x, y))


def draw_lockup(
    img: Image.Image,
    draw: ImageDraw.ImageDraw,
    font: ImageFont.FreeTypeFont,
    cx: float,
    cy: float,
    face_h: int,
) -> tuple[float, float, float, float]:
    """PORTF + face + LIO centered at (cx, cy). Returns bbox."""
    face = face_letter(face_h)
    gap = max(2, int(face_h * 0.02))
    left = "PORTF"
    right = "LIO"
    lw = font.getlength(left)
    rw = font.getlength(right)
    total = lw + gap + face.width + gap + rw
    x = cx - total / 2
    # Optical vertical: type sits on the face midline
    bbox = font.getbbox("PORTF")
    th = bbox[3] - bbox[1]
    ty = cy - th / 2 - bbox[1]
    draw.text((x, ty), left, font=font, fill=INK)
    fx = int(round(x + lw + gap))
    fy = int(round(cy - face.height / 2))
    paste_multiply(img, face, (fx, fy))
    rx = x + lw + gap + face.width + gap
    draw.text((rx, ty), right, font=font, fill=INK)
    return x, min(ty, fy), x + total, max(ty + th, fy + face.height)


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


def tracked(draw, text, font, fill, x, y, extra=1.6, anchor="lt"):
    if anchor == "mm":
        w = sum(font.getlength(ch) for ch in text) + extra * max(len(text) - 1, 0)
        x = x - w / 2
        y = y
        anchor = "lt"
        # vertical center via font bbox
        bb = font.getbbox("H")
        y = y - (bb[3] - bb[1]) / 2 - bb[1]
    for ch in text:
        draw.text((x, y), ch, font=font, fill=fill)
        x += font.getlength(ch) + extra


def compose_og() -> Image.Image:
    w, h = 1200, 630
    img = grain(grade_paper(Image.open(PAPER_OG), w, h), 2026)
    overlay = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)

    m = 36
    d.rectangle((m, m, w - m - 1, h - m - 1), outline=INK + (230,), width=2)
    d.rectangle((m + 7, m + 7, w - m - 8, h - m - 8), outline=INK + (130,), width=1)
    d.rectangle((m + 18, m + 18, m + 32, m + 32), fill=RED + (255,))

    kicker = ImageFont.truetype(str(FONT_BODY), 15)
    d.text((72, m + 20), "VIDEO EDITOR  /  CREATOR", font=kicker, fill=INK + (255,))
    y2026 = "2026"
    tw = kicker.getlength(y2026)
    d.text((w - m - 20 - tw, m + 20), y2026, font=kicker, fill=INK + (255,))

    img = Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")
    d2 = ImageDraw.Draw(img)

    title_font = ImageFont.truetype(str(FONT_BLACK), 152)
    name_font = ImageFont.truetype(str(FONT_BLACK), 44)
    foot_font = ImageFont.truetype(str(FONT_BODY), 14)

    lockup_cy = 292
    draw_lockup(img, d2, title_font, w / 2, lockup_cy, face_h=168)

    # ornaments
    orn_y = 412
    d2.line((210, orn_y, 470, orn_y), fill=INK, width=1)
    d2.line((730, orn_y, 990, orn_y), fill=INK, width=1)
    star4(d2, 520, orn_y, 8, RED)
    diamond(d2, 600, orn_y, 10, RED)
    star4(d2, 680, orn_y, 8, RED)

    name = "ENDRIT AKINCI"
    extra = 6
    nw = sum(name_font.getlength(ch) for ch in name) + extra * (len(name) - 1)
    nx = (w - nw) / 2
    ny = 448
    for ch in name:
        d2.text((nx, ny), ch, font=name_font, fill=INK)
        nx += name_font.getlength(ch) + extra

    foot = "VIDEO EDITING   ·   AI VIDEO   ·   SOCIAL   ·   BRAND"
    fw = foot_font.getlength(foot)
    d2.text(((w - fw) / 2, h - m - 32), foot, font=foot_font, fill=INK)

    img = ImageEnhance.Contrast(img).enhance(1.03)
    img = img.filter(ImageFilter.UnsharpMask(radius=0.55, percent=35, threshold=2))
    return img


def compose_banner() -> Image.Image:
    w, h = 1200, 264
    img = grain(grade_paper(Image.open(PAPER_BANNER), w, h), 77)
    d = ImageDraw.Draw(img)

    # Safe zone: left 50% × top 80%  →  x<600, y<211. Keep lockup above midline (132).
    d.rectangle((28, 22, 40, 34), fill=RED)

    title_font = ImageFont.truetype(str(FONT_BLACK), 72)
    name_font = ImageFont.truetype(str(FONT_BLACK), 22)
    label_font = ImageFont.truetype(str(FONT_BODY), 13)

    # Lockup left-aligned in the left half, sitting above the midline
    face = face_letter(78)
    gap = 3
    left, right = "PORTF", "LIO"
    x = 36
    y_type = 46
    d.text((x, y_type), left, font=title_font, fill=INK)
    fx = int(x + title_font.getlength(left) + gap)
    fy = 38
    paste_multiply(img, face, (fx, fy))
    rx = fx + face.width + gap
    d.text((rx, y_type), right, font=title_font, fill=INK)

    name = "ENDRIT AKINCI"
    extra = 3.2
    nx = 36
    ny = 132
    for ch in name:
        d.text((nx, ny), ch, font=name_font, fill=INK)
        nx += name_font.getlength(ch) + extra

    d.text((36, 168), "VIDEO EDITOR  /  CONTENT CREATOR", font=label_font, fill=INK)

    img = ImageEnhance.Contrast(img).enhance(1.03)
    return img


def main() -> None:
    og = compose_og()
    og.save(OUT_OG, "PNG")
    print("og-raw", og.size)
    ban = compose_banner()
    ban.save(OUT_BANNER, "PNG")
    print("banner-raw", ban.size)


if __name__ == "__main__":
    main()
