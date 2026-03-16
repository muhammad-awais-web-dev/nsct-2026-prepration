import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Option, Question as QuestionType } from '../data/quizData';
import { generateQuestions } from '../data/geminiService';
import { ArrowRight, ArrowLeft, CheckCircle2, XCircle, Loader2, Sparkles } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface QuizProps {
  category: any;
  mode: 'standard' | 'endless';
  hasApiKey: boolean;
  onFinish: (score: number, total: number) => void;
  onAddLocalQuestions: (questions: QuestionType[]) => void;
}

const shuffleOptions = (questions: QuestionType[]): QuestionType[] => {
  return questions.map(q => {
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    return { ...q, options: shuffledOptions };
  });
};

export default function Quiz({ category, mode, hasApiKey, onFinish, onAddLocalQuestions }: QuizProps) {
  const [questions, setQuestions] = useState<QuestionType[]>(() => mode === 'endless' ? [] : shuffleOptions(category.questions));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [score, setScore] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  
  const [isInitialLoading, setIsInitialLoading] = useState(mode === 'endless');
  const [isGeneratingBackground, setIsGeneratingBackground] = useState(false);

  const fetchQuestions = async (count: number) => {
    const newQs = await generateQuestions(category.name, count);
    const shuffled = shuffleOptions(newQs);
    setQuestions(prev => [...prev, ...shuffled]);
    onAddLocalQuestions(newQs);
  };

  useEffect(() => {
    if (mode === 'endless') {
      setIsInitialLoading(true);
      fetchQuestions(10).then(() => {
        setIsInitialLoading(false);
      }).catch(err => {
        setErrorMsg(err.message);
        setIsInitialLoading(false);
      });
    }
  }, [mode, category.name]);

  useEffect(() => {
    if (mode === 'endless' && !isInitialLoading && !isGeneratingBackground) {
      if (questions.length > 0 && questions.length - currentIndex <= 10) {
        setIsGeneratingBackground(true);
        fetchQuestions(10).then(() => {
          setIsGeneratingBackground(false);
        }).catch(err => {
          console.error("Background generation failed", err);
          setIsGeneratingBackground(false);
        });
      }
    }
  }, [currentIndex, questions.length, mode, isInitialLoading, isGeneratingBackground, category.name]);

  const handleStopQuiz = () => {
    onFinish(score, Object.keys(answers).length);
  };

  const currentQuestion = questions[currentIndex];
  const selectedOptionIndex = answers[currentIndex] !== undefined ? answers[currentIndex] : null;
  const isAnswered = selectedOptionIndex !== null;

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    
    setAnswers(prev => ({ ...prev, [currentIndex]: index }));
    
    if (currentQuestion.options[index].isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setErrorMsg(null);
    }
  };

  const handleNext = async () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setErrorMsg(null);
    } else {
      // If we reach the end of static questions, ask if they want to generate more or finish
      onFinish(score, questions.length);
    }
  };

  const handleGenerateMore = async () => {
    setIsGenerating(true);
    setErrorMsg(null);
    try {
      const newQuestions = await generateQuestions(category.name, 5);
      if (newQuestions.length > 0) {
        const shuffledNew = shuffleOptions(newQuestions);
        setQuestions(prev => [...prev, ...shuffledNew]);
        onAddLocalQuestions(newQuestions);
        setCurrentIndex(prev => prev + 1);
      }
    } catch (error: any) {
      setErrorMsg(error.message || "Failed to generate questions. Please check your API key.");
    } finally {
      setIsGenerating(false);
    }
  };

  const getOptionClasses = (index: number, option: Option) => {
    const isSelected = selectedOptionIndex === index;
    
    if (!isAnswered) {
      return "border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50 bg-white";
    }

    if (option.isCorrect) {
      return "border-green-500 bg-green-50 text-green-900 ring-1 ring-green-500";
    }

    if (isSelected && !option.isCorrect) {
      return "border-red-500 bg-red-50 text-red-900 ring-1 ring-red-500";
    }

    return "border-neutral-200 bg-white opacity-50";
  };

  if (isInitialLoading) {
    return (
      <div className="max-w-3xl mx-auto w-full flex flex-col items-center justify-center py-32 space-y-6">
        <Loader2 className="w-10 h-10 animate-spin text-indigo-500" />
        <p className="text-neutral-500 font-medium animate-pulse text-lg">Generating your first 10 questions...</p>
      </div>
    );
  }

  if (errorMsg && questions.length === 0) {
    return (
      <div className="max-w-3xl mx-auto w-full flex flex-col items-center justify-center py-20 space-y-4 text-center">
        <XCircle className="w-12 h-12 text-red-500" />
        <h3 className="text-xl font-bold text-neutral-900">Failed to Generate Questions</h3>
        <p className="text-neutral-500">{errorMsg}</p>
        <button onClick={() => onFinish(0, 0)} className="px-6 py-2 mt-4 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors">Go Back</button>
      </div>
    );
  }

  if (!currentQuestion) return null;

  return (
    <div className="max-w-3xl mx-auto w-full">
      <div className="mb-8 flex justify-between items-center">
        <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-2">
          {category.name}
          {(currentIndex >= category.questions.length || mode === 'endless') && (
            <span className="flex items-center gap-1 text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded text-[10px]">
              <Sparkles className="w-3 h-3" />
              AI Generated
            </span>
          )}
          {isGeneratingBackground && (
            <span className="flex items-center gap-1 text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded text-[10px] animate-pulse">
              <Loader2 className="w-3 h-3 animate-spin" />
              Fetching more...
            </span>
          )}
        </h2>
        <div className="text-sm font-mono bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200 text-neutral-600">
          Question {currentIndex + 1} of {questions.length}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white border border-neutral-200 rounded-2xl p-6 md:p-10 shadow-sm"
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-8 leading-relaxed text-neutral-900">
            {currentQuestion.q}
          </h3>

          <div className="space-y-4">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                disabled={isAnswered || isGenerating}
                onClick={() => handleOptionSelect(index)}
                className={twMerge(
                  "w-full text-left p-5 rounded-xl border transition-all duration-200 flex items-start gap-4",
                  getOptionClasses(index, option)
                )}
              >
                <span className="font-mono text-neutral-400 mt-0.5 font-medium">
                  {String.fromCharCode(65 + index)}.
                </span>
                <span className="flex-grow text-base leading-relaxed">
                  {option.text}
                </span>
                {isAnswered && option.isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                )}
                {isAnswered && selectedOptionIndex === index && !option.isCorrect && (
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                )}
              </button>
            ))}
          </div>

          <AnimatePresence>
            {isAnswered && selectedOptionIndex !== null && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 32 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                className={clsx(
                  "rounded-xl p-6 border-l-4",
                  currentQuestion.options[selectedOptionIndex].isCorrect 
                    ? "bg-green-50 border-green-500" 
                    : "bg-red-50 border-red-500"
                )}
              >
                <h4 className={clsx(
                  "font-bold text-lg mb-2 flex items-center gap-2",
                  currentQuestion.options[selectedOptionIndex].isCorrect 
                    ? "text-green-800" 
                    : "text-red-800"
                )}>
                  {currentQuestion.options[selectedOptionIndex].isCorrect ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      Correct
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5" />
                      Incorrect
                    </>
                  )}
                </h4>
                <p className={clsx(
                  "text-sm leading-relaxed",
                  currentQuestion.options[selectedOptionIndex].isCorrect 
                    ? "text-green-900" 
                    : "text-red-900"
                )}>
                  <strong>Rationale:</strong> {currentQuestion.options[selectedOptionIndex].feedback}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex gap-3 w-full sm:w-auto">
              {currentIndex > 0 && (
                <button
                  onClick={handlePrevious}
                  disabled={isGenerating}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-200 bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous
                </button>
              )}
              <button
                onClick={handleStopQuiz}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-200 bg-red-50 text-red-600 hover:bg-red-100"
              >
                Stop Quiz
              </button>
            </div>
            <div className="text-xs text-neutral-400 font-medium text-center">
              {currentIndex === questions.length - 1 && !isGenerating && !errorMsg && mode === 'standard' && (
                <span className="flex items-center justify-center gap-1">
                  <Sparkles className="w-3 h-3 text-indigo-400" />
                  Reached end of static set. Generate more?
                </span>
              )}
              {errorMsg && (
                <span className="flex items-center justify-center gap-1 text-red-500">
                  <XCircle className="w-3 h-3" />
                  {errorMsg}
                </span>
              )}
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              {currentIndex === questions.length - 1 && mode === 'standard' && (
                <button
                  onClick={handleGenerateMore}
                  disabled={isGenerating || !isAnswered || !hasApiKey}
                  className={clsx(
                    "flex-grow sm:flex-grow-0 flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-200 border",
                    !hasApiKey ? "bg-neutral-50 text-neutral-400 border-neutral-200 cursor-not-allowed" :
                    isGenerating ? "bg-indigo-50 text-indigo-400 border-indigo-200" : "bg-white text-indigo-600 border-indigo-200 hover:bg-indigo-50"
                  )}
                  title={!hasApiKey ? "Requires API Key" : ""}
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      Generate 5 More
                    </>
                  )}
                </button>
              )}
              <button
                onClick={handleNext}
                disabled={!isAnswered || isGenerating}
                className={clsx(
                  "flex-grow sm:flex-grow-0 flex items-center justify-center gap-2 px-8 py-3 rounded-full font-bold transition-all duration-200",
                  isAnswered && !isGenerating
                    ? "bg-neutral-900 text-white hover:bg-neutral-800 hover:shadow-md" 
                    : "bg-neutral-100 text-neutral-400 cursor-not-allowed"
                )}
              >
                {currentIndex === questions.length - 1 && mode === 'standard' ? 'Finish Quiz' : 'Next Question'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
