'use client';

import Link from 'next/link';

interface PostCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export default function PostCard({
  slug,
  title,
  excerpt,
  date,
  category,
}: PostCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <article className="group cursor-pointer">
        <div className="bg-graphite h-64 mb-6 flex items-center justify-center overflow-hidden">
          <div className="text-center text-mist font-montserrat font-light">
            [Article Image]
          </div>
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
