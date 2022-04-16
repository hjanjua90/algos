// Is it a Palindrome?

// Create a function that, given a string, will determine whether the string is a palindrome. Return a boolean.

function palindrome(str) {

    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log (str + "is not a palindrome")


// function isPalindrome(str)=>{

// }