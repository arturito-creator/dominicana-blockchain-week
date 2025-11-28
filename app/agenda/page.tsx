import type { Metadata } from 'next';
import Agenda from '@/components/Agenda';

const baseUrl = 'https://www.dominicanablockchainweek.com';

export const metadata: Metadata = {
  title: 'Agenda',
  description:
    'Agenda completa de Dominicana Blockchain Week 2026. Descubre todas las charlas, paneles, workshops y actividades del evento de blockchain más importante del Caribe. Marzo 2026, Santo Domingo.',
  keywords: [
    'agenda blockchain week',
    'programa blockchain',
    'charlas blockchain',
    'paneles crypto',
    'workshops blockchain',
    'evento blockchain agenda',
    'conferencia blockchain programa',
  ],
  openGraph: {
    title: 'Agenda | Dominicana Blockchain Week 2026',
    description:
      'Agenda completa del evento de blockchain más importante del Caribe. Charlas, paneles, workshops y más.',
    url: `${baseUrl}/agenda`,
    images: [
      {
        url: `${baseUrl}/THE_LOGO_DBW2026.png`,
        width: 1600,
        height: 800,
        alt: 'Agenda Dominicana Blockchain Week 2026',
      },
    ],
  },
  twitter: {
    title: 'Agenda | Dominicana Blockchain Week 2026',
    description: 'Agenda completa del evento de blockchain más importante del Caribe.',
  },
  alternates: {
    canonical: `${baseUrl}/agenda`,
  },
};

export default function AgendaPage() {
  return <Agenda />;
}

