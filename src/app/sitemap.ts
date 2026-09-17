import { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';
import projectsData from '@/../content/projects.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl;

  // Rutas estáticas principales
  const staticRoutes = [
    '',
    '/nosotros',
    '/servicios',
    '/proyectos',
    '/clientes',
    '/contacto',
    '/privacidad',
    '/terminos',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const projectRoutes = projectsData.map((project) => ({
    url: `${baseUrl}/proyectos/${project.id}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
