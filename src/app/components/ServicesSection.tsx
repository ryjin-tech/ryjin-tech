"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./ServicesSection.module.css";

/* ── Data ────────────────────────────────────────────── */
const SERVICES = [
  {
    num: "01",
    title: "Digital Brand Systems",
    description:
      "Complete brand ecosystems engineered to position your business as the premium choice in your market. We don't make logos — we build identities.",
    subs: ["Brand Identity Design", "Logo & Visual System", "Brand Positioning"],
  },
  {
    num: "02",
    title: "Web & App Engineering",
    description:
      "High-converting websites, scalable web apps, and precision landing page systems built for performance, speed, and growth.",
    subs: [
      "Website Development",
      "App Development",
      "Landing Page Systems",
      "UI / UX Design",
      "Website SEO",
    ],
  },
  {
    num: "03",
    title: "Performance Marketing",
    description:
      "Data-driven marketing campaigns that attract the right audience, optimise spend, and convert at scale — every rupee accountable.",
    subs: ["Social Media Handling", "Paid Ads (Meta / Google)", "Funnel Optimisation"],
  },
  {
    num: "04",
    title: "Content & Visual Design",
    description:
      "Visually arresting content engineered to stop the scroll, communicate instantly, and reinforce your brand at every touchpoint.",
    subs: ["Graphic Design", "Social Media Creatives", "Thumbnails / Ads Design"],
  },
  {
    num: "05",
    title: "Growth Strategy & Analysis",
    description:
      "Strategic frameworks and market intelligence that identify opportunities, decode competitors, and map the fastest path to scale.",
    subs: [
      "Marketing Strategy",
      "Market Research & Analysis",
      "Competitor Analysis",
      "Business Growth Planning",
    ],
  },
];

/* ── Service accordion item ──────────────────────────── */
function ServiceItem({
  s,
  index,
  open,
  isRevealed,
  onToggle,
}: {
  s: (typeof SERVICES)[0];
  index: number;
  open: boolean;
  isRevealed: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`${styles.item} ${open ? styles.itemOpen : ""} reveal ${isRevealed ? styles.revealed : ""}`}
      onClick={onToggle}
      style={{ '--delay': `${index * 80}ms` } as React.CSSProperties}
    >
      <div className={styles.itemHeader}>
        {/* Number */}
        <span className={styles.num}>{s.num}</span>

        {/* Title + description */}
        <div className={styles.itemBody}>
          <h3 className={styles.itemTitle}>{s.title}</h3>
          <p className={styles.itemDesc}>{s.description}</p>
        </div>

        {/* Toggle + know more */}
        <div className={styles.itemRight}>
          <span className={styles.knowMore}>
            {open ? "Close" : "Know More"}
          </span>
          <div className={styles.toggle}>
            <span className={`${styles.toggleBar} ${styles.toggleH}`} />
            <span
              className={`${styles.toggleBar} ${styles.toggleV} ${open ? styles.toggleVOpen : ""}`}
            />
          </div>
        </div>
      </div>

      {/* Sub-services */}
      <div className={`${styles.subs} ${open ? styles.subsOpen : ""}`}>
        <div className={styles.subsInner}>
          <div className={styles.subsContent}>
            {s.subs.map((sub) => (
              <span key={sub} className={styles.sub}>
                {sub}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Section ─────────────────────────────────────────── */
export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  /* 3-D slide-up entrance driven by scroll */
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    let rafId = 0;
    let dirty = false;

    const update = () => {
      const rect = card.getBoundingClientRect();
      const vh = window.innerHeight;
      const triggerRange = vh * 0.9;

      if (rect.top < vh + triggerRange) {
        const raw = Math.max(0, Math.min(1, (vh + triggerRange - rect.top) / (vh + triggerRange)));
        const p = 1 - Math.pow(1 - raw, 3); // ease-out cubic
        const ty = (1 - p) * 90;
        const rx = (1 - p) * 4; // subtle tilt
        card.style.transform = `perspective(1200px) rotateX(${rx}deg) translateY(${ty}px)`;
        card.style.opacity = String(Math.min(1, raw * 1.8));
      }
      dirty = false;
    };

    const onScroll = () => {
      if (!dirty) {
        dirty = true;
        rafId = requestAnimationFrame(update);
      }
    };

    update(); // run once on mount
    window.addEventListener("scroll", onScroll, { passive: true });

    // Single Intersection Observer for the whole card to trigger reveals
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (card) {
      observer.observe(card);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return (
    <section id="services-section" className={styles.section}>
      <div ref={cardRef} className={styles.card}>
        {/* Decorative top notch */}
        <div className={styles.topBar}>
          <div className={styles.notch} />
        </div>

        {/* Card inner */}
        <div className={styles.inner}>
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <span className={`${styles.eyebrow} reveal ${isRevealed ? styles.revealed : ""}`} style={{ '--delay': '0ms' } as React.CSSProperties}>WHAT WE DO</span>
              <h2 className={`${styles.title} reveal ${isRevealed ? styles.revealed : ""}`} style={{ '--delay': '100ms' } as React.CSSProperties}>SERVICES</h2>
            </div>
            <div className={styles.headerRight}>
              <p className={`${styles.tagline} reveal ${isRevealed ? styles.revealed : ""}`} style={{ '--delay': '200ms' } as React.CSSProperties}>
                Every system built with one goal —{" "}
                <strong>results that compound.</strong>
              </p>
              <div className={`${styles.serviceCount} reveal ${isRevealed ? styles.revealed : ""}`} style={{ '--delay': '300ms' } as React.CSSProperties}>
                <span className={styles.countNum}>05</span>
                <span className={styles.countLabel}>Core<br />Offerings</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className={`${styles.divider} reveal ${isRevealed ? styles.revealed : ""}`} style={{ '--delay': '400ms' } as React.CSSProperties} />

          {/* Service list */}
          <div className={styles.list}>
            {SERVICES.map((s, i) => (
              <ServiceItem
                key={s.num}
                s={s}
                index={i}
                open={openIndex === i}
                isRevealed={isRevealed}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>

          {/* Footer CTA */}
          <div className={`${styles.footer} reveal ${isRevealed ? styles.revealed : ""}`} style={{ '--delay': '300ms' } as React.CSSProperties}>
            <p className={styles.footerText}>
              Not sure which service fits? Let&apos;s talk about your goals.
            </p>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button className={styles.cta}>
                <span>Start a Project</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
