'use client';

import PostCard from './PostCard';
import Link from 'next/link';
import { useEffect } from 'react';

const recentPosts = [
  {
    slug: 'the-art-of-restraint',
    title: 'The Art of Restraint in Modern Design',
    excerpt:
      'Exploring how minimalism and luxury converge in contemporary furniture and fashion. A conversation about the power of empty space.',
    date: 'March 12, 2024',
    category: 'Design',
  },
  {
    slug: 'nocturne-behind-the-scenes',
    title: 'Behind the Nocturne Collection',
    excerpt:
      'A deep dive into the creative process of our latest seasonal offering. From concept sketches to final fabric selection.',
    date: 'February 28, 2024',
    category: 'Fashion',
  },
];

export default function BlogPreview() {
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
    <section className="py-32 bg-noir relative overflow-hidden">
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-3" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter5\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' result=\'noise\' /%3E%3C/filter%3E%3Crect width=\'400\' height=\'400\' fill=\'%23fff\' filter=\'url(%23noiseFilter5)\' opacity=\'0.05\'/%3E%3C/svg%3E")',
      }} />
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <h2 className="scroll-reveal font-cormorant text-6xl md:text-7xl mb-6 tracking-tight">Journal</h2>
            <div className="section-divider"></div>
          </div>
          <Link
            href="/blog"
            className="font-montserrat text-sm font-light border-b-2 border-champagne text-champagne hover:text-marble hover:border-marble transition-all duration-300 pb-1 self-start md:self-auto"
          >
            View All Articles
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20">
          {recentPosts.map((post, idx) => (
            <div key={post.slug} style={{ transitionDelay: `${idx * 0.1}s` }}>
              <PostCard
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                category={post.category}
                index={idx}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
