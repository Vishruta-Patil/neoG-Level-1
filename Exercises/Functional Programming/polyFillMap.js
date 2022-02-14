const radius = [3, 1, 2, 4];

const area = (radius) => {
  return Math.PI * radius * radius;
};

const calculate = (arr, logic) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(logic(arr[i]));
  }
  return result;
};

// calculation using higher order function
console.log(calculate(radius, area));

// using map
console.log(radius.map(area));

Array.prototype.calculate2 = function (logic) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(logic(this[i]));
  }
  return result;
};

// calculation using same syntax as map & higher order function
console.log(radius.calculate2(area));
