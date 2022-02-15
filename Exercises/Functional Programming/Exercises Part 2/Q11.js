// Given an array. Write a function to join all elements of the array with a hyphen in between them.

const arr = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];

// Your output should be:
// Violet-Indigo-Blue-Green-Yellow-Orange-Red


// Solution 1
console.log(arr.join("-"));


// Solution 2
const output = arr.reduce((acc, curr, i) => 
     i===0 ? acc + curr : acc + "-" + curr
, "");


// Solution 3
const output1 = arr.reduce((acc, curr, i) => 
    acc === "" ? acc + curr : acc + "-" + curr
, "");

console.log(output);
console.log(output1);
