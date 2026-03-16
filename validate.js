import { quizData } from './src/data/quizData.js';
import fs from 'fs';

let totalQuestions = 0;
let errors = [];

for (const [categoryName, category] of Object.entries(quizData)) {
  category.questions.forEach((q, index) => {
    totalQuestions++;
    if (q.options.length !== 4) {
      errors.push(`Category "${categoryName}", Question ${index + 1}: Has ${q.options.length} options instead of 4.`);
    }
    const correctCount = q.options.filter(o => o.isCorrect).length;
    if (correctCount !== 1) {
      errors.push(`Category "${categoryName}", Question ${index + 1}: Has ${correctCount} correct options instead of 1. Question: "${q.q}"`);
    }
  });
}

console.log(`Total questions checked: ${totalQuestions}`);
if (errors.length > 0) {
  console.log("Errors found:");
  errors.forEach(e => console.log(e));
} else {
  console.log("All questions have exactly 4 options and exactly 1 correct answer.");
}
