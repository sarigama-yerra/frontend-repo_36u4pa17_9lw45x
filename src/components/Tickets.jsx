import React from 'react';
import { Calendar, Ticket, ArrowRight } from 'lucide-react';

const Tickets = () => {
  return (
    <section id="tickets" className="relative overflow-hidden bg-gradient-to-b from-black to-zinc-950 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <Calendar className="h-4 w-4 text-red-500" />
          <span className="text-xs uppercase tracking-widest text-gray-300">2025 Grand Prix Season</span>
        </div>
        <h2 className="mt-6 text-3xl font-bold md:text-5xl">Book Your Trackside Experience</h2>
        <p className="mx-auto mt-3 max-w-2xl text-gray-300">
          Feel the thunder of V6 hybrids roar past your seat. Premium paddock access and hospitality packages available.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="inline-flex items-center gap-3 rounded-xl bg-red-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-black"
          >
            <Ticket className="h-4 w-4" /> Reserve VIP Paddock
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-300/40 focus:ring-offset-2 focus:ring-offset-black"
          >
            Explore Highlights <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Tickets;
