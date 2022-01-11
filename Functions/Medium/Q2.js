const indexOf = (arr, element) => {
    for(var i=0; i<arr.length;i++) {
        if (arr[i] === element) return i;
    }
}

console.log(indexOf([1,6,3,5,8,9], 3));