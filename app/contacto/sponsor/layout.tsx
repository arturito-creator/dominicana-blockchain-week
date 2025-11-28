import type { Metadata } from 'next';

const baseUrl = 'https://www.dominicanablockchainweek.com';

export const metadata: Metadata = {
  title: 'Aplicar como Sponsor',
  description:
    'Conviértete en sponsor de Dominicana Blockchain Week 2026. Únete a las empresas líderes que apoyan el evento de blockchain más importante del Caribe. Oportunidades de patrocinio disponibles. Marzo 2026, Santo Domingo.',
  keywords: [
    'sponsor blockchain',
    'patrocinar blockchain event',
    'sponsorship opportunities',
    'ser sponsor blockchain',
    'patrocinio crypto event',
    'blockchain sponsorship',
    'sponsor Web3 event',
  ],
  openGraph: {
    title: 'Aplicar como Sponsor | Dominicana Blockchain Week 2026',
    description:
      'Conviértete en sponsor del evento de blockchain más importante del Caribe.',
    url: `${baseUrl}/contacto/sponsor`,
    images: [
      {
        url: `${baseUrl}/THE_LOGO_DBW2026.png`,
        width: 1600,
        height: 800,
        alt: 'Aplicar como Sponsor - Dominicana Blockchain Week 2026',
      },
    ],
  },
  twitter: {
    title: 'Aplicar como Sponsor | Dominicana Blockchain Week 2026',
    description: 'Conviértete en sponsor del evento de blockchain más importante del Caribe.',
  },
  alternates: {
    canonical: `${baseUrl}/contacto/sponsor`,
  },
};

export default function ContactoSponsorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

