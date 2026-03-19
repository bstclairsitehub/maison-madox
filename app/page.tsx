import HeroSection from '@/components/HeroSection';
import ProductsGrid from '@/components/ProductsGrid';
import ProjectsGrid from '@/components/ProjectsGrid';
import BlogPreview from '@/components/BlogPreview';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductsGrid />
      <ProjectsGrid />
      <BlogPreview />

      <section className="py-24 bg-graphite">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-noir h-96 flex items-center justify-center rounded-lg">
                <div className="text-center text-mist font-montserrat font-light">
                  [About Image]
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-cormorant text-4xl mb-6 tracking-wide">
                About Maison Madox
              </h2>
              <p className="font-montserrat font-light text-mist mb-6 leading-relaxed">
                Founded in 2016, Maison Madox emerged from a singular vision: to create
                spaces, objects, and experiences that transcend trends and withstand time.
              </p>
              <p className="font-montserrat font-light text-mist mb-6 leading-relaxed">
                We work at the intersection of editorial design and fashion, drawing
                inspiration from the archives of luxury and the rigor of contemporary
                craft. Every piece, every space, every idea carries our commitment to
                excellence and subtlety.
              </p>
              <p className="font-montserrat font-light text-mist leading-relaxed">
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
