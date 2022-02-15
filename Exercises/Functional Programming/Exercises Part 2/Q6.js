// Given an array. Write a function to find the product of all elements which are even.

const arr = [1, 2, 3, 7, 5, 6, 8, 9];

// Your output should be: 96

const output = arr.reduce((acc, curr) => {
    acc = curr % 2 === 0 ? curr * acc : acc
    return acc
}, 1)

console.log(output)