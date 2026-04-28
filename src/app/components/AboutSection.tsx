"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./AboutSection.module.css";

/* ── Animated counter ────────────────────────────────── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
            setValue(Math.round(eased * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

/* ── Reveal-on-scroll wrapper ────────────────────────── */
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={styles.reveal}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
      }}
    >
      {children}
    </div>
  );
}

/* ── Main section ────────────────────────────────────── */
export default function AboutSection() {
  return (
    <section id="about-section" className={styles.section}>
      {/* Background layers */}
      <div className={styles.bgGlow} />
      <div className={styles.bgGrid} />

      <div className={styles.inner}>

        {/* ── Left column ── */}
        <div className={styles.left}>

          <Reveal delay={0}>
            <span className={styles.eyebrow}>ABOUT THE SYSTEM</span>
          </Reveal>

          <Reveal delay={80}>
            <h2 className={styles.headline}>
              Built to<br />
              <span className={styles.accentWord}>perform.</span><br />
              Not just<br />
              <span className={styles.dimWord}>look good.</span>
            </h2>
          </Reveal>

          {/* Stats row */}
          <Reveal delay={200}>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statNum}>
                  <Counter target={3} suffix="+" />
                </div>
                <div className={styles.statLabel}>Years of<br />Experience</div>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <div className={styles.statNum}>
                  <Counter target={50} suffix="+" />
                </div>
                <div className={styles.statLabel}>Projects<br />Delivered</div>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <div className={styles.statNum}>
                  <Counter target={100} suffix="%" />
                </div>
                <div className={styles.statLabel}>Results<br />Focused</div>
              </div>
            </div>
          </Reveal>

          {/* Founder glass card */}
          <Reveal delay={320}>
            <div className={styles.founderCard}>
              <div className={styles.founderAvatar}>
                <span className={styles.founderInitial}>P</span>
                <div className={styles.founderGlow} />
              </div>
              <div className={styles.founderInfo}>
                <span className={styles.founderName}>Pratyay Gharai</span>
                <span className={styles.founderRole}>Founder &amp; Operator, RYJIN</span>
                <div className={styles.founderTags}>
                  <span className={styles.tag}>Web Dev</span>
                  <span className={styles.tag}>Branding</span>
                  <span className={styles.tag}>Growth</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── Right column ── */}
        <div className={styles.right}>

          <Reveal delay={120}>
            <p className={styles.leadText}>
              Ryjin is a performance-driven digital brand built to help businesses grow with{" "}
              <em>clarity, strategy, and execution.</em>
            </p>
          </Reveal>

          <Reveal delay={220}>
            <p className={styles.bodyText}>
              Founded and operated by Pratyay Gharai, bringing over 3 years of hands-on
              experience in web development, branding, and digital growth systems.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <p className={styles.bodyText}>
              From building high-converting websites and apps to crafting strong brand
              identities and marketing strategies — every solution is designed to deliver
              real results, not just visuals.
            </p>
          </Reveal>

          <Reveal delay={380}>
            <p className={styles.bodyText}>
              Whether you&apos;re starting from zero or scaling an existing business, Ryjin
              focuses on building systems that don&apos;t just look good — but perform where
              it matters.
            </p>
          </Reveal>

          {/* Focus statement panel */}
          <Reveal delay={480}>
            <div className={styles.focusPanel}>
              <div className={styles.focusAccent} />
              <div className={styles.focusContent}>
                <span className={styles.focusLabel}>THE FOCUS</span>
                <p className={styles.focusStatement}>
                  Create systems that <span className={styles.highlight}>attract</span>,{" "}
                  <span className={styles.highlight}>convert</span>, and{" "}
                  <span className={styles.highlight}>scale</span> brands in the digital space.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Capability pills */}
          <Reveal delay={560}>
            <div className={styles.pills}>
              {[
                "Web Development",
                "Brand Identity",
                "Growth Strategy",
                "UI / UX Design",
                "Marketing Systems",
                "Digital Automation",
              ].map((p) => (
                <span key={p} className={styles.pill}>{p}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
