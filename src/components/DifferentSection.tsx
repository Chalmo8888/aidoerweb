import { useLanguage } from '@/contexts/LanguageContext';

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
    <section className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
            {t('different.title')}
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            {t('different.subtitle')}
          </p>

          {/* Two Column Comparison */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: What we don't believe */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading text-lg font-semibold mb-6 text-muted-foreground">
                {t('different.dontTitle')}
              </h3>
              <div className="space-y-4">
                {dontBelieve.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-destructive font-medium mt-0.5">✗</span>
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: What we believe */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h3 className="font-heading text-lg font-semibold mb-6 text-foreground">
                {t('different.believeTitle')}
              </h3>
              <div className="space-y-4">
                {believe.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-accent font-medium mt-0.5">✓</span>
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom statement */}
          <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
            {t('different.statement')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DifferentSection;