// Find number of strings with similar number of characters

const str = ["mango", "orange", "apple", "papaya"]

const output = str.reduce((acc, curr) => {
    if(acc[curr.length]) {
        acc[curr.length] += 1;
    }
    else {
        acc[curr.length] = 1
    }

    return acc
},{})

console.log(output)