// Hash Tables Data Structure 


// Question1
// Two Sum - You are given an array of Integers and another integer targetValue. Write a function that will take these inputs and return the indices of the 2 integers in the array that add up targetValue.


// Brute Force Method

// given array [2,7,3,-1,4] targetValue(tv) = 2
// function findIndicesSum(array,targetValue){
//     for(let i=0;i<array.length-1; i++){
//         for(let j=i+1; j<array.length; j++){
//             if(targetValue === array[i]+array[j]){
//                 return [i,j];
//             }
//         }
//     }
//     return [];
// }


// array = [1,2,3];
// targetValue=4;

// console.log(findIndicesSum(array, targetValue))
// extra notes
// [1,2,3,4,5] i=1, j=2,3,4,5
// i=2 j=3,4,5


// Optimal way to solve Two Sum
// sample input [2,7,3,-1,4] targetValue = 2
// using hashtable specifically lookup operation (this is constant time operation).
// As we transverse the array, we store the data in a hash table. Since data is stored in the hashtable there is no need to traverse the array, we will just need to access the hashTable


// [1,2,3,4] tv = 7
// nV = 6
// 1:0, 2:1, 3:2
// function findIndicesSumGiven(array,targetValue){
//     const hashTable={};
//     let neededValue;
//     for (let i = 0;i<array.length;i++){
//         neededValue = targetValue - array[i];
//         if (neededValue in hashTable){
//             return [i,hashTable[neededValue]]
//         }else{
//             hashTable[array[i]]= i;
//         }
//     }
//     return[];
// }
// array = [1,-2,3,4,5]
// targetValue= 5;

// console.log(findIndicesSumGiven(array, targetValue))






// Question2
//  Isomorphic Strings - Given two strings s and t, determine if they are isomorphic. Two strings s and t are isomorphic if the characters in s can be replaced to get t. All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself. s and t consist of any valid ascii character.


const checkIsomorphic = function(s,t){
    if (s.length !== t.length)
        return false;
    
    const sHash = {};
    const tHash = {};

    for (let i =0; i<s.length;i++){
        // find the character at the ith index
        let charS =s[i];
        let charT = t[i];
        // mapping in the sHash
        if (!sHash[charS]) sHash[charS] = charT;
        // mapping in the tHash
        if(!tHash[charT]) tHash[charT] = charS;
        // checking if the entries are isomorphic
        if (sHash[charS] !== charT || tHash[charT]!==charS)
            return false;
    }
        return true
}   

console.log(checkIsomorphic('aad', 'bbd'))