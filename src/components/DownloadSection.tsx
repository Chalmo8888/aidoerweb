import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Download, Monitor, Smartphone } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const DownloadSection = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  return (
    <section id="download" className="py-24 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            {t('download.title')}
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            {t('download.subtitle')}
          </p>

          {isMobile ? (
            // Mobile: Show Android QR code
            <div className="glass rounded-2xl p-8 max-w-sm mx-auto gradient-border">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Smartphone className="w-8 h-8 text-primary" />
                <span className="text-xl font-medium">{t('download.android')}</span>
              </div>
              <div className="bg-white p-4 rounded-xl inline-block mb-6">
                {/* QR Code placeholder - you would replace this with actual QR code */}
                <div className="w-48 h-48 bg-gradient-to-br from-muted to-muted-foreground/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="grid grid-cols-5 gap-1 p-2">
                      {Array.from({ length: 25 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-6 h-6 rounded-sm ${
                            Math.random() > 0.5 ? 'bg-foreground' : 'bg-background'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">{t('download.scanQR')}</p>
            </div>
          ) : (
            // Desktop: Show Windows and Mac download buttons
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                variant="hero"
                size="xl"
                className="group min-w-[200px]"
                onClick={() => window.open('#', '_blank')}
              >
                <Monitor className="w-5 h-5 mr-2" />
                {t('download.windows')}
                <Download className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <Button
                variant="hero"
                size="xl"
                className="group min-w-[200px]"
                onClick={() => window.open('#', '_blank')}
              >
                <Monitor className="w-5 h-5 mr-2" />
                {t('download.mac')}
                <Download className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>
          )}

          {/* Show alternative options */}
          <div className="mt-12 glass rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-muted-foreground text-sm">
              {isMobile ? t('download.pcNote') : t('download.mobileNote')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
