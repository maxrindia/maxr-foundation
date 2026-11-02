import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="section section-white" id="about">
      <div className="wrap">
        <div className="editorial-row">
          {/* Left Column: Image */}
          <div className="editorial-media">
            <div className="natural-image-frame">
              <img
                src="/images/about.jpg"
                alt="Women collaborating in a sunlit workshop on digital, tailoring, cooking, and craft skills"
                className="editorial-image"
                loading="lazy"
                width="1024"
                height="682"
              />
            </div>
          </div>

          {/* Right Column: Short, Trustworthy Copy */}
          <div className="editorial-content">
            <h2 className="editorial-heading">
              Every Woman Has the <em className="highlight">Potential to Grow.</em>
            </h2>

            <p className="editorial-lead">
              MAXR Foundation supports women in discovering their abilities, developing practical skills, and finding opportunities to earn with confidence.
            </p>

            <p className="editorial-body">
              Across homes and rural neighborhoods, many women already possess valuable talents—stitching clothes, preparing traditional foods, or creating handicrafts—while others simply need an accessible place to begin. We connect them with hands-on practice, fair market guidance, and steady encouragement so they can build a sustainable livelihood.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
