import React from 'react';

export const WhatWeDo: React.FC = () => {
  return (
    <section className="section section-offwhite" id="what-we-do">
      <div className="wrap">
        <div className="section-header text-center">
          <h2>Every Woman Has a Different Starting Point.</h2>
          <p>
            Whether a woman wants to strengthen a craft she already knows or learn a vocation from the beginning, we walk alongside her with practical guidance.
          </p>
        </div>

        <div className="pathways-stack">
          {/* Pathway A: I Already Have a Skill (Text Left, Image Right) */}
          <div className="editorial-row pathway-row">
            <div className="editorial-content">
              <span className="editorial-eyebrow">PATHWAY A</span>
              <h3 className="pathway-heading">I Already Have a Skill</h3>
              <p className="pathway-text">
                Support for women who already know how to stitch, cook, create handmade products, or offer practical services. We help them strengthen their skills and explore ways to turn their work into income.
              </p>
              <p className="pathway-subtext">
                From refining product quality and fair unit pricing to finding local buyers, we help women transform home-based craftsmanship into regular earning opportunities.
              </p>
            </div>

            <div className="editorial-media">
              <div className="natural-image-frame">
                <img
                  src="/images/pathway-skill.jpg"
                  alt="Woman making handmade products and crafts"
                  className="editorial-image"
                  loading="lazy"
                  width="600"
                  height="420"
                />
              </div>
            </div>
          </div>

          {/* Pathway B: I Want to Learn a Skill (Image Left, Text Right) */}
          <div className="editorial-row pathway-row pathway-row-reverse">
            <div className="editorial-media">
              <div className="natural-image-frame">
                <img
                  src="/images/pathway-learn.jpg"
                  alt="Open notebook, pen, and learning materials on a study desk"
                  className="editorial-image"
                  loading="lazy"
                  width="600"
                  height="420"
                />
              </div>
            </div>

            <div className="editorial-content">
              <span className="editorial-eyebrow">PATHWAY B</span>
              <h3 className="pathway-heading">I Want to Learn a Skill</h3>
              <p className="pathway-text">
                Opportunities for women who want to learn something new. We help them explore practical skills based on their interests and work towards earning opportunities.
              </p>
              <p className="pathway-subtext">
                We provide friendly, hands-on learning in trades like tailoring, food preparation, and digital tools—giving women the confidence to start earning for the first time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
