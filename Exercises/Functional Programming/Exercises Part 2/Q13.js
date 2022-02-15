// Write a function that takes in a string and converts all the characters to uppercase. (Hint: toUpperCase())

// If your input is: "neogrammer"
// Your output should be: "NEOGRAMMER"

// If your input is: "neoG"
// Your output should be: "NEOG"

const str = "neoG";
const strArray = str.split('')

const output = strArray.map(i => i.toUpperCase())

console.log(output.join(''))