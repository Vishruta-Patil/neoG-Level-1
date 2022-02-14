// practice of map, filter and reduce


// Simple Q
const arr = [3, 5, 21, 8, 9];

const doubleResult = arr.map((item) => item * 2);
console.log(doubleResult)

const lessThanSix = arr.filter((x) => x < 6);
console.log(lessThanSix)

const max = arr.reduce((acc, curr) => {
  acc = acc > curr ? acc : curr;
  return acc;
}, 0);
console.log(max)




// Tricky Q
const users = [
  { name: "Vishruta", surname: "Patil", age: 20 },
  { name: "Aniruddha", surname: "Joshi", age: 33 },
  { name: "Anuhya", surname: "Pednekar", age: 22 },
  { name: "shikha", surname: "yadav", age: 33 },
  { name: "Sahil", surname: "Paranjpae", age: 23 },
  { name: "Mohit", surname: "Sharma", age: 22 },
  { name: "Varad", surname: "Patil", age: 42 },
];

const conacatNameSurname = users.map((i) => i.name + " " + i.surname);
console.log(conacatNameSurname);
//  [
//   'Vishruta Patil',
//   'Aniruddha Joshi',
//   'Anuhya Pednekar',
//   'shikha yadav',
//   'Sahil Paranjpae',
//   'Mohit Sharma',
//   'Varad Patil'
// ]


const ageGraph = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] += 1;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});


console.log(ageGraph);
// { '20': 1, '22': 2, '23': 1, '33': 2, '42': 1 }



const firstNameWithAgeLessThirty = users.filter(i => i.age < 30 ).map(j => j.name)
console.log(firstNameWithAgeLessThirty);
// [ 'Vishruta', 'Anuhya', 'Sahil', 'Mohit' ]

const usingReduce = users.reduce((acc, curr)=> {
    curr.age < 30 && acc.push(curr.name) 
    return acc;
}, [])

console.log(usingReduce)
// [ 'Vishruta', 'Anuhya', 'Sahil', 'Mohit' ]