import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import projectsData from '@/../content/projects.json';
import ProjectDetailClient from '@/components/ProjectDetailClient';
import Script from 'next/script';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  client: string;
  location: string;
  year: string;
  gallery?: string[];
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id.toString(),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = (projectsData as Project[]).find((p) => p.id.toString() === id);

  if (!project) {
    return {
      title: 'Proyecto no encontrado | CIVILAM',
    };
  }

  return {
    title: `${project.title} | CIVILAM`,
    description: project.description,
    alternates: { canonical: `/proyectos/${project.id}` },
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
      type: 'article',
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = (projectsData as Project[]).find((p) => p.id.toString() === id);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <Script id={`project-schema-${project.id}`} type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Project',
          name: project.title,
          description: project.description,
          location: project.location,
          image: project.image,
          sponsor: { '@type': 'Organization', name: project.client },
        })}
      </Script>
      <ProjectDetailClient project={project} />
    </main>
  );
}
