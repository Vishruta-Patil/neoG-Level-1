// A program that counts number of vowels and consonants in a String

let str = "Vishruta"

const vowelConsonantCounter = (str) => {
    str.split('')

    let vowelCounter = 0, consnantCounter = 0;

    for(var i=0;i<str.length;i++) {
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            vowelCounter++;
        }
        else {
            consnantCounter++ 
        }
    }
    return [vowelCounter, consnantCounter]
} 

console.log(`Vowels: ${vowelConsonantCounter(str)[0]} \nConsonants: ${vowelConsonantCounter(str)[1]}`)