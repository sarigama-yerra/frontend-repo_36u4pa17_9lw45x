import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Play, ChevronRight, Menu, X } from 'lucide-react';

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black text-white md:h-[100svh]">
      {/* 3D Cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* High-contrast gradient overlay so text is always readable and scrolls still work */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />

      {/* Top Navigation */}
      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-red-600" />
            <span className="text-sm font-semibold tracking-widest">F1 EXPERIENCE</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-gray-200 md:flex">
            <a href="#specs" className="hover:text-white">Specs</a>
            <a href="#gallery" className="hover:text-white">Gallery</a>
            <a href="#tickets" className="hover:text-white">Tickets</a>
          </nav>

          <button onClick={() => setOpen(!open)} className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-2 text-white backdrop-blur md:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="mx-4 rounded-xl border border-white/10 bg-black/70 p-4 backdrop-blur md:hidden">
            <div className="flex flex-col gap-3 text-sm text-gray-200">
              <a onClick={() => setOpen(false)} href="#specs" className="rounded-md px-3 py-2 hover:bg-white/5">Specs</a>
              <a onClick={() => setOpen(false)} href="#gallery" className="rounded-md px-3 py-2 hover:bg-white/5">Gallery</a>
              <a onClick={() => setOpen(false)} href="#tickets" className="rounded-md px-3 py-2 hover:bg-white/5">Tickets</a>
            </div>
          </div>
        )}
      </header>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[70svh] max-w-7xl flex-col items-start justify-center px-6 pb-16 pt-8 md:min-h-[75vh]">
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
