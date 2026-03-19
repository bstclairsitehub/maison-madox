import PostCard from '@/components/PostCard';

const blogPosts = [
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
  {
    slug: 'paris-studio-visit',
    title: 'A Studio Visit in the Marais',
    excerpt:
      'Inside our Paris atelier where tradition meets innovation. Meet the artisans and designers who bring Maison Madox to life.',
    date: 'February 10, 2024',
    category: 'Studio',
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="py-16 bg-noir border-b border-champagne border-opacity-30">
        <div className="container">
          <h1 className="font-cormorant text-6xl tracking-wide mb-4">Journal</h1>
          <p className="font-montserrat font-light text-mist text-lg max-w-2xl">
            Insights, inspiration, and stories from the Maison Madox studio.
          </p>
        </div>
      </section>

      <section className="py-24 bg-noir">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {blogPosts.map((post) => (
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
    </>
  );
}
