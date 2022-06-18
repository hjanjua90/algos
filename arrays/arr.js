// const reverse = function (nums,start,end){
//     while(start <end){
//         [nums[start],nums[end]] = [nums[end], nums[start]];
//         start++;
//         end--;
//     }
// }

// const rotate = function (nums,k) {
//     k=k%nums.length;
//     // nums.reverse();
//     reverse(nums, 0, nums.length-1);
//     // start =0 end= k-1
//     reverse(nums, 0, k-1);
//     reverse(nums,k, nums.length-1);
//     return nums;
// }


// rotate([1,2,3,4,5,6], 6)


// const reverse = function (nums,start,end){
//     while(start<end){
//         [nums[start],nums[end]] = [nums[end],nums[start]];
//         start++;
//         end--;
//     }
// }

// const rotate = function(nums,k){
//     k = k%nums.length; //k=102 ,length =5, 2 rotations
//     //nums.reverse();
//     reverse(nums,0,nums.length-1);
//     //start =0, end = k-1
//     reverse(nums,0,k-1);
//     //start = k, end = length-1
//     reverse(nums,k, nums.length-1);
//     return nums;
// }

// console.log(rotate([1,2,3],2));



// Question 2: Container with most Water - You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). 
// Find two lines that together with the x-axis form a container, such that the container contains the most water(depth is constant across containers). Return the area(that the 2 lines and the X axis make) 
// of container which can store the max amount of water. Notice that you may not slant the container.


// Brute Method
// const maxAreaBruteForce = function(array){
//     let area= 0;
//     for (let i=0;i < array.length - 1; i++){
//         for (let j =i+1;j<array.length; j++){
//             const height = Math.min(array[i],array[j]);
//             const width = (j-i);
//             area = Math.max(area, height*width);
//         }
// }
//     return area;
// }



// const maxArea = function(array){
//     let area = 0;
//     let i = 0;
//     let j = array.length-1;
//     while(i<j){
//         let height = Math.min(array[i], array[j]);
//         let newArea = height*(j-i);
//         area = Math.max(area, newArea);
//         if(array[i]<array[j]) i++;
//         else j--;
//     }return area;
// }
// console.log(maxArea([3,7,5,6,8,4]))


