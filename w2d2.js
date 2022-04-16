// Second Highest Value
// Given an array numbers in your function, return econd highest value in the array.
//  arr =[-1,2,3,-3,4,5,6,2]
function secondBest(arr){
    let highest = arr[0];
    let secondHighest = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > highest) {
            secondHighest = highest;
            highest = arr[i];
            console.log(highest)
        }
        else if (arr[i]< highest && arr[i]> secondHighest){
            secondHighest = arr[i];
        }
    }
    return secondHighest;
}

var solution = secondBest([-5,-2,4,8,2])
console.log(solution)