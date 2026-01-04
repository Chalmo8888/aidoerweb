import { useLanguage } from '@/contexts/LanguageContext';
import { X, Check } from 'lucide-react';

const DifferentSection = () => {
  const { t } = useLanguage();

  const nots = [
    t('different.no1'),
    t('different.no2'),
    t('different.no3'),
  ];

  return (
    <section className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
            {t('different.title')}
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            {t('different.subtitle')}
          </p>

          {/* What it's NOT */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {nots.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg"
              >
                <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <X className="w-4 h-4 text-destructive" />
                </div>
                <p className="text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>

          {/* How it works */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                <Check className="w-4 h-4 text-accent" />
              </div>
              <p className="font-medium text-foreground">{t('different.how')}</p>
            </div>
            <p className="text-muted-foreground ml-11">
              {t('different.execute')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentSection;
