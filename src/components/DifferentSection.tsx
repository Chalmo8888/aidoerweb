import { useLanguage } from '@/contexts/LanguageContext';
import { X, Check, Monitor, MessageSquare, Zap } from 'lucide-react';

const DifferentSection = () => {
  const { t } = useLanguage();

  const nots = [
    t('different.no1'),
    t('different.no2'),
    t('different.no3'),
  ];

  return (
    <section className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4">
            {t('different.title')}
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16">
            {t('different.subtitle')}
          </p>

          {/* What it's NOT */}
          <div className="grid md:grid-cols-3 gap-4 mb-16">
            {nots.map((item, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 text-center group"
              >
                <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-destructive/10 flex items-center justify-center">
                  <X className="w-5 h-5 text-destructive" />
                </div>
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>

          {/* How it works */}
          <div className="glass rounded-2xl p-8 gradient-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <p className="text-lg font-medium">{t('different.how')}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium mb-1">Step 1</p>
                  <p className="text-muted-foreground">{t('different.describe')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium mb-1">Step 2</p>
                  <p className="text-muted-foreground">{t('different.execute')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentSection;
