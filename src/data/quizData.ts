export type Option = {
  text: string;
  isCorrect: boolean;
  feedback: string;
};

export type Question = {
  q: string;
  options: Option[];
};

export type Category = {
  name: string;
  weightage: string;
  target: number;
  questions: Question[];
};

export const quizData: Record<string, Category> = {
  "Problem Solving and Analytical Skills": {
    name: "Problem Solving and Analytical Skills",
    weightage: "20%",
    target: 200,
    questions: [
      {
        q: "A distributed computing cluster processes 240 distinct data packets in 4 hours. If an algorithmic optimization increases the processing efficiency by 25%, what is the revised throughput in packets per hour?",
        options: [
          { text: "60 packets/hr", isCorrect: false, feedback: "Incorrect. This is the baseline throughput before the 25% increase (240 / 4 = 60)." },
          { text: "75 packets/hr", isCorrect: true, feedback: "Correct. The baseline is 240 packets / 4 hours = 60 packets/hr. A 25% increase is 60 * 0.25 = 15. The new throughput is 60 + 15 = 75 packets/hr." },
          { text: "80 packets/hr", isCorrect: false, feedback: "Incorrect. This would represent a 33.3% increase over the baseline of 60 packets/hr." },
          { text: "90 packets/hr", isCorrect: false, feedback: "Incorrect. This would represent a 50% increase over the baseline of 60 packets/hr." }
        ]
      },
      {
        q: "Five subroutines (V, W, X, Y, Z) must be compiled in a specific sequence. Subroutine V must compile before W. Subroutine X must compile immediately after W. Z cannot compile first. If Y compiles third, which subroutine must compile last to satisfy all constraints?",
        options: [
          { text: "V", isCorrect: false, feedback: "Incorrect. V must compile before W, so it cannot be the last subroutine in the sequence." },
          { text: "W", isCorrect: false, feedback: "Incorrect. X must compile immediately after W, meaning W cannot be the last subroutine." },
          { text: "X", isCorrect: true, feedback: "Correct. Y is 3rd. W and X must be together (W then X). V is before W. Z is not first. The only valid sequence is V (1st), Z (2nd), Y (3rd), W (4th), and X (5th). Thus, X compiles last." },
          { text: "Z", isCorrect: false, feedback: "Incorrect. If Z is last, there is no valid position for V, W, and X that satisfies all constraints while keeping Y in the 3rd position." }
        ]
      },
      {
        q: "When faced with an intermittent, untraceable latency issue within a microservices architecture, which problem-solving methodology is most appropriate for isolating the root cause?",
        options: [
          { text: "Brute-force code refactoring", isCorrect: false, feedback: "Incorrect. Refactoring without identifying the root cause is inefficient and may introduce new bugs without solving the latency issue." },
          { text: "Data-driven telemetry analysis and hypothesis testing", isCorrect: true, feedback: "Correct. Systemic latency issues require gathering precise operational metrics, identifying statistical anomalies, formulating a hypothesis, and systematically isolating the faulty node." },
          { text: "Heuristic trial and error", isCorrect: false, feedback: "Incorrect. Trial and error is blind and highly ineffective for complex, intermittent distributed issues." },
          { text: "Abstract pattern generalization", isCorrect: false, feedback: "Incorrect. While recognizing patterns is helpful, concrete telemetry data is required to isolate the specific failing service node." }
        ]
      },
      {
        q: "If 40% of an allocated memory block equates to 80 megabytes, what is the total memory footprint of the application in megabytes?",
        options: [
          { text: "100 MB", isCorrect: false, feedback: "Incorrect. 40% of 100 MB is 40 MB, not 80 MB." },
          { text: "160 MB", isCorrect: false, feedback: "Incorrect. This is 80 * 2, which would be correct if 80 MB was 50% of the total." },
          { text: "200 MB", isCorrect: true, feedback: "Correct. If 40% (0.4) of a variable x equals 80, the equation is 0.4x = 80. Solving for x yields 80 / 0.4 = 200 MB." },
          { text: "240 MB", isCorrect: false, feedback: "Incorrect. This is 80 * 3, which does not align with the 40% ratio." }
        ]
      },
      {
        q: "A software development team is analyzing the time complexity of an algorithm that processes a list of n elements. If the algorithm's execution time triples every time the input size doubles, what is its complexity?",
        options: [
          { text: "O(n)", isCorrect: false, feedback: "Incorrect. O(n) complexity means execution time doubles when input size doubles." },
          { text: "O(n^2)", isCorrect: false, feedback: "Incorrect. O(n^2) complexity means execution time quadruples when input size doubles." },
          { text: "O(n^log2(3))", isCorrect: true, feedback: "Correct. If T(2n) = 3T(n), then T(n) = n^log2(3). This is a classic application of the Master Theorem for recursive relations." },
          { text: "O(log n)", isCorrect: false, feedback: "Incorrect. O(log n) complexity grows much slower than the input size." }
        ]
      },
      {
        q: "In a logic puzzle, if all 'A' are 'B' and some 'B' are 'C', which of the following must be true?",
        options: [
          { text: "All A are C", isCorrect: false, feedback: "Incorrect. There is no direct link established between all A and C; only some B are C." },
          { text: "Some A are C", isCorrect: false, feedback: "Incorrect. While possible, it is not logically 'must be true' based on the given premises." },
          { text: "Some B are A", isCorrect: true, feedback: "Correct. Since all A are B, there must be at least some B that are A (specifically, those B that are the A's)." },
          { text: "No A are C", isCorrect: false, feedback: "Incorrect. This contradicts the possibility that some A could be C, but it's not a logical necessity." }
        ]
      },
      {
        q: "A sequence of numbers follows the pattern: 2, 6, 12, 20, 30, ... What is the next number in the sequence?",
        options: [
          { text: "36", isCorrect: false, feedback: "Incorrect. This does not follow the increasing difference pattern." },
          { text: "40", isCorrect: false, feedback: "Incorrect. The differences are 4, 6, 8, 10... the next difference should be 12." },
          { text: "42", isCorrect: true, feedback: "Correct. The differences between terms are 4, 6, 8, 10. The next difference is 12. 30 + 12 = 42." },
          { text: "44", isCorrect: false, feedback: "Incorrect. This would imply a difference of 14, which skips the next step in the arithmetic progression of differences." }
        ]
      },
      {
        q: "A train travels at a constant speed of 60 km/h for 2 hours and then at 90 km/h for 3 hours. What is the average speed for the entire journey?",
        options: [
          { text: "72 km/h", isCorrect: false, feedback: "Incorrect. This is the simple average of 60 and 90 (75) minus 3, which is not the correct formula." },
          { text: "75 km/h", isCorrect: false, feedback: "Incorrect. This is the arithmetic mean of the speeds, but average speed is Total Distance / Total Time." },
          { text: "78 km/h", isCorrect: true, feedback: "Correct. Total distance = (60 * 2) + (90 * 3) = 120 + 270 = 390 km. Total time = 2 + 3 = 5 hours. Average speed = 390 / 5 = 78 km/h." },
          { text: "80 km/h", isCorrect: false, feedback: "Incorrect. This would require a total distance of 400 km over 5 hours." }
        ]
      },
      {
        q: "If 3 workers can build a wall in 4 days, how many days will it take 6 workers to build the same wall, assuming the same rate of work?",
        options: [
          { text: "2 days", isCorrect: true, feedback: "Correct. This is an inverse proportion. If the number of workers doubles (3 to 6), the time taken is halved (4 to 2)." },
          { text: "4 days", isCorrect: false, feedback: "Incorrect. Doubling the workforce should decrease the time required." },
          { text: "8 days", isCorrect: false, feedback: "Incorrect. This would be true if it were a direct proportion, but more workers take less time." },
          { text: "6 days", isCorrect: false, feedback: "Incorrect. This does not follow the inverse relationship between workers and time." }
        ]
      },
      {
        q: "A clock shows exactly 3:15. What is the measure of the smaller angle between the hour hand and the minute hand?",
        options: [
          { text: "0 degrees", isCorrect: false, feedback: "Incorrect. While the minute hand is at 15, the hour hand has moved slightly past the 3." },
          { text: "7.5 degrees", isCorrect: true, feedback: "Correct. At 3:15, the minute hand is at 90°. The hour hand moves 0.5° per minute. In 15 minutes, it moves 15 * 0.5 = 7.5° from the 3 o'clock mark (90°). So the angle is |97.5 - 90| = 7.5°." },
          { text: "15 degrees", isCorrect: false, feedback: "Incorrect. This would be the angle if the hour hand moved 1 degree per minute." },
          { text: "30 degrees", isCorrect: false, feedback: "Incorrect. This is the angle between two consecutive hour marks." }
        ]
      },
      {
        q: "In a group of 30 people, 15 like tea, 12 like coffee, and 5 like both. How many people in the group like neither tea nor coffee?",
        options: [
          { text: "3", isCorrect: false, feedback: "Incorrect. This would be the result if 27 people liked at least one drink." },
          { text: "8", isCorrect: true, feedback: "Correct. Using the principle of inclusion-exclusion: People who like at least one = 15 + 12 - 5 = 22. Neither = Total - At least one = 30 - 22 = 8." },
          { text: "13", isCorrect: false, feedback: "Incorrect. This ignores the 5 people who like both." },
          { text: "18", isCorrect: false, feedback: "Incorrect. This would be the result if only 12 people liked at least one drink." }
        ]
      },
      {
        q: "If the word 'BLUE' is coded as 'CMVF' in a certain language, how would the word 'PINK' be coded in that same language?",
        options: [
          { text: "QJOL", isCorrect: true, feedback: "Correct. The pattern is +1 for each letter: B+1=C, L+1=M, U+1=V, E+1=F. Applying this to PINK: P+1=Q, I+1=J, N+1=O, K+1=L." },
          { text: "OJML", isCorrect: false, feedback: "Incorrect. This uses a mix of +1 and -1 patterns." },
          { text: "RKPL", isCorrect: false, feedback: "Incorrect. This uses a +2 pattern for some letters." },
          { text: "QLOL", isCorrect: false, feedback: "Incorrect. The second letter 'I' should become 'J', not 'L'." }
        ]
      },
      {
        q: "A person walks 3 km North, then turns right and walks 4 km East. What is the shortest distance (displacement) from the starting point?",
        options: [
          { text: "5 km", isCorrect: true, feedback: "Correct. This forms a right-angled triangle with sides 3 and 4. Using Pythagoras' theorem: √(3² + 4²) = √(9 + 16) = √25 = 5 km." },
          { text: "7 km", isCorrect: false, feedback: "Incorrect. This is the total distance walked, not the displacement." },
          { text: "1 km", isCorrect: false, feedback: "Incorrect. This would be the displacement if the person walked in opposite directions." },
          { text: "12 km", isCorrect: false, feedback: "Incorrect. This is the product of the two distances." }
        ]
      },
      {
        q: "If all squares are rectangles and some rectangles are red, which of the following statements MUST be true?",
        options: [
          { text: "Some squares are red", isCorrect: false, feedback: "Incorrect. While possible, it's not a logical necessity as the red rectangles might not be the square ones." },
          { text: "All rectangles are squares", isCorrect: false, feedback: "Incorrect. This is the converse of the first premise and is not necessarily true." },
          { text: "None of the above", isCorrect: true, feedback: "Correct. Neither 'Some squares are red' nor 'All rectangles are squares' is logically guaranteed by the premises." },
          { text: "All squares are red", isCorrect: false, feedback: "Incorrect. This is even less likely to be true than 'Some squares are red'." }
        ]
      },
      {
        q: "A shopkeeper offers a 20% discount on the marked price of an item and still makes a 10% profit. If the marked price is $110, what is the cost price?",
        options: [
          { text: "$80", isCorrect: true, feedback: "Correct. Selling Price = 110 * 0.8 = $88. If $88 represents a 10% profit, then 1.1 * Cost Price = 88. Cost Price = 88 / 1.1 = $80." },
          { text: "$88", isCorrect: false, feedback: "Incorrect. This is the selling price after the discount, not the cost price." },
          { text: "$90", isCorrect: false, feedback: "Incorrect. This would imply a different profit margin or discount." },
          { text: "$100", isCorrect: false, feedback: "Incorrect. This would mean the shopkeeper makes no profit if the selling price was $100." }
        ]
      },
      {
        q: "Complete the following number series: 1, 4, 9, 16, 25, ...",
        options: [
          { text: "30", isCorrect: false, feedback: "Incorrect. This does not follow the pattern of perfect squares." },
          { text: "35", isCorrect: false, feedback: "Incorrect. This is not a perfect square." },
          { text: "36", isCorrect: true, feedback: "Correct. The series consists of perfect squares: 1², 2², 3², 4², 5². The next number is 6² = 36." },
          { text: "49", isCorrect: false, feedback: "Incorrect. This is 7², skipping 6²." }
        ]
      },
      {
        q: "If today is Monday, what day of the week will it be exactly 61 days from now?",
        options: [
          { text: "Saturday", isCorrect: true, feedback: "Correct. There are 7 days in a week. 61 divided by 7 gives a remainder of 5 (61 = 7 * 8 + 5). Five days after Monday is Saturday." },
          { text: "Sunday", isCorrect: false, feedback: "Incorrect. This would be 62 days from now." },
          { text: "Friday", isCorrect: false, feedback: "Incorrect. This would be 60 days from now." },
          { text: "Monday", isCorrect: false, feedback: "Incorrect. This would be any multiple of 7 days from now (e.g., 56 or 63 days)." }
        ]
      },
      {
        q: "A sequence follows the rule: multiply by 2, then subtract 3. If the 4th term is 13, what was the 1st term?",
        options: [
          { text: "2", isCorrect: false, feedback: "Incorrect. Let's work backwards: 4th is 13. (13+3)/2 = 8 (3rd). (8+3)/2 = 5.5 (2nd). (5.5+3)/2 = 4.25 (1st)." },
          { text: "4", isCorrect: false, feedback: "Incorrect. If 1st is 4: 4*2-3=5 (2nd), 5*2-3=7 (3rd), 7*2-3=11 (4th). Close, but not 13." },
          { text: "5", isCorrect: false, feedback: "Incorrect. If 1st is 5: 5*2-3=7 (2nd), 7*2-3=11 (3rd), 11*2-3=19." },
          { text: "4.25", isCorrect: true, feedback: "Correct. Working backwards: (13+3)/2 = 8; (8+3)/2 = 5.5; (5.5+3)/2 = 4.25." }
        ]
      },
      {
        q: "If all Bloops are Razzies and some Razzies are Lurgs, which of the following MUST be true?",
        options: [
          { text: "All Bloops are Lurgs.", isCorrect: false, feedback: "Incorrect. We only know some Razzies are Lurgs; those might not be the Bloops." },
          { text: "Some Bloops are Lurgs.", isCorrect: false, feedback: "Incorrect. It's possible, but not guaranteed." },
          { text: "Some Lurgs are Razzies.", isCorrect: true, feedback: "Correct. If some Razzies are Lurgs, then by definition, some Lurgs are Razzies." },
          { text: "No Bloops are Lurgs.", isCorrect: false, feedback: "Incorrect. This is also not guaranteed." }
        ]
      },
      {
        q: "A clock shows 3:15. What is the angle between the hour and minute hands?",
        options: [
          { text: "0 degrees", isCorrect: false, feedback: "Incorrect. The hour hand moves as the minute hand moves." },
          { text: "7.5 degrees", isCorrect: true, feedback: "Correct. At 3:00, the angle is 90°. In 15 minutes, the minute hand moves 90°, but the hour hand moves (15/60) * 30° = 7.5°. So the angle is 7.5°." },
          { text: "15 degrees", isCorrect: false, feedback: "Incorrect. The hour hand moves 0.5 degrees per minute." },
          { text: "5 degrees", isCorrect: false, feedback: "Incorrect. 15 minutes is 1/4 of an hour, so the hour hand moves 1/4 of 30 degrees." }
        ]
      },
      {
        q: "If 5 machines take 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?",
        options: [
          { text: "100 minutes", isCorrect: false, feedback: "Incorrect. This is a common cognitive bias error." },
          { text: "5 minutes", isCorrect: true, feedback: "Correct. If 5 machines take 5 minutes to make 5 widgets, it means 1 machine takes 5 minutes to make 1 widget. Thus, 100 machines working simultaneously will take 5 minutes to make 100 widgets." },
          { text: "1 minute", isCorrect: false, feedback: "Incorrect. The rate per machine remains the same." },
          { text: "25 minutes", isCorrect: false, feedback: "Incorrect. This does not follow the logic of parallel processing." }
        ]
      },
      {
        q: "In a lake, there is a patch of lily pads. Every day, the patch doubles in size. If it takes 48 days for the patch to cover the entire lake, how long would it take for the patch to cover half the lake?",
        options: [
          { text: "24 days", isCorrect: false, feedback: "Incorrect. This assumes linear growth, but the growth is exponential (doubling)." },
          { text: "47 days", isCorrect: true, feedback: "Correct. If the patch doubles in size every day, and it covers the whole lake on day 48, it must have covered half the lake on the previous day (day 47)." },
          { text: "12 days", isCorrect: false, feedback: "Incorrect. This is 1/4 of the total time, not related to the doubling rate." },
          { text: "46 days", isCorrect: false, feedback: "Incorrect. On day 46, it would have covered 1/4 of the lake." }
        ]
      },
      {
        q: "A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the ball. How much does the ball cost?",
        options: [
          { text: "$0.10", isCorrect: false, feedback: "Incorrect. If the ball was $0.10, the bat would be $1.10, making the total $1.20." },
          { text: "$0.05", isCorrect: true, feedback: "Correct. Let ball = x. Bat = x + 1.00. x + (x + 1.00) = 1.10. 2x = 0.10. x = 0.05." },
          { text: "$0.01", isCorrect: false, feedback: "Incorrect. This would make the total $1.02." },
          { text: "$0.15", isCorrect: false, feedback: "Incorrect. This would make the total $1.30." }
        ]
      },
      {
        q: "If you are running a race and you pass the person in second place, what place are you in?",
        options: [
          { text: "First place", isCorrect: false, feedback: "Incorrect. You passed the person in second, so you take their spot." },
          { text: "Second place", isCorrect: true, feedback: "Correct. You take the position of the person you just passed." },
          { text: "Third place", isCorrect: false, feedback: "Incorrect. You were in third (or lower) and moved up to second." },
          { text: "Last place", isCorrect: false, feedback: "Incorrect. Unless there were only two people in the race." }
        ]
      },
      {
        q: "A man is looking at a photograph of someone. His friend asks who it is. The man replies, 'Brothers and sisters, I have none. But that man's father is my father's son.' Who is in the photograph?",
        options: [
          { text: "His father", isCorrect: false, feedback: "Incorrect. 'My father's son' refers to the man himself (since he has no brothers)." },
          { text: "His son", isCorrect: true, feedback: "Correct. 'My father's son' is the man himself. So, 'That man's father is me.' Therefore, the man in the photo is his son." },
          { text: "Himself", isCorrect: false, feedback: "Incorrect. If it were himself, he would say 'That man is me'." },
          { text: "His nephew", isCorrect: false, feedback: "Incorrect. He has no brothers or sisters." }
        ]
      },
      {
        q: "What occurs once in every minute, twice in every moment, yet never in a thousand years?",
        options: [
          { text: "The letter 'M'", isCorrect: true, feedback: "Correct. It's a riddle based on the spelling of the words: 'Minute' (one M), 'Moment' (two Ms), 'Thousand years' (no Ms)." },
          { text: "A second", isCorrect: false, feedback: "Incorrect. This is a literal time measurement." },
          { text: "A heartbeat", isCorrect: false, feedback: "Incorrect. This is a biological function." },
          { text: "The sun rising", isCorrect: false, feedback: "Incorrect. This is an astronomical event." }
        ]
      },
      {
        q: "A farmer has 17 sheep and all but 9 die. How many sheep are left?",
        options: [
          { text: "8", isCorrect: false, feedback: "Incorrect. 17 - 9 = 8, but the question says 'all but 9 die', meaning 9 survived." },
          { text: "9", isCorrect: true, feedback: "Correct. The phrase 'all but 9 die' means that 9 sheep are still alive." },
          { text: "17", isCorrect: false, feedback: "Incorrect. Some sheep died." },
          { text: "0", isCorrect: false, feedback: "Incorrect. Not all of them died." }
        ]
      },
      {
        q: "If a doctor gives you 3 pills and tells you to take one every half hour, how long will they last?",
        options: [
          { text: "1.5 hours", isCorrect: false, feedback: "Incorrect. You take the first pill immediately (at 0 minutes)." },
          { text: "1 hour", isCorrect: true, feedback: "Correct. Pill 1 at 0 mins, Pill 2 at 30 mins, Pill 3 at 60 mins (1 hour)." },
          { text: "30 minutes", isCorrect: false, feedback: "Incorrect. This is only enough time for two pills." },
          { text: "2 hours", isCorrect: false, feedback: "Incorrect. This would be the case if you took one every hour." }
        ]
      },
      {
        q: "How many months have 28 days?",
        options: [
          { text: "1", isCorrect: false, feedback: "Incorrect. While February is the only month with *exactly* 28 days (usually), all months have at least 28 days." },
          { text: "12", isCorrect: true, feedback: "Correct. Every month in the calendar has at least 28 days." },
          { text: "6", isCorrect: false, feedback: "Incorrect. All 12 months have at least 28 days." },
          { text: "0", isCorrect: false, feedback: "Incorrect. All months have at least 28 days." }
        ]
      },
      {
        q: "What is the next number in the series: 2, 6, 12, 20, 30, ...?",
        options: [
          { text: "40", isCorrect: false, feedback: "Incorrect. Look at the differences: 4, 6, 8, 10..." },
          { text: "42", isCorrect: true, feedback: "Correct. The differences are increasing by 2: 6-2=4, 12-6=6, 20-12=8, 30-20=10. The next difference is 12, so 30+12=42." },
          { text: "44", isCorrect: false, feedback: "Incorrect. The pattern is n^2 + n (1^2+1=2, 2^2+2=6, 3^2+3=12, 4^2+4=20, 5^2+5=30, 6^2+6=42)." },
          { text: "38", isCorrect: false, feedback: "Incorrect. The series is increasing by an increasing amount." }
        ]
      },
      {
        q: "If 'LIGHT' is coded as 'MJHIU', how is 'FLAME' coded?",
        options: [
          { text: "GMBNF", isCorrect: true, feedback: "Correct. Each letter is shifted by +1 in the alphabet (L->M, I->J, G->H, H->I, T->U). So F->G, L->M, A->B, M->N, E->F." },
          { text: "GLBMF", isCorrect: false, feedback: "Incorrect. Check the shift for each letter." },
          { text: "GMCNE", isCorrect: false, feedback: "Incorrect. The shift is consistently +1." },
          { text: "HMBOG", isCorrect: false, feedback: "Incorrect. That would be a +2 shift." }
        ]
      },
      {
        q: "A man is 24 years older than his son. In two years, his age will be twice the age of his son. The present age of his son is:",
        options: [
          { text: "14 years", isCorrect: false, feedback: "Incorrect. If son is 14, man is 38. In 2 years: son 16, man 40. 40 is not 2*16." },
          { text: "18 years", isCorrect: false, feedback: "Incorrect. If son is 18, man is 42. In 2 years: son 20, man 44. 44 is not 2*20." },
          { text: "20 years", isCorrect: false, feedback: "Incorrect. If son is 20, man is 44. In 2 years: son 22, man 46. 46 is not 2*22." },
          { text: "22 years", isCorrect: true, feedback: "Correct. Let son's age be x. Man's age is x+24. In 2 years: (x+24)+2 = 2(x+2). x+26 = 2x+4. x = 22." }
        ]
      },
      {
        q: "Which word does NOT belong with the others?",
        options: [
          { text: "Parsley", isCorrect: false, feedback: "Incorrect. This is an herb." },
          { text: "Basil", isCorrect: false, feedback: "Incorrect. This is an herb." },
          { text: "Dill", isCorrect: false, feedback: "Incorrect. This is an herb." },
          { text: "Mayonnaise", isCorrect: true, feedback: "Correct. Parsley, basil, and dill are all herbs, while mayonnaise is a condiment/sauce." }
        ]
      },
      {
        q: "A train 120 meters long passes a telegraph post in 6 seconds. The speed of the train is:",
        options: [
          { text: "60 km/hr", isCorrect: false, feedback: "Incorrect. Speed = Distance / Time = 120/6 = 20 m/s. 20 * 18/5 = 72 km/hr." },
          { text: "72 km/hr", isCorrect: true, feedback: "Correct. Speed = 120m / 6s = 20 m/s. To convert to km/hr: 20 * (3600/1000) = 72 km/hr." },
          { text: "80 km/hr", isCorrect: false, feedback: "Incorrect. Check your conversion from m/s to km/hr." },
          { text: "50 km/hr", isCorrect: false, feedback: "Incorrect. Speed in m/s is 20." }
        ]
      },
      {
        q: "A clock is started at noon. By 10 minutes past 5, the hour hand has turned through:",
        options: [
          { text: "145 degrees", isCorrect: false, feedback: "Incorrect. The hour hand moves 30 degrees per hour and 0.5 degrees per minute." },
          { text: "150 degrees", isCorrect: false, feedback: "Incorrect. This is only the angle for 5 hours." },
          { text: "155 degrees", isCorrect: true, feedback: "Correct. 5 hours = 150 degrees. 10 minutes = 5 degrees. Total = 155 degrees." },
          { text: "160 degrees", isCorrect: false, feedback: "Incorrect. Check the calculation for the minutes." }
        ]
      },
      {
        q: "The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?",
        options: [
          { text: "4 years", isCorrect: true, feedback: "Correct. Let ages be x, x+3, x+6, x+9, x+12. Sum = 5x + 30 = 50. 5x = 20, x = 4." },
          { text: "8 years", isCorrect: false, feedback: "Incorrect. If youngest is 8, sum is 8+11+14+17+20 = 70." },
          { text: "10 years", isCorrect: false, feedback: "Incorrect. If youngest is 10, sum is 10+13+16+19+22 = 80." },
          { text: "None of these", isCorrect: false, feedback: "Incorrect. The answer is 4." }
        ]
      },
      {
        q: "A father said to his son, 'I was as old as you are at the present at the time of your birth'. If the father's age is 38 years now, the son's age five years back was:",
        options: [
          { text: "14 years", isCorrect: true, feedback: "Correct. Let son's present age be x. Father's age at son's birth was 38-x. Given 38-x = x, so 2x = 38, x = 19. Son's age 5 years back = 19-5 = 14." },
          { text: "19 years", isCorrect: false, feedback: "Incorrect. This is the son's present age." },
          { text: "33 years", isCorrect: false, feedback: "Incorrect. This is the father's age 5 years back." },
          { text: "38 years", isCorrect: false, feedback: "Incorrect. This is the father's present age." }
        ]
      },
      {
        q: "A is two years older than B who is twice as old as C. If the total of the ages of A, B and C be 27, then how old is B?",
        options: [
          { text: "7", isCorrect: false, feedback: "Incorrect. If B=7, C=3.5, A=9. Sum = 19.5" },
          { text: "8", isCorrect: false, feedback: "Incorrect. If B=8, C=4, A=10. Sum = 22" },
          { text: "9", isCorrect: false, feedback: "Incorrect. If B=9, C=4.5, A=11. Sum = 24.5" },
          { text: "10", isCorrect: true, feedback: "Correct. Let C=x. B=2x. A=2x+2. Sum = x + 2x + 2x + 2 = 5x + 2 = 27. 5x = 25, x = 5. B = 2x = 10." }
        ]
      },
      {
        q: "Present ages of Sameer and Anand are in the ratio of 5 : 4 respectively. Three years hence, the ratio of their ages will become 11 : 9 respectively. What is Anand's present age in years?",
        options: [
          { text: "24", isCorrect: true, feedback: "Correct. Let ages be 5x and 4x. (5x+3)/(4x+3) = 11/9. 45x + 27 = 44x + 33. x = 6. Anand's age = 4x = 24." },
          { text: "27", isCorrect: false, feedback: "Incorrect. This is Anand's age 3 years hence." },
          { text: "40", isCorrect: false, feedback: "Incorrect. This is not Anand's age." },
          { text: "Cannot be determined", isCorrect: false, feedback: "Incorrect. The age can be determined." }
        ]
      },
      {
        q: "Six years ago, the ratio of the ages of Kunal and Sagar was 6 : 5. Four years hence, the ratio of their ages will be 11 : 10. What is Sagar's age at present?",
        options: [
          { text: "16 years", isCorrect: true, feedback: "Correct. Let ages 6 yrs ago be 6x and 5x. Present ages: 6x+6, 5x+6. In 4 yrs: (6x+10)/(5x+10) = 11/10. 60x+100 = 55x+110. 5x = 10, x = 2. Sagar's present age = 5x+6 = 16." },
          { text: "18 years", isCorrect: false, feedback: "Incorrect. Check the calculation." },
          { text: "20 years", isCorrect: false, feedback: "Incorrect. Check the calculation." },
          { text: "Cannot be determined", isCorrect: false, feedback: "Incorrect. The age can be determined." }
        ]
      },
      {
        q: "The sum of the present ages of a father and his son is 60 years. Six years ago, father's age was five times the age of the son. After 6 years, son's age will be:",
        options: [
          { text: "12 years", isCorrect: false, feedback: "Incorrect. This is the son's present age." },
          { text: "14 years", isCorrect: false, feedback: "Incorrect. Check the calculation." },
          { text: "18 years", isCorrect: false, feedback: "Incorrect. Check the calculation." },
          { text: "20 years", isCorrect: true, feedback: "Correct. Let present ages be F and S. F+S=60. F-6 = 5(S-6). (60-S)-6 = 5S-30. 54-S = 5S-30. 6S = 84. S = 14. Son's age after 6 years = 14+6 = 20." }
        ]
      },
      {
        q: "At present, the ratio between the ages of Arun and Deepak is 4 : 3. After 6 years, Arun's age will be 26 years. What is the age of Deepak at present?",
        options: [
          { text: "12 years", isCorrect: false, feedback: "Incorrect. Check the calculation." },
          { text: "15 years", isCorrect: true, feedback: "Correct. Let present ages be 4x and 3x. 4x + 6 = 26. 4x = 20, x = 5. Deepak's age = 3x = 15." },
          { text: "19 and half", isCorrect: false, feedback: "Incorrect. Check the calculation." },
          { text: "21 years", isCorrect: false, feedback: "Incorrect. Check the calculation." }
        ]
      },
      {
        q: "Sachin is younger than Rahul by 7 years. If their ages are in the respective ratio of 7 : 9, how old is Sachin?",
        options: [
          { text: "16 years", isCorrect: false, feedback: "Incorrect. Check the calculation." },
          { text: "18 years", isCorrect: false, feedback: "Incorrect. Check the calculation." },
          { text: "28 years", isCorrect: false, feedback: "Incorrect. Check the calculation." },
          { text: "24.5 years", isCorrect: true, feedback: "Correct. Let ages be 7x and 9x. 9x - 7x = 7. 2x = 7. x = 3.5. Sachin's age = 7x = 7 * 3.5 = 24.5." }
        ]
      },
      {
        q: "The present ages of three persons in proportions 4 : 7 : 9. Eight years ago, the sum of their ages was 56. Find their present ages (in years).",
        options: [
          { text: "8, 20, 28", isCorrect: false, feedback: "Incorrect. The ratio is not 4:7:9." },
          { text: "16, 28, 36", isCorrect: true, feedback: "Correct. Let present ages be 4x, 7x, 9x. (4x-8) + (7x-8) + (9x-8) = 56. 20x - 24 = 56. 20x = 80. x = 4. Ages are 16, 28, 36." },
          { text: "20, 35, 45", isCorrect: false, feedback: "Incorrect. Sum 8 years ago would be 12+27+37 = 76." },
          { text: "None of these", isCorrect: false, feedback: "Incorrect. The answer is 16, 28, 36." }
        ]
      },
      {
        q: "Ayesha's father was 38 years of age when she was born while her mother was 36 years old when her brother four years younger to her was born. What is the difference between the ages of her parents?",
        options: [
          { text: "2 years", isCorrect: false, feedback: "Incorrect. Check the calculation." },
          { text: "4 years", isCorrect: false, feedback: "Incorrect. Check the calculation." },
          { text: "6 years", isCorrect: true, feedback: "Correct. Mother's age when Ayesha's brother was born = 36. Father's age when Ayesha's brother was born = 38 + 4 = 42. Difference = 42 - 36 = 6 years." },
          { text: "8 years", isCorrect: false, feedback: "Incorrect. Check the calculation." }
        ]
      },
      {
        q: "A person crosses a 600 m long street in 5 minutes. What is his speed in km per hour?",
        options: [
          { text: "3.6", isCorrect: false, feedback: "Incorrect. Speed = 600m / 300s = 2 m/s." },
          { text: "7.2", isCorrect: true, feedback: "Correct. Speed = 600m / (5*60)s = 2 m/s. In km/hr: 2 * (18/5) = 7.2 km/hr." },
          { text: "8.4", isCorrect: false, feedback: "Incorrect. Check the conversion." },
          { text: "10", isCorrect: false, feedback: "Incorrect. Check the conversion." }
        ]
      },
      {
        q: "An aeroplane covers a certain distance at a speed of 240 kmph in 5 hours. To cover the same distance in 1 2/3 hours, it must travel at a speed of:",
        options: [
          { text: "300 kmph", isCorrect: false, feedback: "Incorrect. Check the calculation." },
          { text: "360 kmph", isCorrect: false, feedback: "Incorrect. Check the calculation." },
          { text: "600 kmph", isCorrect: false, feedback: "Incorrect. Check the calculation." },
          { text: "720 kmph", isCorrect: true, feedback: "Correct. Distance = 240 * 5 = 1200 km. Time = 5/3 hours. Speed = 1200 / (5/3) = 1200 * 3 / 5 = 720 kmph." }
        ]
      },
      {
        q: "If a person walks at 14 km/hr instead of 10 km/hr, he would have walked 20 km more. The actual distance travelled by him is:",
        options: [
          { text: "50 km", isCorrect: true, feedback: "Correct. Let actual distance be x. Time = x/10. If he walks at 14 km/hr, distance = x+20. Time = (x+20)/14. Since time is same: x/10 = (x+20)/14. 14x = 10x + 200. 4x = 200. x = 50." },
          { text: "56 km", isCorrect: false, feedback: "Incorrect. Check the calculation." },
          { text: "70 km", isCorrect: false, feedback: "Incorrect. Check the calculation." },
          { text: "80 km", isCorrect: false, feedback: "Incorrect. Check the calculation." }
        ]
      },
      {
        q: "A train can travel 50% faster than a car. Both start from point A at the same time and reach point B 75 kms away from A at the same time. On the way, however, the train lost about 12.5 minutes while stopping at the stations. The speed of the car is:",
        options: [
          { text: "100 kmph", isCorrect: false, feedback: "Incorrect. Check the calculation." },
          { text: "110 kmph", isCorrect: false, feedback: "Incorrect. Check the calculation." },
          { text: "120 kmph", isCorrect: true, feedback: "Correct. Let car speed be x. Train speed = 1.5x. Time taken by car = 75/x. Time taken by train = 75/(1.5x) = 50/x. Difference = 12.5 mins = 12.5/60 hrs. 75/x - 50/x = 12.5/60. 25/x = 12.5/60. x = 25 * 60 / 12.5 = 120." },
          { text: "130 kmph", isCorrect: false, feedback: "Incorrect. Check the calculation." }
        ]
      },
      {
        q: "Excluding stoppages, the speed of a bus is 54 kmph and including stoppages, it is 45 kmph. For how many minutes does the bus stop per hour?",
        options: [
          { text: "9", isCorrect: false, feedback: "Incorrect. Check the calculation." },
          { text: "10", isCorrect: true, feedback: "Correct. Due to stoppages, it covers 9 km less per hour (54 - 45). Time taken to cover 9 km at 54 kmph = (9/54) * 60 minutes = 10 minutes." },
          { text: "12", isCorrect: false, feedback: "Incorrect. Check the calculation." },
          { text: "20", isCorrect: false, feedback: "Incorrect. Check the calculation." }
        ]
      },
      {
        q: "In a flight of 600 km, an aircraft was slowed down due to bad weather. Its average speed for the trip was reduced by 200 km/hr and the time of flight increased by 30 minutes. The duration of the flight is:",
        options: [
          { text: "1 hour", isCorrect: true, feedback: "Correct. Let original duration be t hrs. Original speed = 600/t. New speed = 600/(t+0.5). 600/t - 600/(t+0.5) = 200. Solving this gives t = 1." },
          { text: "2 hours", isCorrect: false, feedback: "Incorrect. Check the calculation." },
          { text: "3 hours", isCorrect: false, feedback: "Incorrect. Check the calculation." },
          { text: "4 hours", isCorrect: false, feedback: "Incorrect. Check the calculation." }
        ]
      },
      {
        q: "A man complete a journey in 10 hours. He travels first half of the journey at the rate of 21 km/hr and second half at the rate of 24 km/hr. Find the total journey in km.",
        options: [
          { text: "220 km", isCorrect: false, feedback: "Incorrect. Check the calculation." },
          { text: "224 km", isCorrect: true, feedback: "Correct. Let total distance be x. Time for first half = (x/2)/21. Time for second half = (x/2)/24. Total time = x/42 + x/48 = 10. (8x + 7x)/336 = 10. 15x = 3360. x = 224." },
          { text: "230 km", isCorrect: false, feedback: "Incorrect. Check the calculation." },
          { text: "234 km", isCorrect: false, feedback: "Incorrect. Check the calculation." }
        ]
      },
      {
        q: "The ratio between the speeds of two trains is 7 : 8. If the second train runs 400 km in 4 hours, then the speed of the first train is:",
        options: [
          { text: "70 km/hr", isCorrect: false, feedback: "Incorrect. Check the calculation." },
          { text: "75 km/hr", isCorrect: false, feedback: "Incorrect. Check the calculation." },
          { text: "84 km/hr", isCorrect: false, feedback: "Incorrect. Check the calculation." },
          { text: "87.5 km/hr", isCorrect: true, feedback: "Correct. Speed of second train = 400/4 = 100 km/hr. Let speeds be 7x and 8x. 8x = 100 => x = 12.5. Speed of first train = 7 * 12.5 = 87.5 km/hr." }
        ]
      },
      {
        q: "A man on tour travels first 160 km at 64 km/hr and the next 160 km at 80 km/hr. The average speed for the first 320 km of the tour is:",
        options: [
          { text: "35.55 km/hr", isCorrect: false, feedback: "Incorrect. Check the calculation." },
          { text: "36 km/hr", isCorrect: false, feedback: "Incorrect. Check the calculation." },
          { text: "71.11 km/hr", isCorrect: true, feedback: "Correct. Total distance = 320 km. Total time = 160/64 + 160/80 = 2.5 + 2 = 4.5 hrs. Average speed = 320 / 4.5 = 71.11 km/hr." },
          { text: "71 km/hr", isCorrect: false, feedback: "Incorrect. Check the calculation." }
        ]
      },
      {
        q: "A car traveling with 5/7 of its actual speed covers 42 km in 1 hr 40 min 48 sec. Find the actual speed of the car.",
        options: [
          { text: "17 6/7 km/hr", isCorrect: false, feedback: "Incorrect. Check the calculation." },
          { text: "25 km/hr", isCorrect: false, feedback: "Incorrect. Check the calculation." },
          { text: "30 km/hr", isCorrect: false, feedback: "Incorrect. Check the calculation." },
          { text: "35 km/hr", isCorrect: true, feedback: "Correct. Time = 1 hr 40 min 48 sec = 1 + 40/60 + 48/3600 = 1 + 2/3 + 1/75 = 126/75 hrs. Speed = 42 / (126/75) = 25 km/hr. Let actual speed be x. 5/7 * x = 25. x = 35 km/hr." }
        ]
      },
      {
        q: "In covering a distance of 30 km, Abhay takes 2 hours more than Sameer. If Abhay doubles his speed, then he would take 1 hour less than Sameer. Abhay's speed is:",
        options: [
          { text: "5 kmph", isCorrect: true, feedback: "Correct. Let Abhay's speed be A and Sameer's be S. 30/A - 30/S = 2. 30/S - 30/(2A) = 1. Adding both: 30/A - 15/A = 3. 15/A = 3. A = 5." },
          { text: "6 kmph", isCorrect: false, feedback: "Incorrect. Check the calculation." },
          { text: "6.25 kmph", isCorrect: false, feedback: "Incorrect. Check the calculation." },
          { text: "7.5 kmph", isCorrect: false, feedback: "Incorrect. Check the calculation." }
        ]
      },
      {
        q: "Robert is travelling on his cycle and has calculated to reach point A at 2 P.M. if he travels at 10 kmph, he will reach there at 12 noon if he travels at 15 kmph. At what speed must he travel to reach A at 1 P.M.?",
        options: [
          { text: "8 kmph", isCorrect: false, feedback: "Incorrect. Check the calculation." },
          { text: "11 kmph", isCorrect: false, feedback: "Incorrect. Check the calculation." },
          { text: "12 kmph", isCorrect: true, feedback: "Correct. Let distance be d and time taken at 10kmph be t. d/10 = t. d/15 = t - 2. So d/10 - d/15 = 2. d/30 = 2 => d = 60 km. t = 6 hrs. To reach at 1 PM, time = 5 hrs. Speed = 60/5 = 12 kmph." },
          { text: "14 kmph", isCorrect: false, feedback: "Incorrect. Check the calculation." }
        ]
      },
      {
        q: "It takes eight hours for a 600 km journey, if 120 km is done by train and the rest by car. It takes 20 minutes more, if 200 km is done by train and the rest by car. The ratio of the speed of the train to that of the cars is:",
        options: [
          { text: "2 : 3", isCorrect: false, feedback: "Incorrect. Check the calculation." },
          { text: "3 : 2", isCorrect: false, feedback: "Incorrect. Check the calculation." },
          { text: "3 : 4", isCorrect: true, feedback: "Correct. Let train speed be T and car speed be C. 120/T + 480/C = 8. 200/T + 400/C = 25/3. Solving these gives T = 60, C = 80. Ratio = 60:80 = 3:4." },
          { text: "4 : 3", isCorrect: false, feedback: "Incorrect. Check the calculation." }
        ]
      },
      {
        q: "A farmer travelled a distance of 61 km in 9 hours. He travelled partly on foot @ 4 km/hr and partly on bicycle @ 9 km/hr. The distance travelled on foot is:",
        options: [
          { text: "14 km", isCorrect: false, feedback: "Incorrect. Check the calculation." },
          { text: "15 km", isCorrect: false, feedback: "Incorrect. Check the calculation." },
          { text: "16 km", isCorrect: true, feedback: "Correct. Let distance on foot be x. Distance on bicycle = 61-x. x/4 + (61-x)/9 = 9. 9x + 244 - 4x = 324. 5x = 80. x = 16." },
          { text: "17 km", isCorrect: false, feedback: "Incorrect. Check the calculation." }
        ]
      }
    ]
  },
  "Computer Networks and Cloud Computing": {
    name: "Computer Networks and Cloud Computing",
    weightage: "10%",
    target: 100,
    questions: [
      {
        q: "Within the OSI seven-layer model, which layer bears the primary responsibility for translating, formatting, and encrypting data prior to its delivery to the Application layer?",
        options: [
          { text: "Transport Layer", isCorrect: false, feedback: "Incorrect. The Transport Layer (Layer 4) is responsible for end-to-end communication, reliability, and flow control, not data formatting or encryption." },
          { text: "Session Layer", isCorrect: false, feedback: "Incorrect. The Session Layer (Layer 5) manages sessions and dialogues between applications, not data translation." },
          { text: "Presentation Layer", isCorrect: true, feedback: "Correct. The Presentation Layer (Layer 6) acts as the network's data translator, handling data compression, formatting, and encryption/decryption to ensure readability by the Application layer." },
          { text: "Data Link Layer", isCorrect: false, feedback: "Incorrect. The Data Link Layer (Layer 2) handles node-to-node data transfer and error detection on the physical link." }
        ]
      },
      {
        q: "A financial institution operates a secure private cloud but experiences unpredictable, massive traffic spikes during the end of the fiscal year. Which cloud computing strategy optimally balances security compliance with demand scalability?",
        options: [
          { text: "Migrating all operations permanently to a public cloud.", isCorrect: false, feedback: "Incorrect. This would compromise the strict security compliance required for the institution's baseline sensitive operations." },
          { text: "Cloud bursting into a public cloud exclusively for the overflow traffic.", isCorrect: true, feedback: "Correct. Cloud bursting allows the institution to maintain sensitive operations within its secure private cloud while dynamically routing excess compute demands to a public cloud during traffic spikes, ensuring scalability and security." },
          { text: "Relying entirely on localized, on-premises virtualization.", isCorrect: false, feedback: "Incorrect. This approach lacks the necessary scalability to handle unpredictable, massive traffic spikes without significant, continuous capital expenditure." },
          { text: "Downgrading services to a peer-to-peer network.", isCorrect: false, feedback: "Incorrect. Peer-to-peer networks lack the centralized security, reliability, and performance required for a financial institution." }
        ]
      },
      {
        q: "In the architecture of Next Generation Networks (NGN), which specific component provides the control logic to bridge packet-switched IP networks with legacy circuit-switched networks?",
        options: [
          { text: "Session Border Controller (SBC)", isCorrect: false, feedback: "Incorrect. An SBC protects and regulates IP communications flows, but it does not provide the core control logic for bridging circuit and packet networks." },
          { text: "Media Gateway Controller (MGC)", isCorrect: true, feedback: "Correct. The Media Gateway Controller (MGC), or softswitch, manages the call control signaling and orchestration required to interface differing network types, commanding the Media Gateways." },
          { text: "Application Server (AS)", isCorrect: false, feedback: "Incorrect. An Application Server hosts and executes services (like voicemail or conferencing) but does not handle the core bridging logic between network types." },
          { text: "IP Routing Protocol", isCorrect: false, feedback: "Incorrect. Routing protocols determine paths for IP packets but do not bridge the fundamental gap between packet-switched and circuit-switched architectures." }
        ]
      },
      {
        q: "If a source transmits a 1000-bit packet over a link utilizing the stop-and-wait protocol, and the link exhibits a packet loss probability of 0.2, what is the expected total number of transmissions required to successfully transfer 200 packets?",
        options: [
          { text: "200", isCorrect: false, feedback: "Incorrect. This assumes zero packet loss, which contradicts the given 0.2 loss probability." },
          { text: "225", isCorrect: false, feedback: "Incorrect. This underestimates the impact of a 20% packet loss rate on the total transmissions." },
          { text: "250", isCorrect: true, feedback: "Correct. In a stop-and-wait protocol with a loss probability p, the expected number of transmissions per packet is 1 / (1 - p). Here, p = 0.2, so 1 / 0.8 = 1.25. For 200 packets, total expected transmissions = 200 * 1.25 = 250." },
          { text: "400", isCorrect: false, feedback: "Incorrect. This overestimates the required transmissions. It would imply an expected 2 transmissions per packet, which corresponds to a 0.5 loss probability." }
        ]
      },
      {
        q: "Which protocol is primarily used for assigning dynamic IP addresses to devices on a network, ensuring efficient address management and preventing conflicts?",
        options: [
          { text: "DNS", isCorrect: false, feedback: "Incorrect. DNS (Domain Name System) translates domain names to IP addresses, it does not assign IP addresses." },
          { text: "DHCP", isCorrect: true, feedback: "Correct. DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses and other network configuration parameters to devices, simplifying network management." },
          { text: "HTTP", isCorrect: false, feedback: "Incorrect. HTTP is an application-layer protocol for transmitting hypermedia documents, not for network configuration." },
          { text: "ICMP", isCorrect: false, feedback: "Incorrect. ICMP (Internet Control Message Protocol) is used for diagnostic and error-reporting purposes (e.g., ping)." }
        ]
      },
      {
        q: "In cloud computing, what does the term 'Elasticity' primarily refer to?",
        options: [
          { text: "The ability to encrypt data at rest.", isCorrect: false, feedback: "Incorrect. Encryption is a security feature, not related to the elasticity of resources." },
          { text: "The ability to dynamically scale resources up or down based on demand.", isCorrect: true, feedback: "Correct. Elasticity is the ability of a cloud provider to automatically provision or de-provision resources to match the current workload, optimizing costs and performance." },
          { text: "The physical durability of server hardware.", isCorrect: false, feedback: "Incorrect. Durability refers to data persistence and hardware reliability, not resource scaling." },
          { text: "The speed of the network connection between data centers.", isCorrect: false, feedback: "Incorrect. This refers to network latency or bandwidth, not elasticity." }
        ]
      },
      {
        q: "Which layer of the TCP/IP model is responsible for routing packets across different networks using IP addresses?",
        options: [
          { text: "Application Layer", isCorrect: false, feedback: "Incorrect. The Application layer provides network services directly to users or applications." },
          { text: "Transport Layer", isCorrect: false, feedback: "Incorrect. The Transport layer handles end-to-end communication and data integrity (e.g., TCP, UDP)." },
          { text: "Internet Layer", isCorrect: true, feedback: "Correct. The Internet layer (equivalent to the OSI Network layer) is responsible for logical addressing and routing packets across networks using IP." },
          { text: "Network Access Layer", isCorrect: false, feedback: "Incorrect. The Network Access layer handles physical transmission and data link protocols." }
        ]
      },
      {
        q: "What is the primary purpose of the Address Resolution Protocol (ARP) in a local area network?",
        options: [
          { text: "To map a known IP address to a physical MAC address.", isCorrect: true, feedback: "Correct. ARP is used to discover the hardware address (MAC) of a device when only its IP address is known, allowing for data link layer communication." },
          { text: "To resolve domain names into IP addresses.", isCorrect: false, feedback: "Incorrect. This is the function of DNS (Domain Name System)." },
          { text: "To assign dynamic IP addresses to new devices.", isCorrect: false, feedback: "Incorrect. This is the function of DHCP (Dynamic Host Configuration Protocol)." },
          { text: "To route packets between different subnets.", isCorrect: false, feedback: "Incorrect. Routing is handled by routers using IP tables, not ARP." }
        ]
      },
      {
        q: "Which layer of the OSI model ensures the reliable, error-free delivery of data segments between two end systems?",
        options: [
          { text: "Network Layer", isCorrect: false, feedback: "Incorrect. The Network layer handles routing and logical addressing, but not end-to-end reliability." },
          { text: "Transport Layer", isCorrect: true, feedback: "Correct. The Transport Layer (Layer 4) provides mechanisms for error recovery, flow control, and reliable data transfer (e.g., via TCP)." },
          { text: "Session Layer", isCorrect: false, feedback: "Incorrect. The Session layer manages dialogues and sessions, not the reliability of data segments." },
          { text: "Physical Layer", isCorrect: false, feedback: "Incorrect. The Physical layer deals with raw bit transmission over a physical medium." }
        ]
      },
      {
        q: "What is a primary advantage of IPv6 over IPv4 in modern networking?",
        options: [
          { text: "It uses a 32-bit address space.", isCorrect: false, feedback: "Incorrect. IPv4 uses 32-bit addresses; IPv6 uses 128-bit addresses." },
          { text: "It provides a vastly larger address space to accommodate more devices.", isCorrect: true, feedback: "Correct. IPv6's 128-bit address space provides approximately 3.4 x 10³⁸ addresses, solving the address exhaustion problem of IPv4." },
          { text: "It eliminates the need for any routing protocols.", isCorrect: false, feedback: "Incorrect. IPv6 still requires routing protocols like OSPFv3 or BGP to function." },
          { text: "It is strictly slower than IPv4 due to larger headers.", isCorrect: false, feedback: "Incorrect. While headers are larger, they are simplified to improve processing efficiency in routers." }
        ]
      },
      {
        q: "What is the primary function of a Content Delivery Network (CDN)?",
        options: [
          { text: "To provide a secure tunnel for remote access.", isCorrect: false, feedback: "Incorrect. This describes a VPN (Virtual Private Network)." },
          { text: "To cache and serve content from servers geographically closer to the user.", isCorrect: true, feedback: "Correct. CDNs reduce latency by storing copies of static content on 'edge' servers distributed globally, delivering it from the nearest location to the user." },
          { text: "To manage the internal database of a web application.", isCorrect: false, feedback: "Incorrect. Databases are managed by DBMS, not CDNs." },
          { text: "To assign IP addresses to local devices.", isCorrect: false, feedback: "Incorrect. This is handled by DHCP." }
        ]
      },
      {
        q: "In a network configuration, what is the purpose of a 'Default Gateway'?",
        options: [
          { text: "To act as the primary DNS server for the network.", isCorrect: false, feedback: "Incorrect. While a gateway might provide DNS, its primary role is routing." },
          { text: "To provide an exit point for traffic destined for a different network or the internet.", isCorrect: true, feedback: "Correct. The default gateway is the router that a host uses to send packets to any destination outside its local subnet." },
          { text: "To block all incoming traffic by default.", isCorrect: false, feedback: "Incorrect. This is the function of a firewall." },
          { text: "To store the MAC addresses of all local devices.", isCorrect: false, feedback: "Incorrect. This is the function of an ARP cache or a switch's MAC table." }
        ]
      },
      {
        q: "What is the core concept of 'Serverless Computing' in a cloud environment?",
        options: [
          { text: "Computing that does not use any physical servers.", isCorrect: false, feedback: "Incorrect. Servers still exist, but they are managed entirely by the cloud provider." },
          { text: "A model where the provider manages the infrastructure and scales resources automatically.", isCorrect: true, feedback: "Correct. In serverless (e.g., AWS Lambda), developers focus on code (functions) while the provider handles server provisioning, scaling, and maintenance." },
          { text: "Using only local on-premises hardware for all tasks.", isCorrect: false, feedback: "Incorrect. This is the opposite of cloud computing." },
          { text: "A network where every device acts as its own server.", isCorrect: false, feedback: "Incorrect. This describes a peer-to-peer (P2P) network." }
        ]
      },
      {
        q: "Which of the following is a key difference between the TCP and UDP protocols?",
        options: [
          { text: "TCP is faster than UDP for real-time streaming.", isCorrect: false, feedback: "Incorrect. UDP is generally faster because it has less overhead and no handshake." },
          { text: "TCP is connection-oriented and reliable, while UDP is connectionless and unreliable.", isCorrect: true, feedback: "Correct. TCP ensures data arrives in order and without errors via acknowledgments; UDP sends data without verifying receipt, making it better for speed-sensitive tasks." },
          { text: "UDP uses larger headers than TCP.", isCorrect: false, feedback: "Incorrect. UDP headers are much smaller (8 bytes) compared to TCP headers (20-60 bytes)." },
          { text: "TCP is only used for email, while UDP is only used for web browsing.", isCorrect: false, feedback: "Incorrect. Both are used for various applications; HTTP/HTTPS primarily use TCP." }
        ]
      },
      {
        q: "What is the purpose of a 'Subnet Mask' in an IP network?",
        options: [
          { text: "To hide the IP address of a device from the internet.", isCorrect: false, feedback: "Incorrect. This is typically done via NAT (Network Address Translation)." },
          { text: "To distinguish between the network portion and the host portion of an IP address.", isCorrect: true, feedback: "Correct. The subnet mask is used by devices to determine which part of the IP address refers to the network and which part refers to the specific host." },
          { text: "To encrypt the data payload of a packet.", isCorrect: false, feedback: "Incorrect. Encryption is handled by protocols like TLS or IPsec." },
          { text: "To limit the number of users who can access a website.", isCorrect: false, feedback: "Incorrect. This is handled by application-level logic or load balancers." }
        ]
      },
      {
        q: "What does the term 'Infrastructure as Code' (IaC) refer to in cloud management?",
        options: [
          { text: "Writing the source code for the cloud provider's operating system.", isCorrect: false, feedback: "Incorrect. IaC is about managing your own resources, not the provider's internals." },
          { text: "Managing and provisioning infrastructure through machine-readable definition files.", isCorrect: true, feedback: "Correct. IaC allows teams to automate the setup of servers, networks, and other resources using code (e.g., Terraform, CloudFormation), ensuring consistency." },
          { text: "Using only physical cables to configure a cloud network.", isCorrect: false, feedback: "Incorrect. Cloud infrastructure is virtualized and managed via software." },
          { text: "A requirement that all cloud developers must know assembly language.", isCorrect: false, feedback: "Incorrect. IaC typically uses high-level declarative or imperative languages." }
        ]
      },
      {
        q: "What is the primary benefit of using a Virtual Private Network (VPN)?",
        options: [
          { text: "It increases the physical speed of the internet connection.", isCorrect: false, feedback: "Incorrect. VPNs often slightly decrease speed due to encryption overhead." },
          { text: "It creates a secure, encrypted tunnel for data transmission over a public network.", isCorrect: true, feedback: "Correct. A VPN protects privacy and security by encrypting traffic between the user's device and the VPN server, masking the user's IP and location." },
          { text: "It replaces the need for an Internet Service Provider (ISP).", isCorrect: false, feedback: "Incorrect. You still need an ISP to connect to the VPN server." },
          { text: "It automatically deletes all cookies from the browser.", isCorrect: false, feedback: "Incorrect. This is a browser privacy feature, not a core function of a VPN." }
        ]
      },
      {
        q: "What is the function of the 'Time to Live' (TTL) field in an IP packet header?",
        options: [
          { text: "To specify the time of day the packet was sent.", isCorrect: false, feedback: "Incorrect. TTL is not a timestamp." },
          { text: "To prevent a packet from circulating indefinitely in a network loop.", isCorrect: true, feedback: "Correct. TTL is a counter that is decremented by each router. When it reaches zero, the packet is discarded, preventing infinite loops." },
          { text: "To determine the priority of the packet.", isCorrect: false, feedback: "Incorrect. Priority is handled by the Type of Service (ToS) or Differentiated Services (DiffServ) fields." },
          { text: "To define the expiration date of the data inside.", isCorrect: false, feedback: "Incorrect. TTL refers to the network lifespan of the packet itself." }
        ]
      },
      {
        q: "In cloud computing, what does 'SaaS' stand for?",
        options: [
          { text: "System as a Service", isCorrect: false, feedback: "Incorrect. The first 'S' stands for Software." },
          { text: "Software as a Service", isCorrect: true, feedback: "Correct. SaaS is a software distribution model where applications are hosted by a provider and made available to customers over the internet." },
          { text: "Security as a Service", isCorrect: false, feedback: "Incorrect. While SECaaS exists, SaaS is the standard term for software delivery." },
          { text: "Storage as a Service", isCorrect: false, feedback: "Incorrect. Storage is usually part of IaaS or a specific storage service." }
        ]
      },
      {
        q: "Which port number is standard for the HTTPS protocol?",
        options: [
          { text: "80", isCorrect: false, feedback: "Incorrect. Port 80 is used for standard HTTP." },
          { text: "443", isCorrect: true, feedback: "Correct. Port 443 is the default port for secure web traffic using HTTPS (SSL/TLS)." },
          { text: "21", isCorrect: false, feedback: "Incorrect. Port 21 is used for FTP." },
          { text: "25", isCorrect: false, feedback: "Incorrect. Port 25 is used for SMTP (email)." }
        ]
      },
      {
        q: "What is 'Latency' in the context of computer networks?",
        options: [
          { text: "The total amount of data that can be sent in a given time.", isCorrect: false, feedback: "Incorrect. This describes bandwidth." },
          { text: "The time delay between sending a request and receiving a response.", isCorrect: true, feedback: "Correct. Latency measures the time it takes for a data packet to travel from source to destination." },
          { text: "The number of errors encountered during transmission.", isCorrect: false, feedback: "Incorrect. This is the error rate." },
          { text: "The physical distance between two network nodes.", isCorrect: false, feedback: "Incorrect. While distance affects latency, latency is the time measurement." }
        ]
      },
      {
        q: "What is the primary role of a 'Load Balancer' in a web application architecture?",
        options: [
          { text: "To encrypt all incoming database queries.", isCorrect: false, feedback: "Incorrect. Encryption is handled by the database or application layer." },
          { text: "To distribute incoming network traffic across multiple servers.", isCorrect: true, feedback: "Correct. Load balancers prevent any single server from becoming a bottleneck, improving availability and responsiveness." },
          { text: "To store static images and videos for faster access.", isCorrect: false, feedback: "Incorrect. This is the role of a CDN." },
          { text: "To scan for viruses in uploaded files.", isCorrect: false, feedback: "Incorrect. This is handled by security software or specialized services." }
        ]
      },
      {
        q: "Which network topology connects all devices to a single central cable?",
        options: [
          { text: "Star", isCorrect: false, feedback: "Incorrect. Star topology connects all devices to a central hub or switch." },
          { text: "Bus", isCorrect: true, feedback: "Correct. In a bus topology, all nodes are connected to a single main cable (the backbone)." },
          { text: "Ring", isCorrect: false, feedback: "Incorrect. Ring topology connects devices in a closed loop." },
          { text: "Mesh", isCorrect: false, feedback: "Incorrect. Mesh topology involves multiple redundant connections between nodes." }
        ]
      },
      {
        q: "In the OSI model, which layer is responsible for data compression and encryption?",
        options: [
          { text: "Application Layer", isCorrect: false, feedback: "Incorrect. The Application layer provides the interface to the user." },
          { text: "Presentation Layer", isCorrect: true, feedback: "Correct. The Presentation Layer (Layer 6) handles data formatting, translation, encryption, and compression." },
          { text: "Session Layer", isCorrect: false, feedback: "Incorrect. The Session layer manages communication sessions." },
          { text: "Transport Layer", isCorrect: false, feedback: "Incorrect. The Transport layer handles end-to-end delivery." }
        ]
      },
      {
        q: "What is 'Phishing' in the context of network security?",
        options: [
          { text: "A technique to increase network bandwidth.", isCorrect: false, feedback: "Incorrect. Phishing is a malicious activity." },
          { text: "A fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity.", isCorrect: true, feedback: "Correct. Phishing typically involves deceptive emails or websites aimed at stealing credentials or financial data." },
          { text: "A method for testing the strength of a firewall.", isCorrect: false, feedback: "Incorrect. This is penetration testing." },
          { text: "The process of scanning a network for open ports.", isCorrect: false, feedback: "Incorrect. This is port scanning." }
        ]
      },
      {
        q: "What is a 'Hypervisor' in cloud computing?",
        options: [
          { text: "A high-speed router used in data centers.", isCorrect: false, feedback: "Incorrect. A hypervisor is software, not hardware." },
          { text: "Software that creates and runs virtual machines.", isCorrect: true, feedback: "Correct. A hypervisor (or VMM) allows multiple operating systems to share a single physical hardware host." },
          { text: "A tool for monitoring cloud billing and costs.", isCorrect: false, feedback: "Incorrect. These are cost management tools." },
          { text: "The physical cooling system for a server rack.", isCorrect: false, feedback: "Incorrect. This is part of data center infrastructure." }
        ]
      },
      {
        q: "Which protocol is used to securely transfer files between a client and a server over a network?",
        options: [
          { text: "HTTP", isCorrect: false, feedback: "Incorrect. HTTP is for web content, not specifically for secure file transfer." },
          { text: "SFTP", isCorrect: true, feedback: "Correct. SFTP (SSH File Transfer Protocol) provides secure file access, transfer, and management over a reliable data stream." },
          { text: "SMTP", isCorrect: false, feedback: "Incorrect. SMTP is for sending emails." },
          { text: "SNMP", isCorrect: false, feedback: "Incorrect. SNMP is for network management." }
        ]
      }
    ]
  },
  "Programming (C++/Java/Python)": {
    name: "Programming (C++/Java/Python)",
    weightage: "10%",
    target: 100,
    questions: [
      {
        q: "In modern C++ development, what is the primary architectural advantage of utilizing smart pointers (e.g., std::shared_ptr) over traditional raw pointers?",
        options: [
          { text: "They bypass the compiler to increase runtime execution speed.", isCorrect: false, feedback: "Incorrect. Smart pointers actually introduce a slight runtime overhead compared to raw pointers due to reference counting or ownership tracking." },
          { text: "They provide automatic deterministic memory management, mitigating memory leaks.", isCorrect: true, feedback: "Correct. Smart pointers utilize the RAII idiom to ensure memory is automatically deallocated when the pointer goes out of scope or the reference count drops to zero, eliminating memory leaks." },
          { text: "They are exclusively required for multi-dimensional array initialization.", isCorrect: false, feedback: "Incorrect. Raw pointers or standard library containers like std::vector can also be used for multi-dimensional arrays." },
          { text: "They automatically convert integer data types to floating-point.", isCorrect: false, feedback: "Incorrect. Smart pointers manage memory; they do not perform implicit data type conversions." }
        ]
      },
      {
        q: "Which defining characteristic of the Python programming language dictates how variables are processed in memory during execution, distinguishing it from statically typed languages like Java?",
        options: [
          { text: "Python requires manual declaration of data types prior to compilation.", isCorrect: false, feedback: "Incorrect. This describes statically typed languages like Java or C++, not Python." },
          { text: "Python restricts variables to immutable states once assigned.", isCorrect: false, feedback: "Incorrect. While some Python types (like tuples or strings) are immutable, variables themselves can be reassigned to different objects." },
          { text: "Python is dynamically typed, interpreting variable data types at runtime based on assigned values.", isCorrect: true, feedback: "Correct. Python utilizes dynamic typing, meaning the interpreter assigns the data type at runtime based on the object referenced, providing immense flexibility." },
          { text: "Python does not support Object-Oriented Programming constructs.", isCorrect: false, feedback: "Incorrect. Python is a multi-paradigm language that fully supports Object-Oriented Programming." }
        ]
      },
      {
        q: "When engineering robust software architectures, which programmatic construct is primarily deployed to intercept anomalous operational states and prevent catastrophic application termination?",
        options: [
          { text: "Pointer arithmetic", isCorrect: false, feedback: "Incorrect. Pointer arithmetic is used for memory manipulation and can often be a source of errors, not a mechanism to intercept them." },
          { text: "Exception handling structures (try/catch/except)", isCorrect: true, feedback: "Correct. Exception handling allows developers to wrap volatile code in try blocks and intercept specific error classes, enabling graceful recovery or termination." },
          { text: "Deep copy constructors", isCorrect: false, feedback: "Incorrect. Deep copy constructors are used to duplicate objects and their underlying dynamically allocated memory, not to handle runtime errors." },
          { text: "Garbage collection pauses", isCorrect: false, feedback: "Incorrect. Garbage collection pauses are an artifact of automated memory management, not a construct deployed by developers to handle anomalous states." }
        ]
      },
      {
        q: "What occurs in C++ if a developer explicitly invokes the `delete` operator on a pointer that has already been assigned the `nullptr` value?",
        options: [
          { text: "A severe memory leak is generated.", isCorrect: false, feedback: "Incorrect. Deleting a null pointer does not leak memory; it simply does nothing." },
          { text: "The program throws a compilation error.", isCorrect: false, feedback: "Incorrect. The compiler allows calling delete on a pointer, regardless of whether it points to null or valid memory." },
          { text: "The program throws a runtime exception.", isCorrect: false, feedback: "Incorrect. Unlike dereferencing a null pointer, deleting a null pointer is explicitly defined as a safe, no-op operation in C++." },
          { text: "The operation is safely ignored with no adverse effects.", isCorrect: true, feedback: "Correct. The C++ standard explicitly guarantees that applying the delete operator to a null pointer has no effect, allowing developers to safely delete pointers without explicit null-checking." }
        ]
      },
      {
        q: "In Java, what is the purpose of the 'final' keyword when applied to a class?",
        options: [
          { text: "It prevents the class from being instantiated.", isCorrect: false, feedback: "Incorrect. This is achieved using the 'abstract' keyword or a private constructor." },
          { text: "It prevents the class from being inherited.", isCorrect: true, feedback: "Correct. A 'final' class in Java cannot be subclassed, ensuring its implementation remains unchanged and secure." },
          { text: "It makes all methods in the class static.", isCorrect: false, feedback: "Incorrect. Static methods must be explicitly declared with the 'static' keyword." },
          { text: "It ensures the class is thread-safe.", isCorrect: false, feedback: "Incorrect. Thread safety requires explicit synchronization or immutable data structures." }
        ]
      },
      {
        q: "Which Python data structure is unordered and does not allow duplicate elements?",
        options: [
          { text: "List", isCorrect: false, feedback: "Incorrect. Lists are ordered and allow duplicates." },
          { text: "Tuple", isCorrect: false, feedback: "Incorrect. Tuples are ordered and allow duplicates." },
          { text: "Set", isCorrect: true, feedback: "Correct. Sets in Python are unordered collections of unique elements, useful for membership testing and removing duplicates." },
          { text: "Dictionary", isCorrect: false, feedback: "Incorrect. Dictionaries store key-value pairs; while keys must be unique, the structure itself is a mapping." }
        ]
      },
      {
        q: "In Java, what is the concept of 'Method Overloading'?",
        options: [
          { text: "Defining multiple methods in the same class with the same name but different parameters.", isCorrect: true, feedback: "Correct. Method overloading allows a class to have more than one method with the same name, provided their argument lists are different (type, number, or both)." },
          { text: "Redefining a method in a subclass that was already defined in the superclass.", isCorrect: false, feedback: "Incorrect. This describes 'Method Overriding'." },
          { text: "Calling a method too many times until the stack overflows.", isCorrect: false, feedback: "Incorrect. This is a runtime error, not a programming concept." },
          { text: "Creating a method that can handle any data type automatically.", isCorrect: false, feedback: "Incorrect. While related to polymorphism, overloading requires explicit definitions for different types." }
        ]
      },
      {
        q: "What is the purpose of a 'Virtual Function' in C++?",
        options: [
          { text: "To allow a function to be called without an object.", isCorrect: false, feedback: "Incorrect. This is the purpose of a 'static' function." },
          { text: "To enable dynamic (runtime) polymorphism by allowing a derived class to override a base class method.", isCorrect: true, feedback: "Correct. Declaring a function as 'virtual' in a base class ensures that the correct method for the actual object type is called at runtime, even when using a base class pointer." },
          { text: "To speed up the compilation process.", isCorrect: false, feedback: "Incorrect. Virtual functions actually introduce a small runtime overhead due to the vtable lookup." },
          { text: "To prevent a function from being modified by other developers.", isCorrect: false, feedback: "Incorrect. This is more related to access modifiers or the 'final' keyword." }
        ]
      },
      {
        q: "In Python, how do you properly handle potential runtime errors using a specific block structure?",
        options: [
          { text: "if/else blocks", isCorrect: false, feedback: "Incorrect. if/else is for conditional logic, not for catching unexpected runtime exceptions." },
          { text: "try/except blocks", isCorrect: true, feedback: "Correct. The try block contains code that might raise an exception, and the except block contains the code to handle that exception if it occurs." },
          { text: "for/while loops", isCorrect: false, feedback: "Incorrect. These are for iteration, not error handling." },
          { text: "def/return statements", isCorrect: false, feedback: "Incorrect. These are for defining and exiting functions." }
        ]
      },
      {
        q: "In Python, what is the fundamental difference between the `==` operator and the `is` operator?",
        options: [
          { text: "`==` checks for identity, while `is` checks for equality.", isCorrect: false, feedback: "Incorrect. It is the other way around." },
          { text: "`==` checks if values are equal, while `is` checks if both variables point to the exact same object in memory.", isCorrect: true, feedback: "Correct. `==` compares the contents of objects, whereas `is` checks for object identity (memory address)." },
          { text: "There is no difference; they are interchangeable.", isCorrect: false, feedback: "Incorrect. Using them interchangeably can lead to subtle bugs, especially with small integers or strings." },
          { text: "`is` is only used for comparing strings.", isCorrect: false, feedback: "Incorrect. `is` can be used with any object type to check identity." }
        ]
      },
      {
        q: "What is the core principle of 'Encapsulation' in Object-Oriented Programming?",
        options: [
          { text: "The ability of an object to take on many forms.", isCorrect: false, feedback: "Incorrect. This describes 'Polymorphism'." },
          { text: "Bundling data and the methods that operate on that data into a single unit (class) and restricting direct access.", isCorrect: true, feedback: "Correct. Encapsulation hides the internal state of an object and only allows interaction through well-defined interfaces (getters/setters)." },
          { text: "Creating a new class based on an existing class.", isCorrect: false, feedback: "Incorrect. This describes 'Inheritance'." },
          { text: "Reducing complex systems into simpler components.", isCorrect: false, feedback: "Incorrect. This is a general engineering principle, often called 'Abstraction'." }
        ]
      },
      {
        q: "In the context of a class, what is a 'Constructor'?",
        options: [
          { text: "A method used to destroy an object and free memory.", isCorrect: false, feedback: "Incorrect. This is a 'Destructor'." },
          { text: "A special method that is automatically called when a new instance of a class is created.", isCorrect: true, feedback: "Correct. Constructors are used to initialize the object's state (attributes) at the time of creation." },
          { text: "A tool used to compile the source code into machine code.", isCorrect: false, feedback: "Incorrect. This is a 'Compiler'." },
          { text: "A keyword used to define a constant variable.", isCorrect: false, feedback: "Incorrect. This is typically 'const' or 'final'." }
        ]
      },
      {
        q: "What is the effect of the `static` keyword when applied to a variable in a Java class?",
        options: [
          { text: "The variable's value cannot be changed after initialization.", isCorrect: false, feedback: "Incorrect. This is the effect of the 'final' keyword." },
          { text: "The variable belongs to the class itself rather than to any specific instance, and is shared by all instances.", isCorrect: true, feedback: "Correct. Static variables are initialized once when the class is loaded and are common to all objects created from that class." },
          { text: "The variable is only accessible within the same package.", isCorrect: false, feedback: "Incorrect. This is the default (package-private) access level." },
          { text: "The variable is stored in the CPU registers for faster access.", isCorrect: false, feedback: "Incorrect. This is a low-level optimization not directly controlled by the 'static' keyword in Java." }
        ]
      },
      {
        q: "Which of the following describes 'Multiple Inheritance', and which language is known for supporting it directly?",
        options: [
          { text: "A class inheriting from multiple parent classes; supported by C++.", isCorrect: true, feedback: "Correct. Multiple inheritance allows a class to inherit features from more than one base class. C++ supports this, while Java and Python handle it differently (e.g., via interfaces or MRO)." },
          { text: "A class having multiple subclasses; supported by all OOP languages.", isCorrect: false, feedback: "Incorrect. This is just standard inheritance." },
          { text: "A method having multiple return types; supported by Python.", isCorrect: false, feedback: "Incorrect. This is not related to inheritance." },
          { text: "A variable having multiple values at once; supported by Java.", isCorrect: false, feedback: "Incorrect. This is not a standard programming concept." }
        ]
      },
      {
        q: "In Python, what is a 'Decorator' primarily used for?",
        options: [
          { text: "To add comments to a function automatically.", isCorrect: false, feedback: "Incorrect. Comments are for humans and don't affect execution." },
          { text: "To modify or enhance the behavior of a function or class without changing its source code.", isCorrect: true, feedback: "Correct. Decorators are a powerful tool that allows you to 'wrap' another function to extend its functionality (e.g., for logging, timing, or access control)." },
          { text: "To change the color of the text in the console output.", isCorrect: false, feedback: "Incorrect. This is typically done with ANSI escape codes or libraries like Colorama." },
          { text: "To delete a variable from memory.", isCorrect: false, feedback: "Incorrect. This is done with the 'del' keyword." }
        ]
      },
      {
        q: "What is a 'Memory Leak' in a C++ application, and how can it be prevented?",
        options: [
          { text: "When the program runs out of disk space; prevented by deleting files.", isCorrect: false, feedback: "Incorrect. Memory leaks occur in RAM, not on the disk." },
          { text: "When dynamically allocated memory is not deallocated, leading to wasted RAM; prevented by using smart pointers or careful 'delete' calls.", isCorrect: true, feedback: "Correct. A memory leak happens when 'new' is used without a corresponding 'delete'. Modern C++ encourages smart pointers (std::unique_ptr, std::shared_ptr) to automate this." },
          { text: "When the CPU overheats; prevented by better cooling.", isCorrect: false, feedback: "Incorrect. This is a hardware issue." },
          { text: "When a variable is assigned a value that is too large for its type; prevented by type checking.", isCorrect: false, feedback: "Incorrect. This is an 'Overflow' error." }
        ]
      },
      {
        q: "In Java, what is the difference between an 'Interface' and an 'Abstract Class'?",
        options: [
          { text: "Interfaces can have state, while abstract classes cannot.", isCorrect: false, feedback: "Incorrect. Abstract classes can have instance variables (state), while interfaces (traditionally) cannot." },
          { text: "A class can implement multiple interfaces but can only extend one abstract class.", isCorrect: true, feedback: "Correct. Java supports multiple inheritance of type through interfaces, but only single inheritance of implementation through classes." },
          { text: "Abstract classes are faster than interfaces.", isCorrect: false, feedback: "Incorrect. Performance differences are negligible in most modern JVMs." },
          { text: "Interfaces are only used for GUI components.", isCorrect: false, feedback: "Incorrect. Interfaces are a fundamental tool for defining contracts in any part of an application." }
        ]
      },
      {
        q: "What is the purpose of the `__init__` method in a Python class?",
        options: [
          { text: "To define the class as a private module.", isCorrect: false, feedback: "Incorrect. `__init__` is a method, not a module definition." },
          { text: "To initialize the attributes of an object when it is created.", isCorrect: true, feedback: "Correct. `__init__` is the constructor method in Python, called automatically when a new instance of the class is instantiated." },
          { text: "To delete an object from memory.", isCorrect: false, feedback: "Incorrect. This is the purpose of the `__del__` method." },
          { text: "To convert the object to a string representation.", isCorrect: false, feedback: "Incorrect. This is the purpose of the `__str__` or `__repr__` methods." }
        ]
      },
      {
        q: "In C++, what does the `const` keyword signify when applied to a member function?",
        options: [
          { text: "The function can only be called once.", isCorrect: false, feedback: "Incorrect. `const` does not limit the number of calls." },
          { text: "The function is not allowed to modify any member variables of the class.", isCorrect: true, feedback: "Correct. A `const` member function promises not to change the state of the object it is called on, allowing it to be called on `const` objects." },
          { text: "The function returns a constant value.", isCorrect: false, feedback: "Incorrect. The return type would need its own `const` qualifier for that." },
          { text: "The function is stored in read-only memory.", isCorrect: false, feedback: "Incorrect. `const` on a function is a semantic constraint for the compiler, not a memory placement instruction." }
        ]
      },
      {
        q: "What is 'Garbage Collection' in languages like Java and Python?",
        options: [
          { text: "A process that deletes old files from the hard drive.", isCorrect: false, feedback: "Incorrect. Garbage collection manages RAM, not disk space." },
          { text: "An automatic memory management process that reclaims memory occupied by objects no longer in use.", isCorrect: true, feedback: "Correct. The garbage collector identifies objects that are no longer reachable by the program and frees their memory, preventing leaks." },
          { text: "A tool for cleaning up syntax errors in the code.", isCorrect: false, feedback: "Incorrect. This is the job of a linter or compiler." },
          { text: "A security feature that removes malicious code from the application.", isCorrect: false, feedback: "Incorrect. This is the job of an antivirus or security scanner." }
        ]
      },
      {
        q: "In Python, what is the 'Global Interpreter Lock' (GIL)?",
        options: [
          { text: "A security lock that prevents unauthorized access to the script.", isCorrect: false, feedback: "Incorrect. The GIL is a mechanism in the CPython interpreter." },
          { text: "A mutex that allows only one thread to execute Python bytecodes at a time.", isCorrect: true, feedback: "Correct. The GIL ensures thread safety in CPython by preventing multiple native threads from executing Python code simultaneously, which can limit multi-core performance for CPU-bound tasks." },
          { text: "A feature that allows Python to run on any operating system.", isCorrect: false, feedback: "Incorrect. This is cross-platform compatibility." },
          { text: "A tool for locking variables to prevent them from being changed.", isCorrect: false, feedback: "Incorrect. This would be related to immutability or constants." }
        ]
      },
      {
        q: "What is the difference between 'Pass-by-Value' and 'Pass-by-Reference'?",
        options: [
          { text: "Pass-by-value is only used for integers.", isCorrect: false, feedback: "Incorrect. Any data type can be passed by value." },
          { text: "Pass-by-value sends a copy of the data, while pass-by-reference sends the memory address of the original data.", isCorrect: true, feedback: "Correct. In pass-by-value, changes to the parameter inside the function do not affect the original; in pass-by-reference, they do." },
          { text: "Pass-by-reference is always slower than pass-by-value.", isCorrect: false, feedback: "Incorrect. For large objects, pass-by-reference is often faster because it avoids copying." },
          { text: "Pass-by-value is a feature unique to Python.", isCorrect: false, feedback: "Incorrect. Most programming languages support both or have specific defaults." }
        ]
      },
      {
        q: "In Java, what is the 'Java Virtual Machine' (JVM)?",
        options: [
          { text: "A physical computer designed specifically for Java.", isCorrect: false, feedback: "Incorrect. The JVM is a software-based virtual machine." },
          { text: "An engine that provides a runtime environment to drive the Java Code or applications.", isCorrect: true, feedback: "Correct. The JVM converts Java bytecode into machine language, allowing Java programs to run on any device or OS that has a JVM installed ('Write Once, Run Anywhere')." },
          { text: "A library of pre-written Java functions.", isCorrect: false, feedback: "Incorrect. This describes the Java Class Library or API." },
          { text: "A tool for converting Java code into Python code.", isCorrect: false, feedback: "Incorrect. This would be a transpiler." }
        ]
      },
      {
        q: "What is 'Recursion' in programming?",
        options: [
          { text: "A loop that never ends.", isCorrect: false, feedback: "Incorrect. An infinite loop is a bug; recursion should have a base case to terminate." },
          { text: "A programming technique where a function calls itself to solve a problem.", isCorrect: true, feedback: "Correct. Recursion breaks a problem down into smaller, similar sub-problems until a base case is reached." },
          { text: "A way to store multiple values in a single variable.", isCorrect: false, feedback: "Incorrect. This describes an array or list." },
          { text: "The process of repeating a block of code a specific number of times.", isCorrect: false, feedback: "Incorrect. This describes a 'for' loop." }
        ]
      },
      {
        q: "In C++, what is a 'Namespace' used for?",
        options: [
          { text: "To define the name of the executable file.", isCorrect: false, feedback: "Incorrect. This is handled by the build system or compiler settings." },
          { text: "To organize code into logical groups and prevent name collisions.", isCorrect: true, feedback: "Correct. Namespaces allow you to use the same name for different entities in different parts of a large project without conflict (e.g., `std::vector` vs `my_project::vector`)." },
          { text: "To specify the physical location of the source files.", isCorrect: false, feedback: "Incorrect. This is handled by the file system and include paths." },
          { text: "To encrypt the names of variables for security.", isCorrect: false, feedback: "Incorrect. This is 'Obfuscation', not the purpose of namespaces." }
        ]
      }
    ]
  },
  "Data Structures & Algorithms": {
    name: "Data Structures & Algorithms",
    weightage: "10%",
    target: 100,
    questions: [
      {
        q: "In graph theory, which algorithmic technique is definitively utilized to compute the shortest path from a single source node to all other nodes, provided the graph contains strictly non-negative edge weights?",
        options: [
          { text: "Kruskal's Algorithm", isCorrect: false, feedback: "Incorrect. Kruskal's algorithm is used to find the Minimum Spanning Tree of a graph, not the shortest paths from a single source." },
          { text: "Dijkstra's Algorithm", isCorrect: true, feedback: "Correct. Dijkstra's algorithm uses a greedy approach to reliably find the shortest paths from a source to all other vertices in a weighted graph with non-negative edge weights." },
          { text: "Depth-First Search (DFS)", isCorrect: false, feedback: "Incorrect. DFS is used for traversing or searching tree or graph data structures, but it does not compute shortest paths in weighted graphs." },
          { text: "Bellman-Ford Algorithm", isCorrect: false, feedback: "Incorrect. While Bellman-Ford computes shortest paths, it is specifically designed to handle graphs with negative edge weights, making Dijkstra's the definitive choice for strictly non-negative weights due to its better performance." }
        ]
      },
      {
        q: "What is the asymptotic worst-case time complexity of executing a Binary Search operation to locate a specific element within an already sorted array of n elements?",
        options: [
          { text: "O(1)", isCorrect: false, feedback: "Incorrect. O(1) implies constant time, which would mean finding the element instantly regardless of array size, typical of hash table lookups, not binary search." },
          { text: "O(n)", isCorrect: false, feedback: "Incorrect. O(n) is the worst-case time complexity for a linear search, where every element must be checked sequentially." },
          { text: "O(log n)", isCorrect: true, feedback: "Correct. Binary search halves the search space during each iterative step. Because the dataset is repeatedly divided by two, the maximum number of steps scales logarithmically, expressed as O(log n)." },
          { text: "O(n log n)", isCorrect: false, feedback: "Incorrect. O(n log n) is typical for efficient sorting algorithms like Merge Sort or Quick Sort, not for searching an already sorted array." }
        ]
      },
      {
        q: "Consider an empty stack into which the elements A, B, C, and D are sequentially pushed. If two elements are subsequently popped from this stack and immediately enqueued into an empty queue, which element will be dequeued first?",
        options: [
          { text: "A", isCorrect: false, feedback: "Incorrect. A is at the bottom of the stack and will not be popped in the first two operations." },
          { text: "B", isCorrect: false, feedback: "Incorrect. B is below C and D in the stack and will not be popped in the first two operations." },
          { text: "C", isCorrect: false, feedback: "Incorrect. C is popped second (after D) and enqueued second. Therefore, it will be dequeued second." },
          { text: "D", isCorrect: true, feedback: "Correct. A stack is Last-In-First-Out (LIFO). Pushing A, B, C, D means D is at the top. Popping two elements removes D, then C. Enqueuing them into a queue (First-In-First-Out) places D at the front. Therefore, a dequeue operation will output D first." }
        ]
      },
      {
        q: "Which tree data structure inherently self-balances its height via rotational operations during insertion and deletion to guarantee O(log n) time complexity for search operations?",
        options: [
          { text: "Binary Search Tree (Unbalanced)", isCorrect: false, feedback: "Incorrect. An unbalanced BST can degrade to a linked list (O(n) search time) if elements are inserted in sorted order." },
          { text: "Trie", isCorrect: false, feedback: "Incorrect. A Trie is used for efficient string matching and prefix searches, but it does not self-balance its height via rotational operations." },
          { text: "AVL Tree", isCorrect: true, feedback: "Correct. An AVL tree is a self-balancing binary search tree that tracks the balance factor of nodes and performs specific rotations to ensure the height difference between sibling subtrees never exceeds 1, guaranteeing O(log n) access times." },
          { text: "Heap", isCorrect: false, feedback: "Incorrect. A heap is a complete binary tree used primarily for priority queues, guaranteeing O(1) access to the max/min element, but searching for an arbitrary element takes O(n) time." }
        ]
      },
      {
        q: "What is the time complexity of inserting an element at the beginning of a singly linked list with n elements?",
        options: [
          { text: "O(1)", isCorrect: true, feedback: "Correct. Inserting at the head of a linked list only requires updating the new node's next pointer and the head pointer, which takes constant time regardless of list size." },
          { text: "O(n)", isCorrect: false, feedback: "Incorrect. O(n) would be the complexity for inserting at the end of the list (if no tail pointer is maintained) or at a specific index." },
          { text: "O(log n)", isCorrect: false, feedback: "Incorrect. Linked lists do not support logarithmic time operations for insertion." },
          { text: "O(n log n)", isCorrect: false, feedback: "Incorrect. This complexity is typical for sorting, not for simple list insertion." }
        ]
      },
      {
        q: "Which data structure is most efficient for implementing a 'Undo' feature in a text editor?",
        options: [
          { text: "Queue", isCorrect: false, feedback: "Incorrect. A queue is FIFO (First-In-First-Out), which would undo the oldest action first." },
          { text: "Stack", isCorrect: true, feedback: "Correct. A stack is LIFO (Last-In-First-Out), which perfectly matches the requirement to undo the most recent action first." },
          { text: "Linked List", isCorrect: false, feedback: "Incorrect. While possible, a stack is the specialized structure for this behavior." },
          { text: "Array", isCorrect: false, feedback: "Incorrect. Arrays require manual management of the 'top' element and can be less efficient for dynamic resizing compared to a stack." }
        ]
      },
      {
        q: "What is the worst-case time complexity of the QuickSort algorithm?",
        options: [
          { text: "O(n log n)", isCorrect: false, feedback: "Incorrect. This is the average-case complexity of QuickSort." },
          { text: "O(n²)", isCorrect: true, feedback: "Correct. The worst case for QuickSort occurs when the pivot selection consistently results in highly unbalanced partitions (e.g., when the array is already sorted), leading to quadratic time." },
          { text: "O(n)", isCorrect: false, feedback: "Incorrect. QuickSort is a comparison-based sort and cannot achieve linear time in the worst case." },
          { text: "O(log n)", isCorrect: false, feedback: "Incorrect. This is the complexity of searching in a balanced tree, not sorting an entire array." }
        ]
      },
      {
        q: "In the context of Hash Tables, what is a 'Hash Collision'?",
        options: [
          { text: "When the hash function fails to produce any output.", isCorrect: false, feedback: "Incorrect. A hash function always produces an output for a given input." },
          { text: "When two different keys produce the same hash value (index).", isCorrect: true, feedback: "Correct. Collisions are inevitable in hash tables because the set of possible keys is usually much larger than the number of available slots. They are handled via techniques like chaining or open addressing." },
          { text: "When the hash table runs out of memory.", isCorrect: false, feedback: "Incorrect. This is an overflow or out-of-memory error." },
          { text: "When the hash function is too slow to execute.", isCorrect: false, feedback: "Incorrect. This is a performance bottleneck, not a collision." }
        ]
      },
      {
        q: "What is the fundamental structural difference between a Tree and a Graph?",
        options: [
          { text: "Trees have weights on edges, while graphs do not.", isCorrect: false, feedback: "Incorrect. Both can be weighted or unweighted." },
          { text: "A Tree is a specific type of Graph that is connected and has no cycles.", isCorrect: true, feedback: "Correct. All trees are graphs, but not all graphs are trees. A tree must have exactly one path between any two nodes and cannot contain any loops." },
          { text: "Graphs are always directed, while trees are always undirected.", isCorrect: false, feedback: "Incorrect. Both can be directed or undirected." },
          { text: "Trees can only have two children per node, while graphs have no such limit.", isCorrect: false, feedback: "Incorrect. This describes a 'Binary Tree'; general trees can have any number of children." }
        ]
      },
      {
        q: "What is the core idea behind the 'Dynamic Programming' algorithmic technique?",
        options: [
          { text: "Solving a problem by randomly trying different solutions.", isCorrect: false, feedback: "Incorrect. This is more like a randomized or brute-force approach." },
          { text: "Breaking a complex problem into overlapping subproblems and storing the results of these subproblems to avoid redundant calculations.", isCorrect: true, feedback: "Correct. DP is used for optimization problems where subproblems recur. By 'memoizing' or 'tabulating' results, it significantly improves efficiency over simple recursion." },
          { text: "Executing multiple parts of an algorithm simultaneously on different processors.", isCorrect: false, feedback: "Incorrect. This is 'Parallel Programming'." },
          { text: "Using a heuristic to find a 'good enough' solution quickly.", isCorrect: false, feedback: "Incorrect. This describes 'Heuristic' or 'Greedy' algorithms." }
        ]
      },
      {
        q: "What is the time complexity of accessing an element at a specific index in a standard Array?",
        options: [
          { text: "O(1)", isCorrect: true, feedback: "Correct. Arrays are stored in contiguous memory blocks. Given the base address and the index, the exact memory location can be calculated and accessed in constant time." },
          { text: "O(n)", isCorrect: false, feedback: "Incorrect. This is the complexity of searching for a value in an unsorted array." },
          { text: "O(log n)", isCorrect: false, feedback: "Incorrect. This is the complexity of searching in a sorted array using binary search." },
          { text: "O(n²)", isCorrect: false, feedback: "Incorrect. This would be extremely inefficient for a simple index-based lookup." }
        ]
      },
      {
        q: "What is a 'Priority Queue' data structure?",
        options: [
          { text: "A queue where elements are processed in the exact order they arrived.", isCorrect: false, feedback: "Incorrect. This is a standard FIFO queue." },
          { text: "An abstract data type where each element has an associated priority, and the element with the highest priority is served first.", isCorrect: true, feedback: "Correct. Priority queues are often implemented using heaps to allow efficient insertion and extraction of the highest (or lowest) priority item." },
          { text: "A queue that only allows a limited number of high-priority users.", isCorrect: false, feedback: "Incorrect. Priority refers to the data elements themselves, not the users." },
          { text: "A list that is automatically sorted every time a new element is added.", isCorrect: false, feedback: "Incorrect. While it behaves similarly, a priority queue doesn't necessarily maintain a fully sorted list." }
        ]
      },
      {
        q: "What is the primary difference between Breadth-First Search (BFS) and Depth-First Search (DFS) traversal methods?",
        options: [
          { text: "BFS uses a Stack, while DFS uses a Queue.", isCorrect: false, feedback: "Incorrect. It's the opposite: BFS uses a Queue (FIFO), and DFS uses a Stack (LIFO) or recursion." },
          { text: "BFS explores all neighbor nodes at the current depth before moving deeper, while DFS explores as far as possible along each branch before backtracking.", isCorrect: true, feedback: "Correct. BFS is 'wide' and finds the shortest path in unweighted graphs; DFS is 'deep' and is useful for topological sorting or finding cycles." },
          { text: "DFS is always faster than BFS.", isCorrect: false, feedback: "Incorrect. The performance depends on the structure of the graph and the goal of the search." },
          { text: "BFS can only be used on trees, while DFS can be used on any graph.", isCorrect: false, feedback: "Incorrect. Both can be used on any graph or tree structure." }
        ]
      },
      {
        q: "What is a 'Circular Linked List'?",
        options: [
          { text: "A list where each node points to a random other node.", isCorrect: false, feedback: "Incorrect. This would be a chaotic graph, not a list." },
          { text: "A linked list where the last node points back to the first node, forming a loop.", isCorrect: true, feedback: "Correct. This allows for continuous traversal of the list without ever reaching a 'null' end, useful for round-robin scheduling." },
          { text: "A list that can only store numbers in a circular range (e.g., 0-360).", isCorrect: false, feedback: "Incorrect. The 'circular' part refers to the structure of the pointers, not the data values." },
          { text: "A list that is physically stored in a circular pattern on the hard drive.", isCorrect: false, feedback: "Incorrect. Memory and disk storage are linear; the circularity is a logical construct." }
        ]
      },
      {
        q: "In the context of Dynamic Programming, what does 'Memoization' refer to?",
        options: [
          { text: "Writing down the steps of the algorithm on paper.", isCorrect: false, feedback: "Incorrect. Memoization is a programmatic optimization." },
          { text: "Storing the results of expensive function calls and returning the cached result when the same inputs occur again.", isCorrect: true, feedback: "Correct. Memoization is a top-down approach to DP that saves time by ensuring that each unique subproblem is solved only once." },
          { text: "A technique for compressing the source code to save space.", isCorrect: false, feedback: "Incorrect. This is 'Minification' or 'Compression'." },
          { text: "The process of converting a recursive function into an iterative one.", isCorrect: false, feedback: "Incorrect. While related to DP, this is specifically called 'Tabulation'." }
        ]
      },
      {
        q: "What is the space complexity of the standard Merge Sort algorithm?",
        options: [
          { text: "O(1)", isCorrect: false, feedback: "Incorrect. Merge Sort is not an in-place sort; it requires extra space for the temporary arrays used during merging." },
          { text: "O(n)", isCorrect: true, feedback: "Correct. Merge Sort requires an auxiliary array of size n to merge the sorted halves, resulting in linear space complexity." },
          { text: "O(log n)", isCorrect: false, feedback: "Incorrect. This is the space complexity of the recursion stack, but the auxiliary arrays dominate the space usage." },
          { text: "O(n²)", isCorrect: false, feedback: "Incorrect. This would be extremely inefficient for a standard sorting algorithm." }
        ]
      },
      {
        q: "What is a 'Stable' sorting algorithm?",
        options: [
          { text: "An algorithm that always takes the same amount of time.", isCorrect: false, feedback: "Incorrect. This is 'Deterministic' or 'Constant Time'." },
          { text: "An algorithm that preserves the relative order of elements with equal keys.", isCorrect: true, feedback: "Correct. Stability is important when sorting by multiple criteria (e.g., sorting by name, then by department)." },
          { text: "An algorithm that does not use any extra memory.", isCorrect: false, feedback: "Incorrect. This is 'In-place'." },
          { text: "An algorithm that is guaranteed not to crash.", isCorrect: false, feedback: "Incorrect. Stability in sorting refers to the preservation of relative order." }
        ]
      },
      {
        q: "Which data structure is used to implement a 'Breadth-First Search' (BFS) on a graph?",
        options: [
          { text: "Stack", isCorrect: false, feedback: "Incorrect. A stack is used for DFS." },
          { text: "Queue", isCorrect: true, feedback: "Correct. BFS uses a queue to keep track of the nodes to visit next in a first-in-first-out manner." },
          { text: "Heap", isCorrect: false, feedback: "Incorrect. A heap is used for priority queues or Dijkstra's algorithm." },
          { text: "Linked List", isCorrect: false, feedback: "Incorrect. While a queue can be implemented with a linked list, the queue itself is the logical structure used." }
        ]
      },
      {
        q: "What is the time complexity of searching for an element in a balanced Binary Search Tree (BST)?",
        options: [
          { text: "O(1)", isCorrect: false, feedback: "Incorrect. You must traverse the height of the tree." },
          { text: "O(log n)", isCorrect: true, feedback: "Correct. In a balanced BST, the height is logarithmic relative to the number of nodes, so each comparison halves the remaining search space." },
          { text: "O(n)", isCorrect: false, feedback: "Incorrect. This is the complexity for an unbalanced (degenerate) BST." },
          { text: "O(n log n)", isCorrect: false, feedback: "Incorrect. This is the complexity for sorting, not searching." }
        ]
      },
      {
        q: "What is the purpose of a 'Load Factor' in a Hash Table?",
        options: [
          { text: "To determine the speed of the hash function.", isCorrect: false, feedback: "Incorrect. The hash function's speed is independent of the load factor." },
          { text: "To measure how full the hash table is and decide when to resize it.", isCorrect: true, feedback: "Correct. Load factor = (number of elements) / (number of slots). When it exceeds a threshold (e.g., 0.75), the table is usually resized to maintain performance." },
          { text: "To calculate the number of collisions that have occurred.", isCorrect: false, feedback: "Incorrect. While related to collisions, it's a measure of capacity usage." },
          { text: "To encrypt the keys before hashing them.", isCorrect: false, feedback: "Incorrect. This is not the purpose of the load factor." }
        ]
      },
      {
        q: "Which sorting algorithm works by repeatedly picking the smallest element from the unsorted part and putting it at the beginning?",
        options: [
          { text: "Bubble Sort", isCorrect: false, feedback: "Incorrect. Bubble sort swaps adjacent elements." },
          { text: "Selection Sort", isCorrect: true, feedback: "Correct. Selection sort 'selects' the minimum element in each pass and moves it to its correct position." },
          { text: "Insertion Sort", isCorrect: false, feedback: "Incorrect. Insertion sort builds the sorted array one element at a time by inserting it into the correct spot." },
          { text: "Merge Sort", isCorrect: false, feedback: "Incorrect. Merge sort is a divide-and-conquer algorithm." }
        ]
      },
      {
        q: "What is a 'Complete Binary Tree'?",
        options: [
          { text: "A tree where every node has exactly two children.", isCorrect: false, feedback: "Incorrect. This is a 'Full' binary tree." },
          { text: "A binary tree in which every level, except possibly the last, is completely filled, and all nodes are as far left as possible.", isCorrect: true, feedback: "Correct. This property is crucial for implementing heaps using arrays." },
          { text: "A tree where all leaves are at the same level.", isCorrect: false, feedback: "Incorrect. This is a 'Perfect' binary tree." },
          { text: "A tree that contains all possible nodes for its height.", isCorrect: false, feedback: "Incorrect. This also describes a 'Perfect' binary tree." }
        ]
      },
      {
        q: "What is the time complexity of the 'Floyd-Warshall' algorithm?",
        options: [
          { text: "O(V²)", isCorrect: false, feedback: "Incorrect. This is too fast for all-pairs shortest paths." },
          { text: "O(V³)", isCorrect: true, feedback: "Correct. Floyd-Warshall uses three nested loops over the vertices to find shortest paths between all pairs of nodes." },
          { text: "O(E log V)", isCorrect: false, feedback: "Incorrect. This is the complexity of Dijkstra's with a binary heap." },
          { text: "O(V + E)", isCorrect: false, feedback: "Incorrect. This is the complexity of BFS/DFS." }
        ]
      },
      {
        q: "What is the 'Best Case' time complexity of Bubble Sort?",
        options: [
          { text: "O(n log n)", isCorrect: false, feedback: "Incorrect. Bubble sort cannot achieve this." },
          { text: "O(n)", isCorrect: true, feedback: "Correct. If the array is already sorted and the algorithm is optimized to stop if no swaps occur, it only takes one pass (n-1 comparisons)." },
          { text: "O(n²)", isCorrect: false, feedback: "Incorrect. This is the average and worst-case complexity." },
          { text: "O(1)", isCorrect: false, feedback: "Incorrect. You must at least look at the elements once." }
        ]
      },
      {
        q: "What is a 'Trie' (Prefix Tree) primarily used for?",
        options: [
          { text: "Storing numerical data in a sorted manner.", isCorrect: false, feedback: "Incorrect. Standard BSTs are better for this." },
          { text: "Efficiently storing and searching for strings, especially for autocomplete features.", isCorrect: true, feedback: "Correct. Tries store characters at each node, allowing for fast prefix-based lookups." },
          { text: "Implementing a priority queue.", isCorrect: false, feedback: "Incorrect. Heaps are used for this." },
          { text: "Finding the shortest path in a weighted graph.", isCorrect: false, feedback: "Incorrect. Dijkstra's or Bellman-Ford are used for this." }
        ]
      }
    ]
  },
  "Operating Systems": {
    name: "Operating Systems",
    weightage: "5%",
    target: 50,
    questions: [
      {
        q: "Which CPU scheduling algorithm allocates execution time to processes in a strict cyclic order using predefined time slices, making it inherently preemptive and highly suitable for time-sharing systems?",
        options: [
          { text: "Shortest Job First (SJF)", isCorrect: false, feedback: "Incorrect. SJF selects the process with the smallest execution time next. It can be non-preemptive or preemptive, but it does not use strict cyclic time slices." },
          { text: "Priority Scheduling", isCorrect: false, feedback: "Incorrect. Priority scheduling allocates the CPU based on assigned priority levels, which can lead to starvation of low-priority processes, unlike cyclic time-sharing." },
          { text: "First-Come, First-Served (FCFS)", isCorrect: false, feedback: "Incorrect. FCFS is a non-preemptive algorithm that executes processes in the exact order they arrive, regardless of execution time." },
          { text: "Round Robin (RR)", isCorrect: true, feedback: "Correct. Round Robin assigns a fixed time quantum to each process in a cyclic queue. If a process doesn't finish within its quantum, it is preempted and moved to the back of the queue, ensuring fair time-sharing." }
        ]
      },
      {
        q: "In the domain of process synchronization, which specific construct utilizes integer variables to manage concurrent access to shared memory, thereby resolving critical section conflicts?",
        options: [
          { text: "Semaphore", isCorrect: true, feedback: "Correct. A semaphore is a synchronization primitive that uses atomic wait() and signal() operations on an integer variable to control thread access to common resources, preventing race conditions." },
          { text: "Virtual Memory", isCorrect: false, feedback: "Incorrect. Virtual memory is a memory management technique that abstracts physical RAM, not a synchronization construct for concurrent processes." },
          { text: "Spooler", isCorrect: false, feedback: "Incorrect. A spooler manages data output to slow peripheral devices (like printers) by buffering it, not managing concurrent access to shared memory." },
          { text: "Translation Lookaside Buffer (TLB)", isCorrect: false, feedback: "Incorrect. A TLB is a hardware cache used to speed up virtual-to-physical address translation, unrelated to process synchronization." }
        ]
      },
      {
        q: "To optimize main memory availability, an operating system may temporarily suspend a process and migrate its entirely allocated memory footprint to secondary storage. What is this technique called?",
        options: [
          { text: "Thrashing", isCorrect: false, feedback: "Incorrect. Thrashing is a detrimental state where the OS spends more time paging data in and out of memory than executing actual processes." },
          { text: "Paging", isCorrect: false, feedback: "Incorrect. Paging involves moving small, fixed-size blocks (pages) of memory between RAM and disk, not necessarily suspending and migrating an entire process's footprint at once." },
          { text: "Swapping", isCorrect: true, feedback: "Correct. Swapping involves moving an entire process out of physical RAM and into a designated space on the hard disk (swap space) to free up memory for active processes, later swapping it back when execution resumes." },
          { text: "Spooling", isCorrect: false, feedback: "Incorrect. Spooling buffers data for peripheral devices, it does not involve migrating process memory to optimize RAM availability." }
        ]
      },
      {
        q: "Which of the following conditions is NOT one of the necessary prerequisites (Coffman conditions) for a deadlock to occur in a multiprogramming environment?",
        options: [
          { text: "Mutual Exclusion", isCorrect: false, feedback: "Incorrect. Mutual exclusion (at least one resource must be held in a non-sharable mode) is a required Coffman condition." },
          { text: "Hold and Wait", isCorrect: false, feedback: "Incorrect. Hold and wait (a process holding at least one resource is waiting to acquire additional resources held by other processes) is a required Coffman condition." },
          { text: "Preemption", isCorrect: true, feedback: "Correct. The Coffman condition is 'No Preemption' (resources cannot be forcibly taken from a process). If preemption is allowed, deadlocks can be structurally avoided or broken." },
          { text: "Circular Wait", isCorrect: false, feedback: "Incorrect. Circular wait (a closed chain of processes exists, where each process holds at least one resource needed by the next process in the chain) is a required Coffman condition." }
        ]
      },
      {
        q: "What is the primary purpose of a Translation Lookaside Buffer (TLB) in an operating system?",
        options: [
          { text: "To cache frequently used disk blocks.", isCorrect: false, feedback: "Incorrect. This is the purpose of a disk cache or buffer cache." },
          { text: "To speed up virtual-to-physical address translation.", isCorrect: true, feedback: "Correct. The TLB is a high-speed hardware cache that stores recent page table mappings, significantly reducing the time required for address translation." },
          { text: "To manage the CPU's instruction pipeline.", isCorrect: false, feedback: "Incorrect. This is handled by the CPU's control unit and pipeline logic." },
          { text: "To synchronize access to shared memory between processes.", isCorrect: false, feedback: "Incorrect. This is handled by synchronization primitives like semaphores or mutexes." }
        ]
      },
      {
        q: "In the context of file systems, what is an 'inode'?",
        options: [
          { text: "A user-friendly name for a file.", isCorrect: false, feedback: "Incorrect. This is a filename, which is mapped to an inode." },
          { text: "A data structure that stores metadata about a file (e.g., size, permissions, block locations).", isCorrect: true, feedback: "Correct. An inode (index node) is a data structure on a filesystem that describes a file-system object such as a file or a directory." },
          { text: "A physical sector on the hard drive.", isCorrect: false, feedback: "Incorrect. A sector is a physical storage unit; an inode is a logical metadata structure." },
          { text: "A temporary buffer for file I/O operations.", isCorrect: false, feedback: "Incorrect. This is a file buffer or cache." }
        ]
      },
      {
        q: "What is the 'Kernel' of an operating system?",
        options: [
          { text: "The user interface where commands are typed.", isCorrect: false, feedback: "Incorrect. This is the 'Shell'." },
          { text: "The core part of the OS that manages system resources and communication between hardware and software.", isCorrect: true, feedback: "Correct. The kernel is the first part of the OS to load and remains in memory to handle critical tasks like process management, memory management, and device I/O." },
          { text: "A collection of utility programs like calculators and text editors.", isCorrect: false, feedback: "Incorrect. These are application-level programs." },
          { text: "The physical chip that executes instructions.", isCorrect: false, feedback: "Incorrect. This is the CPU." }
        ]
      },
      {
        q: "What is the primary purpose of 'Virtual Memory' in an operating system?",
        options: [
          { text: "To make the computer run faster by using more CPU power.", isCorrect: false, feedback: "Incorrect. Virtual memory can actually slow down a system if 'thrashing' occurs." },
          { text: "To allow the execution of processes that are larger than the available physical RAM.", isCorrect: true, feedback: "Correct. Virtual memory uses the hard disk as an extension of RAM, providing an illusion of a much larger memory space to applications." },
          { text: "To protect the computer from viruses and malware.", isCorrect: false, feedback: "Incorrect. This is the job of antivirus software and firewalls." },
          { text: "To allow multiple users to share the same physical monitor.", isCorrect: false, feedback: "Incorrect. This is unrelated to memory management." }
        ]
      },
      {
        q: "In operating systems, what is a 'Deadlock'?",
        options: [
          { text: "When a computer's battery dies unexpectedly.", isCorrect: false, feedback: "Incorrect. This is a hardware power issue." },
          { text: "A situation where a set of processes are blocked because each is holding a resource and waiting for another resource held by another process.", isCorrect: true, feedback: "Correct. Deadlock is a 'circular wait' condition where no process can proceed, requiring OS intervention to resolve." },
          { text: "When a program enters an infinite loop.", isCorrect: false, feedback: "Incorrect. An infinite loop consumes CPU but doesn't necessarily involve waiting for resources held by others." },
          { text: "When the hard drive stops spinning.", isCorrect: false, feedback: "Incorrect. This is a mechanical hardware failure." }
        ]
      },
      {
        q: "What does the term 'Context Switching' refer to?",
        options: [
          { text: "Changing the background wallpaper of the desktop.", isCorrect: false, feedback: "Incorrect. This is a UI customization." },
          { text: "The process of storing the state of a process so it can be resumed later, allowing the CPU to switch to another process.", isCorrect: true, feedback: "Correct. Context switching is essential for multitasking, but it introduces overhead as the OS must save and load registers, program counters, and stack pointers." },
          { text: "Switching between different user accounts on the same machine.", isCorrect: false, feedback: "Incorrect. While it involves context switching, the term specifically refers to the low-level CPU task management." },
          { text: "Moving a file from one folder to another.", isCorrect: false, feedback: "Incorrect. This is a file system operation." }
        ]
      },
      {
        q: "What is the fundamental difference between a 'Process' and a 'Thread'?",
        options: [
          { text: "A process is a single line of code, while a thread is an entire program.", isCorrect: false, feedback: "Incorrect. It's the other way around: a process is an executing program, and a thread is a unit of execution within it." },
          { text: "A process has its own independent memory space, while threads within the same process share memory.", isCorrect: true, feedback: "Correct. Processes are isolated from each other for security and stability; threads are 'lightweight' and share the same code, data, and resources of their parent process." },
          { text: "Threads are only used in mobile apps, while processes are used on desktops.", isCorrect: false, feedback: "Incorrect. Both are used across all modern computing platforms." },
          { text: "Processes are managed by the hardware, while threads are managed by the software.", isCorrect: false, feedback: "Incorrect. Both are typically managed by the operating system kernel." }
        ]
      },
      {
        q: "What is 'Paging' in the context of memory management?",
        options: [
          { text: "Sending a message to a person's pager device.", isCorrect: false, feedback: "Incorrect. This is a legacy communication method." },
          { text: "A scheme that eliminates the need for contiguous allocation of physical memory by dividing it into fixed-size blocks.", isCorrect: true, feedback: "Correct. Paging maps logical memory (pages) to physical memory (frames), allowing the OS to use non-contiguous blocks of RAM efficiently." },
          { text: "The process of numbering the pages in a printed document.", isCorrect: false, feedback: "Incorrect. This is a word processing feature." },
          { text: "A technique for increasing the speed of the hard drive.", isCorrect: false, feedback: "Incorrect. Paging involves the hard drive (swap space), but it's about memory management, not drive speed." }
        ]
      },
      {
        q: "What is 'Fragmentation' in system memory, and why is it a problem?",
        options: [
          { text: "When the RAM chips physically break into pieces.", isCorrect: false, feedback: "Incorrect. This is physical damage." },
          { text: "When free memory is broken into small, non-contiguous blocks, making it difficult to allocate large chunks.", isCorrect: true, feedback: "Correct. External fragmentation occurs when there's enough total free space, but it's not in one continuous block. Internal fragmentation occurs when allocated blocks are slightly larger than needed." },
          { text: "When the OS divides a task into too many small parts.", isCorrect: false, feedback: "Incorrect. This is related to task scheduling or parallelism, not memory fragmentation." },
          { text: "When the hard drive is too full to store new files.", isCorrect: false, feedback: "Incorrect. This is a storage capacity issue." }
        ]
      },
      {
        q: "What is a 'System Call'?",
        options: [
          { text: "A phone call made by the computer to technical support.", isCorrect: false, feedback: "Incorrect. This is not a technical term." },
          { text: "The programmatic way in which a computer program requests a service from the kernel of the operating system.", isCorrect: true, feedback: "Correct. System calls (e.g., open, read, write, fork) provide the interface between a process and the OS to access hardware and protected resources." },
          { text: "An error message that appears when the system crashes.", isCorrect: false, feedback: "Incorrect. This is a 'Kernel Panic' or 'Blue Screen'." },
          { text: "A scheduled task that runs every night at midnight.", isCorrect: false, feedback: "Incorrect. This is a 'Cron Job' or 'Scheduled Task'." }
        ]
      },
      {
        q: "What is 'Demand Paging'?",
        options: [
          { text: "A system where users must pay for every page of memory they use.", isCorrect: false, feedback: "Incorrect. This is not a memory management concept." },
          { text: "A technique where a page is only loaded into physical memory when it is actually needed (demanded) during execution.", isCorrect: true, feedback: "Correct. Demand paging reduces initial load time and memory usage by only bringing pages into RAM when a 'page fault' occurs." },
          { text: "A requirement that all processes must use the same amount of memory.", isCorrect: false, feedback: "Incorrect. Memory usage is dynamic and varies by process." },
          { text: "A method for prioritizing the most important pages in a document.", isCorrect: false, feedback: "Incorrect. This is unrelated to OS memory management." }
        ]
      },
      {
        q: "What is the primary function of a 'File System' in an operating system?",
        options: [
          { text: "To organize and control how data is stored and retrieved on a storage device.", isCorrect: true, feedback: "Correct. A file system (like NTFS, ext4, or FAT32) provides a logical structure (files and directories) and manages the physical mapping of data to disk blocks." },
          { text: "To protect the computer from unauthorized network access.", isCorrect: false, feedback: "Incorrect. This is the function of a firewall." },
          { text: "To manage the execution of multiple programs simultaneously.", isCorrect: false, feedback: "Incorrect. This is the function of the process scheduler." },
          { text: "To convert human-readable code into machine-readable instructions.", isCorrect: false, feedback: "Incorrect. This is the function of a compiler or interpreter." }
        ]
      },
      {
        q: "What is a 'Race Condition' in concurrent programming?",
        options: [
          { text: "When two computers compete to see which one is faster.", isCorrect: false, feedback: "Incorrect. This is a benchmark, not a race condition." },
          { text: "A situation where the output depends on the sequence or timing of uncontrollable events (like thread execution order).", isCorrect: true, feedback: "Correct. Race conditions occur when multiple threads access shared data simultaneously and at least one write is involved, leading to unpredictable results." },
          { text: "When a program runs too fast for the user to see.", isCorrect: false, feedback: "Incorrect. This is a UI/UX issue, not a concurrency bug." },
          { text: "When the CPU clock speed is increased beyond its limits.", isCorrect: false, feedback: "Incorrect. This is 'Overclocking'." }
        ]
      },
      {
        q: "What is the purpose of the 'chmod' command in Unix-like operating systems?",
        options: [
          { text: "To change the owner of a file.", isCorrect: false, feedback: "Incorrect. This is the purpose of the 'chown' command." },
          { text: "To change the access permissions of a file or directory.", isCorrect: true, feedback: "Correct. 'chmod' (change mode) allows users to set read, write, and execute permissions for the owner, group, and others." },
          { text: "To delete a file permanently.", isCorrect: false, feedback: "Incorrect. This is the 'rm' command." },
          { text: "To move a file to a different directory.", isCorrect: false, feedback: "Incorrect. This is the 'mv' command." }
        ]
      },
      {
        q: "What is 'Thrashing' in an operating system?",
        options: [
          { text: "When the computer is physically shaken.", isCorrect: false, feedback: "Incorrect. This is physical abuse." },
          { text: "A state where the OS spends more time swapping pages in and out of memory than executing actual processes.", isCorrect: true, feedback: "Correct. Thrashing occurs when the total size of the active working sets of all processes exceeds the available physical RAM, leading to constant page faults." },
          { text: "When a program uses 100% of the CPU for a long time.", isCorrect: false, feedback: "Incorrect. This is a CPU-bound process or a 'busy loop'." },
          { text: "When the hard drive makes a loud grinding noise.", isCorrect: false, feedback: "Incorrect. This is a mechanical failure." }
        ]
      },
      {
        q: "What is a 'Shell' in an operating system?",
        options: [
          { text: "The hard outer casing of the computer.", isCorrect: false, feedback: "Incorrect. This is the computer case." },
          { text: "A user interface that provides access to the operating system's services.", isCorrect: true, feedback: "Correct. A shell (like Bash, Zsh, or PowerShell) can be command-line based (CLI) or graphical (GUI), allowing users to interact with the kernel." },
          { text: "A protected area of memory where the kernel resides.", isCorrect: false, feedback: "Incorrect. This is 'Kernel Space'." },
          { text: "A virus that hides inside another program.", isCorrect: false, feedback: "Incorrect. This is a 'Trojan Horse'." }
        ]
      },
      {
        q: "What is 'Preemptive Scheduling'?",
        options: [
          { text: "Scheduling a task to run at a specific time in the future.", isCorrect: false, feedback: "Incorrect. This is 'Task Scheduling'." },
          { text: "A scheduling policy where the OS can interrupt a currently running process to give the CPU to another process.", isCorrect: true, feedback: "Correct. Preemptive scheduling (like Round Robin) ensures that no single process can monopolize the CPU, improving system responsiveness." },
          { text: "A policy where a process must finish its execution before another can start.", isCorrect: false, feedback: "Incorrect. This is 'Non-preemptive' or 'Cooperative' scheduling." },
          { text: "Predicting which process will finish first and running it.", isCorrect: false, feedback: "Incorrect. This is 'Shortest Job First'." }
        ]
      },
      {
        q: "What is the purpose of a 'Device Driver'?",
        options: [
          { text: "A person who delivers computer hardware.", isCorrect: false, feedback: "Incorrect. This is a delivery person." },
          { text: "A specialized program that allows the operating system to communicate with a specific hardware device.", isCorrect: true, feedback: "Correct. Drivers act as translators between the OS's generic commands and the hardware's specific signals." },
          { text: "A tool for cleaning the dust out of a computer.", isCorrect: false, feedback: "Incorrect. This is a maintenance tool." },
          { text: "A hardware component that increases the speed of the CPU.", isCorrect: false, feedback: "Incorrect. This would be a clock or a faster processor." }
        ]
      },
      {
        q: "What is 'Mutual Exclusion'?",
        options: [
          { text: "When two people agree to disagree.", isCorrect: false, feedback: "Incorrect. This is a social interaction." },
          { text: "A property that ensures only one process or thread can access a shared resource at a time.", isCorrect: true, feedback: "Correct. Mutual exclusion is a fundamental requirement for preventing race conditions in concurrent systems." },
          { text: "When the OS excludes certain users from logging in.", isCorrect: false, feedback: "Incorrect. This is 'Access Control'." },
          { text: "A situation where all processes are excluded from using the CPU.", isCorrect: false, feedback: "Incorrect. This would be a system halt or crash." }
        ]
      },
      {
        q: "What is a 'Zombie Process' in Unix-like systems?",
        options: [
          { text: "A process that has been infected by a virus.", isCorrect: false, feedback: "Incorrect. This is a 'Compromised Process'." },
          { text: "A process that has completed execution but still has an entry in the process table.", isCorrect: true, feedback: "Correct. A zombie process exists until its parent process reads its exit status using the `wait()` system call." },
          { text: "A process that runs very slowly.", isCorrect: false, feedback: "Incorrect. This is just a slow process." },
          { text: "A process that automatically restarts itself when killed.", isCorrect: false, feedback: "Incorrect. This is a 'Daemon' or a 'Restarting Service'." }
        ]
      },
      {
        q: "What is the purpose of 'Inter-Process Communication' (IPC)?",
        options: [
          { text: "To allow different computers to talk to each other over the internet.", isCorrect: false, feedback: "Incorrect. This is 'Networking'." },
          { text: "To allow multiple processes to share data and synchronize their actions.", isCorrect: true, feedback: "Correct. IPC mechanisms include pipes, message queues, shared memory, and signals, enabling cooperation between processes." },
          { text: "To allow the CPU to communicate with the RAM.", isCorrect: false, feedback: "Incorrect. This is handled by the system bus." },
          { text: "To allow the user to communicate with the OS via the keyboard.", isCorrect: false, feedback: "Incorrect. This is 'Input/Output'." }
        ]
      }
    ]
  },
  "Software Engineering": {
    name: "Software Engineering",
    weightage: "10%",
    target: 100,
    questions: [
      {
        q: "According to the foundational principles of the Agile Manifesto, which operational outcome is valued more highly than maintaining comprehensive documentation?",
        options: [
          { text: "Contract negotiation", isCorrect: false, feedback: "Incorrect. The Agile Manifesto values 'Customer collaboration over contract negotiation'." },
          { text: "Working software", isCorrect: true, feedback: "Correct. The Agile Manifesto explicitly values 'Working software over comprehensive documentation', focusing on delivering functional increments to the client." },
          { text: "Rigid adherence to a predefined plan", isCorrect: false, feedback: "Incorrect. The Agile Manifesto values 'Responding to change over following a plan'." },
          { text: "Processes and tools", isCorrect: false, feedback: "Incorrect. The Agile Manifesto values 'Individuals and interactions over processes and tools'." }
        ]
      },
      {
        q: "A development team modifies a legacy application's codebase to ensure it remains functional on a newly released server operating system, without adding any new user-facing features. What category of maintenance does this represent?",
        options: [
          { text: "Corrective Maintenance", isCorrect: false, feedback: "Incorrect. Corrective maintenance involves fixing discovered bugs or defects, not adapting to a new environment." },
          { text: "Perfective Maintenance", isCorrect: false, feedback: "Incorrect. Perfective maintenance involves enhancing performance or adding new features based on user requests." },
          { text: "Preventive Maintenance", isCorrect: false, feedback: "Incorrect. Preventive maintenance involves refactoring code to forestall future degradation or improve maintainability." },
          { text: "Adaptive Maintenance", isCorrect: true, feedback: "Correct. Adaptive maintenance is triggered by changes in the software's external environment (like a new OS) to ensure continued operability without modifying core functionality." }
        ]
      },
      {
        q: "Within the discipline of Software Configuration Management (SCM), which feature is essential for providing developers with isolated environments to test changes without corrupting the main codebase baseline?",
        options: [
          { text: "Status Accounting", isCorrect: false, feedback: "Incorrect. Status accounting tracks and reports on the status of configuration items and change requests, it does not provide isolated environments." },
          { text: "Auditing", isCorrect: false, feedback: "Incorrect. Auditing verifies that the software product matches its requirements and configuration records." },
          { text: "Workspace Control", isCorrect: true, feedback: "Correct. Workspace control (often via branching in version control) allows developers to clone the baseline, create an isolated workspace, make changes, and test them safely before merging." },
          { text: "Identification", isCorrect: false, feedback: "Incorrect. Identification involves defining and labeling configuration items, not managing isolated development environments." }
        ]
      },
      {
        q: "What is the primary conceptual difference between a proactive risk management strategy and a reactive risk management strategy in a software project?",
        options: [
          { text: "Proactive addresses internal risks; reactive addresses external risks.", isCorrect: false, feedback: "Incorrect. Both strategies can address both internal and external risks." },
          { text: "Proactive occurs before risks materialize; reactive acts as a crisis response post-materialization.", isCorrect: true, feedback: "Correct. Proactive risk management identifies threats during planning and institutes mitigation strategies. Reactive management is 'firefighting' after a risk event has already impacted the project." },
          { text: "Proactive is exclusively for mitigating financial risks.", isCorrect: false, feedback: "Incorrect. Proactive risk management applies to all types of project risks (technical, schedule, financial, etc.)." },
          { text: "Proactive management occurs only during the maintenance phase.", isCorrect: false, feedback: "Incorrect. Proactive risk management should begin during the earliest planning phases of the SDLC." }
        ]
      },
      {
        q: "What is 'Unit Testing' in the context of software development?",
        options: [
          { text: "Testing the entire application as a single unit.", isCorrect: false, feedback: "Incorrect. This is 'System Testing'." },
          { text: "Testing individual components or functions of the software in isolation.", isCorrect: true, feedback: "Correct. Unit testing focuses on the smallest testable parts of an application to ensure each part functions correctly before integration." },
          { text: "Testing how the software interacts with the hardware.", isCorrect: false, feedback: "Incorrect. This is 'Hardware-Software Integration Testing'." },
          { text: "Testing the software with real users to gather feedback.", isCorrect: false, feedback: "Incorrect. This is 'User Acceptance Testing' (UAT)." }
        ]
      },
      {
        q: "What is the primary goal of 'Continuous Integration' (CI)?",
        options: [
          { text: "To keep the developers working continuously without breaks.", isCorrect: false, feedback: "Incorrect. This is not a software engineering practice." },
          { text: "To automatically merge code changes from multiple contributors into a shared repository frequently.", isCorrect: true, feedback: "Correct. CI aims to detect integration errors early by running automated builds and tests every time a developer commits code." },
          { text: "To ensure the software is always connected to the internet.", isCorrect: false, feedback: "Incorrect. This is related to network connectivity, not CI." },
          { text: "To prevent any changes to the codebase once it is released.", isCorrect: false, feedback: "Incorrect. This is the opposite of the goal of CI." }
        ]
      },
      {
        q: "What does 'Refactoring' a codebase involve?",
        options: [
          { text: "Adding new features to the software based on user requests.", isCorrect: false, feedback: "Incorrect. This is feature development, not refactoring." },
          { text: "Restructuring existing code without changing its external behavior to improve its internal quality.", isCorrect: true, feedback: "Correct. Refactoring makes code cleaner, more readable, and easier to maintain without affecting how the user interacts with the app." },
          { text: "Deleting the entire codebase and starting from scratch.", isCorrect: false, feedback: "Incorrect. This is a rewrite, not refactoring." },
          { text: "Converting the code from one programming language to another.", isCorrect: false, feedback: "Incorrect. This is 'Porting' or 'Translation'." }
        ]
      },
      {
        q: "Which of the following best describes the 'Waterfall Model' of software development?",
        options: [
          { text: "A highly iterative and flexible approach.", isCorrect: false, feedback: "Incorrect. This describes Agile methodologies." },
          { text: "A linear and sequential approach where each phase must be completed before the next begins.", isCorrect: true, feedback: "Correct. Waterfall is a traditional model with distinct phases: Requirements, Design, Implementation, Testing, Deployment, and Maintenance." },
          { text: "A model where the software is built in small, incremental pieces.", isCorrect: false, feedback: "Incorrect. This describes 'Incremental' or 'Iterative' models." },
          { text: "A model that relies entirely on automated code generation.", isCorrect: false, feedback: "Incorrect. No standard SDLC model relies solely on automated generation." }
        ]
      },
      {
        q: "In software project management, what does 'Technical Debt' refer to?",
        options: [
          { text: "The money owed to the cloud provider for hosting services.", isCorrect: false, feedback: "Incorrect. This is a financial cost, not technical debt." },
          { text: "The future cost of additional rework caused by choosing an easy but limited solution now instead of a better approach.", isCorrect: true, feedback: "Correct. Technical debt accumulates when teams take shortcuts to meet deadlines, requiring more effort later to fix or refactor the code." },
          { text: "The number of bugs currently present in the issue tracker.", isCorrect: false, feedback: "Incorrect. While related, bugs are 'defects', whereas debt is about structural quality." },
          { text: "The time spent training new developers on the team.", isCorrect: false, feedback: "Incorrect. This is a training or onboarding cost." }
        ]
      },
      {
        q: "What is 'Pair Programming'?",
        options: [
          { text: "Two developers working on two different tasks at the same time.", isCorrect: false, feedback: "Incorrect. This is just standard parallel work." },
          { text: "Two developers working together at one workstation, one writing code while the other reviews it.", isCorrect: true, feedback: "Correct. Pair programming is an Agile technique where the 'driver' writes code and the 'navigator' reviews each line as it's typed, improving code quality." },
          { text: "A developer writing code for two different projects simultaneously.", isCorrect: false, feedback: "Incorrect. This is multitasking and is generally inefficient." },
          { text: "Two different programs communicating with each other via an API.", isCorrect: false, feedback: "Incorrect. This is 'Inter-process Communication' or 'Integration'." }
        ]
      },
      {
        q: "What is the core principle of 'Test-Driven Development' (TDD)?",
        options: [
          { text: "Writing the tests only after the entire application is finished.", isCorrect: false, feedback: "Incorrect. This is traditional post-development testing." },
          { text: "Writing a failing test case before writing the minimum amount of code to pass that test.", isCorrect: true, feedback: "Correct. TDD follows a 'Red-Green-Refactor' cycle: write a failing test, write code to pass it, then clean up the code." },
          { text: "Using AI to automatically generate all test cases.", isCorrect: false, feedback: "Incorrect. While AI can help, TDD is a developer-led methodology." },
          { text: "Testing the software by trying to break it in as many ways as possible.", isCorrect: false, feedback: "Incorrect. This is 'Exploratory' or 'Destructive' testing." }
        ]
      },
      {
        q: "What is the primary benefit of 'Code Review' in a software team?",
        options: [
          { text: "To find and fix syntax errors that the compiler missed.", isCorrect: false, feedback: "Incorrect. Compilers are better at finding syntax errors than humans." },
          { text: "To improve code quality, share knowledge among team members, and catch bugs early.", isCorrect: true, feedback: "Correct. Code reviews provide a second pair of eyes to ensure the code follows standards, is efficient, and is free of obvious logical errors." },
          { text: "To identify which developer is making the most mistakes.", isCorrect: false, feedback: "Incorrect. Code reviews should be collaborative and constructive, not punitive." },
          { text: "To automatically format the code according to a style guide.", isCorrect: false, feedback: "Incorrect. This is the job of a 'Linter' or 'Formatter'." }
        ]
      },
      {
        q: "In the context of software architecture, what does 'Scalability' mean?",
        options: [
          { text: "The ability of the software to run on different operating systems.", isCorrect: false, feedback: "Incorrect. This is 'Portability'." },
          { text: "The ability of a system to handle a growing amount of work or its potential to be enlarged to accommodate that growth.", isCorrect: true, feedback: "Correct. Scalability can be vertical (adding more power to one server) or horizontal (adding more servers to the system)." },
          { text: "The physical size of the server hardware.", isCorrect: false, feedback: "Incorrect. This is just a physical attribute." },
          { text: "The number of lines of code in the application.", isCorrect: false, feedback: "Incorrect. This is 'Code Volume' or 'Size'." }
        ]
      },
      {
        q: "What is a 'Microservices Architecture'?",
        options: [
          { text: "An application built as a single, indivisible unit.", isCorrect: false, feedback: "Incorrect. This is a 'Monolithic' architecture." },
          { text: "An architectural style that structures an application as a collection of small, independent, and loosely coupled services.", isCorrect: true, feedback: "Correct. Each microservice handles a specific business function and communicates via lightweight protocols (like HTTP/REST), allowing for independent deployment and scaling." },
          { text: "A server that is physically very small.", isCorrect: false, feedback: "Incorrect. The 'micro' refers to the scope of the service, not the hardware size." },
          { text: "A programming language designed for very small devices.", isCorrect: false, feedback: "Incorrect. Microservices can be written in any language." }
        ]
      },
      {
        q: "What is 'Regression Testing'?",
        options: [
          { text: "Testing the software to see if it runs slower than before.", isCorrect: false, feedback: "Incorrect. This is 'Performance Regression Testing'." },
          { text: "Re-running previously passed tests after code changes to ensure that existing functionality hasn't been broken.", isCorrect: true, feedback: "Correct. Regression testing is crucial whenever new features are added or bugs are fixed to prevent 'side effects'." },
          { text: "Testing the software with very old hardware.", isCorrect: false, feedback: "Incorrect. This is 'Backward Compatibility Testing'." },
          { text: "Testing the software by going back to an older version of the code.", isCorrect: false, feedback: "Incorrect. This is 'Rollback Testing'." }
        ]
      },
      {
        q: "What is the purpose of a 'Design Pattern' in software engineering?",
        options: [
          { text: "To make the user interface look more attractive.", isCorrect: false, feedback: "Incorrect. This is 'UI Design'." },
          { text: "To provide a reusable solution to a commonly occurring problem in software design.", isCorrect: true, feedback: "Correct. Design patterns (like Singleton, Observer, or Factory) represent best practices evolved by experienced developers." },
          { text: "To automatically generate code from a diagram.", isCorrect: false, feedback: "Incorrect. This is 'Model-Driven Development'." },
          { text: "To encrypt the source code to prevent theft.", isCorrect: false, feedback: "Incorrect. This is 'Obfuscation' or 'Encryption'." }
        ]
      },
      {
        q: "What is 'User Acceptance Testing' (UAT)?",
        options: [
          { text: "Testing the software to see if it accepts all types of user input.", isCorrect: false, feedback: "Incorrect. This is 'Input Validation Testing'." },
          { text: "The final phase of testing where the actual users test the software to ensure it meets their requirements and business needs.", isCorrect: true, feedback: "Correct. UAT is the last step before the software goes 'live', confirming that it is ready for production use." },
          { text: "Testing the software to see if users find it easy to use.", isCorrect: false, feedback: "Incorrect. This is 'Usability Testing'." },
          { text: "Testing the software to see if it can handle a large number of users.", isCorrect: false, feedback: "Incorrect. This is 'Load Testing'." }
        ]
      },
      {
        q: "What is 'Coupling' in software design, and why is low coupling preferred?",
        options: [
          { text: "The process of joining two strings together.", isCorrect: false, feedback: "Incorrect. This is 'Concatenation'." },
          { text: "The degree of interdependence between software modules; low coupling makes modules easier to change and reuse independently.", isCorrect: true, feedback: "Correct. High coupling means a change in one module often requires changes in many others, making the system fragile and hard to maintain." },
          { text: "The speed at which data is transferred between two servers.", isCorrect: false, feedback: "Incorrect. This is 'Throughput' or 'Bandwidth'." },
          { text: "The number of developers working on the same piece of code.", isCorrect: false, feedback: "Incorrect. This is 'Team Density'." }
        ]
      },
      {
        q: "What is 'Cohesion' in software design, and why is high cohesion preferred?",
        options: [
          { text: "The physical stickiness of the storage media.", isCorrect: false, feedback: "Incorrect. This is not a technical term." },
          { text: "The degree to which the elements inside a module belong together; high cohesion means a module has a single, well-defined purpose.", isCorrect: true, feedback: "Correct. High cohesion leads to modules that are easier to understand, test, and maintain because they focus on one thing." },
          { text: "The ability of the software to run on different types of CPUs.", isCorrect: false, feedback: "Incorrect. This is 'Hardware Portability'." },
          { text: "The number of lines of code that are commented out.", isCorrect: false, feedback: "Incorrect. This is 'Dead Code'." }
        ]
      },
      {
        q: "What is the 'Scrum' framework in Agile development?",
        options: [
          { text: "A method for cleaning up the codebase after a release.", isCorrect: false, feedback: "Incorrect. This is 'Post-release Cleanup'." },
          { text: "An iterative and incremental framework for managing complex work, characterized by short 'Sprints' and specific roles like 'Scrum Master'.", isCorrect: true, feedback: "Correct. Scrum focuses on delivering value in fixed-length iterations (usually 2-4 weeks) and uses daily meetings to track progress." },
          { text: "A tool for automatically generating documentation from code comments.", isCorrect: false, feedback: "Incorrect. This is a 'Documentation Generator'." },
          { text: "A type of database used for storing large amounts of unstructured data.", isCorrect: false, feedback: "Incorrect. This is a 'NoSQL' database." }
        ]
      },
      {
        q: "What is a 'User Story' in Agile development?",
        options: [
          { text: "A biography of the person who founded the software company.", isCorrect: false, feedback: "Incorrect. This is a biography." },
          { text: "An informal, natural language description of one or more features of a software system, written from the perspective of an end user.", isCorrect: true, feedback: "Correct. User stories follow a simple template: 'As a [user], I want [goal] so that [benefit]', helping teams focus on user needs." },
          { text: "A detailed technical specification of a database schema.", isCorrect: false, feedback: "Incorrect. This is a 'Technical Spec' or 'Schema Design'." },
          { text: "A complaint submitted by a user to the support team.", isCorrect: false, feedback: "Incorrect. This is a 'Support Ticket'." }
        ]
      },
      {
        q: "What is 'Version Control' (e.g., Git)?",
        options: [
          { text: "A system for tracking the age of the computer hardware.", isCorrect: false, feedback: "Incorrect. This is 'Asset Management'." },
          { text: "A system that records changes to a file or set of files over time so that you can recall specific versions later.", isCorrect: true, feedback: "Correct. Version control allows multiple developers to collaborate, track history, and revert to previous states if errors occur." },
          { text: "A tool for checking if the software is compatible with different versions of Windows.", isCorrect: false, feedback: "Incorrect. This is 'Compatibility Testing'." },
          { text: "A method for naming the different versions of a software product (e.g., v1.0, v2.0).", isCorrect: false, feedback: "Incorrect. This is 'Versioning' or 'Release Naming'." }
        ]
      },
      {
        q: "What is the purpose of a 'Burndown Chart' in Agile projects?",
        options: [
          { text: "To track the amount of electricity used by the development team.", isCorrect: false, feedback: "Incorrect. This is an energy audit." },
          { text: "A graphical representation of work left to do versus time, used to track progress in a Sprint.", isCorrect: true, feedback: "Correct. A burndown chart helps the team visualize if they are on track to complete all committed tasks by the end of the Sprint." },
          { text: "To show the number of bugs that have been fixed each day.", isCorrect: false, feedback: "Incorrect. This is a 'Bug Fix Rate' chart." },
          { text: "To identify which developers are working the most overtime.", isCorrect: false, feedback: "Incorrect. This is a 'Workload' or 'Overtime' chart." }
        ]
      }
    ]
  },
  "Web Development": {
    name: "Web Development",
    weightage: "10%",
    target: 100,
    questions: [
      {
        q: "In the context of a modern React application, what does the syntax extension JSX fundamentally represent?",
        options: [
          { text: "A secure database querying language.", isCorrect: false, feedback: "Incorrect. JSX is used for defining UI components, not querying databases." },
          { text: "A CSS preprocessor module.", isCorrect: false, feedback: "Incorrect. JSX handles HTML-like markup within JavaScript, it is not a CSS preprocessor like Sass or Less." },
          { text: "A JavaScript syntax extension that closely resembles HTML.", isCorrect: true, feedback: "Correct. JSX (JavaScript XML) allows developers to write HTML-like markup directly within JavaScript files, compiling down into standard React.createElement() calls." },
          { text: "A server-side routing protocol.", isCorrect: false, feedback: "Incorrect. JSX is a syntax extension for UI rendering, unrelated to server-side routing protocols." }
        ]
      },
      {
        q: "When architecting the interaction between a decoupled frontend interface and a backend server, which mechanism is deployed to fetch and transmit data asynchronously without triggering a full page reload?",
        options: [
          { text: "Relational Database Management Systems (RDBMS)", isCorrect: false, feedback: "Incorrect. An RDBMS stores data on the backend, but it is not the mechanism used by the frontend to asynchronously fetch that data." },
          { text: "HTML Form Submit Actions", isCorrect: false, feedback: "Incorrect. Standard HTML form submissions typically trigger a full page reload, contrary to the requirement for asynchronous data fetching." },
          { text: "CSS Flexbox", isCorrect: false, feedback: "Incorrect. CSS Flexbox is a layout module for styling, completely unrelated to data transmission." },
          { text: "Application Programming Interfaces (APIs)", isCorrect: true, feedback: "Correct. APIs act as the standardized communication bridge. Utilizing asynchronous JavaScript (like fetch or Axios), the client requests and receives data dynamically in the background, enabling SPAs." }
        ]
      },
      {
        q: "Which of the following CSS layout modules is specifically engineered for designing complex, two-dimensional responsive web interfaces consisting simultaneously of interconnected rows and columns?",
        options: [
          { text: "CSS Box Model", isCorrect: false, feedback: "Incorrect. The Box Model defines the margins, borders, padding, and content area of individual elements, not complex two-dimensional layouts." },
          { text: "CSS Grid", isCorrect: true, feedback: "Correct. CSS Grid provides a two-dimensional grid-based layout system, allowing precise control over both rows and columns, making it ideal for overall page architectures." },
          { text: "CSS Flexbox", isCorrect: false, feedback: "Incorrect. While powerful, Flexbox is designed primarily for aligning items in a single dimension (either a row or a column), not complex two-dimensional grids." },
          { text: "Inline Styling", isCorrect: false, feedback: "Incorrect. Inline styling applies CSS directly to individual HTML elements and is not a layout module." }
        ]
      },
      {
        q: "What is the primary operational advantage of utilizing asynchronous programming models (e.g., Promises, async/await) in a Node.js backend environment?",
        options: [
          { text: "It forces the server to process requests sequentially, ensuring data security.", isCorrect: false, feedback: "Incorrect. Processing requests sequentially would severely bottleneck the server, and asynchronous models do not inherently ensure data security." },
          { text: "It prevents the main execution thread from blocking during high-latency I/O operations.", isCorrect: true, feedback: "Correct. Node.js operates on a single-threaded event loop. Asynchronous models offload high-latency operations (like database queries), allowing the server to handle concurrent requests without locking the main thread." },
          { text: "It automatically encrypts all HTTP traffic.", isCorrect: false, feedback: "Incorrect. Asynchronous programming manages execution flow; it does not perform automatic encryption." },
          { text: "It eliminates the need for database indexing.", isCorrect: false, feedback: "Incorrect. Database indexing is a separate optimization technique for query performance and is not replaced by asynchronous programming." }
        ]
      },
      {
        q: "What is the core concept of 'Responsive Web Design'?",
        options: [
          { text: "A website that responds to user voice commands.", isCorrect: false, feedback: "Incorrect. This is 'Voice User Interface' (VUI)." },
          { text: "An approach to web design that makes web pages render well on a variety of devices and window or screen sizes.", isCorrect: true, feedback: "Correct. Responsive design uses fluid grids, flexible images, and CSS media queries to ensure a consistent experience across desktops, tablets, and phones." },
          { text: "A website that loads in less than one second.", isCorrect: false, feedback: "Incorrect. This is 'Performance Optimization'." },
          { text: "A website that automatically translates itself into different languages.", isCorrect: false, feedback: "Incorrect. This is 'Localization' or 'Internationalization'." }
        ]
      },
      {
        q: "In web development, what is the difference between 'Local Storage' and 'Session Storage'?",
        options: [
          { text: "Local Storage is for small data, while Session Storage is for large data.", isCorrect: false, feedback: "Incorrect. Both have similar size limits (around 5-10MB)." },
          { text: "Local Storage persists even after the browser is closed, while Session Storage is cleared when the page session ends (tab is closed).", isCorrect: true, feedback: "Correct. Both are part of the Web Storage API, but they differ in their data expiration and scope." },
          { text: "Session Storage is stored on the server, while Local Storage is on the client.", isCorrect: false, feedback: "Incorrect. Both are client-side storage mechanisms." },
          { text: "Local Storage is only for images, while Session Storage is for text.", isCorrect: false, feedback: "Incorrect. Both can store any string data (often JSON-serialized objects)." }
        ]
      },
      {
        q: "What is 'Cross-Origin Resource Sharing' (CORS)?",
        options: [
          { text: "A method for sharing physical server hardware between different companies.", isCorrect: false, feedback: "Incorrect. This is 'Multi-tenancy'." },
          { text: "A security mechanism that allows or restricts requested resources on a web page to be requested from another domain outside the domain from which the first resource was served.", isCorrect: true, feedback: "Correct. CORS is a browser-level security feature that prevents malicious sites from making unauthorized requests to other domains on behalf of the user." },
          { text: "A technique for compressing images to share them faster.", isCorrect: false, feedback: "Incorrect. This is 'Image Compression'." },
          { text: "A protocol for sharing files between different operating systems.", isCorrect: false, feedback: "Incorrect. This describes protocols like SMB or FTP." }
        ]
      },
      {
        q: "What is a 'Progressive Web App' (PWA)?",
        options: [
          { text: "A web app that only works on the latest version of Chrome.", isCorrect: false, feedback: "Incorrect. PWAs are designed to work on any standards-compliant browser." },
          { text: "A web application that uses modern web capabilities to deliver an app-like experience to users, including offline support and push notifications.", isCorrect: true, feedback: "Correct. PWAs are websites that can be 'installed' on a device and function similarly to native apps, often using Service Workers for offline capabilities." },
          { text: "An app that is built using only the C++ programming language.", isCorrect: false, feedback: "Incorrect. PWAs are built with web technologies (HTML, CSS, JS)." },
          { text: "A website that is still under development and not yet finished.", isCorrect: false, feedback: "Incorrect. 'Progressive' refers to the progressive enhancement of features." }
        ]
      },
      {
        q: "What is 'Server-Side Rendering' (SSR)?",
        options: [
          { text: "When the user's browser renders the entire page from scratch.", isCorrect: false, feedback: "Incorrect. This is 'Client-Side Rendering' (CSR)." },
          { text: "The process of rendering a web page on the server and sending the fully formed HTML to the client's browser.", isCorrect: true, feedback: "Correct. SSR can improve initial load times and SEO because the browser receives a ready-to-display page rather than waiting for JavaScript to build it." },
          { text: "A technique for rendering 3D graphics on a server for gaming.", isCorrect: false, feedback: "Incorrect. This is 'Cloud Gaming' or 'Remote Rendering'." },
          { text: "Using a server to print physical documents.", isCorrect: false, feedback: "Incorrect. This is 'Network Printing'." }
        ]
      },
      {
        q: "In the React library, what is the 'Virtual DOM'?",
        options: [
          { text: "A physical copy of the browser's DOM stored on the server.", isCorrect: false, feedback: "Incorrect. The Virtual DOM is a client-side JavaScript concept." },
          { text: "A lightweight, in-memory representation of the real DOM that React uses to optimize updates.", isCorrect: true, feedback: "Correct. React compares the Virtual DOM with the real DOM and only updates the parts that have changed, making UI updates much faster." },
          { text: "A tool for viewing the DOM in 3D using VR headsets.", isCorrect: false, feedback: "Incorrect. This is unrelated to React's Virtual DOM." },
          { text: "A way to hide the DOM from the user for security reasons.", isCorrect: false, feedback: "Incorrect. The DOM must be accessible for the browser to render the page." }
        ]
      },
      {
        q: "What is 'Semantic HTML'?",
        options: [
          { text: "HTML that is written in a different language like French or Spanish.", isCorrect: false, feedback: "Incorrect. Semantics refers to meaning, not translation." },
          { text: "Using HTML tags that clearly describe their meaning and purpose (e.g., <header>, <article>, <nav>) to both the browser and the developer.", isCorrect: true, feedback: "Correct. Semantic HTML improves accessibility (for screen readers) and SEO by providing structure and context to the content." },
          { text: "A version of HTML that uses only symbols instead of words.", isCorrect: false, feedback: "Incorrect. HTML uses predefined tags." },
          { text: "HTML that is automatically generated by a machine learning model.", isCorrect: false, feedback: "Incorrect. While possible, this is not the definition of semantic HTML." }
        ]
      },
      {
        q: "What is 'Lazy Loading' in web development?",
        options: [
          { text: "When a developer takes a long time to finish a task.", isCorrect: false, feedback: "Incorrect. This is a human productivity issue." },
          { text: "A design pattern that delays the initialization of an object or the loading of a resource (like an image) until it is actually needed.", isCorrect: true, feedback: "Correct. Lazy loading improves initial page load speed by not loading content that is 'below the fold' until the user scrolls to it." },
          { text: "A website that takes a long time to respond to user input.", isCorrect: false, feedback: "Incorrect. This is 'High Latency' or 'Poor Performance'." },
          { text: "A technique for loading the entire website at once to avoid future delays.", isCorrect: false, feedback: "Incorrect. This is 'Eager Loading' or 'Pre-fetching'." }
        ]
      },
      {
        q: "In web accessibility (A11y), what is the primary purpose of 'ARIA' attributes?",
        options: [
          { text: "To add background music to a website.", isCorrect: false, feedback: "Incorrect. ARIA is about accessibility, not audio." },
          { text: "To provide additional context and information to assistive technologies (like screen readers) when standard HTML tags are insufficient.", isCorrect: true, feedback: "Correct. ARIA (Accessible Rich Internet Applications) attributes help make complex web content and applications more accessible to people with disabilities." },
          { text: "To encrypt the user's personal data.", isCorrect: false, feedback: "Incorrect. This is handled by security protocols." },
          { text: "To change the font size of the text automatically.", isCorrect: false, feedback: "Incorrect. This is typically handled by CSS or browser settings." }
        ]
      },
      {
        q: "What is the role of 'Babel' in a modern web development workflow?",
        options: [
          { text: "To translate the website into multiple languages.", isCorrect: false, feedback: "Incorrect. Babel is a code transpiler, not a language translator." },
          { text: "A JavaScript compiler that converts modern ECMAScript code into a backwards-compatible version of JavaScript for older browsers.", isCorrect: true, feedback: "Correct. Babel allows developers to use the latest JS features without worrying about browser compatibility issues." },
          { text: "To manage the dependencies of a project.", isCorrect: false, feedback: "Incorrect. This is the job of 'npm' or 'yarn'." },
          { text: "To bundle all the CSS and JS files into a single file.", isCorrect: false, feedback: "Incorrect. This is the job of a 'Bundler' like Webpack or Vite." }
        ]
      },
      {
        q: "What is the purpose of 'WebSockets' in web development?",
        options: [
          { text: "To create a secure connection between the browser and the server.", isCorrect: false, feedback: "Incorrect. This is 'HTTPS/TLS'." },
          { text: "To enable full-duplex, real-time communication between a client and a server over a single, long-lived connection.", isCorrect: true, feedback: "Correct. WebSockets are ideal for chat apps, live sports updates, and collaborative tools where low latency is critical." },
          { text: "To allow the browser to store large amounts of data offline.", isCorrect: false, feedback: "Incorrect. This is 'IndexedDB' or 'Local Storage'." },
          { text: "To speed up the loading of images on a web page.", isCorrect: false, feedback: "Incorrect. This is 'Image Optimization' or 'CDNs'." }
        ]
      },
      {
        q: "What is 'Hydration' in the context of React or Next.js?",
        options: [
          { text: "Drinking enough water while coding.", isCorrect: false, feedback: "Incorrect. This is a health tip." },
          { text: "The process of attaching event listeners to the static HTML sent by the server to make it interactive on the client.", isCorrect: true, feedback: "Correct. Hydration 'breathes life' into the static server-rendered HTML by connecting it to the React component logic." },
          { text: "Cleaning up the memory used by a component when it unmounts.", isCorrect: false, feedback: "Incorrect. This is 'Garbage Collection' or 'Cleanup'." },
          { text: "Converting a JSON object into a string.", isCorrect: false, feedback: "Incorrect. This is 'Stringification'." }
        ]
      },
      {
        q: "What is the 'Box Model' in CSS?",
        options: [
          { text: "A way to organize files in a project.", isCorrect: false, feedback: "Incorrect. This is 'Project Structure'." },
          { text: "A model that defines how elements are rendered as boxes, consisting of content, padding, border, and margin.", isCorrect: true, feedback: "Correct. Understanding the box model is fundamental to controlling the layout and spacing of elements on a web page." },
          { text: "A technique for creating 3D boxes using CSS.", isCorrect: false, feedback: "Incorrect. While possible, this is not the definition of the box model." },
          { text: "A method for storing data in a box-like structure.", isCorrect: false, feedback: "Incorrect. This is not a technical term." }
        ]
      },
      {
        q: "What is 'Debouncing' in JavaScript?",
        options: [
          { text: "Removing the bounce effect from a button animation.", isCorrect: false, feedback: "Incorrect. This is a CSS/Animation task." },
          { text: "A technique used to limit the rate at which a function is executed, ensuring it only runs after a certain amount of time has passed since the last call.", isCorrect: true, feedback: "Correct. Debouncing is commonly used for search inputs or window resize events to prevent excessive function calls." },
          { text: "A way to make a ball bounce on a canvas.", isCorrect: false, feedback: "Incorrect. This is a physics simulation." },
          { text: "A method for deleting duplicate items from an array.", isCorrect: false, feedback: "Incorrect. This is 'Deduplication'." }
        ]
      },
      {
        q: "What is 'Throttling' in JavaScript?",
        options: [
          { text: "Slowing down the internet connection for testing.", isCorrect: false, feedback: "Incorrect. This is 'Network Throttling'." },
          { text: "A technique that ensures a function is called at most once in a specified time interval.", isCorrect: true, feedback: "Correct. Throttling is useful for events that fire continuously, like scrolling, to maintain performance." },
          { text: "A way to stop a function from running entirely.", isCorrect: false, feedback: "Incorrect. This is 'Disabling' or 'Canceling'." },
          { text: "A method for encrypting data before sending it to the server.", isCorrect: false, feedback: "Incorrect. This is 'Encryption'." }
        ]
      },
      {
        q: "What is the purpose of 'Meta Tags' in HTML?",
        options: [
          { text: "To add visible titles to the web page.", isCorrect: false, feedback: "Incorrect. This is the <h1> to <h6> tags." },
          { text: "To provide metadata about the HTML document, such as description, keywords, and viewport settings for SEO and browsers.", isCorrect: true, feedback: "Correct. Meta tags are placed in the <head> section and are not displayed on the page but are used by search engines and browsers." },
          { text: "To create links to other websites.", isCorrect: false, feedback: "Incorrect. This is the <a> tag." },
          { text: "To insert images into the page.", isCorrect: false, feedback: "Incorrect. This is the <img> tag." }
        ]
      },
      {
        q: "What is a 'Content Delivery Network' (CDN)?",
        options: [
          { text: "A network of computers used for mining cryptocurrency.", isCorrect: false, feedback: "Incorrect. This is a 'Mining Pool'." },
          { text: "A geographically distributed group of servers that work together to provide fast delivery of internet content.", isCorrect: true, feedback: "Correct. CDNs cache static assets (like images, CSS, and JS) closer to the user, reducing latency and improving load times." },
          { text: "A system for managing the content of a blog or website.", isCorrect: false, feedback: "Incorrect. This is a 'Content Management System' (CMS)." },
          { text: "A protocol for sending emails securely.", isCorrect: false, feedback: "Incorrect. This is 'SMTP' with 'TLS'." }
        ]
      },
      {
        q: "What is 'Tree Shaking' in modern JavaScript bundlers?",
        options: [
          { text: "A way to organize files in a tree-like structure.", isCorrect: false, feedback: "Incorrect. This is 'File Organization'." },
          { text: "A form of dead code elimination that removes unused code from the final bundle.", isCorrect: true, feedback: "Correct. Tree shaking relies on ES6 module syntax (import/export) to statically analyze and prune code that is never called." },
          { text: "A technique for animating trees in a web game.", isCorrect: false, feedback: "Incorrect. This is a graphics/animation task." },
          { text: "A method for sorting data in a binary tree.", isCorrect: false, feedback: "Incorrect. This is a 'Tree Sort'." }
        ]
      },
      {
        q: "What is the 'Same-Origin Policy' (SOP)?",
        options: [
          { text: "A policy that requires all developers to use the same programming language.", isCorrect: false, feedback: "Incorrect. This is a team standard, not a browser policy." },
          { text: "A critical security mechanism that restricts how a document or script loaded from one origin can interact with a resource from another origin.", isCorrect: true, feedback: "Correct. SOP prevents malicious scripts on one page from accessing sensitive data on another page, protecting user privacy." },
          { text: "A rule that says all images on a page must come from the same server.", isCorrect: false, feedback: "Incorrect. Images can be loaded from any origin (unless restricted by CSP)." },
          { text: "A requirement that all users must log in from the same location.", isCorrect: false, feedback: "Incorrect. This is not a web security policy." }
        ]
      },
      {
        q: "What is 'Static Site Generation' (SSG)?",
        options: [
          { text: "Generating a website that never changes.", isCorrect: false, feedback: "Incorrect. Static sites can be updated by rebuilding them." },
          { text: "The process of pre-rendering a website into static HTML files at build time.", isCorrect: true, feedback: "Correct. SSG provides excellent performance and security as there is no server-side processing at request time." },
          { text: "A way to generate random text for a website.", isCorrect: false, feedback: "Incorrect. This is 'Lorem Ipsum' generation." },
          { text: "A method for creating websites using only static images.", isCorrect: false, feedback: "Incorrect. SSG uses HTML, CSS, and JS." }
        ]
      },
      {
        q: "What is 'Progressive Web App' (PWA)?",
        options: [
          { text: "A web app that is still under development.", isCorrect: false, feedback: "Incorrect. 'Progressive' refers to the enhancement of the app." },
          { text: "A type of application software delivered through the web, built using common web technologies including HTML, CSS, and JavaScript, intended to work on any platform that uses a standards-compliant browser.", isCorrect: true, feedback: "Correct. PWAs can work offline, send push notifications, and be installed on a device like a native app." },
          { text: "A website that only works on high-end computers.", isCorrect: false, feedback: "Incorrect. PWAs are designed to work on all devices." },
          { text: "A web app that automatically progresses to the next page.", isCorrect: false, feedback: "Incorrect. This is not the definition of a PWA." }
        ]
      },
      {
        q: "What is the purpose of 'Service Workers' in a PWA?",
        options: [
          { text: "To provide customer service to the users.", isCorrect: false, feedback: "Incorrect. Service workers are technical scripts." },
          { text: "A script that your browser runs in the background, separate from a web page, opening the door to features that don't need a web page or user interaction.", isCorrect: true, feedback: "Correct. Service workers enable offline support, background sync, and push notifications." },
          { text: "To manage the server's hardware resources.", isCorrect: false, feedback: "Incorrect. Service workers run in the browser." },
          { text: "To translate the website into different languages in the background.", isCorrect: false, feedback: "Incorrect. This is not their primary role." }
        ]
      },
      {
        q: "What is 'Responsive Web Design'?",
        options: [
          { text: "A website that responds quickly to user clicks.", isCorrect: false, feedback: "Incorrect. This is 'Performance'." },
          { text: "An approach to web design that makes web pages render well on a variety of devices and window or screen sizes.", isCorrect: true, feedback: "Correct. Responsive design uses fluid grids, flexible images, and CSS media queries to adapt the layout." },
          { text: "A design that changes based on the user's mood.", isCorrect: false, feedback: "Incorrect. This is not a standard web design term." },
          { text: "A website that is only designed for mobile phones.", isCorrect: false, feedback: "Incorrect. This is 'Mobile-First' or 'Mobile-Only' design." }
        ]
      },
      {
        q: "What is 'Flexbox' in CSS?",
        options: [
          { text: "A flexible box for storing physical items.", isCorrect: false, feedback: "Incorrect. This is a literal joke." },
          { text: "A one-dimensional layout method for arranging items in rows or columns.", isCorrect: true, feedback: "Correct. Flexbox makes it easy to align items and distribute space within a container, even when their size is unknown." },
          { text: "A technique for making boxes flexible in 3D space.", isCorrect: false, feedback: "Incorrect. Flexbox is for 2D layouts." },
          { text: "A method for creating flexible animations.", isCorrect: false, feedback: "Incorrect. This is 'CSS Animations' or 'Transitions'." }
        ]
      },
      {
        q: "What is 'CSS Grid'?",
        options: [
          { text: "A grid used for drawing on a screen.", isCorrect: false, feedback: "Incorrect. This is a 'Canvas Grid'." },
          { text: "A two-dimensional layout system for the web, allowing you to create complex layouts with rows and columns.", isCorrect: true, feedback: "Correct. CSS Grid is more powerful than Flexbox for overall page layout." },
          { text: "A way to organize CSS files in a grid structure.", isCorrect: false, feedback: "Incorrect. This is 'File Organization'." },
          { text: "A method for creating grid-based images.", isCorrect: false, feedback: "Incorrect. This is 'Pixel Art' or 'Image Processing'." }
        ]
      },
      {
        q: "What is 'Z-index' in CSS?",
        options: [
          { text: "The index of the last element in an array.", isCorrect: false, feedback: "Incorrect. This is a JavaScript concept." },
          { text: "A property that sets the stack order of a positioned element.", isCorrect: true, feedback: "Correct. Elements with a higher z-index are rendered in front of elements with a lower z-index." },
          { text: "A way to zoom in on an element.", isCorrect: false, feedback: "Incorrect. This is 'Transform: scale()'." },
          { text: "The speed at which an element moves on the Z-axis.", isCorrect: false, feedback: "Incorrect. This is related to 3D animations." }
        ]
      },
      {
        q: "What is 'Local Storage' in web browsers?",
        options: [
          { text: "A physical hard drive connected to the computer.", isCorrect: false, feedback: "Incorrect. This is 'External Storage'." },
          { text: "A property that allows JavaScript sites and apps to save key-value pairs in a web browser with no expiration date.", isCorrect: true, feedback: "Correct. Data in local storage persists even after the browser is closed and reopened." },
          { text: "A way to store data on the server locally.", isCorrect: false, feedback: "Incorrect. This is 'Server-Side Storage'." },
          { text: "A method for storing data in the browser's cache.", isCorrect: false, feedback: "Incorrect. Cache is for assets, local storage is for data." }
        ]
      },
      {
        q: "What is 'Session Storage' in web browsers?",
        options: [
          { text: "A way to store data for a very long time.", isCorrect: false, feedback: "Incorrect. Session storage is temporary." },
          { text: "A property that allows you to store data for the duration of the page session.", isCorrect: true, feedback: "Correct. Data in session storage is cleared when the page session ends (e.g., when the tab is closed)." },
          { text: "A method for storing data on a remote server during a session.", isCorrect: false, feedback: "Incorrect. This is 'Session Management' on the server." },
          { text: "A technique for recording the user's session as a video.", isCorrect: false, feedback: "Incorrect. This is 'Session Recording'." }
        ]
      },
      {
        q: "What is 'CORS' (Cross-Origin Resource Sharing)?",
        options: [
          { text: "A way to share resources between different departments in a company.", isCorrect: false, feedback: "Incorrect. This is 'Resource Management'." },
          { text: "A mechanism that uses additional HTTP headers to tell browsers to give a web application running at one origin, access to selected resources from a different origin.", isCorrect: true, feedback: "Correct. CORS is a security feature that allows servers to specify who can access their resources." },
          { text: "A protocol for sharing files over a local network.", isCorrect: false, feedback: "Incorrect. This is 'SMB' or 'FTP'." },
          { text: "A method for combining multiple CSS files into one.", isCorrect: false, feedback: "Incorrect. This is 'CSS Bundling'." }
        ]
      },
      {
        q: "What is 'JSONP' (JSON with Padding)?",
        options: [
          { text: "A way to add padding to a JSON object.", isCorrect: false, feedback: "Incorrect. This is a literal interpretation." },
          { text: "An older technique used to request data from a server in a different domain, bypassing the same-origin policy.", isCorrect: true, feedback: "Correct. JSONP works by using the <script> tag, which is not restricted by SOP. It is largely replaced by CORS today." },
          { text: "A method for compressing JSON data.", isCorrect: false, feedback: "Incorrect. This is 'JSON Compression'." },
          { text: "A way to encrypt JSON data.", isCorrect: false, feedback: "Incorrect. This is 'JSON Encryption'." }
        ]
      },
      {
        q: "What is 'JWT' (JSON Web Token)?",
        options: [
          { text: "A token used for playing games on the web.", isCorrect: false, feedback: "Incorrect. This is a 'Game Token'." },
          { text: "An open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.", isCorrect: true, feedback: "Correct. JWTs are commonly used for authentication and information exchange in modern web apps." },
          { text: "A way to store JSON data in a database.", isCorrect: false, feedback: "Incorrect. This is a 'JSON Column' or 'Document Store'." },
          { text: "A method for generating random JSON data.", isCorrect: false, feedback: "Incorrect. This is a 'JSON Generator'." }
        ]
      },
      {
        q: "What is 'OAuth 2.0'?",
        options: [
          { text: "A second version of the HTML language.", isCorrect: false, feedback: "Incorrect. This is 'HTML2'." },
          { text: "An industry-standard protocol for authorization.", isCorrect: true, feedback: "Correct. OAuth 2.0 allows a website or application to access resources hosted by other web applications on behalf of a user." },
          { text: "A way to authenticate users using their social media accounts.", isCorrect: false, feedback: "Incorrect. This is a common use case, but OAuth is the underlying protocol." },
          { text: "A method for encrypting passwords in a database.", isCorrect: false, feedback: "Incorrect. This is 'Password Hashing'." }
        ]
      },
      {
        q: "What is 'OpenID Connect' (OIDC)?",
        options: [
          { text: "A way to connect to the internet for free.", isCorrect: false, feedback: "Incorrect. This is 'Free Wi-Fi'." },
          { text: "An identity layer on top of the OAuth 2.0 protocol.", isCorrect: true, feedback: "Correct. OIDC allows clients to verify the identity of the end-user based on the authentication performed by an Authorization Server." },
          { text: "A protocol for connecting different databases together.", isCorrect: false, feedback: "Incorrect. This is 'Database Connectivity'." },
          { text: "A method for creating open-source web applications.", isCorrect: false, feedback: "Incorrect. This is 'Open Source Development'." }
        ]
      },
      {
        q: "What is 'GraphQL'?",
        options: [
          { text: "A language for creating 3D graphics on the web.", isCorrect: false, feedback: "Incorrect. This is 'WebGL' or 'Three.js'." },
          { text: "A query language for APIs and a runtime for fulfilling those queries with your existing data.", isCorrect: true, feedback: "Correct. GraphQL allows clients to request exactly the data they need and nothing more, making it more efficient than traditional REST APIs." },
          { text: "A way to store graphs in a database.", isCorrect: false, feedback: "Incorrect. This is a 'Graph Database'." },
          { text: "A method for generating random graphs for testing.", isCorrect: false, feedback: "Incorrect. This is a 'Graph Generator'." }
        ]
      },
      {
        q: "What is 'REST' (Representational State Transfer)?",
        options: [
          { text: "A period of time when a developer is not working.", isCorrect: false, feedback: "Incorrect. This is a literal joke." },
          { text: "An architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other.", isCorrect: true, feedback: "Correct. RESTful systems typically use HTTP methods (GET, POST, PUT, DELETE) to interact with resources." },
          { text: "A way to reset a database to its original state.", isCorrect: false, feedback: "Incorrect. This is a 'Database Reset'." },
          { text: "A method for storing data in a restful manner.", isCorrect: false, feedback: "Incorrect. This is not a technical term." }
        ]
      },
      {
        q: "What is 'SOAP' (Simple Object Access Protocol)?",
        options: [
          { text: "A way to clean your computer's hardware.", isCorrect: false, feedback: "Incorrect. This is a literal joke." },
          { text: "A messaging protocol specification for exchanging structured information in the implementation of web services in computer networks.", isCorrect: true, feedback: "Correct. SOAP relies on XML for its message format and is often used in enterprise environments." },
          { text: "A protocol for sending emails securely.", isCorrect: false, feedback: "Incorrect. This is 'SMTP'." },
          { text: "A method for creating simple web objects.", isCorrect: false, feedback: "Incorrect. This is not the definition of SOAP." }
        ]
      },
      {
        q: "What is 'Microservices Architecture'?",
        options: [
          { text: "An architecture for very small computers.", isCorrect: false, feedback: "Incorrect. This is 'Embedded Systems Architecture'." },
          { text: "An architectural style that structures an application as a collection of services that are highly maintainable and testable, loosely coupled, independently deployable, and organized around business capabilities.", isCorrect: true, feedback: "Correct. Microservices allow for greater scalability and faster development cycles compared to monolithic architectures." },
          { text: "A way to create small web services for free.", isCorrect: false, feedback: "Incorrect. This is 'Free Tier Services'." },
          { text: "A method for breaking a website into many small pages.", isCorrect: false, feedback: "Incorrect. This is 'Pagination' or 'Routing'." }
        ]
      },
      {
        q: "What is 'Monolithic Architecture'?",
        options: [
          { text: "An architecture for building large stone monuments.", isCorrect: false, feedback: "Incorrect. This is a literal joke." },
          { text: "A traditional unified model for the design of a software program, where all components are interconnected and interdependent.", isCorrect: true, feedback: "Correct. In a monolith, the entire application is built as a single unit, which can make it harder to scale and maintain as it grows." },
          { text: "A way to create a website using only one HTML file.", isCorrect: false, feedback: "Incorrect. This is a 'Single Page Application' (SPA), which can still have a complex backend." },
          { text: "A method for storing all data in a single database table.", isCorrect: false, feedback: "Incorrect. This is 'Flat File' or 'Unnormalized' storage." }
        ]
      },
      {
        q: "What is 'Docker' in web development?",
        options: [
          { text: "A place where ships are kept.", isCorrect: false, feedback: "Incorrect. This is a literal joke." },
          { text: "A platform that uses OS-level virtualization to deliver software in packages called containers.", isCorrect: true, feedback: "Correct. Docker ensures that an application runs the same way in every environment, from development to production." },
          { text: "A tool for managing the server's hardware.", isCorrect: false, feedback: "Incorrect. This is 'Infrastructure Management'." },
          { text: "A method for docking a laptop to a monitor.", isCorrect: false, feedback: "Incorrect. This is a hardware function." }
        ]
      },
      {
        q: "What is 'Kubernetes' (K8s)?",
        options: [
          { text: "A new programming language for the web.", isCorrect: false, feedback: "Incorrect. This is not a language." },
          { text: "An open-source container-orchestration system for automating software deployment, scaling, and management.", isCorrect: true, feedback: "Correct. Kubernetes is the industry standard for managing containerized applications at scale." },
          { text: "A way to connect multiple Docker containers together.", isCorrect: false, feedback: "Incorrect. This is 'Docker Compose', which K8s can also do but on a much larger scale." },
          { text: "A method for creating virtual machines on a server.", isCorrect: false, feedback: "Incorrect. This is 'Hypervisor' or 'Cloud Computing'." }
        ]
      },
      {
        q: "What is 'CI/CD' (Continuous Integration / Continuous Deployment)?",
        options: [
          { text: "A way to code continuously without taking breaks.", isCorrect: false, feedback: "Incorrect. This is a literal joke." },
          { text: "A set of practices that enable software development teams to deliver code changes more frequently and reliably.", isCorrect: true, feedback: "Correct. CI involves automatically testing and merging code, while CD involves automatically deploying it to production." },
          { text: "A method for creating continuous animations on a web page.", isCorrect: false, feedback: "Incorrect. This is 'Infinite Loops' or 'Keyframe Animations'." },
          { text: "A protocol for continuous communication between a client and a server.", isCorrect: false, feedback: "Incorrect. This is 'WebSockets'." }
        ]
      },
      {
        q: "What is 'Serverless Computing'?",
        options: [
          { text: "Computing that doesn't use any servers at all.", isCorrect: false, feedback: "Incorrect. Servers are still used, but they are managed by the cloud provider." },
          { text: "A cloud computing execution model in which the cloud provider allocates machine resources on demand, taking care of the servers on behalf of their customers.", isCorrect: true, feedback: "Correct. Serverless allows developers to focus on writing code (functions) without worrying about infrastructure management." },
          { text: "A way to run a website on a user's computer instead of a server.", isCorrect: false, feedback: "Incorrect. This is 'Local Development' or 'P2P'." },
          { text: "A method for creating websites using only static HTML files.", isCorrect: false, feedback: "Incorrect. This is 'Static Site Generation'." }
        ]
      },
      {
        q: "What is 'Infrastructure as Code' (IaC)?",
        options: [
          { text: "Writing code that only works on specific hardware.", isCorrect: false, feedback: "Incorrect. This is 'Hardware-Specific Code'." },
          { text: "The process of managing and provisioning computer data centers through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools.", isCorrect: true, feedback: "Correct. IaC allows for consistent and repeatable infrastructure deployment using tools like Terraform or CloudFormation." },
          { text: "A way to build a computer using only code.", isCorrect: false, feedback: "Incorrect. This is not possible." },
          { text: "A method for creating 3D models of data centers.", isCorrect: false, feedback: "Incorrect. This is '3D Modeling' or 'Digital Twins'." }
        ]
      },
      {
        q: "What is 'WebAssembly' (Wasm)?",
        options: [
          { text: "A way to assemble a website using different components.", isCorrect: false, feedback: "Incorrect. This is 'Component-Based Development'." },
          { text: "A binary instruction format for a stack-based virtual machine, designed as a portable compilation target for programming languages, enabling high-performance applications on web pages.", isCorrect: true, feedback: "Correct. Wasm allows languages like C++, Rust, and Go to run in the browser at near-native speeds." },
          { text: "A new version of the Assembly language for the web.", isCorrect: false, feedback: "Incorrect. Wasm is a compilation target, not a language you typically write by hand." },
          { text: "A method for creating web applications using only assembly code.", isCorrect: false, feedback: "Incorrect. While possible, it's not the primary purpose of Wasm." }
        ]
      },
      {
        q: "What is 'SEO' (Search Engine Optimization)?",
        options: [
          { text: "A way to make a website look better to the users.", isCorrect: false, feedback: "Incorrect. This is 'UI/UX Design'." },
          { text: "The process of improving the quality and quantity of website traffic to a website or a web page from search engines.", isCorrect: true, feedback: "Correct. SEO involves techniques like keyword research, content optimization, and link building to rank higher in search results." },
          { text: "A method for making a website load faster.", isCorrect: false, feedback: "Incorrect. This is 'Performance Optimization', which is a part of SEO but not the whole thing." },
          { text: "A tool for automatically generating content for a website.", isCorrect: false, feedback: "Incorrect. This is 'Content Generation'." }
        ]
      },
      {
        q: "What is 'Web Accessibility' (A11y)?",
        options: [
          { text: "A way to access the internet for free.", isCorrect: false, feedback: "Incorrect. This is 'Free Wi-Fi'." },
          { text: "The practice of making websites usable by as many people as possible, including those with disabilities.", isCorrect: true, feedback: "Correct. Accessibility involves using semantic HTML, providing alt text for images, and ensuring keyboard navigability." },
          { text: "A method for making a website accessible from any country.", isCorrect: false, feedback: "Incorrect. This is 'Internationalization' or 'Localization'." },
          { text: "A tool for checking if a website is currently online.", isCorrect: false, feedback: "Incorrect. This is an 'Uptime Monitor'." }
        ]
      },
      {
        q: "What is 'Lighthouse' in web development?",
        options: [
          { text: "A physical tower that guides ships.", isCorrect: false, feedback: "Incorrect. This is a literal joke." },
          { text: "An open-source, automated tool for improving the quality of web pages, providing audits for performance, accessibility, progressive web apps, SEO, and more.", isCorrect: true, feedback: "Correct. Lighthouse is built into Chrome DevTools and provides a clear score and suggestions for improvement." },
          { text: "A way to shine a light on the code to find bugs.", isCorrect: false, feedback: "Incorrect. This is a metaphor for 'Debugging'." },
          { text: "A method for creating bright and colorful websites.", isCorrect: false, feedback: "Incorrect. This is 'Visual Design'." }
        ]
      },
      {
        q: "What is 'Vite' in modern web development?",
        options: [
          { text: "A new programming language that is very fast.", isCorrect: false, feedback: "Incorrect. Vite is a build tool, not a language." },
          { text: "A build tool that aims to provide a faster and leaner development experience for modern web projects.", isCorrect: true, feedback: "Correct. Vite uses native ES modules in the browser for lightning-fast HMR and pre-bundles dependencies with esbuild." },
          { text: "A way to create websites using only images.", isCorrect: false, feedback: "Incorrect. This is not what Vite does." },
          { text: "A method for storing data in a very fast database.", isCorrect: false, feedback: "Incorrect. This is 'In-Memory Database'." }
        ]
      }
    ]
  },
  "AI / Machine Learning and Data Analytics": {
    name: "AI / Machine Learning and Data Analytics",
    weightage: "10%",
    target: 100,
    questions: [
      {
        q: "During the training phase of a machine learning model, what phenomenon occurs when the model exhibits exceptional accuracy on the training data but fails completely to generalize to unseen testing data?",
        options: [
          { text: "Underfitting", isCorrect: false, feedback: "Incorrect. Underfitting occurs when a model is too simple to capture the underlying patterns, resulting in poor performance on both training and testing data." },
          { text: "Regularization", isCorrect: false, feedback: "Incorrect. Regularization is a technique used to *prevent* overfitting by penalizing complex models, not the phenomenon itself." },
          { text: "Overfitting", isCorrect: true, feedback: "Correct. Overfitting occurs when a model is excessively complex, 'memorizing' the noise and exact details of the training dataset rather than learning generalized patterns, leading to poor performance on new data." },
          { text: "Cross-validation", isCorrect: false, feedback: "Incorrect. Cross-validation is a technique used to evaluate model performance and detect overfitting, not the phenomenon of failing to generalize." }
        ]
      },
      {
        q: "Which specific machine learning paradigm is fundamentally designed to identify inherent groupings, associations, or structures within a dataset that completely lacks predefined labels or target variables?",
        options: [
          { text: "Unsupervised Clustering", isCorrect: true, feedback: "Correct. Unsupervised learning deals exclusively with unlabelled data. Clustering algorithms (like K-Means) autonomously measure data point similarities and group them into distinct clusters based on mathematical proximity." },
          { text: "Logistic Regression", isCorrect: false, feedback: "Incorrect. Logistic regression is a supervised learning algorithm used for binary classification, requiring labeled training data." },
          { text: "Linear Regression", isCorrect: false, feedback: "Incorrect. Linear regression is a supervised learning algorithm used for predicting continuous values, requiring labeled training data." },
          { text: "Supervised Classification", isCorrect: false, feedback: "Incorrect. Supervised classification requires meticulously labeled training datasets to infer mapping functions." }
        ]
      },
      {
        q: "What is the primary conceptual distinction between 'bagging' and 'boosting' within the context of ensemble machine learning methods?",
        options: [
          { text: "Bagging relies on linear models, while boosting relies on neural networks.", isCorrect: false, feedback: "Incorrect. Both bagging and boosting can utilize various base models, most commonly decision trees." },
          { text: "Bagging combines predictions via voting; boosting combines predictions via simple averaging.", isCorrect: false, feedback: "Incorrect. Both methods can use voting (for classification) or averaging (for regression) to combine predictions." },
          { text: "Bagging trains models sequentially, while boosting trains them independently.", isCorrect: false, feedback: "Incorrect. This is the exact opposite of how bagging and boosting operate." },
          { text: "Bagging trains each model independently in parallel, whereas boosting trains models sequentially to focus on previously misclassified examples.", isCorrect: true, feedback: "Correct. Bagging (Bootstrap Aggregating) creates parallel models on random subsets to reduce variance. Boosting builds models sequentially, optimizing each new model to correct the errors of previous models, reducing bias." }
        ]
      },
      {
        q: "What is the primary methodological advantage of utilizing a k-fold cross-validation technique during the model evaluation phase?",
        options: [
          { text: "It automatically reduces the dimensionality of the input features.", isCorrect: false, feedback: "Incorrect. Dimensionality reduction is achieved through techniques like PCA, not cross-validation." },
          { text: "It evaluates model robustness and stability by partitioning the available data into k distinct subsets for iterative training and testing.", isCorrect: true, feedback: "Correct. K-fold cross-validation mitigates the risk of a 'lucky' train/test split by dividing data into k folds, training on k-1 folds, and testing on the remaining fold, repeating k times for a robust average performance metric." },
          { text: "It significantly accelerates the computational speed of the training algorithm.", isCorrect: false, feedback: "Incorrect. Cross-validation actually increases computational time because the model must be trained k times." },
          { text: "It expands the original dataset by generating synthetic data points.", isCorrect: false, feedback: "Incorrect. Data augmentation generates synthetic data points; cross-validation only partitions the existing dataset." }
        ]
      },
      {
        q: "What is 'Supervised Learning' in machine learning?",
        options: [
          { text: "A model that learns by observing a human expert.", isCorrect: false, feedback: "Incorrect. This is 'Imitation Learning'." },
          { text: "A paradigm where the model is trained on a labeled dataset, meaning the input data is paired with the correct output.", isCorrect: true, feedback: "Correct. In supervised learning, the algorithm learns a mapping function from inputs to outputs based on the provided examples (e.g., classification, regression)." },
          { text: "A model that requires constant human supervision during execution.", isCorrect: false, feedback: "Incorrect. Once trained, the model operates autonomously." },
          { text: "A model that only works on data that has been manually cleaned by humans.", isCorrect: false, feedback: "Incorrect. While data cleaning is important, it's not the defining feature of supervised learning." }
        ]
      },
      {
        q: "What is the core concept of 'Reinforcement Learning'?",
        options: [
          { text: "Training a model by repeating the same data over and over.", isCorrect: false, feedback: "Incorrect. This is just repetitive training." },
          { text: "An agent learning to make decisions by performing actions in an environment to maximize a cumulative reward.", isCorrect: true, feedback: "Correct. RL is based on trial and error, where the agent receives positive or negative feedback (rewards/penalties) for its actions." },
          { text: "A model that is reinforced by having more layers in its neural network.", isCorrect: false, feedback: "Incorrect. This is 'Deep Learning'." },
          { text: "A technique for making a model more resistant to cyber attacks.", isCorrect: false, feedback: "Incorrect. This is 'Adversarial Robustness'." }
        ]
      },
      {
        q: "What is a 'Neural Network' in AI?",
        options: [
          { text: "A physical network of wires that mimics the human brain.", isCorrect: false, feedback: "Incorrect. It's a computational model, not a physical one." },
          { text: "A series of algorithms that attempt to recognize underlying relationships in a set of data through a process that mimics the way the human brain operates.", isCorrect: true, feedback: "Correct. Neural networks consist of layers of interconnected 'neurons' that process information and learn patterns through weighted connections." },
          { text: "A system for connecting different AI models together over the internet.", isCorrect: false, feedback: "Incorrect. This is more like an 'AI Pipeline' or 'Ensemble'." },
          { text: "A database that stores information in a brain-like structure.", isCorrect: false, feedback: "Incorrect. This is a 'Graph Database' or 'Vector Database'." }
        ]
      },
      {
        q: "What does 'Natural Language Processing' (NLP) focus on?",
        options: [
          { text: "Teaching computers to speak in a more natural, human-like voice.", isCorrect: false, feedback: "Incorrect. This is 'Speech Synthesis' or 'Text-to-Speech'." },
          { text: "The interaction between computers and human languages, specifically how to program computers to process and analyze large amounts of natural language data.", isCorrect: true, feedback: "Correct. NLP involves tasks like sentiment analysis, translation, and text summarization." },
          { text: "A programming language that is as easy to read as natural English.", isCorrect: false, feedback: "Incorrect. This describes 'High-Level Languages' like Python." },
          { text: "The study of how humans learn to speak different languages.", isCorrect: false, feedback: "Incorrect. This is 'Linguistics'." }
        ]
      },
      {
        q: "Why is 'Data Normalization' important in data analytics?",
        options: [
          { text: "To make the data look more normal to the average person.", isCorrect: false, feedback: "Incorrect. Normalization is a mathematical process." },
          { text: "To scale numerical features to a standard range (e.g., 0 to 1) to prevent features with large magnitudes from dominating the model.", isCorrect: true, feedback: "Correct. Normalization ensures that all features contribute equally to the model's learning process, improving convergence and performance." },
          { text: "To delete all the data that doesn't follow a normal distribution.", isCorrect: false, feedback: "Incorrect. This would be 'Outlier Removal' or 'Data Filtering'." },
          { text: "To convert all the data into a human-readable text format.", isCorrect: false, feedback: "Incorrect. This is 'Data Formatting'." }
        ]
      },
      {
        q: "In the context of AI, what does 'Bias' refer to?",
        options: [
          { text: "The personal opinions of the AI model's developers.", isCorrect: false, feedback: "Incorrect. While developer bias can exist, technical bias is about the data and algorithms." },
          { text: "Systematic errors in a model's predictions caused by prejudiced assumptions in the training data or the algorithm itself.", isCorrect: true, feedback: "Correct. Bias can lead to unfair or discriminatory outcomes, making it a critical ethical concern in AI development." },
          { text: "The speed at which the model can process new information.", isCorrect: false, feedback: "Incorrect. This is 'Inference Speed'." },
          { text: "The amount of memory the model requires to run.", isCorrect: false, feedback: "Incorrect. This is 'Model Size' or 'Memory Footprint'." }
        ]
      },
      {
        q: "What is 'Deep Learning'?",
        options: [
          { text: "A model that studies a topic for a very long time.", isCorrect: false, feedback: "Incorrect. This is just long training." },
          { text: "A subfield of machine learning based on artificial neural networks with multiple layers (hence 'deep').", isCorrect: true, feedback: "Correct. Deep learning has enabled breakthroughs in image recognition, NLP, and other complex tasks by learning hierarchical representations of data." },
          { text: "A technique for storing data deep inside a computer's hardware.", isCorrect: false, feedback: "Incorrect. This is unrelated to AI." },
          { text: "A model that is only used for deep-sea exploration.", isCorrect: false, feedback: "Incorrect. Deep learning is used in almost every industry." }
        ]
      },
      {
        q: "What is 'Feature Engineering' in machine learning?",
        options: [
          { text: "Building the physical hardware for an AI system.", isCorrect: false, feedback: "Incorrect. This is 'Hardware Engineering'." },
          { text: "The process of using domain knowledge to extract or create new features from raw data that help machine learning algorithms work better.", isCorrect: true, feedback: "Correct. Good features are often more important than the choice of algorithm itself for model performance." },
          { text: "Adding more features to the user interface of an AI app.", isCorrect: false, feedback: "Incorrect. This is 'UI/UX Design'." },
          { text: "Automatically deleting features that the model doesn't like.", isCorrect: false, feedback: "Incorrect. This is 'Feature Selection'." }
        ]
      },
      {
        q: "What is 'Clustering' in data analytics?",
        options: [
          { text: "Grouping similar data points together based on their characteristics without using predefined labels.", isCorrect: true, feedback: "Correct. Clustering is an unsupervised learning task used for market segmentation, image compression, and anomaly detection." },
          { text: "Connecting multiple computers together to form a cluster.", isCorrect: false, feedback: "Incorrect. This is 'Cluster Computing'." },
          { text: "Deleting data points that are too close to each other.", isCorrect: false, feedback: "Incorrect. This is 'Deduplication'." },
          { text: "A technique for making the data look more organized in a spreadsheet.", isCorrect: false, feedback: "Incorrect. This is 'Data Presentation'." }
        ]
      },
      {
        q: "What does the term 'Big Data' primarily refer to?",
        options: [
          { text: "A single very large file that is hard to open.", isCorrect: false, feedback: "Incorrect. Big Data is about datasets, not single files." },
          { text: "Extremely large datasets that may be analyzed computationally to reveal patterns, trends, and associations, especially relating to human behavior and interactions.", isCorrect: true, feedback: "Correct. Big Data is often characterized by the '3 Vs': Volume, Velocity, and Variety." },
          { text: "A company that stores a lot of data.", isCorrect: false, feedback: "Incorrect. This is a 'Data Provider' or 'Data Broker'." },
          { text: "A new type of hard drive with massive capacity.", isCorrect: false, feedback: "Incorrect. This is a hardware advancement." }
        ]
      },
      {
        q: "What is 'Transfer Learning' in AI?",
        options: [
          { text: "Moving an AI model from one computer to another.", isCorrect: false, feedback: "Incorrect. This is 'Model Deployment'." },
          { text: "A machine learning technique where a model developed for a task is reused as the starting point for a model on a second task.", isCorrect: true, feedback: "Correct. Transfer learning is highly efficient because it leverages pre-trained weights from large datasets (like ImageNet) for specific, smaller tasks." },
          { text: "Teaching a student about AI in a classroom.", isCorrect: false, feedback: "Incorrect. This is 'Education'." },
          { text: "A model that learns how to transfer files faster.", isCorrect: false, feedback: "Incorrect. This is 'Network Optimization'." }
        ]
      },
      {
        q: "What is the purpose of an 'Activation Function' in a neural network?",
        options: [
          { text: "To turn the computer on and off.", isCorrect: false, feedback: "Incorrect. This is a power switch." },
          { text: "To introduce non-linearity into the output of a neuron, allowing the network to learn complex patterns.", isCorrect: true, feedback: "Correct. Without non-linear activation functions (like ReLU or Sigmoid), a neural network would just be a giant linear regression model." },
          { text: "To activate the internet connection for the model.", isCorrect: false, feedback: "Incorrect. This is a network task." },
          { text: "To encrypt the weights of the network.", isCorrect: false, feedback: "Incorrect. This is 'Model Security'." }
        ]
      },
      {
        q: "What is 'Dimensionality Reduction' (e.g., PCA)?",
        options: [
          { text: "Reducing the physical size of the computer.", isCorrect: false, feedback: "Incorrect. This is 'Miniaturization'." },
          { text: "The process of reducing the number of random variables under consideration by obtaining a set of principal variables.", isCorrect: true, feedback: "Correct. Dimensionality reduction helps simplify models, reduce computation time, and visualize high-dimensional data." },
          { text: "Deleting data that is too old.", isCorrect: false, feedback: "Incorrect. This is 'Data Retention Policy'." },
          { text: "A technique for compressing images without losing quality.", isCorrect: false, feedback: "Incorrect. This is 'Lossless Compression'." }
        ]
      },
      {
        q: "What is an 'Outlier' in a dataset?",
        options: [
          { text: "A data point that is very similar to all other data points.", isCorrect: false, feedback: "Incorrect. This is an 'Inlier'." },
          { text: "A data point that differs significantly from other observations in the dataset.", isCorrect: true, feedback: "Correct. Outliers can be caused by variability in the measurement or may indicate experimental errors; they can significantly affect model performance." },
          { text: "A data point that is stored outside of the main database.", isCorrect: false, feedback: "Incorrect. This is 'External Data'." },
          { text: "A developer who works from outside the office.", isCorrect: false, feedback: "Incorrect. This is a 'Remote Worker'." }
        ]
      },
      {
        q: "What is 'Sentiment Analysis'?",
        options: [
          { text: "A model that can feel human emotions.", isCorrect: false, feedback: "Incorrect. AI does not have feelings." },
          { text: "The use of natural language processing to identify, extract, and quantify affective states and subjective information from text.", isCorrect: true, feedback: "Correct. Sentiment analysis is widely used to understand customer feedback, social media trends, and public opinion." },
          { text: "A technique for making an AI model more polite.", isCorrect: false, feedback: "Incorrect. This is 'Tone Adjustment'." },
          { text: "Analyzing the physical health of a person based on their voice.", isCorrect: false, feedback: "Incorrect. This is 'Biometric Analysis'." }
        ]
      },
      {
        q: "What is 'Generative AI'?",
        options: [
          { text: "AI that is only used by the older generation.", isCorrect: false, feedback: "Incorrect. AI is used by all ages." },
          { text: "A type of AI system capable of generating text, images, or other media in response to prompts.", isCorrect: true, feedback: "Correct. Generative AI (like LLMs or Diffusion Models) learns the patterns and structure of their input training data and then generates new data that has similar characteristics." },
          { text: "AI that generates electricity for the computer.", isCorrect: false, feedback: "Incorrect. This is a 'Generator'." },
          { text: "AI that is automatically generated by another AI.", isCorrect: false, feedback: "Incorrect. This is 'AutoML' or 'Recursive AI'." }
        ]
      },
      {
        q: "What is the 'Turing Test'?",
        options: [
          { text: "A test to see how fast a computer can run a program.", isCorrect: false, feedback: "Incorrect. This is a 'Benchmark'." },
          { text: "A test of a machine's ability to exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human.", isCorrect: true, feedback: "Correct. Proposed by Alan Turing in 1950, the test involves a human evaluator who cannot see the machine and must decide if they are talking to a human or a computer." },
          { text: "A test to see if a computer can survive being dropped.", isCorrect: false, feedback: "Incorrect. This is a 'Durability Test'." },
          { text: "A test to see if a computer can solve complex math problems.", isCorrect: false, feedback: "Incorrect. This is a 'Computational Test'." }
        ]
      },
      {
        q: "What is 'Data Mining'?",
        options: [
          { text: "The process of digging for physical hard drives in a landfill.", isCorrect: false, feedback: "Incorrect. This is 'E-waste Scavenging'." },
          { text: "The process of discovering patterns in large data sets involving methods at the intersection of machine learning, statistics, and database systems.", isCorrect: true, feedback: "Correct. Data mining aims to extract information from a data set and transform it into an understandable structure for further use." },
          { text: "Mining cryptocurrency using a very large dataset.", isCorrect: false, feedback: "Incorrect. This is 'Crypto Mining'." },
          { text: "A technique for hiding data inside other files.", isCorrect: false, feedback: "Incorrect. This is 'Steganography'." }
        ]
      },
      {
        q: "What is an 'Agent' in the context of AI?",
        options: [
          { text: "A person who sells AI software to companies.", isCorrect: false, feedback: "Incorrect. This is a 'Sales Agent'." },
          { text: "An autonomous entity which observes through sensors and acts upon an environment using actuators and directs its activity towards achieving goals.", isCorrect: true, feedback: "Correct. Agents can be simple (like a thermostat) or complex (like a self-driving car or a chatbot)." },
          { text: "A secret spy who uses AI to gather intelligence.", isCorrect: false, feedback: "Incorrect. This is an 'Intelligence Officer'." },
          { text: "A program that automatically updates the computer's drivers.", isCorrect: false, feedback: "Incorrect. This is an 'Update Utility'." }
        ]
      }
    ]
  },
  "Cyber Security": {
    name: "Cyber Security",
    weightage: "5%",
    target: 50,
    questions: [
      {
        q: "Why is a polymorphic virus considered significantly more difficult for traditional, signature-based antivirus software to detect and neutralize compared to standard malware?",
        options: [
          { text: "It resides exclusively in the computer's volatile RAM, leaving no disk footprint.", isCorrect: false, feedback: "Incorrect. This describes fileless malware, not specifically a polymorphic virus." },
          { text: "It systematically deletes the antivirus software's executable files upon entry.", isCorrect: false, feedback: "Incorrect. While some malware attempts this, it is not the defining characteristic that makes polymorphic viruses hard to detect via signatures." },
          { text: "It utilizes encryption or obfuscation to alter its code structure and signature with each successive infection.", isCorrect: true, feedback: "Correct. Traditional antivirus relies on static signature matching. Polymorphic viruses dynamically change their appearance (signature) while retaining their malicious functionality, rendering static signature databases obsolete." },
          { text: "It operates as a worm, requiring no host file to propagate.", isCorrect: false, feedback: "Incorrect. A worm is a standalone malware program that replicates itself, but this does not explain why signature-based detection fails against polymorphic viruses." }
        ]
      },
      {
        q: "According to standard Incident Response Methodology, what is the immediate, mandatory next step an incident response team must take after successfully verifying that a security breach is actively occurring?",
        options: [
          { text: "Eradication", isCorrect: false, feedback: "Incorrect. Eradication (removing the threat) occurs only after the threat has been successfully contained." },
          { text: "Containment", isCorrect: true, feedback: "Correct. The incident response lifecycle dictates that once a threat is positively identified, the immediate priority must be Containment—isolating affected systems to prevent further lateral movement or data exfiltration." },
          { text: "Recovery", isCorrect: false, feedback: "Incorrect. Recovery (restoring systems to normal operation) occurs after containment and eradication." },
          { text: "Lessons Learned", isCorrect: false, feedback: "Incorrect. Lessons Learned is the final phase of the incident response lifecycle, conducted after the incident is fully resolved." }
        ]
      },
      {
        q: "Which specific cryptographic construct is utilized to ensure data integrity by taking an input of arbitrary length and producing a mathematically unique, fixed-size string that cannot be reverse-engineered?",
        options: [
          { text: "Digital Certificate", isCorrect: false, feedback: "Incorrect. A digital certificate binds a public key to an identity, it does not directly hash data for integrity checks." },
          { text: "Streaming Cipher", isCorrect: false, feedback: "Incorrect. A streaming cipher is used for encrypting data for confidentiality, not for generating a fixed-size string for integrity verification." },
          { text: "Symmetric Key", isCorrect: false, feedback: "Incorrect. A symmetric key is used for both encryption and decryption, but it is not the construct that produces a fixed-size string from arbitrary input." },
          { text: "Message Digest (Hash)", isCorrect: true, feedback: "Correct. A message digest (or cryptographic hash function) is a one-way mathematical operation heavily utilized for integrity checks. Any alteration to the input data produces a drastically different output hash, signaling tampering." }
        ]
      },
      {
        q: "Among symmetric key encryption algorithms, which technique encrypts data by processing it continuously, one bit or byte at a time, making it highly efficient for continuous data streams?",
        options: [
          { text: "Block Cipher", isCorrect: false, feedback: "Incorrect. Block ciphers (like AES) encrypt data in fixed-size blocks (e.g., 128-bit blocks), not continuously bit by bit." },
          { text: "Message Digest", isCorrect: false, feedback: "Incorrect. A message digest provides data integrity, not encryption for confidentiality." },
          { text: "Streaming Cipher", isCorrect: true, feedback: "Correct. A streaming cipher (such as RC4) encrypts a continuous stream of data sequentially, bit by bit or byte by byte, using a keystream, making it faster for real-time communications." },
          { text: "Public Key Infrastructure", isCorrect: false, feedback: "Incorrect. PKI is a framework for managing digital certificates and public-key encryption, not a specific symmetric encryption technique." }
        ]
      },
      {
        q: "What is 'Phishing' in the context of cyber security?",
        options: [
          { text: "A technique for catching computer viruses using a 'honeypot'.", isCorrect: false, feedback: "Incorrect. This is a defensive technique." },
          { text: "A type of social engineering attack where an attacker sends a fraudulent message designed to trick a person into revealing sensitive information.", isCorrect: true, feedback: "Correct. Phishing often uses email, SMS, or fake websites that mimic legitimate ones to steal passwords or credit card numbers." },
          { text: "A method for encrypting files so they can only be opened by the owner.", isCorrect: false, feedback: "Incorrect. This is 'Encryption'." },
          { text: "A tool for scanning a network for open ports.", isCorrect: false, feedback: "Incorrect. This is a 'Port Scanner'." }
        ]
      },
      {
        q: "What is 'Two-Factor Authentication' (2FA)?",
        options: [
          { text: "A requirement that a user must have two different passwords.", isCorrect: false, feedback: "Incorrect. 2FA requires two *different types* of factors, not just two passwords." },
          { text: "A security process in which a user provides two different authentication factors to verify themselves.", isCorrect: true, feedback: "Correct. Typically, this involves 'something you know' (password) and 'something you have' (a code sent to your phone or a physical key)." },
          { text: "A system that requires two different people to log in at the same time.", isCorrect: false, feedback: "Incorrect. This is 'Dual Control' or 'Multi-party Authorization'." },
          { text: "A method for encrypting a file twice for extra security.", isCorrect: false, feedback: "Incorrect. This is 'Double Encryption'." }
        ]
      },
      {
        q: "What is the primary function of a 'Firewall'?",
        options: [
          { text: "To physically protect the server room from fire.", isCorrect: false, feedback: "Incorrect. This is a physical safety measure." },
          { text: "A network security device that monitors and filters incoming and outgoing network traffic based on an organization's previously established security policies.", isCorrect: true, feedback: "Correct. Firewalls act as a barrier between a trusted internal network and untrusted external networks (like the internet)." },
          { text: "To speed up the internet connection by blocking ads.", isCorrect: false, feedback: "Incorrect. While some firewalls can block ads, it's not their primary function." },
          { text: "To automatically update all the software on a computer.", isCorrect: false, feedback: "Incorrect. This is handled by 'Update Management' systems." }
        ]
      },
      {
        q: "What is 'Encryption'?",
        options: [
          { text: "The process of deleting sensitive data permanently.", isCorrect: false, feedback: "Incorrect. This is 'Data Wiping' or 'Shredding'." },
          { text: "The process of converting information or data into a code, especially to prevent unauthorized access.", isCorrect: true, feedback: "Correct. Encryption ensures confidentiality by making data unreadable to anyone without the correct decryption key." },
          { text: "A technique for making a website load faster.", isCorrect: false, feedback: "Incorrect. Encryption actually adds a small amount of overhead." },
          { text: "A method for organizing files into folders.", isCorrect: false, feedback: "Incorrect. This is a file system function." }
        ]
      },
      {
        q: "What is an 'SQL Injection' attack?",
        options: [
          { text: "Injecting a virus into a database server's hardware.", isCorrect: false, feedback: "Incorrect. SQL injection is a software-level attack." },
          { text: "A type of vulnerability where an attacker can interfere with the queries that an application makes to its database.", isCorrect: true, feedback: "Correct. By 'injecting' malicious SQL code into input fields, an attacker can bypass security, view private data, or even delete the entire database." },
          { text: "A way to make database queries run faster.", isCorrect: false, feedback: "Incorrect. This is 'Query Optimization'." },
          { text: "A tool for automatically generating SQL code.", isCorrect: false, feedback: "Incorrect. While such tools exist, 'injection' refers to an attack." }
        ]
      },
      {
        q: "What is 'Social Engineering' in cyber security?",
        options: [
          { text: "Building a social network for security professionals.", isCorrect: false, feedback: "Incorrect. This is just a community." },
          { text: "The psychological manipulation of people into performing actions or divulging confidential information.", isCorrect: true, feedback: "Correct. Social engineering exploits human trust rather than technical vulnerabilities (e.g., impersonating a tech support agent)." },
          { text: "A technique for improving the user experience of a security app.", isCorrect: false, feedback: "Incorrect. This is 'UX Design'." },
          { text: "Using social media to find out where a person lives.", isCorrect: false, feedback: "Incorrect. This is 'OSINT' or 'Stalking', which can be part of social engineering but isn't the definition." }
        ]
      },
      {
        q: "What is a 'Man-in-the-Middle' (MitM) attack?",
        options: [
          { text: "An attacker physically standing between two servers.", isCorrect: false, feedback: "Incorrect. It's a network-level attack." },
          { text: "An attack where the attacker secretly relays and possibly alters the communications between two parties who believe they are directly communicating with each other.", isCorrect: true, feedback: "Correct. MitM attacks often occur on unencrypted public Wi-Fi networks." },
          { text: "A security professional who mediates between the developers and the management.", isCorrect: false, feedback: "Incorrect. This is a 'Security Liaison' or 'Manager'." },
          { text: "A system that requires a middleman to approve every transaction.", isCorrect: false, feedback: "Incorrect. This is 'Escrow' or 'Authorization'." }
        ]
      },
      {
        q: "What is 'Ransomware'?",
        options: [
          { text: "Software that demands a payment to unlock a user's files that have been encrypted by the attacker.", isCorrect: true, feedback: "Correct. Ransomware is a type of malware that holds data hostage, often demanding payment in cryptocurrency." },
          { text: "A tool for calculating the cost of a security breach.", isCorrect: false, feedback: "Incorrect. This is 'Risk Assessment'." },
          { text: "A program that automatically pays all the company's bills.", isCorrect: false, feedback: "Incorrect. This is 'Accounting Software'." },
          { text: "A virus that deletes itself after a certain amount of time.", isCorrect: false, feedback: "Incorrect. This is 'Self-Deleting Malware'." }
        ]
      },
      {
        q: "What is a 'Zero-Day Vulnerability'?",
        options: [
          { text: "A vulnerability that has been known for zero days (i.e., it was just discovered).", isCorrect: false, feedback: "Incorrect. It refers to the time the developer has had to fix it *after* it became known or exploited." },
          { text: "A software vulnerability that is unknown to those who should be interested in mitigating it (like the software vendor).", isCorrect: true, feedback: "Correct. 'Zero-day' means the developers have had zero days to fix the problem before it could be exploited by attackers." },
          { text: "A vulnerability that only exists on the first day of the year.", isCorrect: false, feedback: "Incorrect. Vulnerabilities can exist at any time." },
          { text: "A vulnerability that is so minor it has zero impact.", isCorrect: false, feedback: "Incorrect. Zero-day vulnerabilities are often highly critical." }
        ]
      },
      {
        q: "What is 'Penetration Testing' (Pen Testing)?",
        options: [
          { text: "Testing the physical strength of a server's casing.", isCorrect: false, feedback: "Incorrect. This is 'Hardware Stress Testing'." },
          { text: "An authorized simulated cyberattack on a computer system, performed to evaluate the security of the system.", isCorrect: true, feedback: "Correct. Pen testers (ethical hackers) use the same tools and techniques as attackers to find and help fix vulnerabilities." },
          { text: "A method for checking if a needle can penetrate a specific material.", isCorrect: false, feedback: "Incorrect. This is a literal interpretation, not the cyber security meaning." },
          { text: "Testing the speed of a network connection by sending many packets.", isCorrect: false, feedback: "Incorrect. This is 'Throughput Testing' or 'Load Testing'." }
        ]
      },
      {
        q: "What is 'Brute Force Attack'?",
        options: [
          { text: "Attacking a server with physical force.", isCorrect: false, feedback: "Incorrect. This is 'Physical Sabotage'." },
          { text: "A trial-and-error method used to decode encrypted data such as passwords or Data Encryption Standard (DES) keys, through exhaustive effort rather than employing intellectual strategies.", isCorrect: true, feedback: "Correct. Brute force attacks involve trying every possible combination until the correct one is found." },
          { text: "A way to make a computer run faster using brute force.", isCorrect: false, feedback: "Incorrect. This is not a technical term." },
          { text: "A method for deleting data using a lot of processing power.", isCorrect: false, feedback: "Incorrect. This is not the definition." }
        ]
      },
      {
        q: "What is a 'Dictionary Attack'?",
        options: [
          { text: "Attacking a person with a heavy dictionary.", isCorrect: false, feedback: "Incorrect. This is a literal joke." },
          { text: "A technique for defeating a cipher or authentication mechanism by trying to determine its decryption key or password by trying hundreds or sometimes millions of likely possibilities, such as words in a dictionary.", isCorrect: true, feedback: "Correct. Dictionary attacks are more efficient than brute force because they focus on common words and phrases." },
          { text: "A way to find the definition of a word in a database.", isCorrect: false, feedback: "Incorrect. This is a 'Dictionary Lookup'." },
          { text: "A method for translating a website using a dictionary.", isCorrect: false, feedback: "Incorrect. This is 'Machine Translation'." }
        ]
      },
      {
        q: "What is 'Salting' in the context of password security?",
        options: [
          { text: "Adding salt to the server's cooling system.", isCorrect: false, feedback: "Incorrect. This is a literal joke." },
          { text: "Adding random data to the input of a hash function to ensure that the same password produces a different hash for every user.", isCorrect: true, feedback: "Correct. Salting protects against 'Rainbow Table' attacks by making pre-computed hashes useless." },
          { text: "A way to make passwords taste better.", isCorrect: false, feedback: "Incorrect. This is a literal joke." },
          { text: "A method for preserving data for a long time.", isCorrect: false, feedback: "Incorrect. This is 'Data Archiving'." }
        ]
      },
      {
        q: "What is a 'Rainbow Table'?",
        options: [
          { text: "A colorful table used for data visualization.", isCorrect: false, feedback: "Incorrect. This is a 'Heat Map' or similar." },
          { text: "A precomputed table for reversing cryptographic hash functions, usually for cracking password hashes.", isCorrect: true, feedback: "Correct. Rainbow tables allow attackers to find the original password for a given hash very quickly, unless the hash is salted." },
          { text: "A table that shows all the colors of the rainbow in hexadecimal.", isCorrect: false, feedback: "Incorrect. This is a 'Color Palette'." },
          { text: "A method for organizing data in a rainbow-like structure.", isCorrect: false, feedback: "Incorrect. This is not a technical term." }
        ]
      },
      {
        q: "What is 'Cross-Site Scripting' (XSS)?",
        options: [
          { text: "A way to write scripts that work on multiple websites.", isCorrect: false, feedback: "Incorrect. This is 'Cross-Platform Scripting'." },
          { text: "A type of security vulnerability typically found in web applications that enables attackers to inject client-side scripts into web pages viewed by other users.", isCorrect: true, feedback: "Correct. XSS can be used to steal session cookies, deface websites, or redirect users to malicious sites." },
          { text: "A method for sharing scripts between different departments.", isCorrect: false, feedback: "Incorrect. This is 'Code Sharing'." },
          { text: "A technique for making a website load faster by using multiple scripts.", isCorrect: false, feedback: "Incorrect. This is 'Parallel Script Loading'." }
        ]
      },
      {
        q: "What is 'Cross-Site Request Forgery' (CSRF)?",
        options: [
          { text: "A way to forge a request to a different department.", isCorrect: false, feedback: "Incorrect. This is 'Internal Forgery'." },
          { text: "A type of malicious exploit of a website where unauthorized commands are transmitted from a user that the web application trusts.", isCorrect: true, feedback: "Correct. CSRF tricks a logged-in user into performing actions they didn't intend to, such as changing their password or making a purchase." },
          { text: "A method for creating fake websites that look like real ones.", isCorrect: false, feedback: "Incorrect. This is 'Phishing'." },
          { text: "A technique for making a website respond to requests from any origin.", isCorrect: false, feedback: "Incorrect. This is 'CORS' with a wildcard, which can be a security risk but isn't CSRF." }
        ]
      },
      {
        q: "What is a 'Botnet'?",
        options: [
          { text: "A network of robots used for manufacturing.", isCorrect: false, feedback: "Incorrect. This is 'Industrial Automation'." },
          { text: "A number of Internet-connected devices, each of which is running one or more bots, used by cybercriminals to perform various tasks (e.g., DDoS attacks, data theft).", isCorrect: true, feedback: "Correct. Botnets are often created by infecting many computers with malware that allows the attacker to control them remotely." },
          { text: "A net used for catching robots.", isCorrect: false, feedback: "Incorrect. This is a literal joke." },
          { text: "A system for automatically replying to emails.", isCorrect: false, feedback: "Incorrect. This is an 'Auto-responder'." }
        ]
      },
      {
        q: "What is a 'DDoS' (Distributed Denial of Service) attack?",
        options: [
          { text: "A way to deny service to a specific person.", isCorrect: false, feedback: "Incorrect. This is 'Denial of Service'." },
          { text: "A malicious attempt to disrupt the normal traffic of a targeted server, service, or network by overwhelming the target or its surrounding infrastructure with a flood of Internet traffic.", isCorrect: true, feedback: "Correct. DDoS attacks use a botnet to send massive amounts of traffic from many different sources, making it hard to block." },
          { text: "A method for distributing data to many users at once.", isCorrect: false, feedback: "Incorrect. This is 'Multicasting' or 'CDN'." },
          { text: "A protocol for ensuring that all users have equal access to a service.", isCorrect: false, feedback: "Incorrect. This is 'Quality of Service' (QoS)." }
        ]
      },
      {
        q: "What is 'Encryption at Rest'?",
        options: [
          { text: "Encrypting data while the computer is turned off.", isCorrect: false, feedback: "Incorrect. Data is encrypted while stored on a disk, regardless of whether the computer is on or off." },
          { text: "The protection of data that is stored on a persistent storage device (e.g., hard drive, SSD, cloud storage).", isCorrect: true, feedback: "Correct. Encryption at rest ensures that if the physical storage media is stolen, the data remains unreadable." },
          { text: "A way to encrypt data while the developer is resting.", isCorrect: false, feedback: "Incorrect. This is a literal joke." },
          { text: "A method for encrypting data that is not currently being used.", isCorrect: false, feedback: "Incorrect. All stored data is 'at rest'." }
        ]
      },
      {
        q: "What is 'Encryption in Transit'?",
        options: [
          { text: "Encrypting data while it is being moved in a truck.", isCorrect: false, feedback: "Incorrect. This is 'Physical Security'." },
          { text: "The protection of data as it moves from one location to another (e.g., from a browser to a server).", isCorrect: true, feedback: "Correct. Encryption in transit (using protocols like TLS/HTTPS) prevents attackers from intercepting and reading data as it travels over the network." },
          { text: "A way to encrypt data while the user is traveling.", isCorrect: false, feedback: "Incorrect. This is not a technical term." },
          { text: "A method for encrypting data that is currently being processed.", isCorrect: false, feedback: "Incorrect. This is 'Encryption in Use'." }
        ]
      },
      {
        q: "What is 'Hashing'?",
        options: [
          { text: "A way to scramble data so it can be unscrambled later.", isCorrect: false, feedback: "Incorrect. This is 'Encryption'." },
          { text: "A one-way mathematical function that takes an input and produces a fixed-size string of characters, which is typically a digest that is unique to that input.", isCorrect: true, feedback: "Correct. Hashing is used for password storage and data integrity checks because it cannot be easily reversed." },
          { text: "A technique for making a website look like a hash brown.", isCorrect: false, feedback: "Incorrect. This is a literal joke." },
          { text: "A method for deleting data by scrambling it.", isCorrect: false, feedback: "Incorrect. This is 'Data Wiping'." }
        ]
      },
      {
        q: "What is 'Public Key Infrastructure' (PKI)?",
        options: [
          { text: "A set of roles, policies, hardware, software, and procedures needed to create, manage, distribute, use, store, and revoke digital certificates and manage public-key encryption.", isCorrect: true, feedback: "Correct. PKI is the foundation for secure communication on the internet (e.g., HTTPS)." },
          { text: "A physical building where public keys are stored.", isCorrect: false, feedback: "Incorrect. This is a literal interpretation." },
          { text: "A tool for automatically generating public keys for everyone.", isCorrect: false, feedback: "Incorrect. While it manages keys, it's a whole framework." },
          { text: "A method for making all keys public for transparency.", isCorrect: false, feedback: "Incorrect. Only public keys are public; private keys must remain secret." }
        ]
      },
      {
        q: "What is a 'Digital Certificate'?",
        options: [
          { text: "A certificate you get for completing an online course.", isCorrect: false, feedback: "Incorrect. This is a 'Completion Certificate'." },
          { text: "An electronic document used to prove the ownership of a public key.", isCorrect: true, feedback: "Correct. Certificates are issued by a 'Certificate Authority' (CA) and are used to establish trust in secure communications." },
          { text: "A digital version of a birth certificate.", isCorrect: false, feedback: "Incorrect. This is a 'Digital Identity Document'." },
          { text: "A way to certify that a computer is free of viruses.", isCorrect: false, feedback: "Incorrect. This is a 'Security Audit' or 'Scan Report'." }
        ]
      },
      {
        q: "What is a 'Certificate Authority' (CA)?",
        options: [
          { text: "A government agency that regulates the internet.", isCorrect: false, feedback: "Incorrect. CAs are typically private companies (e.g., DigiCert, Let's Encrypt)." },
          { text: "An entity that issues digital certificates.", isCorrect: true, feedback: "Correct. CAs act as trusted third parties that verify the identity of the certificate requester." },
          { text: "A tool for automatically generating certificates for free.", isCorrect: false, feedback: "Incorrect. While some CAs (like Let's Encrypt) are free, the CA is the entity, not the tool." },
          { text: "A person who is an expert in digital certificates.", isCorrect: false, feedback: "Incorrect. This is a 'Security Professional'." }
        ]
      },
      {
        q: "What is 'TLS' (Transport Layer Security)?",
        options: [
          { text: "A way to transport data securely in a truck.", isCorrect: false, feedback: "Incorrect. This is a literal joke." },
          { text: "A cryptographic protocol designed to provide communications security over a computer network.", isCorrect: true, feedback: "Correct. TLS is the successor to SSL and is used to secure HTTPS, email, and other network communications." },
          { text: "A tool for managing the transport of data on a server.", isCorrect: false, feedback: "Incorrect. This is 'Traffic Management'." },
          { text: "A method for making the transport layer of the OSI model faster.", isCorrect: false, feedback: "Incorrect. This is 'Network Optimization'." }
        ]
      },
      {
        q: "What is 'SSL' (Secure Sockets Layer)?",
        options: [
          { text: "The predecessor to TLS.", isCorrect: true, feedback: "Correct. While the term SSL is still commonly used, most modern systems actually use TLS." },
          { text: "A way to make your computer's sockets more secure.", isCorrect: false, feedback: "Incorrect. This is a literal joke." },
          { text: "A tool for automatically encrypting all data on a server.", isCorrect: false, feedback: "Incorrect. SSL/TLS secures the *connection*, not the storage." },
          { text: "A method for creating secure web sockets.", isCorrect: false, feedback: "Incorrect. This is 'WSS' (Web Socket Secure), which uses TLS." }
        ]
      },
      {
        q: "What is 'HTTPS'?",
        options: [
          { text: "A faster version of HTTP.", isCorrect: false, feedback: "Incorrect. HTTPS is actually slightly slower due to encryption overhead." },
          { text: "An extension of the Hypertext Transfer Protocol (HTTP) for secure communication over a computer network, which is widely used on the Internet.", isCorrect: true, feedback: "Correct. In HTTPS, the communication protocol is encrypted using Transport Layer Security (TLS) or, formerly, its predecessor, Secure Sockets Layer (SSL)." },
          { text: "A way to hide your IP address while browsing.", isCorrect: false, feedback: "Incorrect. This is a 'VPN' or 'Proxy'." },
          { text: "A method for creating high-performance web pages.", isCorrect: false, feedback: "Incorrect. This is 'Web Performance Optimization'." }
        ]
      },
      {
        q: "What is 'VPN' (Virtual Private Network)?",
        options: [
          { text: "A way to create a private network on a virtual machine.", isCorrect: false, feedback: "Incorrect. This is 'Virtual Networking'." },
          { text: "A service that creates a safe, encrypted connection over a less secure network, such as the public internet.", isCorrect: true, feedback: "Correct. VPNs allow users to send and receive data as if their computing devices were directly connected to a private network." },
          { text: "A tool for making your internet connection faster.", isCorrect: false, feedback: "Incorrect. VPNs usually slow down the connection slightly due to encryption and routing." },
          { text: "A method for creating a virtual version of a physical network.", isCorrect: false, feedback: "Incorrect. This is 'Network Virtualization'." }
        ]
      },
      {
        q: "What is 'Intrusion Detection System' (IDS)?",
        options: [
          { text: "A system that detects when someone physically enters the server room.", isCorrect: false, feedback: "Incorrect. This is a 'Physical Intrusion Detection System'." },
          { text: "A device or software application that monitors a network or systems for malicious activity or policy violations.", isCorrect: true, feedback: "Correct. An IDS only *detects* and alerts; it does not typically stop the activity." },
          { text: "A tool for automatically blocking all suspicious traffic.", isCorrect: false, feedback: "Incorrect. This is an 'Intrusion Prevention System' (IPS)." },
          { text: "A method for detecting when a computer is about to crash.", isCorrect: false, feedback: "Incorrect. This is 'System Monitoring' or 'Predictive Maintenance'." }
        ]
      },
      {
        q: "What is 'Intrusion Prevention System' (IPS)?",
        options: [
          { text: "A system that prevents people from entering the server room.", isCorrect: false, feedback: "Incorrect. This is 'Access Control'." },
          { text: "A network security tool that monitors network and/or system activities for malicious activity and takes steps to block or prevent it.", isCorrect: true, feedback: "Correct. Unlike an IDS, an IPS can actively drop malicious packets or block traffic from an offending IP address." },
          { text: "A tool for automatically detecting all viruses on a computer.", isCorrect: false, feedback: "Incorrect. This is 'Antivirus Software'." },
          { text: "A method for preventing a computer from overheating.", isCorrect: false, feedback: "Incorrect. This is 'Thermal Management'." }
        ]
      },
      {
        q: "What is 'Data Loss Prevention' (DLP)?",
        options: [
          { text: "A set of tools and processes used to ensure that sensitive data is not lost, misused, or accessed by unauthorized users.", isCorrect: true, feedback: "Correct. DLP software identifies, monitors, and protects data in use, data in motion, and data at rest." },
          { text: "A way to prevent a computer from losing power.", isCorrect: false, feedback: "Incorrect. This is a 'UPS' (Uninterruptible Power Supply)." },
          { text: "A tool for automatically backing up all data on a server.", isCorrect: false, feedback: "Incorrect. This is 'Backup and Recovery'." },
          { text: "A method for preventing a user from deleting their own files.", isCorrect: false, feedback: "Incorrect. This is 'File Permissions'." }
        ]
      },
      {
        q: "What is 'Endpoint Security'?",
        options: [
          { text: "Securing the end of a physical cable.", isCorrect: false, feedback: "Incorrect. This is a literal joke." },
          { text: "The practice of securing endpoints or entry points of end-user devices such as desktops, laptops, and mobile devices from being exploited by malicious actors and campaigns.", isCorrect: true, feedback: "Correct. Endpoint security has evolved from traditional antivirus to comprehensive protection against advanced threats." },
          { text: "A way to secure the end of a network connection.", isCorrect: false, feedback: "Incorrect. This is 'Connection Security'." },
          { text: "A method for securing the end of a programming project.", isCorrect: false, feedback: "Incorrect. This is 'Project Closure' or 'Final Review'." }
        ]
      },
      {
        q: "What is 'Identity and Access Management' (IAM)?",
        options: [
          { text: "A framework of policies and technologies for ensuring that the proper people in an enterprise have the appropriate access to technology resources.", isCorrect: true, feedback: "Correct. IAM systems manage user identities and control their access to applications and data." },
          { text: "A way to manage the identity of a computer on a network.", isCorrect: false, feedback: "Incorrect. This is 'Device Management'." },
          { text: "A tool for automatically generating IDs for new employees.", isCorrect: false, feedback: "Incorrect. While it can do this, IAM is a broader framework." },
          { text: "A method for checking the ID of a person at the office door.", isCorrect: false, feedback: "Incorrect. This is 'Physical Security'." }
        ]
      },
      {
        q: "What is 'Principle of Least Privilege' (PoLP)?",
        options: [
          { text: "Giving users as little information as possible to keep them focused.", isCorrect: false, feedback: "Incorrect. This is not a security principle." },
          { text: "The practice of limiting access rights for users to the bare minimum permissions they need to perform their work.", isCorrect: true, feedback: "Correct. PoLP reduces the potential damage from an accident or a security breach." },
          { text: "A rule that says only the most privileged users can access the database.", isCorrect: false, feedback: "Incorrect. This is the opposite of PoLP." },
          { text: "A method for giving everyone the same level of privilege for fairness.", isCorrect: false, feedback: "Incorrect. This is 'Equal Access', which is often insecure." }
        ]
      },
      {
        q: "What is 'Zero Trust Architecture'?",
        options: [
          { text: "A system where nobody is allowed to use the computer.", isCorrect: false, feedback: "Incorrect. This is a literal joke." },
          { text: "A security model that requires all users, whether in or outside the organization's network, to be authenticated, authorized, and continuously validated for security configuration and posture before being granted or keeping access to applications and data.", isCorrect: true, feedback: "Correct. Zero Trust operates on the principle of 'never trust, always verify'." },
          { text: "A way to build a computer that never makes mistakes.", isCorrect: false, feedback: "Incorrect. This is not possible." },
          { text: "A method for creating a network that is completely isolated from the internet.", isCorrect: false, feedback: "Incorrect. This is 'Air-gapping'." }
        ]
      },
      {
        q: "What is 'Air-gapping' in cyber security?",
        options: [
          { text: "A gap in the air conditioning system of the server room.", isCorrect: false, feedback: "Incorrect. This is a literal joke." },
          { text: "A network security measure employed on one or more computers to ensure that a secure computer network is physically isolated from unsecured networks, such as the public internet or an unsecured local area network.", isCorrect: true, feedback: "Correct. Air-gapping is used for highly sensitive systems where the risk of a network-based attack is unacceptable." },
          { text: "A way to make your computer run cooler by adding more air.", isCorrect: false, feedback: "Incorrect. This is 'Air Cooling'." },
          { text: "A method for sending data through the air using radio waves.", isCorrect: false, feedback: "Incorrect. This is 'Wireless Communication'." }
        ]
      },
      {
        q: "What is 'Honeypot' in cyber security?",
        options: [
          { text: "A pot of honey used to attract bears.", isCorrect: false, feedback: "Incorrect. This is a literal joke." },
          { text: "A security mechanism set to detect, deflect, or, in some manner, counteract attempts at unauthorized use of information systems.", isCorrect: true, feedback: "Correct. A honeypot consists of data that appears to be a legitimate part of the site but is actually isolated and monitored, and seems to contain information or a resource of value to attackers." },
          { text: "A tool for making your website look more attractive to users.", isCorrect: false, feedback: "Incorrect. This is 'Visual Design'." },
          { text: "A method for storing passwords in a sweet and sticky format.", isCorrect: false, feedback: "Incorrect. This is a literal joke." }
        ]
      },
      {
        q: "What is 'Sandboxing' in cyber security?",
        options: [
          { text: "Playing with sand in a box.", isCorrect: false, feedback: "Incorrect. This is a literal joke." },
          { text: "A security mechanism for separating running programs, usually in an effort to mitigate system failures or software vulnerabilities from spreading.", isCorrect: true, feedback: "Correct. Sandboxing is often used to execute untested or untrusted programs or code from unverified third parties, suppliers, users or websites, without risking harm to the host machine or operating system." },
          { text: "A way to test a website in a virtual environment.", isCorrect: false, feedback: "Incorrect. This is 'Virtual Testing' or 'Staging', which can use sandboxing." },
          { text: "A method for creating a physical box filled with sand to protect the server from fire.", isCorrect: false, feedback: "Incorrect. This is a literal joke." }
        ]
      },
      {
        q: "What is 'Vulnerability Scanning'?",
        options: [
          { text: "Scanning a person to see if they are vulnerable to a cold.", isCorrect: false, feedback: "Incorrect. This is a medical scan." },
          { text: "An inspection of the potential points of exploitation on a computer or network to identify security holes.", isCorrect: true, feedback: "Correct. Vulnerability scanners are automated tools that check for known vulnerabilities in software and configurations." },
          { text: "A tool for automatically fixing all the bugs in a program.", isCorrect: false, feedback: "Incorrect. Scanners only *identify* vulnerabilities; they don't typically fix them." },
          { text: "A method for checking if a computer is physically damaged.", isCorrect: false, feedback: "Incorrect. This is 'Hardware Inspection'." }
        ]
      },
      {
        q: "What is 'Security Information and Event Management' (SIEM)?",
        options: [
          { text: "A field within the field of computer security, where software products and services combine security information management (SIM) and security event management (SEM).", isCorrect: true, feedback: "Correct. SIEM provides real-time analysis of security alerts generated by applications and network hardware." },
          { text: "A way to manage all the security guards in a building.", isCorrect: false, feedback: "Incorrect. This is 'Security Guard Management'." },
          { text: "A tool for automatically generating security policies for a company.", isCorrect: false, feedback: "Incorrect. This is 'Policy Management'." },
          { text: "A method for organizing security events in a calendar.", isCorrect: false, feedback: "Incorrect. This is a 'Security Calendar'." }
        ]
      }
    ]
  },
  "Databases": {
    name: "Databases",
    weightage: "10%",
    target: 100,
    questions: [
      {
        q: "In the context of modern database architecture, what is the primary operational driver for adopting a NoSQL database over a traditional Relational Database Management System (RDBMS)?",
        options: [
          { text: "The strict enforcement of standardized SQL for all analytical queries.", isCorrect: false, feedback: "Incorrect. NoSQL databases typically do not use standardized SQL, and their primary driver is not strict query enforcement." },
          { text: "High normalization to completely eliminate all forms of data redundancy.", isCorrect: false, feedback: "Incorrect. NoSQL databases often embrace denormalization and data redundancy to optimize read performance." },
          { text: "Schema flexibility and the ability to scale horizontally to accommodate massive volumes of unstructured data.", isCorrect: true, feedback: "Correct. NoSQL databases bypass rigid tabular schemas, offering flexible data models that allow developers to ingest unstructured data at high velocity and scale horizontally across commodity hardware." },
          { text: "The absolute guarantee of ACID properties for every transaction.", isCorrect: false, feedback: "Incorrect. While some NoSQL databases offer ACID guarantees, many prioritize availability and partition tolerance (BASE properties) over strict ACID compliance." }
        ]
      },
      {
        q: "Within a distributed database environment, which specific mechanism is deployed to copy and maintain identical datasets across multiple geographical sites to enhance fault tolerance and localize read access?",
        options: [
          { text: "Normalization", isCorrect: false, feedback: "Incorrect. Normalization is a design process to reduce data redundancy within a single database schema, not a mechanism for distributing data across sites." },
          { text: "Replication", isCorrect: true, feedback: "Correct. Replication involves creating synchronized copies of the database across different network nodes. This provides high availability and fault tolerance, while speeding up local read queries for distributed users." },
          { text: "Fragmentation", isCorrect: false, feedback: "Incorrect. Fragmentation (or sharding) involves dividing a database into smaller parts and distributing them across nodes, rather than copying identical datasets to multiple sites." },
          { text: "Concurrency Control", isCorrect: false, feedback: "Incorrect. Concurrency control manages simultaneous transactions to prevent data inconsistency, not the physical distribution of datasets." }
        ]
      },
      {
        q: "Which severe relational database anomaly occurs when a distinct, independent piece of information cannot be recorded into a table unless an irrelevant, secondary piece of information is simultaneously inserted?",
        options: [
          { text: "Update Anomaly", isCorrect: false, feedback: "Incorrect. An update anomaly occurs when a piece of data is changed in one place but not in all places it is redundantly stored." },
          { text: "Deletion Anomaly", isCorrect: false, feedback: "Incorrect. A deletion anomaly occurs when deleting a row to remove one fact inadvertently deletes another independent fact." },
          { text: "Concurrency Anomaly", isCorrect: false, feedback: "Incorrect. Concurrency anomalies occur when multiple transactions interfere with each other during simultaneous execution." },
          { text: "Insertion Anomaly", isCorrect: true, feedback: "Correct. An insertion anomaly arises in unnormalized tables where a primary key constraint forces the inclusion of unrelated data (e.g., unable to add a new course because no students are enrolled in it yet)." }
        ]
      },
      {
        q: "If a development team needs to build a highly interconnected application, such as a social network recommendation engine that maps complex user relationships and interactions, which NoSQL database type is optimal?",
        options: [
          { text: "Graph Database", isCorrect: true, feedback: "Correct. Graph databases are specifically engineered to store entities (nodes) and the relationships between them (edges). They excel at traversing highly interconnected data with minimal overhead, making them vastly superior for social networking." },
          { text: "Key-Value Store", isCorrect: false, feedback: "Incorrect. Key-value stores are highly performant for simple lookups but lack the structure to efficiently query complex relationships between entities." },
          { text: "Wide-Column Store", isCorrect: false, feedback: "Incorrect. Wide-column stores are optimized for massive data velocity and analytical queries over large datasets, but not for traversing complex, deep relationships." },
          { text: "Document-Oriented Database", isCorrect: false, feedback: "Incorrect. While document databases are flexible, they are not optimized for querying deep, interconnected relationships between separate documents." }
        ]
      },
      {
        q: "What is 'Database Normalization'?",
        options: [
          { text: "The process of making the database follow a normal distribution.", isCorrect: false, feedback: "Incorrect. This is a statistical concept." },
          { text: "The process of organizing data in a database to reduce redundancy and improve data integrity.", isCorrect: true, feedback: "Correct. Normalization involves dividing large tables into smaller ones and defining relationships between them (e.g., 1NF, 2NF, 3NF)." },
          { text: "A technique for converting all data into a standard text format.", isCorrect: false, feedback: "Incorrect. This is 'Data Formatting'." },
          { text: "The process of deleting all the data that is not 'normal'.", isCorrect: false, feedback: "Incorrect. This is 'Data Cleaning'." }
        ]
      },
      {
        q: "In a relational database, what is a 'Primary Key'?",
        options: [
          { text: "The most important key on the server's keyboard.", isCorrect: false, feedback: "Incorrect. This is a literal joke." },
          { text: "A specific choice of a minimal set of attributes that uniquely specify a tuple (row) in a relation (table).", isCorrect: true, feedback: "Correct. A primary key must be unique and cannot be null, ensuring that every record in the table can be identified." },
          { text: "A key used to encrypt the entire database.", isCorrect: false, feedback: "Incorrect. This is a 'Master Encryption Key'." },
          { text: "The first column in every database table.", isCorrect: false, feedback: "Incorrect. While often the first, it doesn't have to be." }
        ]
      },
      {
        q: "What is a 'Foreign Key' in a database?",
        options: [
          { text: "A key that comes from a different country.", isCorrect: false, feedback: "Incorrect. This is a literal joke." },
          { text: "A column or group of columns in a relational database table that provides a link between data in two tables.", isCorrect: true, feedback: "Correct. A foreign key in one table points to the primary key in another table, enforcing referential integrity." },
          { text: "A key used by foreign users to access the database.", isCorrect: false, feedback: "Incorrect. Access is managed by user permissions." },
          { text: "A key that is not currently being used in the database.", isCorrect: false, feedback: "Incorrect. This is just an unused column." }
        ]
      },
      {
        q: "What does 'SQL' stand for?",
        options: [
          { text: "Simple Query Language", isCorrect: false, feedback: "Incorrect. SQL is more powerful than 'simple'." },
          { text: "Structured Query Language", isCorrect: true, feedback: "Correct. SQL is the standard language used to communicate with relational database management systems." },
          { text: "Sequential Query Logic", isCorrect: false, feedback: "Incorrect. While queries are executed, this is not the name." },
          { text: "Standardized Question List", isCorrect: false, feedback: "Incorrect. This is not the name." }
        ]
      },
      {
        q: "What is the primary purpose of 'Database Indexing'?",
        options: [
          { text: "To make the database take up less space on the disk.", isCorrect: false, feedback: "Incorrect. Indexes actually take up *more* space." },
          { text: "To speed up the retrieval of data from a database table at the cost of slower writes.", isCorrect: true, feedback: "Correct. An index is a data structure (like a B-Tree) that allows the database to find rows much faster than scanning the entire table." },
          { text: "To automatically sort the data in the table physically.", isCorrect: false, feedback: "Incorrect. This is a 'Clustered Index', but indexing in general doesn't always sort physically." },
          { text: "To prevent unauthorized users from seeing certain columns.", isCorrect: false, feedback: "Incorrect. This is handled by 'Views' or 'Permissions'." }
        ]
      },
      {
        q: "In database transactions, what does the 'ACID' acronym stand for?",
        options: [
          { text: "Accuracy, Consistency, Isolation, Durability", isCorrect: false, feedback: "Incorrect. The 'A' stands for Atomicity." },
          { text: "Atomicity, Consistency, Isolation, Durability", isCorrect: true, feedback: "Correct. ACID properties ensure that database transactions are processed reliably and that the database remains in a valid state even in the event of errors or crashes." },
          { text: "Atomicity, Complexity, Integrity, Data", isCorrect: false, feedback: "Incorrect. These are not the ACID properties." },
          { text: "Access, Control, Information, Design", isCorrect: false, feedback: "Incorrect. These are not the ACID properties." }
        ]
      },
      {
        q: "What is 'Data Redundancy' in a database?",
        options: [
          { text: "When the database is too full to store new data.", isCorrect: false, feedback: "Incorrect. This is a capacity issue." },
          { text: "The existence of data that is additional to the actual data and permits correction of errors in stored or transmitted data.", isCorrect: false, feedback: "Incorrect. This is 'Error Correction Code'." },
          { text: "The repetition of data in multiple places within a database.", isCorrect: true, feedback: "Correct. While sometimes used for performance (denormalization), excessive redundancy can lead to inconsistencies and wasted space." },
          { text: "When a developer writes the same query twice.", isCorrect: false, feedback: "Incorrect. This is just redundant code." }
        ]
      },
      {
        q: "What is 'Sharding' in the context of database scaling?",
        options: [
          { text: "Breaking the database server into physical pieces.", isCorrect: false, feedback: "Incorrect. This is physical destruction." },
          { text: "A type of database partitioning that separates very large databases into smaller, faster, more easily managed parts called data shards.", isCorrect: true, feedback: "Correct. Sharding is a horizontal scaling technique where data is distributed across multiple servers." },
          { text: "A technique for encrypting small 'shards' of data.", isCorrect: false, feedback: "Incorrect. Sharding is about distribution, not encryption." },
          { text: "A method for deleting old data to save space.", isCorrect: false, feedback: "Incorrect. This is 'Archiving' or 'Purging'." }
        ]
      },
      {
        q: "What is a 'Stored Procedure'?",
        options: [
          { text: "A document that explains how to use the database.", isCorrect: false, feedback: "Incorrect. This is 'Documentation'." },
          { text: "A prepared SQL code that you can save, so the code can be reused over and over again.", isCorrect: true, feedback: "Correct. Stored procedures are stored in the database and can be called by applications, improving performance and security." },
          { text: "A backup of the database stored in a secure location.", isCorrect: false, feedback: "Incorrect. This is a 'Database Backup'." },
          { text: "A list of all the users who have access to the database.", isCorrect: false, feedback: "Incorrect. This is a 'User Registry' or 'ACL'." }
        ]
      },
      {
        q: "What is the primary characteristic of a 'NoSQL' database?",
        options: [
          { text: "It is a database that does not use any SQL at all.", isCorrect: false, feedback: "Incorrect. Many NoSQL databases have SQL-like query languages." },
          { text: "A non-relational database that provides a mechanism for storage and retrieval of data that is modeled in means other than the tabular relations used in relational databases.", isCorrect: true, feedback: "Correct. NoSQL databases (like Document, Key-Value, Graph) are designed for specific data models and have flexible schemas for building modern applications." },
          { text: "A database that is only used for small, non-critical applications.", isCorrect: false, feedback: "Incorrect. NoSQL databases are used by some of the largest applications in the world (e.g., Facebook, Amazon)." },
          { text: "A database that is stored entirely in the computer's RAM.", isCorrect: false, feedback: "Incorrect. This is an 'In-Memory Database', which can be either SQL or NoSQL." }
        ]
      },
      {
        q: "What is a 'Database Trigger'?",
        options: [
          { text: "A button on the server that deletes all data.", isCorrect: false, feedback: "Incorrect. This is a 'Panic Button'." },
          { text: "A procedural code that is automatically executed in response to certain events on a particular table or view in a database.", isCorrect: true, feedback: "Correct. Triggers are often used for maintaining complex integrity constraints or auditing changes." },
          { text: "A query that is so complex it 'triggers' a server crash.", isCorrect: false, feedback: "Incorrect. This is a 'Resource Intensive Query'." },
          { text: "A person who is responsible for starting the database after a crash.", isCorrect: false, feedback: "Incorrect. This is a 'Database Administrator'." }
        ]
      },
      {
        q: "What is 'Data Integrity'?",
        options: [
          { text: "The honesty of the database administrator.", isCorrect: false, feedback: "Incorrect. This is personal integrity." },
          { text: "The maintenance of, and the assurance of the accuracy and consistency of, data over its entire life-cycle.", isCorrect: true, feedback: "Correct. Data integrity is a critical aspect of the design, implementation, and usage of any system which stores, processes, or retrieves data." },
          { text: "The process of making sure the database is never empty.", isCorrect: false, feedback: "Incorrect. This is 'Data Availability'." },
          { text: "A technique for compressing data without losing any information.", isCorrect: false, feedback: "Incorrect. This is 'Lossless Compression'." }
        ]
      },
      {
        q: "What is a 'Database View'?",
        options: [
          { text: "A physical monitor that shows the database tables.", isCorrect: false, feedback: "Incorrect. This is just a screen." },
          { text: "A virtual table based on the result-set of an SQL statement.", isCorrect: true, feedback: "Correct. Views can hide complex joins, provide security by restricting access to specific columns, and simplify the user's perspective of the data." },
          { text: "A screenshot of the database schema.", isCorrect: false, feedback: "Incorrect. This is 'Documentation'." },
          { text: "A list of all the people who have viewed the database.", isCorrect: false, feedback: "Incorrect. This is an 'Audit Log'." }
        ]
      },
      {
        q: "What is 'Concurrency Control' in databases?",
        options: [
          { text: "Controlling how many people can enter the server room.", isCorrect: false, feedback: "Incorrect. This is 'Physical Access Control'." },
          { text: "A method used to ensure that database transactions are performed concurrently without violating the data integrity of a database.", isCorrect: true, feedback: "Correct. Techniques like locking or timestamping are used to prevent issues like 'Dirty Reads' or 'Lost Updates'." },
          { text: "A way to make the database run on multiple CPUs at once.", isCorrect: false, feedback: "Incorrect. This is 'Parallel Processing'." },
          { text: "A tool for managing the speed of the internet connection to the database.", isCorrect: false, feedback: "Incorrect. This is 'Bandwidth Management'." }
        ]
      },
      {
        q: "What is 'ETL' in the context of data warehousing?",
        options: [
          { text: "Eat, Train, Learn", isCorrect: false, feedback: "Incorrect. This is a lifestyle motto." },
          { text: "Extract, Transform, Load", isCorrect: true, feedback: "Correct. ETL is the general procedure of copying data from one or more sources into a destination system which represents the data differently from the source(s)." },
          { text: "Encrypt, Transfer, Lock", isCorrect: false, feedback: "Incorrect. This is a security workflow." },
          { text: "Electronic Transfer List", isCorrect: false, feedback: "Incorrect. This is not the meaning of ETL." }
        ]
      },
      {
        q: "What is a 'Deadlock' in a database?",
        options: [
          { text: "A physical lock on the server rack that cannot be opened.", isCorrect: false, feedback: "Incorrect. This is a hardware failure." },
          { text: "A situation in which two or more transactions are waiting for each other to give up locks.", isCorrect: true, feedback: "Correct. Databases have deadlock detection mechanisms that typically abort one of the transactions to break the cycle." },
          { text: "A database that has been deleted and cannot be recovered.", isCorrect: false, feedback: "Incorrect. This is a 'Data Loss' event." },
          { text: "A password that has expired and cannot be reset.", isCorrect: false, feedback: "Incorrect. This is an 'Account Lockout'." }
        ]
      },
      {
        q: "What is 'Denormalization'?",
        options: [
          { text: "The process of making a database less 'normal'.", isCorrect: false, feedback: "Incorrect. This is a literal but incorrect interpretation." },
          { text: "A strategy used on a previously-normalized database to increase performance by adding redundant data or by grouping data.", isCorrect: true, feedback: "Correct. Denormalization can speed up read queries by reducing the number of joins needed, but it makes writes more complex and risks data inconsistency." },
          { text: "A technique for deleting all the indexes in a database.", isCorrect: false, feedback: "Incorrect. This is 'Index Dropping'." },
          { text: "A method for converting a NoSQL database into a Relational database.", isCorrect: false, feedback: "Incorrect. This is 'Data Migration'." }
        ]
      },
      {
        q: "What is a 'Transaction Log'?",
        options: [
          { text: "A list of all the items a company has sold.", isCorrect: false, feedback: "Incorrect. This is a 'Sales Log'." },
          { text: "A history of actions executed by a database management system to guarantee ACID properties over crashes or hardware failures.", isCorrect: true, feedback: "Correct. The log is used to 'redo' or 'undo' transactions during recovery." },
          { text: "A diary kept by the database administrator.", isCorrect: false, feedback: "Incorrect. This is a personal log." },
          { text: "A list of all the SQL queries that were too slow.", isCorrect: false, feedback: "Incorrect. This is a 'Slow Query Log'." }
        ]
      },
      {
        q: "What is 'Data Sharding'?",
        options: [
          { text: "Breaking a database into smaller, faster, more easily managed parts called data shards.", isCorrect: true, feedback: "Correct. Sharding is a type of horizontal partitioning that spreads data across multiple servers." },
          { text: "A technique for encrypting data into small pieces.", isCorrect: false, feedback: "Incorrect. This is not what sharding means." },
          { text: "A method for deleting data that is no longer needed.", isCorrect: false, feedback: "Incorrect. This is 'Data Purging'." },
          { text: "A way to combine multiple databases into one.", isCorrect: false, feedback: "Incorrect. This is 'Database Consolidation'." }
        ]
      },
      {
        q: "What is a 'Composite Key'?",
        options: [
          { text: "A key made of plastic and metal.", isCorrect: false, feedback: "Incorrect. This is a literal joke." },
          { text: "A combination of two or more columns in a table that can be used to uniquely identify each row in the table.", isCorrect: true, feedback: "Correct. A composite key is used when a single column is not enough to uniquely identify a record." },
          { text: "A key that is used to unlock multiple databases.", isCorrect: false, feedback: "Incorrect. This is not a database term." },
          { text: "A key that is generated by a computer automatically.", isCorrect: false, feedback: "Incorrect. This is a 'Surrogate Key'." }
        ]
      },
      {
        q: "What is a 'Surrogate Key'?",
        options: [
          { text: "A key that stands in for another key.", isCorrect: false, feedback: "Incorrect. This is a literal interpretation." },
          { text: "A unique identifier for either an entity in the modeled world or an object in the database, which is not derived from application data.", isCorrect: true, feedback: "Correct. Surrogate keys are often auto-incrementing integers and have no business meaning." },
          { text: "A key that is used by a surrogate user.", isCorrect: false, feedback: "Incorrect. This is not a technical term." },
          { text: "A key that is only used temporarily.", isCorrect: false, feedback: "Incorrect. Surrogate keys are permanent identifiers." }
        ]
      },
      {
        q: "What is 'Referential Integrity'?",
        options: [
          { text: "The integrity of the references in a bibliography.", isCorrect: false, feedback: "Incorrect. This is an academic concept." },
          { text: "A property of data stating that all its references are valid.", isCorrect: true, feedback: "Correct. In the context of relational databases, it requires every value of one attribute (column) of a relation (table) to exist as a value of another attribute in a different (or the same) relation." },
          { text: "A way to make sure all users have a reference letter.", isCorrect: false, feedback: "Incorrect. This is a hiring process." },
          { text: "A method for checking if a website link is broken.", isCorrect: false, feedback: "Incorrect. This is 'Link Validation'." }
        ]
      },
      {
        q: "What is a 'Database Schema'?",
        options: [
          { text: "A plan to steal data from a database.", isCorrect: false, feedback: "Incorrect. This is a 'Data Breach' plan." },
          { text: "The formal description of the structure of a database, including the tables, fields, relationships, and constraints.", isCorrect: true, feedback: "Correct. The schema defines how data is organized and how the relations among them are associated." },
          { text: "A list of all the data currently stored in the database.", isCorrect: false, feedback: "Incorrect. This is the 'Database Content' or 'State'." },
          { text: "A tool for drawing diagrams of databases.", isCorrect: false, feedback: "Incorrect. This is a 'Database Modeling Tool'." }
        ]
      },
      {
        q: "What is 'Data Warehousing'?",
        options: [
          { text: "A large building where physical hard drives are stored.", isCorrect: false, feedback: "Incorrect. This is a 'Data Center'." },
          { text: "The process of collecting and managing data from varied sources to provide meaningful business insights.", isCorrect: true, feedback: "Correct. A data warehouse is a central repository of integrated data from one or more disparate sources." },
          { text: "A technique for compressing data to save space.", isCorrect: false, feedback: "Incorrect. This is 'Data Compression'." },
          { text: "A method for deleting old data from a database.", isCorrect: false, feedback: "Incorrect. This is 'Data Purging'." }
        ]
      },
      {
        q: "What is 'OLAP' (Online Analytical Processing)?",
        options: [
          { text: "A way to process data while standing in line.", isCorrect: false, feedback: "Incorrect. This is a literal joke." },
          { text: "A category of software that allows users to analyze information from multiple database systems at the same time.", isCorrect: true, feedback: "Correct. OLAP is used for complex analytical queries, often involving multi-dimensional data (cubes)." },
          { text: "A protocol for online payments.", isCorrect: false, feedback: "Incorrect. This is 'PCI DSS' or similar." },
          { text: "A method for creating online maps.", isCorrect: false, feedback: "Incorrect. This is 'GIS' or 'Web Mapping'." }
        ]
      },
      {
        q: "What is 'OLTP' (Online Transaction Processing)?",
        options: [
          { text: "A way to process transactions while on vacation.", isCorrect: false, feedback: "Incorrect. This is a literal joke." },
          { text: "A class of software programs capable of supporting transaction-oriented applications on the internet.", isCorrect: true, feedback: "Correct. OLTP systems are optimized for high-speed, high-volume, simple transactions (e.g., ATM withdrawals, online shopping)." },
          { text: "A protocol for online file transfers.", isCorrect: false, feedback: "Incorrect. This is 'FTP' or 'SFTP'." },
          { text: "A method for creating online surveys.", isCorrect: false, feedback: "Incorrect. This is 'Online Surveying'." }
        ]
      },
      {
        q: "What is 'Data Mining' in the context of databases?",
        options: [
          { text: "Digging for data in a physical landfill.", isCorrect: false, feedback: "Incorrect. This is 'E-waste Scavenging'." },
          { text: "The process of discovering patterns in large data sets involving methods at the intersection of machine learning, statistics, and database systems.", isCorrect: true, feedback: "Correct. Data mining aims to extract information from a data set and transform it into an understandable structure for further use." },
          { text: "Mining cryptocurrency using a database.", isCorrect: false, feedback: "Incorrect. This is 'Crypto Mining'." },
          { text: "A technique for hiding data inside other files.", isCorrect: false, feedback: "Incorrect. This is 'Steganography'." }
        ]
      },
      {
        q: "What is a 'Distributed Database'?",
        options: [
          { text: "A database that is given away for free to everyone.", isCorrect: false, feedback: "Incorrect. This is 'Open Source' or 'Freeware'." },
          { text: "A database in which storage devices are not all attached to a common processor but are distributed over a network.", isCorrect: true, feedback: "Correct. Distributed databases can improve performance, availability, and reliability." },
          { text: "A database that is stored on a single very large computer.", isCorrect: false, feedback: "Incorrect. This is a 'Centralized Database'." },
          { text: "A method for distributing data using physical mail.", isCorrect: false, feedback: "Incorrect. This is 'Sneakernet'." }
        ]
      },
      {
        q: "What is 'Database Replication'?",
        options: [
          { text: "Creating a physical copy of the database server.", isCorrect: false, feedback: "Incorrect. This is 'Hardware Cloning'." },
          { text: "The frequent electronic copying of data from a database in one computer or server to a database in another so that all users share the same level of information.", isCorrect: true, feedback: "Correct. Replication is used for load balancing, high availability, and disaster recovery." },
          { text: "A technique for making the database look like another database.", isCorrect: false, feedback: "Incorrect. This is 'Database Masking' or 'Mocking'." },
          { text: "A method for deleting duplicate records in a database.", isCorrect: false, feedback: "Incorrect. This is 'Deduplication'." }
        ]
      },
      {
        q: "What is 'Vertical Scaling' (Scaling Up) in databases?",
        options: [
          { text: "Adding more servers to the database cluster.", isCorrect: false, feedback: "Incorrect. This is 'Horizontal Scaling'." },
          { text: "Adding more resources (CPU, RAM, Disk) to an existing server.", isCorrect: true, feedback: "Correct. Vertical scaling is limited by the maximum capacity of a single machine." },
          { text: "Making the database tables taller by adding more rows.", isCorrect: false, feedback: "Incorrect. This is just 'Data Growth'." },
          { text: "A technique for organizing data in a vertical format.", isCorrect: false, feedback: "Incorrect. This is 'Columnar Storage'." }
        ]
      },
      {
        q: "What is 'Horizontal Scaling' (Scaling Out) in databases?",
        options: [
          { text: "Adding more resources to an existing server.", isCorrect: false, feedback: "Incorrect. This is 'Vertical Scaling'." },
          { text: "Adding more servers to a system, such as adding a new computer to a distributed software application.", isCorrect: true, feedback: "Correct. Horizontal scaling is more flexible and can theoretically scale indefinitely." },
          { text: "Making the database tables wider by adding more columns.", isCorrect: false, feedback: "Incorrect. This is 'Schema Modification'." },
          { text: "A technique for organizing data in a horizontal format.", isCorrect: false, feedback: "Incorrect. This is 'Row-based Storage'." }
        ]
      },
      {
        q: "What is 'Database Partitioning'?",
        options: [
          { text: "Dividing the database server room into different sections.", isCorrect: false, feedback: "Incorrect. This is 'Physical Partitioning'." },
          { text: "The process of dividing a large database into smaller, more manageable segments called partitions.", isCorrect: true, feedback: "Correct. Partitioning can improve performance, manageability, and availability." },
          { text: "A technique for encrypting different parts of the database.", isCorrect: false, feedback: "Incorrect. This is 'Granular Encryption'." },
          { text: "A method for deleting old data from the database.", isCorrect: false, feedback: "Incorrect. This is 'Data Purging'." }
        ]
      },
      {
        q: "What is 'Range Partitioning'?",
        options: [
          { text: "Partitioning data based on a range of values (e.g., dates, IDs).", isCorrect: true, feedback: "Correct. For example, all records from 2023 go into one partition, and all from 2024 go into another." },
          { text: "Partitioning data based on the physical range of the server.", isCorrect: false, feedback: "Incorrect. This is not a technical term." },
          { text: "A technique for partitioning data based on the user's location.", isCorrect: false, feedback: "Incorrect. This is 'Geographic Partitioning'." },
          { text: "A method for partitioning data based on the size of the records.", isCorrect: false, feedback: "Incorrect. This is not a standard partitioning method." }
        ]
      },
      {
        q: "What is 'Hash Partitioning'?",
        options: [
          { text: "Partitioning data based on a hash function applied to a specific column.", isCorrect: true, feedback: "Correct. Hash partitioning ensures an even distribution of data across partitions." },
          { text: "Partitioning data based on the amount of 'hash' (noise) in the data.", isCorrect: false, feedback: "Incorrect. This is a literal joke." },
          { text: "A technique for encrypting data using a hash function.", isCorrect: false, feedback: "Incorrect. Hashing is used for partitioning here, not encryption." },
          { text: "A method for deleting data that has a specific hash value.", isCorrect: false, feedback: "Incorrect. This is not the purpose of hash partitioning." }
        ]
      },
      {
        q: "What is 'List Partitioning'?",
        options: [
          { text: "Partitioning data based on a list of specific values (e.g., states, categories).", isCorrect: true, feedback: "Correct. For example, all records for 'New York' and 'New Jersey' go into one partition." },
          { text: "Partitioning data based on the order of items in a list.", isCorrect: false, feedback: "Incorrect. This is not a standard partitioning method." },
          { text: "A technique for creating a list of all the partitions in a database.", isCorrect: false, feedback: "Incorrect. This is a 'Partition List'." },
          { text: "A method for partitioning data based on the user's name.", isCorrect: false, feedback: "Incorrect. This is just a specific case of list or hash partitioning." }
        ]
      },
      {
        q: "What is 'Database Migration'?",
        options: [
          { text: "The process of moving data from one database to another.", isCorrect: true, feedback: "Correct. Migration can involve moving data between different versions of the same DBMS or between different DBMSs entirely." },
          { text: "The seasonal movement of database administrators to different offices.", isCorrect: false, feedback: "Incorrect. This is a literal joke." },
          { text: "A technique for making the database run faster by moving it to a new server.", isCorrect: false, feedback: "Incorrect. This is 'Server Migration', which is a part of database migration." },
          { text: "A method for deleting old data from the database.", isCorrect: false, feedback: "Incorrect. This is 'Data Purging'." }
        ]
      },
      {
        q: "What is 'Data Scrubbing' (or Data Cleansing)?",
        options: [
          { text: "Physically cleaning the hard drives with a brush.", isCorrect: false, feedback: "Incorrect. This is a literal joke." },
          { text: "The process of detecting and correcting (or removing) corrupt or inaccurate records from a record set, table, or database.", isCorrect: true, feedback: "Correct. Data scrubbing ensures that the data is accurate, complete, and consistent." },
          { text: "A technique for encrypting data to hide it from others.", isCorrect: false, feedback: "Incorrect. This is 'Data Masking' or 'Encryption'." },
          { text: "A method for deleting all the data in a database.", isCorrect: false, feedback: "Incorrect. This is 'Data Wiping'." }
        ]
      },
      {
        q: "What is 'Database Auditing'?",
        options: [
          { text: "The process of tracking and recording the actions of database users.", isCorrect: true, feedback: "Correct. Auditing is important for security, compliance, and troubleshooting." },
          { text: "A technique for checking the financial records of a database company.", isCorrect: false, feedback: "Incorrect. This is 'Financial Auditing'." },
          { text: "A method for testing the performance of a database.", isCorrect: false, feedback: "Incorrect. This is 'Performance Testing'." },
          { text: "A tool for automatically generating reports from a database.", isCorrect: false, feedback: "Incorrect. This is 'Reporting Software'." }
        ]
      },
      {
        q: "What is a 'Database Administrator' (DBA)?",
        options: [
          { text: "A person responsible for the design, implementation, maintenance, and repair of an organization's database.", isCorrect: true, feedback: "Correct. DBAs ensure that the database is secure, performant, and available." },
          { text: "A software program that automatically manages the database.", isCorrect: false, feedback: "Incorrect. While there are automated tools, a DBA is a human role." },
          { text: "A person who sells database software to companies.", isCorrect: false, feedback: "Incorrect. This is a 'Sales Representative'." },
          { text: "A user who has the most data in the database.", isCorrect: false, feedback: "Incorrect. This is just a 'Heavy User'." }
        ]
      },
      {
        q: "What is 'Data Masking'?",
        options: [
          { text: "Putting a physical mask on the server.", isCorrect: false, feedback: "Incorrect. This is a literal joke." },
          { text: "The process of hiding original data with modified content (characters or other data).", isCorrect: true, feedback: "Correct. Data masking is used to protect sensitive data in non-production environments (e.g., testing, training)." },
          { text: "A technique for encrypting the entire database.", isCorrect: false, feedback: "Incorrect. This is 'Full Disk Encryption'." },
          { text: "A method for deleting sensitive data from a database.", isCorrect: false, feedback: "Incorrect. This is 'Data Redaction' or 'Purging'." }
        ]
      },
      {
        q: "What is 'Database Hardening'?",
        options: [
          { text: "Making the server casing stronger.", isCorrect: false, feedback: "Incorrect. This is 'Physical Hardening'." },
          { text: "The process of securing a database by reducing its surface of vulnerability.", isCorrect: true, feedback: "Correct. Hardening involves removing unnecessary features, applying patches, and configuring strong access controls." },
          { text: "A technique for making the database run faster.", isCorrect: false, feedback: "Incorrect. This is 'Performance Tuning'." },
          { text: "A method for making the database more resistant to physical damage.", isCorrect: false, feedback: "Incorrect. This is 'Disaster Recovery Planning'." }
        ]
      },
      {
        q: "What is 'Full Text Search' in databases?",
        options: [
          { text: "A way to search for a specific word in a text file.", isCorrect: false, feedback: "Incorrect. This is 'Grep' or similar." },
          { text: "A technique for searching a computer-stored document or a database that provides results based on all the words in the document.", isCorrect: true, feedback: "Correct. Full text search allows for complex queries, including partial matches, synonyms, and relevance ranking." },
          { text: "A method for searching for images using text.", isCorrect: false, feedback: "Incorrect. This is 'Image Search' or 'Computer Vision'." },
          { text: "A tool for automatically translating text in a database.", isCorrect: false, feedback: "Incorrect. This is 'Machine Translation'." }
        ]
      },
      {
        q: "What is 'JSON' (JavaScript Object Notation)?",
        options: [
          { text: "A programming language for the web.", isCorrect: false, feedback: "Incorrect. JSON is a data format, not a language." },
          { text: "A lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate.", isCorrect: true, feedback: "Correct. JSON is the most common format for exchanging data between a server and a web application." },
          { text: "A way to store data in a JavaScript file.", isCorrect: false, feedback: "Incorrect. While it looks like JS objects, it's a standalone format." },
          { text: "A method for encrypting data in JavaScript.", isCorrect: false, feedback: "Incorrect. This is 'Web Crypto API'." }
        ]
      },
      {
        q: "What is 'BSON' (Binary JSON)?",
        options: [
          { text: "A way to store JSON data in a binary format.", isCorrect: true, feedback: "Correct. BSON is used by MongoDB to store data efficiently and support more data types than standard JSON." },
          { text: "A type of JSON that is only used by robots.", isCorrect: false, feedback: "Incorrect. This is a literal joke." },
          { text: "A technique for compressing JSON data using binary code.", isCorrect: false, feedback: "Incorrect. BSON is a format, not just compression." },
          { text: "A method for encrypting JSON data using binary keys.", isCorrect: false, feedback: "Incorrect. This is not the definition of BSON." }
        ]
      },
      {
        q: "What is 'XML' (eXtensible Markup Language)?",
        options: [
          { text: "A programming language for creating websites.", isCorrect: false, feedback: "Incorrect. XML is a markup language for data, not for building sites like HTML." },
          { text: "A markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable.", isCorrect: true, feedback: "Correct. XML is often used for configuration files and web services (SOAP)." },
          { text: "A way to store data in an Excel spreadsheet.", isCorrect: false, feedback: "Incorrect. While Excel can use XML, they are not the same thing." },
          { text: "A method for encrypting data using tags.", isCorrect: false, feedback: "Incorrect. This is not the primary purpose of XML." }
        ]
      },
      {
        q: "What is a 'Data Dictionary'?",
        options: [
          { text: "A book that defines all the words used in a database.", isCorrect: false, feedback: "Incorrect. This is a literal interpretation." },
          { text: "A centralized repository of information about data such as meaning, relationships to other data, origin, usage, and format.", isCorrect: true, feedback: "Correct. A data dictionary helps developers and users understand the structure and meaning of the data in a database." },
          { text: "A tool for automatically translating data into different languages.", isCorrect: false, feedback: "Incorrect. This is 'Data Translation'." },
          { text: "A list of all the users who have access to the database.", isCorrect: false, feedback: "Incorrect. This is an 'Access Control List' (ACL)." }
        ]
      },
      {
        q: "What is 'Database Mirroring'?",
        options: [
          { text: "Putting a physical mirror in front of the server.", isCorrect: false, feedback: "Incorrect. This is a literal joke." },
          { text: "A solution for increasing database availability by maintaining a redundant copy of a database.", isCorrect: true, feedback: "Correct. Mirroring involves sending transaction logs from a principal server to a mirror server." },
          { text: "A technique for making the database look like another database.", isCorrect: false, feedback: "Incorrect. This is 'Database Masking'." },
          { text: "A method for deleting duplicate records in a database.", isCorrect: false, feedback: "Incorrect. This is 'Deduplication'." }
        ]
      },
      {
        q: "What is a 'Clustered Index'?",
        options: [
          { text: "An index that defines the physical order in which data is stored in a table.", isCorrect: true, feedback: "Correct. A table can have only one clustered index because the data rows themselves can be sorted in only one order." },
          { text: "An index that is clustered together with other indexes.", isCorrect: false, feedback: "Incorrect. This is not the definition." },
          { text: "A way to delete data from a database using a clustered index.", isCorrect: false, feedback: "Incorrect. This is not the definition." },
          { text: "A technique for making a database faster by clustering all data.", isCorrect: false, feedback: "Incorrect. This is too vague." }
        ]
      },
      {
        q: "What is a 'Non-Clustered Index'?",
        options: [
          { text: "An index that contains a sorted list of values from one or more columns, with pointers to the physical location of the data.", isCorrect: true, feedback: "Correct. A table can have multiple non-clustered indexes because they are stored separately from the data rows." },
          { text: "An index that is not clustered together with other indexes.", isCorrect: false, feedback: "Incorrect. This is not the definition." },
          { text: "A way to delete data from a database using a non-clustered index.", isCorrect: false, feedback: "Incorrect. This is not the definition." },
          { text: "A technique for making a database faster by not clustering all data.", isCorrect: false, feedback: "Incorrect. This is not the definition." }
        ]
      },
      {
        q: "What is 'Database Normal Form' (NF)?",
        options: [
          { text: "A set of criteria that a database schema must meet to be considered normalized to a certain level (e.g., 1NF, 2NF, 3NF, BCNF).", isCorrect: true, feedback: "Correct. Each higher normal form reduces redundancy and improves integrity further." },
          { text: "A form that you fill out to normalize a database.", isCorrect: false, feedback: "Incorrect. This is a literal interpretation." },
          { text: "A way to make a database follow a normal distribution.", isCorrect: false, feedback: "Incorrect. This is a statistical concept." },
          { text: "A method for organizing data in a database using a form.", isCorrect: false, feedback: "Incorrect. This is too vague." }
        ]
      },
      {
        q: "What is 'First Normal Form' (1NF)?",
        options: [
          { text: "A property of a relation in a relational database where the domain of each attribute contains only atomic values, and each attribute contains only a single value from that domain.", isCorrect: true, feedback: "Correct. 1NF eliminates repeating groups and ensures that each column contains only one value." },
          { text: "The first form you fill out when creating a database.", isCorrect: false, feedback: "Incorrect. This is a literal interpretation." },
          { text: "A way to make a database follow the first normal distribution.", isCorrect: false, feedback: "Incorrect. This is a statistical concept." },
          { text: "A method for organizing data in a database using the first form.", isCorrect: false, feedback: "Incorrect. This is too vague." }
        ]
      },
      {
        q: "What is 'Second Normal Form' (2NF)?",
        options: [
          { text: "A property of a relation that is in 1NF and every non-prime attribute is fully functionally dependent on the primary key.", isCorrect: true, feedback: "Correct. 2NF eliminates partial dependencies, ensuring that each non-key column depends on the *entire* primary key." },
          { text: "The second form you fill out when creating a database.", isCorrect: false, feedback: "Incorrect. This is a literal interpretation." },
          { text: "A way to make a database follow the second normal distribution.", isCorrect: false, feedback: "Incorrect. This is a statistical concept." },
          { text: "A method for organizing data in a database using the second form.", isCorrect: false, feedback: "Incorrect. This is too vague." }
        ]
      },
      {
        q: "What is 'Third Normal Form' (3NF)?",
        options: [
          { text: "A property of a relation that is in 2NF and every non-prime attribute is non-transitively dependent on every candidate key.", isCorrect: true, feedback: "Correct. 3NF eliminates transitive dependencies, ensuring that each non-key column depends only on the primary key, not on other non-key columns." },
          { text: "The third form you fill out when creating a database.", isCorrect: false, feedback: "Incorrect. This is a literal interpretation." },
          { text: "A way to make a database follow the third normal distribution.", isCorrect: false, feedback: "Incorrect. This is a statistical concept." },
          { text: "A method for organizing data in a database using the third form.", isCorrect: false, feedback: "Incorrect. This is too vague." }
        ]
      },
      {
        q: "What is 'Boyce-Codd Normal Form' (BCNF)?",
        options: [
          { text: "A slightly stronger version of 3NF used to address certain types of anomalies that 3NF doesn't handle.", isCorrect: true, feedback: "Correct. BCNF requires that for every functional dependency X -> Y, X must be a superkey." },
          { text: "A form created by Boyce and Codd for fun.", isCorrect: false, feedback: "Incorrect. This is a literal joke." },
          { text: "A way to make a database follow the Boyce-Codd distribution.", isCorrect: false, feedback: "Incorrect. This is not a statistical concept." },
          { text: "A method for organizing data in a database using the Boyce-Codd form.", isCorrect: false, feedback: "Incorrect. This is too vague." }
        ]
      },
      {
        q: "What is 'Database Replication Lag'?",
        options: [
          { text: "The delay between a change being made on the primary database and it appearing on the replica.", isCorrect: true, feedback: "Correct. Replication lag can be caused by network latency, high load on the replica, or long-running transactions." },
          { text: "A way to make the database replica run slower.", isCorrect: false, feedback: "Incorrect. This is not a desirable feature." },
          { text: "A tool for automatically measuring the speed of replication.", isCorrect: false, feedback: "Incorrect. Lag is the *result*, not the tool." },
          { text: "A method for organizing data in a database using lag.", isCorrect: false, feedback: "Incorrect. This is too vague." }
        ]
      },
      {
        q: "What is 'Multi-Master Replication'?",
        options: [
          { text: "A replication strategy where multiple database nodes can accept write operations.", isCorrect: true, feedback: "Correct. Multi-master replication provides high availability and low latency for writes but is complex to manage due to potential conflicts." },
          { text: "A way to have multiple masters for a single database.", isCorrect: false, feedback: "Incorrect. This is a literal interpretation." },
          { text: "A tool for automatically managing multiple master databases.", isCorrect: false, feedback: "Incorrect. It's a strategy, not a tool." },
          { text: "A method for organizing data in a database using multiple masters.", isCorrect: false, feedback: "Incorrect. This is too vague." }
        ]
      },
      {
        q: "What is the primary purpose of 'Database Normalization'?",
        options: [
          { text: "To reduce data redundancy and improve data integrity.", isCorrect: true, feedback: "Correct. Normalization organizes data to minimize duplication and ensure dependencies make sense." },
          { text: "To make queries run faster.", isCorrect: false, feedback: "Incorrect. Normalization often requires more joins, which can sometimes slow down read queries." },
          { text: "To encrypt sensitive data.", isCorrect: false, feedback: "Incorrect. Normalization is about structure, not encryption." },
          { text: "To compress the database file size.", isCorrect: false, feedback: "Incorrect. While it reduces redundancy, compression is a separate physical storage technique." }
        ]
      },
      {
        q: "What does 'ACID' stand for in database systems?",
        options: [
          { text: "Atomicity, Consistency, Isolation, Durability", isCorrect: true, feedback: "Correct. These four properties guarantee that database transactions are processed reliably." },
          { text: "Accuracy, Completeness, Integrity, Dependability", isCorrect: false, feedback: "Incorrect. These are good qualities, but not the ACID acronym." },
          { text: "Array, Character, Integer, Double", isCorrect: false, feedback: "Incorrect. These are data types." },
          { text: "Asynchronous, Concurrent, Isolated, Distributed", isCorrect: false, feedback: "Incorrect. These relate to system architecture, not transaction properties." }
        ]
      },
      {
        q: "In the context of ACID, what does 'Atomicity' mean?",
        options: [
          { text: "A transaction is treated as a single, indivisible logical unit of work; either all its operations are executed, or none are.", isCorrect: true, feedback: "Correct. Atomicity ensures 'all or nothing' execution." },
          { text: "Data is stored at the atomic level for maximum compression.", isCorrect: false, feedback: "Incorrect. Atomicity refers to transactions, not physical storage." },
          { text: "The database can handle atomic operations very quickly.", isCorrect: false, feedback: "Incorrect. It's about transaction completeness, not speed." },
          { text: "Transactions are isolated from each other.", isCorrect: false, feedback: "Incorrect. That describes 'Isolation'." }
        ]
      },
      {
        q: "In the context of ACID, what does 'Consistency' mean?",
        options: [
          { text: "A transaction must transition the database from one valid state to another, maintaining all defined rules and constraints.", isCorrect: true, feedback: "Correct. Consistency ensures data integrity rules are never violated." },
          { text: "The database always responds with the same data.", isCorrect: false, feedback: "Incorrect. Data changes over time; consistency refers to validity." },
          { text: "All nodes in a distributed database have the exact same data at all times.", isCorrect: false, feedback: "Incorrect. That's strong consistency in distributed systems, but ACID consistency is about constraints." },
          { text: "Transactions are executed in a consistent order.", isCorrect: false, feedback: "Incorrect. Execution order is related to Isolation and concurrency control." }
        ]
      },
      {
        q: "In the context of ACID, what does 'Isolation' mean?",
        options: [
          { text: "Concurrent execution of transactions leaves the database in the same state that would have been obtained if the transactions were executed sequentially.", isCorrect: true, feedback: "Correct. Isolation prevents concurrent transactions from interfering with each other." },
          { text: "The database is isolated from the internet for security.", isCorrect: false, feedback: "Incorrect. Isolation refers to transaction concurrency, not network security." },
          { text: "Each table is isolated in its own file.", isCorrect: false, feedback: "Incorrect. It's a logical transaction property, not physical storage." },
          { text: "Transactions are isolated from hardware failures.", isCorrect: false, feedback: "Incorrect. That's closer to 'Durability'." }
        ]
      },
      {
        q: "In the context of ACID, what does 'Durability' mean?",
        options: [
          { text: "Once a transaction has been committed, it will remain committed even in the case of a system failure.", isCorrect: true, feedback: "Correct. Durability guarantees that completed transactions survive crashes." },
          { text: "The database hardware is durable and long-lasting.", isCorrect: false, feedback: "Incorrect. It refers to data persistence, not hardware lifespan." },
          { text: "Transactions can run for a very long duration.", isCorrect: false, feedback: "Incorrect. Durability is about permanence after completion." },
          { text: "The database can handle a durable workload.", isCorrect: false, feedback: "Incorrect. This is a performance characteristic." }
        ]
      },
      {
        q: "What is the 'CAP Theorem'?",
        options: [
          { text: "It states that a distributed data store can simultaneously provide at most two out of three guarantees: Consistency, Availability, and Partition tolerance.", isCorrect: true, feedback: "Correct. The CAP theorem highlights the fundamental trade-offs in distributed systems." },
          { text: "A theorem for calculating the maximum capacity of a database.", isCorrect: false, feedback: "Incorrect. CAP stands for Consistency, Availability, Partition tolerance." },
          { text: "A rule that every database must have a CAP (Central Access Point).", isCorrect: false, feedback: "Incorrect. This is a fabricated concept." },
          { text: "A theorem proving that relational databases are superior to NoSQL.", isCorrect: false, feedback: "Incorrect. CAP applies to all distributed data stores." }
        ]
      },
      {
        q: "In the CAP Theorem, what does 'Partition Tolerance' mean?",
        options: [
          { text: "The system continues to operate despite an arbitrary number of messages being dropped (or delayed) by the network between nodes.", isCorrect: true, feedback: "Correct. Partition tolerance means the system survives network failures." },
          { text: "The database can be partitioned into smaller tables.", isCorrect: false, feedback: "Incorrect. This describes table partitioning, not network partition tolerance." },
          { text: "The system tolerates users partitioning data incorrectly.", isCorrect: false, feedback: "Incorrect. It refers to network partitions." },
          { text: "The database can run on multiple hard drive partitions.", isCorrect: false, feedback: "Incorrect. It's a network concept, not a disk concept." }
        ]
      },
      {
        q: "What is 'BASE' in the context of NoSQL databases?",
        options: [
          { text: "Basically Available, Soft state, Eventual consistency.", isCorrect: true, feedback: "Correct. BASE is an alternative to ACID, prioritizing availability over immediate consistency." },
          { text: "Basic Access to Secure Environments.", isCorrect: false, feedback: "Incorrect. This is a fabricated acronym." },
          { text: "Binary Array Storage Engine.", isCorrect: false, feedback: "Incorrect. This sounds like a storage mechanism." },
          { text: "Backup And Security Engine.", isCorrect: false, feedback: "Incorrect. This is a fabricated acronym." }
        ]
      },
      {
        q: "What is a 'Primary Key'?",
        options: [
          { text: "A specific choice of a minimal set of attributes (columns) that uniquely specify a tuple (row) in a relation (table).", isCorrect: true, feedback: "Correct. The primary key guarantees uniqueness for every row." },
          { text: "The first key you create in a database.", isCorrect: false, feedback: "Incorrect. 'Primary' refers to its role in identification, not creation order." },
          { text: "A key used to encrypt the primary table.", isCorrect: false, feedback: "Incorrect. It's for identification, not encryption." },
          { text: "The most important column in a table.", isCorrect: false, feedback: "Incorrect. While important, its specific function is unique identification." }
        ]
      },
      {
        q: "What is a 'Foreign Key'?",
        options: [
          { text: "A set of attributes in a table that refers to the primary key of another table, establishing a link between the data in the two tables.", isCorrect: true, feedback: "Correct. Foreign keys enforce referential integrity." },
          { text: "A key used by foreign users to access the database.", isCorrect: false, feedback: "Incorrect. It's a relational concept, not an access control concept." },
          { text: "A key that is not native to the database system.", isCorrect: false, feedback: "Incorrect. It's a standard database feature." },
          { text: "A key used to connect to external APIs.", isCorrect: false, feedback: "Incorrect. It connects tables within a relational database." }
        ]
      },
      {
        q: "What is an 'Index' in a database?",
        options: [
          { text: "A data structure that improves the speed of data retrieval operations on a database table at the cost of additional writes and storage space.", isCorrect: true, feedback: "Correct. Indexes work like a book's index, allowing fast lookups without scanning the whole table." },
          { text: "A list of all tables in the database.", isCorrect: false, feedback: "Incorrect. That's a catalog or schema definition." },
          { text: "A unique identifier for a row.", isCorrect: false, feedback: "Incorrect. That's a primary key (which usually has an index, but they are distinct concepts)." },
          { text: "A backup of the database.", isCorrect: false, feedback: "Incorrect. Indexes speed up reads, they don't back up data." }
        ]
      },
      {
        q: "What is a 'B-Tree' (Balanced Tree) index?",
        options: [
          { text: "A self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time.", isCorrect: true, feedback: "Correct. B-Trees are the most common default index type in relational databases." },
          { text: "A tree structure used only for binary data.", isCorrect: false, feedback: "Incorrect. B-Trees handle various data types." },
          { text: "A backup tree structure.", isCorrect: false, feedback: "Incorrect. It's an indexing structure." },
          { text: "A tree that only has two branches per node.", isCorrect: false, feedback: "Incorrect. That's a binary tree. B-Trees can have many branches per node." }
        ]
      },
      {
        q: "What is a 'Hash Index'?",
        options: [
          { text: "An index that uses a hash function to map keys to specific locations, providing very fast exact-match lookups but poor performance for range queries.", isCorrect: true, feedback: "Correct. Hash indexes are O(1) for equality checks but useless for 'greater than' or 'less than' queries." },
          { text: "An index that stores hashtags.", isCorrect: false, feedback: "Incorrect. It uses hash functions, not social media hashtags." },
          { text: "An index used for encrypting passwords.", isCorrect: false, feedback: "Incorrect. While hashing is used for passwords, a hash index is for data retrieval." },
          { text: "An index that is completely random.", isCorrect: false, feedback: "Incorrect. The hash function is deterministic." }
        ]
      },
      {
        q: "What is a 'View' in SQL?",
        options: [
          { text: "A virtual table based on the result-set of an SQL statement.", isCorrect: true, feedback: "Correct. Views simplify complex queries and can restrict access to specific rows or columns." },
          { text: "A graphical representation of the database schema.", isCorrect: false, feedback: "Incorrect. That's an ER diagram." },
          { text: "A tool for viewing database logs.", isCorrect: false, feedback: "Incorrect. Views are queryable virtual tables." },
          { text: "A specific user interface for the database.", isCorrect: false, feedback: "Incorrect. Views exist at the database level, independent of the UI." }
        ]
      },
      {
        q: "What is a 'Materialized View'?",
        options: [
          { text: "A database object that contains the results of a query, physically stored on disk, and updated periodically.", isCorrect: true, feedback: "Correct. Unlike standard views, materialized views store data, offering faster read performance for complex aggregations at the cost of storage and update overhead." },
          { text: "A view that is printed on paper.", isCorrect: false, feedback: "Incorrect. It refers to physical storage on disk." },
          { text: "A view that can only contain material data types.", isCorrect: false, feedback: "Incorrect. It can contain any data type." },
          { text: "A view that is automatically generated by the ORM.", isCorrect: false, feedback: "Incorrect. Materialized views are created explicitly in the database." }
        ]
      },
      {
        q: "What is a 'Transaction' in a database?",
        options: [
          { text: "A sequence of one or more SQL operations treated as a single logical unit of work.", isCorrect: true, feedback: "Correct. Transactions ensure that complex operations succeed or fail completely, maintaining data integrity." },
          { text: "The process of buying a database license.", isCorrect: false, feedback: "Incorrect. It's a technical database operation." },
          { text: "A single SELECT query.", isCorrect: false, feedback: "Incorrect. While a SELECT can be part of a transaction, a transaction usually implies modifications (INSERT/UPDATE/DELETE)." },
          { text: "The transfer of data between two databases.", isCorrect: false, feedback: "Incorrect. That's data migration or replication." }
        ]
      },
      {
        q: "What does the 'COMMIT' command do?",
        options: [
          { text: "It permanently saves all changes made during the current transaction.", isCorrect: true, feedback: "Correct. COMMIT makes the transaction's modifications visible to other users and durable." },
          { text: "It starts a new transaction.", isCorrect: false, feedback: "Incorrect. BEGIN or START TRANSACTION does that." },
          { text: "It undoes all changes made during the current transaction.", isCorrect: false, feedback: "Incorrect. ROLLBACK does that." },
          { text: "It commits the database schema to memory.", isCorrect: false, feedback: "Incorrect. It applies to data modifications." }
        ]
      },
      {
        q: "What does the 'ROLLBACK' command do?",
        options: [
          { text: "It undoes all changes made during the current transaction, restoring the database to its state before the transaction began.", isCorrect: true, feedback: "Correct. ROLLBACK is used when an error occurs or a business rule is violated during a transaction." },
          { text: "It permanently saves all changes.", isCorrect: false, feedback: "Incorrect. COMMIT does that." },
          { text: "It rolls the database back to yesterday's backup.", isCorrect: false, feedback: "Incorrect. It only affects the current, uncommitted transaction." },
          { text: "It restarts the database server.", isCorrect: false, feedback: "Incorrect. It's a transaction control command." }
        ]
      },
      {
        q: "What is 'Database Sharding'?",
        options: [
          { text: "A type of horizontal partitioning that splits a large database into smaller, faster, more easily managed parts called shards.", isCorrect: true, feedback: "Correct. Sharding distributes data across multiple servers to handle massive scale." },
          { text: "A technique for breaking database security.", isCorrect: false, feedback: "Incorrect. It's a scaling technique." },
          { text: "The process of deleting old data.", isCorrect: false, feedback: "Incorrect. That's archiving or purging." },
          { text: "A method for encrypting data fragments.", isCorrect: false, feedback: "Incorrect. Sharding is about distribution, not encryption." }
        ]
      }
    ]
  }
};