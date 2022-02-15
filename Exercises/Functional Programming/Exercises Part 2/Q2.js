// Get the names in an array for only those who have a cycle.

const family = [
    {
      name    : 'Tanay',
      haveCycle : true
    },
    {
      name     : 'Akanksha',
      haveCycle : false
    },
    {
      name     : 'Tanvi',
      haveCycle : true
    },
      {
      name     : 'Kanak',
      haveCycle : false
    }
  ];
  
  
//   Your output should be: ['Tanay', 'Tanvi']

const output = family.filter(i => i.haveCycle).map(j => j.name)

const output1 = family.reduce((acc, curr) => {
    curr.haveCycle ? acc.push(curr.name): ""
    return acc
}, [])

console.log(output)
console.log(output1)