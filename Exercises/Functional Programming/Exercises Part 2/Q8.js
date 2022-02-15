// Given an array. Convert it in to an object with key as the index of each element and value as the element itself.

const arr = ["You", "all", "are", "rockstars"];

// Your output should be:
// {'0': "You", '1': "all", '2': "are", '3': "rockstars"}

const output = arr.reduce((acc, curr, i) => {
  acc[i] = curr;
  return acc;
}, {});

const output1 = arr.reduce((acc, curr, index) => 
    ({...acc,[index] : curr}),
{})

console.log(output)
console.log(output1);
