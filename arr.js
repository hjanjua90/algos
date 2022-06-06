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








// finding all duplicate numbers, if no dupes are found return empty array.

// const arr = [1,1,2,3,4,5,6,7,8,6,6,7,7,10,10]

// const returnMultipleDupesArray = (arr) =>{
//     let observed = {};
//     let dupesArray = [];

//     for (let i = 0; i < arr.length; i++){
//         if (observed[arr[i]]){
//             if (observed [arr[i]] === 1){
//                 dupesArray.push(arr[i]);
//             }
//             observed[arr[i]] = observed[arr[i]] + 1;
//         }else {
//             observed[arr[i]] = 1
//         }
//     }
//     return dupesArray;
// }

// console.log(returnMultipleDupesArray(arr))












// removing all duplicates from an array of integers
// goal return array with out multiples

// const arr = [1,1,1,1];

// const removeDupes = (arr) => {
//     let result = [];
//     let previous = arr[0];
//     result [0] = previous;

//     for(let i = 0; i< arr.length; i++){
//         if(arr[i] != previous){
//             result.push(arr[i]);
//         }
//         previous = arr[i];
//     }
//     return result;
// }

// console.log(removeDupes(arr))











// Find all pairs in an array of integers whose sum is equal to a given number
// return matching pairs or empty arrays

let arr = [1,5,6,1,0,1];

const findSumPairs = (arr, value) => {
    let sumLookup = {};
    let output = [];

    for(let i=0; i < arr.length; i++){
        let targetVal = value - arr[i];

        if (sumLookup[targetVal]){
            output.push([arr[i], targetVal]);
        }
        sumLookup[arr[i]] = true;
    }
    return output;
}

console.log(findSumPairs(arr, 6))


