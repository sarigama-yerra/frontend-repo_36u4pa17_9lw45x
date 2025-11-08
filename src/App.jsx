import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Specs from './components/Specs';
import CarVisual from './components/CarVisual';
import Gallery from './components/Gallery';
import Tickets from './components/Tickets';

const App = () => {
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href');
      if (id.length > 1) {
        const el = document.querySelector(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600/40 selection:text-white">
      <Hero />
      <CarVisual />
      <Specs />
      <Gallery />
      <Tickets />
      <footer className="border-t border-white/10 bg-black py-10 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} F1 Experience — Built for speed.
      </footer>
    </div>
  );
};

export default App;
