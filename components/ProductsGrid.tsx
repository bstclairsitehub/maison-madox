'use client';

import Link from 'next/link';
import { useEffect } from 'react';

const products = [
  {
    id: 1,
    name: 'Obsidian Candle Set',
    price: '€485',
    image: 'https://images.unsplash.com/photo-1602607616816-74557e31e2f8?w=600&h=600&fit=crop',
  },
  {
    id: 2,
    name: 'Marble Throw Blanket',
    price: '€680',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop',
  },
  {
    id: 3,
    name: 'Champagne Glassware',
    price: '€380',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed514?w=600&h=600&fit=crop',
  },
];

export default function ProductsGrid() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-32 bg-noir relative">
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-3" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter2\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' result=\'noise\' /%3E%3C/filter%3E%3Crect width=\'400\' height=\'400\' fill=\'%23fff\' filter=\'url(%23noiseFilter2)\' opacity=\'0.05\'/%3E%3C/svg%3E")',
      }} />
      <div className="container relative z-10">
        <div className="mb-16">
          <h2 className="scroll-reveal font-cormorant text-6xl md:text-7xl mb-6 tracking-tight">Products</h2>
          <div className="section-divider"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {products.map((product, idx) => (
            <div key={product.id} className="scroll-reveal group" style={{ transitionDelay: `${idx * 0.1}s` }}>
              <div className="bg-graphite h-96 mb-8 flex items-center justify-center overflow-hidden relative group-hover:-translate-y-3 transition-all duration-500 ease-out shadow-lg group-hover:shadow-2xl group-hover:shadow-champagne/20">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Gradient overlay that reveals on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-noir via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-champagne opacity-0 group-hover:opacity-15 transition-opacity duration-300"></div>
              </div>
              <div className="space-y-3">
                <h3 className="font-cormorant text-2xl md:text-3xl tracking-wide group-hover:text-champagne transition-colors duration-300 leading-tight">
                  {product.name}
                </h3>
                <p className="text-mist/80 font-montserrat font-light text-base tracking-wide">
                  {product.price}
                </p>
                <Link href="/" className="inline-block font-montserrat text-sm font-light border-b-2 border-champagne text-champagne hover:text-marble hover:border-marble transition-all duration-300 pb-1">
                  View Collection
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
