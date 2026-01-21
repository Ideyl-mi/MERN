import mongoose from "mongoose";
import { MONGODB_URL } from "./env.js";

export const connectDB = async () => {
  try {
    console.log(MONGODB_URL);
    const result = await mongoose.connect(MONGODB_URL);
    {
      result
        ? console.log("Mongo DB connected")
        : console.log("Database Connection Error");
    }
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};
