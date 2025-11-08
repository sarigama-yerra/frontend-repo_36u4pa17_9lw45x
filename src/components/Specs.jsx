import React from 'react';
import { Gauge, Zap, Wind } from 'lucide-react';

const specs = [
  {
    icon: <Gauge className="h-6 w-6 text-red-500" />,
    title: 'Top Speed',
    value: '350 km/h',
    desc: 'Wind-tunnel refined aerodynamics for blistering straights.'
  },
  {
    icon: <Zap className="h-6 w-6 text-red-500" />,
    title: '0-100',
    value: '1.9s',
    desc: 'Instant torque delivery with ERS hybrid boost.'
  },
  {
    icon: <Gauge className="h-6 w-6 text-red-500" />,
    title: 'Power Unit',
    value: '1000+ HP',
    desc: 'Turbocharged V6 hybrid with kinetic energy recovery.'
  },
  {
    icon: <Wind className="h-6 w-6 text-red-500" />,
    title: 'Downforce',
    value: 'Extreme',
    desc: 'Ground-effect floor and adaptive aero package.'
  },
];

const Specs = () => {
  return (
    <section id="specs" className="relative bg-gradient-to-b from-black via-zinc-950 to-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight md:text-5xl">
          Engineering Without Compromise
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-300">
          A symphony of carbon fiber, titanium, and cutting-edge software.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {specs.map((s, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-transform duration-300 will-change-transform hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-black/60 ring-1 ring-white/10">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-2xl font-extrabold text-red-500">{s.value}</p>
              <p className="mt-2 text-sm text-gray-300">{s.desc}</p>
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-red-600/10 blur-2xl transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specs;
