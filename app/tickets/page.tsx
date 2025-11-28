import type { Metadata } from 'next';
import Tickets from '@/components/Tickets';

const baseUrl = 'https://www.dominicanablockchainweek.com';

export const metadata: Metadata = {
  title: 'Tickets',
  description:
    'Compra tus tickets para Dominicana Blockchain Week 2026. El evento de blockchain más importante del Caribe. Diferentes opciones de tickets disponibles. Marzo 2026, Santo Domingo, República Dominicana.',
  keywords: [
    'tickets blockchain week',
    'entradas blockchain',
    'comprar tickets blockchain',
    'tickets crypto event',
    'entradas conferencia blockchain',
    'blockchain week tickets',
    'tickets Web3',
  ],
  openGraph: {
    title: 'Tickets | Dominicana Blockchain Week 2026',
    description:
      'Compra tus tickets para el evento de blockchain más importante del Caribe. Diferentes opciones disponibles.',
    url: `${baseUrl}/tickets`,
    images: [
      {
        url: `${baseUrl}/THE_LOGO_DBW2026.png`,
        width: 1600,
        height: 800,
        alt: 'Tickets Dominicana Blockchain Week 2026',
      },
    ],
  },
  twitter: {
    title: 'Tickets | Dominicana Blockchain Week 2026',
    description: 'Compra tus tickets para el evento de blockchain más importante del Caribe.',
  },
  alternates: {
    canonical: `${baseUrl}/tickets`,
  },
};

export default function TicketsPage() {
  // JSON-LD Structured Data for Ticket Offers
  const offersJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Dominicana Blockchain Week 2026',
    url: `${baseUrl}/tickets`,
    offers: [
      {
        '@type': 'Offer',
        name: 'Full Access',
        price: '500',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: `${baseUrl}/tickets`,
      },
      {
        '@type': 'Offer',
        name: 'Solo Expo',
        price: '50',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: `${baseUrl}/tickets`,
      },
      {
        '@type': 'Offer',
        name: 'Student',
        price: '50',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: `${baseUrl}/tickets`,
      },
      {
        '@type': 'Offer',
        name: 'Business',
        price: '3000',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: `${baseUrl}/tickets`,
      },
      {
        '@type': 'Offer',
        name: 'VIP',
        price: '8000',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: `${baseUrl}/tickets`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offersJsonLd) }}
      />
      <Tickets />
    </>
  );
}

