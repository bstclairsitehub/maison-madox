'use client';

import PostCard from './PostCard';
import Link from 'next/link';

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
  return (
    <section className="py-24 bg-noir">
      <div className="container">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-cormorant text-5xl mb-4 tracking-wide">Journal</h2>
            <div className="w-16 h-px bg-champagne"></div>
          </div>
          <Link
            href="/blog"
            className="font-montserrat text-sm font-light border-b border-champagne text-champagne hover:text-marble hover:border-marble transition-colors"
          >
            View All Articles
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {recentPosts.map((post) => (
            <PostCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              category={post.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
