import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline */}
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {t('hero.title.1')}{' '}
            <span className="text-gradient glow-text">{t('hero.title.2')}</span>
            <br />
            {t('hero.title.3')}
          </h1>

          {/* Description */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {t('hero.description')}
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button 
              variant="hero" 
              size="xl" 
              className="group"
              onClick={() => {
                const emailInput = document.getElementById('waitlist-email');
                if (emailInput) {
                  emailInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  setTimeout(() => emailInput.focus(), 500);
                }
              }}
            >
              {t('hero.cta')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {t('hero.cta.sub')}
          </p>

          {/* Browser mockup */}
          <div className="mt-16 relative animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <div className="glass rounded-2xl p-1 gradient-border">
              <div className="bg-card rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-muted rounded-md h-6 w-full max-w-md mx-auto flex items-center justify-center">
                      <span className="text-xs text-muted-foreground">ai-doer.app</span>
                    </div>
                  </div>
                </div>
                <div className="p-8 min-h-[300px] flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-primary flex items-center justify-center animate-float">
                      <span className="font-heading font-bold text-2xl text-primary-foreground">AI</span>
                    </div>
                    <p className="text-muted-foreground">
                      {t('different.describe')}
                    </p>
                    <div className="flex items-center justify-center gap-2 text-primary">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="text-sm font-medium">Processing...</span>
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
