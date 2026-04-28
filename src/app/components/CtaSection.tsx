"use client";

import styles from "./CtaSection.module.css";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function CtaSection() {
  const [isRevealed, setIsRevealed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.bgGlow} />
      <div className={styles.bgGrid} />
      
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={`${styles.eyebrow} ${isRevealed ? styles.revealed : ""}`}>
            THE NEXT STEP
          </span>
          <h2 className={`${styles.title} ${isRevealed ? styles.revealed : ""}`}>
            Ready to build a <br />
            <span className={styles.accent}>system that scales?</span>
          </h2>
          <p className={`${styles.desc} ${isRevealed ? styles.revealed : ""}`}>
            Stop settling for average design and underperforming campaigns. Let&apos;s engineer a brand ecosystem that commands attention and drives revenue.
          </p>
          
          <div className={`${styles.btnWrapper} ${isRevealed ? styles.revealed : ""}`}>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button className={styles.primaryBtn}>
                <span className={styles.btnText}>START YOUR PROJECT</span>
                <div className={styles.btnIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
