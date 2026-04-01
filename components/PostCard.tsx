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
  index = 0,
}: PostCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <article className="scroll-reveal group cursor-pointer hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 ease-out">
        <div className="bg-graphite h-64 mb-6 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-700 ease-out relative">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop"
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-champagne opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
        </div>
        <div className="mb-3">
          <span className="text-xs uppercase tracking-widest font-montserrat font-light text-champagne">
            {category}
          </span>
          <span className="text-xs uppercase tracking-widest font-montserrat font-light text-mist ml-4">
            {date}
          </span>
        </div>
        <h3 className="font-cormorant text-2xl mb-3 tracking-wide group-hover:text-champagne transition-colors">
          {title}
        </h3>
        <p className="font-montserrat font-light text-mist text-sm leading-relaxed mb-4">
          {excerpt}
        </p>
        <div className="flex items-center gap-2 text-champagne font-montserrat text-sm font-light group-hover:gap-4 transition-all">
          Read Article
          <span>→</span>
        </div>
      </article>
    </Link>
  );
}
