import type { Metadata } from 'next';

const baseUrl = 'https://www.dominicanablockchainweek.com';

export const metadata: Metadata = {
  title: 'Aplicar como Ponente',
  description:
    'Aplica para ser ponente en Dominicana Blockchain Week 2026. Comparte tus conocimientos sobre blockchain, Web3, DeFi y cripto con la comunidad del Caribe. Marzo 2026, Santo Domingo.',
  keywords: [
    'aplicar ponente blockchain',
    'speaker application',
    'ser ponente blockchain',
    'aplicar conferencista',
    'call for speakers',
    'blockchain speaker application',
    'aplicar ponente crypto',
  ],
  openGraph: {
    title: 'Aplicar como Ponente | Dominicana Blockchain Week 2026',
    description:
      'Aplica para ser ponente en el evento de blockchain más importante del Caribe.',
    url: `${baseUrl}/contacto/ponente`,
    images: [
      {
        url: `${baseUrl}/THE_LOGO_DBW2026.png`,
        width: 1600,
        height: 800,
        alt: 'Aplicar como Ponente - Dominicana Blockchain Week 2026',
      },
    ],
  },
  twitter: {
    title: 'Aplicar como Ponente | Dominicana Blockchain Week 2026',
    description: 'Aplica para ser ponente en el evento de blockchain más importante del Caribe.',
  },
  alternates: {
    canonical: `${baseUrl}/contacto/ponente`,
  },
};

export default function ContactoPonenteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

