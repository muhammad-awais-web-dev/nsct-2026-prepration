import { useState } from 'react';
import Dashboard from './components/Dashboard';
import Quiz from './components/Quiz';
import Results from './components/Results';
import { quizData } from './data/quizData';

export type ViewState = 'dashboard' | 'quiz' | 'results';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('dashboard');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const handleStartQuiz = (categoryName: string) => {
    setSelectedCategory(categoryName);
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
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-200">
      <header className="border-b border-neutral-200 py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-sm z-50">
        <div 
          className="text-xl font-bold tracking-tight cursor-pointer flex items-center gap-2"
          onClick={handleReturnToDashboard}
        >
          <span className="bg-neutral-900 text-white px-2 py-1 rounded-sm text-sm">NSCT</span>
          <span>2026</span>
        </div>
        {currentView !== 'dashboard' && (
          <button 
            onClick={handleReturnToDashboard}
            className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            Exit Quiz
          </button>
        )}
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-20">
        {currentView === 'dashboard' && (
          <Dashboard onStartQuiz={handleStartQuiz} data={quizData} />
        )}
        {currentView === 'quiz' && selectedCategory && (
          <Quiz 
            category={quizData[selectedCategory]} 
            onFinish={handleFinishQuiz} 
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
      
      <footer className="text-center py-8 text-neutral-400 text-xs border-t border-neutral-100 mt-auto">
        National Skills Competency Test (NSCT) 2026 Preparatory Module
      </footer>
    </div>
  );
}
