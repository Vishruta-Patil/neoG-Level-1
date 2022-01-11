const replace = (arr, ele, reqEle) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
      arr[i] = reqEle;
    }
  }
  return arr;
};

console.log(replace([1, 5, 3, 5, 6, 8], 5, 10))
