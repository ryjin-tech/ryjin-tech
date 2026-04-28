"use client";

import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Top Section */}
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>RYJIN</div>
            <p className={styles.tagline}>
              Performance-driven digital brand building systems. We attract, convert, and scale brands.
            </p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkCol}>
              <h4 className={styles.colTitle}>SERVICES</h4>
              <Link href="/#services-section" className={styles.link}>Web Development</Link>
              <Link href="/#services-section" className={styles.link}>Brand Identity</Link>
              <Link href="/#services-section" className={styles.link}>Performance Marketing</Link>
              <Link href="/#services-section" className={styles.link}>Growth Strategy</Link>
            </div>
            
            <div className={styles.linkCol}>
              <h4 className={styles.colTitle}>COMPANY</h4>
              <Link href="/#about-section" className={styles.link}>About the System</Link>
              <Link href="/#demo-section" className={styles.link}>Demo Designs</Link>
              <Link href="/#testimonials-section" className={styles.link}>Testimonials</Link>
              <Link href="/contact" className={styles.link}>Contact Us</Link>
            </div>

            <div className={styles.linkCol}>
              <h4 className={styles.colTitle}>SOCIALS</h4>
              <Link href="https://instagram.com/ryjintech" target="_blank" rel="noopener noreferrer" className={styles.link}>Instagram</Link>
              <Link href="https://instagram.com/itz_pratyay__" target="_blank" rel="noopener noreferrer" className={styles.link}>Founder Instagram</Link>
              <Link href="https://www.linkedin.com/in/pratyay-gharai" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom Section */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} RYJIN TECHNOLOGY. All rights reserved.
          </p>
          <div className={styles.legal}>
            <Link href="#" className={styles.legalLink}>Privacy Policy</Link>
            <Link href="#" className={styles.legalLink}>Terms of Service</Link>
          </div>
        </div>
      </div>
      
      {/* Massive Watermark */}
      <div className={styles.watermark}>RYJIN</div>
    </footer>
  );
}
