import type { Metadata } from 'next';

const baseUrl = 'https://www.dominicanablockchainweek.com';

export const metadata: Metadata = {
  title: 'Mapa del Sitio',
  description:
    'Mapa del sitio de Dominicana Blockchain Week 2026. Navega fácilmente por todas las secciones: agenda, ponentes, tickets, contacto y más.',
  keywords: [
    'mapa del sitio',
    'sitemap',
    'navegación',
    'enlaces blockchain week',
    'estructura sitio',
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Mapa del Sitio | Dominicana Blockchain Week 2026',
    description: 'Navega fácilmente por todas las secciones del sitio web.',
    url: `${baseUrl}/mapa-del-sitio`,
  },
  alternates: {
    canonical: `${baseUrl}/mapa-del-sitio`,
  },
};

export default function MapaDelSitioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

