// Question 1:
// Non repeating character - You are given a string consisting of only lower case and upper-case English Alphabets 
// and integers 0 to 9. Write a function that will take this string as Input and return the index of the first character 
// that is non-repeating.

// Brute force
// T=O(n^2)
// S=0(1)
// function findNonRepeatingCharacter(string){
//     // input string = 'abcdbad'
//     let repeat;
//     for(let i=0; i<string.length;i++){
//         repeat = false;
//         for(let j=0;j<string.length;j++){
//             if (string[i] === string[j] && i!== j ){
//                 repeat = true;

//             }
//         }
//         if (repeat === false){
//             return i;
//         }
//     }
//     return null;
// }
// a= 'AABcB'
// console.log(findNonRepeatingCharacter(a))

// Method 2 Using HashTable
// T = O(n);
// S = O(1);

// function findNonRepeatingCharacter(string){
//     const hashtable = {};
//     for ( let i=0;i<string.length;i++){
//         if(string[i] in hashtable){
//             hashtable[string[i]]++;
//         }else {
//             hashtable[string[i]]=1;
//         }
//     }
//     for (let i=0;i<string.length;i++){
//         if(hashtable[string[i]] === 1){
//             return i;
//         }
//     }return null;
// }
// // 'abbd'{a:1, b:2, d:1}
// a='1a2a1bbda'
// console.log(findNonRepeatingCharacter(a))


// Question 2:Palindrome-You are given a string. 
// Write a function to check whether the string is a palindrome or not.

// method 1
// T=O(n^2)
// S=O(n)

// function isPalidromeCheck(string){
//     let newStringToCompare = '';
//     for(let i = string.length-1;i>=0; i--){
//         newStringToCompare+=string[i];
//     }
//     if(newStringToCompare === string)return true;
//     else return false; 
    
// }
// a = 'aafbbaa';
// console.log(isPalidromeCheck(a));



// method 2
// T=O(n)
// S=O(n)
// function isPalidromeCheck(string){
//     let newStringToCompare = [];
//     for(let i = string.length-1;i>=0; i--){
//         newStringToCompare.push(string[i]);
//     }
//     if(newStringToCompare.join('') === string)return true;
//     else return false; 
    
// }

// a = 'aabbaa';
// console.log(isPalidromeCheck(a));


// method 3 BEST SOLUTION
// T= O(n)
// S=O(1)

// function isPalidromeCheck(string){
//     let i=0;
//     let j= string.length-1
//     while(i<=j){
//         if (string[i] !== string[j]) return false;
//         else {
//             i++;
//             j--;
//         }
//     }
//     return true; 
// }

// a = 'aca';
// console.log(isPalidromeCheck(a));


// Question 3:
// Longest Unique char Substring - Given a string s, find the length of the longest substring without repeating characters.
const maxLength = function(string){
    let max = 0;
    let start=0;
    // hash table
    const seen ={};
    for (let i=0; i<string.length; i++){
        const char = string[i];
        if (char in seen){
            start = Math.max(start, seen[char]+1);
        }
        max = Math.max(max, i-start+1);
        // make an entry to hash table if char is not there
        seen[char] =i;
    }
    return max;
}
a ='abcdb'
console.log(maxLength(a))






// Question 4:
// Group Anagrams - Given an array of strings consisting of lower case English letters, group the anagrams together.
//  You can return the answer in any order. An Anagram is a word or phrase formed by rearranging the letters of a different 
// word or phrase, using all the original letters exactly once.
