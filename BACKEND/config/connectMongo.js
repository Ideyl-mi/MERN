import mongoose from "mongoose"

export const connectDatabase = async() => {
    try {
        const test = await mongoose.connect("mongodb://localhost:27017");
        console.log(test)
        console.log("Database Connected Successfully")
    } catch (error) {
        console.log(error.message)
    }
}

connectDatabase()
