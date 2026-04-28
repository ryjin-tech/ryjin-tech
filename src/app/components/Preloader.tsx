"use client";

import { useEffect, useState } from "react";
import styles from "./Preloader.module.css";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isExit, setIsExit] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Disable automatic scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    let interval: NodeJS.Timeout;
    const startTime = Date.now();
    const minDuration = 2000; // Minimum 2 seconds for aesthetic

    const updateProgress = () => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          checkComplete();
          return 100;
        }
        
        // Random increment for a more "loading" feel
        const inc = Math.floor(Math.random() * 5) + 1;
        return Math.min(prev + inc, 100);
      });
    };

    interval = setInterval(updateProgress, 50);

    const checkComplete = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, minDuration - elapsed);

      setTimeout(() => {
        setIsExit(true);
        // Force scroll to top on exit to prevent "auto-scrolled" feel
        window.scrollTo(0, 0);
        
        setTimeout(() => {
          setIsHidden(true);
        }, 800); // Wait for exit animation
      }, remaining);
    };

    // Also listen for window load event
    const handleLoad = () => {
      // We still wait for the interval to finish or the min duration
    };

    window.addEventListener("load", handleLoad);

    return () => {
      clearInterval(interval);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (isHidden) return null;

  return (
    <div className={`${styles.wrapper} ${isExit ? styles.exit : ""}`}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <span className={styles.brand}>RYJIN</span>
          <span className={styles.status}>SYSTEM INITIALIZING</span>
        </div>
        
        <div className={styles.progressBox}>
          <div className={styles.percentage}>
            {progress}<span className={styles.percentSymbol}>%</span>
          </div>
          <div className={styles.barContainer}>
            <div 
              className={styles.bar} 
              style={{ width: `${progress}%` }} 
            />
          </div>
        </div>

        <div className={styles.bottomRow}>
          <span className={styles.info}>PERFORMANCE DRIVEN SYSTEMS</span>
          <span className={styles.year}>© 2026</span>
        </div>
      </div>
      
      {/* Background elements */}
      <div className={styles.glow} />
    </div>
  );
}
