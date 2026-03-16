import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Star, UserPlus, X } from 'lucide-react';

export default function GithubPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenGithubPopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000); // Show after 5 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('hasSeenGithubPopup', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl border border-neutral-200 text-center"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex justify-center mb-6">
              <div className="p-4 bg-neutral-900 rounded-full text-white">
                <Github className="w-8 h-8" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Support the Project!</h3>
            <p className="text-neutral-500 mb-8">
              If you find this preparatory tool helpful, please consider starring the repository and following on GitHub. It helps more students find this resource!
            </p>

            <div className="space-y-3">
              <a
                href="https://github.com/muhammad-awais-web-dev/nsct-2026-prepration"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md"
              >
                <Star className="w-4 h-4" />
                Star on GitHub
              </a>
              <a
                href="https://github.com/muhammad-awais-web-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-white hover:bg-neutral-50 text-neutral-900 font-bold py-3 px-6 rounded-xl border border-neutral-200 transition-all"
              >
                <UserPlus className="w-4 h-4" />
                Follow Author
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
