const encodeString= (str,ind) => {
    var ans = ''

    for(var i=0;i<str.length;i++) {
        var code = str[i].charCodeAt() + ind
        ans += String.fromCharCode(code)
    }
    return ans;
}

console.log(encodeString("neogcamp", 2))
