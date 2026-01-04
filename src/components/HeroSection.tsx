import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
            {t('hero.title.1')}{' '}
            <span className="text-primary">{t('hero.title.2')}</span>
            <br />
            {t('hero.title.3')}
          </h1>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="group" onClick={scrollToWaitlist}>
              {t('hero.cta')}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#features">{t('hero.learnMore')}</a>
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-4">
            {t('hero.cta.sub')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
