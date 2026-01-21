let data = {
    email: "something@gmail.com",
    password: "Helloww",
    age: 200,
    gender: "Male"
}

const hashedPassword = "$984392738947298437 2348927349"

data = {
    ...data, //rest
    password: hashedPassword
}
console.log(data)
