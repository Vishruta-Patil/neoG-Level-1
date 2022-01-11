const noOfWords = (str) => str.split(' ').filter(n=>n!='').length;
//  const noOfWords = (str) => str.match(/(\w+)/g).length;
 
 console.log(noOfWords("We are neoGrammers"))