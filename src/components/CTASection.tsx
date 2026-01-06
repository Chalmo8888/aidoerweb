import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Mail } from 'lucide-react';
import { toast } from 'sonner';

const CTASection = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success(t('email.success'));
      setEmail('');
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
          <div className="glass-strong rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            {/* Decorative gradients */}
            <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl" />
            <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-accent/10 to-transparent rounded-3xl" />
            
            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-muted-foreground">Join Early Access</span>
              </div>

              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-gradient">{t('cta.title')}</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                {t('cta.desc')}
              </p>

              {/* Email form */}
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('email.placeholder')}
                    className="w-full h-14 pl-12 pr-4 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="group h-14 px-8 bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-glow hover:shadow-glow-lg text-base"
                >
                  {t('cta.button')}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>

              <p className="text-sm text-muted-foreground">
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