"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './TechRoadmapSection.module.css';

const TechCard = ({ title, desc, icon, delay }: any) => (
  <motion.div 
    className={styles.techCard}
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <div className={styles.techIcon}>{icon}</div>
    <h4 className={styles.techTitle}>{title}</h4>
    <p className={styles.techDesc}>{desc}</p>
  </motion.div>
);

const RoadmapItem = ({ quarter, title, desc, delay }: any) => (
  <motion.div 
    className={styles.roadmapItem}
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <div className={styles.quarterBadge}>{quarter}</div>
    <div className={styles.roadmapContent}>
      <h5 className={styles.roadmapTitle}>{title}</h5>
      <p className={styles.roadmapDesc}>{desc}</p>
    </div>
  </motion.div>
);

const TechRoadmapSection = () => {
  return (
    <section id="roadmap" className={styles.section}>
      <div className={styles.container}>
        
        {/* PART 1: TECH STACK */}
        <div className={styles.techStackWrapper}>
          <motion.div 
             className={styles.header}
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
          >
            <h2 className={styles.headline}>Built on Azure</h2>
            <p className={styles.subheadline}>Enterprise-grade architecture for recognizing what matters most.</p>
          </motion.div>

          <div className={styles.techGrid}>
            <TechCard 
              title="Azure AI Search" 
              desc="Vector embeddings for high-precision face recognition." 
              delay={0.1}
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              }
            />
            <TechCard 
              title="Azure Cosmos DB" 
              desc="Global distribution for instant memory retrieval." 
              delay={0.2}
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20"/><path d="M2 12h20"/><path d="m4.93 4.93 14.14 14.14"/><path d="m19.07 4.93-14.14 14.14"/></svg>
              }
            />
            <TechCard 
              title="Python + Flask" 
              desc="Robust backend API & OpenCV processing pipeline." 
              delay={0.3}
              icon={
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3 3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Z"/><path d="m9 8-4.6 9.2A2 2 0 0 0 6.2 20h11.6a2 2 0 0 0 1.8-2.8L15 8"/><circle cx="12" cy="14" r="1"/></svg>
              }
            />
            <TechCard 
              title="SwiftUI (iOS)" 
              desc="Native performance and accessibility for seniors." 
              delay={0.4}
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 2v2"/><path d="M12 22v2"/><path d="m17 17 1.4 1.4"/><path d="m4.9 4.9 1.4 1.4"/><path d="m19.1 4.9-1.4 1.4"/><path d="m7 17-1.4 1.4"/></svg>
              }
            />
          </div>
        </div>

        <div className={styles.divider}></div>

        {/* PART 2: ROADMAP */}
        <div className={styles.roadmapWrapper}>
          <motion.div 
             className={styles.header}
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
          >
            <h2 className={styles.headline}>Our Path Forward</h2>
            <p className={styles.subheadline}>Bringing Remi to every family in need by 2026.</p>
          </motion.div>

          <div className={styles.timeline}>
            <div className={styles.timelineLine}></div>
            
            <RoadmapItem 
              quarter="Q1 2026" 
              title="Beta Pilot Program"
              desc="Deploying to 5 partner care homes for user testing and feedback loops." 
              delay={0.1}
            />
            <RoadmapItem 
              quarter="Q2 2026" 
              title="Voice & Mood Analysis"
              desc="Integrating Azure Speech Services to detect user emotion during conversations." 
              delay={0.2}
            />
            <RoadmapItem 
              quarter="Q3 2026" 
              title="Global Launch"
              desc="Official release on the App Store with multi-language support." 
              delay={0.3}
            />
            <RoadmapItem 
              quarter="Q4 2026" 
              title="Enterprise Integration"
              desc="Partnerships with major healthcare providers and insurance coverage." 
              delay={0.4}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechRoadmapSection;
