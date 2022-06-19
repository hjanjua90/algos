// Question 1:
// Fibonacci - In the Fibonacci sequence, each subsequent term is obtained by adding the preceding 2 terms. 
// This is true for all the numbers except the first 2 numbers of the Fibonacci series as they do not have 2 preceding numbers.
// The first 2 terms in the Fibonacci series is 0 and 1. F(n) = F(n-1)+F(n-2) for n>1. 
// Write a function that finds F(n) given n where n is an integer greater than equal to 0. For the first term n = 0.

// method 1 
function fibonacci(n){
    // input value <=1 
    if(n<=1) return n;
    // input value greater than 1
    else return fibonacci (n-1) + fibonacci (n-2);
}
// 0,1,1,2,3,5,8,13,21
console.log(fibonacci(1))







// Question 2: 
// Power Sum - Let’s define a peculiar type of array in which each element is either an integer or another peculiar array. 
// Assume that a peculiar array is never empty. 
// Write a function that will take a peculiar array as its input and find the sum of its elements. 
// If an array is an element in the peculiar array you have to convert it to it’s equivalent value so that you can sum it with the other elements. 
// Equivalent value of an array is the sum of its elements raised to the number which represents how far nested it is. 
// For e.g. [2,3[4,1,2]] = 2+3+ (4+1+2)^2

// [1,2,[7,[3,4],2]] = 1 + 2 +( 7+(3+4)^3+2)^2








