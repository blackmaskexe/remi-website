"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './FeaturesSection.module.css';

const FeatureCard = ({ title, description, icon, className, delay }: any) => (
  <motion.div 
    className={`${styles.card} ${className}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <div className={styles.iconWrapper}>
      {icon}
    </div>
    <h3 className={styles.cardTitle}>{title}</h3>
    <p className={styles.cardDesc}>{description}</p>
  </motion.div>
);

const FeaturesSection = () => {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <h2 className={styles.headline}>Rebuilding Connections</h2>
          <p className={styles.subheadline}>
            Powered by advanced AI, designed with deep empathy.
          </p>
        </div>

        <div className={styles.bentoGrid}>
          
          {/* Card 1: Face Rec (Large) */}
          <FeatureCard 
            className={styles.cardLarge}
            title="Instant Recognition"
            description="Uses Azure AI Search to identify loved ones in milliseconds, even as appearance changes over time."
            delay={0.1}
            icon={
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                <circle cx="12" cy="12" r="3" />
                <path d="M12 16v5" />
                <path d="M8 12h8" />
              </svg>
            }
          />

          {/* Card 2: Memory Timeline */}
          <FeatureCard 
            title="Memory Timeline"
            description="Contextual history of shared moments, helping bridge the gap between past and present."
            delay={0.2}
            icon={
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            }
          />

          {/* Card 3: Conversation Starters */}
          <FeatureCard 
            title="Conversation Sparks"
            description="AI-generated prompts based on shared memories to keep conversations flowing naturally."
            delay={0.3}
            icon={
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                <line x1="9" y1="10" x2="15" y2="10"/>
                <line x1="12" y1="7" x2="12" y2="13"/>
              </svg>
            }
          />

          {/* Card 4: Privacy */}
          <FeatureCard 
            className={styles.cardWide}
            title="Private & Secure by Design"
            description="Every user gets an isolated vector database. Your memories belong to you, and you alone."
            delay={0.4}
            icon={
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            }
          />

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
