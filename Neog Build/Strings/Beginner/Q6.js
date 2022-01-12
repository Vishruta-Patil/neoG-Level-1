// Write a program to check whether the string is alphanumeric or not , eg:batman@45 contains digit 45

const alphaNumericHandler = (str) => {
    str.split('')
    for(var i=0;i<str.length;i++) {
        if(str[i].charCodeAt() >= 48 &&  str[i].charCodeAt() <=57) {  // ASCII value of nos 48-57
            return true;
        }
    }
return false;
}

console.log(alphaNumericHandler("batman@45"))
 
