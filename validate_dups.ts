import { quizData } from './src/data/quizData.ts';

let totalQuestions = 0;
let errors = [];
let seenQuestions = new Set();

for (const [categoryName, category] of Object.entries(quizData)) {
  category.questions.forEach((q, index) => {
    totalQuestions++;
    
    if (seenQuestions.has(q.q)) {
      errors.push(`Duplicate question found in "${categoryName}": "${q.q}"`);
    }
    seenQuestions.add(q.q);
  });
}

console.log(`Total questions checked: ${totalQuestions}`);
if (errors.length > 0) {
  console.log("Errors found:");
  errors.forEach(e => console.log(e));
} else {
  console.log("No duplicate questions found.");
}
