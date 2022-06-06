// find the missing number in integer array of 1 to 100?


// let arr = [1,2,3,4,5,7,8,9,10];
// const findMissingNum = (arr) => {
//     for(var i = 0; i < arr.length - 1; i++) {
//         if(arr[i] + 1 != arr[i+1] ) {
//             return arr[i] + 1;
//     }
//     }
  
//     return false;
// }
// console.log(findMissingNum(arr));

// finding duplicate numbers in array 

// let arr = [1,2,2,3,4,5,6,7,8,9,10]
// const dupNum = (arr)=>{
//     const observerd= {};
//     for (let i = 0; i < arr.length; i++){
//         if(observerd[arr[i]]){
//             return arr[i]
//         }else{
//             observerd[arr[i]] = arr[i];
//         }
//     }
//     return false; 

// }
// console.log(dupNum(arr))


// finding the largest and smallest number in an unsorted array of integers

// let arr = [-2,3,4,6,8,10,0]

// const findMaxMin = (arr) =>{
//     let max = arr[0];
//     let min = arr[0];

//     for (let i =0; i<arr.length; i++){
//         if(arr[i]> max){
//             max= arr[i]
//         }else if (arr[i]<min){
//             min = arr[i]
//         }
//     }return{
//         "max": max,
//         "min": min
//     };
// }
// console.log(findMaxMin(arr))


// Return an array showing the cumulative sum at each index of an array of integers

// let arr = [1,3,5,7];

// const cummulativeSum = list =>{
//     let result = [list[0]];

//     for (let i = 1; i< list.length; i++){
//         result.push(list[i] + result[i-1]);
//     }
//     return result;
// }
// console.log(cummulativeSum(arr))


// finding all duplicate numbers 