import type { Metadata } from 'next';
import Contact from '@/components/Contact';

const baseUrl = 'https://www.dominicanablockchainweek.com';

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Contacta con el equipo de Dominicana Blockchain Week 2026. ¿Tienes preguntas sobre el evento? ¿Quieres ser sponsor o ponente? Contáctanos. Marzo 2026, Santo Domingo.',
  keywords: [
    'contacto blockchain week',
    'contactar blockchain event',
    'sponsor blockchain',
    'ponente blockchain',
    'aplicar sponsor',
    'aplicar ponente',
    'contacto crypto event',
  ],
  openGraph: {
    title: 'Contacto | Dominicana Blockchain Week 2026',
    description:
      'Contacta con el equipo de Dominicana Blockchain Week. ¿Preguntas? ¿Quieres ser sponsor o ponente?',
    url: `${baseUrl}/contacto`,
    images: [
      {
        url: `${baseUrl}/THE_LOGO_DBW2026.png`,
        width: 1600,
        height: 800,
        alt: 'Contacto Dominicana Blockchain Week 2026',
      },
    ],
  },
  twitter: {
    title: 'Contacto | Dominicana Blockchain Week 2026',
    description: 'Contacta con el equipo de Dominicana Blockchain Week.',
  },
  alternates: {
    canonical: `${baseUrl}/contacto`,
  },
};

export default function ContactoPage() {
  return <Contact />;
}

