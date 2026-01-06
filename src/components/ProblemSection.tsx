import { useLanguage } from '@/contexts/LanguageContext';
import { Copy, RefreshCw, Share2, ClipboardList, X, AlertTriangle, Zap } from 'lucide-react';

const ProblemSection = () => {
  const { t } = useLanguage();
  
  const problems = [
    { icon: Copy, text: t('problem.item1'), color: 'from-red-500 to-orange-500' },
    { icon: RefreshCw, text: t('problem.item2'), color: 'from-orange-500 to-yellow-500' },
    { icon: Share2, text: t('problem.item3'), color: 'from-yellow-500 to-amber-500' },
    { icon: ClipboardList, text: t('problem.item4'), color: 'from-amber-500 to-red-400' },
  ];

  const issues = [t('problem.issue1'), t('problem.issue2'), t('problem.issue3')];

  // Extract highlighted text from solution
  const solutionText = t('problem.solution');
  const highlightText = 'high-frequency, standard tasks';
  const highlightTextZh = '你早就知道怎么做、却不得不反复去做的事';

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-destructive/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 title-decorated">
              {t('problem.title')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('problem.subtitle')}
            </p>
          </div>

          {/* Problem cards */}
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {problems.map((problem, index) => (
              <div 
                key={index} 
                className="group bg-secondary/50 rounded-lg p-6 flex items-center gap-4 transition-all duration-300 hover:shadow-card hover:scale-[1.02] border border-transparent hover:border-border/50"
              >
                <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${problem.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <problem.icon className="w-7 h-7 text-white" />
                  {/* Icon stroke effect */}
                  <div className={`absolute inset-0 rounded-xl border-2 border-current opacity-30 bg-gradient-to-br ${problem.color}`} style={{ margin: '-2px' }} />
                </div>
                <p className="text-foreground font-medium">{problem.text}</p>
              </div>
            ))}
          </div>

          {/* Traditional tools issues */}
          <div className="bg-red-50/50 dark:bg-red-950/20 rounded-2xl p-8 mb-10 border border-red-200/30 dark:border-red-800/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
              </div>
              <p className="text-lg font-semibold">{t('problem.traditional')}</p>
            </div>
            <div className="space-y-4">
              {issues.map((issue, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 p-3 rounded-xl bg-red-100/30 dark:bg-red-900/20 hover:bg-red-100/50 dark:hover:bg-red-900/30 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-destructive flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-white font-bold" />
                  </div>
                  <p className="text-muted-foreground">{issue}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution statement */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 glass-strong px-8 py-5 rounded-2xl border border-primary/20">
              <Zap className="w-6 h-6 text-primary" />
              <p className="text-xl md:text-2xl font-heading font-bold">
                {solutionText.includes(highlightText) ? (
                  <>
                    {solutionText.split(highlightText)[0]}
                    <span className="text-highlight-underline">{highlightText}</span>
                    {solutionText.split(highlightText)[1]}
                  </>
                ) : solutionText.includes(highlightTextZh) ? (
                  <>
                    {solutionText.split(highlightTextZh)[0]}
                    <span className="text-highlight-underline">{highlightTextZh}</span>
                    {solutionText.split(highlightTextZh)[1]}
                  </>
                ) : (
                  <span className="text-gradient">{solutionText}</span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;