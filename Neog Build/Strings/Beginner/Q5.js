// Write a program to delete all vowels from a string. Assume string is not more than 80 characters long

let givenStr = "My name is Vishruta Patil";

const removeVowel = (str) => {
  str = str.split("");

  let res = "";
  for (var i = 0; i < str.length; i++) {
    if (
      str[i] !== "a" && str[i] !== "e" && str[i] !== "i" && str[i] !== "o" && str[i] !== "u"
    )
      res = res + str[i];
  }
  return res;
};

console.log(removeVowel(givenStr));


// Approach 2

const removeVowel1 = str => {
str = str.split('')
for(var i=0;i<str.length;i++) {
    if((str[i] === 'a') || (str[i] === 'e') || (str[i] === 'i') || (str[i] === 'o') || (str[i] === 'u')) {
        str[i] = ""
    }
    else {
        str[i]
    }
}

return str.join('');
}

console.log(removeVowel1(givenStr))
