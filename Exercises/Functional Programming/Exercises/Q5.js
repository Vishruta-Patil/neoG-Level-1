// Return an array of numbers where odd numbers are incremented by one and even numbers are decremented by one

const numList = [2, 5, 81, 7, 9, 12];

const output = numList.reduce((acc, curr) => {
  curr % 2 === 0 ? acc.push(curr - 1) : acc.push(curr + 1);
  return acc;
}, []);

const output1 = numList.map((i) => (i % 2 === 0 ? (i - 1) : (i + 1)));

console.log(output);
console.log(output1);
