# MAXR Foundation — Official Website

> **"Her Skills. Her Opportunities. Her Independence."**

A simple, authentic, and dignified website for **MAXR Foundation**, built with **React**, **Vite**, **TypeScript**, and **Modern CSS**.

MAXR Foundation empowers Indian women to achieve financial independence by identifying and improving existing practical skills, introducing new vocations, and connecting their capabilities directly to income-generating opportunities.

---

## 1. Technology Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing)
- **Icons**: [Lucide React](https://lucide.dev/) (used selectively for navigation and direct communication)
- **Styling**: Modern CSS with CSS Custom Properties, Responsive Fluid Typography (`clamp`), Flexbox & Grid
- **Design Direction**: Authentic Indian NGO aesthetic inspired by Bhumi and Magic Bus. Features generous whitespace, natural documentary-style photography of Indian women, clean editorial typography, and zero corporate bloat.

---

## 2. Brand Identity & Visual Language

| Brand Color | Hex | Role |
| :--- | :--- | :--- |
| **Primary Dark** | `#080B0C` | Deep black editorial typography and footer base |
| **Mint Green** | `#55CDB3` | Selective highlights and action buttons |
| **Mint Dark** | `#128068` | High-contrast accessible text on light backgrounds (WCAG AA compliant) |
| **Off-White** | `#F4F7F6` | Soft alternating section background |
| **Plum** | `#493548` | Limited brand accents |

### Typography
- **Headings**: `Outfit` (600, 700, 800)
- **Body & Navigation**: `Inter` (400, 500, 600)

### Official Logo
- Official brand logo: [`src/assets/logo/maxr-logo.png`](./src/assets/logo/maxr-logo.png) and [`public/maxr-logo.png`](./public/maxr-logo.png).
- Maintained at original proportions without distortion on both light header and dark footer backgrounds.

---

## 3. Simplified 6-Section Website Structure

The website is streamlined into six focused sections:

1. **Section 1 – Home / Hero**:
   - Headline: *"Her Skills. Her Opportunities. Her Independence."*
   - Description: *"We help women build on their existing skills or learn new ones, creating pathways towards financial independence."*
   - Actions: *Explore What We Do* (`#what-we-do`) & *Connect With Us* (`#contact`).
   - Authentic photograph of Indian rural women united in purpose.

2. **Section 2 – About MAXR Foundation**:
   - Heading: *"Every Woman Has the Potential to Grow."*
   - Two concise paragraphs focusing on dignity, self-reliance, and livelihood opportunities.
   - Genuine Indian community gathering photography.

3. **Section 3 – What We Do**:
   - Heading: *"Every Woman Has a Different Starting Point."*
   - Two alternating editorial layouts:
     - **Pathway A (I Already Have a Skill)**: Tailoring, cooking, craft, and service refinement.
     - **Pathway B (I Want to Learn a Skill)**: Vocational training, everyday digital skills, and first earning milestones.

4. **Section 4 – Skills & Opportunities**:
   - Heading: *"Skills That Can Create Opportunities."*
   - Four primary focus areas:
     - *Tailoring & Stitching*
     - *Food Preparation & Small Business*
     - *Handicrafts & Traditional Crafts*
     - *Digital & Business Skills*

5. **Section 5 – Stories & Impact**:
   - Heading: *"Every Step Towards Independence Matters."*
   - Transparent field note that genuine participant profiles and verified impact will be shared as active cohorts develop. No fabricated statistics or testimonials.

6. **Section 6 – Contact / Get Involved**:
   - Heading: *"Let's Create More Opportunities Together."*
   - Direct WhatsApp, email, and phone contact options.
   - Clean professional footer with navigation, contact info, and official social channels.

---

## 4. Local Development

### Prerequisites
- Node.js `v18.0.0` or higher
- npm `v9.0.0` or higher

```bash
# Install dependencies
npm install

# Start local development server (http://localhost:3000)
npm run dev

# Run production build
npm run build

# Preview production build
npm run preview
```

---

## 5. Deployment on Vercel

1. Push this folder to your GitHub / GitLab repository.
2. In the [Vercel Dashboard](https://vercel.com/), click **Add New Project** and import the repository.
3. Vercel automatically selects the **Vite** preset (`npm run build`, output directory `dist`).
4. Click **Deploy**. SPA rewrites are pre-configured in [`vercel.json`](./vercel.json).

---

## 6. Official Contact & Social Details

- **Phone**: [+91 97878 74359](tel:+919787874359)
- **Email**: [hello@maxr.io](mailto:hello@maxr.io)
- **WhatsApp**: [+91 97878 74359](https://wa.me/919787874359?text=Hello%20MAXR%20Foundation)
- **LinkedIn**: [MAXR Foundation on LinkedIn](https://www.linkedin.com/company/maxr-foundation/)
- **Instagram**: [@maxrfoundation](https://www.instagram.com/maxrfoundation/)
