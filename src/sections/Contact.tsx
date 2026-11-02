import React from 'react';
import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section className="section section-white" id="contact">
      <div className="wrap">
        <div className="contact-open-container">
          <div className="contact-header text-center">
            <h2>Let's Create More Opportunities Together.</h2>
            <p className="contact-desc">
              Connect with MAXR Foundation to explore volunteering, mentoring, partnerships, or skill-development opportunities.
            </p>
          </div>

          <div className="contact-actions">
            <a
              href="https://wa.me/919787874359?text=Hello%20MAXR%20Foundation,%20I%20would%20like%20to%20connect%20and%20explore%20ways%20to%20work%20together."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp contact-cta-btn"
            >
              <MessageCircle size={18} />
              <span>Connect on WhatsApp</span>
            </a>

            <a
              href="mailto:hello@maxr.io?subject=Inquiry%20-%20MAXR%20Foundation"
              className="btn btn-secondary contact-cta-btn"
            >
              <Mail size={18} />
              <span>Send an Email</span>
            </a>
          </div>

          <div className="contact-info-strip">
            <div className="info-block">
              <span className="info-label">PHONE</span>
              <a href="tel:+919787874359" className="info-val">
                <Phone size={15} />
                <span>+91 97878 74359</span>
              </a>
            </div>

            <div className="info-block">
              <span className="info-label">EMAIL</span>
              <a href="mailto:hello@maxr.io" className="info-val">
                <Mail size={15} />
                <span>hello@maxr.io</span>
              </a>
            </div>

            <div className="info-block">
              <span className="info-label">LOCATION</span>
              <span className="info-val text-muted">
                <MapPin size={15} className="location-icon" />
                <span>101 2/29, Cenotaph Ist St, Alwarpet, Chennai 600018</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

