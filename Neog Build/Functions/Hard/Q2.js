const toSentenceCase = (str) => {
    str = str.split(' ')
    for (var i=0;i<str.length;i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
    }
    return str.join(' ')
}

console.log(toSentenceCase('we are neoGrammers'))
