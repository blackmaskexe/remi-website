"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
  // Animation Steps:
  // 0: Initial wait
  // 1: Image Enters (handled by CSS delay)
  // 2: Start Processing (After image enters ~1.2s)
  // 3: Show Result (After processing ~1s)
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    // Timeline
    const startProcessingTimer = setTimeout(() => {
      setAnimationStep(2);
    }, 1400); // 0.2s delay + 1s duration + buffer

    const showResultTimer = setTimeout(() => {
      setAnimationStep(3);
    }, 2800); // 1.4s + 1.4s processing time

    return () => {
      clearTimeout(startProcessingTimer);
      clearTimeout(showResultTimer);
    };
  }, []);

  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.heroBackground}></div>
      
      <div className={styles.textContent}>
        <div className={styles.tagline}>Imagine Cup 2026 Candidate</div>
        <h1 className={styles.headline}>
          Remember Those <br />
          <span className={styles.highlight}>Who Matter</span>
        </h1>
        <p className={styles.subheadline}>
          Empowering dementia patients to reclaim their relationships through 
          AI-driven recognition and memory recall.
        </p>
        
        <div className={styles.ctaGroup}>
          <button 
            className={styles.primaryBtn}
            onClick={() => {
              document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore More
          </button>
          <button className={styles.secondaryBtn}>Watch Demo</button>
        </div>
      </div>

      <div className={styles.visualContent}>
        <div className={styles.imageContainer}>
          
          {/* Animation Overlay Zone */}
          <div className={styles.overlayContainer}>
            
            {/* Phase 1: Processing */}
            {animationStep === 2 && (
              <div className={styles.processingState}>
                <div className={styles.processingIcon}></div>
                <span className={styles.processingText}>Analyzing Face...</span>
              </div>
            )}

            {/* Phase 2: Result */}
            {animationStep === 3 && (
              <div className={styles.resultState}>
                <div className={styles.resultIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <div className={styles.resultText}>
                  <span className={styles.resultTitle}>Identity Verified</span>
                  <span className={styles.resultName}>Sarah (Granddaughter)</span>
                </div>
              </div>
            )}
          </div>

          <div className={styles.imageWrapper}>
             <Image 
              src="/hero-image-2121.png" 
              alt="Elderly woman smiling at granddaughter" 
              width={500} 
              height={500}
              className={styles.heroImage}
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
