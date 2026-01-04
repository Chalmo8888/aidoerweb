import { useLanguage } from '@/contexts/LanguageContext';
import { MessageSquare, Repeat, Layers, Brain, Check } from 'lucide-react';

const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: MessageSquare,
      title: t('feature1.title'),
      desc: t('feature1.desc'),
      items: [t('feature1.item1'), t('feature1.item2'), t('feature1.item3')],
      note: t('feature1.best'),
    },
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
    <section id="features" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            {t('features.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover-lift"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-1">{feature.title}</h3>
                  {feature.subtitle && (
                    <span className="text-sm text-primary">{feature.subtitle}</span>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground mb-4 text-sm">{feature.desc}</p>

              <ul className="space-y-2 mb-4">
                {feature.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
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
