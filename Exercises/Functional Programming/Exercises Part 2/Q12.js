// Write a function that accepts a number as input and inserts hyphens between every two even numbers.

// If your input is: 24345687

// Your output should be: 2-43456-87

const input = 24345687;
const strInput = input.toString().split("");

const output = strInput.map((item, index, strInput) =>
  item % 2 === 0 && strInput[index + 1] % 2 === 0 ? item + "-" : item
);

const output1 = strInput.reduce((acc, curr, index, arr) => {
  if (curr % 2 === 0 && arr[index + 1] % 2 === 0) {
    acc += curr + "-";
  } else {
    acc += curr;
  }

  return acc;
}, "");

const output2 = strInput.reduce((acc, curr, index, arr) => {
  return (acc +=
    curr % 2 === 0 && arr[index + 1] % 2 === 0 ? curr + "-" : curr);
}, "");

console.log(output.join(""));
console.log(output1);
console.log(output2);