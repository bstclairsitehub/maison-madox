'use client';

import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ProductsGrid from '@/components/ProductsGrid';
import ProjectsGrid from '@/components/ProjectsGrid';
import BlogPreview from '@/components/BlogPreview';

export default function Home() {
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
    <>
      <HeroSection />
      <ProductsGrid />
      <ProjectsGrid />
      <BlogPreview />

      <section className="py-32 bg-graphite relative overflow-hidden">
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-3" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter4\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' result=\'noise\' /%3E%3C/filter%3E%3Crect width=\'400\' height=\'400\' fill=\'%23fff\' filter=\'url(%23noiseFilter4)\' opacity=\'0.05\'/%3E%3C/svg%3E")',
        }} />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <div className="scroll-reveal bg-noir h-96 md:h-[500px] flex items-center justify-center rounded-lg hover:shadow-2xl hover:shadow-champagne/30 transition-all duration-500 ease-out overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=600&fit=crop"
                  alt="Maison Madox studio"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="scroll-reveal font-cormorant text-5xl md:text-6xl mb-8 tracking-tight">
                  About Maison Madox
                </h2>
                <div className="section-divider mb-8"></div>
              </div>
              <p className="scroll-reveal font-montserrat font-light text-mist/90 text-base leading-relaxed">
                Founded in 2016, Maison Madox emerged from a singular vision: to create
                spaces, objects, and experiences that transcend trends and withstand time.
              </p>
              <p className="scroll-reveal font-montserrat font-light text-mist/90 text-base leading-relaxed">
                We work at the intersection of editorial design and fashion, drawing
                inspiration from the archives of luxury and the rigor of contemporary
                craft. Every piece, every space, every idea carries our commitment to
                excellence and subtlety.
              </p>
              <p className="scroll-reveal font-montserrat font-light text-mist/90 text-base leading-relaxed">
                Based in Paris with collaborators across Europe, Maison Madox serves
                collectors, institutions, and brands who understand that true luxury
                is a language of restraint.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
