import Header from '@/components/Header';
import Hero from '@/components/Hero';
import KeyFeatures from '@/components/KeyFeatures';
import VaishnaviSections from '@/components/VaishnaviSections';
import Footer from '@/components/Footer';
import FloatingCTA, { ContactFormProvider } from '@/components/FloatingCTA';
import DriveImage from '@/components/DriveImage';

export default function Home() {
  return (
    <ContactFormProvider>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <KeyFeatures />
        <DriveImage />
        <VaishnaviSections />
        <Footer />
        <FloatingCTA />
      </main>
    </ContactFormProvider>
  );
}
