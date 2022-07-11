var romanToInt = function(s) {
    
    const numMap = new Map ()
    numMap.set('I', 1)
    numMap.set('V', 5)
    numMap.set('X', 10)
    numMap.set('L', 50)
    numMap.set('C', 100)
    numMap.set('D', 500)
    numMap.set('M', 1000)
    
    let num= 0;
    for (let i =0; i<s.length; i++){
        const currVal = numMap.get(s[i])
        if(i+1 < s.length && currVal < numMap.get(s[i+1])) num -= currVal
        else num += currVal
    }
    return num
    
};

console.log(num)