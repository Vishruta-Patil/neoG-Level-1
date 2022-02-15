// Flatten an array without using flat().

const input = [
  ["a", "b", "c"],
  ["c", "d", "e"],
  ["e", "d", "f"],
];

//   Your output should be: ['a', 'b', 'c', 'c', 'd', 'e', 'e', 'd', 'f']

console.log([...input[0], ...input[1], ...input[2]]);

const output = input.reduce(
  (acc, curr) => [...acc, ...curr],
  []
);

console.log(output)