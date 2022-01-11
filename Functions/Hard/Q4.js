const reverseCharactersOfWord = (str) => {
   str = str.split(' ')

   str.forEach((word, ind) => {
        str[ind] = word.split('').reverse().join('');
   })

   return str.join(' ')
};

console.log(reverseCharactersOfWord("we are neoGrammers"));
