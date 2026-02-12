import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username must be sent"],
    unique: [true, "Username already taken"],
  },
  email: {
    type: String,
    required: [true, "Email must be sent"],
    unique: [true, "This email is already used"],
  },
  password: {
    type: String,
    required: [true, "Password must be sent"],
    unique: false,
  },
  gender: {
    type: String,
    required: false,
    unique: false,
  },
  phonenumber: {
    type: Number,
    required: false,
    unique: false,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  address: {
    type: String,
    required: false,
    unique: false,
  },
  role: {
    type: String,
    enum: ["user", "admin", "seller"],
    default: "user",
  },
});

export const User = mongoose.model("User", userSchema);
