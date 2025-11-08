import React from 'react';
import Spline from '@splinetool/react-spline';
import { Play, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle dark gradient to increase contrast over the 3D scene */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md">
          <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
          <span className="text-xs uppercase tracking-widest text-gray-200">Formula 1 Experience</span>
        </div>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-6xl md:text-7xl">
          Speed. Precision. <span className="text-red-500">Dominance</span>.
        </h1>
        <p className="mt-4 max-w-2xl text-gray-200 md:text-lg">
          Immerse yourself in the pinnacle of motorsport. Feel the aerodynamics slice the air as
          carbon fiber meets raw horsepower.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href="#specs" className="group inline-flex items-center gap-3 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-black">
            <Play className="h-4 w-4" /> View Car Details
          </a>
          <a href="#tickets" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-300/40 focus:ring-offset-2 focus:ring-offset-black">
            Book Tickets <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
