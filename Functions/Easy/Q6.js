const typeOfTriangle = (a,b,c) => {
    if(a + b + c > 180) 
        return "Not Triangle";
    else if (a === b && b === c) 
        return "Equilateral Triangle";
    else if ( a !== b && b!== c )
        return "Scalene Triangle";
    else if (a!==b || b!==c || a!=c )
        return "Isosceles Triangle";
}

console.log(typeOfTriangle(45,45,90))
