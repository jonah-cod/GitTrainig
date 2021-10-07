 const readline = require("readline");

 function grading(score) {
     let grade;
     if (score > 25 && score <= 30) grade = 'A';
     else if (score > 20 && score <= 25) grade = 'B';
     else if (score > 15 && score <= 20) grade = 'C';
     else if (score > 10 && score <= 15) grade = 'D';
     else if (score > 5 && score <= 10) grade = 'E';
     else if (score > 0 && score <= 5) grade = 'F';
     else 'invalid';


     return grade;
 }

 const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdin,
 });

 rl.question("Enter a score", (answer) => {
     let score = answer;
     console.log(grading(score));
 })