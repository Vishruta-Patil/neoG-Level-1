// Write a program that takes two strings and copies smaller string into bigger string

let str1 = "Vishruta";
let str2 = "Patil";

const concatHandler = (str1, str2) => {
  if (str2.length > str1.length) {
    return str2.concat(str1);
  } else {
    return str1.concat(str2);
  }
};

console.log(concatHandler(str1,str2));