"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./TestimonialsSection.module.css";

/* ── Unique data per row ─────────────────────────────── */
const ROW1_DATA = [
  {
    name: "Yuki Tanaka",
    username: "@yukitanaka",
    role: "CEO, Nexus Corp",
    avatar: "/Tesimonial Icons/av1.webp",
    stars: 5,
    quote:
      "RYJIN completely transformed our brand. Results were visible within the first Month. Absolutely cinematic.",
  },
  {
    name: "Marcus Webb",
    username: "@marcuswebb",
    role: "Founder, Aero Labs",
    avatar: "/Tesimonial Icons/av2.webp",
    stars: 5,
    quote:
      "The automation systems saved us 40+ hours a week. No agency in the world comes close to this level of precision.",
  },
  {
    name: "Sophie Larsen",
    username: "@sophielarsen",
    role: "CMO, Drift Studio",
    avatar: "/Tesimonial Icons/av3.webp",
    stars: 5,
    quote:
      "Our conversion rate tripled in a month. Clients genuinely thought we hired a Hollywood design team.",
  },
  {
    name: "Arjun Mehta",
    username: "@arjunmehta_",
    role: "CTO, Nova Systems",
    avatar: "/Tesimonial Icons/av4.webp",
    stars: 5,
    quote:
      "Every pixel is intentional. Every interaction feels premium. RYJIN runs silently and performs loudly.",
  },
];

const ROW2_DATA = [
  {
    name: "Diego Ramirez",
    username: "@diegodesigns",
    role: "Creative Director, Onyx Media",
    avatar: "/Tesimonial Icons/av5.webp",
    stars: 5,
    quote:
      "I've worked with top agencies in New York and London. RYJIN outclasses all of them without breaking a sweat.",
  },
  {
    name: "Layla Hassan",
    username: "@laylahassan",
    role: "VP Growth, Solace AI",
    avatar: "/Tesimonial Icons/av6.webp",
    stars: 5,
    quote:
      "The hero section alone closed three enterprise deals. The ROI on this investment was immediate and massive.",
  },
  {
    name: "Ken Watanabe",
    username: "@kenwatanabe",
    role: "Founder, Arc Collective",
    avatar: "/Tesimonial Icons/av7.webp",
    stars: 5,
    quote:
      "Pure craft, pure performance. No compromises. This is the standard everything else should be measured by.",
  },
  {
    name: "Priya Nair",
    username: "@priyanair",
    role: "Head of Brand, Lumina",
    avatar: "/Tesimonial Icons/av1.webp",
    stars: 5,
    quote:
      "Working with RYJIN felt like the future arrived early. From zero to iconic brand in under two weeks.",
  },
];

const ROW3_DATA = [
  {
    name: "James Okafor",
    username: "@jamesokafor",
    role: "Partner, Vertex Agency",
    avatar: "/Tesimonial Icons/av2.webp",
    stars: 5,
    quote:
      "We saw measurable results in 2 Months. Unmatched speed and quality. The best investment we made this year.",
  },
  {
    name: "Elena Petrova",
    username: "@elenapetrova",
    role: "Creative Lead, Phantom Works",
    avatar: "/Tesimonial Icons/av3.webp",
    stars: 5,
    quote:
      "RYJIN's systems don't just look good — they convert. Our bounce rate dropped 60% after the redesign.",
  },
  {
    name: "Ravi Shankar",
    username: "@ravishankar",
    role: "CEO, Apex Digital",
    avatar: "/Tesimonial Icons/av4.webp",
    stars: 5,
    quote:
      "I handed them our brief on Monday. By Friday we had a full brand system that felt like it had existed for years.",
  },
  {
    name: "Mei Lin",
    username: "@meilin_brand",
    role: "Brand Strategist, Crest Co.",
    avatar: "/Tesimonial Icons/av5.webp",
    stars: 5,
    quote:
      "The attention to detail is staggering. From micro-animations to copy — everything is dialled in perfectly.",
  },
];

/* ── Stars ───────────────────────────────────────────── */
function Stars({ count }: { count: number }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="var(--accent)">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

/* ── Card ────────────────────────────────────────────── */
interface T {
  name: string;
  username: string;
  role: string;
  avatar: string;
  stars: number;
  quote: string;
}

function Card({ t }: { t: T }) {
  return (
    <div className={styles.card}>
      <div className={styles.glassHighlight} />

      <div className={styles.avatarWrap}>
        <Image src={t.avatar} alt={t.name} fill className={styles.avatarImg} sizes="88px" />
      </div>

      <div className={styles.identity}>
        <div className={styles.nameRow}>
          <span className={styles.name}>{t.name}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--accent)" className={styles.verified}>
            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <span className={styles.username}>{t.username}</span>
        <span className={styles.role}>{t.role}</span>
      </div>

      <Stars count={t.stars} />

      <p className={styles.quote}>{t.quote}</p>
    </div>
  );
}

/* ── Infinite looping marquee row ────────────────────── */
function MarqueeRow({ cards, direction }: { cards: T[]; direction: "left" | "right" }) {
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

    // All rows start shifted left by one full set — always cards behind left edge
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

      offsetRef.current += delta * 0.45 * factor;

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

    // ── Re-measure when images / fonts change layout ─────
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

  // Triple the cards so there's always content visible on both sides during loop
  const tripled = [...cards, ...cards, ...cards];

  return (
    <div className={styles.rowWrapper}>
      <div ref={trackRef} className={styles.track}>
        {tripled.map((t, i) => (
          <Card key={i} t={t} />
        ))}
      </div>
    </div>
  );
}

/* ── Section ─────────────────────────────────────────── */
export default function TestimonialsSection() {
  return (
    <section id="testimonials-section" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>WHAT THEY SAY</span>
        <h2 className={styles.title}>
          Trusted by <span className={styles.accent}>visionaries</span>.
        </h2>
      </div>

      <div className={styles.rows}>
        <MarqueeRow cards={ROW1_DATA} direction="right" />
        <MarqueeRow cards={ROW2_DATA} direction="left" />
        <MarqueeRow cards={ROW3_DATA} direction="right" />
      </div>
    </section>
  );
}
