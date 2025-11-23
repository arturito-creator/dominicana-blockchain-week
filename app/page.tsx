import Hero from '@/components/Hero';
import About from '@/components/About';
import Speakers from '@/components/Speakers';
import Agenda from '@/components/Agenda';
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
      <Agenda />
      <Venue />
      <Tickets />
      <Sponsors />
      <Newsletter />
      <FAQ />
      <Contact />
    </>
  );
}

