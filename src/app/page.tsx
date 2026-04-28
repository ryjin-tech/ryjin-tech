"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import DemoSlider from "./components/DemoSlider";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import Link from "next/link";

const HERO_SERVICES = [
  {
    title: "Digital Brand Systems",
    desc: "Complete brand ecosystems engineered for premium market positioning.",
  },
  {
    title: "Web & App Engineering",
    desc: "High-converting websites and apps built for performance and growth.",
  },
  {
    title: "Performance Marketing",
    desc: "Data-driven campaigns that attract, optimise, and convert at scale.",
  },
  {
    title: "Content & Visual Design",
    desc: "Visually arresting content engineered to stop the scroll.",
  },
  {
    title: "Growth Strategy",
    desc: "Strategic frameworks to decode competitors and map the fastest path to scale.",
  },
];

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeService, setActiveService] = useState(0);

  const nextService = () => setActiveService((p) => (p + 1) % HERO_SERVICES.length);
  const prevService = () => setActiveService((p) => (p - 1 + HERO_SERVICES.length) % HERO_SERVICES.length);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      // Set slow motion playback
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <div>
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
        <div className={`${styles.navItem} glass-panel`} onClick={() => scrollToSection('about-section')} style={{ cursor: 'pointer' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
        </div>
        {/* Our Projects icon - grid layout */}
        <div className={`${styles.navItem} glass-panel`} onClick={() => scrollToSection('demo-section')} style={{ cursor: 'pointer' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
        </div>
        <Link href="/contact" className={styles.contactBtn} style={{ textDecoration: 'none' }}>
          <div style={{ background: 'rgba(0,0,0,0.1)', borderRadius: '50%', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
          </div>
          <span>Contact</span>
        </Link>
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
          <div className={styles.productLabel}>OUR SERVICES {activeService + 1} / {HERO_SERVICES.length}</div>
          <div className={styles.productName} key={activeService + "title"}>{HERO_SERVICES[activeService].title}</div>
          <div className={styles.productDesc} key={activeService + "desc"}>
            {HERO_SERVICES[activeService].desc}
          </div>
        </div>

        <div className={styles.controls}>
          <div className={styles.controlBtn} onClick={prevService}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6" /></svg>
          </div>
          <div className={styles.controlBtn} onClick={nextService}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6" /></svg>
          </div>
        </div>
      </div>
    </div>
    <DemoSlider />
    <AboutSection />
    <ServicesSection />
    <TestimonialsSection />
    <CtaSection />
    <Footer />
    </div>
  );
}
