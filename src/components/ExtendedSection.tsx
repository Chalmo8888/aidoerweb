import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, Video, Share } from 'lucide-react';

const ExtendedSection = () => {
  const { t } = useLanguage();
  
  const capabilities = [
    { icon: Globe, title: t('ext1.title'), desc: t('ext1.desc') },
    { icon: Video, title: t('ext2.title'), desc: t('ext2.desc') },
    { icon: Share, title: t('ext3.title'), desc: t('ext3.desc') }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-background">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Title - lighter weight */}
          <div className="text-center mb-4">
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-foreground">
              {t('extended.title')}
            </h2>
          </div>
          
          <p className="text-center text-sm text-muted-foreground mb-10">
            {t('extended.engine')}
          </p>

          {/* Capabilities - minimal, one line each */}
          <div className="space-y-4">
            {capabilities.map((cap, index) => (
              <div 
                key={index} 
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <cap.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtendedSection;