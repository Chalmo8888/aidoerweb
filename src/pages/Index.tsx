import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import DifferentSection from '@/components/DifferentSection';
import ForWhoSection from '@/components/ForWhoSection';
import FeaturesSection from '@/components/FeaturesSection';
import ExtendedSection from '@/components/ExtendedSection';
import LocalSection from '@/components/LocalSection';
import DownloadSection from '@/components/DownloadSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <ProblemSection />
          <DifferentSection />
          <ForWhoSection />
          <FeaturesSection />
          <ExtendedSection />
          <LocalSection />
          <DownloadSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
