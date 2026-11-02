import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import logoImg from '../assets/logo/maxr-logo.png';

const LinkedinIcon: React.FC<{ size?: number; className?: string }> = ({ size = 14, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.95 0-1.72-.78-1.72-1.73s.77-1.73 1.72-1.73 1.73.78 1.73 1.73-.78 1.73-1.73 1.73M7.86 18.5V10.13H5.07V18.5h2.79z" />
  </svg>
);

const InstagramIcon: React.FC<{ size?: number; className?: string }> = ({ size = 14, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap footer-concise-inner">
        {/* Brand Lockup & Description */}
        <div className="footer-concise-brand">
          <div className="footer-brand-lockup">
            <img
              src={logoImg}
              alt="MAXR Foundation Logo"
              className="footer-logo"
              width="88"
              height="38"
            />
            <span className="footer-brand-sub">FOUNDATION</span>
          </div>

          <p className="footer-tagline">
            Her Skills. Her Opportunities. Her Independence.
          </p>
          <p className="footer-mission-sub">
            Supporting women across India in turning skills and interests into sustainable livelihoods.
          </p>
        </div>

        {/* Social Connect Links */}
        <div className="footer-concise-socials">
          <span className="footer-social-label">CONNECT WITH US</span>
          <div className="footer-social-row">
            <a
              href="https://www.linkedin.com/company/maxr-foundation/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="MAXR Foundation LinkedIn"
            >
              <LinkedinIcon size={14} />
              <span>LinkedIn</span>
              <ArrowUpRight size={12} />
            </a>
            <a
              href="https://www.instagram.com/maxrfoundation/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="MAXR Foundation Instagram"
            >
              <InstagramIcon size={14} />
              <span>Instagram</span>
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="wrap footer-bottom-content">
          <p>© {currentYear} MAXR Foundation. All rights reserved.</p>
          <p className="footer-motto">Empowering women towards financial self-reliance.</p>
        </div>
      </div>
    </footer>
  );
};
