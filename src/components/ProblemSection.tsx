import { useLanguage } from '@/contexts/LanguageContext';
import { Copy, RefreshCw, Share2, ClipboardList, X, AlertTriangle, Zap } from 'lucide-react';
const ProblemSection = () => {
  const {
    t
  } = useLanguage();
  const problems = [{
    icon: Copy,
    text: t('problem.item1'),
    color: 'from-red-500 to-orange-500'
  }, {
    icon: RefreshCw,
    text: t('problem.item2'),
    color: 'from-orange-500 to-yellow-500'
  }, {
    icon: Share2,
    text: t('problem.item3'),
    color: 'from-yellow-500 to-amber-500'
  }, {
    icon: ClipboardList,
    text: t('problem.item4'),
    color: 'from-amber-500 to-red-400'
  }];
  const issues = [t('problem.issue1'), t('problem.issue2'), t('problem.issue3')];
  return <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-destructive/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              {t('problem.title')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('problem.subtitle')}
            </p>
          </div>

          {/* Problem cards */}
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {problems.map((problem, index) => <div key={index} className="group glass-strong rounded-2xl p-6 flex items-center gap-4 hover-lift">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${problem.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <problem.icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-foreground font-medium">{problem.text}</p>
              </div>)}
          </div>

          {/* Traditional tools issues */}
          <div className="glass-strong rounded-3xl p-8 mb-10 relative overflow-hidden">
            {/* Subtle gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-destructive/10 via-transparent to-destructive/10 opacity-50" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                </div>
                <p className="text-lg font-semibold">{t('problem.traditional')}</p>
              </div>
              <div className="space-y-4">
                {issues.map((issue, index) => <div key={index} className="flex items-center gap-4 p-3 rounded-xl bg-destructive/5 hover:bg-destructive/10 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                      <X className="w-4 h-4 text-destructive" />
                    </div>
                    <p className="text-muted-foreground">{issue}</p>
                  </div>)}
              </div>
            </div>
          </div>

          {/* Solution statement */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 glass-strong px-8 py-4 rounded-2xl">
              <Zap className="w-6 h-6 text-accent" />
              <p className="text-2xl font-heading font-bold text-gradient">
                {t('problem.solution')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ProblemSection;