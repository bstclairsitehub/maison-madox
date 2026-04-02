'use client';

import Link from 'next/link';

interface PostCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  index?: number;
}

export default function PostCard({
  slug,
  title,
  excerpt,
  date,
  category,
  index: _index = 0,
}: PostCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <article className="scroll-reveal group cursor-pointer hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 ease-out">
        <div className="bg-graphite h-80 mb-8 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-700 ease-out relative">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop"
            alt={title}
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient that reveals on hover */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-noir/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute inset-0 bg-champagne opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </div>
        <div className="mb-4 space-y-2">
          <span className="inline-block text-xs uppercase tracking-widest font-montserrat font-light text-champagne">
            {category}
          </span>
          <span className="block text-xs uppercase tracking-widest font-montserrat font-light text-mist/70">
            {date}
          </span>
        </div>
        <h3 className="font-cormorant text-2xl md:text-3xl mb-4 tracking-wide group-hover:text-champagne transition-colors duration-300 leading-tight">
          {title}
        </h3>
        <p className="font-montserrat font-light text-mist text-sm leading-relaxed mb-6">
          {excerpt}
        </p>
        <div className="flex items-center gap-2 text-champagne font-montserrat text-sm font-light group-hover:gap-4 transition-all duration-300">
          Read Article
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </div>
      </article>
    </Link>
  );
}
