import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

const CTASection = () => {
  const { language, t } = useLanguage();
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

    // Custom styled toast with AI theme
    toast.custom((toastId) => (
      <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-ai/30 shadow-glow-ai backdrop-blur-sm min-w-[320px]">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center">
          <CheckCircle2 className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-4 h-4 text-ai" />
            <span className="font-semibold text-white">
              {language === 'zh' ? '申请成功' : 'You\'re on the list!'}
            </span>
          </div>
          <p className="text-sm text-slate-300">
            {language === 'zh' 
              ? 'AI Doer 会在内测开放时通知你' 
              : 'We\'ll notify you when AI Doer is ready for you'}
          </p>
          <div className="flex items-center gap-2 mt-2 text-xs text-ai/80">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-ai animate-pulse" />
            {language === 'zh' ? '早期用户优先访问' : 'Early access priority'}
          </div>
        </div>
      </div>
    ), {
      duration: 5000,
      position: 'top-center',
    });

    setEmail('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError('');
  };

  return (
    <section id="waitlist" className="py-24 relative overflow-hidden bg-gradient-hero">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[150px] opacity-30" 
        style={{ background: 'hsl(185 100% 50%)' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
            {t('cta.title')}
          </h2>
          
          <p className="text-lg text-muted-foreground/70 mb-10">
            {t('cta.desc')}
          </p>

          {/* Email form */}
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${error ? 'text-destructive' : 'text-muted-foreground/50'}`} />
                <input
                  type="text"
                  value={email}
                  onChange={handleInputChange}
                  placeholder={t('email.placeholder')}
                  className={`w-full h-14 pl-12 pr-4 rounded-xl bg-white/10 border text-primary-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 transition-all ${
                    error 
                      ? 'border-destructive focus:ring-destructive/30' 
                      : 'border-white/20 focus:ring-ai/50 focus:border-ai/50'
                  }`}
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="group h-14 px-8 bg-gradient-accent hover:opacity-90 transition-all duration-500 shadow-glow-ai rounded-xl"
              >
                {t('cta.button')}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            {error && (
              <div className="flex items-center gap-2 mt-3 text-left">
                <AlertCircle className="w-4 h-4 text-destructive" />
                <span className="text-sm text-destructive">{error}</span>
              </div>
            )}
          </form>

          <p className="text-sm text-muted-foreground/50">
            {t('cta.note')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;