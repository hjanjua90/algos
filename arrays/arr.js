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


const maxAreaBruteForce = function(array){
    let area= 0;
    for (let i=0;i < array.length - 1; i++){
        for (let j =i+1;j<array.length; j++){
            const height = Math.min(array[i],array[j]);
            const width = (j-i);
            area = Math.max(area, height*width);
        }
}
    return area;
}
console.log(maxAreaBruteForce([3,7,5,6,4]))