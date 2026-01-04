import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-heading font-bold text-primary-foreground text-sm">AI</span>
            </div>
            <span className="font-heading font-semibold text-lg">AI Doer</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              {t('nav.features')}
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              {t('nav.about')}
            </a>
            <a href="#download" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              {t('nav.download')}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
              className="gap-2 text-muted-foreground"
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? '中文' : 'EN'}
            </Button>
            <Button 
              size="sm" 
              className="hidden sm:flex"
              onClick={scrollToWaitlist}
            >
              {t('nav.waitlist')}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
