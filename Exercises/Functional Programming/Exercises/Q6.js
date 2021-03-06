// Return an object with sum of all odd nos and even nos seperately

const numList = [2, 5, 81, 7, 9, 12];

const output = numList.reduce(
  (acc, curr) => {
    acc["even"] = curr % 2 === 0 ? curr + acc.even : acc.even;
    acc["odd"] = curr % 2 !== 0 ? curr + acc.odd : acc.odd;
    return acc;
  },
  { even: 0, odd: 0 }
);


console.log(output1);
