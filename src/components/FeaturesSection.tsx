import { useLanguage } from '@/contexts/LanguageContext';
import { Repeat, Layers, Brain, Check, Sparkles } from 'lucide-react';

const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Repeat,
      title: t('feature2.title'),
      subtitle: t('feature2.subtitle'),
      desc: t('feature2.desc'),
      items: [t('feature2.item1'), t('feature2.item2'), t('feature2.item3')],
      note: t('feature2.note'),
    },
    {
      icon: Layers,
      title: t('feature3.title'),
      desc: t('feature3.desc'),
      items: [t('feature3.item1'), t('feature3.item2'), t('feature3.item3'), t('feature3.item4')],
      note: t('feature3.note'),
    },
    {
      icon: Brain,
      title: t('feature4.title'),
      desc: t('feature4.desc'),
      items: [t('feature4.item1'), t('feature4.item2'), t('feature4.item3')],
      note: t('feature4.note'),
    },
  ];

  return (
    <section id="features" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/50 to-transparent" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Core Features</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            {t('features.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 gradient-border group hover:bg-secondary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-1">{feature.title}</h3>
                  {feature.subtitle && (
                    <span className="text-sm text-primary font-medium">{feature.subtitle}</span>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground mb-6">{feature.desc}</p>

              <ul className="space-y-3 mb-6">
                {feature.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm text-primary font-medium pt-4 border-t border-border">
                {feature.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
