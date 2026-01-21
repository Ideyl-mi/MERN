import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username must be sent"],
        unique: [true,"Username already taken"]
    },
    email: {
        type: String,
        required: [true, "Email must be sent"],
        unique: [true, "This email is already used"]
    },
    password: {
        type: String,
        required: [true, "Password must be sent"],
        unique: false
    },
    gender: {
        type: String,
        required: false,
        unique: false
    },
    phonenumber: {
        type: Number,
        required: [true, "Phone no. must be sent"],
        unique: [true, "Phone no. already used"]
    },
    isVerified:{
        type: Boolean,
        required:[true],
        default:false
    },
    address: {
        type: String,
        required: [true, "Address must be sent"],
        unique: false
    }
});


export const User = mongoose.model("User", userSchema)
