// Write a function that takes a number. Then print a countdown from that number to 0. 
// At zero print "Bang Bang!" ← The important question is sometimes asked in FAANG 
// interviews as well.

const countDown = (num) =>
  setInterval(() => {
    while (num > 0) {
      console.log(num--);
      if (num === 0) {
        console.log(num, " Bang Bang");
      }
    }
  }, 1000);

countDown(5);

