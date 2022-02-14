// Return an array of objects with key as item and value as number of characters in the string


const str = ["mango", "orange", "apple", "papaya"]

const output = str.reduce((acc, curr) => {
    acc[curr] = curr.length
    return acc;
}, {})

console.log(output)