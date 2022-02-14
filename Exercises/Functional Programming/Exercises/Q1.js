// Find the sum of all odd nos

const numList = [2, 5, 8, 7, 9];

const output = numList.reduce((acc, curr) => {
 acc =  (curr % 2 !== 0) ? acc + curr : acc;
  return acc;
}, 0);

console.log(output);
