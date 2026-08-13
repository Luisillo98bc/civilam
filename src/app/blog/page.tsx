import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import HeroInner from '@/components/HeroInner';
import { getSortedPostsData } from '@/lib/markdown';

export const metadata: Metadata = {
  title: 'Blog y Noticias',
  description: 'Entérate de las últimas novedades, consejos y artículos sobre ingeniería, construcción y saneamiento en nuestro blog.',
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  const posts = getSortedPostsData();

  return (
    <main>
      <HeroInner 
        title="Blog & Noticias" 
        subtitle="Las últimas novedades, artículos y conocimientos en el sector de ingeniería y construcción."
        image="/mapas-sig.png"
        waveColorClass="fill-bg-light"
      />
      <section className="section bg-bg-light">
        <div className="site-wrapper">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl text-text-gray">Aún no hay artículos publicados.</h2>
            </div>
          ) : (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8">
              {posts.map(({ id, title, date, excerpt, image }) => (
                <article key={id} className="bg-bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative w-full h-[200px]">
                    <Image src={image} alt={title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <small className="text-accent-blue font-semibold">{date}</small>
                    <h3 className="text-xl mt-2 mb-4 text-primary-blue">
                      <Link href={`/blog/${id}`} className="no-underline text-inherit">
                        {title}
                      </Link>
                    </h3>
                    <p className="text-text-gray text-[0.95rem] mb-6 leading-relaxed">
                      {excerpt}
                    </p>
                    <Link href={`/blog/${id}`} className="inline-block no-underline py-2 px-4 text-[0.9rem] text-accent-blue font-semibold border-[1.5px] border-accent-blue rounded-md transition-all duration-300 hover:bg-accent-blue hover:text-white">
                      Leer más
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
