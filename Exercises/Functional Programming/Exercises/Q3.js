// Find biggest number in the array

const numList = [2, 5, 81, 7, 9, 12];

const output = numList.reduce((acc,curr) => {
    acc = acc < curr ? curr : acc
    return acc
}, 0)

console.log(output)