import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dominicana Blockchain Week 2026 | Premier Blockchain Event in the Caribbean',
  description:
    'Join the premier blockchain, Web3, DeFi, and crypto event in the Caribbean. Explore regulation, innovation, and the future of decentralized technology in Latin America.',
  keywords: [
    'blockchain',
    'crypto',
    'DeFi',
    'Web3',
    'Dominican Republic',
    'LatAm',
    'blockchain conference',
    'cryptocurrency event',
  ],
  authors: [{ name: 'Dominicana Blockchain Week' }],
  openGraph: {
    title: 'Dominicana Blockchain Week 2026',
    description:
      'Join the premier blockchain, Web3, DeFi, and crypto event in the Caribbean.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dominicana Blockchain Week 2026',
    description:
      'Join the premier blockchain, Web3, DeFi, and crypto event in the Caribbean.',
  },
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
            </div>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}

