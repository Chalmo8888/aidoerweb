import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="about" className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div className="flex items-center gap-3">
              <img src={logo} alt="AI Doer" className="w-10 h-10" />
              <span className="font-heading font-bold text-2xl">AI Doer</span>
            </div>

            <div className="text-center md:text-right max-w-md">
              <h4 className="font-heading font-semibold mb-2">{t('footer.about')}</h4>
              <p className="text-muted-foreground text-sm">
                {t('footer.desc')}
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
