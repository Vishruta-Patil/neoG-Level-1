// Write a function that takes in a string and converts only the vowels to uppercase and all other characters to lowercase.

// If your input is: "neoG"
// Your output should be: "nEOg"

const vowels = ["a", "e", "i", "o", "u"];

const input = "neoG";
const str = inp.toLowerCase().split("");

const list = str.reduce((acc,i) => {
    if(i.includes("a") || i.includes("e") || i.includes("i") || i.includes("o") || i.includes("u") ) {
        acc.push(i.toUpperCase())
    } else {
        acc.push(i.toLowerCase())
    }
    return acc
}, [])

console.log(list.join(''))
