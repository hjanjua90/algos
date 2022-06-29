// Question 1:Binary Search - 
// Given an array of integers which is sorted in ascending order, and a target integer, 
// write a function to search for whether the target integer is there in the given array.
// If it is there then return its index. Otherwise, return -1. 
// You must write an algorithm with O(log n) runtime complexity.


// iteratively 
// T = O(log(n))
// S = O(1)
// const binarySearchIterative = function (nums, target){
//     let left =0;
//     let right = nums.length-1;
//     let middle;
//     while (left<=right){
//         middle = Math.floor((left+right)/2);
//         if (target === nums[middle]) return middle;
//         if (target<nums[middle]) right = middle -1;
//         else left = middle +1;
//     }
//     return -1;
// }


// console.log(binarySearchIterative([1,2,3,4,5],10))


// Recursively
// T = O(log(n))
// S = O(log(n))

// const binarySearchRecursive = function (nums, target){
//     const helper = function(nums, target, left, right){
//         if (left > right) return -1;
//         const middle = Math.floor((left+right)/2);
//         if (target === nums[middle]) return middle;
//         else if (target<nums[middle]) return helper(nums, target, left, middle-1);
//         else return helper(nums, target, middle +1, right);
//     }
//     return helper(nums, target, 0, nums.length-1);
// }

// console.log(binarySearchRecursive([1,2,3,4,5],3))




// Question 2:Search in Rotated Sorted array- You are given an integer array nums sorted in ascending order (with distinct values). 
// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting 
// array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).  For example, [0,1,2,4,5,6,7] might be rotated 
// at pivot index 3 and become [4,5,6,7,0,1,2]. Given an integer target, return the index of target if it is in the array, else return -1. 
// You must write an algorithm with O(log n) runtime complexity.