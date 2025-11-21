import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
       type: "string",
         required: true
    },
    email: {
    type: "string",
    required: true
    },
   password: {
    type: "string",
    required: true
   },
   gender: {
    type: "string",
    required: false
   },
   age:{
    type:"number",
    required: false
   }
})


export const User = mongoose.model("User", userSchema)
