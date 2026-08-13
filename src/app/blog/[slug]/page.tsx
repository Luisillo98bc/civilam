import { getPostData } from '@/lib/markdown';
import HeroInner from '@/components/HeroInner';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getSortedPostsData } from '@/lib/markdown';
import { siteUrl } from '@/lib/site';
import ShareButtons from '@/components/ShareButtons';

export function generateStaticParams() {
  return getSortedPostsData().map(({ id }) => ({ slug: id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const postData = await getPostData(resolvedParams.slug);
  if (!postData) notFound();
  return {
    title: postData.title,
    description: postData.excerpt || `Lee nuestro artículo: ${postData.title}`,
    alternates: { canonical: `/blog/${resolvedParams.slug}` },
    openGraph: {
      title: postData.title,
      description: postData.excerpt,
      type: 'article',
      publishedTime: postData.date,
      images: [postData.image],
    },
  };
}

import Script from 'next/script';

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const postData = await getPostData(resolvedParams.slug);
  if (!postData) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": postData.title,
    "image": [postData.image.startsWith('http') ? postData.image : `${siteUrl}${postData.image}`],
    "datePublished": postData.date,
    "dateModified": postData.date,
    "mainEntityOfPage": `${siteUrl}/blog/${resolvedParams.slug}`,
    "publisher": { "@type": "Organization", "name": "CIVILAM", "url": siteUrl },
    "author": [{
      "@type": "Organization",
      "name": "CIVILAM"
    }]
  };

  return (
    <main>
      <Script
        id={`article-schema-${resolvedParams.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <HeroInner 
        title={postData.title}
        subtitle={postData.date}
        image={postData.image}
      />
      <section className="section">
        <div className="site-wrapper max-w-[800px]">
          <div className="mb-8">
            <Link href="/blog" className="text-accent-blue no-underline font-medium">
              ← Volver al Blog
            </Link>
          </div>
          <ShareButtons title={postData.title} />
          
          <div 
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
            className="article-content leading-[1.8] text-[1.1rem] text-text-dark"
          />
        </div>
      </section>
    </main>
  );
}
