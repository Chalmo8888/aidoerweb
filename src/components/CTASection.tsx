import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

const CTASection = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError(t('email.error.empty'));
      return;
    }

    if (!validateEmail(email)) {
      setError(t('email.error.invalid'));
      return;
    }

    toast.success(t('email.success'));
    setEmail('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) {
      setError('');
    }
  };

  return (
    <section id="waitlist" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob absolute w-[600px] h-[600px] bg-primary/10 -top-40 left-1/2 -translate-x-1/2" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 pattern-dots opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Main card */}
          <div className="bg-card rounded-xl shadow-card relative overflow-hidden">
            {/* Top gradient title bar */}
            <div className="h-16 bg-gradient-primary flex items-center justify-center">
              <h2 className="font-heading text-xl md:text-2xl font-bold text-primary-foreground">
                {t('cta.title')}
              </h2>
            </div>
            
            <div className="p-10 md:p-14 text-center">
              <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                {t('cta.desc')}
              </p>

              {/* Email form */}
              <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${error ? 'text-destructive' : 'text-muted-foreground'}`} />
                    <input
                      type="text"
                      value={email}
                      onChange={handleInputChange}
                      placeholder={t('email.placeholder')}
                      className={`w-full h-14 pl-12 pr-4 rounded-lg bg-background border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all shadow-sm ${
                        error 
                          ? 'border-destructive focus:ring-destructive/30 focus:border-destructive' 
                          : 'border-border focus:ring-primary focus:border-primary'
                      }`}
                      style={{ paddingLeft: '44px' }}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="group h-14 px-8 bg-gradient-primary hover:opacity-95 transition-all duration-300 shadow-glow hover:shadow-glow-lg hover:px-10 text-base rounded-lg"
                  >
                    {t('cta.button')}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                {/* Custom error message */}
                {error && (
                  <div className="flex items-center gap-2 mt-3 text-left animate-fade-in">
                    <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0" />
                    <span className="text-sm text-destructive">{error}</span>
                  </div>
                )}
              </form>

              <p className="text-sm text-muted-foreground text-right">
                {t('cta.note')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;