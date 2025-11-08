import React from 'react';

const images = [
  'https://images.unsplash.com/photo-1586972938051-bd3f48ab0d78?q=80&w=1887&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1607099912505-0a5f64e285d1?q=80&w=1887&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518631036542-5a1787b2ca38?q=80&w=1887&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1599937577325-b4a2da8ba5da?q=80&w=1887&auto=format&fit=crop',
];

const Gallery = () => {
  return (
    <section id="gallery" className="relative bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.05),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight md:text-5xl">Gallery</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-300">
          Adrenaline-fueled moments frozen in time.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((src, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-xl">
              <img
                src={src}
                alt={`F1 ${idx + 1}`}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
