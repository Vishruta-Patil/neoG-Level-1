// Find numbers divisible by 10

const numList = [2, 5, 80, 7, 90, 12];

const output = numList.filter((i) => i % 10 === 0, 0);

// OR
const output1 = numList.reduce((acc,curr) => {
    curr % 10 === 0 ? acc.push(curr) : acc
    return acc
}, [])

console.log(output);
console.log(output1);
