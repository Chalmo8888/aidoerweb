import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Download, Monitor, Smartphone } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const DownloadSection = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  return (
    <section id="download" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            {t('download.title')}
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            {t('download.subtitle')}
          </p>

          {isMobile ? (
            // Mobile: Show Android QR code
            <div className="bg-card border border-border rounded-lg p-8 max-w-sm mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Smartphone className="w-6 h-6 text-primary" />
                <span className="text-lg font-medium">{t('download.android')}</span>
              </div>
              <div className="bg-white p-4 rounded-lg inline-block mb-6">
                {/* QR Code placeholder */}
                <div className="w-40 h-40 bg-muted rounded flex items-center justify-center">
                  <div className="grid grid-cols-5 gap-1 p-2">
                    {Array.from({ length: 25 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-5 h-5 rounded-sm ${
                          Math.random() > 0.5 ? 'bg-foreground' : 'bg-background'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{t('download.scanQR')}</p>
            </div>
          ) : (
            // Desktop: Show Windows and Mac download buttons
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="min-w-[180px]"
                onClick={() => window.open('#', '_blank')}
              >
                <Monitor className="w-4 h-4 mr-2" />
                {t('download.windows')}
                <Download className="w-4 h-4 ml-2" />
              </Button>
              
              <Button
                size="lg"
                className="min-w-[180px]"
                onClick={() => window.open('#', '_blank')}
              >
                <Monitor className="w-4 h-4 mr-2" />
                {t('download.mac')}
                <Download className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}

          <p className="text-sm text-muted-foreground mt-8">
            {isMobile ? t('download.pcNote') : t('download.mobileNote')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
