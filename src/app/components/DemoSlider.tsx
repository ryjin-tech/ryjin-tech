"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./DemoSlider.module.css";

/* ── Design data ─────────────────────────────────────── */
const DESIGNS = [
  { file: "BEAURO.png",         label: "BEAURO",        tag: "Beauty & Cosmetics" },
  { file: "Coffee.png",         label: "COCOBEN",       tag: "Premium Coffee" },
  { file: "Hotel BOBO.png",     label: "Hotel BOBO",    tag: "Luxury Hospitality" },
  { file: "Hotel BOBO 2.0.png", label: "Hotel BOBO 2",  tag: "Brand Refresh" },
  { file: "Resturent.png",      label: "Restaurant",    tag: "Food & Dining" },
  { file: "gym.png",            label: "GYM PRO",       tag: "Fitness & Wellness" },
  { file: "gym 2.png",          label: "GYM PRO 2",     tag: "Brand Extension" },
  { file: "Laika.png",          label: "LAIKA",         tag: "Lifestyle Brand" },
  { file: "Cocun.png",          label: "COCUN",         tag: "Product Design" },
  { file: "Chotolate.png",      label: "CHOCOLAT",      tag: "Artisan Confectionery" },
  { file: "farmicy.png",        label: "FARMICY",       tag: "Health & Pharma" },
  { file: "Beauty 2.jpeg",      label: "BEAUTY",        tag: "Skincare" },
  { file: "Wool.png",           label: "WOOL",          tag: "Fashion & Apparel" },
];

/* ── Single card ─────────────────────────────────────── */
function DesignCard({ d }: { d: (typeof DESIGNS)[0] }) {
  return (
    <div className={styles.card}>
      <div className={styles.imgWrap}>
        <Image
          src={`/Demo designs/${d.file}`}
          alt={d.label}
          fill
          className={styles.img}
          sizes="(max-width: 640px) 240px, 380px"
        />
        {/* Hover overlay */}
        <div className={styles.overlay}>
          <span className={styles.overlayTag}>{d.tag}</span>
          <span className={styles.overlayLabel}>{d.label}</span>
          <div className={styles.overlayBtn}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            View Design
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Infinite marquee row ────────────────────────────── */
function MarqueeRow({
  items,
  direction,
}: {
  items: (typeof DESIGNS)[0][];
  direction: "left" | "right";
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const singleWidthRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // ── Measure ──────────────────────────────────────────
    const measure = () => {
      if (track.scrollWidth > 0) {
        singleWidthRef.current = track.scrollWidth / 3;
      }
    };
    measure();

    // Start all rows shifted left by one set width
    offsetRef.current = -singleWidthRef.current;
    track.style.transform = `translateX(${offsetRef.current}px)`;

    // ── Scroll tracking ──────────────────────────────────
    let lastScrollY = window.scrollY;
    const factor = direction === "right" ? 1 : -1;
    let rafId = 0;
    let dirty = false;

    const onScroll = () => {
      const delta = window.scrollY - lastScrollY;
      lastScrollY = window.scrollY;

      offsetRef.current += delta * 0.5 * factor;

      const sw = singleWidthRef.current;
      if (sw > 0) {
        // Clean modulo — always keeps offset in [-sw, 0)
        offsetRef.current = ((offsetRef.current % sw) + sw) % sw - sw;
      }

      if (!dirty) {
        dirty = true;
        rafId = requestAnimationFrame(() => {
          track.style.transform = `translateX(${offsetRef.current}px)`;
          dirty = false;
        });
      }
    };

    // ── Re-measure when images finish loading ────────────
    const ro = new ResizeObserver(() => {
      measure();
    });
    ro.observe(track);

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, [direction]);

  const tripled = [...items, ...items, ...items];

  return (
    <div className={styles.rowWrapper}>
      <div ref={trackRef} className={styles.track}>
        {tripled.map((d, i) => (
          <DesignCard key={i} d={d} />
        ))}
      </div>
    </div>
  );
}

/* ── Section ─────────────────────────────────────────── */
// Split the 13 designs into 2 rows — odd/even so each row has different images
const ROW_A = DESIGNS.filter((_, i) => i % 2 === 0);   // 7 items
const ROW_B = DESIGNS.filter((_, i) => i % 2 === 1);   // 6 items

export default function DemoSlider() {
  return (
    <section id="demo-section" className={styles.section}>
      {/* Ambient glow */}
      <div className={styles.glow} />

      {/* Header */}
      <div className={styles.header}>
        <span className={styles.eyebrow}>OUR WORK</span>
        <h2 className={styles.title}>
          Designs that <span className={styles.accent}>speak</span> for themselves.
        </h2>
        <p className={styles.subtitle}>
          From bold brand identities to pixel-perfect product pages — crafted to convert.
        </p>
      </div>

      {/* Two scroll-driven rows */}
      <div className={styles.rows}>
        <MarqueeRow items={ROW_A} direction="right" />
        <MarqueeRow items={ROW_B} direction="left" />
      </div>
    </section>
  );
}
