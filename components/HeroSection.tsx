'use client';

import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="h-screen bg-noir flex items-center justify-center relative overflow-hidden">
      {/* Cinematic Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=1200&fit=crop")',
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      />

      {/* Dark Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-noir z-5"></div>

      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 opacity-5 z-5" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' result=\'noise\' /%3E%3C/filter%3E%3Crect width=\'400\' height=\'400\' fill=\'%23fff\' filter=\'url(%23noiseFilter)\' opacity=\'0.05\'/%3E%3C/svg%3E")',
      }} />

      <div className="relative z-10 text-center container max-w-4xl px-4">
        <h1 className="fade-up fade-up-delay-1 font-cormorant text-6xl md:text-8xl font-light tracking-tight mb-8 leading-tight text-marble">
          Where Craft Meets Concept
        </h1>
        <p className="fade-up fade-up-delay-2 font-montserrat text-lg md:text-xl font-light text-marble/90 mb-12 max-w-2xl mx-auto">
          Maison Madox designs objects, spaces, and ideas that transcend the ephemeral.
          We believe in the power of restraint and the language of luxury.
        </p>
        <button className="fade-up fade-up-delay-3 group bg-champagne text-noir font-montserrat font-medium px-10 py-4 hover:bg-marble transition-all duration-500 uppercase tracking-wider text-sm relative overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-champagne/50">
          <span className="relative z-10">Explore Our Work</span>
          <div className="absolute inset-0 bg-gradient-to-r from-champagne via-marble to-champagne opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </button>
      </div>
    </section>
  );
}
