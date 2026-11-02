import React from 'react';
import { Hero } from '../sections/Hero.tsx';
import { About } from '../sections/About.tsx';
import { WhatWeDo } from '../sections/WhatWeDo.tsx';
import { Skills } from '../sections/Skills.tsx';
import { Stories } from '../sections/Stories.tsx';
import { Contact } from '../sections/Contact.tsx';

export const Home: React.FC = () => {
  return (
    <main id="main-content">
      {/* Section 1: Home / Hero */}
      <Hero />

      {/* Section 2: About MAXR Foundation */}
      <About />

      {/* Section 3: What We Do (Pathways A & B) */}
      <WhatWeDo />

      {/* Section 4: Skills & Opportunities */}
      <Skills />

      {/* Section 5: Stories & Impact */}
      <Stories />

      {/* Section 6: Contact / Get Involved */}
      <Contact />
    </main>
  );
};
