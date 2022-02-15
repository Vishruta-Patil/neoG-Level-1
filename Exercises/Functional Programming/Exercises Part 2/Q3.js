// Given an array. Write a function that takes in the given array and prints only the numbers which are less than 8 and also an even number.


const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

// Your output should be: [2, 6, 8, 4]

console.log(arr.filter(i => i<=8 && i%2===0))