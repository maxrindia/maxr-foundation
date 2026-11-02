import React from 'react';
import './styles/global.css';
import './styles/header.css';
import './styles/sections.css';
import './styles/footer.css';

import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { Home } from './pages/Home.tsx';

export const App: React.FC = () => {
  return (
    <div className="app-container">
      {/* Accessible skip link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Main Site Header */}
      <Header />

      {/* Simplified 6-Section Homepage */}
      <Home />

      {/* Clean Foundation Footer */}
      <Footer />
    </div>
  );
};

export default App;
