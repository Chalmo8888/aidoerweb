import { useLanguage } from '@/contexts/LanguageContext';
import { Check, X, ArrowRight, Monitor } from 'lucide-react';

const DifferentSection = () => {
  const { t } = useLanguage();

  const dontBelieve = [
    t('different.dont1'),
    t('different.dont2'),
    t('different.dont3'),
  ];

  const believe = [
    t('different.believe1'),
    t('different.believe2'),
    t('different.believe3'),
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      {/* Geometric lines decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 geometric-lines opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            <span className="text-gradient">{t('different.title')}</span>
          </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('different.subtitle')}
            </p>
          </div>

          {/* Two Column Comparison */}
          <div className="grid md:grid-cols-2 gap-8 relative">
            {/* Animated Arrow indicator - positioned in the gap between cards */}
            <div className="hidden md:flex absolute left-[calc(50%-1rem)] top-[55%] -translate-y-1/2 z-20">
              <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow-lg animate-wiggle">
                <ArrowRight className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>

            {/* Left: What we don't believe */}
            <div className="bg-secondary/30 border-2 border-destructive/30 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent" />
              <div className="relative z-10">
                <h3 className="font-heading text-xl font-semibold mb-8 text-muted-foreground flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-destructive/20 flex items-center justify-center">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  {t('different.dontTitle')}
                </h3>
                <div className="space-y-5">
                  {dontBelieve.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-4 p-4 rounded-xl bg-card/50 hover:bg-card transition-colors border border-destructive/10"
                    >
                      <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-destructive" />
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: What we believe */}
            <div className="bg-primary/5 border-2 border-primary/30 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5" />
              <div className="relative z-10">
                <h3 className="font-heading text-xl font-semibold mb-8 text-foreground flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  {t('different.believeTitle')}
                </h3>
                <div className="space-y-5">
                  {believe.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-4 p-4 rounded-xl bg-card/50 hover:bg-card transition-colors border border-primary/10"
                    >
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <p className="text-foreground leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom statement */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-3 glass-strong px-8 py-4 rounded-2xl border border-primary/20">
              <Monitor className="w-5 h-5 text-primary" />
              <p className="text-lg text-muted-foreground">
                {t('different.statement')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentSection;