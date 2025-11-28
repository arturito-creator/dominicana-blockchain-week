import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Speakers from '@/components/Speakers';
import AgendaPreview from '@/components/AgendaPreview';
import Venue from '@/components/Venue';
import Tickets from '@/components/Tickets';
import Sponsors from '@/components/Sponsors';
import Newsletter from '@/components/Newsletter';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';

const baseUrl = 'https://www.dominicanablockchainweek.com';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Dominicana Blockchain Week 2026 - El evento líder de blockchain, Web3, DeFi y cripto en el Caribe. Únete a nosotros en marzo 2026 en Santo Domingo, República Dominicana. Conoce a ponentes destacados, agenda completa, tickets y más.',
  keywords: [
    'blockchain week',
    'blockchain conference',
    'crypto event',
    'Web3 conference',
    'DeFi event',
    'Santo Domingo',
    'República Dominicana',
    'Caribbean blockchain',
    'Latin America crypto',
    'blockchain summit',
  ],
  openGraph: {
    title: 'Dominicana Blockchain Week 2026 | Home',
    description:
      'El evento líder de blockchain, Web3, DeFi y cripto en el Caribe. Marzo 2026, Santo Domingo, República Dominicana.',
    url: baseUrl,
    images: [
      {
        url: `${baseUrl}/THE_LOGO_DBW2026.png`,
        width: 1600,
        height: 800,
        alt: 'Dominicana Blockchain Week 2026',
      },
    ],
  },
  twitter: {
    title: 'Dominicana Blockchain Week 2026',
    description: 'El evento líder de blockchain en el Caribe. Marzo 2026, Santo Domingo.',
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function Home() {
  // JSON-LD Structured Data for Event
  const eventJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Dominicana Blockchain Week 2026',
    description:
      'El evento líder de blockchain, Web3, DeFi y cripto en el Caribe. Únete a nosotros en marzo 2026 en Santo Domingo, República Dominicana.',
    startDate: '2026-03-01',
    endDate: '2026-03-07',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'Santo Domingo, República Dominicana',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Santo Domingo',
        addressCountry: 'DO',
      },
    },
    image: `${baseUrl}/THE_LOGO_DBW2026.png`,
    organizer: {
      '@type': 'Organization',
      name: 'Dominicana Blockchain Week',
      url: baseUrl,
    },
    offers: {
      '@type': 'Offer',
      url: `${baseUrl}/tickets`,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  };

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Dominicana Blockchain Week',
    url: baseUrl,
    logo: `${baseUrl}/THE_LOGO_DBW2026.png`,
    sameAs: [],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Hero />
      <About />
      <Speakers />
      <AgendaPreview />
      <Venue />
      <Tickets />
      <Sponsors />
      <Newsletter />
      <FAQ />
      <Contact />
    </>
  );
}

