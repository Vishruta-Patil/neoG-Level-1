const inventory = [
    {name: 'fans', quantity: 3},
    {name: 'chimneys', quantity: 0},
    {name: 'bulbs', quantity: 5},
    {name: 'stove', quantity: 1}    
  ];


// Question:
// a. Get all the items in an array whose quantity is less than 2.
// b. Get the total quantity of items present in the inventory.
// c. Find the object which contains the item whose quantity is zero.

const quantityLessThanTwo = inventory.filter(i => i.quantity < 2)
// console.log(quantityLessThanTwo)

const totalQuantity = inventory.reduce((acc, curr) => acc+curr.quantity,0)
console.log(totalQuantity)

const zeroQuantity = inventory.filter(i => i.quantity === 0)
console.log(zeroQuantity)