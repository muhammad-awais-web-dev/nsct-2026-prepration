import { useState, useEffect, useMemo } from 'react';
import Dashboard from './components/Dashboard';
import Quiz from './components/Quiz';
import Results from './components/Results';
import GithubPopup from './components/GithubPopup';
import SettingsModal from './components/SettingsModal';
import { quizData, Question } from './data/quizData';
import { Github } from 'lucide-react';

export type ViewState = 'dashboard' | 'quiz' | 'results';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('dashboard');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [localQuestions, setLocalQuestions] = useState<Record<string, Question[]>>({});
  const [hasApiKey, setHasApiKey] = useState(!!localStorage.getItem('gemini_api_key'));
  const [quizMode, setQuizMode] = useState<'standard' | 'endless'>('standard');

  useEffect(() => {
    const handleKeyChange = () => setHasApiKey(!!localStorage.getItem('gemini_api_key'));
    window.addEventListener('api_key_changed', handleKeyChange);
    return () => window.removeEventListener('api_key_changed', handleKeyChange);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem('nsct_local_questions');
    if (stored) {
      try {
        setLocalQuestions(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse local questions", e);
      }
    }
  }, []);

  const handleAddLocalQuestions = (categoryName: string, newQuestions: Question[]) => {
    setLocalQuestions(prev => {
      const updated = {
        ...prev,
        [categoryName]: [...(prev[categoryName] || []), ...newQuestions]
      };
      localStorage.setItem('nsct_local_questions', JSON.stringify(updated));
      return updated;
    });
  };

  const handleClearLocalQuestions = (categoryName: string) => {
    setLocalQuestions(prev => {
      const updated = { ...prev };
      delete updated[categoryName];
      localStorage.setItem('nsct_local_questions', JSON.stringify(updated));
      return updated;
    });
  };

  const mergedData = useMemo(() => {
    const merged: Record<string, any> = {};
    for (const key in quizData) {
      merged[key] = {
        ...quizData[key],
        questions: [...quizData[key].questions, ...(localQuestions[key] || [])],
        globalCount: quizData[key].questions.length,
        localCount: localQuestions[key]?.length || 0,
      };
    }
    return merged;
  }, [localQuestions]);

  const handleStartQuiz = (categoryName: string, mode: 'standard' | 'endless' = 'standard') => {
    setSelectedCategory(categoryName);
    setQuizMode(mode);
    setCurrentView('quiz');
  };

  const handleFinishQuiz = (finalScore: number, total: number) => {
    setScore(finalScore);
    setTotalQuestions(total);
    setCurrentView('results');
  };

  const handleReturnToDashboard = () => {
    setSelectedCategory(null);
    setScore(0);
    setTotalQuestions(0);
    setCurrentView('dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans selection:bg-neutral-200">
      <GithubPopup />
      <header className="border-b border-neutral-200 py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-sm z-50">
        <div 
          className="text-xl font-bold tracking-tight cursor-pointer flex items-center gap-2"
          onClick={handleReturnToDashboard}
        >
          <span className="bg-neutral-900 text-white px-2 py-1 rounded-sm text-sm">NSCT</span>
          <span>2026</span>
        </div>
        <div className="flex items-center gap-6">
          <SettingsModal />
          {currentView !== 'dashboard' && (
            <button 
              onClick={handleReturnToDashboard}
              className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              Exit Quiz
            </button>
          )}
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-20 w-full flex-grow">
        {currentView === 'dashboard' && (
          <Dashboard 
            onStartQuiz={handleStartQuiz} 
            data={mergedData} 
            onClearLocal={handleClearLocalQuestions}
            hasApiKey={hasApiKey}
          />
        )}
        {currentView === 'quiz' && selectedCategory && (
          <Quiz 
            category={mergedData[selectedCategory]} 
            mode={quizMode}
            hasApiKey={hasApiKey}
            onFinish={handleFinishQuiz} 
            onAddLocalQuestions={(questions) => handleAddLocalQuestions(selectedCategory, questions)}
          />
        )}
        {currentView === 'results' && selectedCategory && (
          <Results 
            score={score} 
            total={totalQuestions} 
            categoryName={selectedCategory}
            onRetry={() => handleStartQuiz(selectedCategory)}
            onHome={handleReturnToDashboard}
          />
        )}
      </main>
      
      <footer className="text-center py-8 text-neutral-400 text-xs border-t border-neutral-100 mt-auto flex flex-col items-center justify-center gap-4">
        <div>National Skills Competency Test (NSCT) 2026 Preparatory Module</div>
        <a 
          href="https://github.com/muhammad-awais-web-dev/nsct-2026-prepration" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          <Github className="w-4 h-4" />
          <span>View on GitHub</span>
        </a>
      </footer>
    </div>
  );
}
