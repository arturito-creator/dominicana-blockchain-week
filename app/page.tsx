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

export default function Home() {
  return (
    <>
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

