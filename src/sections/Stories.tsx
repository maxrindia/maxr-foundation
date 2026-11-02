import React from 'react';

export const Stories: React.FC = () => {
  return (
    <section className="section section-offwhite" id="stories">
      <div className="wrap">
        <div className="editorial-row">
          {/* Left Column: Image */}
          <div className="editorial-media">
            <div className="natural-image-frame">
              <img
                src="/images/stories.jpg"
                alt="Stone staircase ascending through lush trees towards sunlight, symbolising every step towards independence"
                className="editorial-image stories-editorial-image"
                loading="lazy"
                width="682"
                height="1024"
              />
            </div>
          </div>

          {/* Right Column: Transparent, Trustworthy Copy */}
          <div className="editorial-content">
            <h2 className="editorial-heading">
              Every Step Towards <em className="highlight">Independence Matters.</em>
            </h2>

            <p className="editorial-lead">
              Behind every finished item and every new order is a woman gaining confidence, dignity, and a stronger voice in her family.
            </p>

            <p className="editorial-body">
              We believe in honest, dignified storytelling without fabricated metrics or exaggerated claims. As MAXR Foundation’s community initiatives and training cohorts take shape, real stories, participant milestones, and verified field updates will be published here with the women's informed consent.
            </p>

            <div className="stories-note">
              <span className="dot-indicator"></span>
              <span>Documenting real grassroots journeys as our programmes grow.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
