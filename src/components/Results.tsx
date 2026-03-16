import { motion } from 'framer-motion';
import { RefreshCcw, Home, Trophy, AlertCircle } from 'lucide-react';
import { clsx } from 'clsx';

interface ResultsProps {
  score: number;
  total: number;
  categoryName: string;
  onRetry: () => void;
  onHome: () => void;
}

export default function Results({ score, total, categoryName, onRetry, onHome }: ResultsProps) {
  const percentage = Math.round((score / total) * 100);
  
  let message = "";
  let isSuccess = false;

  if (percentage >= 80) {
    message = "Excellent Performance! You are well prepared for this competency.";
    isSuccess = true;
  } else if (percentage >= 50) {
    message = "Good effort, but review the rationales to strengthen your understanding.";
    isSuccess = true;
  } else {
    message = "Significant review required in this competency area before the NSCT.";
    isSuccess = false;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="max-w-2xl mx-auto text-center"
    >
      <div className="bg-white border border-neutral-200 p-10 md:p-16 rounded-3xl shadow-sm">
        <div className="flex justify-center mb-6">
          {isSuccess ? (
            <div className="p-4 bg-green-50 rounded-full text-green-600">
              <Trophy className="w-12 h-12" />
            </div>
          ) : (
            <div className="p-4 bg-red-50 rounded-full text-red-600">
              <AlertCircle className="w-12 h-12" />
            </div>
          )}
        </div>

        <h2 className="text-3xl font-extrabold mb-2 text-neutral-900">Quiz Completed</h2>
        <p className="text-neutral-500 mb-8 font-medium">{categoryName}</p>
        
        <div className={clsx(
          "text-7xl md:text-8xl font-black mb-4 tracking-tighter",
          isSuccess ? "text-green-500" : "text-red-500"
        )}>
          {percentage}%
        </div>
        
        <p className="text-xl text-neutral-800 mb-3 font-semibold">
          You scored {score} out of {total}
        </p>
        
        <p className="text-neutral-500 mb-12 max-w-md mx-auto leading-relaxed">
          {message}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={onRetry} 
            className="flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-neutral-900 font-bold py-4 px-8 rounded-full border border-neutral-200 transition-all shadow-sm hover:shadow-md"
          >
            <RefreshCcw className="w-5 h-5" />
            Retry Category
          </button>
          <button 
            onClick={onHome} 
            className="flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-4 px-8 rounded-full transition-all shadow-md hover:shadow-lg"
          >
            <Home className="w-5 h-5" />
            Return to Dashboard
          </button>
        </div>
      </div>
    </motion.div>
  );
}
