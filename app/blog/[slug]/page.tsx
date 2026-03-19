import Link from 'next/link';
import { notFound } from 'next/navigation';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  author: string;
  content: string;
}

const blogPosts: Record<string, BlogPost> = {
  'the-art-of-restraint': {
    slug: 'the-art-of-restraint',
    title: 'The Art of Restraint in Modern Design',
    date: 'March 12, 2024',
    category: 'Design',
    author: 'Margot Leclerc',
    content: `In the age of excess, true luxury has become increasingly elusive. At Maison Madox, we believe that restraint is the ultimate expression of refinement—not through what we add, but through what we carefully omit.

The evolution of contemporary design has moved away from the ornamental and toward the essential. This shift reflects not a lack of imagination, but rather a maturation of aesthetic sensibility. When every element serves a purpose, when negative space becomes as important as form, we arrive at something profound: objects and spaces that age gracefully.

Consider the Obsidian Candle Set. Its construction—minimalist, geometric, unadorned—allows the quality of materials and the precision of execution to speak for themselves. There are no decorative flourishes to distract from the essential beauty of proportion and craftsmanship.

This philosophy extends beyond our collections into our design process. We spend considerable time subtracting elements, questioning necessity, and refining toward purity. This is why our pieces take months or years to develop, and why we often find that the most revolutionary design is also the simplest.

In fashion, this manifests as silhouettes that require no embellishment, garments that become more beautiful with wear, and color palettes that whisper rather than shout. The power of restraint lies in its confidence—a design that stands unsupported by trend or decoration must be truly exceptional.

The challenge for contemporary designers is to navigate between minimalism and coldness. Our answer has been to infuse restraint with warmth through materiality, texture, and the impeccable attention to detail that only human craft can provide.

True luxury, we've learned, is earned through time, not purchased through novelty.`,
  },
  'nocturne-behind-the-scenes': {
    slug: 'nocturne-behind-the-scenes',
    title: 'Behind the Nocturne Collection',
    date: 'February 28, 2024',
    category: 'Fashion',
    author: 'Isabelle Rousseau',
    content: `The Nocturne Collection emerged from a single inspiration: the quiet beauty of nighttime in the City of Light. For six months, our design team documented shadows, studied fabric behavior under moonlight, and explored the subtle interplay of darkness and reflection.

Beginning with extensive research, we traveled through the archives of French fashion houses, studying construction techniques from the 1950s and 1960s—an era we consider the golden age of haute couture. Our goal wasn't to recreate the past, but to understand the logic behind garment construction and adapt it to contemporary sensibilities.

The color palette developed through an intuitive process. While one might expect "nocturne" to mean black, we discovered that true nighttime is infinitely more complex. Our palette includes charcoal, deep navy, soft grey, and—most surprisingly—pale champagne that mimics moonlight reflection on fabric.

Fabrication proved to be our greatest challenge. We worked with mills across Lyon and Como, testing combinations until we found the perfect weight and drape. The lead fabric, a custom silk-wool blend, required three separate production runs to achieve the exact hand feel we envisioned.

Each garment is constructed using traditional hand-stitching techniques for seams that will endure a lifetime of wear. The sizing system reflects our belief that luxury clothing should adapt to the wearer, not force conformity to arbitrary measurements.

The collection represents not just a seasonal offering, but a distillation of everything Maison Madox stands for: timelessness, craftsmanship, and the belief that fashion serves those who wear it, rather than trend cycles that demand constant replacement.

Nocturne launches this Spring. We believe you'll understand immediately why we spent six months on what appears deceptively simple.`,
  },
  'paris-studio-visit': {
    slug: 'paris-studio-visit',
    title: 'A Studio Visit in the Marais',
    date: 'February 10, 2024',
    category: 'Studio',
    author: 'Adrien Moreau',
    content: `Walking into the Maison Madox studio in the Marais, one is immediately struck by what is absent: no mood boards plastered with inspiration, no digital screens, minimal decoration. The space itself serves as the primary design tool.

Housed in a 17th-century building with original stone walls, the studio spans three floors. The ground floor contains our main design workshop—long wooden tables, bolts of fabric, pattern papers, and the essential tools of the atelier. Sunlight pours through tall windows, casting clean geometric shadows that shift throughout the day.

Upstairs, fabric libraries are organized with meticulous care. Rather than by trend or season, they're organized by fiber content, weight, and aesthetic family. A designer can trace the evolution of a particular weaving technique across centuries and continents. We source from small mills and artisans, many of whom have been producing the same fabrics for generations.

The third floor houses what we call the "Archive"—our reference collection of historic garments, design objects, and materials. There's a collection of 1940s French couture, textiles from the Arts & Crafts movement, books on typography dating to the Renaissance, and ceramics from across Europe. This is our institutional memory.

What struck me most during the visit was the intentional pace of work. There's no rushing here. A single jacket might be pattern-tested a dozen times before entering production. A fabric might be studied for weeks before being deemed worthy of Maison Madox.

The studio employs twenty-three people: designers, pattern makers, seamstresses, artisans, and support staff. Many have been with the studio for more than five years—a rarity in an industry often defined by rapid turnover.

When asked about their process, Creative Director Céline Arnould said simply: "We make things that should have always existed. Everything else is noise."

Visiting the studio transformed my understanding of what it means to run a design practice in the 21st century. In an era of rapid production and digital-first workflows, Maison Madox has chosen a different path: slower, deeper, and infinitely more intentional.`,
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return {
      title: 'Post Not Found | Maison Madox',
    };
  }

  return {
    title: `${post.title} | Maison Madox Journal`,
    description: post.content.substring(0, 160),
  };
}

export async function generateStaticParams() {
  return Object.values(blogPosts).map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      <article className="bg-noir">
        <div className="border-b border-champagne border-opacity-30">
          <div className="container py-16">
            <div className="max-w-3xl">
              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest font-montserrat font-light text-champagne">
                  {post.category}
                </span>
              </div>
              <h1 className="font-cormorant text-5xl md:text-6xl tracking-wide mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center gap-6 text-mist font-montserrat text-sm font-light">
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16">
          <div className="container">
            <div className="bg-graphite h-96 mb-16 flex items-center justify-center rounded-lg">
              <div className="text-center text-mist font-montserrat font-light">
                [Article Feature Image]
              </div>
            </div>

            <div className="max-w-3xl prose prose-invert mx-auto font-montserrat font-light text-marble leading-relaxed">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 text-lg text-marble">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-champagne border-opacity-30 py-12">
          <div className="container">
            <div className="flex items-center justify-between max-w-3xl">
              <div>
                <p className="text-mist text-sm font-montserrat font-light uppercase tracking-wide mb-2">
                  Written by
                </p>
                <p className="font-cormorant text-xl tracking-wide">{post.author}</p>
              </div>
              <Link
                href="/blog"
                className="font-montserrat text-sm font-light border-b border-champagne text-champagne hover:text-marble hover:border-marble transition-colors"
              >
                Back to Journal
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
