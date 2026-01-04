import { useLanguage } from '@/contexts/LanguageContext';
import { Copy, RefreshCw, Share2, ClipboardList, X, AlertTriangle } from 'lucide-react';

const ProblemSection = () => {
  const { t } = useLanguage();

  const problems = [
    { icon: Copy, text: t('problem.item1') },
    { icon: RefreshCw, text: t('problem.item2') },
    { icon: Share2, text: t('problem.item3') },
    { icon: ClipboardList, text: t('problem.item4') },
  ];

  const issues = [
    t('problem.issue1'),
    t('problem.issue2'),
    t('problem.issue3'),
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-6">
            {t('problem.title')}
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16">
            {t('problem.subtitle')}
          </p>

          {/* Problem cards */}
          <div className="grid md:grid-cols-2 gap-4 mb-16">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 flex items-center gap-4 group hover:bg-secondary/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <problem.icon className="w-6 h-6 text-destructive" />
                </div>
                <p className="text-foreground">{problem.text}</p>
              </div>
            ))}
          </div>

          {/* Traditional tools issues */}
          <div className="glass rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-6 h-6 text-yellow-500" />
              <p className="text-lg font-medium">{t('problem.traditional')}</p>
            </div>
            <div className="space-y-3">
              {issues.map((issue, index) => (
                <div key={index} className="flex items-center gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0" />
                  <p className="text-muted-foreground">{issue}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution statement */}
          <div className="text-center">
            <p className="text-2xl font-heading font-semibold text-gradient">
              {t('problem.solution')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
