import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Monitor, Zap, Shield } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="max-w-xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
              {t('hero.title.1')}{' '}
              <span className="text-primary">{t('hero.title.2')}</span>
              <br />
              {t('hero.title.3')}
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
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

          {/* Right: Abstract execution flow diagram */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Browser representation */}
              <div className="bg-card border border-border rounded-lg shadow-lg overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-background rounded h-6 w-full max-w-xs mx-auto flex items-center justify-center px-3">
                      <span className="text-xs text-muted-foreground">your-workflow.app</span>
                    </div>
                  </div>
                </div>
                
                {/* Execution flow visualization */}
                <div className="p-8 min-h-[320px] bg-background">
                  <div className="space-y-4">
                    {/* Step 1 */}
                    <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg border border-border">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Monitor className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-primary/20 rounded w-3/4 mb-2" />
                        <div className="h-2 bg-muted-foreground/20 rounded w-1/2" />
                      </div>
                      <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                        <span className="text-accent-foreground text-xs">✓</span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center">
                      <div className="w-0.5 h-6 bg-border" />
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg border border-border">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-primary/20 rounded w-2/3 mb-2" />
                        <div className="h-2 bg-muted-foreground/20 rounded w-1/3" />
                      </div>
                      <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                        <span className="text-accent-foreground text-xs">✓</span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center">
                      <div className="w-0.5 h-6 bg-border" />
                    </div>

                    {/* Step 3 */}
                    <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg border border-primary/30">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-primary/30 rounded w-4/5 mb-2" />
                        <div className="h-2 bg-muted-foreground/20 rounded w-2/5" />
                      </div>
                      <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center animate-pulse">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
