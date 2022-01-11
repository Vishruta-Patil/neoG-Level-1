// var customer = {
//     name: "Bhaalo"
//   };
//   var card = {
//     amount: 20,
//     product: "Aaalo",
//     unitprice: 50
//   };
//   var message = "Hello " + customer.name + " wants to buy " + card.amount + " " + card.product + " for price of " + card.unitprice + " per piece"


var customer = {
  name: "Bhaalo",
};

var card = {
  amount: 20,
  product: "Aaalo",
  unitprice: 50,
};

var {name} = customer;
var {amount,product,unitprice} = card;

var message = `Hello ${name} wants to buy ${amount} ${product} for price of ${unitprice} per piece`
console.log(message)