// Remove Blanks
// Question 1
// Create a function that, given a string, returns all of that string’s contents, but without blanks. No built-in functions!
// If given the string " Ha  ppy S t. Patrick 's D a y! ", return "HappySt.Patrick'sDay!".


const removeSpaces = (str)=>{
    let newString = "";
    for(let i = 0; i<str.length; i++){
        if(str[i] !==" "){
            newString += str[i];
        }
    }
    console.log(newString);
    return newString;
}
removeSpaces("j ava s cri pt");

// Question 2
// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string's digits. Given "0s13y5w7h9a2t4?6!870", the function should return the number 1357924680.


