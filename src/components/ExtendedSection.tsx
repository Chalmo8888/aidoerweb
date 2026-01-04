import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, Video, Share } from 'lucide-react';

const ExtendedSection = () => {
  const { t } = useLanguage();

  const capabilities = [
    {
      icon: Globe,
      title: t('ext1.title'),
      desc: t('ext1.desc'),
    },
    {
      icon: Video,
      title: t('ext2.title'),
      desc: t('ext2.desc'),
    },
    {
      icon: Share,
      title: t('ext3.title'),
      desc: t('ext3.desc'),
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            {t('extended.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('extended.subtitle')}
          </p>
        </div>

        {/* Engine badge */}
        <p className="text-center text-sm text-muted-foreground mb-12">
          {t('extended.engine')}
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                <cap.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-3">{cap.title}</h3>
              <p className="text-muted-foreground text-sm">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtendedSection;