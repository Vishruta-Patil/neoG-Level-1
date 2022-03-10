// write function compose which can take any number of function s and return function
// which which will run the given functions in order  when call with an argument

// concepts used : 
// 1. curring
// 2. composition
// 3. reduce
// 4. rest parameter


// *********>Solution<*********
 
// const compose = (...func) => num => func.reduce((acc, curr) => curr(acc(num)))    //****done by me
const compose = (...func) => num => func.reduce((acc, curr) => curr(acc), num)

const increment = num => num + 1;
const square = num => num * num
const divide = num => num / 2

console.log(compose(increment, square, divide)(2))