import { useLanguage } from '@/contexts/LanguageContext';
import { Check, Users } from 'lucide-react';

const ForWhoSection = () => {
  const { t } = useLanguage();

  const items = [
    t('forwho.item1'),
    t('forwho.item2'),
    t('forwho.item3'),
    t('forwho.item4'),
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4">
            {t('forwho.title')}
          </h2>
          <p className="text-xl text-primary text-center mb-16 font-medium">
            {t('forwho.subtitle')}
          </p>

          <div className="glass rounded-2xl p-8 md:p-12 gradient-border">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Users className="w-7 h-7 text-primary-foreground" />
              </div>
              <p className="text-lg text-muted-foreground">{t('forwho.desc')}</p>
            </div>

            <div className="space-y-4 mb-8">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-xl font-heading font-semibold text-center text-gradient">
                {t('forwho.think')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
