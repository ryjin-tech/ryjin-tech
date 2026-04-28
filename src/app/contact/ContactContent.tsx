"use client";

import styles from "./page.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

export default function ContactContent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={styles.page}>
      {/* Background Effects */}
      <div className={styles.bgGlow} />
      <div className={styles.bgGrid} />

      {/* Navigation (Simple back link) */}
      <nav className={styles.nav}>
        <Link href="/" className={styles.backLink}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </nav>

      <main className={styles.main}>
        {/* Header */}
        <div className={`${styles.header} ${mounted ? styles.mounted : ""}`}>
          <h1 className={styles.title}>
            LET&apos;S <span className={styles.accent}>CONNECT.</span>
          </h1>
          <p className={styles.subtitle}>
            Whether you&apos;re starting from zero or scaling to the next level, let&apos;s build a system that performs.
          </p>
        </div>

        {/* Contact Grid */}
        <div className={`${styles.grid} ${mounted ? styles.mounted : ""}`}>
          
          {/* Info Column */}
          <div className={styles.infoCol}>
            <a href="tel:+919903556882" className={styles.contactCard}>
              <div className={styles.cardIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className={styles.cardContent}>
                <span className={styles.cardLabel}>PHONE NUMBER</span>
                <span className={styles.cardValue}>+91 9903556882</span>
              </div>
            </a>

            <a href="https://instagram.com/ryjintech" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
              <div className={styles.cardIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
              <div className={styles.cardContent}>
                <span className={styles.cardLabel}>INSTAGRAM</span>
                <span className={styles.cardValue}>@ryjintech</span>
              </div>
            </a>

            <a href="https://instagram.com/itz_pratyay__" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
              <div className={styles.cardIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className={styles.cardContent}>
                <span className={styles.cardLabel}>FOUNDER INSTAGRAM</span>
                <span className={styles.cardValue}>@itz_pratyay__</span>
              </div>
            </a>
          </div>

          {/* Note Column */}
          <div className={styles.noteCol}>
            <div className={styles.noteGlass}>
              <h3 className={styles.noteTitle}>Thank you for being here.</h3>
              <p className={styles.noteText}>
                Great brands aren&apos;t built by accident. They are engineered through calculated strategies, striking visuals, and flawless execution.
              </p>
              <p className={styles.noteText}>
                Whether you just have a rough idea, or you&apos;re an established business looking to multiply your revenue — I&apos;m here to help you cut through the noise and dominate your space.
              </p>
              <div className={styles.noteHighlight}>
                <span className={styles.highlightBar}></span>
                Reach out directly via phone or Instagram. Let&apos;s build something exceptional together.
              </div>
            </div>
          </div>
          
        </div>
      </main>

      <Footer />
    </div>
  );
}
