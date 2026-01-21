//const a = 10;
//const name = "Ram"

//const b = (a>5 ? console.log(true) : console.log(false));
// in ternary operator ? indicates if and : indicates else 
//const c = (name.length == 3 ? console.log(true) : console.log(false));

const data = {
    email : "email@gmail.com",
    password : "Passwordd"
}

const userinput = "email@gmail.com"
const userinput2 = "Passwordd"

const check = (
    data.email == userinput ? 
    data.password == userinput2 ? console.log ("Access Granted") : console.log ("Invalid Password") 
    : console.log("Invalid Email")
)




