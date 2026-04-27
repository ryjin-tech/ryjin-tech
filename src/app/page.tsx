"use client";

import { useEffect, useRef } from "react";
import styles from "./page.module.css";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Set slow motion playback
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <div className={styles.heroContainer}>
      {/* Background Video */}
      <video
        ref={videoRef}
        className={styles.videoBackground}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Top Navigation Row */}
      <div className={`${styles.logoBox} glass-panel`}>
        RYJIN TECHNOLOGY
      </div>

      <div className={styles.navActions}>
        {/* About Us icon - person silhouette */}
        <div className={`${styles.navItem} glass-panel`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
        </div>
        {/* Our Projects icon - grid layout */}
        <div className={`${styles.navItem} glass-panel`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
        </div>
        <button className={`${styles.contactBtn}`}>
          <div style={{ background: 'rgba(0,0,0,0.1)', borderRadius: '50%', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
          </div>
          <span>Contact</span>
        </button>
      </div>

      {/* Main Hero Content */}
      <div className={styles.mainHeroBox}>

        {/* Floating micro badges */}
        <div className={`${styles.microBadge} ${styles.badge1}`}>
          <div className={styles.badgeDot} />
          <div className={styles.badgeConnector} />
          <div className={styles.badgeCard}>
            <span className={styles.badgeStat}>1000%</span>
            <span className={styles.badgeLabel}>BRAND VALUE INCREASE</span>
          </div>
        </div>

        <div className={`${styles.microBadge} ${styles.badge2}`}>
          <div className={styles.badgeDot} />
          <div className={styles.badgeConnector} />
          <div className={styles.badgeCard}>
            <span className={styles.badgeLabel}>CONVERSION READY</span>
          </div>
        </div>

        <div className={`${styles.microBadge} ${styles.badge3}`}>
          <div className={styles.badgeDot} />
          <div className={styles.badgeConnector} />
          <div className={styles.badgeCard}>
            <span className={styles.badgeLabel}>MOBILE OPTIMIZED</span>
          </div>
        </div>

        <div className={`${styles.microBadge} ${styles.badge4}`}>
          <div className={styles.badgeDot} />
          <div className={styles.badgeConnector} />
          <div className={styles.badgeCard}>
            <span className={styles.badgeLabel}>AUTOMATION ENABLED</span>
          </div>
        </div>

        <div className={styles.heroTitle}>
          YOUR BRAND<br />
          DOMINATES<br />
          <span className={styles.heroTitleAccent}>THE FUTURE.</span>
        </div>
      </div>



      <div className={`${styles.sidebarBottom} glass-panel`}>
        <div style={{ padding: '2rem' }}>
          <div className={styles.productLabel}>PREMIUM SERIES</div>
          <div className={styles.productName}>CRIMSON PHANTOM</div>
          <div className={styles.productPrice}>$450</div>
        </div>

        <div className={styles.controls}>
          <div className={styles.controlBtn}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6" /></svg>
          </div>
          <div className={styles.controlBtn}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6" /></svg>
          </div>
        </div>
      </div>
    </div>
  );
}
