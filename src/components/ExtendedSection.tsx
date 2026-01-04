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
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            {t('extended.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('extended.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 text-center group hover:bg-secondary/30 transition-all duration-300 gradient-border"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <cap.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-4">{cap.title}</h3>
              <p className="text-muted-foreground">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtendedSection;
