// Find sum of al  nos at odd indices

const numList = [2, 5, 8, 7, 9, 12];

const output = numList.reduce((acc,curr,i) => {
    acc = i % 2 !== 0 ? acc + curr : acc
    return acc
}, 0)

console.log(output)