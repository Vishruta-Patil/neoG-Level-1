// Exercises from Akansha maam

// Given an array. Write a function to change all even numbers in an array to odd numbers by adding 1 to it.

const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

// Your output should be:
// [1, 3, 3, 59, 5, 7, 25, 9, 15, 5]


const output = arr.map(i => i % 2 === 0 ? i+1 : i)
console.log(output)