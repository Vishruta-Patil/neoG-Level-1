utput = numList.reduce(
//   (acc, curr) => {
//     curr % 2 === 0 ? {even: acc.even + curr, odd: acc.odd} : {even: acc.even, odd: acc.odd + curr};
//     return acc;
//   },
//   { even: 0, odd: 0 }
// );