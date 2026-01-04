import { useLanguage } from '@/contexts/LanguageContext';
import { Monitor, Target, Shield, DollarSign, Eye, Check } from 'lucide-react';

const LocalSection = () => {
  const { t } = useLanguage();

  const benefits = [
    { icon: Target, text: t('local.item1') },
    { icon: Shield, text: t('local.item2') },
    { icon: DollarSign, text: t('local.item3') },
    { icon: Eye, text: t('local.item4') },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-primary mb-6 animate-float">
              <Monitor className="w-10 h-10 text-primary-foreground" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              {t('local.title')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('local.subtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 text-center group hover:bg-secondary/30 transition-all"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-medium">{benefit.text}</p>
              </div>
            ))}
          </div>

          <div className="glass rounded-2xl p-8 text-center gradient-border">
            <div className="flex items-center justify-center gap-3">
              <Check className="w-6 h-6 text-primary" />
              <p className="text-xl font-heading font-semibold text-gradient">
                {t('local.note')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalSection;
