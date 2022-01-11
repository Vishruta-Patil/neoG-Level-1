// const packIt = (...args) => console.log(args)
// packIt(1,2,3,5,5)

function packIt() {
  var args = Array.prototype.slice.call(arguments);
  console.log(args);
}

packIt(1, 2, 3, 5, 5);
