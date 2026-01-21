//An object is the pair of key an object can contain more than one variable
// () is used to define or call functions, assign arguments and group expressions
// {} is used to define arrays, assign values and specify index
// [] is used to define blocks, declare objects and assign expressions in template literals

let data = {
    name : "Yedi", // here name is key and "Yedi" is a value assigned 
    age : 19,
    address : "Kathmandu"
}
console.log(data.name) 
delete data.name //deletes name and returns age and address in console

console.log(data.name)