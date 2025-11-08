import React, { useEffect, useRef } from 'react';

// Utility to create smoke puffs using canvas for performance
const SmokeCanvas = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrame;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    const setScale = () => {
      const { clientWidth: w, clientHeight: h } = canvas;
      canvas.width = Math.max(1, Math.floor(w * DPR));
      canvas.height = Math.max(1, Math.floor(h * DPR));
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };

    setScale();
    const onResize = () => setScale();
    window.addEventListener('resize', onResize);

    const puffs = [];

    const spawn = () => {
      const baseY = canvas.clientHeight * 0.7;
      const leftX = canvas.clientWidth * 0.28;
      const rightX = canvas.clientWidth * 0.72;
      const wheel = Math.random() > 0.5 ? leftX : rightX;
      puffs.push({
        x: wheel + (Math.random() - 0.5) * 10,
        y: baseY + (Math.random() - 0.5) * 6,
        r: 6 + Math.random() * 10,
        o: 0.6 + Math.random() * 0.2,
        vx: (Math.random() - 0.5) * 0.6,
        vy: -0.6 - Math.random() * 0.8,
        grow: 0.15 + Math.random() * 0.2,
        fade: 0.006 + Math.random() * 0.01,
      });
    };

    let last = 0;

    const loop = (t) => {
      if (!last) last = t;
      const dt = t - last;
      last = t;

      // Clear
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      // spawn faster on load for a burst, then ease
      const burst = Math.max(1, Math.floor(4 - Math.min(t / 1000, 3)));
      for (let i = 0; i < burst; i++) spawn();

      for (let i = puffs.length - 1; i >= 0; i--) {
        const p = puffs[i];
        p.x += p.vx * (dt / 16.6);
        p.y += p.vy * (dt / 16.6);
        p.r += p.grow * (dt / 16.6);
        p.o -= p.fade * (dt / 16.6);
        if (p.o <= 0.02) {
          puffs.splice(i, 1);
          continue;
        }
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        grd.addColorStop(0, `rgba(200,200,200,${p.o})`);
        grd.addColorStop(1, 'rgba(200,200,200,0)');
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrame = requestAnimationFrame(loop);
    };

    animationFrame = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />;
};

const CarVisual = () => {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-5xl">The Apex Predator</h2>
            <p className="mt-4 text-gray-300">
              A razor-sharp chassis, active aero, and race-proven hybrid power unite to deliver relentless lap times.
            </p>
            <ul className="mt-6 space-y-3 text-gray-300">
              <li>• Carbon fiber monocoque with halo protection</li>
              <li>• Advanced tire compounds for ultimate grip</li>
              <li>• Telemetry-driven strategy with AI-assisted analytics</li>
            </ul>
          </div>

          <div className="relative">
            {/* Car body */}
            <div className="relative mx-auto h-64 w-full max-w-xl rounded-3xl bg-gradient-to-br from-zinc-800 to-zinc-900 p-4 shadow-2xl ring-1 ring-white/10">
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-b from-zinc-900 to-black">
                {/* Smoke layer */}
                <SmokeCanvas />

                {/* Car silhouette */}
                <div className="absolute left-1/2 top-1/2 w-[92%] -translate-x-1/2 -translate-y-1/2">
                  <div className="mx-auto h-24 w-full max-w-[520px] rounded-[40%_60%_40%_60%/65%_45%_55%_35%] bg-gradient-to-r from-gray-400 via-zinc-200 to-gray-400 opacity-90" />
                  <div className="mx-auto mt-2 h-2 w-3/4 rounded-full bg-gradient-to-r from-red-700 via-red-500 to-red-700 blur-[2px]" />
                </div>

                {/* Wheels with spinning tires (respects reduced-motion) */}
                <div className="absolute left-[20%] bottom-[16%] h-16 w-16 rounded-full bg-zinc-800 shadow-inner ring-2 ring-zinc-600">
                  <div className="absolute inset-1 motion-safe:animate-[spin_0.9s_linear_infinite] rounded-full border-4 border-transparent border-t-red-500 border-b-red-500" />
                  <div className="absolute inset-3 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900" />
                </div>
                <div className="absolute right-[20%] bottom-[16%] h-16 w-16 rounded-full bg-zinc-800 shadow-inner ring-2 ring-zinc-600">
                  <div className="absolute inset-1 motion-safe:animate-[spin_0.9s_linear_infinite] rounded-full border-4 border-transparent border-t-red-500 border-b-red-500" />
                  <div className="absolute inset-3 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900" />
                </div>

                {/* Subtle reflections */}
                <div className="pointer-events-none absolute -left-10 -top-16 h-40 w-40 rounded-full bg-white/5 blur-3xl" />
                <div className="pointer-events-none absolute -right-10 -bottom-16 h-40 w-40 rounded-full bg-red-500/10 blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarVisual;
