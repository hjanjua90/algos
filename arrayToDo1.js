// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.
// goal is to add value to the beginning of an array.
// approach this by having temperorary varible holding the value
// two temp variables needed one for the first value and second for the other value.
// function pushToFront (arr,val){
//     var temp1 = arr[0], temp2 = arr[1];
//     for (var i = 0; i< arr.length && temp1 != undefined; i++){
//         arr[i+1] = temp1;
//         temp1 = temp2;
//         temp2 = arr[i+2];
//     }
//     arr[0] = val;
// }
//  asserts array at index 0, starts tge array
// var myArr = [2,4,8,6,10];
// pushToFront(myArr, 12)
// console.log(myArr);
// second way to push to the front
// function pushToFrontV2(arr, val) {
//     // Loop backwards - moving values to the right
//     for (var i = arr.length - 1; i >= 0; i--) {
//         arr[i+1] = arr[i];
//     }
//     arr[0] = val; // Put value in at start of array
// }
// var myArr = [2,4,8,6,10];
// pushToFront(myArr, 12)
// console.log(myArr);

// Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

// function popFront(arr, val){
//     var newVal = arr[0]
//     for (var i = 1; i< arr.length; i++){
//         arr[i-1] = arr[i]
//     }
//     // pop removes the last value,
//     arr.pop()
//     return newVal;

// }
// var test1 = [2,3,4,5,6]
// var result1 = popFront(test1);
// console.log(result1);
// console.log(test1)


// Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
// move values to the rt and stop at the index where the new value is inserted.
// Looping backwards allows to shift the values to the right.


// function insertAt(arr,value, index){
    
//     for (var i =arr.length -1; i> index; i--){
//     // add
//     arr[i+1] = arr[i];
//     }

//     arr[index] = value;

// }
// var test1 = [2,3,4,5,6]
// insertAt(test1,2,4);
// console.log(test1)


// Remove At (Bonus Challenge)
// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).

function removeAt(arr,index){
    index.Math.floor(index);
    if(index>= arr.length || index < 0){
        return null;
    }
    var returnValue = arr[index];
    for (var i = index +1; i< arr.length; i++){
        arr[i-1] = arr[i];
    }
    arr.pop();

    return returnValue;

}
var newArr1 =[2,4,6,8,10,12,14,16,18,20];
var result1 = removeAt(newArr1,2);
console.log(result1);

