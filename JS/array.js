const array = ["Yedi", "Jhyamba", "Lhomi"]; // Array of string 
//every value in array is seperated with index, index is denoted by [0], [1], [2]
//index is always started with 0
console.log(array[0],array[1],array[2])

const array2 = [{name : "Yedi", message : "Hello"}, {name : "Ram", message : "Hi"}]//array of objects cuz of curly brackets 

console.log(array2[0].name)

let name= ["Yedi", "Sita" ]// js stores two value yedi and sita
name.push("Hari");//pushed hari to array "name" update name array with 3 value, yedi sita and hari
name.unshift("Sita");//unshift adds an element to the front of the array
name.pop(); //pop removes the last element of an array

console.log(name)

const student = ["Yedi", "Ram", "Hari", "Sita"]
const check = student.includes("Ram")
console.log(check)

console.log(student.reverse())//it reverses the order in which the strings are inputted in array

console.log(student.join())//join converts array into string
const name2 = ["RAM", "SITA"]
console.log(name2.join());
const string = name2.join()
console.log(string.split())//split converts string into array

const name3 = ["RAM"]
const string2 = name3.join("")
const array3 = string2.split("")
const reversedarray = array3.reverse()
const string4 = reversedarray.join("")
//console.log(string4)
console.log(`The reverse of ${name3} is ${string4}`)

const array93 = ["Car", "Bus", "Van", "bike"]

const test = array93.map((value, index)=>{ 
    //in map method of array we have 2 parameters first one contains value/element and second one containes index
    // and second one contains index
    //the value in map contains each elements record

    console.log(value)
    console.log(index)
})

const array20 = [1,2,3,4,5,6,7,8,9,10];


//In map method of array we have two parameters first one contains value/element 
// and second one contains index 
// The value in map contains each elements record
const test2 = array20.map((value, index)=>{
   
   const table = value * 2 
   //Here the using map method the value stores each elements from the array separately and
   //muliplies each value with two. i.e 1 * 2, 2 * 2 


   console.log(`2 x ${value}  = ${table}`)
})


const array23=["Ram","Hari","Sita","Saiko"]

const test3=array23.filter((value, index)=>{
    const logic = value.includes("a")
    return logic 
    
        
})
console.log(test3.join())
