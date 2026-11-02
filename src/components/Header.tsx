import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import logoImg from '../assets/logo/maxr-logo.png';

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="wrap header-inner">
        {/* Brand Lockup: Official Logo + FOUNDATION (No duplicate 'MAXR' text) */}
        <a href="#home" className="brand-link" aria-label="MAXR Foundation Home" onClick={closeMenu}>
          <img
            src={logoImg}
            alt="MAXR Foundation Logo"
            className="brand-logo"
            width="90"
            height="38"
          />
          <span className="brand-foundation-text">FOUNDATION</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <a href="#about" className="nav-link">About</a>
          <a href="#what-we-do" className="nav-link">What We Do</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#stories" className="nav-link">Stories</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="header-actions">
          <a
            href="https://wa.me/919787874359?text=Hello%20MAXR%20Foundation,%20I%20would%20like%20to%20connect%20and%20learn%20more%20about%20your%20work."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp header-wa-btn"
            aria-label="Connect with MAXR Foundation on WhatsApp"
          >
            <MessageCircle size={16} />
            <span>WhatsApp</span>
          </a>

          <button
            className="mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-drawer ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <div className="wrap mobile-drawer-content">
          <nav className="mobile-nav-links">
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#what-we-do" onClick={closeMenu}>What We Do</a>
            <a href="#skills" onClick={closeMenu}>Skills & Opportunities</a>
            <a href="#stories" onClick={closeMenu}>Stories & Impact</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
          <div className="mobile-drawer-footer">
            <a
              href="https://wa.me/919787874359?text=Hello%20MAXR%20Foundation,%20I%20would%20like%20to%20connect%20and%20learn%20more%20about%20your%20work."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp mobile-wa-btn"
              onClick={closeMenu}
            >
              <MessageCircle size={18} />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
