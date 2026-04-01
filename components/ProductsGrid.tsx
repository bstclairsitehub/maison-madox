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
    <section className="py-24 bg-noir">
      <div className="container">
        <h2 className="scroll-reveal font-cormorant text-5xl mb-4 tracking-wide">Products</h2>
        <div className="scroll-reveal w-16 h-px bg-champagne mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((product) => (
            <div key={product.id} className="scroll-reveal group hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 ease-out">
              <div className="bg-graphite h-80 mb-6 flex items-center justify-center overflow-hidden relative group-hover:scale-105 transition-transform duration-700 ease-out">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-champagne opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              <h3 className="font-cormorant text-2xl mb-2 tracking-wide">
                {product.name}
              </h3>
              <p className="text-mist font-montserrat font-light mb-4">
                {product.price}
              </p>
              <Link href="/" className="font-montserrat text-sm font-light border-b border-champagne text-champagne hover:text-marble hover:border-marble transition-colors">
                View Collection
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
