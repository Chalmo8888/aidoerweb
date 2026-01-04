import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight text-foreground">
              {t('hero.title.1')}
              <br />
              {t('hero.title.2')}
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button size="lg" className="group" onClick={scrollToWaitlist}>
                {t('hero.cta')}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4">
              {t('hero.cta.sub')}
            </p>
          </div>

          {/* Right: Execution Flow Diagram */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              {/* Flow Diagram */}
              <div className="space-y-4">
                {/* Step 1: User Input */}
                <div className="bg-card border border-border rounded-lg p-4 text-center">
                  <p className="text-sm text-muted-foreground mb-1">{t('hero.flow.step1.label')}</p>
                  <p className="font-medium text-foreground">{t('hero.flow.step1.text')}</p>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <ArrowDown className="w-5 h-5 text-muted-foreground" />
                </div>

                {/* Step 2: AI Doer */}
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
                  <p className="text-sm text-primary mb-1">{t('hero.flow.step2.label')}</p>
                  <p className="font-medium text-foreground">{t('hero.flow.step2.text')}</p>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <ArrowDown className="w-5 h-5 text-muted-foreground" />
                </div>

                {/* Step 3: Browser Execution */}
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="text-sm text-muted-foreground text-center mb-3">{t('hero.flow.step3.label')}</p>
                  <div className="flex items-center justify-center gap-2 flex-wrap">
                    <span className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-md">{t('hero.flow.action1')}</span>
                    <span className="text-muted-foreground">→</span>
                    <span className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-md">{t('hero.flow.action2')}</span>
                    <span className="text-muted-foreground">→</span>
                    <span className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-md">{t('hero.flow.action3')}</span>
                    <span className="text-muted-foreground">→</span>
                    <span className="px-3 py-1.5 bg-accent/20 text-accent text-sm rounded-md font-medium">{t('hero.flow.action4')}</span>
                  </div>
                </div>

                {/* Status indicator */}
                <p className="text-center text-sm text-muted-foreground">
                  {t('hero.flow.status')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;