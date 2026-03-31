'use client';

export default function HeroSection() {
  return (
    <section className="h-screen bg-noir flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-noir via-noir to-graphite opacity-60"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-champagne rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-champagne rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center container max-w-4xl">
        <h1 className="fade-up fade-up-delay-1 font-cormorant text-6xl md:text-7xl font-light tracking-tight mb-6 leading-tight">
          Where Craft Meets Concept
        </h1>
        <p className="fade-up fade-up-delay-2 font-montserrat text-lg md:text-xl font-light text-mist mb-12 max-w-2xl mx-auto">
          Maison Madox designs objects, spaces, and ideas that transcend the ephemeral.
          We believe in the power of restraint and the language of luxury.
        </p>
        <button className="fade-up fade-up-delay-3 bg-champagne text-noir font-montserrat font-medium px-8 py-3 hover:bg-marble transition-colors uppercase tracking-wider text-sm">
          Explore Our Work
        </button>
      </div>
    </section>
  );
}
