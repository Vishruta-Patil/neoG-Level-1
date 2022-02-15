const input = [
    ["a", "b", "c"],
    ["c", "d", "e"],
    ["e", "d", "f"],
  ];
  
  // Your output should be: {a: 1, b: 1, c: 2, d: 2, e: 2, f: 1}
  
  const list = [...input[0], ...input[1], ...input[2]];
  
  const output = list.reduce((acc, curr) => {
      if(acc[curr]) {
          acc[curr] += 1;
      } else {
          acc[curr] = 1;
      }
      return acc;
  }, {});
  
  console.log(output)
  