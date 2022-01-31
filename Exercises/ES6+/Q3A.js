const hello = () => "Hello"
const welcome = () => "Welcome"
const [Hello = hello(), Welcome = welcome()] = ["Namaste"]    // Hello:"Hello" , Welcome:"Welcome" = "Namastae"
console.log(Hello, Welcome)

// Output:  Namaste Welcome