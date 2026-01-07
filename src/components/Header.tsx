import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import logo from '@/assets/logo.png';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past Hero section (approximately viewport height)
      const heroHeight = window.innerHeight * 0.85;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-background/95 border-b border-border' 
          : 'bg-transparent border-b border-white/10'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="AI Doer" className="w-8 h-8" />
            <span className={`font-heading font-semibold text-lg transition-colors duration-500 ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}>
              AI Doer
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#features" 
              className={`transition-colors duration-500 text-sm font-medium ${
                isScrolled 
                  ? 'text-muted-foreground hover:text-foreground' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {t('nav.features')}
            </a>
            <a 
              href="#about" 
              className={`transition-colors duration-500 text-sm font-medium ${
                isScrolled 
                  ? 'text-muted-foreground hover:text-foreground' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {t('nav.about')}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')} 
              className={`gap-2 transition-colors duration-500 ${
                isScrolled ? 'text-muted-foreground' : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? '中文' : 'EN'}
            </Button>
            <Button 
              size="sm" 
              className={`hidden sm:flex transition-all duration-500 ${
                isScrolled ? '' : 'bg-white/10 hover:bg-white/20 border border-white/20'
              }`}
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