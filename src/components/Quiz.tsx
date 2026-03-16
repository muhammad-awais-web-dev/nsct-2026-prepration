import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Category, Option, Question as QuestionType } from '../data/quizData';
import { generateQuestions } from '../data/geminiService';
import { ArrowRight, CheckCircle2, XCircle, Loader2, Sparkles } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface QuizProps {
  category: Category;
  onFinish: (score: number, total: number) => void;
}

export default function Quiz({ category, onFinish }: QuizProps) {
  const [questions, setQuestions] = useState<QuestionType[]>(category.questions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    
    setSelectedOptionIndex(index);
    setIsAnswered(true);
    
    if (currentQuestion.options[index].isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = async () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOptionIndex(null);
      setIsAnswered(false);
    } else {
      // If we reach the end of static questions, ask if they want to generate more or finish
      onFinish(score, questions.length);
    }
  };

  const handleGenerateMore = async () => {
    setIsGenerating(true);
    try {
      const newQuestions = await generateQuestions(category.name, 5);
      if (newQuestions.length > 0) {
        setQuestions(prev => [...prev, ...newQuestions]);
        setCurrentIndex(prev => prev + 1);
        setSelectedOptionIndex(null);
        setIsAnswered(false);
      }
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

  if (!currentQuestion) return null;

  return (
    <div className="max-w-3xl mx-auto w-full">
      <div className="mb-8 flex justify-between items-center">
        <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-2">
          {category.name}
          {currentIndex >= category.questions.length && (
            <span className="flex items-center gap-1 text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded text-[10px]">
              <Sparkles className="w-3 h-3" />
              AI Generated
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
            <div className="text-xs text-neutral-400 font-medium">
              {currentIndex === questions.length - 1 && !isGenerating && (
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-indigo-400" />
                  Reached end of static set. Generate more?
                </span>
              )}
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              {currentIndex === questions.length - 1 && (
                <button
                  onClick={handleGenerateMore}
                  disabled={isGenerating || !isAnswered}
                  className={clsx(
                    "flex-grow sm:flex-grow-0 flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-200 border border-indigo-200",
                    isGenerating ? "bg-indigo-50 text-indigo-400" : "bg-white text-indigo-600 hover:bg-indigo-50"
                  )}
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
                {currentIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
