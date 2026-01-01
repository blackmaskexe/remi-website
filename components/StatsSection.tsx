"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './StatsSection.module.css';

const StatItem = ({ value, label, delay }: { value: string, label: string, delay: number }) => {
  return (
    <motion.div 
      className={styles.statItem}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
    >
      <div className={styles.statValue}>{value}</div>
      <div className={styles.statLabel}>{label}</div>
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <section id="stats" className={styles.section}>
      <div className={styles.container}>
        
        {/* Narrative Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className={styles.eyebrow}>The Silent Crisis</span>
          <h2 className={styles.headline}>
            Dementia is more than just memory loss.<br />
            It’s the <span className={styles.highlight}>loss of connection.</span>
          </h2>
          <p className={styles.subtext}>
            Millions of families are drifting apart, struggling to maintain the bonds 
            that define who they are. The impact is global, personal, and urgent.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className={styles.grid}>
          <StatItem value="55M+" label="Living with dementia globally" delay={0.2} />
          <StatItem value="$1.3T" label="Annual global cost of care" delay={0.4} />
          <StatItem value="1 in 3" label="Seniors dies with Alzheimer's" delay={0.6} />
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
