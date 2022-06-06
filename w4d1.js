/*
The Fibonacci numbers are the numbers in the following integer sequence.
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...

Write rFib(num). Recursively compute and return numth Fibonacci value. Treat first two
(num = 0, num = 1) Fibonacci vals as 0 and 1. 

Examples: rFib(2) = 1 (0+1); rFib(3) = 2 (1+1);
rFib(4) = 3 (1+2); rFib(5) = 5 (2+3). rFib(3.65) = rFib(3) = 2, rFib(-2) = rFib(0) = 0.
*/



// function rFib(num){
//     if (num<2){
//         return num
//     }

//     return (rFib(num-1)+ rFib(num-2))
// }

// const rFib = (num) =>{
//     return num < 2 ? num : rFib(num-1) + rFib(num-2);
// };



solution = rFib(4);
console.log(solution)