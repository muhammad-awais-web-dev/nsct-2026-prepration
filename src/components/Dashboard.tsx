import { motion } from 'framer-motion';
import { BookOpen, Target, CheckCircle2 } from 'lucide-react';
import { Category } from '../data/quizData';

interface DashboardProps {
  onStartQuiz: (categoryName: string) => void;
  data: Record<string, Category>;
}

export default function Dashboard({ onStartQuiz, data }: DashboardProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-12"
    >
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900"
        >
          Competency Assessment
        </motion.h1>
        <motion.p 
          variants={itemVariants}
          className="text-lg text-neutral-500 leading-relaxed"
        >
          Select a domain below to begin your preparatory evaluation. The target number of questions reflects the syllabus weightage.
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="text-sm text-neutral-400 bg-neutral-50 py-2 px-4 rounded-full inline-block border border-neutral-200"
        >
          Loaded with a representative sample from the 1000+ question database.
        </motion.p>
      </div>

      <motion.div 
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {Object.values(data).map((category) => (
          <motion.div
            key={category.name}
            variants={itemVariants}
            onClick={() => onStartQuiz(category.name)}
            className="group relative bg-white border border-neutral-200 rounded-xl p-6 cursor-pointer hover:border-neutral-900 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-2 bg-neutral-100 rounded-lg group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800 border border-neutral-200">
                {category.weightage} Weight
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-neutral-900 mb-2 leading-tight">
              {category.name}
            </h3>
            
            <p className="text-sm text-neutral-500 mb-8 flex-grow">
              Master the fundamentals of this competency to secure your percentage in the NSCT.
            </p>
            
            <div className="flex items-center justify-between pt-4 border-t border-neutral-100 mt-auto">
              <div className="flex items-center space-x-4 text-xs text-neutral-500">
                <div className="flex items-center gap-1">
                  <Target className="w-3.5 h-3.5" />
                  <span>Target: {category.target}</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Available: {category.questions.length}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
