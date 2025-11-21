 const a = 10

if(a < 10){ //if, else if, else = statement, () =  condition, {} = block meaning if the condition is satisfied the block should be executed
 console.log(true)
 }
 else if(a == 10){ //Single = indicates the value is same or equal whereas == checks if the datattype is also same
 console.log("Equal")
 }
 else{
 console.log(false)
}



const data = {
 email: "email@gmail.com",
 password:"Hello@123",
}

const userInput = "email@gmail.com"
const userInput2 = "Hello@12"

//Nested if else statement/ condition
if(data.email == userInput){ //First the program checks if the user email is correct or not. 
 if(data.password == userInput2){
 console.log("Access Granted")
 }
 else{
 console.log("Invalid Password")
 }
}
else{
console.log("Invalid Email")
}

const data2 = {
     email: "email@gmail.com",
     password:"Hello@123",
     isVerified: true,
 }
 const userInput3 = "email@gmail.com"
 const userInput4 = "Hello@123"

   if(data.email == userInput3){
   if(data.password == userInput4){
     if(!data.isVerified){//! in js is always false
         console.log("User not verified")
     }
     else{
         console.log("Access Granted")
     }
   }
   else{
     console.log("Invalid Password")
   }
 }
 else{
     console.log("Invalid Email")
}