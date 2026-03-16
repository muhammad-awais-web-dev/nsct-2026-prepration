import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Category, Option } from '../data/quizData';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface QuizProps {
  category: Category;
  onFinish: (score: number, total: number) => void;
}

export default function Quiz({ category, onFinish }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuestion = category.questions[currentIndex];

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    
    setSelectedOptionIndex(index);
    setIsAnswered(true);
    
    if (currentQuestion.options[index].isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < category.questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOptionIndex(null);
      setIsAnswered(false);
    } else {
      onFinish(score, category.questions.length);
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

  return (
    <div className="max-w-3xl mx-auto w-full">
      <div className="mb-8 flex justify-between items-center">
        <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-500">
          {category.name}
        </h2>
        <div className="text-sm font-mono bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200 text-neutral-600">
          Question {currentIndex + 1} of {category.questions.length}
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
                disabled={isAnswered}
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

          <div className="mt-8 flex justify-end">
            <button
              onClick={handleNext}
              disabled={!isAnswered}
              className={clsx(
                "flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all duration-200",
                isAnswered 
                  ? "bg-neutral-900 text-white hover:bg-neutral-800 hover:shadow-md" 
                  : "bg-neutral-100 text-neutral-400 cursor-not-allowed"
              )}
            >
              {currentIndex === category.questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
