import { MetadataRoute } from 'next';
import { getSortedPostsData } from '@/lib/markdown';
import projectsData from '@/../content/projects.json';
import { siteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl;

  // Obtener publicaciones de blog dinámicas
  const posts = getSortedPostsData();
  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Rutas estáticas principales
  const staticRoutes = [
    '',
    '/nosotros',
    '/servicios',
    '/proyectos',
    '/blog',
    '/contacto',
    '/capacitaciones',
    '/privacidad',
    '/terminos',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const projectUrls = projectsData.map((project) => ({
    url: `${baseUrl}/proyectos/${project.id}`,
    lastModified: new Date(`${project.year}-01-01`),
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectUrls, ...blogUrls];
}
