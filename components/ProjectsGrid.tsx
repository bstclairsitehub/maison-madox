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
    <section className="py-32 bg-graphite relative">
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-3" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter3\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' result=\'noise\' /%3E%3C/filter%3E%3Crect width=\'400\' height=\'400\' fill=\'%23fff\' filter=\'url(%23noiseFilter3)\' opacity=\'0.05\'/%3E%3C/svg%3E")',
      }} />
      <div className="container relative z-10">
        <div className="mb-16">
          <h2 className="scroll-reveal font-cormorant text-6xl md:text-7xl mb-6 tracking-tight">Selected Work</h2>
          <div className="section-divider"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="scroll-reveal group cursor-pointer relative overflow-hidden hover:-translate-y-3 transition-all duration-500 ease-out shadow-lg hover:shadow-2xl hover:shadow-champagne/20"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="bg-noir h-96 md:h-[450px] flex items-center justify-center relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Gradient overlay that reveals on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-noir opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-champagne opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 group-hover:translate-y-0 translate-y-4 group-hover:translate-y-0 transition-all duration-500 z-20">
                <div className="relative z-30">
                  <h3 className="font-cormorant text-3xl md:text-4xl mb-2 tracking-wide text-marble group-hover:text-champagne transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-marble/80 font-montserrat text-xs uppercase tracking-widest font-light">
                    {project.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
