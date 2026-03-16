import { quizData } from './src/data/quizData.ts';

let totalQuestions = 0;
let errors = [];

for (const [categoryName, category] of Object.entries(quizData)) {
  category.questions.forEach((q, index) => {
    totalQuestions++;
    
    // Check structure
    if (q.options.length !== 4) {
      errors.push(`Category "${categoryName}", Question ${index + 1}: Has ${q.options.length} options instead of 4.`);
    }
    const correctCount = q.options.filter(o => o.isCorrect).length;
    if (correctCount !== 1) {
      errors.push(`Category "${categoryName}", Question ${index + 1}: Has ${correctCount} correct options instead of 1. Question: "${q.q}"`);
    }

    // Check feedback contradiction
    q.options.forEach((opt, optIndex) => {
      const feedbackLower = opt.feedback.toLowerCase();
      if (opt.isCorrect && feedbackLower.startsWith("incorrect")) {
        errors.push(`Category "${categoryName}", Question ${index + 1}, Option ${optIndex + 1}: Marked correct but feedback says 'Incorrect'.`);
      }
      if (!opt.isCorrect && feedbackLower.startsWith("correct")) {
        errors.push(`Category "${categoryName}", Question ${index + 1}, Option ${optIndex + 1}: Marked incorrect but feedback says 'Correct'.`);
      }
    });
  });
}

console.log(`Total questions checked: ${totalQuestions}`);
if (errors.length > 0) {
  console.log("Errors found:");
  errors.forEach(e => console.log(e));
} else {
  console.log("All questions passed structural and feedback contradiction checks.");
}
