import React from 'react';

interface SkillArea {
  id: string;
  title: string;
  image: string;
  alt: string;
  description: string;
}

const skillAreas: SkillArea[] = [
  {
    id: 'tailoring',
    title: 'Tailoring & Stitching',
    image: '/images/skill-tailoring.jpg',
    alt: 'Woman working on a tailoring and sewing project',
    description:
      'Practical stitching, garment alterations, and pattern cutting that enable women to fulfill tailoring orders from home or local community clients.',
  },
  {
    id: 'food',
    title: 'Food Preparation & Small Business',
    image: '/images/skill-food.jpg',
    alt: 'Woman cooking and preparing food in a clean kitchen setting',
    description:
      'Traditional recipes, hygienic food packaging, batch preparation, and basic standards for home kitchens and local food businesses.',
  },
  {
    id: 'crafts',
    title: 'Handicrafts & Traditional Crafts',
    image: '/images/skill-crafts.jpg',
    alt: 'Handmade clay pottery vases, terracotta pots, and traditional craft vessels',
    description:
      'Hand embroidery, traditional pottery, and fabric crafts that celebrate cultural artisanship while creating products for modern buyers.',
  },
  {
    id: 'digital',
    title: 'Digital & Business Skills',
    image: '/images/skill-digital.jpg',
    alt: 'Women learning digital tools and practical computer skills',
    description:
      'Everyday smartphone confidence, UPI digital payments, simple bookkeeping, and connecting with customers through messaging apps.',
  },
];

export const Skills: React.FC = () => {
  return (
    <section className="section section-white" id="skills">
      <div className="wrap">
        <div className="section-header text-center">
          <h2>Skills That Can Create Opportunities.</h2>
          <p>
            We focus on practical, low-investment skills that women can learn close to home and apply directly to generate an income.
          </p>
        </div>

        <div className="skills-grid">
          {skillAreas.map((skill) => (
            <article key={skill.id} className="skill-item">
              <div className="skill-image-frame">
                <img
                  src={skill.image}
                  alt={skill.alt}
                  className="skill-image"
                  loading="lazy"
                  width="400"
                  height="270"
                />
              </div>
              <div className="skill-body">
                <h3 className="skill-title">{skill.title}</h3>
                <p className="skill-desc">{skill.description}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="disclaimer-note text-center">
          * These represent focus areas of interest and potential vocational learning. Specific training schedules depend on community requirements and local partner availability.
        </p>
      </div>
    </section>
  );
};
