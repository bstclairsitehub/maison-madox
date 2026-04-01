'use client';

import { useEffect } from 'react';

const projects = [
  {
    id: 1,
    title: 'Palais des Rêves',
    category: 'Interior Design',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Nocturne Collection',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Archive: The Exhibition',
    category: 'Curation',
    image: 'https://images.unsplash.com/photo-1577720643272-265f09367456?w=600&h=400&fit=crop',
  },
];

export default function ProjectsGrid() {
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
    <section className="py-24 bg-graphite">
      <div className="container">
        <h2 className="scroll-reveal font-cormorant text-5xl mb-4 tracking-wide">Selected Work</h2>
        <div className="scroll-reveal w-16 h-px bg-champagne mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="scroll-reveal group cursor-pointer relative overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 ease-out"
            >
              <div className="bg-noir h-96 mb-6 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-700 ease-out overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-noir opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>
              <div className="relative z-10">
                <h3 className="font-cormorant text-2xl mb-1 tracking-wide">
                  {project.title}
                </h3>
                <p className="text-mist font-montserrat text-xs uppercase tracking-widest font-light">
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
