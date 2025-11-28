import type { Metadata } from 'next';
import Speakers from '@/components/Speakers';

const baseUrl = 'https://www.dominicanablockchainweek.com';

export const metadata: Metadata = {
  title: 'Ponentes',
  description:
    'Conoce a los ponentes destacados de Dominicana Blockchain Week 2026. Líderes de la industria blockchain, Web3, DeFi y cripto compartirán sus conocimientos y experiencias. Marzo 2026, Santo Domingo.',
  keywords: [
    'ponentes blockchain',
    'speakers blockchain',
    'expertos crypto',
    'conferencistas blockchain',
    'líderes Web3',
    'expertos DeFi',
    'blockchain speakers',
    'crypto experts',
  ],
  openGraph: {
    title: 'Ponentes | Dominicana Blockchain Week 2026',
    description:
      'Conoce a los ponentes destacados del evento de blockchain más importante del Caribe.',
    url: `${baseUrl}/ponentes`,
    images: [
      {
        url: `${baseUrl}/THE_LOGO_DBW2026.png`,
        width: 1600,
        height: 800,
        alt: 'Ponentes Dominicana Blockchain Week 2026',
      },
    ],
  },
  twitter: {
    title: 'Ponentes | Dominicana Blockchain Week 2026',
    description: 'Conoce a los ponentes destacados del evento de blockchain más importante del Caribe.',
  },
  alternates: {
    canonical: `${baseUrl}/ponentes`,
  },
};

// Speaker data for JSON-LD
const speakersData = [
  { name: 'Luis Abinader', company: 'Gobierno República Dominicana' },
  { name: 'Carolina Mejía', company: 'Santo Domingo, República Dominicana' },
  { name: 'Antonio Gómez', company: 'Barcelona, República Dominicana' },
  { name: 'Mance Harmon', company: 'Hedera' },
  { name: 'Montse Guàrdia Güell', company: 'IDEADED' },
  { name: 'Guillermo Gómez', company: 'Banco Central República Dominicana' },
  { name: 'Gilbert Verdian', company: 'Quant' },
  { name: 'Charles Hoskinson', company: 'Cardano' },
  { name: 'Paolo Ardoino', company: 'Tether' },
];

export default function PonentesPage() {
  // JSON-LD Structured Data for Speakers Collection
  const speakersJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Ponentes de Dominicana Blockchain Week 2026',
    description: 'Lista de ponentes destacados del evento de blockchain más importante del Caribe',
    itemListElement: speakersData.map((speaker, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Person',
        name: speaker.name,
        affiliation: {
          '@type': 'Organization',
          name: speaker.company,
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakersJsonLd) }}
      />
      <Speakers showSearch={true} />
    </>
  );
}

