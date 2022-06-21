// Question 1:
// Fibonacci - In the Fibonacci sequence, each subsequent term is obtained by adding the preceding 2 terms. 
// This is true for all the numbers except the first 2 numbers of the Fibonacci series as they do not have 2 preceding numbers.
// The first 2 terms in the Fibonacci series is 0 and 1. F(n) = F(n-1)+F(n-2) for n>1. 
// Write a function that finds F(n) given n where n is an integer greater than equal to 0. For the first term n = 0.

// method 1 
// time complexity => T = O(2^n)
// space complexity => S= O(n)
// function fibonacci(n){
//     // input value <=1 
//     if(n<=1) return n;
//     // input value greater than 1
//     else return fibonacci (n-1) + fibonacci (n-2);
// }
// // 0,1,1,2,3,5,8,13,21
// console.log(fibonacci(3))



//method2 Memoization = is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again
//(where we store things we compute and use them later on)
//time complexity => T = O(n)
// space complexity => S = O(n)
// function fibonacci(n){
//     // storing given values in hashtable(ht)
//     const ht = {0:0,1:1};
//     if(n in ht){
//         return ht[n];
//     }else{
//         ht[n]=fibonacci(n-1)+fibonacci(n-2);
//         return ht[n];
//     }
// }
// console.log(fibonacci(8))




//method3 Iteration
//time complexity => T = O(n)
// space complexity => S = O(1); because we are only storing 3 values curr, prev, next;

// function fibonacci(n){
//     if(n<=1) return n;
//     let counter =1;
//     let prev = 0;
//     let curr=1;
//     let next;
//     while(counter<n){
//         next = prev + curr;
//         prev = curr;
//         curr = next;
//         counter++;
//     }
//     return curr;
// }
// console.log(fibonacci(8))






// Question 2: 
// Power Sum - Let’s define a peculiar type of array in which each element is either an integer or another peculiar array. 
// Assume that a peculiar array is never empty. 
// Write a function that will take a peculiar array as its input and find the sum of its elements. 
// If an array is an element in the peculiar array you have to convert it to it’s equivalent value so that you can sum it with the other elements. 
// Equivalent value of an array is the sum of its elements raised to the number which represents how far nested it is. 
// For e.g. [2,3[4,1,2]] = 2+3+ (4+1+2)^2

// [1,2,[7,[3,4],2]] = 1 + 2 +( 7+(3+4)^3+2)^2

//time complexity => T = O(N) where n is total number of all elements in the main array and all sub arrays.
// space complexityy => S = O(d) where d is maximum depth -> num of recursive calls all at once. 

// function powerSum(array, power=1){
//     let sum = 0;
//     for(const element of array){
//         if(Array.isArray(element)){
//             sum += powerSum(element, power+1);
//         }else {
//             sum += element;
//         }
//     }

//     return Math.pow(sum, power);

// }
// array = [1,2,[4,1]]
// console.log(powerSum(array));



// Question 1:
//  Permutations - Given an array of distinct integers, return all the possible permutations. You can return the answer in any order.
function allPermutation(num){
    const permutation = [];
    function helper(nums,i){
        if(i === nums.length-1){
            permutation.push(nums.slice());
            return;
        }
        for(let j=i; j<nums.length; j++)
        // swap i,j
        [nums[i],nums[j]] =[nums[j],nums[i]];
        // recursive
        helper(nums, i+1);
        // swap i,j
        [nums[i],nums[j]] =[nums[j],nums[i]];
    }
    helper (num,0);
    return permutation;
}
console.log(allPermutation([1,2]))









// Question 2:
//  Power Set - Given an integer array of unique elements, return all possible subsets (the power set). 
// The solution set must not contain duplicate subsets. Return the solution in any order.


