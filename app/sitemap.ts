import { MetadataRoute } from 'next';

const baseUrl = 'https://www.dominicanablockchainweek.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/agenda',
    '/ponentes',
    '/tickets',
    '/contacto',
    '/contacto/ponente',
    '/contacto/sponsor',
    '/mapa-del-sitio',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route === '/tickets' || route === '/agenda' ? 0.9 : 0.8,
  }));
}

