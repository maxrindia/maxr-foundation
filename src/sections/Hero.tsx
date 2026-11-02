import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="hero-banner" id="home" aria-label="Hero">
      {/* Full-width photographic background */}
      <div className="hero-banner-bg" />
      {/* Subtle dark gradient overlay for text readability */}
      <div className="hero-banner-overlay" />

      {/* Hero content aligned to the left within standard container */}
      <div className="wrap hero-banner-wrap">
        <div className="hero-banner-content">
          <h1 className="hero-banner-headline">
            <span className="hero-line">Her Skills.</span>
            <span className="hero-line">Her Opportunities.</span>
            <span className="hero-line highlight-mint">Her Independence.</span>
          </h1>

          <p className="hero-banner-desc">
            We help women build on their existing skills or learn new ones, creating pathways towards financial independence.
          </p>

          <div className="hero-banner-actions">
            <a href="#what-we-do" className="btn btn-primary hero-btn">
              <span>Explore What We Do</span>
              <ArrowDown size={16} />
            </a>
            <a href="#contact" className="btn btn-outline-white hero-btn">
              <span>Connect With Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
