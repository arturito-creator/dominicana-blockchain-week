import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingTicketButton from '@/components/FloatingTicketButton';
import { LanguageProvider } from '@/contexts/LanguageContext';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const baseUrl = 'https://www.dominicanablockchainweek.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Dominicana Blockchain Week 2026 | Premier Blockchain Event in the Caribbean',
    template: '%s | Dominicana Blockchain Week 2026',
  },
  description:
    'Join the premier blockchain, Web3, DeFi, and crypto event in the Caribbean. Explore regulation, innovation, and the future of decentralized technology in Latin America. March 2026, Santo Domingo, Dominican Republic.',
  keywords: [
    'blockchain',
    'crypto',
    'DeFi',
    'Web3',
    'Dominican Republic',
    'LatAm',
    'blockchain conference',
    'cryptocurrency event',
    'blockchain week',
    'Santo Domingo',
    'Caribbean blockchain',
    'Latin America crypto',
    'blockchain regulation',
    'crypto conference',
    'blockchain summit',
  ],
  authors: [{ name: 'Dominicana Blockchain Week' }],
  creator: 'Dominicana Blockchain Week',
  publisher: 'Dominicana Blockchain Week',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    url: baseUrl,
    siteName: 'Dominicana Blockchain Week 2026',
    title: 'Dominicana Blockchain Week 2026 | Premier Blockchain Event in the Caribbean',
    description:
      'Join the premier blockchain, Web3, DeFi, and crypto event in the Caribbean. March 2026, Santo Domingo, Dominican Republic.',
    images: [
      {
        url: `${baseUrl}/THE_LOGO_DBW2026.png`,
        width: 1600,
        height: 800,
        alt: 'Dominicana Blockchain Week 2026 Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dominicana Blockchain Week 2026',
    description:
      'Join the premier blockchain, Web3, DeFi, and crypto event in the Caribbean. March 2026, Santo Domingo.',
    images: [`${baseUrl}/THE_LOGO_DBW2026.png`],
  },
  alternates: {
    canonical: baseUrl,
  },
  category: 'Technology',
  classification: 'Blockchain Conference',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={dmSans.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Just+Me+Again+Down+Here&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative min-h-screen font-sans">
        <LanguageProvider>
          {/* Animated Background */}
          <AnimatedBackground />

          {/* Content with gradient overlay for readability */}
          <div className="relative z-10 min-h-screen flex flex-col">
            {/* Gradient overlay to ensure content readability */}
            <div className="fixed inset-0 bg-gradient-to-b from-dbw-blue-dark via-dbw-blue-dark/95 to-dbw-blue-default pointer-events-none z-[1]" />

            {/* Actual content */}
            <div className="relative z-10">
              <Navbar />
              <main>{children}</main>
              <Footer />
              <FloatingTicketButton />
            </div>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}

