// A program that reads three strings and prints the longest and smallest one

const str1 = prompt("Enter first string")
const str2 = prompt("Enter second string")
const str3 = prompt("Enter third string")

// let str1 = "cat", str2="bird", str3="animal"

const min = (str1.length < str2.length) && (str1.length < str3.length) ? str1 : (str2.length<str3.length) ? str2 : str3;
const max = (str1.length> str2.length && str1.length>str3.length) ? str1 : str2.length>str3.length ? str2 : str3

console.log("longest: " + max)
console.log("smallest: " + min)